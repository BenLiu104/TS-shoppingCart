import React from 'react';
import { Card } from 'react-bootstrap';
import formatCurrency from '../utilities/formatCurrency';

interface item {
  id: number;
  name: string;
  price: number;
  imgURL: string;
}

export default function StoreItem({ id, name, price, imgURL }: item) {
  return (
    <>
      <Card>
        <Card.Img src={imgURL} height="250" style={{ objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-end mb-4">
            <span className="fs-2">{name}</span>
            <span className="text-muted">{formatCurrency(price)}</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
