import React, { Component } from 'react';
import Icon from './GithubIcon.svg';


class GithubIcon extends Component {
    render() {
      return (
        <div> 
            <img 
                src={Icon} 
                style={{ height: 53, width: 36 }} 
                alt="logo" 
                className="fab fa-github"
                />
        </div>
        )
    }
  }
  
  export default GithubIcon;
  





