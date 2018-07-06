import React from 'react';

class Home extends React.Component{
  //pros: read Only
  //state: read and write
  constructor(props){
    super();
    this.state = {
      age: props.age,
      status: 0
    }
    setTimeout(()=>{
      this.setState({
        status:  1
      })
    }, 3000);
  }

  onMakeOlder(){
    this.setState({
        age: this.state.age + 3
    });
  }

  render(){
    return (
      <div>
        <p>in a new component!</p>
        <p>your name is {this.props.name}, your age is {this.state.age}</p>
        <p>status: {this.state.status}</p>
        <hr / >
        <button onClick={()=>this.onMakeOlder()} className='btn btn-primary'>make me older!</button>
      </div>

    );
  }
}

export default Home;
