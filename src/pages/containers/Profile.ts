import { connect } from 'react-redux';

import { User } from '../../store/model-types';
import Profile from '../profile';

interface RootState {
  user: {
    user: User;
  }
}

const mapStateToProps = (state: RootState) => ({
  user: state.user.user,
});

export const profileConnect = connect(
  mapStateToProps,
);

export default profileConnect(Profile);