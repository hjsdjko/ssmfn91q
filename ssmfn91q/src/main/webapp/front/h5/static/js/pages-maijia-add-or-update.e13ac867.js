(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-maijia-add-or-update"],{"22b3":function(r,i,e){"use strict";e.r(i);var t=e("957f"),a=e("5df6");for(var n in a)"default"!==n&&function(r){e.d(i,r,(function(){return a[r]}))}(n);e("2959");var o,l=e("f0c5"),s=Object(l["a"])(a["default"],t["b"],t["c"],!1,null,"bbaab42c",null,!1,t["a"],o);i["default"]=s.exports},2959:function(r,i,e){"use strict";var t=e("cb0b"),a=e.n(t);a.a},"5ad9":function(r,i,e){"use strict";var t=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("ac6a"),e("28a5"),e("96cf");var a=t(e("3b8d")),n=t(e("e2b1")),o={data:function(){return{ruleForm:{maijiazhanghao:"",mima:"",maijiaxingming:"",xingbie:"",nianling:"",shenfenzhenghaoma:"",lianxidianhua:"",xiangpian:"",maijiadizhi:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{maijiazhanghao:!1,mima:!1,maijiaxingming:!1,xingbie:!1,nianling:!1,shenfenzhenghaoma:!1,lianxidianhua:!1,xiangpian:!1,maijiadizhi:!1}}},components:{wPicker:n.default},computed:{},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(i){var e,t,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(e);case 3:if(t=r.sent,this.user=t.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){r.next=14;break}return this.ruleForm.id=i.id,r.next=12,this.$api.info("maijia",this.ruleForm.id);case 12:t=r.sent,this.ruleForm=t.data;case 14:if(!i.cross){r.next=57;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 17:if((r.t1=r.t0()).done){r.next=57;break}if(n=r.t1.value,"maijiazhanghao"!=n){r.next=23;break}return this.ruleForm.maijiazhanghao=a[n],this.ro.maijiazhanghao=!0,r.abrupt("continue",17);case 23:if("mima"!=n){r.next=27;break}return this.ruleForm.mima=a[n],this.ro.mima=!0,r.abrupt("continue",17);case 27:if("maijiaxingming"!=n){r.next=31;break}return this.ruleForm.maijiaxingming=a[n],this.ro.maijiaxingming=!0,r.abrupt("continue",17);case 31:if("xingbie"!=n){r.next=35;break}return this.ruleForm.xingbie=a[n],this.ro.xingbie=!0,r.abrupt("continue",17);case 35:if("nianling"!=n){r.next=39;break}return this.ruleForm.nianling=a[n],this.ro.nianling=!0,r.abrupt("continue",17);case 39:if("shenfenzhenghaoma"!=n){r.next=43;break}return this.ruleForm.shenfenzhenghaoma=a[n],this.ro.shenfenzhenghaoma=!0,r.abrupt("continue",17);case 43:if("lianxidianhua"!=n){r.next=47;break}return this.ruleForm.lianxidianhua=a[n],this.ro.lianxidianhua=!0,r.abrupt("continue",17);case 47:if("xiangpian"!=n){r.next=51;break}return this.ruleForm.xiangpian=a[n],this.ro.xiangpian=!0,r.abrupt("continue",17);case 51:if("maijiadizhi"!=n){r.next=55;break}return this.ruleForm.maijiadizhi=a[n],this.ro.maijiadizhi=!0,r.abrupt("continue",17);case 55:r.next=17;break;case 57:this.styleChange();case 58:case"end":return r.stop()}}),r,this)})));function i(i){return r.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(r){this.xingbieIndex=r.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},xiangpianTap:function(){var r=this;this.$api.upload((function(i){r.ruleForm.xiangpian=r.$base.url+"upload/"+i.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.maijiazhanghao){r.next=3;break}return this.$utils.msg("卖家账号不能为空"),r.abrupt("return");case 3:if(this.ruleForm.mima){r.next=6;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if(this.ruleForm.maijiaxingming){r.next=9;break}return this.$utils.msg("卖家姓名不能为空"),r.abrupt("return");case 9:if(!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){r.next=12;break}return this.$utils.msg("年龄应输入整数"),r.abrupt("return");case 12:if(!this.ruleForm.shenfenzhenghaoma||this.$validate.checkIdCard(this.ruleForm.shenfenzhenghaoma)){r.next=15;break}return this.$utils.msg("身份证号码应输入身份证格式"),r.abrupt("return");case 15:if(!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){r.next=18;break}return this.$utils.msg("联系电话应输入手机格式"),r.abrupt("return");case 18:if(!this.ruleForm.id){r.next=23;break}return r.next=21,this.$api.update("maijia",this.ruleForm);case 21:r.next=25;break;case 23:return r.next=25,this.$api.add("maijia",this.ruleForm);case 25:this.$utils.msgBack("提交成功");case 26:case"end":return r.stop()}}),r,this)})));function i(){return r.apply(this,arguments)}return i}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var i=new Date,e=i.getFullYear(),t=i.getMonth()+1,a=i.getDate();return"start"===r?e-=60:"end"===r&&(e+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(e,"-").concat(t,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};i.default=o},"5df6":function(r,i,e){"use strict";e.r(i);var t=e("5ad9"),a=e.n(t);for(var n in t)"default"!==n&&function(r){e.d(i,r,(function(){return t[r]}))}(n);i["default"]=a.a},"957f":function(r,i,e){"use strict";var t,a=function(){var r=this,i=r.$createElement,e=r._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-form",{staticClass:"app-update-pv"},[e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[r._v("卖家账号")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.maijiazhanghao,placeholder:"卖家账号"},model:{value:r.ruleForm.maijiazhanghao,callback:function(i){r.$set(r.ruleForm,"maijiazhanghao",i)},expression:"ruleForm.maijiazhanghao"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[r._v("密码")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.mima,placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(i){r.$set(r.ruleForm,"mima",i)},expression:"ruleForm.mima"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[r._v("卖家姓名")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.maijiaxingming,placeholder:"卖家姓名"},model:{value:r.ruleForm.maijiaxingming,callback:function(i){r.$set(r.ruleForm,"maijiaxingming",i)},expression:"ruleForm.maijiaxingming"}})],1),e("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[r._v("性别")]),e("v-uni-picker",{attrs:{value:r.xingbieIndex,range:r.xingbieOptions},on:{change:function(i){arguments[0]=i=r.$handleEvent(i),r.xingbieChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[r._v("年龄")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.nianling,placeholder:"年龄"},model:{value:r.ruleForm.nianling,callback:function(i){r.$set(r.ruleForm,"nianling",i)},expression:"ruleForm.nianling"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[r._v("身份证号码")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.shenfenzhenghaoma,placeholder:"身份证号码"},model:{value:r.ruleForm.shenfenzhenghaoma,callback:function(i){r.$set(r.ruleForm,"shenfenzhenghaoma",i)},expression:"ruleForm.shenfenzhenghaoma"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[r._v("联系电话")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.lianxidianhua,placeholder:"联系电话"},model:{value:r.ruleForm.lianxidianhua,callback:function(i){r.$set(r.ruleForm,"lianxidianhua",i)},expression:"ruleForm.lianxidianhua"}})],1),e("v-uni-view",{staticClass:"cu-form-group",class:"left"==r.left?"":"active",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(i){arguments[0]=i=r.$handleEvent(i),r.xiangpianTap.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[r._v("相片")]),e("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[r.ruleForm.xiangpian?e("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:r.ruleForm.xiangpian,mode:"aspectFill"}}):e("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[r._v("卖家地址")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.maijiadizhi,placeholder:"卖家地址"},model:{value:r.ruleForm.maijiadizhi,callback:function(i){r.$set(r.ruleForm,"maijiadizhi",i)},expression:"ruleForm.maijiadizhi"}})],1),e("v-uni-view",{staticClass:"btn"},[e("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(255, 153, 0, 1)",borderColor:"rgba(255, 255, 0, 1)",borderRadius:"8rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(i){arguments[0]=i=r.$handleEvent(i),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},n=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return t}))},c8c6:function(r,i,e){var t=e("24fb");i=t(!1),i.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-bbaab42c]{padding:%?20?%}.content[data-v-bbaab42c]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-bbaab42c]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-bbaab42c]{width:%?180?%}.avator[data-v-bbaab42c]{width:%?150?%;height:%?60?%}.right-input[data-v-bbaab42c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-bbaab42c]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-bbaab42c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-bbaab42c]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-bbaab42c]{border:0}.cu-form-group uni-input[data-v-bbaab42c]{padding:0 %?30?%}.uni-input[data-v-bbaab42c]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-bbaab42c]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-bbaab42c]::after{line-height:%?88?%}.select .uni-input[data-v-bbaab42c]{line-height:%?88?%}.input .right-input[data-v-bbaab42c]{line-height:%?88?%}',""]),r.exports=i},cb0b:function(r,i,e){var t=e("c8c6");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=e("4f06").default;a("f8142588",t,!0,{sourceMap:!1,shadowMode:!1})}}]);