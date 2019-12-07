import { Gif } from "../store/model-types";

const SERVER_URL = 'https://teamwork-ke-dev.herokuapp.com/api/v1';

interface NewGifDetails {
  category: string;
  title: string;
  image: File;
  userId: string;
  token: string;
}

export async function postGif(
  { token, title, image, userId, category }: NewGifDetails
): Promise<Gif> {
  try {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('category', category);
    fd.append('userId', userId);
    fd.append('image', image);

    const res = await fetch(`${SERVER_URL}/gifs`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: fd,
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

export async function fetchGifs(): Promise<Gif[]> {
  try {
    const res = await fetch(`${SERVER_URL}/feed?type=gifs`);

    const jsonRes = await res.json();
    if (res.status !== 200) {
      throw new Error(jsonRes.error);
    }
    return jsonRes.data;
  } catch (e) {
    throw e;
  }
}

export async function fetchGif(id: string): Promise<Gif> {
  try {
    const res = await fetch(`${SERVER_URL}/gifs/${id}`);

    const jsonRes = await res.json();
    if (res.status !== 200) {
      throw new Error(jsonRes.error);
    }
    return jsonRes.data;
  } catch (e) {
    throw e;
  }
}

interface EditGifDetails {
  gifId: string;
  title?: string;
  image?: string;
  token: string;
}

export async function updateGif(
  { token, gifId, title, image }: EditGifDetails
): Promise<Gif> {
  try {
    if (!title && !image) {
      throw new Error('You need to edit at least one field.');
    }
    const fd = new FormData();
    if (title) {
      fd.append('title', title);
    }
    if (image) {
      fd.append('image', image);
    }
    
    const res = await fetch(`${SERVER_URL}/gifs/${gifId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: fd,
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

export async function destroyGif(id: string, token: string): Promise<Gif> {
  try {
    const res = await fetch(`${SERVER_URL}/gifs/${id}`, {
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