import styles from "./Profile.module.css";

import { BsFillGeoAltFill, BsCalendarFill, BsTwitter } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { gettAllUserPosts } from "../../Slices/postSlice";
import { getUserById, updateUser } from "../../Slices/userSlice";
import Post from "../../Components/Post";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [description, setDescription] = useState();
  const [birthDate, setBirthDate] = useState();
  const [homeTown, setHomeTown] = useState();
  const [profileImage, setProfileImage] = useState();
  const [previewImage, setPriviewImage] = useState();

  const {
    posts,
    loading: postLoading,
    message: postMessage,
  } = useSelector((state) => state.post);
  const { user, loading, message } = useSelector((state) => state.user);

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

  const handleFile = (e) => {
    const image = e.target.files[0];
    setPriviewImage(image);
    setProfileImage(image);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const user = {
      Id: id,
      Description: description,
      BirthDate: birthDate,
      HomeTown: homeTown,
      ProfilePic: profileImage,
    };
    dispatch(updateUser(user));
    showOrHideForms();
  };

  const handleIniciateEdit = (user) => {
    setDescription(user.description);
    setBirthDate(user.birthDate);
    setHomeTown(user.homeTown);
    showOrHideForms();
    if (user.profilePic) {
      setProfileImage(user.profilePic);
    }
  };
  return (
    <div className={styles.profile}>
      {user && (
        <div className={styles.userDetails}>
          <div className={styles.user}>
            <img
              className={styles.prifileImg}
              src={user.profilePic}
              alt={user.fullName}
            />
            <h2>{user.fullName}</h2>
          </div>

          <h3>{user.description}</h3>
          <div className={styles.data}>
            <p>
              <BsFillGeoAltFill />
              {user.homeTown}
            </p>
            <p>
              <BsCalendarFill />
              Nascido(a) em {user.birthDate.split("-").reverse().join("/")}
            </p>
          </div>
          <p>
            <BsTwitter />
            Mebro desde {user.createdAt}
          </p>
          <button
            className={styles.btn}
            ref={updateProfilebtn}
            onClick={() => handleIniciateEdit(user)}
          >
            Editar perfil
          </button>
          <div className={(styles.UpdateForm, "hide")} ref={updateForm}>
            <form onSubmit={handleUpdate}>
              {previewImage && (
                <img
                  className={styles.image}
                  src={URL.createObjectURL(previewImage)}
                  alt={user.name}
                />
              )}
              <label>
                <span>Foto de perfil</span>
                <input type="file" onChange={(e) => handleFile(e)} />
              </label>
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
            </form>
            <button className="cancel-btn" onClick={showOrHideForms}>
              Cancelar edição
            </button>
          </div>
        </div>
      )}
      {posts &&
        posts.length > 0 &&
        posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            profile={true}
            user={user}
            message={postMessage}
          />
        ))}
    </div>
  );
};

export default Profile;
