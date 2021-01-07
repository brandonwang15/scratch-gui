import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import toggleIcon from './slowmode.svg';
import styles from './is-paused-indicator.css';

const IsPausedIndicatorComponent = function (props) {
    const {
        isPaused,
        className,
        title,
        ...componentProps
    } = props;
    return (
        <div>
            Paused: {isPaused}
        </div>);
};
IsPausedIndicatorComponent.propTypes = {
    isPaused: PropTypes.bool,
    className: PropTypes.string,
    title: PropTypes.string
};
IsPausedIndicatorComponent.defaultProps = {
    isPaused: false,
    title: 'Is Paused Indicator'
};
export default IsPausedIndicatorComponent;
