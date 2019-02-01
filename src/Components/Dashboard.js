import React, {Component} from 'react';
import House from './House'
import axios from 'axios';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    }
    this.handleGetHouses=this.handleGetHouses.bind(this)
  }

  componentDidMount() {
    axios.get('/api/houses').then(response => {
      this.setState({
        houses: response.data
      })
    })
  }
  
  handleGetHouses() {
    console.log('hit')
    axios.get('/api/houses')
    .then(response => {
      this.setState({
        houses: response.data
      })
    }).catch((err) => {
      console.log('no')
    })
  }


  deleteHouse(id) {
    axios.delete(`/api/houses/:${id}`)
    .then(response => {
      this.setState({
        houses: response.data
      })
    })
  }


  render() {
    console.log('this.state.houses', this.state.houses)
    let mappedHouses = this.state.houses.map((eachHouseObj) => {
      return(
        <div>
        <House key={eachHouseObj.index} name={eachHouseObj.name} address={eachHouseObj.address} city={eachHouseObj.city} state={eachHouseObj.state} zipcode={eachHouseObj.zipcode} />
        <button onClick={() => this.deleteHouse(eachHouseObj.id)}>yeet</button>
        </div>
      )
    })
    console.log('mapped', mappedHouses)
   

    return(
      <div>
        <p>Dashboard</p>
        {mappedHouses}
        <Link to='/wizard' props={this.handleGetHouses} prop2={mappedHouses}><button>Add New Property</button></Link>
      </div>
    )
  }
}

export default Dashboard;