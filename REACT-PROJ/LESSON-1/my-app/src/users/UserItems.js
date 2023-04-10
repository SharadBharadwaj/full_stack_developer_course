import React, { Component } from 'react'

class UserItems extends Component {
  constructor(){
    super();
    console.log(123);
    this.state = {
      id: 'id',
      login: 'mojombo',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo'
    }
  };

  render() {
    return (
      <div className="card text-center">
        User Item
      </div>
    );
  }
}

export default UserItems
