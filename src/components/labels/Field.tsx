import "./Field.scss";

interface FieldProps {
  field?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string;
}

const Field = ({
  field,
  name,
  placeholder,
  value,
  onchange,
  type,
  error,
}: FieldProps) => {
  return (
    <div className="field-container">
      <label>{field}</label>
      <input
        type={type}
        name={name}
        className="input-field inner-shadow-top"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
      {error && <p className="invalidInputText">{error}</p>}
    </div>
  );
};

export default Field;
