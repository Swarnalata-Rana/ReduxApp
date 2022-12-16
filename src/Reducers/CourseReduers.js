export default function courseReducers(state=[],action){
    switch(action.type){
        case "CRETAE_COURSE":
        return [...state,Object.assign({},action.course)]
        default:
            return state;
    }
}