import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addGif, updateGifs } from '../../store/actions'
import { Gif } from '../../store/model-types';
import Gifs from '../gifs';

interface RootState {
  gifs: {
    gifs: Gif[];
  }
}

const mapStateToProps = (state: RootState) => ({
  gifs: state.gifs.gifs,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  {addGif, updateGifs},
  dispatch,
);

export const gifsConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default gifsConnect(Gifs);