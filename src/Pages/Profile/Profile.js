import styles from "./Profile.module.css";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { gettAllUserPosts } from "../../Slices/postSlice";
import Post from "../../Components/Post";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(gettAllUserPosts(id));
  }, [dispatch, id]);

  return (
    <div className={styles.profile}>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => (
          <Post
            key={post.id}
            userName={post.ownerName}
            content={post.content}
            createdAt={post.createdAt}
          />
        ))}
    </div>
  );
};

export default Profile;
