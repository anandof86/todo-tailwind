const drawerReducer = (state ={
    "state" : false,
    "action" : "create"
}, action) =>{
    switch(action.type){
        case "show":
            return {
                "state" : true,
                "action": "create"
            };
        case "hide":
            return {
                "state" : false,
                "action": "create"
            };
        case "Editshow":
            return {
                "state" : true,
                "action" : "edit",
                "id" : action.payload.id
            };
        case "Edithide":
            return {
                "state" : false,
                "action" : "edit",
                "id" : action.payload.id
            };
        default:
            return state
    }
};

export default drawerReducer; 