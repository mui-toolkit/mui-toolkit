import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase';
import 'firebase/auth';
import { db } from '../config/firebase';

const useStyles = makeStyles((theme) => ({}));

export function validate(values) {
	let errors = {};
	if (!values.email) {
		errors.email = 'Email address is required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email address is invalid';
	}
	return errors;
}

export function Signup(props) {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ username, setUserName ] = useState('');
	const [ errors, setErrors ] = useState({});
	const [ open, setOpen ] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};
	const validate = (email) => {
		let errors = {};
		if (!email) {
			errors = 'Email address is required';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			errors = 'Email address is invalid';
		}
		console.log('val errors', errors, isEmpty(errors));
		return errors;
	};
	const isEmpty = (obj) => {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) return false;
		}
		return true;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((cred) => {
				console.log('cred', cred);
				return db
					.collection('Users')
					.doc(cred.user.uid)
					.set({
						firstName: firstName,
						lastName: lastName,
						email: email,
						password: password,
						username: username
					})
					.then(() => {
						console.log('created new user in db,props', props);
						props.history.push('/');
					});
			})
			.catch(function(error) {
				console.log('error in signup', error.code);
				alert(`Please enter a valid email`);
			});
	};

	return (
		<Grid container direction="row" style={{ marginTop: '5em' }}>
			<Grid item container direction="column" justify="center" alignItems="center">
				<Grid item container direction="column">
					<Grid item container direction="column" justify="center" alignItems="center">
						<Typography variant="h2">Sign Up</Typography>
					</Grid>
				</Grid>
				<form onSubmit={handleSubmit}>
					<Grid item container style={{ maxWidth: '20em' }} justify="center" alignItems="center">
						<Grid item container justify="center">
							<TextField
								required
								label="First Name"
								id="firstName"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
							<TextField
								required
								label="Last Name"
								id="lastName"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
							<TextField
								required
								label="Username"
								id="username"
								value={username}
								onChange={(e) => setUserName(e.target.value)}
							/>

							<TextField
								required
								error={!isEmpty(validate(email)) && email.length > 0}
								helperText={validate(email) && email.length > 0 ? 'Please enter a valid email' : ''}
								helperText={!isEmpty(validate(email)) && email.length > 0 ? validate(email) : ''}
								label="Email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<TextField
								required
								error={password.length > 0 && password.length < 6}
								helperText={password.length < 6 && password.length > 0 ? 'Min 6 characters' : ''}
								type="password"
								label="Password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							{/* <TextField
                error
                id="outlined-error-helper-text"
                // label="Error"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="outlined"
              /> */}
						</Grid>
						<Button>
							<input type="submit" value="Sign Up" />
						</Button>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
}

export default Signup;
