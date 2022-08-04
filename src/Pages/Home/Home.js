import styles from "./Home.module.css";

import { useRef, useState } from "react";

const Home = () => {
  const [tweetContent, setTweetContent] = useState();

  return (
    <div className={styles.home}>
      <h2>Página Inicial</h2>
      <div className={styles.tweetar}>
        <textarea
          placeholder="O que está acontecendo?"
          onChange={(e) => setTweetContent(e.target.value)}
          maxLength="150"
        />
        <button>tweetar</button>
      </div>
    </div>
  );
};

export default Home;
