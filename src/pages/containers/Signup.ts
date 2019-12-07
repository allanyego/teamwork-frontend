import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '../../store/actions'
import Signup from '../signup/Signup';

const mapDispatchToProps = (dispatch: any) => bindActionCreators({login}, dispatch);

export const signupConnect = connect(
  null,
  mapDispatchToProps,
);

export default signupConnect(Signup);