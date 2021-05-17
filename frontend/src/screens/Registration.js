import './Forms.css'
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import pattern from "../utilities/regEx";
const Registration = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('')
    const [ password, setPassword] = useState('');

    const [ nameError, setNameError ] = useState('');
    const [ showNameError, setShowNameError ] = useState('hidden');

    const [ emailError, setEmailError ] = useState('');
    const [ showEmailError, setShowEmailError ] = useState('hidden');

    const [ passwordError, setPasswordError ] = useState('');
    const [ showPasswordError, setShowPasswordError] = useState('hidden');

    const [ formError, setFormError ] = useState('');
    const [showFormError, setShowFormError ] = useState('hidden');

    const onNameChange = (event) => {
        setName(event.target.value);

            if (!name.match(pattern.name)) {
                setNameError('You name can not be less than two character!');
                setShowNameError('visible');
            } else {
                setNameError('');
                setShowNameError('hidden');
            }
    };

    const onEmailChange = (event) => {
        setEmail(event.target.value);

        if (!email.match(pattern.email)) {
            setEmailError('Please, enter a valid email address.');
            setShowEmailError('visible');
        } else {
            setEmailError('');
            setShowEmailError('hidden');
        }

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (!name.match(pattern.name) || !email.match(pattern.email) || !password.match(pattern.password)) {
            setFormError('Please, check to confirm that all the fields on the form are correctly filled.');
            setShowFormError('visible');
        } else {
            const newUSer = {
                name,
                email,
                password
            };

        }
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)

        if (!password.match(pattern.password)) {
            setPasswordError('You password can not be less than six characters long. Optionally, you can include special characters ( * & # @ _ -)');
            setShowPasswordError('visible');
        } else {
            setPasswordError('');
            setShowPasswordError('hidden');
        }
    };

    return (
        <Fragment>
            <div className="ui stackable grid container">
                <div className="sixteen wide column">
                    <div className="column">
                        <div className="ui segment segmentWidth container">
                            <h1 className="ui header">REGISTER</h1>
                            <form className="ui form" onSubmit={onFormSubmit}>
                                <div className="field">
                                    <label className="label">Name</label>
                                    <input type="text"
                                           onChange={onNameChange}
                                           value={name}
                                           placeholder="Please, enter your name here ..."
                                           autoFocus
                                           maxLength="50"
                                    />
                                    <p className={`ui yellow ${showNameError} message`}>{nameError}</p>

                                    <label className="label">Email</label>
                                    <input type="email"
                                           onChange={onEmailChange}
                                           value={email}
                                           placeholder="Please, enter your password here ..."
                                           className="marginBottom"
                                    />
                                    <p className={`ui yellow ${showEmailError} message`}>{emailError}</p>

                                    <label className="label">Password</label>
                                    <input type="password"
                                           onChange={onPasswordChange}
                                           value={password}
                                           placeholder="Please, enter your password here ..."
                                           className="marginBottom"
                                    />
                                    <p className={`ui yellow ${showPasswordError} message`}>{passwordError}</p>

                                </div>
                                <button type="submit" className="ui button">SIGN IN</button>
                                <p className={`ui red ${showFormError} message header`}>{formError}</p>
                            </form>


                            <p className="ui header">Are you already a movieNerds Member? <Link to="/users/login">Sign in here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Registration;