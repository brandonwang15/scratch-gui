import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import {connect} from 'react-redux';

import ControlsComponent from '../components/controls/controls.jsx';

class Controls extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleGreenFlagClick',
            'handleStopAllClick',
            'handleToggleStepClick',
            'handleSingleStepClick',
            'handleToggleBreakpointClick',
            'handleResumeExecutionClick'
        ]);
    }
    handleGreenFlagClick (e) {
        e.preventDefault();
        if (e.shiftKey) {
            console.log("TURBO MODE!");
            this.props.vm.setTurboMode(!this.props.turbo);
        } else {
            console.log("NOT TURBO MODE");
            if (!this.props.isStarted) {
                this.props.vm.start();
            }
            this.props.vm.greenFlag();
        }
    }
    handleStopAllClick (e) {
        e.preventDefault();
        this.props.vm.stopAll();
    }
    handleToggleStepClick (e) {
        e.preventDefault();
        this.props.vm.setSingleStepMode(!this.props.vm.runtime.singleStepMode);
        console.log("TOGGLE STEP clicked. singleStepMode set to: %s", this.props.vm.runtime.singleStepMode);
    }
    handleSingleStepClick (e) {
        e.preventDefault();
        console.log("SINGLE STEP clicked.");
        this.props.vm.setDoStep(true);
    }
    handleToggleBreakpointClick (e) {
        e.preventDefault();
        this.props.vm.enableBreakpoints(!this.props.vm.runtime.breakpointsEnabled);
        console.log("TOGGLE BKPT clicked. breakpointsEnabled = %s", this.props.vm.runtime.breakpointsEnabled);
    }
    handleResumeExecutionClick (e) {
        e.preventDefault();
        this.props.vm.setSingleStepMode(false);
        console.log("RESUME clicked.");
    }

    render () {
        const {
            vm, // eslint-disable-line no-unused-vars
            isStarted, // eslint-disable-line no-unused-vars
            projectRunning,
            turbo,
            isPaused,
            breakpointsEnabled,
            singleStepMode,
            ...props
        } = this.props;

        return (
            <ControlsComponent
                {...props}
                active={projectRunning}
                paused={isPaused}
                breakpointsEnabled={breakpointsEnabled}
                singleStepMode={singleStepMode}
                turbo={turbo}
                onGreenFlagClick={this.handleGreenFlagClick}
                onStopAllClick={this.handleStopAllClick}
                handleToggleStepClick={this.handleToggleStepClick}
                handleToggleBreakpointClick={this.handleToggleBreakpointClick}
                handleSingleStepClick={this.handleSingleStepClick}
                handleResumeExecutionClick={this.handleResumeExecutionClick}
            />
        );
    }
}

Controls.propTypes = {
    isStarted: PropTypes.bool.isRequired,
    projectRunning: PropTypes.bool.isRequired,
    turbo: PropTypes.bool.isRequired,
    vm: PropTypes.instanceOf(VM),
    isPaused: PropTypes.bool.isRequired,
    breakpointsEnabled: PropTypes.bool.isRequired,
    singleStepMode: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    isStarted: state.scratchGui.vmStatus.running,
    projectRunning: state.scratchGui.vmStatus.running,
    turbo: state.scratchGui.vmStatus.turbo,
    isPaused: ownProps.vm.runtime.singleStepMode && state.scratchGui.vmStatus.running && !ownProps.vm.runtime.doSingleStep,
    breakpointsEnabled: ownProps.vm.runtime.breakpointsEnabled,
    singleStepMode: ownProps.vm.runtime.singleStepMode
});
// no-op function to prevent dispatch prop being passed to component
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
