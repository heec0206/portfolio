<template>
  <article class="list">
    <ul>
      <li v-for="item in list" :key="item.No">
        <router-link :to="'list' + item.No">
          <span class="thumb">
            <img class="cropImg" :src="item.img"/>
            <span class="cropBox" :style=" 'background-image:url(' + item.img + ');' "></span>
          </span>
          <span class="info">
            <strong class="tit">{{ item.name }}</strong>
            <span class="txt">{{ item.link }}</span>
          </span>
        </router-link>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  data() {
    return {
      list: [

        {
          No : "12",
          name: "하나은행 디지털캠퍼스",
          link: "https://campus.hanabank.com",
          img : require('@/assets/images/list12.jpg'),
        },

        {
          No : "11",
          name: "CLOOM",
          link: "https://www.cl-oom.com",
          img : require('@/assets/images/list11.jpg'),
        },

        {
          No : "10",
          name: "전국병원학교",
          link: "https://hospital.s4u.kr",
          img : require('@/assets/images/list10.jpg'),
        },

        {
          No : "09",
          name: "스쿨포유(초등)",
          link: "https://es.s4u.kr",
          img : require('@/assets/images/list09.jpg'),
        },

        {
          No : "08",
          name: "교육개발원 방송통신중·고등학교",
          link: "https://www.cyber.hs.kr",
          img : require('@/assets/images/list08.jpg'),
        },

        {
          No : "07",
          name: "국가평생교육진흥원 학점은행제 알리미",
          link: "http://www.cbinfo.or.kr",
          img : require('@/assets/images/list07.jpg'),
        },

        {
          No : "06",
          name: "국립생물자원관",
          link: "http://www.nibr.go.kr",
          img : require('@/assets/images/list06.jpg'),
        },

        {
          No : "05",
          name: "국토교통인재개발원 교육안내서비스",
          link: "https://edu.molit.go.kr",
          img : require('@/assets/images/list05.jpg'),
        },

        {
          No : "04",
          name: "코웨이 지속가능경영",
          link: "http://sustainability.coway.co.kr",
          img : require('@/assets/images/list04.jpg'),
        },

        {
          No : "03",
          name: "아이티윌",
          link: "https://www.itwillplus.com",
          img : require('@/assets/images/list03.jpg'),
        },

        {
          No : "02",
          name: "양성평등교육진흥원",
          link: "https://www.kigepe.or.kr",
          img : require('@/assets/images/list02.jpg'),
        },

        {
          No : "01",
          name: "수협은행",
          link: "https://biz.suhyup-bank.com",
          img : require('@/assets/images/list01.jpg'),
        },
      ]
    };
  },
};

</script>

<style scoped lang="scss">

</style>
