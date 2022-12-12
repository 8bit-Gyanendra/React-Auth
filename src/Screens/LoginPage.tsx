import React, { SyntheticEvent, useState } from 'react'

import { Form, Button } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault()
        // // console.log('submitted')
        // if(localStorage.getItem(email) === password){
        //     // navigate('/login')
        // }
        
    }

    return (
        <FormContainer>
            <h1 className='text-center'>Login</h1> 

            <Form onSubmit = {submitHandler}>
                <Form.Group className="my-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="my-3" controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    value={password}
                    onChange={(event => setPassword(event.target.value))}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </FormContainer>
    )
}

export default LoginPage;