<template>
    <div class="post-edit-form">
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
                        <select id="category" class="select-default" v-model="category">
                            <option>공지사항</option>
                            <option>안전 자료실</option>
                        </select>
                    </div>
                </div>
                <div class="horizontal">
                    <div class="forLabel">
                        <label for="check">중요 글</label>
                    </div>
                    <div class="forInput">
                        <input class="search-default check" v-model="check" id="check" type="checkbox"/>
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
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/vue-editor';
import api from '@/api'
    export default {
        name:'PostEditForm',
        components:{
            editor:Editor
        },
        data(){
            return{
                title:'',
                editorOptions:{
                    hideModeSwitch:true,
                    hooks:{
                            addImageBlobHook (blob, callback) {
                            let fileUpload = (blob) => {
                                const formData = new FormData()
                                formData.append('file', blob)
                                api.post('https://futuresafeyhome123.run.goorm.io/board/image/', formData).then(res => {
                                //if (res.data.code !== HTTP_201_CREATED) throw res.data.message
                                //console.log(res.data)
                                callback.call('[image]', 'https://futuresafeyhome123.run.goorm.io'+res.data.file)    
                                }, () => alert('시스템에서 오류가 발생하였습니다. 개발팀에 문의바랍니다.'))
                                .catch(errorMsg => alert(errorMsg))
                            }
                            
                            fileUpload(blob, callback)
                            return true
                            }              
                    }
                },
                category:'공지사항',
                check:false,
                files:[]
            }
        },
        methods:{
            onSubmit(){
                //alert('글이 \''+this.category+'\'에 작성되었습니다.')
                const html = this.$refs.toastuiEditor.invoke('getHtml');
                const {title,category,check,files} = this
                this.$emit('submit',{title,category,check,files,html})
             },
            processFile(event){
                this.files.push(event.target.files[0])
                this.$refs.fileUpload.value=''
            },goBack(){
                this.$router.push({name:'Home'})
            },removeFile(index){
                this.files.splice(index,1)
            }
        }

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