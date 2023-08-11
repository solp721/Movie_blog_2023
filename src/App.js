import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App(props) {
    return (
        <div>
            <Router>
                <Navigation></Navigation>
                <Routes>
                    <Route path='/' exact={true} Component={Home}/>
                    <Route path='/about' Component={About}/>
                    <Route path='/movie-detail' Component={Detail}/>
                </Routes>
            </Router>
        </div>
    );
}
 
export default App;