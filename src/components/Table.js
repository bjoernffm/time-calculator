import React from 'react';
import TableRow from './TableRow';
import PropTypes from 'prop-types';

const Table = ({onRemoveClick, onClearAllClick, times}) => {
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Time list</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Sum</th>
                                <th style={{textAlign: "right"}}>
                                    {
                                        times.length > 0 &&
                                        <button className="btn btn-link btn-sm" style={{padding: "0"}} onClick={() => onClearAllClick()}>
                                            clear all
                                        </button>
                                    }
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {times.map((time, index) => (
                              <TableRow key={index} {...time} onClick={() => onRemoveClick(index) } />
                            ))}
                        </tbody>
                    </table>
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
    ).isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    onClearAllClick: PropTypes.func.isRequired
}

export default Table;
