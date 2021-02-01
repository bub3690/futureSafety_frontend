<template>
    <div class="CategoryComponent3 category-main">
        <div class="content cate1" v-show="categoryId==0">
			<div class="content-header">
				<h1>[ 제조업 유해·위험방지 계획서 작성 ]
				<a class="download" href="#"><i class="fas fa-file-pdf"></i></a>
				</h1>
			</div>
            <div class="content-element">
                <p class="title">◉ 법적근거</p>
                <div class="content-box">
                    <p>1. 산업안전보건법 제 42조</p>
                    <p>2. 산업안전보건법 시행령 제 33조의 2</p>
                    <p>3. 산업안전보건법 시행규칙 제 120조 ~ 제 124조의 2</p>
                    <p>4. 고용노동부 고시 제 2017-60호</p>
                    <br>
                    <p class="redpoint">○ 법 제48조 제1항부터 제3항까지의 규정을 위반하여 유해.위험방지계획서를 작성하여 
                    제출하지 않은 경우 : 과태료 1000만원</p>
                    <p class="redpoint indent">공사중지명령 위반 등 : 5년 이하의 징역 또는 5천만원이하의 벌금</p>
                </div>
            </div>
            <div class="content-element">
                <p class="title">◉ 제출대상 </p>
                    <div class="content-box">
                        <p>- 산업안전보건법 시행령 제33조의 2의 대상업종</p>
                        <p>- 산업안전보건법 시행규칙 제120조 제1항의 대상설비</p>
                        <p>※대상업종 또는 특정설비 중 어느 하나에 해당될 경우 제출</p>
                        <br>
                        <p class="bluepoint">○ 제출제외 : PSM 대상 공정(설비)</p> 
                    </div>
            </div>
            <div class="content-element">
                <p class="title purple">1. 대상업종[한국표준산업분류표에 의한 업종 적용] </p>
                <p class="subtitle">전기계약용량이 300킬로와트 이상인 다음의 업종으로 건설물·기계·기구 및 설비 등 
    일체를 설치·이전·변경할 경우 </p>
                <div class="content-box">
                    <table>
                        <!-- 스타일은 postlist와 같이-->
                        <thead>
                            <tr>
                                <th>구분</th>
                                <th>대상업종 코드 번호</th>
                                <th>대상업종</th>
                                <th>시행</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>①</td>
                                <td>25○○○</td>
                                <td>금속가공제품 제조업 </td>
                                <td>2009.01.01.</td>
                                <!-- 연도 합쳐짐 시작-->                
                            </tr>
                            <tr>
                                <td>②</td>
                                <td>23○○○</td>
                                <td>비금속광물제품 제조업 </td>
                                <td>2009.01.01.</td>
                                <!-- 연도 합쳐짐 끝-->                
                            </tr>
                            <tr>
                                <td>③</td>
                                <td>29○○○</td>
                                <td>기타 기계 및 장비 제조업 </td>
                                <td>2012.07.01</td>
                                <!-- 연도 합쳐짐 시작-->         
                            </tr>
                            <tr>
                                <td>④</td>
                                <td>30○○○</td>
                                <td>자동차 및 트레일러 제조업</td>
                                <td>2012.07.01</td>      
                            </tr>
                            <tr>
                                <td>⑤</td>
                                <td>10○○○</td>
                                <td>식료품 제조업</td>
                                <td>2012.07.01</td>      
                            </tr>
                            <tr>
                                <td>⑥</td>
                                <td>22○○○</td>
                                <td>고무제품 및 플라스틱 제조업</td>
                                <td>2012.07.01</td>      
                            </tr>
                            <tr>
                                <td>⑦</td>
                                <td>16○○○</td>
                                <td>목재 및 나무제품 제조업</td>
                                <td>2012.07.01</td>      
                            </tr>
                            <tr>
                                <td>⑧</td>
                                <td>33○○○</td>
                                <td>기타 제품 제조업</td>
                                <td>2012.07.01</td>      
                            </tr>
                            <tr>
                                <td>⑨</td>
                                <td>24○○○</td>
                                <td>1차 금속 제조업</td>
                                <td>2012.07.01</td>      
                            </tr>
                            <tr>
                                <td>⑩</td>
                                <td>32○○○</td>
                                <td>가구제조업</td>
                                <td>2012.07.01</td>
                                <!--연도합쳐짐 끝-->   
                            </tr>
                            <tr>
                                <td>⓫</td>
                                <td>20○○○</td>
                                <td>화학물질 및 화학제품제조업</td>
                                <td>2014.09.13.</td>
                                <!--연도합쳐짐 시작-->   
                            </tr>
                            <tr>
                                <td>⓬</td>
                                <td>261○○</td>
                                <td>반도체조업</td>
                                <td>2014.09.13.</td>      
                            </tr>
                            <tr>
                                <td>⓭</td>
                                <td>262○○</td>
                                <td>전자부품제조업</td>
                                <td>2014.09.13.</td>
                                <!--연도합쳐짐 끝-->
                            </tr>
                        </tbody>
                    </table>
                    <p>※ 한국표준산업분류표(2007년 9차 개정)에 따른 대상 업종명</p>
                    <p>- 업종 세세분류(5자리코드)는  '한국표준산업분류' 파일 참조</p>
                    <p>- 대상유무 파악방법 : 공장등록증 및 사업계획서 업종 코드 번호 확인</p>
                </div>
            </div>
            <div class="content-element">
            <p class="title purple">2.설비대상</p>
            <p class="subtitle">제조업사업장에서 아래의 설비을 신설 또는 이전하거나 주요구조부분을 변경시</p>
                <div>
                    <p class="title">① 금속기타 광물의 용해로</p>
                    <div class="content-box">
                        <p> - 용량 3톤 이상의 용해로를 신설 또는 이전하는 경우</p>
                        <p> - 기존 용해로의 용해용량 증가, 열원의 종류 또는 내부구조를 변경하는 경우</p>
                    </div>
                    <p class="title">② 특수화학설비</p>
                    <div class="content-box">
                        <p>- 기준량 이상을 취급하는 특수화학설비를 신설 또는 이전하는 경우</p>
                        <p>- 기존 특수화학설비를 생산량 증가 등을 위해 대상 특수화학설비를 교체·변경 또는 추가하는 경우</p>
                        <br>
                        <div class="list-box">
                            <p class="redpoint">☞ 특수화학설비란 ?</p>
                            <p>1) 발열반응이 일어나는 반응장치(반응기) : 반응열을 제거하기 위한 냉각 매체를 투입이 가능한 반응기 : 화학물질 합성 또는 중합반응기</p>
                            <p>2) 장치 내부가 폭발위험농도 이내에서 운전되는 증류·정류·증발·추출 등 분리를 행하는 장치</p>
                            <p>3) 가열시켜주는 물질의 온도가 가열되는 위험물질의 분해온도 또는 발화점보다 높은 상태에서 운전되는 설비(열매체가 투입되는 반응기)</p>
                            <p>4) 반응폭주등 이상화학반응에 의하여 위험물질이 발생할 우려가 있는 설비</p>
                            <p>5) 고온(350℃) 또는 고압(1MPa)에서 운전되는 설비</p>
                            <p>6) 화학물질 가열로(가열기)</p>
                        </div>
                    </div>

                    <p class="title">③ 건조설비</p>
                    <div class="content-box">                
                        <p>- 건조기 본체,가열장치,환기장치를 포함하여,열원기준으로 연료의 최대소비량이 시간당
                        50kg이상 또는 최대소비전력이 50kw이상인 다음에 해당하는 설비를 설치·이전하는 경우</p>
                        <p>- 건조물에 포함되는 유기화합물을 건조하는 경우</p>
                        <p>- 도료, 피막제의 도포코팅 등 표면을 건조하여 인화성물질의 증기가 발생하는 경우</p>
                        <p>- 건조물 통한 가연성 분말로 인해 분진이 발생하는 설비</p>
                    </div>
                    <p class="title">④ 가스집합용접장치(고정식)</p>
                        <div class="content-box">
                            - 1000kg 이상 가스집합량인 가스집합용접장치를 신설또는 이전하는 경우<br>
                            - 기존 가스용접장치를 용량의 증가 또는 주관을 변경하는 경우<br>
                        </div>
                        <br>
                    <p class="title">⑤ 허가·관리대상 유해물질 및 분진작업 관련설비(국소배기장치)</p>
                        <div class="content-box">
                            <p>- 허가 또는 관리대상물질 중 49종(안전검사 대상)을 취급하는 관련설비를 송풍량<br>
                            60㎥/min 이상인 국소배기장치를 신설 또는 이전하거나 
                            후드, 덕트,공기정화장, 송풍기를 신설·추가·변경하는 경우</p>
                            <p>- 관리대상물질 중 49종이외 물질을 취급 또는 법상 분진작업장소에 송풍량 150㎥/min    이상인 국소배기장치를 신설 또는 
                            이전하거나 후드,덕트,공기 정화장치,송풍기 신설·추가·변경하는 경우</p>
                            <br>
                            <div class="list-box">
                                <p class="redpoint">☞ 안전검사대상 국소배기장치 관련 해당물질(49종)</p>
                                <br>
                                <p>
                                디아니시딘과 그 염 / 디클로로벤지딘과 그 염 / 베릴륨 / 벤조트리클로리드 / 비소 및 그 무기화합물 / 석면 / 알파-나프틸아민과 그 염 / 염화비닐 / 오로토-톨리딘과 그 염/크롬광 / 크롬산 아연 / 황화니켈 / 휘발성 콜타르피치 / 2-브로모프로판 / 6가크롬 화합물 / 납 및 그 무기화합물 / 노말헥산 / 니켈(불용성 무기화합물) / 디메틸포름아미드 / 벤젠 / 이황화탄소 / 카드뮴 및 그 화합물 / 루엔-2,4-디이소시아네이트 / 트리클로로 에틸렌 / 포름알데히드 / 메틸클로로포름(1,1,1-트리클로로에탄) / 곡물분진 / 망간 / 메틸렌디페닐디이소시아네이트(MDI) / 무수프탈산 / 브롬화메틸 / 수은 / 스티렌 / 시클로헥사논 / 아닐린 / 아세토니트릴 / 아연(산화아연) / 아크릴로 니트릴 / 아크릴아미드 / 알루미늄 / 디클로로메탄(염화메틸렌) / 용접흄 / 유리규산 / 코발트 / 크롬 / 탈크(활석) / 톨루엔 / 황산알루미늄 / 황화수소
                                </p>
                            </div>
                            <br>
                            <p class="redpoint">☞ 분진작업(산업보건기준에관한 규칙 제3조 제2호 별표1) 참조</p>
                            <p class="bluepoint">- 전체환기장치,밀폐설비 - 2011년 11월 18일부터 시행</p>
                        </div>
                </div>
                <p class="title">◉ 제출시기 : 작업시작전 15일전까지</p>
                <div class="content-box">
                    <p>※“작업시작전”이란 계획서 제출 대상 건설물·기계·기구 및 설비 등을 
                        설치·이전하거나 구조변경하는 공사시작을 말함</p>
                </div>

                <p class="title">◉ 유해/위험방지계획서 추진 절차</p>
                <div class="content-box">
                    <p>
                        <img class="content-image" src="/static/business/category3/process1.png">
                    </p>
                </div>

                <p class="title">◉ 계획서 제출처 및 수수료 입금 </p>
                <div class="content-box">
                    <div class="list-box">
                        <p>☞ 제출처 : 사업장 소재 관할 안전보건공단 지역본부·지사</p>
                        <br>
                        <p>☞ 입금계좌 : 계획서 심사 신청 시 가상계좌번호 안내 (안전보건공단)</p>
                        <p>※ 공단에서 사전에 확인일정을 통보하고 해당일에 사업장을 방문하여 계획서 이행여부 
                            <br>확인 후 5일 이내 결과서를사업장에 교부</p>
                        <br>
                        <p>- 확인일 : 계획서 사업개요에 작성된 시운전 기간 중</p>
                    </div>
                </div>


                <p class="title">◉ 유해·위험방지계획서 컨설팅 절차</p>
                <div class="content-box">
                    <p>
                        <img class="content-image" src="/static/business/category3/process2.PNG">
                    </p>
                </div>       

                <p class="title">◉ 심사 수수료</p>
                <div class="content-box">
                    <p>
                        <img class="content-image" src="/static/business/category3/process3.png">
                    </p>
                </div>

                <p class="title">◉ 컨설팅 효과</p>
                <div class="content-box">
                    <div class="list-box">
                        <p>○ 심사시 부적정 요소 감소</p>
                        <p>○ 위탁으로 인한 담당자의 업무효율 극대화 및 시간 감소 효과</p>
                        <p>○ 작업장 내 사전 위험요소 발굴로 인한 안전성 확보</p>
                        <p>○ 전문 기술·인력을 통한 세밀하고 신속한 작성</p>
                        <p>○ 신속한 지식과 정보에 입각한 작성지도</p>
                    </div>
                </div>                       
            </div>
			
		</div>
		<div class="content cate2" v-show="categoryId==1">
        	<div class="content-header">
				<h1>[ 제출대상 13개 제조업종 ] 
					<a class="download" href="#"><i class="fas fa-file-pdf"></i></a>
				</h1>
				<p class="subtitle middle">(산업안전보건법(제48조제1항, 동법시행령제33조의2, 한국표준산업분류표 10차 관련)</p>
				<p class="subtitle middle purple">( 각 세부업종은 첨부파일을 참조 부탁드립니다. )</p>
			</div>
            <div class="content-element">
                <p class="title">① 식료품 제조업 (10***)</p>
			</div>
			<div class="content-element">
                <p class="title">② 목재 및 나무제품 제조업 (16***) - 가구제외</p>
			</div>			<div class="content-element">
                <p class="title">③ 고무제품 및 플라스틱제품 제조업 (22***)</p>
			</div>			<div class="content-element">
                <p class="title">④ 비금속광물제품 제조업 (23***)</p>
			</div>			<div class="content-element">
                <p class="title">⑤ 1차 금속 제조업 (24***)</p>
			</div>			<div class="content-element">
                <p class="title">⑥ 금속가공제품 제조업 (25***) - 기계 및 가구 제외</p>
			</div>			<div class="content-element">
                <p class="title">⑦ 기타 기계 및 장비 제조업 (29***)</p>
			</div>			<div class="content-element">
                <p class="title">⑧ 자동차 및 트레일러 제조업 (30***)</p>
			</div>			<div class="content-element">
                <p class="title">⑨ 가구 제조업 (32***)</p>
			</div>			<div class="content-element">
                <p class="title">⑩ 기타 제품 제조업 (33***)</p>
			</div>			<div class="content-element">
                <p class="title">⑪ 화학물질 및 화학제품 제조업;의약품 제외 (20***)</p>
			</div>			<div class="content-element">
                <p class="title">⑫ 반도체 제조업 (261**)</p>
			</div>			<div class="content-element">
                <p class="title">⑬ 전자부품 제조업 (262**)</p>
			</div>
			 
		</div>
		<div class="content cate3" v-show="categoryId==2">
        	<div class="content-header">
				<h1>[ 공단 공문 ]
					<a class="download" href="#"><i class="fas fa-file-pdf"></i></a>
				</h1>
			</div>
            <div class="content-element">
                <p class="title">◉ 공단 공문 스캔본</p>
				<div class="content-box">
					<p>
                        <img class="content-image" src="/static/business/category3/public_scan.jpg">
                    </p>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
    export default {
        name:'CategoryComponent3',
        props:{
            categoryId:Number
        }
    }
</script>

<style scoped>
.content p.title{
    font-size:24px;
    text-align: left;
    font-weight: 500;
    margin:20px 0 20px 0;
}
.subtitle{
    font-size:17px;
    text-align: left;
    margin:0 0 20px 0;
}
.download{
	color: red; text-decoration: none;
	
}
	
.content-box{
    font-size:17px;
    text-align:justify;
    padding:15px 20px 15px 20px;
    color:#000000;
    border:1px solid #eee;
    background: #f7f9fa;
}

.list-box{
        border:1px solid #eee;
        background: #fff;
}
.middle{
		text-align:center;
	}
.content-box table{
    border:1px solid #000000;
    border-collapse: collapse;
}
.content-box table thead tr th{
    border: 1px solid #000000;
    border-bottom: 2px solid #000000;
    text-align: center;
}


.redpoint{
    color:#FF3B3B;
}
.bluepoint{
    color:#0000FF;
}
.purple{
    color:blueviolet;
}
.indent{
    padding: 0 0 0 20px;
}
.content-box p {
    margin:5px 0 0 0;
 }
.content-element{
    padding:0 0 0 10px;
}
.content-box{
    padding:15px 20px 15px 20px;
    border:1px solid #eee;
    background: #f7f9fa;
}
.content-image{
    max-width: 100%;
    height: auto;
}
</style>