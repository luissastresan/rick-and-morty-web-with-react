import React from 'react'
import Courosel from '../components/Courosel/Courosel'
import Header from '../components/Header/Header'
import ListOfCards from '../components/ListOfCards/ListOfCards'

const MainPage = () => {
    return (
        <div className="App">
            <Header />
            <div>
                <Courosel />
                <ListOfCards />
            </div>
        </div>
    )
}

export default MainPage