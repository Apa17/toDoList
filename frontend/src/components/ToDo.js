import React, { Component } from 'react';

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
          })//.then(response => response.json()).then(dataa => idnueva = dataa[0].id)
          //await fetch('http://localhost:3000/api/item/find('+idnueva+')').then(response => response.json())
          //.then(dataaa => { this.setState.items[this.setState.items.length]=dataaa[0]});
          //lo anterior por alguna razon no funciona, intentare una vez termine.
      }
      
      this.getItemsGET(); //deberia cambiar esto por una solucion ajax. si me queda tiempo

    this.setInput('');
  };

  handleSubmitEdit = async e =>{
    e.preventDefault();
    let texto = document.getElementById('editinput'+e.target.name).value;
     if (!(!texto || /^\s*$/.test(texto))) {
       await fetch('http://localhost:3000/api/item/modifyname', {
           method: 'POST',
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ id: e.target.name, name: texto})
         })//.then(response => response.json()).then(dataa => idnueva = dataa[0].id)
         //await fetch('http://localhost:3000/api/item/find('+idnueva+')').then(response => response.json())
         //.then(dataaa => { this.setState.items[this.setState.items.length]=dataaa[0]});
         //lo anterior por alguna razon no funciona, intentare una vez termine.
     }
    
     this.getItemsGET(); //deberia cambiar esto por una solucion ajax. si me queda tiempo, no me queda jaja
      e.target.style.display = 'none';
      document.getElementById('editb'+e.target.name).value="0";
  };

  handleChange = e => { 
    this.setInput(e.target.value);
  };

  handleClickEdit = e => { 
    if(e.target.value !== "0"){
        document.getElementById('edit'+e.target.name).style.display = 'none';
        e.target.value = "0";
    }else{
        document.getElementById('edit'+e.target.name).style.display = 'block';
        e.target.value = "1";
    }
  };

  handleChangeCheckbox = async e =>{
    await fetch('http://localhost:3000/api/item/modify/'+e.target.id, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify()//, checked: e.target.value})
    });
  };

  handleSubmitDelete = async e =>{
    console.log(e);
    await fetch('http://localhost:3000/api/item/delete/'+e.target.id, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify()//, checked: e.target.value})
    });
    this.getItemsGET(); //esto se podria hacer mas facil pero estoy corto de tiempo, saludos!
  };

  render() {
    if(!this.state.input){
      this.state.input='';
    }
    const { items} = this.state;
    //    
    return (<div>
        {
              items.length ?
              items.map(item => <div key={item.id}>
                {item.checked ? 
                <input id={item.id} value="1" defaultChecked type="checkbox"  onChange={this.handleChangeCheckbox}/>  : 
                <input id={item.id} value="0" type="checkbox"  onChange={this.handleChangeCheckbox}/>  
                }
                <span id={`p${item.id}`}>{item.name}</span>       
                <button id={`editb${item.id}`} name={item.id} value="0" onClick={this.handleClickEdit}>Edit</button>
                <button id={item.id} onClick={this.handleSubmitDelete}>Delete</button>

                <form className="add-item-form" id={`edit${item.id}`} name={item.id} style={{display: 'none'}} onSubmit={this.handleSubmitEdit}>
                    <input  id={`editinput${item.id}`} 
                    type="text" 
                    placeholder={this.name} 
                    ></input>
                    <button className='todo-button-item'> Edit ToDo item</button>
                    <br></br>
                </form>
                </div>

                ) : null 
        }
              
          <form className="add-item-form" onSubmit={this.handleSubmitAdd}>
            <input id="input-item"
                type='text' 
                placeholder='Add a todo' 
                name = 'text' 
                className='todo-input'
                onChange={this.handleChange}
            />
            <button className='todo-button-item'> Add ToDo item</button>
            
        </form>
        <br/>
    </div>);
  }
}

export default ToDo;
