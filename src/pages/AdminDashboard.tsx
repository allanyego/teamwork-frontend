import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import TabMenuLink from '../components/TabMenuLink';
import Gifs from './containers/Gifs';
import Articles from './containers/Articles';
import Article from './containers/Article';

const AdminDashboard: React.FC = () => {
  return(
    <div className="uk-flex uk-flex-column">
      <div className="uk-flex uk-flex-center t-tabs">
        <TabMenuLink to="/feed/articles" label="Articles" activeOnlyWhenExact={true} />
        <TabMenuLink to="/feed/gifs" label="Gifs" activeOnlyWhenExact={true} />
      </div>
      <Switch>
        <Route path="/feed/gifs" component={Gifs} props={{ isAdmin: true }} exact />
        <Route path="/feed/gifs/:id" component={Gifs} props={{ isAdmin: true }} exact />
        <Route path="/feed/articles" component={Articles} props={{ isAdmin: true }} exact />
        <Route path="/feed/articles/:id" component={Article} props={{ isAdmin: true }} exact />
        <Route path="/feed" render={() => <Redirect to="/feed/articles" />} exact />
      </Switch>
    </div>
  );
};

export default AdminDashboard;