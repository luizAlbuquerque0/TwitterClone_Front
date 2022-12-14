import LikeContainer from "./LikeContainer";
import styles from "./Post.module.css";
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, editPost, resetMessage } from "../Slices/postSlice";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Post = ({ post, user, profile }) => {
  const [content, setContent] = useState(post.content);

  const updateForm = useRef();

  const dispatch = useDispatch();

  const { user: userAuth } = useSelector((state) => state.auth);

  const showOrHideForms = () => {
    updateForm.current.classList.toggle("hide");
  };

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedPost = {
      content,
      id: post.id,
    };

    dispatch(editPost(updatedPost));
    showOrHideForms();
    resetComponentMessage();
  };
  return (
    <div className={styles.post}>
      <div className={styles.test}>
        <NavLink to={`/users/${post.ownerId}`}>
          <img
            className={styles.img}
            src={post.owenerProfilePic}
            alt={post.ownerName}
          />
        </NavLink>

        <div>
          <div className={styles.title}>
            <NavLink to={`/users/${post.ownerId}`}>
              <h2>{post.ownerName}</h2>
            </NavLink>
            <p>{post.createdAt}</p>
          </div>
          <p className={styles.content}>{post.content}</p>
          <div className={styles.actions}>
            <LikeContainer post={post} user={user} />
            <NavLink to={`/posts/${post.id}`}>
              <BsFillEyeFill />
            </NavLink>
            {profile && post.ownerId === userAuth.id && (
              <>
                <BsPencilFill onClick={showOrHideForms} />
                <BsXLg onClick={handleDelete} />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="hide post_update" ref={updateForm}>
        <form onSubmit={handleUpdate}>
          <label>
            <span>Conte??do</span>
            <input
              type="text"
              onChange={(e) => setContent(e.target.value)}
              value={content || ""}
            />
          </label>
          <input type="submit" value="Editar" />
        </form>
        <button className="cancel-btn" onClick={showOrHideForms}>
          Cancelar edi????o
        </button>
      </div>
    </div>
  );
};

export default Post;
