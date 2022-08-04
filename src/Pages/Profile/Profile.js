import styles from "./Profile.module.css";

import { BsFillGeoAltFill, BsCalendarFill, BsTwitter } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { gettAllUserPosts } from "../../Slices/postSlice";
import { getUserById } from "../../Slices/userSlice";
import Post from "../../Components/Post";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [description, setDescription] = useState();
  const [birthDate, setBirthDate] = useState();
  const [homeTown, setHomeTown] = useState();

  const { posts, loading: postLoading } = useSelector((state) => state.post);
  const { user, loading } = useSelector((state) => state.user);

  const updateForm = useRef();
  const updateProfilebtn = useRef();

  useEffect(() => {
    dispatch(gettAllUserPosts(id));
    dispatch(getUserById(id));
  }, [dispatch, id]);

  const showOrHideForms = () => {
    updateForm.current.classList.toggle("hide");
    updateProfilebtn.current.classList.toggle("hide");
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const data = {
      description,
      birthDate,
      homeTown,
    };

    console.log(data);
  };

  return (
    <div className={styles.profile}>
      {user && (
        <div className={styles.userDetails}>
          <h2>{user.fullName}</h2>
          <h3>{user.description}</h3>
          <div className={styles.data}>
            <p>
              <BsFillGeoAltFill />
              {user.homeTown}
            </p>
            <p>
              <BsCalendarFill />
              Nascido(a) em {user.birthDate}
            </p>
          </div>
          <p>
            <BsTwitter />
            Mebro desde {user.createdAt}
          </p>
          <button
            className={styles.btn}
            ref={updateProfilebtn}
            onClick={showOrHideForms}
          >
            Editar perfil
          </button>

          <form
            onSubmit={handleUpdate}
            className={(styles.UpdateForm, "hide")}
            ref={updateForm}
          >
            <label>
              <span>Descrição</span>
              <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description || ""}
              />
            </label>
            <label>
              <span>Data de nascimento</span>
              <input
                type="date"
                onChange={(e) => setBirthDate(e.target.value)}
                value={birthDate || ""}
              />
            </label>
            <label>
              <span>Onde você mora</span>
              <input
                type="text"
                onChange={(e) => setHomeTown(e.target.value)}
                value={homeTown || ""}
              />
            </label>
            <input type="submit" value="Editar" />
            <button className="cancel-btn" onClick={showOrHideForms}>
              Cancelar edição
            </button>
          </form>
        </div>
      )}
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
