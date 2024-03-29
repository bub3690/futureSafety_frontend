import bus from '../utils/bus.js'
import api from '../api/index.js'


export function fetchPostList({commit},payload){
    const matching1={'notice':'A','safety':'B','help':'C'}

    // payload2 에도 똑같은 값을 담는 이유는 boardTitle에 A,B,C를 통해서 게시판을 구분하기 위함. 
    // NOTICE 페이지에서는 COMPUTED에서 구분해야함.
    const sever_payload = matching1[payload]

    bus.$emit('start:spinner');
    //console.log('패치 list')
    //console.log()
    api.get('/api/board/list/?board_id='+sever_payload).then(
        res=>{

            //console.log(res.data)
            const mutation_payload=res.data
            commit('FETCH_LISTS',mutation_payload)  
            setTimeout(function(){
                bus.$emit('end:spinner')},300)
        }
    )
    
}
export function fetchSearchPostList({commit},payload){
    const matching1={'notice':'A','safety':'B','help':'C'}

    // payload2 에도 똑같은 값을 담는 이유는 boardTitle에 A,B를 통해서 게시판을 구분하기 위함. 
    // NOTICE 페이지에서는 COMPUTED에서 구분해야함.
    var sever_payload = '?board_id='+matching1[payload['board']]
    if(payload['type']==='title'){
        sever_payload = sever_payload+'&title='+payload['data']
    }else if(payload['type']==='name'){
        sever_payload = sever_payload+'&author__name='+payload['data'] 
    }
    // ie 에서 작동이 안되서 따로 변수로 담아서 get함.
    const get_url = encodeURI('/api/board/list/'+sever_payload)
    bus.$emit('start:spinner');
    api.get(get_url).then(
        res=>{
            //console.log(res)
            const mutation_payload=res.data
            commit('FETCH_LISTS',mutation_payload)  
            setTimeout(function(){
                bus.$emit('end:spinner')},300)
        }
    )
    
}

export function setBoardTitle({commit},payload){
    const matching1={'notice':'A','safety':'B','help':'C'}
    const mutation_payload = matching1[payload]
    commit('SET_BOARD_TITLE',mutation_payload)
}

export function signin({commit},payload){
    const post_data=payload
    //username,password가 담겨있음.
    return api.post('/api/user/login',post_data)
        .then(res=>{
                    // res - data - token : 84~~~
                    const {token} = res.data
                    //로그인에 성공하면 commit을 통해 api 모듈의 http 헤더에 토큰을 담는다.
                    commit('SET_ACCESS_TOKEN',token)
                    
                    //토큰을 스토어에 저장하면 api 모듈의 headers에 토큰이 저장되믈오 바로 사용자정보가 불러와진다.
                    //백엔드에서 설정해줘야함.
                    return api.get('/api/user/me')
        }).then(res =>{
            // 사용자 정보 요청이 성공했다면 변이를 사용하여 스토어에 사용자 정보를 제공함.
            commit('SET_MY_INFO',res.data)
        })
}

export function signinByToken({commit}, token){
    //1. 토큰을 스토어에 커밋한다.
    commit('SET_ACCESS_TOKEN',token)
    //2. 사용자의 정보를 받아온 후 스토어에 커밋한다.
    return api.get('/api/user/me')
        .then(res=>{
            //console.log('문제없음.')
            commit('SET_MY_INFO',res.data)

        })


}

export function logout({commit}){
    commit('SET_INFO_NULL')
    commit('SET_TOKEN_BLANK')
}

export function fetchPost({commit}, postId){
    bus.$emit('start:spinner')
    return api.get('/api/board/'+postId)
        .then(res=>{
            //console.log(res)
            // 받아온 post 데이터를 commit해줌.
            //console.log('패치 포스트')
            //console.log(res.data)
            commit('FETCH_POST',res.data)
            //bus.$emit('start:spinner')
            // 예외처리는 각 요청하는 부분에서.
        })


}
export function setPostNull({commit}){
    commit('SET_POST_NULL')
}
export function setUserList({commit}){
    return api.get('/api/user/list')
        .then(res=>{
            //console.log(res)
            commit('FETCH_USERLIST',res.data)
        })
}

export function getUserprofileAdmin({commit},user_id){
    const payload = {
        user_id : user_id,
        admin_page : true
    }
    return api.post('/api/user/me',payload)
        .then(res=>{
            //console.log('admin 유저프로필',res.data)
            commit('SET_USERPROFILE_ADMIN',res.data)
        })

}
export function setUserproifileAdminNull({commit}){
    commit('SET_USERPROFILE_ADMIN_NULL')
}

export default{
    fetchPostList,
    signin,
    signinByToken,
    logout,
    fetchPost,
    setBoardTitle,
    setPostNull,
    fetchSearchPostList,
    setUserList,
    getUserprofileAdmin,
    setUserproifileAdminNull
}