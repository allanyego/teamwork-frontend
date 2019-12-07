import { combineReducers } from 'redux';
import { UserState, ArticleState, GifState } from './model-types';
import { UserActionTypes, LOGIN, LOGOUT, ArticleActionTypes, ADD_ARTICLE, UPDATE_ARTICLES, GifActionTypes, ADD_GIF, UPDATE_GIFS } from './action-types';

const initialUserState: UserState = {
  user: null,
};

export function userReducer(
  state = initialUserState,
  action: UserActionTypes,
): UserState {
  switch(action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: null, };
    default:
      return state;
  }
}

const initialArticlesState: ArticleState = {
  articles: [], 
}

export function articlesReducer(
  state = initialArticlesState,
  action: ArticleActionTypes,
): ArticleState {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        articles: [
          ...state.articles,
          action.payload,
        ]
      }
    case UPDATE_ARTICLES:
      return {
        articles: [...action.payload],
      }
    default:
      return state;
  }
}

const initialGifsState: GifState = {
  gifs: [],
};

export function gifsReducer(
  state = initialGifsState,
  action: GifActionTypes,
): GifState {
  switch (action.type) {
    case ADD_GIF:
      return {
        gifs: [
          ...state.gifs,
          action.payload,
        ]
      }
    case UPDATE_GIFS:
      return {
        gifs: [...action.payload],
      }
    default:
      return state;
  }
}

const teamworkApp = combineReducers({
  articles: articlesReducer,
  gifs: gifsReducer,
  user: userReducer,
});

export default teamworkApp;