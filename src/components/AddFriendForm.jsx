import React, { useState } from "react";

function AddFriendForm({ setNewFriend, setAddFormOpen }) {
  const [friendName, setFriendName] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/48?");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!friendName || !imgUrl) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: friendName,
      image: `${imgUrl}?=${id}`,
      balance: 0,
    };

    setNewFriend((prev) => [...prev, newFriend]);

    setFriendName("");
    setImgUrl("https://i.pravatar.cc/48?");
    setAddFormOpen(false);

    console.log(newFriend);
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friendName">👫 Friend name</label>
      <input
        type="text"
        value={friendName}
        id="friendName"
        onChange={(e) => setFriendName(e.target.value)}
      />
      <label htmlFor="imgUrl">🌆 Image URL</label>
      <input
        type="text"
        value={imgUrl}
        id="imgUrl"
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
}

export default AddFriendForm;
