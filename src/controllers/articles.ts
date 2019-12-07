import { Article } from "../store/model-types";

const SERVER_URL = 'https://teamwork-ke-dev.herokuapp.com/api/v1';

interface NewArticleDetails {
  category: string;
  title: string;
  text: string;
  userId: string;
  token: string;
}

export async function postArticle(
  { token, ...rest }: NewArticleDetails
): Promise<Article> {
  try {
    const res = await fetch(`${SERVER_URL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(rest),
    });

    const jsonRes = await res.json();
    if (res.status !== 201) {
      throw new Error(jsonRes.error);
    }
    return jsonRes.data;
  } catch (e) {
    throw e;
  }
}

export async function fetchArticles(): Promise<Article[]> {
  try {
    const res = await fetch(`${SERVER_URL}/feed`);

    const jsonRes = await res.json();
    if (res.status !== 200) {
      throw new Error(jsonRes.error);
    }
    return jsonRes.data;
  } catch (e) {
    throw e;
  }
}

export async function fetchArticle(id: string): Promise<Article> {
  try {
    const res = await fetch(`${SERVER_URL}/articles/${id}`);

    const jsonRes = await res.json();
    if (res.status !== 200) {
      throw new Error(jsonRes.error);
    }
    return jsonRes.data;
  } catch (e) {
    throw e;
  }
}

interface EditArticleDetails {
  articleId: string;
  title?: string;
  text?: string;
  token: string;
}

export async function updateArticle(
  { token, articleId, ...rest }: EditArticleDetails
): Promise<Article> {
  try {
    const res = await fetch(`${SERVER_URL}/articles/${articleId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(rest),
    });

    const jsonRes = await res.json();
    if (res.status !== 200) {
      throw new Error(jsonRes.error);
    }
    return jsonRes.data;
  } catch (e) {
    throw e;
  }
}

export async function destroyArticle(id: string, token: string): Promise<Article> {
  try {
    const res = await fetch(`${SERVER_URL}/articles/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const jsonRes = await res.json();
    if (res.status !== 204) {
      throw new Error(jsonRes.error);
    }
    return jsonRes.data;
  } catch (e) {
    throw e;
  }
}