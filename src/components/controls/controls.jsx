import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import GreenFlag from '../green-flag/green-flag.jsx';
import StopAll from '../stop-all/stop-all.jsx';
import SingleStep from "../single-step/single-step.jsx";
import ToggleStep from "../single-step/toggle-step.jsx";
import ToggleBreakpoints from "../single-step/toggle-breakpoints.jsx";
import ResumeExecution from "../single-step/resume.jsx";

import TurboMode from '../turbo-mode/turbo-mode.jsx';

import styles from './controls.css';

const messages = defineMessages({
    goTitle: {
        id: 'gui.controls.go',
        defaultMessage: 'Go',
        description: 'Green flag button title'
    },
    stopTitle: {
        id: 'gui.controls.stop',
        defaultMessage: 'Stop',
        description: 'Stop button title'
    },
    toggleBreakpointsTitle: {
        id: 'gui.controls.breakpoints',
        defaultMessage: 'Toggle Breakpoints',
        description: 'Toggle Breakpoints button title'
    },
    toggleSingleSteppingTitle: {
        id: 'gui.controls.stepping',
        defaultMessage: 'Toggle Single Stepping',
        description: 'Toggle Single Stepping button title'
    },
    resumeTitle: {
        id: 'gui.controls.resume',
        defaultMessage: 'Resume Execution',
        description: 'Resume button title'
    },
    stepTitle: {
        id: 'gui.controls.step',
        defaultMessage: 'Single Step',
        description: 'Single Step button title'
    }
});

const Controls = function (props) {
    const {
        active,
        paused,
        breakpointsEnabled,
        singleStepMode,
        className,
        intl,
        onGreenFlagClick,
        onStopAllClick,
        handleToggleBreakpointClick,
        handleToggleStepClick,
        handleResumeExecutionClick,
        handleSingleStepClick,
        turbo,
        ...componentProps
    } = props;
    return (
        <div
            className={classNames(styles.controlsContainer, className)}
            {...componentProps}
        >
            <GreenFlag
                active={active}
                title={intl.formatMessage(messages.goTitle)}
                onClick={onGreenFlagClick}
            />
            <StopAll
                active={active}
                title={intl.formatMessage(messages.stopTitle)}
                onClick={onStopAllClick}
            />
            <ToggleBreakpoints
                // active={breakpointsEnabled}
                title={intl.formatMessage(messages.toggleBreakpointsTitle)} // TODO(bdnwang): toggle step title text
                onClick={handleToggleBreakpointClick}
            />
            <ToggleStep
                // active={singleStepMode}
                title={intl.formatMessage(messages.toggleSingleSteppingTitle)} // TODO(bdnwang): toggle step title text
                onClick={handleToggleStepClick}
            />
            <ResumeExecution
                active={paused}
                title={intl.formatMessage(messages.resumeTitle)} // TODO(bdnwang): toggle step title text
                onClick={handleResumeExecutionClick}
            />
            <SingleStep
                active={paused}
                title={intl.formatMessage(messages.stepTitle)} // TODO(bdnwang): single step title text
                onClick={handleSingleStepClick}
            />
            {turbo ? (
                <TurboMode />
            ) : null}
        </div>
    );
};

Controls.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    intl: intlShape.isRequired,
    onGreenFlagClick: PropTypes.func.isRequired,
    onStopAllClick: PropTypes.func.isRequired,
    turbo: PropTypes.bool
};

Controls.defaultProps = {
    active: false,
    turbo: false
};

export default injectIntl(Controls);
