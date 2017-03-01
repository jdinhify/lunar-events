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
            password: '',
            error: false
        }
    }

    handleInputChange = name => e => this.setState({[name]: e.target.value, error: false})

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
            .then(() =>
                window.location.reload()
            )
            .catch((e) => {
                console.error(e)
                this.setState({error: true})
            })
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
            {this.state.error
            ? <div className='error row justify-center'><span>Error!</span></div>
            : undefined}
            <div className='row justify-center'>
                <button>Login</button>
            </div>
        </form>
        )
    }
}
UserLogin.propTypes = propTypes

export default UserLogin
