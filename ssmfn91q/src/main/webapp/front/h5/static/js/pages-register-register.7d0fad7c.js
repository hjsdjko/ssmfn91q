(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{3735:function(e,i,t){"use strict";t.r(i);var r=t("fe26"),n=t("48c7");for(var a in n)"default"!==a&&function(e){t.d(i,e,(function(){return n[e]}))}(a);t("a797");var o,l=t("f0c5"),u=Object(l["a"])(n["default"],r["b"],r["c"],!1,null,"0cfca9ef",null,!1,r["a"],o);i["default"]=u.exports},4483:function(e,i,t){var r=t("24fb");i=r(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-0cfca9ef]{padding:%?100?%}.content[data-v-0cfca9ef]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-0cfca9ef]{text-align:center}.logo uni-image[data-v-0cfca9ef]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-0cfca9ef]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-0cfca9ef]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-0cfca9ef]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-0cfca9ef]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-0cfca9ef]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-0cfca9ef]{color:#b49950}.picker-select-input[data-v-0cfca9ef]{line-height:%?88?%}',""]),e.exports=i},"48c7":function(e,i,t){"use strict";t.r(i);var r=t("4e2d"),n=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(i,e,(function(){return r[e]}))}(a);i["default"]=n.a},"4e2d":function(e,i,t){"use strict";var r=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("28a5"),t("96cf");var n=r(t("3b8d")),a={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,maijiaxingbieOptions:[],maijiaxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:[],i=uni.getStorageSync("loginTable"),this.tableName=i,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),"maijia"==this.tableName&&(this.maijiaxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.maijiaxingbieOptions[0]),this.styleChange();case 6:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},maijiaxingbieChange:function(e){this.maijiaxingbieIndex=e.target.value,this.ruleForm.xingbie=this.maijiaxingbieOptions[this.maijiaxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.gerenzhanghao||"yonghu"!=this.tableName){e.next=3;break}return this.$utils.msg("个人账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(this.ruleForm.xingming||"yonghu"!=this.tableName){e.next=9;break}return this.$utils.msg("姓名不能为空"),e.abrupt("return");case 9:if("yonghu"!=this.tableName||!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){e.next=12;break}return this.$utils.msg("年龄应输入整数"),e.abrupt("return");case 12:if("yonghu"!=this.tableName||!this.ruleForm.shenfenzhenghaoma||this.$validate.checkIdCard(this.ruleForm.shenfenzhenghaoma)){e.next=15;break}return this.$utils.msg("身份证号码应输入身份证格式"),e.abrupt("return");case 15:if("yonghu"!=this.tableName||!this.ruleForm.shoujihaoma||this.$validate.isMobile(this.ruleForm.shoujihaoma)){e.next=18;break}return this.$utils.msg("手机号码应输入手机格式"),e.abrupt("return");case 18:if(this.ruleForm.maijiazhanghao||"maijia"!=this.tableName){e.next=21;break}return this.$utils.msg("卖家账号不能为空"),e.abrupt("return");case 21:if(this.ruleForm.mima||"maijia"!=this.tableName){e.next=24;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 24:if(this.ruleForm.maijiaxingming||"maijia"!=this.tableName){e.next=27;break}return this.$utils.msg("卖家姓名不能为空"),e.abrupt("return");case 27:if("maijia"!=this.tableName||!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){e.next=30;break}return this.$utils.msg("年龄应输入整数"),e.abrupt("return");case 30:if("maijia"!=this.tableName||!this.ruleForm.shenfenzhenghaoma||this.$validate.checkIdCard(this.ruleForm.shenfenzhenghaoma)){e.next=33;break}return this.$utils.msg("身份证号码应输入身份证格式"),e.abrupt("return");case 33:if("maijia"!=this.tableName||!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){e.next=36;break}return this.$utils.msg("联系电话应输入手机格式"),e.abrupt("return");case 36:return e.next=38,this.$api.register("".concat(this.tableName),this.ruleForm);case 38:this.$utils.msgBack("注册成功");case 40:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}()}};i.default=a},a797:function(e,i,t){"use strict";var r=t("c62b"),n=t.n(r);n.a},c62b:function(e,i,t){var r=t("4483");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=t("4f06").default;n("2e3f7b52",r,!0,{sourceMap:!1,shadowMode:!1})},fe26:function(e,i,t){"use strict";var r,n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"content"},[e._e(),"yonghu"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"个人账号"},model:{value:e.ruleForm.gerenzhanghao,callback:function(i){e.$set(e.ruleForm,"gerenzhanghao",i)},expression:"ruleForm.gerenzhanghao"}})],1):e._e(),"yonghu"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(i){e.$set(e.ruleForm,"mima",i)},expression:"ruleForm.mima"}})],1):e._e(),"yonghu"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(i){e.$set(e.ruleForm,"xingming",i)},expression:"ruleForm.xingming"}})],1):e._e(),"yonghu"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-picker",{attrs:{value:e.yonghuxingbieIndex,range:e.yonghuxingbieOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.yonghuxingbieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1):e._e(),"yonghu"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"年龄"},model:{value:e.ruleForm.nianling,callback:function(i){e.$set(e.ruleForm,"nianling",i)},expression:"ruleForm.nianling"}})],1):e._e(),"yonghu"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"身份证号码"},model:{value:e.ruleForm.shenfenzhenghaoma,callback:function(i){e.$set(e.ruleForm,"shenfenzhenghaoma",i)},expression:"ruleForm.shenfenzhenghaoma"}})],1):e._e(),"yonghu"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"手机号码"},model:{value:e.ruleForm.shoujihaoma,callback:function(i){e.$set(e.ruleForm,"shoujihaoma",i)},expression:"ruleForm.shoujihaoma"}})],1):e._e(),"yonghu"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"地址"},model:{value:e.ruleForm.dizhi,callback:function(i){e.$set(e.ruleForm,"dizhi",i)},expression:"ruleForm.dizhi"}})],1):e._e(),"maijia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"卖家账号"},model:{value:e.ruleForm.maijiazhanghao,callback:function(i){e.$set(e.ruleForm,"maijiazhanghao",i)},expression:"ruleForm.maijiazhanghao"}})],1):e._e(),"maijia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(i){e.$set(e.ruleForm,"mima",i)},expression:"ruleForm.mima"}})],1):e._e(),"maijia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"卖家姓名"},model:{value:e.ruleForm.maijiaxingming,callback:function(i){e.$set(e.ruleForm,"maijiaxingming",i)},expression:"ruleForm.maijiaxingming"}})],1):e._e(),"maijia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-picker",{attrs:{value:e.maijiaxingbieIndex,range:e.maijiaxingbieOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.maijiaxingbieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1):e._e(),"maijia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"年龄"},model:{value:e.ruleForm.nianling,callback:function(i){e.$set(e.ruleForm,"nianling",i)},expression:"ruleForm.nianling"}})],1):e._e(),"maijia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"身份证号码"},model:{value:e.ruleForm.shenfenzhenghaoma,callback:function(i){e.$set(e.ruleForm,"shenfenzhenghaoma",i)},expression:"ruleForm.shenfenzhenghaoma"}})],1):e._e(),"maijia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"联系电话"},model:{value:e.ruleForm.lianxidianhua,callback:function(i){e.$set(e.ruleForm,"lianxidianhua",i)},expression:"ruleForm.lianxidianhua"}})],1):e._e(),"maijia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"卖家地址"},model:{value:e.ruleForm.maijiadizhi,callback:function(i){e.$set(e.ruleForm,"maijiadizhi",i)},expression:"ruleForm.maijiadizhi"}})],1):e._e(),t("v-uni-view",[t("v-uni-button",{style:{borderColor:"#ccc",backgroundColor:"rgba(255, 153, 0, 1)",borderRadius:"40rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.register.apply(void 0,arguments)}}},[e._v("注册")])],1)],1)},a=[];t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return a})),t.d(i,"a",(function(){return r}))}}]);