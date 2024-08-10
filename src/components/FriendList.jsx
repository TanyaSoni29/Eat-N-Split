import React, { useState } from "react";
import Friend from "./Friend";

function FriendList({
  newFriend,
  setSelectedFriend,
  selectedFriend,
  setAddFormOpen,
}) {
  console.log(newFriend);
  return (
    <ul>
      {newFriend.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          setSelectedFriend={setSelectedFriend}
          selectedFriend={selectedFriend}
          setAddFormOpen={setAddFormOpen}
        />
      ))}
    </ul>
  );
}

export default FriendList;
