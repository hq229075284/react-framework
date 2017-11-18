import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Layout, Icon } from 'antd'
import Logo from 'components/logo'
import CMenu from 'components/cMenu'
import { getUserList } from 'actions/user'
// import hashHistory from '@history'
// import { oftenFetchByPost } from '@ajax'
import 'style/base.less'


const { Header, Footer, Sider, Content } = Layout

@connect(state => ({ user: state.user }))
export default class App extends Component {
  static defaultProps = {
    children: null,
    user: { },
  }

  static propTypes = {
    children: PropTypes.element,
    user: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      isRenderChildren: false,
    }
  }

  componentWillMount() {
    // if (sessionStorage.getItem('token')) {
    //   this.state.isRenderChildren = true
    // } else {
    //   hashHistory.push('/login')
    // }
    this.state.isRenderChildren = true
    // const hooks = oftenFetchByPost('/home')({}, res => console.log(res), res => console.error(res))
    const hooks = this.props.dispatch(getUserList({ x: 1 }, response => console.log(response)))
    // setTimeout(() => hooks.abort(), 1000)
  }

  componentWillReceiveProps(nextProps) {
    console.info(nextProps.user)
  }
  // region  业务函数
  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }
  // endregion
  render() {
    return (
      <div className="app-container">
        <Layout>
          <Header>
            <Logo name="云搜" />
            <CMenu />
          </Header>
          <Content>{this.state.isRenderChildren ? this.props.children : null}</Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </div>
    )
  }
}
