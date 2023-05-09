import { writeCookie } from '../common'
const User = require('../user/model')
// Login user 

export const loginUser = async (username, email, password, newUser) => {
    try {
        const response = await fetch ("http://localhost:5002/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
            
        })
        const data = await response.json()
        console.log(data)
        newUser(data.user.username)

        writeCookie("jwt_token", data.user.token, 7)
        
    } catch (error) {
        console.log(error)
    }
}

export const authCheck = async (jwt_token) => {
    try {   
        const response = await fetch("http://localhost:5002/users/auth", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt_token}`
            }
        })
        const data = await response.json()
        console.log(data)
        return data.user.username
    } catch (error) {
        console.log(error)
    }
}

// Thursday 27.04.2023 // wrong file needs to go into the API

const comparePass = async (req, res, next) => {
    try {
        console.log(req.body)
        let findUser = await User.findOne({where: {username: req.body.username}})

        console.log(password)

    } catch (error) {
        res.status(501).json({message: error.message, error: error})
    }
} 