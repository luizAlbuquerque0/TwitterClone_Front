import styles from "./Home.module.css";

import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAPost, getAllPosts } from "../../Slices/postSlice";
import { getUserById } from "../../Slices/userSlice";

import Post from "../../Components/Post";
import LikeContainer from "../../Components/LikeContainer";

const Home = () => {
  const [tweetContent, setTweetContent] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { user: userAuth } = useSelector((state) => state.auth);
  const { posts, loadgin } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getUserById(userAuth.id));
  }, []);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const handleSubmit = (e) => {
    if (!tweetContent.length > 0) {
      setMessage("O conteudo do tweet deve ser preenchido");
      return;
    }

    const post = {
      content: tweetContent,
      idOwner: userAuth.id,
      ownerName: user.fullName,
    };
    dispatch(createAPost(post));
  };

  return (
    <div className={styles.home}>
      <h2>Página Inicial</h2>
      <div className={styles.tweetar}>
        <textarea
          placeholder="O que está acontecendo?"
          onChange={(e) => setTweetContent(e.target.value)}
          maxLength="150"
        />
        <button onClick={handleSubmit}>tweetar</button>
      </div>
      <div>
        {posts &&
          posts.map((post) => (
            <>
              <Post key={post.id} post={post} userAuth={userAuth} />
            </>
          ))}
      </div>
    </div>
  );
};

export default Home;
