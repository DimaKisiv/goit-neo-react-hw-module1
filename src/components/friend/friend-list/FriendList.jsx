import css from "./FriendList.module.css";
import FriendListItem from "../friend-list-item/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
