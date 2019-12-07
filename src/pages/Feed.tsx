import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router';
import Articles from './containers/Articles';
import Gifs from './containers/Gifs';
import Article from './containers/Article';


import './Feed.css';
import TabMenuLink from '../components/TabMenuLink';

const Feed: React.FC = () => {
  return (
    <div className="uk-flex uk-flex-column">
      <div className="uk-flex uk-flex-center t-tabs">
        <TabMenuLink to="/feed/articles" label="Articles" activeOnlyWhenExact={true} />
        <TabMenuLink to="/feed/gifs" label="Gifs" activeOnlyWhenExact={true} />
      </div>
      <Switch>
        <Route path="/feed/gifs" component={Gifs} exact />
        <Route path="/feed/gifs/:id" component={Gifs} exact />
        <Route path="/feed/articles" component={Articles} exact />
        <Route path="/feed/articles/:id" component={Article} exact />
        <Route path="/feed" render={() => <Redirect to="/feed/articles" />} exact />
      </Switch>
    </div>
  );
};

export default Feed;