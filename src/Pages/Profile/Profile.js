import styles from "./Profile.module.css";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { gettAllUserPosts } from "../../Slices/postSlice";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(gettAllUserPosts(id));
  }, [dispatch, id]);

  if (posts && posts.length > 0) {
    console.log(posts);
  }

  return (
    <div>
      <h2>{id}</h2>
    </div>
  );
};

export default Profile;
