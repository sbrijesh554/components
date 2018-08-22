import React, { Component } from 'react';
import {withRouter, Switch, Route, Link } from 'react-router-dom';
import './menu-list.css';

class PreviledgeMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        this.data = [
          {
            text: 'Parent 1',
            nodes: [
              {
                text: 'Child 1',
                nodes: [
                  {
                    text: 'Grandchild 1'
                  },
                  {
                    text: 'Grandchild 2'
                  }
                ]
              },
              {
                text: 'Child 2'
              }
            ]
          },
          {
            text: 'Parent 2',
            nodes: [
              {
                text: 'Child 1',
                nodes: [
                  {
                    text: 'Grandchild 1'
                  },
                  {
                    text: 'Grandchild 2'
                  }
                ]
              },
              {
                text: 'Child 2'
              }
            ]
          },
          {
            text: 'Parent 3'
          },
          {
            text: 'Parent 4'
          },
          {
            text: 'Parent 5'
          }
        ];
        this.prepareList = this.prepareList.bind(this);
        this.options = []; 
    }

        prepareList(obj){
          for(let i in obj){
              let heading = obj[i].text;
              this.options.push(<li className="nav-item has-child-options" key={obj[i].text} onClick = {event => this.toggleChildMenu(heading, event)}>
              <Link to = {'saas'} className = "nav-link menu-text">{heading} </Link> {(obj)[i].nodes && (obj)[i].nodes.length !== 0 ? <NestedList rooturl = {this.props.url} list = {obj[i].nodes} heading = {(obj)[i].text}/> : ''}
              </li>);
          }
        };

        toggleChildMenu(item, event) {
          event.preventDefault();
          let allChilds = document.getElementsByClassName("hide-child-option");
          for (let i = 0; i < allChilds.length ; i++){
            allChilds[i].style.display = 'none';
          }
          let cols = document.getElementsByClassName(item);
          if(cols.length > 0){
            cols[0].style.display = (cols[0].style.display ===  'block') ? 'none' : 'block';
          }
      };

    render(){
        this.options.splice(0, this.options.length);
        this.prepareList(this.data);
        return ( 
          <div className="menu-container">           
                <ul className = "nav flex-column">
                    {this.options}
                </ul>
                </div>
        )
    }
    
}

class NestedList extends Component{
  constructor(props){
    super(props);
    this.count = 0;
    this.childOptions = [];
    this.hideChildMenu = this.hideChildMenu.bind(this);
  }

  hideChildMenu(item, event) {
    event.stopPropagation();
    let allChilds = document.getElementsByClassName(item);
    for (let i = 0; i < allChilds.length ; i++){
      allChilds[i].style.display = 'none';
    }
  };

  renderChildMenu(obj){
    for(let i in obj){
      let heading = obj[i].text;
      this.childOptions.push(<li className="menu-container has-child-options" onClick = {event => this.hideChildMenu(this.props.heading, event)}  key={obj[i].text}>
      <Link to = {"qweq"} className = "menu-text" >{heading}</Link>
      </li>);
    }
  }
  render(){
    this.childOptions = [];
    this.renderChildMenu(this.props.list);
    return(
      <div className = {`hide-child-option col-2 pt-3 ${this.props.heading}`}>
        <ul className="has-child">{this.childOptions}</ul>
      </div>
    )
  }
}

export default PreviledgeMenu;
