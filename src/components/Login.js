import React, { useState, useContext } from 'react'
import { AuthContext } from '././context/authContext'

const Login = () => {
    const [state, setState] = useState({ email: "", password: "" })
    const { login } = useContext(AuthContext)
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        login(state)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label>
                <p>email</p>
                <input type="email" name="email" onChange={handleChange} value={state.email} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" name="password" onChange={handleChange} value={state.password} />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Login
