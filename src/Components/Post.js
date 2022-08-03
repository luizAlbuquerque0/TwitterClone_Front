import styles from "./Post.module.css";

const Post = ({ userName, content, createdAt }) => {
  return (
    <div className={styles.post}>
      <div className={styles.title}>
        <h2>{userName}</h2>
        <p>{createdAt}</p>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Post;
