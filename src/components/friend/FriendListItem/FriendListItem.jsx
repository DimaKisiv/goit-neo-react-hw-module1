import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const statusClassName = clsx(css.friendStatus, isOnline ? css.online : css.offline);
  console.log(statusClassName);
  return (
    <div className={css.friendListItem}>
      <img className={css.friendImage} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={statusClassName}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
