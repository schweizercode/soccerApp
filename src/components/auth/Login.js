import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
        <Card onSubmit={handleOnSubmit}>
            <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleChange} value={state.email} required></Form.Control>
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={handleChange} value={state.password} required></Form.Control>
                    </Form.Group>


                    <Button className="w-100" type="submit">Log In</Button>
                </Form>

                <div className="w-100 text-center mt-2"> Need an account? <Link to="/Register">Register</Link> </div>

            </Card.Body>
        </Card >
    )
}

export default Login
