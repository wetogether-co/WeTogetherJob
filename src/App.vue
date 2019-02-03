<template>
  <div>
    <div class="header-img use-flexbox text-center overflow-hidden">
      <!-- <img src="./logo-sc.png" class="rounded" alt="Responsive image"> -->
      <img src="./logo-sc.png" class="rounded" alt="Responsive image">
    </div>
    <hr>
    <div class="body-conten">
      <button v-on:click="userFilterKey = 'all'" :class="{ active: userFilterKey == 'all' }" class="btn btn-outline-warning ">All</button>
      <button v-on:click="userFilterKey = 'selectds'" :class="{ active: userFilterKey == 'selectds' }" class="btn btn-outline-warning ">資料科學</button>
      <button v-on:click="userFilterKey = 'selectdp'" :class="{ active: userFilterKey == 'selectdp' }" class="btn btn-outline-warning ">深度學習</button>
      <button v-on:click="userFilterKey = 'selectde'" :class="{ active: userFilterKey == 'selectde' }" class="btn btn-outline-warning ">資料工程</button>
      <button v-on:click="userFilterKey = 'selectcd'" :class="{ active: userFilterKey == 'selectcd' }" class="btn btn-outline-warning ">Cloud</button>
      <button v-on:click="userFilterKey = 'selecthd'" :class="{ active: userFilterKey == 'selecthd' }" class="btn btn-outline-warning ">Hadoop</button>
      <button v-on:click="userFilterKey = 'selectjv'" :class="{ active: userFilterKey == 'selectjv' }" class="btn btn-outline-warning ">Java</button>
      <button v-on:click="userFilterKey = 'selectpy'" :class="{ active: userFilterKey == 'selectpy' }" class="btn btn-outline-warning ">Python</button>
      <button v-on:click="userFilterKey = 'selectfe'" :class="{ active: userFilterKey == 'selectfe' }" class="btn btn-outline-warning ">前端</button>
      <button v-on:click="userFilterKey = 'selectbe'" :class="{ active: userFilterKey == 'selectbe' }" class="btn btn-outline-warning ">後端</button>
      <h2 class="card-text filterkey" v-show="userFilterKey==='all'">全部職缺</h2>
      <h2 class="card-text filterkey" v-show="userFilterKey==='selectds'">資料科學</h2>
      <h2 class="card-text filterkey" v-show="userFilterKey==='selectdp'">深度學習</h2>
      <h2 class="card-text filterkey" v-show="userFilterKey==='selectde'">資料工程</h2>
      <h2 class="card-text filterkey" v-show="userFilterKey==='selectcd'">Cloud</h2>
      <h2 class="card-text filterkey" v-show="userFilterKey==='selecthd'">Hadoop</h2>
      <h2 class="card-text filterkey" v-show="userFilterKey==='selectjv'">Java</h2>
      <h2 class="card-text filterkey" v-show="userFilterKey==='selectpy'">Python</h2>
      <h2 class="card-text filterkey" v-show="userFilterKey==='selectfe'">前端</h2>
      <h2 class="card-text filterkey" v-show="userFilterKey==='selectbe'">後端</h2>
      <h4 class="card-text total-count"> 總共{{userFilter.length}}筆</h4>
      <div class="card text-center"  v-for="(job,index) in userFilter" :key="job.index">
        <div class="card-body">
          <p class="card-text">
          <button class="btn btn-outline-warning btn-source recent btn-sm" >{{job.source}}</button>            
            {{job.companyName}}</p>
          <div class="jobtitle">
          <h5 class="card-title jobname">
          <p v-show="recentjob.today === job.detail.datePosted" class="btn btn-outline-warning btn-source btn-sm recent" >NEW</p>
          <p v-show="recentjob.today !== job.detail.datePosted" class="btn btn-outline-warning btn-source btn-sm recent" >{{job.detail.datePosted}}</p>
            {{job.jobName}}
          </h5>
          </div>
          <div class="card-text required">
          <div class="card-text simplejd">
            <h5>工作描述</h5> <p class="content-text">{{job.simpleJD}}</p></div>
          <div class="card-text other">
            <h5>工作要求</h5> <p class="content-text">{{job.detail.other}}</p></div>
          </div>
          <p>工作經驗{{job.detail.experience}}｜ 需求 {{job.detail.number}}</p>
          <h5>聯絡人</h5><p>{{job.detail.contact}}</p>
          <a :href="job.jobLink" target="_blank" class="btn btn-outline-warning btn-sm btn-link">查看職缺</a>
          <a :href="job.companyLink" target="_blank" class="btn btn-outline-warning btn-sm btn-link" >查看公司</a>

        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>


