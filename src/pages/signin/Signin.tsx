import React, { useState, FormEvent } from 'react';
import { ConnectedProps } from 'react-redux';
import { signinConnect } from '../containers/Signin';
import { signin } from '../../controllers';
import { RouteComponentProps } from 'react-router';

type Props = ConnectedProps<typeof signinConnect> &
  RouteComponentProps;

const Signin: React.FC<Props> = ({ login, history }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const authUser = await signin(user);
      login(authUser);
      setLoading(false);
      history.push('/feed')
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

  return (
    <div className="uk-child-width-expand@s uk-flex-around uk-flex-middle uk-height-1-1" data-uk-grid>
      <div className="uk-width-1-3@s">
        <img src="assets/signin.svg" alt="Signin" className="auth-sv" />
      </div>
      <div className="uk-card uk-card-default uk-card-body uk-width-1-3@s">
        <h2 className="uk-text-center">Sign in</h2>
        <form onSubmit={handleSubmit}>

          <div data-uk-grid>
            <div className="uk-width-1-1">
              <label className="uk-form-label" htmlFor="emailInput">Email</label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: mail"></span>
                  <input type="email" name="email" id="emailInput" className="uk-input"
                    value={user.email}
                    onChange={handleChange}
                    required />
                </div>
              </div>
            </div>
          </div>

          <div data-uk-grid>
            <div className="uk-width-1-1">
              <label className="uk-form-label" htmlFor="passwordInput">Password</label>
              <div className="uk-form-controls">
                <div className="uk-inline-uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: lock"></span>
                  <input type="password" name="password" id="passwordInput"
                    value={user.password}
                    onChange={handleChange}
                    className="uk-input"
                    required />
                </div>
              </div>
            </div>
          </div>

          <div className="uk-margin uk-flex uk-flex-right">
            <button className="uk-button uk-button-primary" type="submit"
              disabled={loading}>
              { loading && <div data-uk-spinner></div> }&nbsp;
              Sign in
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Signin;