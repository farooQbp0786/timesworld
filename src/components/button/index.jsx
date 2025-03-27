import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({ onClick, label, className }) => {
  return (
    <Button variant="dark" onClick={onClick} style={{ borderRadius: 0 }} className={className}>
      {label}
    </Button>
  );
};

export default CustomButton;
