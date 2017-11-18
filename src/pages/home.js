import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { } from 'antd'
// import {connect} from 'react-redux'
// import {} from 'action/xxx'

// @connect((storeState)=>({}))

export default class Home extends Component {
  static defaultProps={
  }

  static propTypes = {
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() { alert('Home') }

  componentDidMount() {}

  componentWillReceiveProps() {}

  componentWillUpdate() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  // region vscode 1.17的收缩代码块功能  业务代码

  /* somehandle */

  // endregion

  render() {
    return (
      <div className="" >Home</div>
    )
  }
}
