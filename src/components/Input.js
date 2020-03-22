import React from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { addTime } from '../actions/actions';

class Input extends React.Component {
    constructor(props) {
        super(props); // makes this refer to this component

        this.hoursInput = React.createRef();
        this.minutesInput = React.createRef();

        this.onSubmit = this.onSubmit.bind(this);
        this.onKeyDownHours = this.onKeyDownHours.bind(this);
        this.onKeyDownMinutes = this.onKeyDownMinutes.bind(this);

        this.state = {
            hourInput: "EMPTY",
            minuteInput: "EMPTY"
        };
    }

    componentDidMount() {
        this.hoursInput.current.focus();
    }

    onSubmit(e) {
        e.preventDefault();

        let hours = 0;
        let minutes = 0;

        if (!isNaN(parseInt(this.hoursInput.current.value))) {
            hours = parseInt(this.hoursInput.current.value);
        }
        if (!isNaN(parseInt(this.minutesInput.current.value))) {
            minutes = parseInt(this.minutesInput.current.value);
        }

        if (hours !== 0 || minutes !== 0) {
            this.props.dispatch(addTime(hours, minutes));
        }
        this.hoursInput.current.value = '';
        this.minutesInput.current.value = '';
        this.hoursInput.current.focus();
        this.setState({ minuteInput: "EMPTY", hourInput: "EMPTY" });
    }

    onKeyDownHours(e) {
        e.preventDefault();

        if (this.state.hourInput === "EMPTY") {
            if (["Backspace"].indexOf(e.key) !== -1 && this.hoursInput.current.value === "0") {
                this.hoursInput.current.value = "";
                this.setState({ hourInput: "EMPTY" });
            } else if (["0", "Tab", "Enter"].indexOf(e.key) !== -1) {
                this.hoursInput.current.value = "0";
                this.minutesInput.current.focus();
                this.setState({ hourInput: "EMPTY" });
            } else if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(e.key) !== -1) {
                this.hoursInput.current.value = e.key;
                this.setState({ hourInput: "FILLED" });
            }
        } else if (this.state.hourInput === "FILLED") {
            if (["Tab", "Enter"].indexOf(e.key) !== -1) {
                this.minutesInput.current.focus();
            } else if (["Backspace"].indexOf(e.key) !== -1) {
                if (this.hoursInput.current.value.length > 1) {
                    this.hoursInput.current.value = this.hoursInput.current.value.substr(0, this.hoursInput.current.value.length-1);
                } else {
                    this.hoursInput.current.value = "";
                    this.setState({ hourInput: "EMPTY" });
                }
            } else if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].indexOf(e.key) !== -1) {
                this.hoursInput.current.value += e.key;
            }
        }
    }

    onKeyDownMinutes(e) {
        e.preventDefault();

        if (this.state.minuteInput === "EMPTY") {
            if (["Backspace"].indexOf(e.key) !== -1 && this.hoursInput.current.value === "0") {
                this.minutesInput.current.value = "";
                this.setState({ minuteInput: "EMPTY" });
            } else if (["0", "Enter"].indexOf(e.key) !== -1) {
                this.minutesInput.current.value = "0";
                this.onSubmit(e);
            } else if (["1", "2", "3", "4", "5"].indexOf(e.key) !== -1) {
                this.minutesInput.current.value = e.key;
                this.setState({ minuteInput: "FILLED_FIRST" });
            }
        } else if (this.state.minuteInput === "FILLED_FIRST") {
            if (["Enter"].indexOf(e.key) !== -1) {
                this.onSubmit(e);
            } else if (["Backspace"].indexOf(e.key) !== -1) {
                this.minutesInput.current.value = "";
                this.setState({ minuteInput: "EMPTY" });
            } else if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].indexOf(e.key) !== -1) {
                this.minutesInput.current.value += e.key;
                this.setState({ minuteInput: "FILLED_SECOND" });
                this.onSubmit(e);
            }
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-row">
                    <div className="form-group col">
                        <input type="text" className="form-control" placeholder="Hours" ref={this.hoursInput} onKeyDown={this.onKeyDownHours} />
                    </div>
                    <div className="form-group col">
                        <input type="text" className="form-control" placeholder="Minutes" ref={this.minutesInput} onKeyDown={this.onKeyDownMinutes} />
                    </div>
                    <div className="form-group col-auto">
                        <button className="btn btn-success btn-circle btn-sm" style={{marginTop: "5px"}} type="submit">
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </form>
        );
    }
};

Input = connect()(Input);

export default Input;
