import styles from "./Auth.module.css";

import { useState } from "react";

import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit = () => {};

  return (
    <div className={styles.login}>
      <h2>Entrar no TwitterClone</h2>
      <form onSubmit={handlerSubmit}>
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

        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Ainda não tem conta? <Link to="/register">Clique aqui</Link>
      </p>
    </div>
  );
};

export default Login;
