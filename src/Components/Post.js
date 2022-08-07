import LikeContainer from "./LikeContainer";
import styles from "./Post.module.css";
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deletePost, editPost } from "../Slices/postSlice";
import { useRef, useState } from "react";

const Post = ({ post, user, profile }) => {
  const [content, setContent] = useState(post.content);

  const updateForm = useRef();

  const dispatch = useDispatch();

  const showOrHideForms = () => {
    updateForm.current.classList.toggle("hide");
  };

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(editPost(content));
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
            <BsPencilFill onClick={showOrHideForms} />
            <BsXLg onClick={handleDelete} />
          </>
        )}
      </div>
      <div className="hide post_update" ref={updateForm}>
        <form onSubmit={handleUpdate}>
          <label>
            <span>Conteúdo</span>
            <input
              type="text"
              onChange={(e) => setContent(e.target.value)}
              value={content || ""}
            />
          </label>
          <input type="submit" value="Editar" />
        </form>
        <button className="cancel-btn" onClick={showOrHideForms}>
          Cancelar edição
        </button>
      </div>
    </div>
  );
};

export default Post;
