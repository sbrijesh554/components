import React from 'react';
import PropTypes from 'prop-types';
import TestCompA from './testcompA.jsx';
import TestCompB from './testcompB.jsx';
import { connect } from 'react-redux';
import styles from './slidemenu.css';

class TestComp extends React.Component {

    increment = () => {
        this.props.dispatch({type : "increment"});
    }

    decrement = () => {
        this.props.dispatch({type : "decrement"});
    }

    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        document.body.style.backgroundColor = "white";
    }

    render() {  
        return (
            <div>
                <div id="mySidenav" className={styles.sidenav}>
                <a href="#" className={styles.closebtn} onClick={this.closeNav}>x</a>
                <ul> Menu 1
                    <li><a>About</a></li>
                    <li><a>Services</a></li>
                </ul>
                <ul> Menu 2
                    <li><a>About</a></li>
                    <li><a>Services</a></li>
                </ul>
                </div>

                <div id="main">
                <h2>Sidenav Push Example</h2>
                <span style={{fontSize:"30px",cursor:"pointer"}} onClick={this.openNav}>+</span>
                </div>
                {/* <button onClick = {this.increment}>Add</button>
                <span>{this.props.counter}</span>
                <button onClick = {this.decrement}>Subtract</button> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        counter : state.count.count
    })
}

export default connect(mapStateToProps)(TestComp);