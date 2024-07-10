interface InputFormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => {};
  header?: string;
  submitLabel?: string;
}

function InputForm({
  children,
  onSubmit,
  header,
  submitLabel = "Submit",
}: InputFormProps) {
  return (
    <form onSubmit={onSubmit} className="input-form">
      {header && <h4>{header}</h4>}
      {children}
      <button type="submit">{submitLabel}</button>
    </form>
  );
}

export default InputForm;
