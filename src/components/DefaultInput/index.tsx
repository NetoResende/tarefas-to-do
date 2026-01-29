import style from "./styles.module.css"

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">; // interceção: & React.ComponentProps<'Input'> com meu typo criado;

export function DefaultInput({ id, type, labelText, ...rest }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={style.input} id={id} type={type} {...rest}/>
    </>
  );
}
