import { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";

const Checkbox = ({ label, handleChange }) => {
  const checkboxRef = useRef(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.style.backgroundColor = "white";
      checkboxRef.current.style.backgroundSize = "contain";
      checkboxRef.current.style.backgroundPosition = "center";
      checkboxRef.current.style.backgroundRepeat = "no-repeat";
      checkboxRef.current.style.boxShadow = "none";
      checkboxRef.current.style.border = "1px solid black";
      checkboxRef.current.style.borderRadius = 0;
    }
  }, []);

  return (
    <Form.Group className="d-flex align-content-center my-1">
      <Form.Check
        type="checkbox"
        ref={checkboxRef}
        onChange={(e) => {
          handleChange && handleChange();
          setChecked(() => !checked);
          e.target.style.backgroundColor = e.target.checked ? "black" : "white";
          e.target.style.backgroundImage = e.target.checked
            ? 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M20.285 6.321l-1.412-1.414-9.151 9.154-4.24-4.242-1.415 1.414 5.655 5.657z"/></svg>\')'
            : "none";
        }}
        checked={checked}
      />
      <Form.Label
        className="fw-bold"
        style={{ fontSize: "1rem", color: "black" }}
      >
        &nbsp;&nbsp;{label}
      </Form.Label>
    </Form.Group>
  );
};

export default Checkbox;
