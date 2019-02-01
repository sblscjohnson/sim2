import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateHeader} from './../ducks/reducer'


class Header extends Component{
  render() {
    let {updateHeader} = this.props

    return(
      <div>
        {this.props.header}
      <input onChange={(e) => updateHeader(e.target.value)} />
      </div>
    )
}
}

let mapStateToProps = (state) => {
  let {header} = state
  return {
    header,
  }
}

let connectedComponent = connect(mapStateToProps, {updateHeader})(Header)
export default connectedComponent;