import React, { useState, FormEvent } from 'react';
import { ConnectedProps } from 'react-redux';

import { signupConnect } from '../containers/Signup';
import './Signup.css';
import { signup } from '../../controllers/http';

type Props = ConnectedProps<typeof signupConnect>

const Signup: React.FC<Props> = ({ login }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    gender: '',
    email: '',
    department: '',
    role: '',
    isAdmin: false,
    mobile: '',
    address: '',
    password: '',
    type: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      user.type = user.isAdmin ? 'admin' : 'user';
      delete user.isAdmin;
      const authUser = await signup(user);
      login(authUser);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('Login err', e);
    }
  };

  const handleChange = (e: any) => {
    const { target } = e;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setUser({
      ...user,
      ...{ [name]: value },
    })
  };
  
  return(
    <div className="uk-child-width-expand@s uk-flex-around uk-flex-middle uk-height-1-1" data-uk-grid>
      <div className="uk-width-1-3@s">
        <img src="assets/signup.svg" alt="Signin" className="auth-sv" />
      </div>
      <div className="uk-card uk-card-default uk-card-body uk-width-1-2@s signup-form">
        <h2 className="uk-text-center">Sign up</h2>
        <form onSubmit={handleSubmit}>

          <div data-uk-grid>
            <div className="uk-width-1-2">
              <label className="uk-form-label" htmlFor="firstNameInput">First name</label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                  <input type="text" name="firstName" id="firstNameInput"
                    value={user.firstName}
                    onChange={handleChange}
                    className="uk-input" required minLength={2} />
                </div>
              </div>
            </div>
            <div className="uk-width-1-2">
              <label className="uk-form-label" htmlFor="lastNameInput">Last name</label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                  <input type="text" name="lastName" id="lastNameInput"
                    value={user.lastName}
                    onChange={handleChange}
                    className="uk-input" required minLength={2} />
                </div>
              </div>
            </div>
          </div>


          <div data-uk-grid>
            <div className="uk-width-1-2">
              <label className="uk-form-label" htmlFor="usernameInput">Username</label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: social"></span>
                  <input type="text" id="usernameInput" name="username" className="uk-input"
                    value={user.username}
                    onChange={handleChange}
                    required minLength={2} />
                </div>
              </div>
            </div>
            <div className="uk-width-1-2">
              <label className="uk-form-label" htmlFor="genderInput">Gender</label>
              <div className="uk-form-controls">
                <select name="gender" id="genderInput" className="uk-select" required
                  value={user.gender}
                  onChange={handleChange}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>

          <div data-uk-grid>
            <div className="uk-width-1-1">
              <label className="uk-form-label" htmlFor="emailInput">Email</label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: mail"></span>
                  <input type="email" id="emailInput" name="email" className="uk-input"
                    value={user.email}
                    onChange={handleChange}
                    required />
                </div>
              </div>
            </div>
          </div>

          <div data-uk-grid>
            <div className="uk-width-1-2">
              <label className="uk-form-label" htmlFor="mobileInput">Mobile</label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: receiver"></span>
                  <input type="text" id="mobileInput" name="mobile" className="uk-input"
                    value={user.mobile}
                    onChange={handleChange}
                    minLength={10} />
                </div>
              </div>
            </div>
            <div className="uk-width-1-2">
              <label className="uk-form-label" htmlFor="addressInput">Address</label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: location"></span>
                  <input type="text" name="address" id="addressInput" className="uk-input"
                    value={user.address}
                    onChange={handleChange}
                    minLength={4} />
                </div>
              </div>
            </div>
          </div>

          <div data-uk-grid>
            <div className="uk-width-1-2">
              <label className="uk-form-label" htmlFor="departmentInput">Department</label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: thumbnails"></span>
                  <input type="text" name="department" id="departmentInput" className="uk-input"
                    value={user.department}
                    onChange={handleChange}
                    required minLength={2} />
                </div>
              </div>
            </div>
            <div className="uk-width-1-2">
              <label className="uk-form-label" htmlFor="roleInput">Role</label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: happy"></span>
                  <input type="text" name="role" id="roleInput" className="uk-input"
                    value={user.role}
                    onChange={handleChange}
                    required minLength={2} />
                </div>
              </div>
            </div>
          </div>

          <div data-uk-grid>
            <div className="uk-width-1-1">
              <label className="uk-form-label" htmlFor="passwordInput">Password</label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: lock"></span>
                  <input type="password" name="password" id="passwordInput" className="uk-input"
                    value={user.password}
                    onChange={handleChange}
                    required minLength={2} />
                </div>
              </div>
            </div>
          </div>

          <div data-uk-grid>
            <div className="uk-width-1-1">
              <label>
                <input name="type" className="uk-checkbox"
                  type="checkbox"
                  checked={user.isAdmin} /> Register user as admin
              </label>
            </div>
          </div>

          <div className="uk-margin uk-flex uk-flex-right">
            <button className="uk-button uk-button-primary" type="submit"
              disabled={loading}>
              { loading && <div data-uk-spinner></div> }&nbsp;
              Sign up
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Signup;