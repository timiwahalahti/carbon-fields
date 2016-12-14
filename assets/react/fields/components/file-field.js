/* @flow */

import React from 'react';
import cx from 'classnames';
import { compose } from 'recompose';

import Field from 'fields/components/field';
import createHooks from 'fields/decorators/hooks';
import createConnectToStore from 'fields/decorators/connect-to-store';
import { setupMediaBrowser, openMediaBrowser } from 'fields/actions';

/**
 * Render a file upload field with a preview thumbnail of the uploaded file.
 *
 * @param  {Object} props
 * @return {React.Element}
 *
 * @todo   Replace the inline `style` with a class.
 */
const FileField = ({ field, updateField, openMediaBrowser }: FileFieldProps): React$Element<*> => {
	const openBrowser = () => {
		openMediaBrowser(field.id);
	};

	const clearSelection = () => {
		updateField(field.id, {
			value: '',
			file_name: '',
			thumb_url: ''
		});
	};

	return <Field field={field}>
		<div className="carbon-attachment">
			<input
				type="text"
				className="regular-text carbon-file-field"
				id={field.id}
				name={field.name}
				defaultValue={field.value}
				style={field.value_type === 'id' ? { display: 'none' } : {}}
			/>

			<div className={cx('carbon-description', { 'hidden': !field.value })}>
				<div className={cx('carbon-attachment-preview', { 'hidden': !field.thumb_url })}>
					<img src={field.thumb_url} className="thumbnail-image" />

					<div className="carbon-file-remove dashicons-before dashicons-no-alt" onClick={clearSelection}></div>
				</div>

				<div className="carbon-attachment-file-name">{field.file_name}</div>
			</div>

			<span className="button c2_open_media" onClick={openBrowser}>
				{field.button_label}
			</span>
		</div>
	</Field>;
};

/**
 * The lifecycle hooks that will be attached to the field.
 *
 * @type {Object}
 */
const hooks: Object = {
	componentDidMount() {
		this.props.setupField(this.props.id, this.props.type);
		this.props.setupMediaBrowser(this.props.id);
		this.props.setUI(this.props.id, this.props.ui);
	}
};

/**
 * The additional actions that will be passed to the component.
 *
 * @type {Object}
 */
const mapDispatchToProps: Object = {
	setupMediaBrowser,
	openMediaBrowser,
};

export default compose(
	createConnectToStore(undefined, mapDispatchToProps),
	createHooks(hooks)
)(FileField);
