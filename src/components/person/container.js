import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as personActionCreator from './actionCreator'
import './style.css'
import { Link } from 'react-router-dom'


class Person extends React.Component {

  componentDidMount() {
    const { pathname } = location
    const username = pathname.split('/')[2]
    this.props.getPersoneDetail(username)
  }
  render() {
    const { profile = {} } =  this.props
    return (
      <div className="home-container">
        <div className="header">
          <div className="back">
            <Link to={'/'}>
              <i className="fas fa-chevron-left"></i>
            </Link>
          </div>
          Person
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="avatar">
              <img src={`${profile.avatar_url}`} alt=""/>
            </div>
            <div className="person-content">
              {profile.name}
              <div className="person-location">{profile.location}</div>
            </div>

          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.person.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...personActionCreator
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Person)
