import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import {List,Row} from './List';
import './css/style.css'
import Card from './Card';


class App extends Component{
  render(){
    return(
      <>
      <h1>Hello React</h1>
      <List />
      <List />
      <List />
      <List />
      <Card />
      <Row />
      </>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

