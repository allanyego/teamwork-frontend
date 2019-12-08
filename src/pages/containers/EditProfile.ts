import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '../../store/actions'
import { User } from '../../store/model-types';
import Edit from '../profile/Edit';

interface RootState {
  user: {
    user: User;
  },
}

const mapStateToProps = (state: RootState) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({login}, dispatch);

export const editProfileConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default editProfileConnect(Edit);