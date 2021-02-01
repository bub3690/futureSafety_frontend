<template>
	<div class="CategoryComponent2 category-main">
		<div class="content cate1" v-show="categoryId==0">
			<div class="content-header">
				<h1>
					[ 안전보건관리담당자교육 안내 ]
					<a class="download" href="https://futuresafetyhome80.run.goorm.io/media/business_files/category2/fsit_category2_1.pdf" download>
						<i class="fas fa-file-pdf"></i>
					</a>
				</h1>
			</div>
			<p class="title">◉ 안전보건관리담당자 안내 팸플릿</p>
			<div class="content-element">
				<div class="content-box">
					<img class="content-image" src="/static/business/category2/education1.PNG" />
				</div>
			</div>
			<div class="content-element">
				<div class="content-box">
					<img class="content-image" src="/static/business/category2/education2.PNG" />
				</div>
			</div>
		</div>
		<div class="content cate2" v-show="categoryId==1">
			<div class="content-header">
				<h1>
					[ 안전보건관리담당자 선임계 ]
					<a class="download" href="https://futuresafetyhome80.run.goorm.io/media/business_files/category2/fsit_category2_2.pdf" download><i class="fas fa-file-pdf"></i></a>
				</h1>
			</div>
			<p class="title">◉ 안전보건관리담당자 선임계 양식</p>
			<div class="content-element">
				<div class="content-box">
					<img class="content-image" src="/static/business/category2/education3.PNG" />
				</div>
			</div>
			<div class="content-element">
				<div class="content-box">
					<img class="content-image" src="/static/business/category2/education4.PNG" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CategoryComponent2',
		props: {
			categoryId: Number,
		},
	};
</script>

<style scoped>
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
</style>