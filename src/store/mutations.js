import {FETCH_LISTS, SET_ACCESS_TOKEN,SET_MY_INFO,
    SET_TOKEN_BLANK,SET_INFO_NULL,FETCH_POST,SET_POST_NULL,SET_BOARD_TITLE} from './mutation-types'

import api from '../api/index.js'
import Cookies from 'js-cookie'

export default{
    [FETCH_LISTS] (state,payload){
        state.posts = payload;
    },
    [SET_BOARD_TITLE](state,payload){
        state.boardTitle= payload;
    },
    [SET_ACCESS_TOKEN](state,accessToken){
        if(accessToken){
            state.accessToken = accessToken
            api.defaults.headers.common.Authorization = `Token ${accessToken}`
            // 토큰을 cookie에 저장한다. 저장기한은 하루.
            Cookies.set('accessToken',accessToken,{
                expires:1
            })
        }
    },
    [SET_MY_INFO](state,me){
        if(me){
            state.me = me
        }
    },
    [SET_TOKEN_BLANK](state){
        state.accessToken=''
        delete api.defaults.headers.common.Authorization
        Cookies.remove('accessToken')
    },
    [SET_INFO_NULL](state){
        state.me=null
    },
    [FETCH_POST](state, post){
        state.post = post
    },
    [SET_POST_NULL](state){
        state.post = null
    }
}