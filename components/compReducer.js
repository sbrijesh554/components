const initialState = {
    inputData : {},
    formData : []
  }

export const inputDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case "updatedData":
        return {
          ...state,
          inputData : action.payload.inputData
        }
  
      default:
        return state
    }
}

export const formDataReducer = (state = initialState, action) => {
    switch (action.type){
        case "applyData" : 
        return {
            ...state,
            formData : action.payload.data
        }
        default : 
        return state
    }
}