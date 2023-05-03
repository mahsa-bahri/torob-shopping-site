import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import './Form.css';

const PasswordShowHide = ({ field, form }) => {
	const [showHidePassword, changeShowHidePassword] = useState(false);
	const hasError = form.touched[field.name] && form.errors[field.name];
            
	return (
	  <div >
	   
	    <input
	      type={showHidePassword ? "text" : "password"}
	      {...field}
	      className={hasError ? "input-error input-field" : "input-field"}
	      placeholder="Password"
	    />
	     <i
	      className={hasError ? "icon-error icon" : "fa fa-key icon"}
	      onClick={() => changeShowHidePassword(!showHidePassword)}
	    >
	      نمایش
	    </i>
	  </div>
	);
 };



function SignUp() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isLoggedin, setIsLoggedin] = useState(false);

const login = (e) => {
	e.preventDefault();
	console.log(name, email, password);
	const userData = {
	name,
	email,
	password,
	};
	localStorage.setItem('token-info', JSON.stringify(userData));
	setIsLoggedin(true);
	setName('');
	setEmail('');
	setPassword('');
};

const logout = () => {
	localStorage.removeItem('token-info');
	setIsLoggedin(false);
};

return (
	<>
    <Formik 
      initialValues={{ email: '', password: '',username:'' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if(!values.password){
	errors.password='Required'
        }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters long.";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Must Contain 8 Characters, One Uppercase, One Lowercase,and One Number.";
    }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    > 
    {({ isSubmitting }) => (
		!isLoggedin ? (
      
	 <div className='login-box' >
	  <Link to={"/home"}>بازگشت</Link>
      
		<Form className='form'>  
    <label>نام کاربری</label><br></br>
	  <Field className='user-box' type="text" name="username" placeholder="username"	onChange={(e) => setName(e.target.value)}
			value={name} /><br></br>
	  <label>ایمیل</label><br></br>
    <Field className='user-box' type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}
			value={email} />
    <ErrorMessage name="email" component="div" /><br></br>
    <label>رمز عبور</label><br></br>
    <Field className='user-box' type="password" name="password" placeholder="password" component={PasswordShowHide} 	onChange={(e) => setPassword(e.target.value)}
		 value={password} />   
     <ErrorMessage name="password" component="div"  /><br></br>
     <button type="submit" disabled={isSubmitting} > ثبت</button><br></br>
     <button onClick={login}>ورود</button>      
		</Form>
      </div>
		) : (
		<>
			<h1>User is logged in</h1>
			<button onClickCapture={logout}>logout user</button>
		</>
    )
    )}
   </Formik>
	</>
);
}

export default SignUp;
