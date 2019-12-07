import React from 'react';
import ArticleList from './ArticleList';
import { ConnectedProps } from 'react-redux';
import { articlesConnect } from '../containers/Articles';

type Props = ConnectedProps<typeof articlesConnect>;

const Articles: React.FC<Props> = ({ articles, updateArticles }) => {
  return(
    <ArticleList articles={articles} updateArticles={updateArticles} />
  );
};

export default Articles;