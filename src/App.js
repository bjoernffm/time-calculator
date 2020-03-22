import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import timeApp from './reducers/index'

import Jumbotron from './components/Jumbotron';
import TimeTable from './components/TimeTable';
import Input from './components/Input';
import TotalCard from './components/TotalCard';

const store = createStore(timeApp);

const App = () => (
    <Provider store={store}>
        <Jumbotron title="Aviation Time Calculator" subtitle="Easy time tracking for your logbook" />
        <div className="row">
            <div className="col-sm-6">
                <TimeTable />
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
                <TotalCard />
                <hr />
                <h4>Add time</h4>
                <Input />
            </div>
        </div>
    </Provider>
);

export default App;
