import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({hours, minutes, total, onClick}) => {

    let hoursFormatted = (hours+"").padStart(2, '0');
    let minutesFormatted = (minutes+"").padStart(2, '0');

    let totalHoursFormatted = (total.hours+"").padStart(2, '0');
    let totalMinutesFormatted = (total.minutes+"").padStart(2, '0');

    return (<tr>
                <td>{hoursFormatted}:{minutesFormatted}</td>
                <td>{totalHoursFormatted}:{totalMinutesFormatted}</td>
                <td align="right">
                    <button className="btn btn-secondary btn-circle btn-sm" style={{marginTop: "-3px"}} onClick={onClick}>
                        <i className="fas fa-trash"></i>
                    </button>
                </td>
            </tr>);
};

TableRow.propTypes = {
    hours: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired
}

export default TableRow;
