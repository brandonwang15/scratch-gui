import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import resumeIcon from './resume.svg';
import styles from './resume.css';

const ResumeExecutionComponent = function (props) {
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
                styles.resume,
                {
                    [styles.isActive]: active
                }
            )}
            draggable={false}
            src={resumeIcon}
            width="20"
            height="20"
            title={title}
            onClick={onClick}
            {...componentProps}
        />
    );
};
ResumeExecutionComponent.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string
};
ResumeExecutionComponent.defaultProps = {
    active: false,
    title: 'Resume'
};
export default ResumeExecutionComponent;
