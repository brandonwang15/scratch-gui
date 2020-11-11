import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import toggleIcon from './slowmode.svg';
import styles from './toggle-step.css';

const ToggleStepComponent = function (props) {
    const {
        active,
        className,
        onClick,
        title,
        ...componentProps
    } = props;
    return (
        <img
            className={classNames(
                className,
                styles.toggleStep,
                {
                    [styles.isActive]: active
                }
            )}
            draggable={false}
            src={toggleIcon}
            width="20"
            height="20"
            title={title}
            onClick={onClick}
            {...componentProps}
        />
    );
};
ToggleStepComponent.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string
};
ToggleStepComponent.defaultProps = {
    active: false,
    title: 'Toggle Single Stepping'
};
export default ToggleStepComponent;
