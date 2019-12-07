import { connect } from 'react-redux';

import { Article } from '../../store/model-types';
import ArticleComponent from '../articles/Article';

interface RootState {
  articles: {
    articles: Article[];
  }
}

const mapStateToProps = (state: RootState, ownProps: any) => ({
  article: state.articles.articles.find(v => v.id === +ownProps.match.params.id)
});

export const articleConnect = connect(
  mapStateToProps,
);

export default articleConnect(ArticleComponent);