import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { toast } from "react-toastify";
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";

function Register() {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPasword: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidation()) {
            const { username, email, password, confirmPassword } = values;

            const { data } = await axios.post(registerRoute, {
                username,
                email,
                password,
                confirmPassword,
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const toastOptions = {
        position: "bottom-right",
        autoClose: 4000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const handleValidation = () => {
        const { username, email, password, confirmPassword } = values;

        if (username.length < 3) {
            toast.error(
                "Username length should be greater than 3 characters",
                toastOptions
            );
            return false;
        } else if (password.length < 8) {
            toast.error(
                "Password length should be greater than 8 characters",
                toastOptions
            );
            return false;
        } else if (password !== confirmPassword) {
            toast.error(
                "Ppassword and confirm password should be same",
                toastOptions
            );
            return false;
        } else if (email === "") {
            toast.error("Email is required", toastOptions);
            return false;
        }

        return true;
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
                        value={values.username}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
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

            &:focus {
                border: #00000076 1rem solid #997af0;
                outline: none;
            }
        }

        button {
            background-color: #997af0;
            color: white;
            padding: 1rem 2rem;
            border: none;
            font-weight: bold;
            cursor: pointer;
            border-radius: 0.4rem;
            font-size: 1rem;
            text-transform: uppercase;
            transition: 0.5s ease-in-out;

            &:hover {
                background-color: #4e0eff;
            }
        }

        span {
            color: white;
            text-transform: uppercase;

            a {
                color: #4e0eff;
                text-transform: none;
                font-weight: bold;
                text-decoration: none;
            }
        }
    }
`;

export default Register;
