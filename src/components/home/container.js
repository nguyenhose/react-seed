import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class Home extends React.Component {
  render() {
    return (<div>Hello React</div>)
  }
}
const mapStateToProps = (state) => {
  console.log('state', state);
  return {

  }
}
const mapDispatchToProps = () => {
  return  {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
