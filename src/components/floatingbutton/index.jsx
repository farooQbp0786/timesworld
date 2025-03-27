import React from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../../services/authproviders";

const FloatingButton = () => {
    const { logout } = useAuth()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Button
        onClick={logout}
        className="border border-1 rounded-circle position-fixed"
        style={{ bottom: "15px", right: "25px", backgroundColor: 'grey', width: '40px', height: '40px', alignItems: 'center', justifyContent: 'center' }}
      >
        <i className="fas fa-sign-out fa-sm"></i>
      </Button>
      <Button
        onClick={scrollToTop}
        className="d-none d-md-flex border border-1 rounded-circle position-fixed"
        style={{ bottom: "60px", right: "25px", backgroundColor: 'grey', width: '40px', height: '40px', alignItems: 'center', justifyContent: 'center' }}
      >
        <i className="fas fa-arrow-up fa-md"></i>
      </Button>
    </>
  );
};

export default FloatingButton;
