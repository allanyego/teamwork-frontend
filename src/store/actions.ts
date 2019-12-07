import { User, Article, Gif } from "./model-types";
import {
  UserActionTypes,
  LOGIN,
  LOGOUT,
  ArticleActionTypes,
  ADD_ARTICLE,
  UPDATE_ARTICLES,
  GifActionTypes,
  ADD_GIF,
  UPDATE_GIFS
} from "./action-types";

/*
 * We'll define some action creators
 */
export function login(user: User): UserActionTypes {
  return {
    type: LOGIN,
    payload: user,
  }
}

export function logout(): UserActionTypes {
  return {
    type: LOGOUT,
  }
}

export function addArticle(article: Article): ArticleActionTypes {
  return {
    type: ADD_ARTICLE,
    payload: article,
  }
}

export function updateArticles(articles: Article[]): ArticleActionTypes {
  return {
    type: UPDATE_ARTICLES,
    payload: articles,
  }
}

export function addGif(gif: Gif): GifActionTypes {
  return {
    type: ADD_GIF,
    payload: gif,
  }
}

export function updateGifs(gifs: Gif[]): GifActionTypes {
  return {
    type: UPDATE_GIFS,
    payload: gifs,
  }
}