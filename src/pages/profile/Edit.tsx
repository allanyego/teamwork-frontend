import React, { useState, FormEvent } from 'react';
import { ConnectedProps } from 'react-redux';

import { updateUser } from '../../controllers';
import { editProfileConnect } from '../containers/EditProfile';

type Props = ConnectedProps<typeof editProfileConnect>

const Edit: React.FC<Props> = ({ user, login }) => {
  let data;
  if (user) {
    data = {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      department: user.department,
      role: user.role,
      type: user.type,
    }
  } else {
    data = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      department: '',
      role: '',
      type: '',
    }
  }
  const [formUser, setFormUser] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const editedUser = await updateUser(formUser);
      login(editedUser);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('Update err', e);
    }
  };

  const handleChange = (e: any) => {
    const { target } = e;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormUser({
      ...user,
      ...{ [name]: value },
    })
  };

  return (
    <div
      className="uk-child-width-expand@s uk-flex-around uk-flex-middle uk-height-1-1 uk-width-1-1"
      data-uk-grid>

      <div className="uk-card uk-card-default uk-card-body uk-width-1-2 signup-form">
        <h2 className="uk-text-center">Update profile</h2>
        <form onSubmit={handleSubmit}>

          <div data-uk-grid>
            <div className="uk-width-1-2">
              <label className="uk-form-label" htmlFor="firstNameInput">First name</label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                  <input type="text" name="firstName" id="firstNameInput"
                    value={formUser.firstName}
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
                    value={formUser.lastName}
                    onChange={handleChange}
                    className="uk-input" required minLength={2} />
                </div>
              </div>
            </div>
          </div>


          <div data-uk-grid>
            <div className="uk-width-1-1">
              <label className="uk-form-label" htmlFor="usernameInput">Username</label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: social"></span>
                  <input type="text" id="usernameInput" name="username" className="uk-input"
                    value={formUser.username}
                    onChange={handleChange}
                    required minLength={2} />
                </div>
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
                    value={formUser.email}
                    onChange={handleChange}
                    required />
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
                    value={formUser.department}
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
                    value={formUser.role}
                    onChange={handleChange}
                    required minLength={2} />
                </div>
              </div>
            </div>
          </div>

          <div className="uk-margin uk-flex uk-flex-right">
            <button className="uk-button uk-button-primary" type="submit"
              disabled={loading}>
              {loading && <div data-uk-spinner></div>}&nbsp;
              Update
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Edit;