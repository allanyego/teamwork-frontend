/**
 * Typing slices 
 */
interface Entity {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User extends Entity {
  token: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  gender: string;
  mobile?: string;
  address?: string;
  department: string;
  role: string;
  type: string;
}

export interface Article extends Entity {
  category: any;
  title: string;
  text: string;
  user: any;
}

export interface Gif extends Entity {
  category: any;
  title: string;
  image: string;
  user: any;
}

export interface Comment extends Entity {
  user: any;
  article?: any;
  gif?: any;
  comment: string;
}

export interface Flag extends Entity {
  user: any;
  article?: any;
  gif?: any;
  comment?: any;
}

export interface UserState {
  user: User | null;
}

export interface ArticleState {
  articles: Article[];
}

export interface GifState {
  gifs: Gif[];
}

export interface CommentState {
  comments: Comment[];
}

export interface FlagState {
  flags: Flag[];
}