import React from 'react';

import './View.css';
import UserInfo from './UserInfo';

const View: React.FC = () => {
  return (
    <div className="uk-width-1-1 uk-grid-small profile-view" data-uk-grid>
      {
        <div
          className="uk-width-1-1 uk-flex uk-flex-column uk-margin-top">

          <div className="uk-flex uk-flex-between uk-flex-middle">
            <div className="uk-flex uk-flex-middle">
              <img src="../../assets/avatar.png" alt="Avatar" />
              <div className="uk-margin-left">
                <h3 className="uk-margin-remove-bottom">
                  First Name
                </h3>
                <p className="uk-margin-remove-vertical">
                  <span>
                    @username
                  </span>
                  <br />
                  <small>
                    <span data-uk-icon="icon: location"></span>&nbsp;
                    33, Eldoret
                  </small>
                </p>
              </div>
            </div>
            <div>
              <span data-uk-icon="icon: user"></span>&nbsp;
              Admin
            </div>
          </div>
          <hr />
          <div className="uk-margin-remove-left" data-uk-grid>
            <UserInfo />
            <section className="uk-width-expand">
              <div>
                <h4 className="uk-text-center">Activity</h4>
                <div
                  className="uk-child-width-1-3@s uk-grid-small uk-flex-center uk-text-center"
                  data-uk-grid>

                  <div>
                    <div className="uk-tile uk-tile-primary uk-padding-large">
                      <p className="uk-h4">4 Gifs</p>
                    </div>
                  </div>
                  <div>
                    <div className="uk-tile uk-tile-secondary uk-padding-large">
                      <p className="uk-h4">4 Articles</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      }
    </div>
  );
};

export default View;