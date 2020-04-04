import React from 'react'
import './CardListStyles.css'
import Card from '../card/Card'

function CardList(props) {
    // console.log(props)
    return (
        <div>
            <div className="card-list">
                {
                    props.monsters.map(monster =>
                        <Card key={monster.id} monster={monster}>
                        </Card>
                    )
                }
            </div>
        </div>
    )
}

export default CardList
