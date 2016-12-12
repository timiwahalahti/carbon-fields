/* @flow */

import { compose, defaultProps } from 'recompose';
import Container from 'containers/components/container';
import withConnectToStore from 'containers/decorators/with-connect-to-store';
import withInitialSideEffects from 'containers/decorators/with-initial-side-effects';

/**
 * Add the fields that are specific for this container.
 */
const withProps = defaultProps({
	meta: {},
	ui: {}
});

export default compose(
	withProps,
	withConnectToStore,
	withInitialSideEffects,
)(Container);