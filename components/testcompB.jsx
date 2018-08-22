import React from 'react';
import { connect } from 'react-redux';

class TestCompB extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div>{this.props.testadata}</div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        shareData : () => {dispatch('testcompb')}
    })
}

const mapStateToProps = (state) => {
    return ({
        testadata
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TestCompB);