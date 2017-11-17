import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.less'

export default class Logo extends Component {
  static propTypes = {
    name: PropTypes.string,
  }

  static defaultProps={
    name: '',
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="logo">{this.props.name}</div>
    )
  }
}
// Logo.propTypes = {
//   name: PropTypes.string,
// }
