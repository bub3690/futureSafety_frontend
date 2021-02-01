<template>
    <div class="BusinessPage">
        <div class="category-explain">
            <h2 class="title-header">
                <span class="title">{{title}}</span> 
            </h2>
            <div class="button-category">
                <button v-for="item in AllCategory[clickedCategory]" :key="item"
                @click="goClick(AllCategory[clickedCategory].indexOf(item))" 
                :class="{
                    'category btn-default active':AllCategory[clickedCategory].indexOf(item)===clickedIndex,
                    'category btn-default':AllCategory[clickedCategory].indexOf(item)!=clickedIndex}">
                    {{item}}
                </button>
            </div>
        </div>
        <router-view :categoryId="clickedIndex"></router-view>
    </div>
</template>

<script>
    export default {
        name:'BusinessPage',
        data(){
            return{
                AllCategory:{
					'category1':['안전관리자'],
					'category2':['안전보건관리담당자교육 안내', '안전보건관리담당자 선임계'],
                    'category3':['유해위험방지 계획서','제출대상 13개 업종','공단 공문'],
					'category4':['자율안전관리 밀착지원 사업'],
                },
				clickedCategory:null,
				title:'',
                clickedIndex:0,
                
            }
        },
        methods:{
            goClick(indexClicked){
                this.clickedIndex = indexClicked
            },
			dataUpdate(){
			//category에 따라 메뉴 설정위해서 router 분해
			
			var dataArray = this.$route.path.split('/')
			var clickedCategory = dataArray[2]
			// 2 : category3
			//console.log(dataArray)
			
            //var boardName = dataArray[2]
			//초기화 하기
			const titleMatch = {
			'category1' : '안전관리대행',
			'category2' : '안전보건 관리담당자 대행',
			'category3' : '유해위험방지 계획서',
			'category4' : '안전보건공단 민간위탁사업'
			}
			
			this.clickedCategory = clickedCategory
			this.title = titleMatch[clickedCategory]
			this.clickedIndex = 0
			}
        },
		watch: {
		// 라우트가 변경되면 메소드를 다시 호출합니다
		'$route': 'dataUpdate'
		},
		beforeRouteEnter(to,from,next){
			next(vm=>{
				vm.dataUpdate()
			})

		}
    }
</script>

<style scoped>
.BusinessPage{   
    background: #ffffff;
    box-sizing: border-box;
    position:relative;
    min-height:668px;
    width:calc(100% - 190px);
    float:left;
    overflow: hidden;
    padding: 32px 40px;
    font-family: NanumGothic,"나눔고딕",NanumGothic,"돋움",dotum,sans-serif;
}
.title-header{
    margin:0px;
    width:100%;
    margin-top:15px;
}
.title{
    font-size:32px;
    padding: 0 10px 5px 0;
    float: left;
    border-bottom: 2px solid #d9dbdb;
}
.button-category{
    margin:10px 0 10px 0;
    float:left;
    width:100%;
}
.button-category .category{
    float:left;
    width:25%;
    height:42px;
}
.button-category .category.active{
    background: #3498db;
    color:#ffffff;
}
.category-explain::after{
    content: '';
    display: table;
    clear: both;
}
</style>