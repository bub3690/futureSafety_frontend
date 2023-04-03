<template>
    <div class="post-create-form">
        <form @submit.prevent="onSubmit">
            <fieldset>
                <div class="horizontal">
                    <div class="forLabel">
                        <label for="title">제목</label>
                    </div>
                    <div class="forInput">
                        <input class="search-default" v-model="title" id="title" type="text" placeholder="게시물 제목을 입력해주세요."/>
                    </div>
                </div>
                <div class="horizontal">
                    <div class="forLabel">
                        <label for="category">카테고리</label>
                    </div>
                    <div class="forInput">
                        <select id="category" class="select-default" v-model="get_initCategory">
                            <option v-if="isAdmin">{{this.categories[0]}}</option>
                            <option v-if="isAdmin">{{this.categories[1]}}</option>
                            <option>{{this.categories[2]}}</option>
                        </select>
                    </div>
                </div>
                <div class="horizontal">
                    <div class="forLabel">
                        <label for="check">중요 글</label>
                    </div>
                    <div class="forInput">
                        <input class="search-default check" v-model="check" id="check" type="checkbox" :disabled=" isAdmin==false"/>
                    </div>
                </div>
                <div class="horizontal">
                    <div class="forLabel">
                        <label>내용</label>
                    </div>
                    <div class="forInput">
                        <editor
                            ref="toastuiEditor"
                            :options="editorOptions"
                            height="500px"
                            initialEditType="wysiwyg"           
                            />
                    </div>
                </div>
                <div class="horizontal">
                    <div class="forLabel">
                        <label for="file-upload">첨부파일</label>
                    </div>
                    <div class="forInput">
                        <input class="search-default" id="file-upload" ref="fileUpload" @change="processFile($event)"  type="file" placeholder="파일을 첨부해주세요."/>
                        <ul>
                            <li v-for="(item,index) in files" :key="index">
                                <strong>{{item.name}}</strong>
                                <button type="button" @click="removeFile(index)"><i class="fas fa-times"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </fieldset>
            <button class="btn-default save" type="submit">저장</button>
            <button class="btn-default" type="button" @click="goBack()">취소</button>
        </form>
    </div>
</template>

<script>
import store from '../store'
import bus from '../utils/bus.js'
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/vue-editor';
import api from '@/api'
    export default {
        name:'PostCreateForm',
        props:{
            initCategory:String,
        },
        components:{
            editor:Editor
        },
        computed:{
            get_initCategory: {
                //* 중요. props는 자동 업데이트 안되서, computed에서 받고, data를 받아야함.
                //꼭 데이터는 안바꿔도 되는데, 나중에 필요할까봐 사용.
                set:function(){
                    this.category = this.initCategory
                },
                get:function(){
                    return this.initCategory
                }
                
            },

        },
        data(){
            return{
                title:'',
                image_datas:[],
                editorOptions:{
                    hideModeSwitch:true,
                    hooks:{
                            addImageBlobHook (blob, callback) {
                            let fileUpload = (blob) => {
                                const formData = new FormData()
                                formData.append('file', blob)
                                api.post('/api/board/image/', formData).then(res => {
                                //if (res.data.code !== HTTP_201_CREATED) throw res.data.message
                                
                                callback.call('[image]', 'https://futuresafetyhome80.run.goorm.io/'+res.data.file)
                                bus.$emit('send:image_data',res.data.id)
                                }, () => alert('이미지 불러오기 오류가 발생하였습니다. 운영자에게 문의바랍니다.')
                                
                                )
                                .catch(errorMsg => alert(errorMsg+'\n 시스템 오류가 발생생했습니다.\n 해당 메세지를 운영자에게 문의바랍니다.'))
                            }
                            
                            fileUpload(blob, callback)
                            return true
                            }              
                    }
                },
                category:this.initCategory,
                check:false,
                files:[],
                categories:['공지사항','안전 자료실','문의 사항'],
                isAdmin:false,

            }
        },
        methods:{
            onSubmit(){
                //alert('글이 \''+this.category+'\'에 작성되었습니다.')
                const html = this.$refs.toastuiEditor.invoke('getHtml');
                const {title,category,check,files,image_datas} = this
                //console.log(html)
                this.$emit('submit',{title,category,check,files,html,image_datas})
            },
            processFile(event){
                //console.log(event.target.files[0])
                // ie에서는 value ='' 넣을때 processFile이 다시호출됨.. if로 null일때는 작동 안하게함.
                if(!!event.target.files[0]){
                    this.files.push(event.target.files[0])
                    //console.log(this.files)
                    this.$refs.fileUpload.value=''
                }
            },goBack(){
                this.$router.push({name:'Home'})
            },removeFile(index){
                this.files.splice(index,1)
            },insert_image(image){
                //console.log(image)
                this.image_datas.push(image)
            }
        },
        created(){
            bus.$on('send:image_data',this.insert_image)

            //생성될때 유저가 admin이어야만, 중요글과 특정 게시판 작성을 할 수 있게한다.
            const isAdmin = store.state.me.is_admin
            this.isAdmin = isAdmin

            if(!isAdmin){
                console.log("admin x")
                //this.categories.shift()
                //this.categories.shift()
            }   


        },
        beforeDestroy(){
            bus.$off('send:image_data',this.insert_image)
        },

    }
</script>

<style scoped>
.post-create-form{
    padding:19px;
    border:1px solid #e0e0e0;
    background-color:white;
    font-size:14px;
}
.horizontal{
    width:100%;
    border-bottom:1px solid #EEE;
    padding-bottom:10px;
    box-sizing: border-box;
    margin-bottom: 10px;
}
.forLabel{
    box-sizing: border-box;
    display: inline-block;
    width:17%;
    text-align: right;
    margin:0;
    padding:7px 15px 0 15px;
    vertical-align: top;
}
.forLabel label{
    color:#333333;
    font-weight:700;
    line-height: 1.5;

}
.forInput{
    box-sizing: border-box;
    display: inline-block;
    text-align: left;
    width:83%;
    margin:0;
}
.forInput input{
    width:300px;
}
.forInput .check{
    
    width:50px;
}
.post-create-form button.save{
    margin-right:5px;
    background: rgb(52,152,219);
    color:white;
}
</style>