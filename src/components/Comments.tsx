import React from 'react';

import CommentItem from './Comment';
import { Comment } from '../store/model-types';

type Props = {
  comments: Comment[];
}

const Comments: React.FC<Props> = ({ comments }) => {
  return (
    <div className="uk-card uk-card-default uk-margin-left uk-padding-small">
      <div className="uk-text-center">
        <span className="uk-text-large uk-text-light">
          <span data-uk-icon="icon: comments"></span>&nbsp;
          Comments (3)
        </span>
      </div>
      <div className="uk-flex uk-flex-column">
        <CommentItem comment={{} as any} />
      </div>
    </div>
  );
};

export default Comments;