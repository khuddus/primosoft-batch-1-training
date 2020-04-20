import React, {Component} from 'react';

class productItem extends Component{
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      isEdit : false
    }
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  onClick(){
    const {onDelete, name} = this.props;
    onDelete(name);
  }
  onEdit(){
    this.setState({isEdit : true});
  }
  onEditSubmit(event){
    event.preventDefault();
    this.props.onEditSubmit(this.nameInput.value, this.priceInput.value,this.props.name);
  }
  render(){
      const {name, price} = this.props;
    return(
        <div>
          {
            this.state.isEdit
            ?
            <form onSubmit = {this.onEditSubmit}> 
            <input placeholder = "name" ref = {nameInput => this.nameInput = nameInput}/> 
            <input placeholder = "price" ref = {priceInput => this.priceInput = priceInput}/>
            <button>save</button>
          </form>
            :
            (
            <div>
            <span>{name}</span> {' : '} 
            <span>{price}</span>
            <button onClick = {this.onEdit}>Edit</button>
            <button onClick = {this.onClick}>Delete</button>
            </div>
            )
            
          }
        </div>     
    );
  }
}

export default productItem;
