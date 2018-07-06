import React from 'react';

class Home extends React.Component{
  render(){
    console.log(this.props);
    return (
      <div>
        <p>in a new component!</p>
        <p>your name is {this.props.name}, your age is {this.props.age}</p>
        <p>user object => name: {this.props.user.name}</p>
        <p>hobbies</p>
        <ul>
          {this.props.user.hobbies.map((hobby,i)=><li key={i}>{hobby}</li>)}
        </ul>
        <hr / >
        {this.props.children}
      </div>

    );
  }
}

export default Home;
