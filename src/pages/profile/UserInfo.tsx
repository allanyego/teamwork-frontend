import React from 'react';

const UserInfo: React.FC = () => {
  return (
    <div className="uk-card uk-card-default uk-margin-remove-left uk-padding">
      <div className="uk-margin-bottom">
        <span className="uk-margin-right" data-uk-icon="icon: mail"></span>
        allan@mail.com
              </div>
      <div className="uk-margin-bottom">
        <span className="uk-margin-right" data-uk-icon="icon: info"></span>
        Male
              </div>
      <div className="uk-margin-bottom">
        <span className="uk-margin-right" data-uk-icon="icon: receiver"></span>
        0791391124
              </div>
      <div className="uk-margin-bottom">
        <span className="uk-margin-right" data-uk-icon="icon: thumbnails"></span>
        Sales
              </div>
      <div>
        <span className="uk-margin-right" data-uk-icon="icon: happy"></span>
        ceo
              </div>
    </div>
  );
};

export default UserInfo;