import compose from 'compose-function';
import { withHelmet } from './withHelmet';
import { withRedux } from './withRedux';
import { withRouter } from './withRouter';

export const withProviders = compose(withHelmet, withRedux, withRouter);
