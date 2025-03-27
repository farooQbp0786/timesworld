import React from 'react'
import { Card } from 'react-bootstrap';

const CountryCard = ({ name, region, flag }) => (
    <Card className="p-1 mb-3 border-2 border-dark" style={{ borderRadius: 0 }}>
      <Card.Body className="d-flex align-items-center">
        <img src={flag} alt={name} style={{ width: 100, height: 60, objectFit: 'cover', marginRight: 10 }} />
        <div>
          <Card.Title className="mb-0" style={{ fontSize: '1.2rem' }}>{name}</Card.Title>
          <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>{region}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );

export default CountryCard