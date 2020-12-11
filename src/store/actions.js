import axios from 'axios'
import bus from '../utils/bus.js'
const APICore= axios.create({
    baseURL:'//localhost:8080'
});


export function fetchPostList({commit},payload){
    bus.$emit('start:spinner');    
    APICore.get(payload.payload1).then(
        res=>{
            const mutation_payload={'payload1':res.data.data,'payload2':payload.payload2}
            commit('FETCH_LISTS',mutation_payload)

            setTimeout(function(){
                bus.$emit('end:spinner')},300)
        }
    )
    
}
export default{
    fetchPostList
}