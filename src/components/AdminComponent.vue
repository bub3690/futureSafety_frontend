<template>
    <div class="AdminComponent">
        <div class="util">
            <div>
                <span>전체 회원 수 : </span>
                <span>{{list.length}}</span>
            </div>
        </div>
        <table class="listTable">
            <colgroup>
                <col style="width:40%"/>
                <col style="width:10%"/>
                <col style="width:20%"/>
                <col style="width:20%"/>
                <col style="width:10%"/>
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">회원</th>
                    <th scope="col">권한</th>
                    <th scope="col">가입일</th>
                    <th scope="col">최근접속일</th>
                    <th scope="col">관리</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in list" :key="user.user_id">
                    <td class="name" scope="col">
                        <p>
                            <span class="descript">성함(회사) : </span>
                            <span>{{user.name}}</span><span>({{user.company}})</span>    
                        </p>
                        <p>
                            <span class="descript">아이디 : </span>
                            <span>{{user.user_id}}</span>
                        </p>
                        <p>
                            <span class="descript">이메일 : </span>
                            <span>{{user.address}}</span>
                        </p>
                    </td>
                    <td class="permission" scope="col">
                        <span v-if="!user.is_active" class="notAllow">
                            권한없음
                        </span>
                        <span v-if="user.is_active&&user.is_admin" class="admin">
                            관리자
                        </span>
                        <span v-if="user.is_active && !user.is_admin" class="customer">
                            일반회원
                        </span>                        
                    </td>
                    <td scope="col">
                        <span class="publishedDate">
                            {{user.date_published_str}}
                        </span>
                    </td>
                    <td scope="col">
                        <span class="loginDate">
                            {{user.date_lastlogin_str}}
                        </span>
                    </td>
                    <td scope="col">
                        <button @click="onEdit(user.user_id)" class="btn-default">
                            <i class="fas fa-user-cog"></i>
                        </button>
                    </td>
                </tr>
            </tbody>


        </table>
    </div>
</template>

<script>

    export default {
        name:'AdminComponent',
        props:{
            list:Array,
        },
        methods:{
            onEdit(item){
                console.log('onedit')
                this.$emit('edit:submit',item)
            }
        }
    }
</script>

<style scoped>
.AdminComponent{
    padding:19px 70px;
    border:1px solid #e0e0e0;
    background-color:white;
    font-size:14px;
}

.util{
    margin-bottom:5px;
    float:right;
}
.util div{
    display: inline-block;
    margin-left: 10px;
}

.listTable{
    width:100%;
    border-top:2px solid black;
    border-spacing:0;
}
.listTable thead{
    background-color:#f7f7f7;
}

.listTable thead tr th{
    text-align: center;
    border-bottom:1px solid rgb(128,128,128);
}

.listTable tbody{
    border-top:3px solid rgb(128,128,128);
    font-weight:500;
}
.listTable tbody td{
    padding:8px;
    border-top:1px solid #ddd;
    line-height: 1.42;
}
.listTable tbody td a{
    text-decoration: none;
    color:#555;
}

.listTable tbody .tableNumber .checked{
    color:#ffc107;
}

.listTable tbody .name{
    text-align: left;
}
.listTable tbody .name .descript{
    font-weight: 400;
}
.listTable tbody .permission{
    text-align: left;
    font-weight: 400;
}
.listTable tbody .permission .notAllow{
    text-align: left;
    color:#b42d15;
    font-weight: 700;
}
.listTable tbody .permission .admin{
    text-align: left;
    color:#2a2cbe;
    font-weight: 700;
}


</style>