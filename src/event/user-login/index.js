import React, {PropTypes, Component} from 'react'

const propTypes = {
  signinUser: PropTypes.func,
  loading: PropTypes.bool
}

class UserLogin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      password: ''
    }
  }

  handleInputChange = name => e =>
    this.setState({[name]: e.target.value})

  handleSubmit = e => {
    const { signinUser } = this.props
    const { id, password } = this.state
    e.preventDefault()
    signinUser({
      variables: {
        email: id,
        password
      }
    })
      .then((response) => {
        window.localStorage.setItem('graphcoolToken', response.data.signinUser.token)
      })
      .catch((e) => {
        console.error(e)
      })
      .then(() =>
        window.location.reload()
      )
  }

  render () {
    return (
      this.props.loading
        ? <span>Loading...</span>
        : <form onSubmit={this.handleSubmit}>
          <div className='row justify-center'>
            <input
              type='text'
              required
              placeholder='ID'
              onChange={this.handleInputChange('id')} />
          </div>
          <div className='row justify-center'>
            <input
              type='password'
              required
              placeholder='password'
              onChange={this.handleInputChange('password')} />
          </div>
          <div className='row justify-center'>
            <button>Login</button>
          </div>
        </form>
    )
  }
}
UserLogin.propTypes = propTypes

export default UserLogin
