import React from 'react';
import { Article, Gif } from '../store/model-types';
import { Link } from 'react-router-dom';

type Post = {
  post: Article | Gif | any;
};
type Props = Post & {
  widthClass?: string;
}

const Item: React.FC<Props> = ({ post, widthClass }) => {
  return (
    <div className={`${widthClass || "uk-width-1-4@m"}`}>
      <div className="uk-card uk-card-default">
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" data-uk-grid>
            <div className="uk-width-expand">
              <h3 className="uk-card-title uk-margin-remove-bottom">{post.title}</h3>
              <h5 className="uk-margin-remove-vertical">@{post.user.username}</h5>
              <p className="uk-text-meta uk-margin-remove-top">{post.createdAt}</p>
            </div>
          </div>
        </div>
        {
          post.image ?
            <div className="uk-card-media-top">
              <img src={post.image} alt="Post" />
            </div> :
            <div className="uk-card-body">
              <p>{post.text}</p>
            </div>
        }
        {}
        <div className="uk-card-footer">
          {
            post.image ?
              <Link to={"/feed/gifs/" + post.id}>More</Link> :
              <Link to={"/feed/articles/" + post.id}>More</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Item;