import React from 'react';
import { Switch, Route } from 'react-router';
import { ConnectedProps } from 'react-redux';

import TabMenuLink from '../../components/TabMenuLink';
import { profileConnect } from '../containers/Profile';
import View from './View';
import Edit from '../containers/EditProfile';

type Props = ConnectedProps<typeof profileConnect>;

const Profile: React.FC<Props> = ({ user }) => {
  return(
    <div className="uk-flex uk-height-1-1">
      <div className="uk-flex uk-flex-center t-tabs uk-tab-left">
        <TabMenuLink to="/profile" label="View" activeOnlyWhenExact={true} />
        <TabMenuLink to="/profile/edit" label="Edit" activeOnlyWhenExact={true} />
      </div>
      <div className="uk-divider-vertical uk-height-1-1 uk-margin-left uk-margin-right"></div>
      <Switch>
        <Route path="/profile" component={View} exact />
        <Route path="/profile/edit" component={Edit} exact />
      </Switch>
    </div>
  );
};

export default Profile;