export const hideDrawer = () => {
    return(dispatch) =>{
        dispatch({
            type: "hide",
            payload : {
                "state" : true,
                "action" : "create"
            }
        })
    }
}

export const showDrawer = () => {
    return(dispatch) =>{
        dispatch({
            type: "show",
            payload : {
                "state" : false,
                "action" : "create"
            }
        })
    }
}

export const edithideDrawer = (id) => {
    return(dispatch) =>{
        dispatch({
            type: "Edithide",
            payload : {
                "state" : true,
                "action" : "edit",
                "id": id
            }
        })
    }
}

export const editshowDrawer = (id) => {
    return(dispatch) =>{
        dispatch({
            type: "Editshow",
            payload : {
                "state" : false,
                "action" : "edit",
                "id": id
            }
        })
    }
}