import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addArticle, updateArticles } from '../../store/actions'
import { Article, User } from '../../store/model-types';
import Articles from '../articles';

interface RootState {
  articles: {
    articles: Article[];
  };
  user: {
    user: User;
  },
}

const mapStateToProps = (state: RootState) => ({
  articles: state.articles.articles,
  user: state.user.user,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  {addArticle, updateArticles},
  dispatch
);

export const articlesConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default articlesConnect(Articles);