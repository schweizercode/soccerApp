import React, { useState, useRef, useContext } from 'react'
import { AuthProvider } from '../../context/authContext'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link } from "react-router-dom"


export default function Register() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { register } = useContext(AuthProvider)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await register(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }


    return (
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Register</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>

                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required></Form.Control>
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" red={passwordRef} required></Form.Control>
                    </Form.Group>

                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="passwordconfirm" red={passwordConfirmRef} required></Form.Control>
                    </Form.Group>


                    <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                </Form>

                <div className="w-100 text-center mt-2"> Already have an account? <Link to="/Login"> Log In</Link></div>
            </Card.Body>
        </Card >
    )
}

