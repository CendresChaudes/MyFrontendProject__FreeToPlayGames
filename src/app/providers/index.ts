import compose from 'compose-function';
import { withHelmet } from './withHelmet';
import { withRedux } from './withRedux';

export const withProviders = compose(withHelmet, withRedux);
