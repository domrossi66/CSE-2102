import React from 'react';
import Button from 'react-bootstrap/Button';

export interface Props {
    length: number;
    title: string;
}

function ListPage ({length, title= "My List"}: Props) {
    // retun <div><h1>{title} - length</h1></div>
    return <Button variant="outline-primary" size = "lg">My Button</Button>;
}

export default ListPage;