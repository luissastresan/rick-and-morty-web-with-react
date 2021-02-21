import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCharacters } from '../services/getData'
import Card from 'react-bootstrap/Card'

import './CharactersPage.scss'

const CharactersPage = ({ characters, addCharacters }) => {

    if (characters === undefined) characters = [{ name: 'hola' }]

    useEffect(() => {
        getCharacters().then(res => addCharacters(res))
    }, [addCharacters])

    const renderCardCharacters = (characterObject) => {
        const { id, name, status, species, gender, image } = characterObject
        return (
            <Card style={{ width: '18rem' }} className="card-container" key={id}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div id="info-container-character">
                        <figure>
                            <img src={image} alt={image} />
                        </figure>
                        <div>
                            <p>{status}</p>
                            <p>{species}</p>
                            <p>{gender}</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div className="characters-cards-container">
            {
                characters.map(character => renderCardCharacters(character))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCharacters: value => {
            dispatch({
                type: 'ADD_CHARACTERS',
                payload: value
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage)