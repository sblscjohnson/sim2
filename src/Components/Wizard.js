import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
      name: 'Bob',
      address: '123 Yeet St',
      city: 'Columbus',
      state: 'Ohio',
      zipcode: 43210
    }
    
  }

  handleName(val) {
    this.setState({
      name: val
    })
    console.log(this.state.name)
  }

  handleAddress(val) {
    this.setState({
      address: val
    })
  }

  handleCity(val) {
    this.setState({
      city: val
    })
  }

  handleState(val) {
    this.setState({
      address: val
    })
  }

  handleZipcode(val) {
    this.setState({
      zipcode: val
    })
  }

  

  addHouse() {
    let bodyObj = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode
    }
    axios.post('/api/inventory', bodyObj).then(response => {
      this.setState({
        houses: response.data
      })
    })

  }

  render() {
    
    return(
      <div>Wizard
        <input onChange={(e) => this.handleName(e.target.value)} />
        <input onChange={(e) => this.handleAddress(e.target.value)} />
        <input onChange={(e) => this.handleCity(e.target.value)} />
        <input onChange={(e) => this.handleState(e.target.value)} />
        <input onChange={(e) => this.handleZipcode(e.target.value)} />
        <button onClick={() => this.addHouse()}>add?</button>
      <Link to='/'><button>Cancel</button></Link>
      </div>
    )
  }
}

export default Wizard;