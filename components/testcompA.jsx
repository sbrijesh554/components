import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';

class TestCompA extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return (
            <div>{this.props.testbdata}</div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        shareData : () => {dispatch('testcompa')}
    })
}

const mapStateToProps = (state) => {
    return ({
        testbdata
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TestCompA);