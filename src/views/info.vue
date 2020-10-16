<template>
  <article class="info">
      <!-- profile -->
      <div class="profile">
  			<div class="profileL"><span class="profileImg"></span></div>
  			<div class="profileR">
  				<span class="nickName">Web Publisher 최희창</span>
  				<ul>
  					<li>생년월일<span>1992.02.06</span></li>
  					<li>경력<span>약 4년 7개월</span></li>
  					<li>연락처<span>010-7364-7387</span></li>
  				</ul>
  				<span class="profileInfo">약 15여개의 다수 프로젝트 진행 경험<br>'나는 프로다.'</span>
  			</div>
  		</div>
      <!-- EOD : profile -->

      <div class="profileBox">
  			<a
        @click="isActive = !isActive"
        :class="{'active': isActive}"
        class="name" href="javascript:void(0);">이력서<span class="fas fa-angle-down"></span></a>
        <transition name="slide">
  			<div class="info" v-if="isActive">
          <div class="infoBox">
  				<h3>학력</h3>
  				<div class="tableScroll">
  					<table class="table_normal mt0">
  						<colgroup>
  							<col width="32.5%">
  							<col width="32.5%">
  							<col width="15%">
  							<col width="15%">
  						</colgroup>
  						<thead>
  							<tr>
  								<th scope="col" class="line0">학교명</th>
  								<th scope="col">재학기간</th>
  								<th scope="col">전공</th>
  								<th scope="col">구분</th>
  							</tr>
  						</thead>
  						<tbody>
  							<tr>
  								<td class="ac line0">한국관광대학교</td>
  								<td class="ac">2013.03 ~ 2013.08</td>
  								<td class="ac">호텔경영학과</td>
  								<td class="ac">중퇴</td>
  							</tr>
  							<tr>
  								<td class="ac line0">성일정보고등학교</td>
  								<td class="ac">2007.03 ~ 2010.02</td>
  								<td class="ac">인터넷경영학과</td>
  								<td class="ac">졸업</td>
  							</tr>
  						</tbody>
  					</table>
  				</div>
  				<h3>경력</h3>
  				<div class="tableScroll">
  					<table class="table_normal mt0">
  						<colgroup>
  							<col width="25%">
  							<col width="*">
  							<col width="25%">
  							<!-- <col width="15%"> -->
  						</colgroup>
  						<thead>
  							<tr>
  								<th scope="col" class="line0">회사명</th>
  								<th scope="col">재직기간</th>
  								<th scope="col">부서/직급/직책</th>
  								<!-- <th scope="col">퇴사사유</th> -->
  							</tr>
  						</thead>
  						<tbody>
                <tr>
                  <td class="ac line0">윌비소프트</td>
                  <td class="ac">2019.08 ~ 2020.10</td>
                  <td class="ac">ui/ux팀 대리</td>
                  <!-- <td class="ac">근로조건</td> -->
                </tr>
  							<tr>
  								<td class="ac line0">월드버텍</td>
  								<td class="ac">2017.12 ~ 2019.02</td>
  								<td class="ac">웹서비스팀 주임</td>
  								<!-- <td class="ac">근로조건</td> -->
  							</tr>
  							<tr>
  								<td class="ac line0">인터마블</td>
  								<td class="ac">2016.12 ~ 2017.05</td>
  								<td class="ac">퍼블리싱파트 대리(프리랜서)</td>
  								<!-- <td class="ac">계약만료(프리랜서)</td> -->
  							</tr>
  							<tr>
  								<td class="ac line0">앱스디자인케이</td>
  								<td class="ac">2015.02 ~ 2016.08</td>
  								<td class="ac">인터넷사업부 사원</td>
  								<!-- <td class="ac">경영악화</td> -->
  							</tr>
  						</tbody>
  					</table>
  				</div>
  				<h3>교육</h3>
  				<div class="tableScroll">
  					<table class="table_normal mt0">
  						<colgroup>
  							<col width="20%">
  							<col width="20%">
  							<col width="20%">
  							<col width="*">
  						</colgroup>
  						<thead>
  							<tr>
  								<th scope="col" class="line0">학원명</th>
  								<th scope="col">교육과정명</th>
  								<th scope="col">수료기간</th>
  								<th scope="col">교육내용</th>
  							</tr>
  						</thead>
  						<tbody>
  							<tr>
  								<td class="ac line0">두드림직업전문학교</td>
  								<td class="ac">스마트웹콘텐츠 과정</td>
  								<td class="ac">2014.08 ~ 2015.01 (6개월)</td>
  								<td>
  									<p class="txt_default mt0">간단한 어플리케이션 및 홈페이지 제작</p>
  									<p class="txt_default">HTML,CSS,JAVA,JAVASCRIPT, J-QUERY 교육 이수</p>
  									<p class="txt_default">포토샵,일러스트레이터, UX/UI 디자인 교육 이수</p>
  								</td>
  							</tr>
  						</tbody>
  					</table>
  				</div>
  				<h3>자격증 및 수상내역</h3>
  				<div class="tableScroll">
  					<table class="table_normal mt0">
  						<colgroup>
  							<col width="15%">
  							<col width="*">
  							<col width="15%">
  							<col width="15%">
  						</colgroup>
  						<thead>
  							<tr>
  								<th scope="col" class="line0">구분</th>
  								<th scope="col">제목</th>
  								<th scope="col">날짜</th>
  								<th scope="col">발행기관</th>
  							</tr>
  						</thead>
  						<tbody>
  							<tr>
  								<td class="ac line0">수상</td>
  								<td>웹어워드코리아 2018 연구기관분야 대상</td>
  								<td class="ac">2018.12</td>
  								<td class="ac">웹어워드코리아</td>
  							</tr>
  							<tr>
  								<td class="ac line0">수상</td>
  								<td>웹어워드코리아 2018 기업프로모션분야 최우수상</td>
  								<td class="ac">2018.12</td>
  								<td class="ac">웹어워드코리아</td>
  							</tr>
  							<tr>
  								<td class="ac line0">수상</td>
  								<td>웹어워드코리아 2018 공공서비스분야 대상</td>
  								<td class="ac">2018.12</td>
  								<td class="ac">웹어워드코리아</td>
  							</tr>
  							<tr>
  								<td class="ac line0">자격증</td>
  								<td>GTQ 포토샵 1급</td>
  								<td class="ac">2015.01</td>
  								<td class="ac"></td>
  							</tr>
  						</tbody>
  					</table>
  				</div>
          </div>
  			</div>
      </transition>
  		</div>

      <div class="profileBox">
        <a
        @click="isActive02 = !isActive02"
        :class="{'active': isActive02}"
        class="name" href="javascript:void(0);">자기소개서<span class="fas fa-angle-down"></span></a>
        <transition name="slide">
  			<div class="info" v-if="isActive02">
          <div class="infoBox">
  				<h3>Character(성격,성향)</h3>
  				<p class="txt_default">성격은 매사에 신중하고 차분합니다.</p>
  				<p class="txt_default">하고 싶다는 의욕이 많아 때로는 능동적인 저돌성 때문에 낭패를 보기도 하지만 남보다 한발 앞서 성취감을 맛보기도 합니다. </p>
  				<p class="txt_default">예의가 바르고 성실하여 주위에서 저를 믿어주시며 그 기대에 보답하려는 마음이 곧 강한 책임감으로 바뀌었습니다.</p>
  				<p class="txt_default">주변 관계는 어릴 때부터 특별한 어려움 없이 원만한 편입니다.</p>
  				<p class="txt_default">성격 자체가 모가 나지 않은 이유도 있었지만, 책임감이 강하고 남들에 대한 배려심이 깊은 편입니다.</p>
  			  <h3>Communication(대화,소통)</h3>
  				<p class="txt_default"><strong class="txt_strong">"나는 프로다. 그리고 우리는 프로다."</strong></p>
  				<p class="txt_default">업무에 대한 전문성과 맡은 바에 대한 책임감을 지니고,</p>
  				<p class="txt_default">현실에 만족하되 안주하지 않는 열정을 지니고,</p>
  				<p class="txt_default">자신의 의견을 피력할 수 있는 자신감과 비판을 과감히 수용할 줄 아는 겸허함을 지니고,</p>
  				<p class="txt_default">혼자만이 아닌 주변의 동료들과 함께한다는 공동체의식을 중요시 여깁니다.</p>
          <h3>Knowledge & Experirence (지식과 경험)</h3>
          <p class="txt_default"><strong class="txt_strong">공공기관, 금융권 등을 포함한 약 15여개의 프로젝트 진행 경험</strong></p>
          <p class="txt_default">PL로서 프로젝트를 주도하는 역할 및 구성원으로서의 서포트 역할 등을 경험을 쌓아왔습니다.</p>
          <p class="txt_default">다수의 프로젝트를 경험하는 과정에서 다양한 분야의 사람들과 적극적으로 소통하였고 웹어워드 수상 및 웹접근성 인증마크 취득 등 성과를 냈습니다.</p>
          <p class="txt_default">어떠한 상황에서도 경험을 바탕으로 모두가 공감할 수 있는 결과물을 낼 수 있게 항상 노력하며 정진합니다.</p>
  				<h3>Attitude(태도)</h3>
  				<p class="txt_default">#T.P.O</p>
  				<p class="txt_default">Time, Place, Occasion.</p>
  				<p class="txt_default">시간(time), 장소(place), 상황(occasion)에 따라 패션업계가 마케팅 세분화 전략에 의해 강조한 영어 약자입니다.</p>
  				<p class="txt_default">저는 T.P.O를 바라보는 시각이 조금은 다릅니다.</p>
  				<p class="txt_default">업무를 지원할 경우엔 때로는 본인의 확실한 원칙을 뒤로한 채 YES맨이 되어야 할 수 있어야 하며</p>
  				<p class="txt_default">업무를 주도할 경우엔 때로는 과감하게 진행 및 이끌어갈 수 있어야 한다는 방법과 태도 등을 생각합니다.</p>
  				<p class="txt_default">때와 장소, 경우에 따른 복장뿐만 아니라 방법과 태도 등의 구분을 의미한다고 생각합니다.</p>
        </div>
  			</div>
      </transition>
		</div>

    <div class="profileBox">
      <a
      @click="isActive03 = !isActive03"
      :class="{'active': isActive03}"
      class="name" href="javascript:void(0);">경력기술서<span class="fas fa-angle-down"></span></a>
      <transition name="slide">
			<div class="info" v-if="isActive03">
          <div class="infoBox">
  				<h3>Skill Infomation</h3>
  				<p class="txt_hyphen txt_gray">html / CSS / CSS preprocessor / Micro Interaction / Publishing Guide / Responsive web / IE8+ CrossBrowsing</p>
  				<p class="txt_hyphen txt_gray">Javascript / Jquery / Eclipse / inteliJ / SVN / Git</p>
  				<p class="txt_hyphen txt_gray">약 15여개의 다양한 프로젝트 경험</p>
  				<p class="txt_hyphen txt_gray">타팀과의 활발한 커뮤니케이션 및 진행 경험</p>
  				<p class="txt_hyphen txt_gray">웹표준 및 웹접근성 인증마크 취득 경험 다수</p>
  				<p class="txt_hyphen txt_gray">웹어워드 부문별 대상 및 최우수상 2개 수상</p>
  				<p class="txt_hyphen txt_gray">관심사항 : FRONT-END, Vue</p>
          <h3>윌비소프트</h3>
          <p class="txt_default02">윌비소프트 ui/ux 대리 근무</p>
          <p class="txt_default03">2019년 이러닝·학습지원 시스템 구축 및 유지관리 사업</p>
          <p class="txt_hyphen txt_gray">퍼블리싱 가이드 작성</p>
          <p class="txt_hyphen txt_gray">퍼블리싱 참여율 약 50%</p>
          <p class="txt_default03">웅진씽크빅 온라인 성인교육 사이트 구축 프로젝트</p>
          <p class="txt_hyphen txt_gray">퍼블리싱 가이드 작성</p>
          <p class="txt_hyphen txt_gray">퍼블리싱 참여율 100%</p>
          <p class="txt_default03">2019년 병원학교 홈페이지 구축 사업</p>
          <p class="txt_hyphen txt_gray">퍼블리싱 참여율 약 50%</p>
          <p class="txt_default03">지식교육포탈 고도화를 위한 솔루션 구입 및 전산개발 용역계약</p>
          <p class="txt_hyphen txt_gray">반응형 가로,세로형 막대 차트 하드코딩 및 스크립팅</p>
          <p class="txt_hyphen txt_gray">반응형 SVG 기반 꺾은선 그래프 하드코딩 및 스크립팅</p>
          <p class="txt_hyphen txt_gray">퍼블리싱 참여율 약 50%</p>
          <p class="txt_default03">직무역량평가 및 보상마일리지 전산개발 용역계약</p>
          <p class="txt_hyphen txt_gray">마일리지 관련 micro animation</p>
          <p class="txt_hyphen txt_gray">퍼블리싱 참여율 100%</p>
          <p class="txt_default03">대교 써밋국어 학습시스템 구축 계약</p>
          <p class="txt_hyphen txt_gray">퍼블리싱 가이드 작성</p>
          <p class="txt_hyphen txt_gray">퍼블리싱 참여율 100%</p>
          <p class="txt_default03">스마트 직업훈련 플랫폼(STEP) 2단계 구축 사업</p>
          <p class="txt_hyphen txt_gray">퍼블리싱 참여율 50%</p>
          <!--
          <p class="txt_default02">2019년 이러닝·학습지원 시스템 구축 및 유지관리 사업</p>
          <p class="txt_default03"></p>
          <p class="txt_hyphen txt_gray"></p>
          -->
  				<h3>월드버텍</h3>
  				<p class="txt_default02">월드버텍 웹서비스팀 주임 근무</p>
  				<p class="txt_default03">2017, 2018 방송통신중·고등학교 사이버교육시스템 유지관리 및 개선사업 (교육개발원)</p>
  				<p class="txt_hyphen txt_gray">웹접근성 인증 마크 취득(개발팀 협업 및 퍼블리싱 관련 단독 진행)</p>
  				<p class="txt_hyphen txt_gray">video.js를 활용한 동영상 플레이어 ux/ui 커스터마이징</p>
  				<p class="txt_hyphen txt_gray">관리자(CMS) 기반 퍼블리싱 지원</p>
  				<p class="txt_hyphen txt_gray">사용자 문제은행 관련 퍼블리싱 및 개발팀 협업</p>
  				<p class="txt_hyphen txt_gray">퍼블리싱 참여율 100%(단독진행)</p>
  				<p class="txt_default03">2018년 학점은행제 정보공시 시스템 개선 및 운영 (국가평생교육진흥원)</p>
  				<p class="txt_hyphen txt_gray">웹접근성 인증마크 획득 경험(참여율 100%)</p>
  				<p class="txt_hyphen txt_gray">퍼블리싱 가이딩 작성 및 프로젝트 주도 경험</p>
  				<p class="txt_hyphen txt_gray">퍼블리싱 참여율 100%(단독진행)</p>
  				<p class="txt_default03">2018 홈페이지 개편 및 기능 고도화 (국립생물자원관)</p>
  				<p class="txt_hyphen txt_gray">2018 웹어워드 공공/의료 부문 &gt; 연구기관 대상 수상</p>
  				<p class="txt_hyphen txt_gray">퍼블리싱 가이딩 작성, 프로젝트 주도 경험</p>
  				<p class="txt_hyphen txt_gray">퍼블리싱 참여율 50% 이상</p>
  				<p class="txt_default03">수요자 중심의 교육정보서비스 구축 (국토교통인재개발원)</p>
  				<p class="txt_hyphen txt_gray">사용자 및 관리자(CMS) 기반, 키오스크 퍼블리싱 지원</p>
  				<p class="txt_hyphen txt_gray">퍼블리싱 참여율 30% 내외</p>
  				<p class="txt_default03">코웨이 지속가능경영</p>
  				<p class="txt_hyphen txt_gray">2018 웹어워드 프로모션 부문 &gt; 기업프로모션 최우수상 수상</p>
  				<p class="txt_hyphen txt_gray">퍼블리싱 가이드 작성 및 프로젝트 주도 경험</p>
  				<p class="txt_hyphen txt_gray">국문 퍼블리싱 참여율 약 80% 이상</p>
  				<p class="txt_hyphen txt_gray">영문 퍼블리싱 참여율 100%</p>
  				<p class="txt_default03">아이티윌 홈페이지 개편 및 영업사이트 개선</p>
  				<p class="txt_hyphen txt_gray">강남센터 퍼블리싱 참여율 약 50% 내외</p>
  				<p class="txt_hyphen txt_gray">부산센터 퍼블리싱 참여율 약 80% 내외</p>
  				<p class="txt_default03">2017년 차세대 통합 이러닝 (양성평등교육진흥원)</p>
  				<p class="txt_hyphen txt_gray">2018 웹어워드 공공/의료 부문 &gt; 공공서비스분야 최우수상 수상</p>
  				<p class="txt_hyphen txt_gray">웹접근성 인증 마크 획득(퍼블리싱 참여율 100%)</p>
  				<p class="txt_hyphen txt_gray">퍼블리싱 참여율 약 30% 내외</p>
  				<h3>인터마블</h3>
  				<p class="txt_default02">인터마블 퍼블리싱파트 대리 근무</p>
  				<p class="txt_hyphen txt_gray">대규모/금융권 프로젝트 경험</p>
  				<p class="txt_hyphen txt_gray">웹접근성 인증 마크 취득</p>
  				<p class="txt_hyphen txt_gray">SVN 형상관리툴 사용 경험</p>
  				<p class="txt_hyphen txt_gray">인터넷뱅킹 퍼블리싱 참여율 약 20% 내외</p>
  				<p class="txt_hyphen txt_gray">스마트뱅킹 퍼블리싱 참여율 약 30% 내외</p>
  				<h3>앱스디자인케이</h3>
  				<p class="txt_default02">앱스디자인케이 인터넷사업부 사원</p>
  				<p class="txt_hyphen txt_gray">위치기반 하이브리드 웹/앱 개발 프로젝트 참여</p>
  				<p class="txt_hyphen txt_gray">웹 퍼블리싱 업무로 반응형 웹 솔루션 개발 참여</p>
  				<p class="txt_hyphen txt_gray">크로스브라우징을 통한 웹사이트(PC, Mobile) 제작 경험</p>
  				<p class="txt_hyphen txt_gray">bootstrap를 활용하여 반응형 웹 사이트 제작 경험</p>
        </div>
			</div>
      </transition>
		</div>

  </article>
</template>

<script>
export default {
  data(){
    return {
      isActive: true,
      isActive02: false,
      isActive03: false,
    }
  },
  methods : {

  }
}
</script>
