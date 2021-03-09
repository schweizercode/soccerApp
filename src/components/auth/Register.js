import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { Form, Button, Card } from 'react-bootstrap'

const Register = () => {
    const [state, setState] = useState({ email: "", password: "", name: "" })

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
                <h2 className="text-center mb-4">Sign Up</h2>
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

                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" name="password" onChange={handleChange} value={state.passwordconfirm} required></Form.Control>
                    </Form.Group>

                    <Button className="w-100" type="submit">Sign Up</Button>


                </Form>
            </Card.Body>
        </Card >
    )
}



export default Register
