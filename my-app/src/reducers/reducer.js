
const iState = {
    name: "Pradeep",
    wishes:['Happy', 'cool']
}

const reducer = (state=iState, action) => {
    console.log(action)
    if(action.type==='CHANGE_NAME'){
        
        return {
            ...state,
            name:action.payload
        }
    }
return state;
}
export default reducer;