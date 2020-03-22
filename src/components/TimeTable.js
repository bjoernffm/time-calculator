import { connect } from 'react-redux'
//import { setVisibilityFilter } from '../actions'
import Table from '../components/Table';
import { removeTime } from '../actions/actions';

const mapStateToProps = (state, ownProps) => {
    return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRemoveClick: (index) => {
            dispatch(removeTime(index));
        }
    }
}

const TimeTable = connect(mapStateToProps, mapDispatchToProps)(Table);

export default TimeTable