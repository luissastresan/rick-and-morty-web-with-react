import React from 'react'
import Cards from '../Cards/Cards'

import './ListOfCards.scss'

const ListOfCards = () => {
    return (
        <div className="card-container">
            <Cards type={'Episodes'} />
            <Cards type={'Characters'} />
            <Cards type={'Locations'} />
        </div>
    )
}

export default ListOfCards