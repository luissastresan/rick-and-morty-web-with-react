import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getLocations } from '../services/getData'
import Card from 'react-bootstrap/Card'

import './LocationsPage.scss'

const LocationsPage = ({ locations, addLocations }) => {

    if (locations === undefined) locations = [{ name: 'hola' }]

    useEffect(() => {
        getLocations().then(res => addLocations(res))
    }, [addLocations])

    const renderCardLocations = (locationObject) => {
        const { id, name, type, dimension } = locationObject
        return (
            <Card style={{ width: '18rem' }} className="card-container" key={id}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{type}</p>
                    <p>{dimension}</p>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div className="location-cards-container">
            {
                locations.map(location => renderCardLocations(location))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        locations: state.locations.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLocations: value => {
            dispatch({
                type: 'ADD_LOCATIONS',
                payload: value
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage)