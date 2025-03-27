import { Form } from "react-bootstrap";

const TextInput = ({ type, placeholder, onChange, value, name }) => (
    <Form.Control
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="border border-dark shadow-none p-2 my-2"
      style={{
        fontSize: "1rem",
        fontWeight: "bold",
        borderRadius: 0,
        borderWidth: 3,
      }}
    />
  );

  export default TextInput;