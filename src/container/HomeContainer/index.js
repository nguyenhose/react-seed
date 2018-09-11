import React from 'react'
import { connect } from 'react-redux'


class Home extends React.Component {
  render() {
    return (<div>Hello React</div>)
  }
}
const mapStateToProps = () => {
  return {}
}
const mapDispatchToProps = () => {
  return  {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
