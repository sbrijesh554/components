import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { getDataAction } from '../action';
import {bindActionCreators} from 'redux';
class SecondComp extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     id: '',
        //     name: '',
        //     age: ''
        // }
    }
    componentDidMount() {
        this.props.getDataAction();
        // axios.get('http://localhost:8081').then((resp) => {
        //     this.setState({
        //         id: resp.data.id,
        //         name: resp.data.name,
        //         age: resp.data.age
        //     })
        // })
    }
    render() {
        return (
            <div>
                {this.props.formData && this.props.formData.map(function(data){
                    <div>
                        <div>Id : {data.data.id}</div>
                        <div>Name : {data.data.name}</div>
                        <div>Age : {data.data.age}</div>
                    </div>
                })
                }
                
            </div>
        )
    }
}

SecondComp.propTypes = {
    message: PropTypes.string
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getDataAction
},dispatch);
const mapStateToProps = (state) => ({
    formData : state.formData.formData
})
export default connect(mapStateToProps, mapDispatchToProps)(SecondComp);