import { connect } from 'react-redux';

import { Article, User } from '../../store/model-types';
import ArticleComponent from '../articles/Article';

interface RootState {
  articles: {
    articles: Article[];
  };
  user: {
    user: User;
  }
}

const mapStateToProps = (state: RootState, ownProps: any) => ({
  article: state.articles.articles.find(v => v.id === +ownProps.match.params.id),
  user: state.user.user,
});

export const articleConnect = connect(
  mapStateToProps,
);

export default articleConnect(ArticleComponent);