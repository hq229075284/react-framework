import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Layout, Icon } from 'antd'
import Logo from 'components/logo'
import { getUserList } from 'actions/user'
import 'style/base.less'


const { Header, Footer, Sider, Content } = Layout

@connect(state => ({ userList: state.userList }))
export default class App extends Component {
  static defaultProps={
    children: null,
  }

  static propTypes = {
    children: PropTypes.element,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }

  componentWillMount() {
    this.props.dispatch(getUserList({ x: 1 }, response => console.log(response)))
  }

  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render() {
    return (
      <div className="app-container">
        <Layout>
          <Header>
            <Logo name="云搜" />
          </Header>
          <Content>{this.props.children}</Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </div>
    )
  }
}
