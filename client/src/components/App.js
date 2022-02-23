import React from 'react'; // using 'import' of webpack and babel giving easy access to es2015 modules
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => { // functional component 
    return ( // returns jsx
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact={true} path="/" component={Landing} />
                    <Route exact={true} path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;