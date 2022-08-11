import styles from "./Message.css";

const Message = ({ msg, type }) => {
  const classname = "";
  if (type === success) {
    classname = styles.sucess;
  }

  return (
    <div className={classname}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
