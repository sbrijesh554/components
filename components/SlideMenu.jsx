import React from 'react';
import styles from './slidemenu.css';


class SlideMenu extends React.Component{
    
    componentDidMount(){

    }

    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementById("hamburger").style.display = 'none';
    }
    
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        document.body.style.backgroundColor = "white";
        document.getElementById("hamburger").style.display = 'inline-block';
    }

    openSubMenu(e) {
        var a="";
        console.log(e);
    }

    render(){
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
        return(
            <div>
                <div id="mySidenav" className={styles.sidenav}>
                <span className={`${styles.closebtn} glyphicon glyphicon-remove`} onClick={this.closeNav}></span>
                    <ul><span className="glyphicon glyphicon-chevron-down" data-target="#demo" onClick = {this.openSubMenu}>Option A</span>
                        <li><a>Sub-option-1</a></li>
                        <li><a>Sub-option-2</a></li>
                    </ul>
                    <ul> Option B
                        <li><a>Sub-option-1</a></li>
                    </ul>
                </div>

                <div id="main">
                    <button id = "hamburger" type="button" className="btn btn-default btn-sm" onClick={this.openNav}>
                        <span className="glyphicon glyphicon-menu-hamburger"></span>
                    </button>
                </div>
            </div>
        )
    }
}

export default SlideMenu;