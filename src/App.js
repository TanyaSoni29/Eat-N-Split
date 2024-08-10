import { useState } from "react";
import AddFriendForm from "./components/AddFriendForm";
import BillSplitCalci from "./components/BillSplitCalci";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [newFriend, setNewFriend] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSplitBill = (value) => {
    setNewFriend(friends =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          newFriend={newFriend}
          setSelectedFriend={setSelectedFriend}
          selectedFriend={selectedFriend}
          setAddFormOpen={setAddFormOpen}
        />
        {addFormOpen && (
          <AddFriendForm
            setNewFriend={setNewFriend}
            setAddFormOpen={setAddFormOpen}
          />
        )}
        <button
          className="button"
          onClick={() => setAddFormOpen((prev) => !prev)}
        >
          {addFormOpen ? "Close" : "Add Friend"}
        </button>
      </div>
      {selectedFriend && (
        <BillSplitCalci
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
