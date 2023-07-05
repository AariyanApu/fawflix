export default function Input({ placeholder, value, onChange, error, url }) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      url={url}
      type="text"
      className="input_field"
    />
  );
}
