import React, { SyntheticEvent, useState } from 'react'
import FormContainer from '../components/FormContainer';
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();

        localStorage.setItem(email, password)
        navigate('/login')

        // localStorage.removeItem(email, password)

        //interact with the backend
        
    }



    return (
        <FormContainer>
            <h1 className='text-center'>SignUp</h1>

            <Form onSubmit={submitHandler}>
                <Form.Group className="my-3" controlId="email">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="firstName" placeholder="Enter your First Name" 
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="my-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lastName" placeholder="Enter Your Last Name" 
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    />
                </Form.Group>

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
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </FormContainer>
    )
}

export default SignupPage;