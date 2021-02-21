import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import { ImEarth } from 'react-icons/im'
import { CgGhostCharacter } from 'react-icons/cg'
import { FaPuzzlePiece } from 'react-icons/fa'

import './Cards.scss'

const Cards = ({ type }) => {
    return (
        <Link to={type}>
            <Card style={{ width: '18rem' }} className="card-container">
                <Card.Body>
                    <Card.Title>{ type }</Card.Title>
                    {
                        type === 'Episodes' 
                            ? <FaPuzzlePiece /> : type === 'Characters' ? <CgGhostCharacter /> : <ImEarth />
                    } 
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Cards