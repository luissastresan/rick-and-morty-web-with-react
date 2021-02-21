import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getEpisodes } from '../services/getData'
import Card from 'react-bootstrap/Card'

import './EpisodesPage.scss'

const EpisodesPage = ({ episodes, addEpisodes }) => {

    if (episodes === undefined) episodes = [{ name: 'hola' }]

    useEffect(() => {
        getEpisodes().then(res => addEpisodes(res))
    }, [addEpisodes])

    const renderCardEpisodes = (episodeObject) => {
        const { id, name, episode, air_date } = episodeObject
        getCharactersOfEpisode(["1234", "1234", "1234", "1234"])
        return (
            <Card style={{ width: '18rem' }} className="card-container" key={id}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{air_date}</p>
                    <p>{episode}</p>
                </Card.Body>
            </Card>
        )
    }

    const getCharactersOfEpisode = (URLCharactersArray) => {
        let idArray = []

        URLCharactersArray.forEach(character => {
            let idCharacter = character.substr(character.length - 1)
            idArray.push(idCharacter)
        });
        console.log(idArray)
    }

    return (
        <div className="episodes-cards-container">
            {
                episodes.map(episode => renderCardEpisodes(episode))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        episodes: state.episodes.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEpisodes: value => {
            dispatch({
                type: 'ADD_EPISODES',
                payload: value
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesPage)