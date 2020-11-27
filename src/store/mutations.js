import {FETCH_LISTS} from './mutation-types'

export default{
    [FETCH_LISTS] (state,payload){
        state.posts = payload.payload1;
        state.boardTitle= payload.payload2;
    }
}