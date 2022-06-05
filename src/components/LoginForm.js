import React, { useContext, useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

function LoginForm() {

	const { login } = useContext(AuthContext)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const handlePasswordChange = (e) => {
		console.log(password)
		setPassword(e.target.value)
	}

	const handleLogin = (e) => {
		e.preventDefault()
		login(email, password)
	}

	return (
		<div className="LoginForm">
			{/*<div className="login-image"></div>*/}
			<div className="login-title">
				<h1>Login</h1>
			</div>

			<Form className="form-container">
				<Form.Group>

					<FloatingLabel controlId="floatingInput" label="E-mail" className="mb-3">
						<Form.Control
							type="email"
							name="email"
							placeholder="E-mail"
							value={email}
							// onChange={(e) => setEmail(e.target.value)} />
							onChange={handleEmailChange} />
					</FloatingLabel>

					<FloatingLabel controlId="floatingPassword" label="Password">
						<Form.Control
							type="password"
							name="password"
							placeholder="Password"
							value={password}
							// onChange={(e) => setPassword(e.target.value)} />
							onChange={handlePasswordChange} />
					</FloatingLabel>

				</Form.Group>
				<Button block="true" variant="danger" type="submit" onClick={handleLogin} >
					Login
				</Button>
				<Link to="/">Forgot Password?</Link>
				<hr />
				<Link to="/register">
					<Button block="true" type="submit" className="btn-sign-up">
						Register
					</Button>
				</Link>
			</Form>
		</div>
	);
}

export default LoginForm
