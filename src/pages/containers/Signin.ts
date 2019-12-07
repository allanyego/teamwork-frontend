import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '../../store/actions'
import Signin from '../signin/Signin';

const mapDispatchToProps = (dispatch: any) => bindActionCreators({login}, dispatch);

export const signinConnect = connect(
  null,
  mapDispatchToProps,
);

export default signinConnect(Signin);