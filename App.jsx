import React from 'react';
import FirstComp from './components/FirstComp.jsx';
import SecondComp from './components/SecondComp.jsx';
import './styles.css'
import TestComp from './components/TestComp.jsx'; 
import SlideMenu from './components/SlideMenu.jsx';
import 'bootstrap-css-only/css/bootstrap.min.css';
import PreviledgeMenu from './menucomponent/MenuList';
// import TreeView from './components/TreeView.jsx';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentView : "View 1"
    }
    this.setView = this.setView.bind(this);
  }
  setView(e) {
    this.setState({
      currentView : e.target.textContent
    })
  } 

  

  render() {
    const data = [
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
        text: 'Parent 2'
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
      return (
        <div>
          <PreviledgeMenu/>
          {/* <TreeView data={data} color={"#428bca"} /> */}
          {/* <span onClick = {this.setView} className = "menu-styles">View 1</span>
          <span onClick = {this.setView} className = "menu-styles">View 2</span>
          {this.state.currentView === 'View 1' ?
            <FirstComp message = "first comp"></FirstComp>
          :
            <SecondComp message = "second comp"></SecondComp>
      } */}

        </div>
      );
   }
}
export default App;