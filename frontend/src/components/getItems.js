import React, { Component } from 'react';

class GetItems extends Component {
  constructor(props){
    super(props);

    this.state = {
      response: String
    }
  }

  componentDidMount() {
    // Simple GET request using fetch
    fetch('http://localhost:3000/api/item/all')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.length);
        for (var i = 0; i < data.length; i++) {
          console.log(data[i].id); //por ahora solo guardemos id y name
          console.log(data[i].name);
          console.log(data[i].iconid);
          console.log(data[i].folderid);
          console.log(data[i].userid);
      } 
      });
}

  render() {
    const { items} = this.state;
    return (<div>
        List of posts
        {
                    
        }
    </div>);
  }
}

export default GetItems;
