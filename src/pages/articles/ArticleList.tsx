import React, { useEffect } from 'react';
import Item from '../../components/Item';
import { Article } from '../../store/model-types';
import { ArticleActionTypes } from '../../store/action-types';
import { fetchArticles } from '../../controllers/http';

type Props = {
  articles: Article[],
  // addArticle: (a: Article) => ArticleActionTypes,
  updateArticles: (a: Article[]) => ArticleActionTypes,
};

const ArticleList: React.FC<Props> = ({ articles, updateArticles }) => {
  const fetchNew = async () => {
    if (articles.length) {
      return;
    }
    const newArticles = await fetchArticles();
    updateArticles(newArticles);
  }

  useEffect(() => {
    fetchNew()
  }, []);

  return(
    <div className="uk-child-width-expand@s uk-grid-small" data-uk-grid>
      {
        articles.map(a => <Item post={a} key={a.id} />)
      }
    </div>
  );
};

export default ArticleList;