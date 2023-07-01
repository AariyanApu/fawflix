export default function Input({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      className="input_field"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
