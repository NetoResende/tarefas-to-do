import style from "./styles.module.css";

export function Cycles() {
  return (
    <div className={style.cycles}>
      <span>Ciclos:</span>
      <div className={style.cyclesContents}>
        <span className={`${style.cycle} ${style.cycleWorkTime}`}></span>
        <span className={`${style.cycle} ${style.cycleBreakTime}`}></span>
        <span className={`${style.cycle} ${style.cycleWorkTime}`}></span>
        <span className={`${style.cycle} ${style.cycleBreakTime}`}></span>
        <span className={`${style.cycle} ${style.cycleWorkTime}`}></span>
        <span className={`${style.cycle} ${style.cycleBreakTime}`}></span>
        <span className={`${style.cycle} ${style.cycleWorkTime}`}></span>
        <span className={`${style.cycle} ${style.cycleBreakLongTime}`}></span>
      </div>
    </div>
  );
}
