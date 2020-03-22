import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

//const Table = ({times}) => {
let Table = ({times}) => {
console.log(times);
    let hoursFormatted = "--";
    let minutesFormatted = "--";

    if (times.length > 0) {
        hoursFormatted = (times[times.length-1].total.hours+"").padStart(2, '0');
        minutesFormatted = (times[times.length-1].total.minutes+"").padStart(2, '0');
    }

    return (
        <div className="card border-left-primary shadow py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total time</div>
                        <div className="h3 mb-0 font-weight-bold text-gray-800">{hoursFormatted}:{minutesFormatted}</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-stopwatch fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

Table.propTypes = {
    times: PropTypes.arrayOf(
        PropTypes.shape({
            hours: PropTypes.number.isRequired,
            minutes: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}

const mapStateToProps = (state, ownProps) => {
    return state;
}

Table = connect(mapStateToProps)(Table);

export default Table;
