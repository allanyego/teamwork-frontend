import React from 'react';
import { RouteComponentProps } from 'react-router';
import { ConnectedProps } from 'react-redux';
import { articleConnect } from '../containers/Article';

import './Article.css';
import Comments from '../../components/Comments';

type Props = ConnectedProps<typeof articleConnect> &
  RouteComponentProps;

const Article: React.FC<Props> = ({ article }) => {
  return (
    <div className="uk-child-width-expand@s article-view" data-uk-grid>
      <div>
        <div className="uk-flex uk-flex-between">
          <h2 className="uk-text-large uk-text-lead">Lorem Ipsum</h2>
          <button className="uk-button uk-button-danger" id="flag-btn">
            <img src="../../../assets/flag.png" alt="Flag" />
          </button>
        </div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sequi nihil vitae
        facilis totam. Sunt exercitationem, magni nemo quas expedita iste
        libero doloremque quos, id aut, accusamus fugiat numquam quisquam.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias totam perspiciatis,
        odit ut voluptates esse excepturi facere labore fuga deserunt debitis voluptatem minima soluta.
        Ipsa, repellat fugiat? Voluptate, harum pariatur.
      </div>
      <Comments comments={[]} />
    </div>
  );
};

export default Article;