<script>
import Jobs from './job.json'

export default {
  components: {
    },
  data() {
    return {
      jobs: Jobs,
      userFilterKey: 'all',
      recentjob: {
        today:'2019-02-01',
      },
    }
  },
  computed: {
    userFilter() {
      return this[this.userFilterKey]
    },
    all() {
      return this.jobs
    },
    selectds() {
      let ds = '資料科學|資料分析|數據分析'
      return this.jobs.filter((item) => item.jobName.match(ds))
    },
    selectde() {
      let de = '資料工程|ETL|資料處理|數據處理|Data Engineer|Big Data'
      return this.jobs.filter((item) => item.jobName.match(de))
    },
    selectdp() {
      let dp = '深度學習';
      return this.jobs.filter((item) => item.jobName.match(dp))
    },
    selectjv() {
      let jv = 'JAVA|Java|java';
      return this.jobs.filter((item) => item.jobName.match(jv))
    },
    selectcd() {
      let cd = 'cloud|Cloud|雲端';
      return this.jobs.filter((item) => item.jobName.match(cd))
    },
    selectpy() {
      let py = 'PYTHON|Python|python';
      return this.jobs.filter((item) => item.jobName.match(py))
    },
    selectfe() {
      let fe = 'Front|前端';
      return this.jobs.filter((item) => item.jobName.match(fe))
    },
    selectbe() {
      let be = 'Node|後端|全端';
      return this.jobs.filter((item) => item.jobName.match(be))
    },
    selecthd() {
      let hd = 'HADOOP|Hadoop|hadoop';
      return this.jobs.filter((item) => item.simpleJD.match(hd))
    },
  },
}
</script>

<style>
html,body {
  font-family: 微軟正黑體;
  padding: 0 auto;
  margin: 0 auto;
}
h1 {
  text-align: center;
}
hr{
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #FDBD4A;
  margin: 0;
  padding: 0;
  background-color: #FDBD4A;
}

img{
  width: 50%;
  height: auto;
}
.header-img{
  background-color: #FDBD4A;
}
.filterkey{
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.total-count{
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.jobname{
  vertical-align: center;
}

.recent{
  
}

.notrecent{

}

.btn-source{
  cursor: default !important;
  border-color: #fff !important;
  font-weight: 400;
  margin-bottom: 2px;
  margin-right: 10px !important;
  background-color: #FDC10A;
  color: black !important;
  font-weight: 700;
}
.btn-outline-warning{
  margin-top: -2px;
  margin-right: -6px;
  
}
.btn-outline-warning:hover{
  background-color: #FDBD4A;
}
.btn-link{
  color: black;
  border: 1px solid #FDBD4A;
  margin-right: -6px;
}
.btn-link:hover{
  text-decoration:none;
  color: black;
}
.required{
  width: 510px;
  margin: 0 auto;
}
.simplejd{
  padding: 10px;
  text-align: left;
}
.other{
  padding: 10px;
}
.use-flexbox{
  height: 100px;
  display: -webkit-flex;
  display:         flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.content{
  display: -webkit-flex;
  display: flex;
}

.joblist{
  /* border: 1px solid #aaa; */
  background-color: #fff;
  padding: 10px;
  cursor: pointer;
}
.joblist:hover{
  /* background-color: #faa; */
}
.detaillist{
  display: -webkit-flex;
  display: flex;
}
.salary{
  flex: 1;
  font-size: 12px;
}
.number{
  font-size: 12px;
  flex: 1;
}

.comname{
  -webkit-flex: 1;
  flex: 1;
  font-size: 14px;
  color: gray;
  font-weight: 300;
  /* font-weight:lighter; */

}
.industry{
  font-size: 10px;
  font-weight: 300;
  color: gray;
}

.btn-name{
  padding: 1px;
  border-right-width: 1px;
  border-left-width: 1px;
  height: 44px;
  width: 44px;
  font-size: 14px;
}



</style>
