type DefaultInputProps = {
  id: string
} & React.ComponentProps<'input'>; // interceção: & React.ComponentProps<'Input'> com meu typo criado; 

export function DefaultInput({id, type}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>task component Input</label>
      <input id={id} type={type} />
    </>
  );
}
