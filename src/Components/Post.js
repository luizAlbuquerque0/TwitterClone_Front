import LikeContainer from "./LikeContainer";
import styles from "./Post.module.css";
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deletePost } from "../Slices/postSlice";

const Post = ({ post, user, profile }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <div className={styles.post}>
      <div className={styles.title}>
        <h2>{post.ownerName}</h2>
        <p>{post.createdAt}</p>
      </div>
      <p className={styles.content}>{post.content}</p>
      <div className={styles.actions}>
        <LikeContainer post={post} user={user} />
        <BsFillEyeFill />
        {profile && post.fullName === user.ownerName && (
          <>
            <BsPencilFill />
            <BsXLg onClick={handleDelete} />
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
