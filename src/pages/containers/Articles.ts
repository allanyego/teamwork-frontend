import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addArticle, updateArticles } from '../../store/actions'
import { Article } from '../../store/model-types';
import Articles from '../articles';

interface RootState {
  articles: {
    articles: Article[];
  }
}

const mapStateToProps = (state: RootState) => ({
  articles: state.articles.articles,
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