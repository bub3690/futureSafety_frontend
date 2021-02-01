<template>
    <div class="CompanyWelcomePage">
        <div class="category-explain">
            <h2 class="title-header">
                <span class="title">회사소개</span> 
            </h2>
            <div class="button-category">
                <button v-for="item in AllCategory" :key="item"
                @click="goClick(AllCategory.indexOf(item))" 
                :class="{
                    'category btn-default active':AllCategory.indexOf(item)===clickedIndex,
                    'category btn-default':AllCategory.indexOf(item)!=clickedIndex}">
                    {{item}}
                </button>
            </div>
        </div>
        <div class="WelcomeComponent">
		    <div class="content cate1" v-show="clickedIndex==0">
                <div class="content-element">
                    <div class="content-box">
                        <p>
                            <img class="content-image" src="/static/welcome/사업자등록증.PNG">
                        </p>
                    </div>
                </div>
            </div>
            <div class="content cate2" v-show="clickedIndex==1">
                <div class="content-element">
                    <div class="content-box">
                        <p>
                            <img class="content-image" src="/static/welcome/지정서.PNG">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'CompanyWelcomePage',
        data(){
            return{
                AllCategory:['사업자등록증','지정서'],
                clickedIndex:0,
                
            }
        },
        methods:{
            goClick(indexClicked){
                this.clickedIndex = indexClicked
            },
        }

    }
</script>

<style scoped>
.CompanyWelcomePage{   
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

/*category */

	.content p.title {
		font-size: 24px;
		text-align: left;
		font-weight: 500;
		margin: 20px 0 20px 0;
	}
	.subtitle {
		font-size: 17px;
		text-align: left;
		margin: 0 0 20px 0;
	}
	.download {
		color: red;
		text-decoration: none;
	}

	.content-box {
		font-size: 17px;
		text-align: justify;
		padding: 15px 20px 15px 20px;
		color: #000000;
		border: 1px solid #eee;
		background: #f7f9fa;
	}

	.list-box {
		border: 1px solid #eee;
		background: #fff;
	}
	.middle {
		text-align: center;
	}
	.content-box table {
		border: 1px solid #000000;
		border-collapse: collapse;
	}
	.content-box table thead tr th {
		border: 1px solid #000000;
		border-bottom: 2px solid #000000;
		text-align: center;
	}

	.redpoint {
		color: #ff3b3b;
	}
	.bluepoint {
		color: #0000ff;
	}
	.purple {
		color: blueviolet;
	}
	.indent {
		padding: 0 0 0 20px;
	}
	.content-box p {
		margin: 5px 0 0 0;
	}
	.content-element {
		padding: 0 0 0 10px;
	}
	.content-box {
		padding: 15px 20px 15px 20px;
		border: 1px solid #eee;
		background: #f7f9fa;
	}
	.content-image {
		max-width: 100%;
		height: auto;
    }

/*welcome  page 전용 */
	.content-box p {
		text-align: center;
	}
</style>