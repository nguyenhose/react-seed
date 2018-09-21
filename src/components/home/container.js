import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeActionCreator from './actionCreator'
import * as personActionCreator from '../person/actionCreator'
import './style.css'
import { Link } from 'react-router-dom'


class Home extends React.Component {
  constructor() {
    super()
    this.redirect = this.redirect.bind(this)
  }
  redirect(username) {
    this.props.getPersoneDetail(username).then((success) => {
      if (success) {
        console.log(this.props);
        this.props.history.push(`/person/${username}`)
      }
    })
  }
  renderUsers() {
    const topFive = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];
    return (
      <div className="username-list">
        {
          topFive.map((i) => {
            return (
              <span className='home-button' key={i}>
                <button type="button" className="btn btn-primary" onClick={this.redirect.bind('', i)}>
                  {i}
                </button>
              </span>
              )
          })
        }
      </div>
    )
  }
  render() {
    return (
      <div className="home-container">
        <div className="header">
          Home
        </div>
        <div className="home-body">
          <h4>
            Top 5 GitHub Users
          </h4>
          <div>Tap the  username to see more information</div>
          <div>
            {this.renderUsers()}
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...homeActionCreator,
    ...personActionCreator
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
