import React, {Component} from 'react';


class MyComponent extends Component{
shouldComponentUpdate(nextProps, nextState){
 return false;
}
  render(){
    const {title, name, onClick} = this.props;
    return(
      <div className="MyComponent" >
          <h1>Title: {title}</h1>
          <h1>Name: {name}</h1>
          <button onClick = {onClick}>Click Here</button>
      </div>
    )
  }
}

export default MyComponent;
