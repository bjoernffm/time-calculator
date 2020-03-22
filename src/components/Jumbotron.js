import React from 'react';
import PropTypes from 'prop-types';

const Jumbotron = ({title, subtitle}) => {
    return (<div className="jumbotron">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{subtitle}</p>
            </div>);
};

Jumbotron.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default Jumbotron;
