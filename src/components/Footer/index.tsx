import style from "./styles.module.css";


export function Footer() {
  return (
    <div className={style.footer}>
      <a href="##">Entenda como funciona a técnica pomodoro</a>
      <a href="##">Chrono pomodoro &copy; {new Date().getFullYear()} - feito com carinho</a>
    </div>
  );
}