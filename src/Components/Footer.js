import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        TwitterCone &copy; 2022{" "}
        <a href="https://devluizalbuquerque.com/">
          Desenvolvido por Luiz Albuquerque
        </a>
      </p>
    </footer>
  );
};

export default Footer;
