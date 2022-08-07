import LikeContainer from "./LikeContainer";
import styles from "./Post.module.css";

const Post = ({ post, userAuth }) => {
  return (
    <div className={styles.post}>
      <div className={styles.title}>
        <h2>{post.ownerName}</h2>
        <p>{post.createdAt}</p>
      </div>
      <div className={styles.body}>
        <p className={styles.content}>{post.content}</p>
        <LikeContainer post={post} user={userAuth} />
      </div>
    </div>
  );
};

export default Post;
