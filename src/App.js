import React from 'react';
import logo from './logo.svg';
import './App.css';
import PushMenu from 'react-push-menu';
import Page from '../src/menu';

export class App extends React.Component {
  render(){
    return (
     <div>
       <Page/>  
     </div>
    );
  }
}


export default App;
