import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { login, reset } from "../../Slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

  const handlerSubmit = (e) => {
    e.preventDefault();

    const user = {
      Email: email,
      Password: password,
    };

    dispatch(login(user));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div className={styles.login}>
      <h2>Entrar no TwitterClone</h2>
      <form onSubmit={handlerSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {!loading && <input type="submit" value="Cadastrar" />}
        {loading && <input type="submit" value="Aguarde..." disabled />}
      </form>
      <p>
        Ainda não tem conta? <Link to="/register">Clique aqui</Link>
      </p>
    </div>
  );
};

export default Login;
