import React from 'react';
import './App.css';
import CustomerLayout from './containers/Layout'
import BaseRouter from './routes'
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';

class App extends React.Component{
    render(){
      return (
        <div className="App">
          <Router>
            <CustomerLayout {...this.props}>
                <BaseRouter />
            </CustomerLayout>
          </Router>
        </div>
      );
    }
}

export default App;
