import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeActionCreator from './actionCreator'



class Home extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getExampleFetch()
  }
  render() {
    return (<div>Hello React</div>)
  }
}
const mapStateToProps = (state) => {
  console.log('state', state);
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...homeActionCreator
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
