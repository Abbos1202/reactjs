import React, { Component } from 'react'

export default class ClassCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount(){
        // console.log('DidMount');
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState){
      if(prevState.count !== this.state.count) {
        console.log('Updated');
        document.title = `Clicked ${this.state.count} times`
      }
    }


  render() {
    // console.log('render');
    return (
      <div>
        <input onChange={(e)=> this.setState({name: e.target.value})} type="text" value={this.state.name} />
        <button onClick={()=> this.setState({count: this.state.count + 1})}>
            Click: {this.state.count} times
        </button>
      </div>
    )
  }
}
