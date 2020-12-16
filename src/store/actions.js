import bus from '../utils/bus.js'
import api from '../api/index.js'


export function fetchPostList({commit},payload){
    bus.$emit('start:spinner');    
    api.get(payload.payload1).then(
        res=>{
            const mutation_payload={'payload1':res.data.data,'payload2':payload.payload2}
            commit('FETCH_LISTS',mutation_payload)

            setTimeout(function(){
                bus.$emit('end:spinner')},300)
        }
    )
    
}
export function signin({commit},payload){
    const post_data=payload
    //username,password가 담겨있음.
    return api.post('https://futuresafeyhome123.run.goorm.io/user/login',post_data)
        .then(res=>{
                    // res - data - token : 84~~~
                    const {token} = res.data
                    //로그인에 성공하면 commit을 통해 api 모듈의 http 헤더에 토큰을 담는다.
                    commit('SET_ACCESS_TOKEN',token)
                    
                    //토큰을 스토어에 저장하면 api 모듈의 headers에 토큰이 저장되믈오 바로 사용자정보가 불러와진다.
                    //백엔드에서 설정해줘야함.
                    return api.get('https://futuresafeyhome123.run.goorm.io/user/me')
        }).then(res =>{
            // 사용자 정보 요청이 성공했다면 변이를 사용하여 스토어에 사용자 정보를 제공함.
            console.log(res)
            commit('SET_MY_INFO',res.data)

        })
}



export default{
    fetchPostList,
    signin
}