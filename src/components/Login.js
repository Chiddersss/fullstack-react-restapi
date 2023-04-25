import React from 'react';
import {useState} from 'react'
import {loginUser} from '../utils'

const Login = ({newUser}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(username)
        console.log(email)
        console.log(password)

        await loginUser(username, email, password, newUser)
    }

    return (
        <>
            <h1>Login Below</h1>

            <form onSubmit={submitHandler}>
                <label>Username: 
                   <input onChange={(e) => setUsername(e.target.value)}></input>
                </label>

                <br></br>

                <label onChange={(e) => setEmail(e.target.value)}>Email: 
                   <input></input>
                </label>

                <br></br>

                <label onChange={(e) => setPassword(e.target.value)}>Password: 
                   <input></input>
                </label>

                <br></br>
                <button type="submit">Click here to login</button>

            </form>
        </>
    )
}

export default Login;