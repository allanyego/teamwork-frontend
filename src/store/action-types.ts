import { User, Article, Gif, Flag } from "./model-types";

/**
 * Define some actions
 */
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

interface LoginAction {
  type: typeof LOGIN;
  payload: User;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type UserActionTypes = LoginAction | LogoutAction;

export const ADD_ARTICLES = 'ADD_ARTICLES'
export const UPDATE_ARTICLES = 'UPDATE_ARTICLES';

interface AddArticleAction {
  type: typeof ADD_ARTICLES;
  payload: Article;
}

interface UpdateArticlesAction {
  type: typeof UPDATE_ARTICLES;
  payload: Article[];
}

export type ArticleActionTypes = AddArticleAction | UpdateArticlesAction;

export const ADD_GIF = 'ADD_GIF';
export const UPDATE_GIFS = 'UPDATE_GIFS';

interface AddGifAction {
  type: typeof ADD_GIF;
  payload: Gif;
}

interface UpdateGifsAction {
  type: typeof UPDATE_GIFS;
  payload: Gif[];
}

export type GifActionTypes  = AddGifAction | UpdateGifsAction;

export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_COMMENTS = 'UPDATE_COMMENTS';

interface AddCommentAction {
  type: typeof ADD_GIF;
  payload: Comment;
}

interface UpdateCommentsAction {
  type: typeof UPDATE_GIFS;
  payload: Comment[];
}

export type CommentActionTypes  = AddCommentAction | UpdateCommentsAction;

export const ADD_FLAG = 'ADD_FLAG';
export const UPDATE_FLAGS = 'UPDATE_FLAGS';

interface AddFlagAction {
  type: typeof ADD_GIF;
  payload: Flag;
}

interface UpdateFlagsAction {
  type: typeof UPDATE_GIFS;
  payload: Flag[];
}

export type FlagActionTypes  = AddFlagAction | UpdateFlagsAction;
