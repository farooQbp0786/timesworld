import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const FilterTabs = ({ setRegion }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="mb-3" expanded={expanded}>
      <Container>
        <Navbar.Toggle 
          aria-controls="filter-navbar" 
          onClick={() => setExpanded(expanded ? false : true)}
        />

        <Navbar.Collapse id="filter-navbar">
          <Nav className="ms-auto" variant="underline" defaultActiveKey="all">
            <Nav.Item>
              <Nav.Link 
                eventKey="all" 
                className="text-dark fw-bold" 
                onClick={() => {
                  setRegion("all");
                  setExpanded(false);
                }}
              >
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                eventKey="asia" 
                className="text-dark" 
                onClick={() => {
                  setRegion("Asia");
                  setExpanded(false);
                }}
              >
                Asia
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                eventKey="europe" 
                className="text-dark" 
                onClick={() => {
                  setRegion("Europe");
                  setExpanded(false);
                }}
              >
                Europe
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FilterTabs;
