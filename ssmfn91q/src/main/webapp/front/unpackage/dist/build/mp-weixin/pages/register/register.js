(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0000":function(e,n,t){"use strict";var a=t("e694"),i=t.n(a);i.a},"02d7":function(e,n,t){"use strict";t.r(n);var a=t("b888"),i=t("41e9");for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t("0000");var u,o=t("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"d5bc64c0",null,!1,a["a"],u);n["default"]=s.exports},"25ec":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function r(e,n,t,a,i,r,u){try{var o=e[r](u),s=o.value}catch(l){return void t(l)}o.done?n(s):Promise.resolve(s).then(a,i)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(a,i){var u=e.apply(n,t);function o(e){r(u,a,i,o,s,"next",e)}function s(e){r(u,a,i,o,s,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,maijiaxingbieOptions:[],maijiaxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var n=this;return u(a.default.mark((function t(){var i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],i=e.getStorageSync("loginTable"),n.tableName=i,"yonghu"==n.tableName&&(n.yonghuxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.yonghuxingbieOptions[0]),"maijia"==n.tableName&&(n.maijiaxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.maijiaxingbieOptions[0]),n.styleChange();case 6:case"end":return t.stop()}}),t)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},maijiaxingbieChange:function(e){this.maijiaxingbieIndex=e.target.value,this.ruleForm.xingbie=this.maijiaxingbieOptions[this.maijiaxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return u(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.gerenzhanghao||"yonghu"!=e.tableName){n.next=3;break}return e.$utils.msg("个人账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima||"yonghu"!=e.tableName){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(e.ruleForm.xingming||"yonghu"!=e.tableName){n.next=9;break}return e.$utils.msg("姓名不能为空"),n.abrupt("return");case 9:if("yonghu"!=e.tableName||!e.ruleForm.nianling||e.$validate.isIntNumer(e.ruleForm.nianling)){n.next=12;break}return e.$utils.msg("年龄应输入整数"),n.abrupt("return");case 12:if("yonghu"!=e.tableName||!e.ruleForm.shenfenzhenghaoma||e.$validate.checkIdCard(e.ruleForm.shenfenzhenghaoma)){n.next=15;break}return e.$utils.msg("身份证号码应输入身份证格式"),n.abrupt("return");case 15:if("yonghu"!=e.tableName||!e.ruleForm.shoujihaoma||e.$validate.isMobile(e.ruleForm.shoujihaoma)){n.next=18;break}return e.$utils.msg("手机号码应输入手机格式"),n.abrupt("return");case 18:if(e.ruleForm.maijiazhanghao||"maijia"!=e.tableName){n.next=21;break}return e.$utils.msg("卖家账号不能为空"),n.abrupt("return");case 21:if(e.ruleForm.mima||"maijia"!=e.tableName){n.next=24;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 24:if(e.ruleForm.maijiaxingming||"maijia"!=e.tableName){n.next=27;break}return e.$utils.msg("卖家姓名不能为空"),n.abrupt("return");case 27:if("maijia"!=e.tableName||!e.ruleForm.nianling||e.$validate.isIntNumer(e.ruleForm.nianling)){n.next=30;break}return e.$utils.msg("年龄应输入整数"),n.abrupt("return");case 30:if("maijia"!=e.tableName||!e.ruleForm.shenfenzhenghaoma||e.$validate.checkIdCard(e.ruleForm.shenfenzhenghaoma)){n.next=33;break}return e.$utils.msg("身份证号码应输入身份证格式"),n.abrupt("return");case 33:if("maijia"!=e.tableName||!e.ruleForm.lianxidianhua||e.$validate.isMobile(e.ruleForm.lianxidianhua)){n.next=36;break}return e.$utils.msg("联系电话应输入手机格式"),n.abrupt("return");case 36:return n.next=38,e.$api.register("".concat(e.tableName),e.ruleForm);case 38:e.$utils.msgBack("注册成功");case 40:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,t("543d")["default"])},"41e9":function(e,n,t){"use strict";t.r(n);var a=t("25ec"),i=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);n["default"]=i.a},b86f:function(e,n,t){"use strict";(function(e){t("bcde");a(t("66fd"));var n=a(t("02d7"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},b888:function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return a}));var i=function(){var e=this,n=e.$createElement;e._self._c},r=[]},e694:function(e,n,t){}},[["b86f","common/runtime","common/vendor"]]]);