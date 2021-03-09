import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { Form, Button, Card } from 'react-bootstrap'
import { Link } from "react-router-dom"


const Register = () => {
    const [state, setState] = useState({ name: "", email: "", password: "", })
    const { register } = useContext(AuthContext)


    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleOnSubmit = (event) => {
        //pervent react from refreshing the page
        event.preventDefault();
        register(state)
    }

    console.log('state', state)
    return (
        <Card onSubmit={handleOnSubmit}>
            <Card.Body>
                <h2 className="text-center mb-4">Register</h2>
                <Form>

                    <Form.Group id="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" onChange={handleChange} value={state.name} required></Form.Control>
                    </Form.Group>

                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleChange} value={state.email} required></Form.Control>
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={handleChange} value={state.password} required></Form.Control>
                    </Form.Group>


                    <Button className="w-100" type="submit">Sign Up</Button>
                </Form>

                <div className="w-100 text-center mt-2"> Already have an account? <Link to="/Login"></Link> Log In</div>
            </Card.Body>
        </Card >
    )
}


export default Register
