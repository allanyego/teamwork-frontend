import React, { useEffect } from 'react';

import Item from '../../components/Item';
import { GifActionTypes } from '../../store/action-types';
import { Gif, User } from '../../store/model-types';
import { fetchGifs } from '../../controllers';

type Props = {
  gifs: Gif[];
  updateGifs: (g: Gif[]) => GifActionTypes;
  user: User;
}

const GifList: React.FC<Props> = ({ gifs, updateGifs, user }) => {
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
        gifs.map(g => <Item post={g} key={g.id} user={user} />)
      }
    </div>
  );
};

export default GifList;