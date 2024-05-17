import {Route,Routes} from "react-router-dom"
import React from "react"
import { LoginForm } from "../component/LoginForm"
import { SignupForm } from "../component/SignupForm"
export const AllRoutes:React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<div><a href="/login">Login</a></div>}></Route>
        <Route path="/login" element={<LoginForm/>}></Route>
        <Route path="/signup" element={<SignupForm/>}></Route>
    </Routes>
  )
}
