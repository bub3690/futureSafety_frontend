import {FETCH_LISTS, SET_ACCESS_TOKEN,SET_MY_INFO} from './mutation-types'

import api from '../api/index.js'

export default{
    [FETCH_LISTS] (state,payload){
        state.posts = payload.payload1;
        state.boardTitle= payload.payload2;
    },
    [SET_ACCESS_TOKEN](state,accessToken){
        if(accessToken){
            state.accessToken = accessToken
            api.defaults.headers.common.Authorization = `Token ${accessToken}`
        }
    },
    [SET_MY_INFO](state,me){
        if(me){
            state.me = me
        }
    }
}