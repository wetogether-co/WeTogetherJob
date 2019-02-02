<template>
  <div>
    <div class="header-img use-flexbox text-center overflow-hidden">
      <img src="./assets/logo-sc.png" class="rounded" alt="Responsive image">
    </div>
    <hr>
    <div class="body-conten">
      <button v-on:click="userFilterKey = 'all'" :class="{ active: userFilterKey == 'all' }" class="btn btn-outline-warning ">All</button>
      <button v-on:click="userFilterKey = 'selectds'" :class="{ active: userFilterKey == 'selectds' }" class="btn btn-outline-warning ">資料科學</button>
      <button v-on:click="userFilterKey = 'selectde'" :class="{ active: userFilterKey == 'selectde' }" class="btn btn-outline-warning ">資料工程</button>
      <h2 class="card-text total-count"> 總共{{userFilter.length}}筆</h2>
      <div class="card text-center"  v-for="(job,index) in userFilter" :key="job.index">
        <div class="card-body">
          <p class="card-text">{{job.companyName}}</p>
          <div class="jobtitle">
          <h5 class="card-title jobname">{{job.jobName}}</h5>
          </div>
          <div class="card-text required">
          <div class="card-text simplejd">
            <h5>工作描述</h5> {{job.simpleJD}}</div>
          <div class="card-text other">
            <h5>技能要求</h5> {{job.detail.other}}</div>
          </div>
          <p>工作經驗{{job.detail.experience}}｜ 需求 {{job.detail.number}}</p>
          <h5>聯絡人</h5><p>{{job.detail.contact}}</p>
          <a :href="job.jobLink" target="_blank" class="btn btn-outline-warning btn-sm">查看職缺</a>
          <a :href="job.companyLink" target="_blank" class="btn btn-outline-warning btn-sm" >查看公司</a>
          <button class="btn btn-outline-warning btn-source btn-sm" >{{job.source}}</button>

        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>


<script>
import Jobs from './assets/job.json'

export default {
  components: {
    },
  data() {
    return {
      jobs: Jobs,
      userFilterKey: 'all',
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
      return this.jobs.filter((item) => item.key ==='資料科學')
    },
    selectde() {
      return this.jobs.filter((item) => item.key ==='資料工程')
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
.total-count{
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.btn-outline-warning{
  margin-top: -2px;
  margin-right: -6px;
}
.btn-outline-warning:hover{
  background-color: #FDBD4A;
}
.required{
  width: 510px;
  margin: 0 auto;
}
.simplejd{
  padding: 10px;
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
