import React from 'react';
import GifList from './GifList';
import { ConnectedProps } from 'react-redux';
import { gifsConnect } from '../containers/Gifs';

type Props = ConnectedProps<typeof gifsConnect>

const Gifs: React.FC<Props> = ({ gifs, updateGifs }) => {
  return(
    <GifList gifs={gifs} updateGifs={updateGifs}  />
  );
};

export default Gifs;