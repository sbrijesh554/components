import { saveData, fetchData } from './api';
export const postDataAction = function (data) {
    return (dispatch) => {
        saveData(data).then((response) => {
            console.log(response);
            //dispatch({type : "formDataReducer", payload : {data : response}})
        },
            () => {
                alert("error!!!");
            }
        )
    }
}

export const getDataAction = function () {
    return (dispatch) => {
        fetchData().then(
            (response) => {
                console.log(response);
                dispatch({type : "applyData", payload : {data : response.data}})
             },
            () => {
                alert("error!!!");
             }
        )
    }
}

export const storeDataAction = function (data) {
    return (dispatch) => dispatch({ type : "updatedData" , payload : { inputData : data } });
}