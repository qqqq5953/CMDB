(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-615192b6"],{"0ccb":function(t,e,c){var n=c("e330"),a=c("50c4"),o=c("577e"),r=c("1148"),i=c("1d80"),l=n(r),s=n("".slice),u=Math.ceil,d=function(t){return function(e,c,n){var r,d,p=o(i(e)),b=a(c),m=p.length,h=void 0===n?" ":o(n);return b<=m||""==h?p:(r=b-m,d=l(h,u(r/h.length)),d.length>r&&(d=s(d,0,r)),t?p+d:d+p)}};t.exports={start:d(!1),end:d(!0)}},"4d90":function(t,e,c){"use strict";var n=c("23e7"),a=c("0ccb").start,o=c("9a0c");n({target:"String",proto:!0,forced:o},{padStart:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"6d09":function(t,e,c){"use strict";c.r(e);c("b680");var n=c("7a23"),a={class:"container py-5 px-3 px-xl-0"},o={class:"d-flex align-items-center mb-2"},r=Object(n["h"])("i",{class:"bi bi-box-seam text-warning me-3 fs-1"},null,-1),i=Object(n["h"])("h2",{class:"h1 mb-0 text-primary"},"產品列表",-1),l={class:"row"},s={class:"col-12 my-2"},u={key:0,class:"alert alert-danger alert-dismissible fade show d-flex align-items-center",role:"alert"},d=Object(n["h"])("i",{class:"bi bi-exclamation-triangle me-3"},null,-1),p=Object(n["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),b={class:"col-12 col-sm-6 col-md-12 col-lg my-2"},m=Object(n["j"])(" 切換按鈕狀態： "),h={class:"col-12 col-sm-6 col-md-4 col-lg my-2"},g=["disabled"],f={class:"col-12 col-sm-6 col-md-4 col-lg my-2"},j=["disabled"],O={class:"col-12 col-sm-6 col-md-4 col-lg my-2"},v=["disabled"],P={class:"table-responsive mb-4 mt-2"},x={class:"table align-middle"},y=Object(n["h"])("thead",null,[Object(n["h"])("tr",null,[Object(n["h"])("th",{scope:"col"},"產品名稱"),Object(n["h"])("th",{scope:"col"},"分類"),Object(n["h"])("th",{scope:"col",class:"text-end text-nowrap"},"原價"),Object(n["h"])("th",{scope:"col",class:"text-end text-nowrap"},"售價"),Object(n["h"])("th",{scope:"col",class:"text-nowrap"},"是否啟用"),Object(n["h"])("th",{scope:"col"},"編輯")])],-1),w={scope:"row"},k={class:"text-end"},U={class:"text-end"},M={key:0,class:"text-success"},C={key:1,class:"text-muted"},_={class:"btn-group btn-group-sm",role:"group"},D=["onClick"],I=["disabled","onClick"];function R(t,e,c,R,S,$){var L=Object(n["J"])("Loading"),F=Object(n["J"])("Pagination"),A=Object(n["J"])("EditModal"),B=Object(n["J"])("DeleteModal");return Object(n["z"])(),Object(n["g"])(n["a"],null,[Object(n["k"])(L,{active:S.isLoading},null,8,["active"]),Object(n["h"])("div",a,[Object(n["h"])("header",null,[Object(n["h"])("div",o,[r,i,Object(n["h"])("button",{type:"button",class:"btn btn-dark ms-auto",onClick:e[0]||(e[0]=function(t){return $.openModal(!0)})}," 新增產品 ")]),Object(n["h"])("div",l,[Object(n["h"])("div",s,[S.isLoading&&S.processingCount?(Object(n["z"])(),Object(n["g"])("div",u,[d,Object(n["h"])("div",null,"處理中: "+Object(n["M"])(S.processingCount),1),p])):Object(n["f"])("",!0)]),Object(n["h"])("div",b,[Object(n["h"])("button",{type:"button",class:"btn btn-outline-dark btn-sm h-100 w-100 rounded-pill",onClick:e[1]||(e[1]=function(){return $.toggleDisableButton&&$.toggleDisableButton.apply($,arguments)})},[m,Object(n["h"])("span",{class:Object(n["s"])({"text-danger":!S.disableBtn})},Object(n["M"])(S.disableBtn?"關":"開"),3)])]),Object(n["h"])("div",h,[Object(n["h"])("button",{type:"button",class:"btn btn-outline-dark btn-sm h-100 w-100",disabled:S.disableBtn,onClick:e[2]||(e[2]=function(){return $.getNowPlaying&&$.getNowPlaying.apply($,arguments)})}," 快速新增 NowPlaying ",8,g)]),Object(n["h"])("div",f,[Object(n["h"])("button",{type:"button",class:"btn btn-outline-dark btn-sm h-100 w-100",disabled:S.disableBtn,onClick:e[3]||(e[3]=function(){return $.getUpcoming&&$.getUpcoming.apply($,arguments)})}," 快速新增 upComing ",8,j)]),Object(n["h"])("div",O,[Object(n["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm h-100 w-100",disabled:S.disableBtn,onClick:e[4]||(e[4]=function(){return $.deleteAllProducts&&$.deleteAllProducts.apply($,arguments)})}," 刪除全部 (訂閱除外) ",8,v)])])]),Object(n["h"])("main",P,[Object(n["h"])("table",x,[y,Object(n["h"])("tbody",null,[(Object(n["z"])(!0),Object(n["g"])(n["a"],null,Object(n["H"])(S.products,(function(t){return Object(n["z"])(),Object(n["g"])("tr",{key:t.id},[Object(n["h"])("td",null,Object(n["M"])(t.title),1),Object(n["h"])("th",w,Object(n["M"])(t.category),1),Object(n["h"])("td",k,"$"+Object(n["M"])(t.origin_price.toFixed(2)),1),Object(n["h"])("td",U,"$"+Object(n["M"])(t.price.toFixed(2)),1),Object(n["h"])("td",null,[t.is_enabled?(Object(n["z"])(),Object(n["g"])("span",M,"啟用")):(Object(n["z"])(),Object(n["g"])("span",C,"未啟用"))]),Object(n["h"])("td",null,[Object(n["h"])("div",_,[Object(n["h"])("button",{type:"button",class:"btn btn-outline-primary text-nowrap",onClick:function(e){return $.openModal(!1,t,S.pagination)}}," 編輯 ",8,D),Object(n["h"])("button",{type:"button",class:"btn btn-outline-danger text-nowrap",disabled:"subscription"===t.title.toLowerCase(),onClick:function(e){return $.openDeleteModal(t,S.pagination)}}," 刪除 ",8,I)])])])})),128))])])]),Object(n["k"])(F,{pages:S.pagination,onChangePage:$.getProducts,onPreviousPage:$.getProducts,onNextPage:$.getProducts},null,8,["pages","onChangePage","onPreviousPage","onNextPage"]),Object(n["k"])(A,{ref:"editModal",product:S.tempProduct,onUpdateProduct:$.updateProduct},null,8,["product","onUpdateProduct"]),Object(n["k"])(B,{product:S.tempDeleteProduct,onDeleteProduct:$.deleteProduct,ref:"deleteModal"},null,8,["product","onDeleteProduct"])])],64)}var S=c("5530"),$=c("1da1"),L=(c("96cf"),c("4d90"),c("99af"),c("4de4"),c("d3b7"),c("fb6a"),c("159b"),c("a4d3"),c("e01a"),{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"modalLabel","aria-hidden":"true",ref:"modal"}),F={class:"modal-dialog modal-xl",role:"document"},A={class:"modal-content border-0"},B=Object(n["h"])("section",{class:"modal-header bg-dark"},[Object(n["h"])("h5",{class:"modal-title text-white",id:"exampleModalLabel"},[Object(n["h"])("span",null,"新增產品")]),Object(n["h"])("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),N={class:"modal-body"},z={class:"row",action:"/api/thisismycourse2/admin/upload",enctype:"multipart/form-data",method:"post"},V={class:"col-lg-4"},W={class:"mb-3"},Q=Object(n["h"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),J={class:"mb-3 input-group"},q={class:""},E={class:"mb-3"},T=Object(n["h"])("label",{for:"customFile",class:"form-label"},[Object(n["j"])("或 上傳圖片 "),Object(n["h"])("i",{class:"fas fa-spinner fa-spin"})],-1),H=["src"],Y={class:"col-lg-8"},G={class:"mb-3"},K=Object(n["h"])("label",{for:"title",class:"form-label"},"標題",-1),X={class:"row gx-2"},Z={class:"mb-3 col-12"},tt=Object(n["h"])("label",{for:"category",class:"form-label"},"分類",-1),et={class:"mb-3 col-12"},ct=Object(n["h"])("label",{for:"unit",class:"form-label"},"單位",-1),nt={class:"row gx-2"},at={class:"mb-3 col-12"},ot=Object(n["h"])("label",{for:"origin_price",class:"form-label"},"原價",-1),rt={class:"mb-3 col-12"},it=Object(n["h"])("label",{for:"price",class:"form-label"},"售價",-1),lt=Object(n["h"])("hr",null,null,-1),st={class:"mb-3"},ut=Object(n["h"])("label",{for:"description",class:"form-label"},"產品描述",-1),dt={class:"mb-3"},pt=Object(n["h"])("label",{for:"content",class:"form-label"},"說明內容",-1),bt={class:"mb-3"},mt={class:"form-check"},ht=Object(n["h"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),gt={class:"modal-footer"},ft=Object(n["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function jt(t,e,c,a,o,r){return Object(n["z"])(),Object(n["g"])("div",L,[Object(n["h"])("div",F,[Object(n["h"])("div",A,[B,Object(n["h"])("section",N,[Object(n["h"])("form",z,[Object(n["h"])("div",V,[Object(n["h"])("div",W,[Q,Object(n["h"])("div",J,[Object(n["W"])(Object(n["h"])("input",{type:"url",id:"image",class:"form-control",placeholder:"請輸入一個或多個連結","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.inputImgUrl=t}),ref:"multipleImages"},null,512),[[n["Q"],o.inputImgUrl]]),Object(n["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:e[1]||(e[1]=function(){return r.removeImages&&r.removeImages.apply(r,arguments)})}," 移除 ")]),Object(n["h"])("div",q,[Object(n["h"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=function(){return r.addImages&&r.addImages.apply(r,arguments)})}," 新增圖片 ")])]),Object(n["h"])("div",E,[T,Object(n["h"])("input",{type:"file",name:"file-to-upload",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[3]||(e[3]=function(){return r.uploadFile&&r.uploadFile.apply(r,arguments)})},null,544)]),(Object(n["z"])(!0),Object(n["g"])(n["a"],null,Object(n["H"])(o.tempProduct.imageUrl,(function(t){return Object(n["z"])(),Object(n["g"])("img",{key:t,class:"img-fluid d-block mt-1 py-3 border-bottom border-2 w-100 border-primary",src:t,alt:""},null,8,H)})),128))]),Object(n["h"])("div",Y,[Object(n["h"])("div",G,[K,Object(n["W"])(Object(n["h"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[4]||(e[4]=function(t){return o.tempProduct.title=t}),required:""},null,512),[[n["Q"],o.tempProduct.title]])]),Object(n["h"])("div",X,[Object(n["h"])("div",Z,[tt,Object(n["W"])(Object(n["h"])("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[5]||(e[5]=function(t){return o.tempProduct.category=t}),required:""},null,512),[[n["Q"],o.tempProduct.category]])]),Object(n["h"])("div",et,[ct,Object(n["W"])(Object(n["h"])("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[6]||(e[6]=function(t){return o.tempProduct.unit=t}),required:""},null,512),[[n["Q"],o.tempProduct.unit]])])]),Object(n["h"])("div",nt,[Object(n["h"])("div",at,[ot,Object(n["W"])(Object(n["h"])("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[7]||(e[7]=function(t){return o.tempProduct.origin_price=t}),required:""},null,512),[[n["Q"],o.tempProduct.origin_price]])]),Object(n["h"])("div",rt,[it,Object(n["W"])(Object(n["h"])("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[8]||(e[8]=function(t){return o.tempProduct.price=t}),required:""},null,512),[[n["Q"],o.tempProduct.price]])])]),lt,Object(n["h"])("div",st,[ut,Object(n["W"])(Object(n["h"])("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[9]||(e[9]=function(t){return o.tempProduct.description=t})},null,512),[[n["Q"],o.tempProduct.description]])]),Object(n["h"])("div",dt,[pt,Object(n["W"])(Object(n["h"])("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[10]||(e[10]=function(t){return o.tempProduct.content=t})},null,512),[[n["Q"],o.tempProduct.content]])]),Object(n["h"])("div",bt,[Object(n["h"])("div",mt,[Object(n["W"])(Object(n["h"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[11]||(e[11]=function(t){return o.tempProduct.is_enabled=t})},null,512),[[n["P"],o.tempProduct.is_enabled]]),ht])])])])]),Object(n["h"])("section",gt,[ft,Object(n["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[12]||(e[12]=function(e){return t.$emit("update-product",o.tempProduct)})}," 確認 ")])])])],512)}var Ot=c("e0ae"),vt={mixins:[Ot["a"]],props:{product:{type:Object,default:function(){return{}}}},data:function(){return{tempProduct:{},inputImgUrl:""}},watch:{product:function(){this.tempProduct=this.product,this.tempProduct.is_enabled&&(this.tempProduct.is_enabled=1)}},methods:{addImages:function(){console.log("inputImgUrl",this.inputImgUrl),this.inputImgUrl&&(void 0===this.tempProduct.imageUrl&&(this.tempProduct.imageUrl=[]),this.tempProduct.imageUrl.push(this.inputImgUrl),console.log("tempProduct",this.tempProduct),this.inputImgUrl="")},removeImages:function(){this.tempProduct.imageUrl.pop()},uploadFile:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){var c,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=t.$refs.fileInput.files[0],n=new FormData,n.append("file-to-upload",c),console.dir(c),a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("e-commerce-api","/admin/upload"),e.next=7,t.$http.post(a,n).catch((function(t){console.log(t)}));case 7:o=e.sent,console.log("response",o),o.data.success&&(t.tempProduct.imageUrl=o.data.imageUrl),console.log("this.tempProduct.imageUrl",t.tempProduct.imageUrl);case 11:case"end":return e.stop()}}),e)})))()}}},Pt=c("d959"),xt=c.n(Pt);const yt=xt()(vt,[["render",jt]]);var wt=yt,kt={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"modalLabel","aria-hidden":"true",ref:"modal"},Ut={class:"modal-dialog modal-xl",role:"document"},Mt={class:"modal-content border-0"},Ct={class:"modal-header bg-danger"},_t={class:"modal-title text-white",id:"exampleModalLabel"},Dt=Object(n["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),It={class:"modal-body"},Rt=Object(n["j"])(" 是否刪除 "),St={class:"text-danger fw-bold"},$t=Object(n["j"])(" ？（刪除後無法復原） "),Lt={class:"modal-footer"},Ft=Object(n["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function At(t,e,c,a,o,r){return Object(n["z"])(),Object(n["g"])("div",kt,[Object(n["h"])("div",Ut,[Object(n["h"])("div",Mt,[Object(n["h"])("div",Ct,[Object(n["h"])("h5",_t,[Object(n["h"])("span",null,"刪除 "+Object(n["M"])(o.tempProduct.title),1)]),Dt]),Object(n["h"])("div",It,[Rt,Object(n["h"])("span",St,Object(n["M"])(o.tempProduct.title),1),$t]),Object(n["h"])("div",Lt,[Ft,Object(n["h"])("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=function(e){return t.$emit("delete-product",o.tempProduct)})}," 確認刪除 ")])])])],512)}var Bt={mixins:[Ot["a"]],props:{product:{type:Object}},data:function(){return{tempProduct:{}}},watch:{product:function(){this.tempProduct=this.product}}};const Nt=xt()(Bt,[["render",At]]);var zt=Nt,Vt=c("1799"),Wt={components:{EditModal:wt,DeleteModal:zt,Pagination:Vt["a"]},inject:["emitter","pushMessageStateForDashboard","pushMessageStateForUser","sortData"],data:function(){return{allProducts:[],products:[],pagination:{},tempProduct:{},tempDeleteProduct:{},processingCount:0,isNew:!1,isLoading:!1,disableBtn:!0,top20nowPlaying:[],top20upComing:[],language:"en-US",region:"US",baseImageUrl:"https://image.tmdb.org/t/p/w300"}},methods:{getTodayDate:function(){var t=new Date,e=String(t.getDate()).padStart(2,"0"),c=String(t.getMonth()+1).padStart(2,"0"),n=t.getFullYear();return n+"-"+c+"-"+e},getNowPlaying:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){var c,n,a,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,t.processingCount=0,e.next=4,t.$http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("7bbe6005cfda593dc21cceb93eaf9a8e","&language=").concat(t.language,"&region=").concat(t.region,"&page=1")).catch((function(t){console.log(t)}));case 4:if(c=e.sent,n=c.data.total_pages,!(n>1)){e.next=12;break}return e.next=9,t.getAllNowPlayingData();case 9:a=e.sent,e.next=13;break;case 12:a=c.data.results;case 13:return o=t.getTodayDate(),r=a.filter((function(t){return new Date(t.release_date)<=new Date(o)})),t.top20nowPlaying=r.slice(0,20),e.next=18,t.addManyProducts(t.top20nowPlaying,20,"nowplaying");case 18:return t.isLoading=!1,e.next=21,t.getProducts();case 21:case"end":return e.stop()}}),e)})))()},getAllNowPlayingData:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){var c,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c=[],n=1;case 2:if(!(n<=2)){e.next=10;break}return e.next=5,t.$http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("7bbe6005cfda593dc21cceb93eaf9a8e","&language=").concat(t.language,"&region=").concat(t.region,"&page=").concat(n)).catch((function(t){console.log(t)}));case 5:a=e.sent,a.data.results.forEach((function(t){c.push(t)}));case 7:n++,e.next=2;break;case 10:return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))()},getUpcoming:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){var c,n,a,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,t.processingCount=0,e.next=4,t.$http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat("7bbe6005cfda593dc21cceb93eaf9a8e","&language=").concat(t.language,"&region=").concat(t.region,"&page=1"));case 4:return c=e.sent,n=c.data.total_pages,e.next=8,t.getAllUpComingData(n).catch((function(t){console.log(t)}));case 8:return a=e.sent,o=t.getTodayDate(),r=a.filter((function(t){return new Date(t.release_date)>=new Date(o)})),t.top20upComing=r.slice(0,20),e.next=14,t.addManyProducts(t.top20upComing,20,"upcoming");case 14:return t.isLoading=!1,e.next=17,t.getProducts();case 17:case"end":return e.stop()}}),e)})))()},getAllUpComingData:function(t){var e=this;return Object($["a"])(regeneratorRuntime.mark((function c(){var n,a,o;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:n=[],a=1;case 2:if(!(a<=t)){c.next=10;break}return c.next=5,e.$http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat("7bbe6005cfda593dc21cceb93eaf9a8e","&language=").concat(e.language,"&region=").concat(e.region,"&page=").concat(a));case 5:o=c.sent,o.data.results.forEach((function(t){n.push(t)}));case 7:a++,c.next=2;break;case 10:return c.abrupt("return",n);case 11:case"end":return c.stop()}}),c)})))()},addManyProducts:function(t,e,c){var n=this;return Object($["a"])(regeneratorRuntime.mark((function a(){var o,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("e-commerce-api","/admin/product"),r=0;case 2:if(!(r<e)){a.next=19;break}return n.tempProduct={},n.tempProduct.title=t[r].title,n.tempProduct.category="movie|".concat(c),n.tempProduct.origin_price=1.99,n.tempProduct.price=.99,n.tempProduct.unit="week",n.tempProduct.description=t[r].overview,n.tempProduct.is_enabled=!0,t[r].backdrop_path?n.tempProduct.imageUrl=[n.baseImageUrl+t[r].poster_path,n.baseImageUrl+t[r].backdrop_path]:n.tempProduct.imageUrl=[n.baseImageUrl+t[r].poster_path],n.tempProduct.content="".concat(t[r].id,"|").concat(t[r].popularity,"|").concat(t[r].release_date),a.next=15,n.$http.post(o,{data:n.tempProduct}).catch((function(t){console.log(t)}));case 15:n.processingCount+=1;case 16:r++,a.next=2;break;case 19:case"end":return a.stop()}}),a)})))()},getProducts:function(t){var e=this;return Object($["a"])(regeneratorRuntime.mark((function c(){var n,a;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return e.isLoading=!0,n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("e-commerce-api","/admin/products?page=").concat(t),c.next=4,e.$http.get(n).catch((function(t){console.log(t)}));case 4:a=c.sent,e.products=a.data.products,e.pagination=a.data.pagination,e.isLoading=!1;case 8:case"end":return c.stop()}}),c)})))()},updateProduct:function(t){var e=this;return Object($["a"])(regeneratorRuntime.mark((function c(){var n,a,o,r;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("e-commerce-api","/admin/product"),a="post",e.isNew||(n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("e-commerce-api","/admin/product/").concat(t.id),a="put",o=t.pagination.current_page),delete t.pagination,e.tempProduct=t,c.next=7,e.$http[a](n,{data:e.tempProduct}).catch((function(t){console.log(t)}));case 7:return r=c.sent,c.next=10,e.getProducts(o);case 10:e.$refs.editModal.hideModal(),e.pushMessageStateForDashboard(r,t,o?"更新":"新增");case 12:case"end":return c.stop()}}),c)})))()},deleteAllProducts:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){var c,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,t.processingCount=0,e.next=4,t.getAllProducts();case 4:n=0;case 5:if(!(n<t.allProducts.length)){e.next=18;break}if(a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("e-commerce-api","/admin/product/").concat(t.allProducts[n].id),"SUBSCRIPTION"!==t.allProducts[n].category.toUpperCase()){e.next=11;break}return e.abrupt("continue",15);case 11:return e.next=13,t.$http.delete(a).catch((function(t){console.log(t)}));case 13:c=e.sent,t.processingCount+=1;case 15:n++,e.next=5;break;case 18:return t.isLoading=!1,e.next=21,t.getProducts();case 21:t.pushMessageStateForUser(c,"全品項","刪除");case 22:case"end":return e.stop()}}),e)})))()},getAllProducts:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){var c,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("e-commerce-api","/products/all"),e.next=3,t.$http.get(c).catch((function(t){console.log(t)}));case 3:n=e.sent,t.allProducts=n.data.products;case 5:case"end":return e.stop()}}),e)})))()},deleteProduct:function(t){var e=this;return Object($["a"])(regeneratorRuntime.mark((function c(){var n,a;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("e-commerce-api","/admin/product/").concat(t.id),c.next=3,e.$http.delete(n).catch((function(t){console.log(t)}));case 3:return a=c.sent,c.next=6,e.getProducts(t.current_page);case 6:e.$refs.deleteModal.hideModal(),e.pushMessageStateForDashboard(a,t,"刪除");case 8:case"end":return c.stop()}}),c)})))()},openModal:function(t,e,c){t&&(this.tempProduct={}),this.tempProduct=Object(S["a"])(Object(S["a"])({},e),{},{pagination:c}),this.$refs.editModal.showModal(),this.isNew=t},openDeleteModal:function(t,e){this.tempDeleteProduct=Object(S["a"])(Object(S["a"])({},t),e),this.$refs.deleteModal.showModal()},toggleDisableButton:function(){this.disableBtn=!this.disableBtn}},created:function(){this.getProducts(),this.getAllProducts()}};const Qt=xt()(Wt,[["render",R]]);e["default"]=Qt},"9a0c":function(t,e,c){var n=c("342f");t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},e01a:function(t,e,c){"use strict";var n=c("23e7"),a=c("83ab"),o=c("da84"),r=c("e330"),i=c("1a2d"),l=c("1626"),s=c("3a9b"),u=c("577e"),d=c("9bf2").f,p=c("e893"),b=o.Symbol,m=b&&b.prototype;if(a&&l(b)&&(!("description"in m)||void 0!==b().description)){var h={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),e=s(m,this)?new b(t):void 0===t?b():b(t);return""===t&&(h[e]=!0),e};p(g,b),g.prototype=m,m.constructor=g;var f="Symbol(test)"==String(b("test")),j=r(m.toString),O=r(m.valueOf),v=/^Symbol\((.*)\)[^)]+$/,P=r("".replace),x=r("".slice);d(m,"description",{configurable:!0,get:function(){var t=O(this),e=j(t);if(i(h,t))return"";var c=f?x(e,7,-1):P(e,v,"$1");return""===c?void 0:c}}),n({global:!0,forced:!0},{Symbol:g})}},fb6a:function(t,e,c){"use strict";var n=c("23e7"),a=c("da84"),o=c("e8b5"),r=c("68ee"),i=c("861d"),l=c("23cb"),s=c("07fa"),u=c("fc6a"),d=c("8418"),p=c("b622"),b=c("1dde"),m=c("f36a"),h=b("slice"),g=p("species"),f=a.Array,j=Math.max;n({target:"Array",proto:!0,forced:!h},{slice:function(t,e){var c,n,a,p=u(this),b=s(p),h=l(t,b),O=l(void 0===e?b:e,b);if(o(p)&&(c=p.constructor,r(c)&&(c===f||o(c.prototype))?c=void 0:i(c)&&(c=c[g],null===c&&(c=void 0)),c===f||void 0===c))return m(p,h,O);for(n=new(void 0===c?f:c)(j(O-h,0)),a=0;h<O;h++,a++)h in p&&d(n,a,p[h]);return n.length=a,n}})}}]);
//# sourceMappingURL=chunk-615192b6.33b5930b.js.map