const FETCH_POST = 'FETCH_POST'
const FETCH_POST_COMPLETE = "FETCH_POST_COMPLETE";


export const reddit = (state=[], action )=>{
  switch(action.type){
    case FETCH_POST:
    return state; 
    case FETCH_POST_COMPLETE:
    return action.payload
    default:
    return state;
  }
}