import React, { Component } from 'react'

class List extends Component{
    componentWillUnmount(){
        alert('list deleted')
    }
    render(){
        return(
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
            </ul>
        )
    }
}



 class LifeCycle extends Component {
    constructor(){
        super();
        this.state = {
            count:0,
            display:true
        }
    }

    componentDidMount(){
        console.log('did mount start');
    }

    componentDidUpdate(){
        console.log('did update start');
    }

    

  render() {
    let info;
    if (this.state.display) {
        
        info = <List/>
    }
    return (
      <div className='m-5'>
        {info}
        <span>{this.state.count}</span>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }} className='btn btn-success'>+</button>
        <button className='btn btn-danger' onClick={()=>{
            this.setState({
                display:false
            })
        }}>delete</button>
      </div>
    )
  }
}

export default LifeCycle