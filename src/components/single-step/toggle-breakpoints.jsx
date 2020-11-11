import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import breakpointsIcon from './breakpoint.svg';
import styles from './toggle-breakpoints.css';

const ToggleBreakpointsComponent = function (props) {
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
                styles.toggleBreakpoints,
                {
                    [styles.isActive]: active
                }
            )}
            draggable={false}
            src={breakpointsIcon}
            width="20"
            height="20"
            title={title}
            onClick={onClick}
            {...componentProps}
        />
    );
};
ToggleBreakpointsComponent.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string
};
ToggleBreakpointsComponent.defaultProps = {
    active: false,
    title: 'Toggle Breakpoints'
};
export default ToggleBreakpointsComponent;
