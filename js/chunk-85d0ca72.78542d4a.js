(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85d0ca72"],{"02f4":function(e,t,n){var a=n("4588"),r=n("be13");e.exports=function(e){return function(t,n){var o,c,i=String(r(t)),s=a(n),l=i.length;return s<0||s>=l?e?"":void 0:(o=i.charCodeAt(s),o<55296||o>56319||s+1===l||(c=i.charCodeAt(s+1))<56320||c>57343?e?i.charAt(s):o:e?i.slice(s,s+2):c-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var a=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},"0bfb":function(e,t,n){"use strict";var a=n("cb7c");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,n){"use strict";n("b0c5");var a=n("2aba"),r=n("32e9"),o=n("79e5"),c=n("be13"),i=n("2b4c"),s=n("520a"),l=i("species"),u=!o(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),h=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var f=i(e),b=!o(function(){var t={};return t[f]=function(){return 7},7!=""[e](t)}),p=b?!o(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[l]=function(){return n}),n[f](""),!t}):void 0;if(!b||!p||"replace"===e&&!u||"split"===e&&!h){var g=/./[f],j=n(c,f,""[e],function(e,t,n,a,r){return t.exec===s?b&&!r?{done:!0,value:g.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}),d=j[0],v=j[1];a(String.prototype,e,d),r(RegExp.prototype,f,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}}},4054:function(e,t,n){},4917:function(e,t,n){"use strict";var a=n("cb7c"),r=n("9def"),o=n("0390"),c=n("5f1b");n("214f")("match",1,function(e,t,n,i){return[function(n){var a=e(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,a):new RegExp(n)[t](String(a))},function(e){var t=i(n,e,this);if(t.done)return t.value;var s=a(e),l=String(this);if(!s.global)return c(s,l);var u=s.unicode;s.lastIndex=0;var h,f=[],b=0;while(null!==(h=c(s,l))){var p=String(h[0]);f[b]=p,""===p&&(s.lastIndex=o(l,r(s.lastIndex),u)),b++}return 0===b?null:f}]})},"520a":function(e,t,n){"use strict";var a=n("0bfb"),r=RegExp.prototype.exec,o=String.prototype.replace,c=r,i="lastIndex",s=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e[i]||0!==t[i]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(c=function(e){var t,n,c,u,h=this;return l&&(n=new RegExp("^"+h.source+"$(?!\\s)",a.call(h))),s&&(t=h[i]),c=r.call(h,e),s&&c&&(h[i]=h.global?c.index+c[0].length:t),l&&c&&c.length>1&&o.call(c[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)}),c}),e.exports=c},"5f1b":function(e,t,n){"use strict";var a=n("23c6"),r=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(e))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},6981:function(e,t,n){"use strict";var a=n("4054"),r=n.n(a);r.a},b0c5:function(e,t,n){"use strict";var a=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},fe2f:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("div",[n("div",{staticClass:"block"},[n("el-cascader",{attrs:{"expand-trigger":"hover",options:e.options,placeholder:"Find Your Job"},on:{change:e.handleChange},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}})],1),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"jobcontainer flexcol",attrs:{data:e.filteredRows}},[n("div",{staticClass:" in-contain"},[n("div",{staticClass:"job-list"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0!==e.totalPage,expression:"totalPage!==0"}],staticClass:"pagination"},[n("div",{staticClass:"page-margin"},[n("span",{staticClass:"li-pointer",class:{disabled:1===e.currPage},on:{click:function(t){return t.preventDefault(),e.setPage(e.currPage-1)}}},[n("a",{attrs:{href:"#"}},[n("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"}})])])]),n("span",[e._v("Page "+e._s(e.currPage)+" / "+e._s(e.totalPage))]),n("span",{staticClass:"li-pointer",class:{disabled:e.currPage===e.totalPage},on:{click:function(t){return t.preventDefault(),e.setPage(e.currPage+1)}}},[n("a",{attrs:{href:"#"}},[n("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"}})])])])])]),n("el-row",{attrs:{gutter:24}},e._l(e.filteredRows.slice(e.pageStart,e.pageStart+e.countOfPage).reverse(),function(t,a){return n("div",{key:a,staticClass:"wrap-card"},[n("el-col",{attrs:{xl:6,lg:6,md:8,sm:12,xs:24}},[n("el-card",[n("a",{staticStyle:{color:"black"},attrs:{target:"_blank",href:t.jobLink}},[n("h1",[e._v(e._s(t.jobName))])]),n("h4",[e._v(e._s(t.companyName))]),n("h5",[e._v("Job Description")]),n("p",[e._v(e._s(t.simpleJD))]),n("div",[e._v(e._s(t.salary))]),n("br"),n("el-tag",{attrs:{type:"warning"}},[n("div",[e._v(e._s(t.date))])]),n("el-tag",{attrs:{type:"info"}},[n("div",[e._v(e._s(t.companyAddr))])]),n("el-tag",{attrs:{type:"info"}},[n("div",[e._v(e._s(t.industry))])]),n("br"),n("el-tag",{attrs:{type:"info"}},[n("div",[e._v("經驗"+e._s(t.exp))])]),n("el-tag",{attrs:{type:"info"}},[n("div",[e._v("學歷"+e._s(t.edu))])]),n("br"),n("br"),n("el-button",{attrs:{type:"warning"}},[n("a",{attrs:{href:t.joblink}},[e._v("前往"+e._s(t.source)+"應徵此工作")])]),n("br"),n("div",{staticClass:"divblock"})],1)],1)],1)}),0),n("div",{directives:[{name:"show",rawName:"v-show",value:0!==e.totalPage,expression:"totalPage!==0"}],staticClass:"pagination"},[n("div",{staticClass:"page-margin bottom-pagination"},[n("span",{staticClass:"li-pointer",class:{disabled:1===e.currPage},on:{click:function(t){return t.preventDefault(),e.setPage(e.currPage-1)}}},[n("a",{attrs:{href:"#"}},[n("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"}})])])]),n("span",[e._v("Page "+e._s(e.currPage)+" / "+e._s(e.totalPage))]),n("span",{staticClass:"li-pointer",class:{disabled:e.currPage===e.totalPage},on:{click:function(t){return t.preventDefault(),e.setPage(e.currPage+1)}}},[n("a",{attrs:{href:"#"}},[n("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"}})])])])])])],1)])])])])},r=[],o=(n("4917"),n("cadf"),n("551c"),n("f751"),n("097d"),[{value:"Data",label:"Data",children:[{value:"Engineer",label:"Engineer",children:[{value:"dataengineer",label:"Data Engineer"},{value:"hadoop",label:"Hadoop"}]},{value:"analyst",label:"Analyst",children:[{value:"BI",label:"Business Intelligence"},{value:"資料分析",label:"Data Analyst"},{value:"data+mining",label:"Data Mining"},{value:"data+scientist",label:"Data Scientist"}]},{value:"AI",label:"AI",children:[{value:"machinelearning",label:"Machine Learning"},{value:"computervision",label:"Computer Vision"},{value:"nlp",label:"NLP"}]},{value:"dba",label:"DBA"},{value:"algorithm",label:"Algorithm"}]},{value:"lang",label:"Language",children:[{value:"python",label:"Python"},{value:"java",label:"Java"},{value:"spark",label:"Spark"},{value:"golang",label:"Golang"},{value:"javascript",label:"Javascript"},{value:"php",label:"PHP"},{value:"ror",label:"Ruby on Rails"}]},{value:"web",label:"Web",children:[{value:"frontend",label:"Front-End"},{value:"backend",label:"Backend"},{value:"fullstack",label:"Full-Stack"},{value:"uxui",label:"UX/UI"}]},{value:"other",label:"Other",children:[{value:"intern",label:"Intern"},{value:"devops",label:"DevOps"},{value:"architect",label:"Architect"},{value:"qa",label:"QA"},{value:"manager",label:"Tech Manager"},{value:"productmanager",label:"Product Manager"},{value:"projectmanager",label:"Project Manager"}]}]),c={data:function(){return{options:o,selectedOptions:[],jobs:[],jobcategory:"",countOfPage:3,currPage:0,filter_name:"",selected:null,tabPosition:"top",activeName:""}},components:{},methods:{handleChange:function(e){var t=this;if(t.jobcategory=e[e.length-1],"dataengineer"===t.jobcategory){var n="Data Engineer|data engineer|資料工程|資料處理|ETL|etl";t=this;fetch("https://wetogetherjobdb.herokuapp.com/job?q=data+engineer").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("hadoop"===t.jobcategory){n="Hadoop|hadoop|Hive|hive|cloudera|Hbase|hbase|YARN|yarn",t=this;fetch("https://wetogetherjobdb.herokuapp.com/job?q=hadoop").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.simpleJD.match(n)}),t.currPage=1})}else if("BI"===t.jobcategory){n="商業分析|商業智慧|Bussiness|bussiness|視覺化|tableau|Tableau",t=this;fetch("https://wetogetherjobdb.herokuapp.com/job?q=BI").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.simpleJD.match(n)}),t.currPage=1})}else if("資料分析"===t.jobcategory){n="資料分析|data analyst|Data Analyst|分析|視覺化";fetch("https://wetogetherjobdb.herokuapp.com/job?q=data+analyst").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.simpleJD.match(n)}),t.currPage=1})}else if("data+mining"===t.jobcategory){n="data mining|資料挖掘|資料挖礦|Data Mining|資料探勘";fetch("https://wetogetherjobdb.herokuapp.com/job?q=data+mining").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.simpleJD.match(n)}),t.currPage=1})}else if("data+scientist"===t.jobcategory){n="data scientist|Data Scientist|資料科學";fetch("https://wetogetherjobdb.herokuapp.com/job?q=資料").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.simpleJD.match(n)}),t.currPage=1})}else if("machinelearning"===t.jobcategory){n="人工智慧|Machine Learning|Deep Learning|machine learning|deep learning|機器學習|深度學習|人工智能|ml|ML";fetch("https://wetogetherjobdb.herokuapp.com/job?q=machine+learning").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.simpleJD.match(n)}),t.currPage=1})}else if("computervision"===t.jobcategory){n="電腦視覺|computer vision|CV";fetch("https://wetogetherjobdb.herokuapp.com/job?q=computer+vision").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.simpleJD.match(n)}),t.currPage=1})}else if("nlp"===t.jobcategory){n="自然語言|nlp|NLP|自然語意";fetch("https://wetogetherjobdb.herokuapp.com/job?q=nlp").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.simpleJD.match(n)}),t.currPage=1})}else if("dba"===t.jobcategory){n="資料倉儲|資料庫";fetch("https://wetogetherjobdb.herokuapp.com/job?q=DBA").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.simpleJD.match(n)}),t.currPage=1})}else if("algorithm"===t.jobcategory){n="algorithm|演算法";fetch("https://wetogetherjobdb.herokuapp.com/job?q=algorithm").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.simpleJD.match(n)}),t.currPage=1})}else if("python"==t.jobcategory){n="python|Python";fetch("https://wetogetherjobdb.herokuapp.com/job?q=python").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("java"===t.jobcategory){n="JAVA|java|Java";fetch("https://wetogetherjobdb.herokuapp.com/job?q=java").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("spark"===t.jobcategory){n="spark|Spark";fetch("https://wetogetherjobdb.herokuapp.com/job?q=spark").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("golang"===t.jobcategory){n="golang|Golang|GO|go";fetch("https://wetogetherjobdb.herokuapp.com/job?q=golang").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("javascript"===t.jobcategory){n="javascript|Javascript|js|JS";fetch("https://wetogetherjobdb.herokuapp.com/job?q=javascript").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("php"===t.jobcategory){n="php|PHP";fetch("https://wetogetherjobdb.herokuapp.com/job?q=php").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("ror"===t.jobcategory){n="ruby|Ruby";fetch("https://wetogetherjobdb.herokuapp.com/job?q=ruby+on+rails").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("frontend"===t.jobcategory){n="frontend|Front-End|front-end|前端|網頁設計|Frontend";fetch("https://wetogetherjobdb.herokuapp.com/job?q=web").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("backend"===t.jobcategory){n="backend|Back-End|back-end|後端|Backend";fetch("https://wetogetherjobdb.herokuapp.com/job?q=backend").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("fullstack"===t.jobcategory){n="fullstack|Fullstack|全端|Full Stack|web";fetch("https://wetogetherjobdb.herokuapp.com/job?q=web").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("uxui"===t.jobcategory){n="UIUX|ux design|ui|UX Design|UI|使用者體驗|user experience";fetch("https://wetogetherjobdb.herokuapp.com/job?q=ux").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("manager"===t.jobcategory){n="manager|Manager|經理|主管|lead|leader";fetch("https://wetogetherjobdb.herokuapp.com/job?q=manager").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("intern"===t.jobcategory){n="實習";fetch("https://wetogetherjobdb.herokuapp.com/job?q=intern").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("devops"===t.jobcategory){n="devops|DevOps";fetch("https://wetogetherjobdb.herokuapp.com/job?q=devops").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("architect"===t.jobcategory){n="architect|Architect|架構師";fetch("https://wetogetherjobdb.herokuapp.com/job?q=architect").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("qa"===t.jobcategory){n="QA|qa|測試|test";fetch("https://wetogetherjobdb.herokuapp.com/job?q=測試").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("productmanager"===t.jobcategory){n="product manager|Product Manager|pm|產品";fetch("https://wetogetherjobdb.herokuapp.com/job?q=product+manager").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else if("projectmanager"===t.jobcategory){n="project manager|Project Manager|pm|專案";fetch("https://wetogetherjobdb.herokuapp.com/job?q=project+manager").then(function(e){return e.json()}).then(function(e){t.jobs=e.filter(function(e){return e.jobName.match(n)}),t.currPage=1})}else console.log(e[e.length-1])},open:function(){var e=this;this.$alert("这是一段内容","标题名称",{confirmButtonText:"确定",callback:function(t){e.$message({type:"info",message:"action: ".concat(t)})}})},setPage:function(e){e<=0||e>this.totalPage||(this.currPage=e)}},computed:{filteredRows:function(){var e=this.filter_name.toLowerCase();return""!==this.filter_name.trim()?this.jobs.filter(function(t){return t.simpleJD.toLowerCase().indexOf(e)>-1}):this.jobs},pageStart:function(){return(this.currPage-1)*this.countOfPage},totalPage:function(){return Math.ceil(this.filteredRows.length/this.countOfPage)},id:function(){return category[this.$route.params.id]}}},i=c,s=(n("6981"),n("2877")),l=Object(s["a"])(i,a,r,!1,null,"33a454da",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-85d0ca72.78542d4a.js.map