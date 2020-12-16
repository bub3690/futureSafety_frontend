import {FETCH_LISTS, SET_ACCESS_TOKEN,SET_MY_INFO} from './mutation-types'

import api from '../api/index.js'
import Cookies from 'js-cookie'

export default{
    [FETCH_LISTS] (state,payload){
        state.posts = payload.payload1;
        state.boardTitle= payload.payload2;
    },
    [SET_ACCESS_TOKEN](state,accessToken){
        if(accessToken){
            state.accessToken = accessToken
            api.defaults.headers.common.Authorization = `Token ${accessToken}`
            // 토큰을 cookie에 저장한다. 저장기한은 하루.
            Cookies.set('accessToken',accessToken,{
                expires:3
            })
        }
    },
    [SET_MY_INFO](state,me){
        if(me){
            state.me = me
        }
    }
}