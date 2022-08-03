import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//redux
import { register, reset } from "../../Slices/authSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("As senhas devem ser iguais");
      return;
    }

    const user = {
      Fullname: name,
      Email: email,
      Password: password,
    };

    dispatch(register(user));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div className={styles.register}>
      <h2>Cadastre-se no TwitterClone</h2>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassword || ""}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {!loading && <input type="submit" value="Cadastrar" />}
        {loading && <input type="submit" value="Aguarde..." disabled />}
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui</Link>
      </p>
    </div>
  );
};

export default Register;
