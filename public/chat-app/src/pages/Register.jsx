import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Logo from "../assets/logo.svg";

function Register() {
    const [form, setForm] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("form");
    };

    const handleChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <div className="brand">
                        <img src={Logo} alt="" />
                        <h1>Snappy</h1>
                    </div>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={handleChange}
                    />
                    <button type="submit">Create User</button>
                    <span>
                        already have an account ? <Link to="/login">Login</Link>
                    </span>
                </form>
            </FormContainer>
        </>
    );
}

const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #131324;

    .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;

        img {
            height: 5rem;
        }

        h1 {
            color: white;
            text-transform: uppercase;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #00000076;
        border-radius: 2rem;
        padding: 3rem 5rem;

        input {
            background-color: transparent;
            padding: 1rem;
            border: 0.1rem solid #4e0eff;
            border-radius: 0.4rem;
            color: white;
            width: 100%;
            font-size: 1rem;
        }
    }
`;

export default Register;
