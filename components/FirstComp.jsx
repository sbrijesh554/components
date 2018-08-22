import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {postDataAction, storeDataAction} from '../action';

class FirstComp extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     id: '',
        //     name: '',
        //     age: ''
        // }
        this.saveData = this.saveData.bind(this);
        this.handleChangeForAge = this.handleChangeForAge.bind(this);
        this.handleChangeForId = this.handleChangeForId.bind(this);
        this.handleChangeForName = this.handleChangeForName.bind(this);
    }
    saveData() {
        const data = this.props.inputData;
        this.props.postDataAction(data);
        // axios.post('http://localhost:8081', data).then((response) => {
        //     console.log(response);
        // });
    }
    handleChangeForId(e) {
        // this.setState({
        //     id: e.target.value
        // });
        this.props.inputData.id = e.target.value;
        this.props.storeDataAction(this.props.inputData);
    }
    handleChangeForName (e) {
        // this.setState({
        //     name: e.target.value
        // });
        this.props.inputData.name = e.target.value;
        this.props.storeDataAction(this.props.inputData);
    }
    handleChangeForAge(e) {
        // this.setState({
        //     age: e.target.value
        // });
        this.props.inputData.age = e.target.value;
        this.props.storeDataAction(this.props.inputData);
    }
    render() {
        const styles = {
            formSection : {
                padding: "10px",
            textAlign: "center"
            },
            buttonSection : {
                textAlign: "center",
                padding: "10px"
            }
        }

        return (
            <div>
                <div style = {styles.formSection}>
                    <label>ID</label> <input type="text" value={this.props.inputData.id} onChange={this.handleChangeForId} />
                    <label>NAME</label><input type="text" value={this.props.inputData.name} onChange={this.handleChangeForName} />
                    <label>AGE</label><input type="text" value={this.props.inputData.age} onChange={this.handleChangeForAge} />
                </div>
                <div style = {styles.buttonSection}>
                    <button onClick={this.saveData}>SUBMIT</button>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    postDataAction,
    storeDataAction
}, dispatch);
const mapStateToProps = (state) => ({
    inputData : state.inputData.inputData
})
export default connect(mapStateToProps, mapDispatchToProps)(FirstComp);