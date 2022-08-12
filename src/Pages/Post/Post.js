import styles from "./Post.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addComment, resetMessage } from "../../Slices/postSlice";
import { getPostById } from "../../Slices/postSlice";
import { Link } from "react-router-dom";
import { useResetMessage } from "../../hooks/useResetMessage";
import Message from "../../Components/Message";
import postService from "../../Services/postService";

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [comment, setComment] = useState();

  const { post, loading, message } = useSelector((state) => state.post);
  const { user: userAuth } = useSelector((state) => state.auth);

  const resetMessage = useResetMessage(dispatch);

  useEffect(() => {
    dispatch(getPostById(id));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postComment = {
      content: comment,
      idPost: id,
      idCommentOwner: userAuth.id,
    };

    dispatch(addComment(postComment));
    setComment("");
    resetMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (post.comments) {
    post.comments.map((comment) => {
      console.log(comment);
    });
  }

  return (
    <div>
      {post && (
        <div>
          <div>
            <img
              className={styles.img}
              src={post.ownerProfilePic}
              alt={post.postOwner}
            />
            <h1>{post.postOwner}</h1>
          </div>
          <h2>{post.content}</h2>
          <h3>post.createdAt</h3>
          {post.comments && (
            <>
              <h3>Comentários ({post.comments.length}):</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Insira seu comentário..."
                  onChange={(e) => setComment(e.target.value)}
                  value={comment || ""}
                />
                <input type="submit" value="Enviar" />
              </form>
              {message && <Message type="success" msg={message} />}
              {post.comments.length === 0 && <p>Não há comentários...</p>}
              {post.comments.map((comment) => (
                <div className="comment">
                  <div className="author">
                    <Link to="/">
                      <p>{comment.commentOwnerName}</p>
                    </Link>
                  </div>
                  <p>{comment.content}</p>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Post;
