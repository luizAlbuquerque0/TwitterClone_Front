import styles from "./Post.module.css";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostById } from "../../Slices/postSlice";
import { Link } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { post, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostById(id));
  }, [id]);

  console.log(post);

  if (loading) {
    return <p>Carregando...</p>;
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
              <form>
                <input type="text" placeholder="Insira seu comentário..." />
                <input type="submit" value="Enviar" />
              </form>
              {post.comments.length === 0 && <p>Não há comentários...</p>}
              {post.comments.map((comment) => (
                <div className="comment">
                  <div className="author">
                    {comment.ownerProfilePic && (
                      <img
                        src={comment.ownerProfilePic}
                        alt={comment.postOwner}
                      />
                    )}
                    <Link to={`/users/${comment.userId}`}>
                      <p>{comment.userName}</p>
                    </Link>
                  </div>
                  <p>{post.comment}</p>
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
