import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import timeApp from './reducers/index'

import Jumbotron from './components/Jumbotron';
import TimeTable from './components/TimeTable';
import Input from './components/Input';
import TotalCard from './components/TotalCard';
import Footer from './components/Footer';

const store = createStore(timeApp);

const App = () => (
    <Provider store={store}>
        <div id="content">
            <div className="container" style={{maxWidth: "800px", paddingTop: "30px", paddingBottom: "50px"}}>
                <Jumbotron title="Time Calculator" subtitle="Easy time tracking for your logbook" />
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
            </div>
        </div>
        <Footer />
    </Provider>
);

export default App;
