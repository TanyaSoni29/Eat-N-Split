import React from "react";

function Friend({ friend, setSelectedFriend, selectedFriend, setAddFormOpen }) {

  const handleSelect = (friend) => {
    setSelectedFriend(currentlySelectedFriend => currentlySelectedFriend?.id === friend.id ? null : friend);
    setAddFormOpen(false)
  };
  return (
    <li className={selectedFriend?.id === friend.id ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even.</p>}
      <button onClick={() => handleSelect(friend)} className="button">
        {selectedFriend?.id !== friend.id ? "Select" : "Close"}
      </button>
    </li>
  );
}

export default Friend;
