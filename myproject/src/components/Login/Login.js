import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Login.css'

function Login() {
    const navigate = useNavigate(); // Corrected to navigate
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adminUsername, setAdminUsername] = useState(''); 
    const [adminPassword, setAdminPassword] = useState(''); 

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/", {
                email, password
            })
            .then(res => {
                if (res.data === "exist") {
                    navigate("/products", { state: { id: email } });
                } else if (res.data === "notexist") {
                    alert("User has not signed up");
                }
            })
            .catch(e => {
                alert("Password required");
                console.log(e);
            });
        } catch (e) {
            console.log(e);
        }
    }

    // Function to handle admin login
    async function adminLogin(e) {
        e.preventDefault();

        const adminUsernamePrompt = prompt("Enter admin username:");
        const adminPasswordPrompt = prompt("Enter admin password:");

        if (adminUsernamePrompt === "dhinesh" && adminPasswordPrompt === "123") {
            navigate('/admin'); // Navigate to AdminAddProducts component
        } else {
            alert("Invalid admin credentials");
        }
    }

    return (
        <div className="login">
            <h3>Login now to explore our products!</h3>
            <h1>Login</h1>

            <form action="POST">
                <input type="text" onChange={(e) => { setEmail(e.target.value); }} placeholder="Username" />
                <input type="password" onChange={(e) => { setPassword(e.target.value); }} placeholder="Password" />
                <input type="submit" onClick={submit} />
            </form>
            <br />
            <p>Don't have an account?</p>
            <Link className="signup-btn" to="/signup">Signup Page</Link>

            <br />
            <button className='admin-btn' onClick={adminLogin}>Admin Login</button>
        </div>
    );
}

export default Login;
