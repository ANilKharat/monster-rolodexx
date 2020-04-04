import React, { Component } from 'react'
import CardList from './card-list/CardList'
import SearchBox from './search-box/SearchBox'

export class First extends Component {
    constructor(props) {
        super(props)

        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }))
    }

    handleChange = (e) => {
        this.setState({
            searchField: e.target.value
        })
    }

    render() {
        const { monsters, searchField } = this.state
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div>
                <h1>Monster Rolodex</h1>
                {/* <input type='search'
                 placeholder="Search monster"
                 onChange={ e=> this.setState({ searchField : e.target.value})} /> */}
                <SearchBox
                    placeholder="Search monster"
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        )
    }
}

export default First
