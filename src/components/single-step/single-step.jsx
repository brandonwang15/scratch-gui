import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import stepIcon from './single-block-step.svg';
import styles from './single-step.css';

const SingleStepComponent = function (props) {
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
                styles.singleStep,
                {
                    [styles.isActive]: active
                }
            )}
            draggable={false}
            src={stepIcon}
            width="20"
            height="20"
            title={title}
            onClick={onClick}
            {...componentProps}
        />
    );
};
SingleStepComponent.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string
};
SingleStepComponent.defaultProps = {
    active: false,
    title: 'Single Step'
};
export default SingleStepComponent;
