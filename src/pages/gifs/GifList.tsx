import React, { useEffect } from 'react';

import Item from '../../components/Item';
import { GifActionTypes } from '../../store/action-types';
import { Gif } from '../../store/model-types';
import { fetchGifs } from '../../controllers/http';

type Props = {
  gifs: Gif[],
  updateGifs: (g: Gif[]) => GifActionTypes,
}

const GifList: React.FC<Props> = ({ gifs, updateGifs }) => {
  console.log('Gifs', gifs)
  const fetchNew = async () => {
    console.log('Fetching new', gifs);
    if (gifs.length) {
      return;
    }
    const newGifs = await fetchGifs();
    updateGifs(newGifs);
  };

  useEffect(() => {
    fetchNew();
  }, []);

  return(
    <div className="uk-child-width-expand@s uk-grid-small" data-uk-grid>
      {
        gifs.map(g => <Item post={g} key={g.id} />)
      }
    </div>
  );
};

export default GifList;