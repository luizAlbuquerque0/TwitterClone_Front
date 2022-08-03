import styles from "./Profile.module.css";

import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>{id}</h2>
    </div>
  );
};

export default Profile;
