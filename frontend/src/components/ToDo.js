import React, { Component } from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

class ToDo extends Component {
  constructor(props){
    super(props);
    this.state = {
      reload: Boolean,
      items: [],
      input: String,
    }
  }

  getItemsGET(){
    fetch('http://localhost:3000/api/item/all')
      .then(response => response.json())
      .then(data => {
        this.setState({items: data});
        /*
        console.log(data);
        console.log(data.length);
        for (var i = 0; i < data.length; i++) {
          console.log(data[i].id); //por ahora solo guardemos id y name
          console.log(data[i].name);
          console.log(data[i].checked);
          console.log(data[i].iconid);
          console.log(data[i].folderid);
          console.log(data[i].userid);
        } */
      }).catch(error => console.log(error));
  }

  componentDidMount() {
     this.getItemsGET();
  }

  setInput(texto){
    document.getElementById('input-item').value = texto;
    this.setState({input: texto});
  }

  handleSubmitAdd = async e => { 
    e.preventDefault();

    let texto = this.state.input;

    if (!(!texto || /^\s*$/.test(texto))) {
        await fetch('http://localhost:3000/api/item/save', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: texto})
          })
    }
    
    this.getItemsGET();

    this.setInput('');
  };

  handleSubmitEdit = async e => {
    e.preventDefault();
  }

  handleChange = e => { 
    this.setInput(e.target.value);
  };

  render() {
    if(!this.state.input){
      this.state.input='';
    }
    const { items} = this.state;
    return (<div>
        List of posts
        {
              items.length ?
              items.map(item => <div key={item.id}>
                {item.checked ? 
                <input id={item.id} defaultChecked type="checkbox"  />  : 
                <input id={item.id} type="checkbox"  />  
                }
                {item.name}
                <form className= "edit-item-form" onSubmit={this.handleSubmitEdit}>

                </form>
                <a href=""> Edit</a>
                <a href=""> Delete</a>
                </div>) : null 
        }
              <div className='icons'> 
              <RiCloseCircleLine /> 
              <TiEdit />
              </div>  
          <form className="add-item-form" onSubmit={this.handleSubmitAdd}>
            <input id="input-item"
                type='text' 
                placeholder='Add a todo' 
                name = 'text' 
                className='todo-input'
                onChange={this.handleChange}
            />
            <button className='todo-button-item'> Add todo item</button>
            
        </form>
    </div>);
  }
}

export default ToDo;
