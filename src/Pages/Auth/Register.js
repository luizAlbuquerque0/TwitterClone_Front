import styles from "./Auth.module.css";

import { Link } from "react-router-dom";

import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className={styles.register}>
      <h2>Cadastre-se no TwitterClone</h2>
      <form>
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
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui</Link>
      </p>
    </div>
  );
};

export default Register;
