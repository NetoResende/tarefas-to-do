import style from "./styles.module.css";

type DefaultButtonProps = {
  icon: React.ReactNode,
  cor?: 'red'|'green',
} & React.ComponentProps<'button'>;

export function DefaultButton({icon, cor='green', ...props}: DefaultButtonProps) {
  return <button className={`${style.button} ${style[cor]}`} {...props} >{icon}</button>;
}
