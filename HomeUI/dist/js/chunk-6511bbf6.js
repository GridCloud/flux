(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6511bbf6"],{1500:function(t,e,n){"use strict";n("8650")},"25f0":function(t,e,n){"use strict";var a=n("5e77").PROPER,o=n("cb2d"),r=n("825a"),i=n("577e"),s=n("d039"),c=n("90d8"),u="toString",l=RegExp.prototype,d=l[u],f=s((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),m=a&&d.name!=u;(f||m)&&o(RegExp.prototype,u,(function(){var t=r(this),e=i(t.source),n=i(c(t));return"/"+e+"/"+n}),{unsafe:!0})},"327f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-popover",{ref:"popover",attrs:{target:""+t.target,triggers:"click blur",show:t.show,placement:"auto",container:"my-container","custom-class":"confirm-dialog-"+t.width},on:{"update:show":function(e){t.show=e}},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v(t._s(t.title))]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:function(e){t.show=!1}}},[n("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])],1)]},proxy:!0}])},[n("div",{staticClass:"text-center"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(e){t.show=!1}}},[t._v(" "+t._s(t.cancelButton)+" ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.confirm()}}},[t._v(" "+t._s(t.confirmButton)+" ")])],1)])},o=[],r=(n("a9e3"),n("1947")),i=n("3828"),s=n("e009"),c={components:{BButton:r["a"],BPopover:i["a"]},directives:{Ripple:s["a"]},props:{target:{type:String,required:!0},title:{type:String,required:!1,default:"Are You Sure?"},cancelButton:{type:String,required:!1,default:"Cancel"},confirmButton:{type:String,required:!0},width:{type:Number,required:!1,default:300}},data:function(){return{show:!1}},methods:{confirm:function(){this.show=!1,this.$emit("confirm")}}},u=c,l=(n("1500"),n("2877")),d=Object(l["a"])(u,a,o,!1,null,null,null);e["a"]=d.exports},3828:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var a=n("2f79"),o=n("c637"),r=n("0056"),i=n("a723"),s=n("9b76"),c=n("cf75"),u=n("b4ae"),l=n("8df8"),d=n("7b1e"),f=n("df44"),m=Object(a["c"])({name:o["kb"],extends:f["a"],computed:{templateType:function(){return"popover"}},methods:{renderTemplate:function(t){var e=this.title,n=this.content,a=Object(d["e"])(e)?e({}):e,o=Object(d["e"])(n)?n({}):n,r=this.html&&!Object(d["e"])(e)?{innerHTML:e}:{},i=this.html&&!Object(d["e"])(n)?{innerHTML:n}:{};return t("div",{staticClass:"popover b-popover",class:this.templateClasses,attrs:this.templateAttributes,on:this.templateListeners},[t("div",{staticClass:"arrow",ref:"arrow"}),Object(d["o"])(a)||""===a?t():t("h3",{staticClass:"popover-header",domProps:r},[a]),Object(d["o"])(o)||""===o?t():t("div",{staticClass:"popover-body",domProps:i},[o])])}}}),p=Object(a["c"])({name:o["jb"],extends:l["a"],computed:{templateType:function(){return"popover"}},methods:{getTemplate:function(){return m}}}),h=n("d82f");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=Object(c["d"])(Object(h["m"])(g(g({},u["b"]),{},{content:Object(c["c"])(i["t"]),placement:Object(c["c"])(i["t"],"right"),triggers:Object(c["c"])(i["f"],r["f"])})),o["ib"]),w=Object(a["c"])({name:o["ib"],extends:u["a"],inheritAttrs:!1,props:O,methods:{getComponent:function(){return p},updateContent:function(){this.setContent(this.normalizeSlot()||this.content),this.setTitle(this.normalizeSlot(s["N"])||this.title)}}})},6076:function(t,e,n){"use strict";n("99af");var a=n("b4c0");e["a"]={help:function(){return Object(a["a"])().get("/daemon/help")},helpSpecific:function(t){return Object(a["a"])().get("/daemon/help/".concat(t))},getInfo:function(){return Object(a["a"])().get("/daemon/getinfo")},getZelNodeStatus:function(){return Object(a["a"])().get("/daemon/getzelnodestatus")},getRawTransaction:function(t,e){return Object(a["a"])().get("/daemon/getrawtransaction/".concat(t,"/").concat(e))},listZelNodes:function(){return Object(a["a"])().get("/daemon/listzelnodes")},viewDeterministicZelNodeList:function(){return Object(a["a"])().get("/daemon/viewdeterministiczelnodelist")},getZelNodeCount:function(){return Object(a["a"])().get("/daemon/getzelnodecount")},getStartList:function(){return Object(a["a"])().get("/daemon/getstartlist")},getDOSList:function(){return Object(a["a"])().get("/daemon/getdoslist")},fluxCurrentWinner:function(){return Object(a["a"])().get("/daemon/fluxcurrentwinner")},getBenchmarks:function(){return Object(a["a"])().get("/daemon/getbenchmarks")},getBenchStatus:function(){return Object(a["a"])().get("/daemon/getbenchstatus")},startBenchmark:function(t){return Object(a["a"])().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark:function(t){return Object(a["a"])().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo:function(){return Object(a["a"])().get("/daemon/getblockchaininfo")},getMiningInfo:function(){return Object(a["a"])().get("/daemon/getmininginfo")},getNetworkInfo:function(){return Object(a["a"])().get("/daemon/getnetworkinfo")},validateAddress:function(t,e){return Object(a["a"])().get("/daemon/validateaddress/".concat(e),{headers:{zelidauth:t}})},getWalletInfo:function(t){return Object(a["a"])().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listZelNodeConf:function(t){return Object(a["a"])().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start:function(t){return Object(a["a"])().get("/daemon/start",{headers:{zelidauth:t}})},restart:function(t){return Object(a["a"])().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon:function(t){return Object(a["a"])().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon:function(t,e){return Object(a["a"])().get("/daemon/rescanblockchain/".concat(e),{headers:{zelidauth:t}})},getBlock:function(t,e){return Object(a["a"])().get("/daemon/getblock/".concat(t,"/").concat(e))},tailDaemonDebug:function(t){return Object(a["a"])().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI:function(){return Object(a["a"])()},cancelToken:function(){return a["b"]}}},7731:function(t,e,n){},8650:function(t,e,n){},"867f":function(t,e,n){"use strict";n("e9c4"),n("99af");var a=n("b4c0");e["a"]={softUpdateFlux:function(t){return Object(a["a"])().get("/flux/softupdateflux",{headers:{zelidauth:t}})},softUpdateInstallFlux:function(t){return Object(a["a"])().get("/flux/softupdatefluxinstall",{headers:{zelidauth:t}})},updateFlux:function(t){return Object(a["a"])().get("/flux/updateflux",{headers:{zelidauth:t}})},hardUpdateFlux:function(t){return Object(a["a"])().get("/flux/hardupdateflux",{headers:{zelidauth:t}})},rebuildHome:function(t){return Object(a["a"])().get("/flux/rebuildhome",{headers:{zelidauth:t}})},updateDaemon:function(t){return Object(a["a"])().get("/flux/updatedaemon",{headers:{zelidauth:t}})},reindexDaemon:function(t){return Object(a["a"])().get("/flux/reindexdaemon",{headers:{zelidauth:t}})},updateBenchmark:function(t){return Object(a["a"])().get("/flux/updatebenchmark",{headers:{zelidauth:t}})},getFluxVersion:function(){return Object(a["a"])().get("/flux/version")},broadcastMessage:function(t,e){var n=e,o={headers:{zelidauth:t}};return Object(a["a"])().post("/flux/broadcastmessage",JSON.stringify(n),o)},connectedPeers:function(){return Object(a["a"])().get("/flux/connectedpeers?timestamp=".concat((new Date).getTime()))},connectedPeersInfo:function(){return Object(a["a"])().get("/flux/connectedpeersinfo?timestamp=".concat((new Date).getTime()))},incomingConnections:function(){return Object(a["a"])().get("/flux/incomingconnections?timestamp=".concat((new Date).getTime()))},incomingConnectionsInfo:function(){return Object(a["a"])().get("/flux/incomingconnectionsinfo?timestamp=".concat((new Date).getTime()))},addPeer:function(t,e){return Object(a["a"])().get("/flux/addpeer/".concat(e),{headers:{zelidauth:t}})},removePeer:function(t,e){return Object(a["a"])().get("/flux/removepeer/".concat(e),{headers:{zelidauth:t}})},removeIncomingPeer:function(t,e){return Object(a["a"])().get("/flux/removeincomingpeer/".concat(e),{headers:{zelidauth:t}})},adjustCruxID:function(t,e){return Object(a["a"])().get("/flux/adjustcruxid/".concat(e),{headers:{zelidauth:t}})},adjustKadena:function(t,e,n){return Object(a["a"])().get("/flux/adjustkadena/".concat(e,"/").concat(n),{headers:{zelidauth:t}})},getCruxID:function(){return Object(a["a"])().get("/flux/cruxid")},getKadenaAccount:function(){return Object(a["a"])().get("/flux/kadena")},getZelid:function(){return Object(a["a"])().get("/flux/zelid")},getStaticIpInfo:function(){return Object(a["a"])().get("/flux/staticip")},tailFluxLog:function(t,e){return Object(a["a"])().get("/flux/tail".concat(t,"log"),{headers:{zelidauth:e}})},justAPI:function(){return Object(a["a"])()},cancelToken:function(){return a["b"]}}},"90d8":function(t,e,n){var a=n("c65b"),o=n("1a2d"),r=n("3a9b"),i=n("ad6d"),s=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in s||o(t,"flags")||!r(s,t)?e:a(i,t)}},b4ae:function(t,e,n){"use strict";n.d(e,"b",(function(){return C})),n.d(e,"a",(function(){return T}));var a,o,r=n("2f79"),i=n("c637"),s=n("0056"),c=n("a723"),u=n("ca88"),l=n("8878"),d=n("be29"),f=n("7b1e"),m=n("d82f"),p=n("cf75"),h=n("39ad"),b=n("8c18"),g=n("8df8");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j="disabled",x=s["W"]+j,D="show",y=s["W"]+D,C=Object(p["d"])((a={boundary:Object(p["c"])([u["c"],c["p"],c["t"]],"scrollParent"),boundaryPadding:Object(p["c"])(c["o"],50),container:Object(p["c"])([u["c"],c["p"],c["t"]]),customClass:Object(p["c"])(c["t"]),delay:Object(p["c"])(c["n"],50)},w(a,j,Object(p["c"])(c["g"],!1)),w(a,"fallbackPlacement",Object(p["c"])(c["f"],"flip")),w(a,"id",Object(p["c"])(c["t"])),w(a,"noFade",Object(p["c"])(c["g"],!1)),w(a,"noninteractive",Object(p["c"])(c["g"],!1)),w(a,"offset",Object(p["c"])(c["o"],0)),w(a,"placement",Object(p["c"])(c["t"],"top")),w(a,D,Object(p["c"])(c["g"],!1)),w(a,"target",Object(p["c"])([u["c"],u["d"],c["k"],c["p"],c["t"]],void 0,!0)),w(a,"title",Object(p["c"])(c["t"])),w(a,"triggers",Object(p["c"])(c["f"],"hover focus")),w(a,"variant",Object(p["c"])(c["t"])),a),i["Cb"]),T=Object(r["c"])({name:i["Cb"],mixins:[b["a"],l["a"]],inheritAttrs:!1,props:C,data:function(){return{localShow:this[D],localTitle:"",localContent:""}},computed:{templateData:function(){return O({title:this.localTitle,content:this.localContent,interactive:!this.noninteractive},Object(m["k"])(this.$props,["boundary","boundaryPadding","container","customClass","delay","fallbackPlacement","id","noFade","offset","placement","target","target","triggers","variant",j]))},templateTitleContent:function(){var t=this.title,e=this.content;return{title:t,content:e}}},watch:(o={},w(o,D,(function(t,e){t!==e&&t!==this.localShow&&this.$_toolpop&&(t?this.$_toolpop.show():this.$_toolpop.forceHide())})),w(o,j,(function(t){t?this.doDisable():this.doEnable()})),w(o,"localShow",(function(t){this.$emit(y,t)})),w(o,"templateData",(function(){var t=this;this.$nextTick((function(){t.$_toolpop&&t.$_toolpop.updateData(t.templateData)}))})),w(o,"templateTitleContent",(function(){this.$nextTick(this.updateContent)})),o),created:function(){this.$_toolpop=null},updated:function(){this.$nextTick(this.updateContent)},beforeDestroy:function(){this.$off(s["B"],this.doOpen),this.$off(s["g"],this.doClose),this.$off(s["j"],this.doDisable),this.$off(s["l"],this.doEnable),this.$_toolpop&&(this.$_toolpop.$destroy(),this.$_toolpop=null)},mounted:function(){var t=this;this.$nextTick((function(){var e=t.getComponent();t.updateContent();var n=Object(d["a"])(t)||Object(d["a"])(t.bvParent),a=t.$_toolpop=Object(h["a"])(t,e,{_scopeId:n||void 0});a.updateData(t.templateData),a.$on(s["N"],t.onShow),a.$on(s["O"],t.onShown),a.$on(s["t"],t.onHide),a.$on(s["s"],t.onHidden),a.$on(s["k"],t.onDisabled),a.$on(s["m"],t.onEnabled),t[j]&&t.doDisable(),t.$on(s["B"],t.doOpen),t.$on(s["g"],t.doClose),t.$on(s["j"],t.doDisable),t.$on(s["l"],t.doEnable),t.localShow&&a.show()}))},methods:{getComponent:function(){return g["a"]},updateContent:function(){this.setTitle(this.normalizeSlot()||this.title)},setTitle:function(t){t=Object(f["o"])(t)?"":t,this.localTitle!==t&&(this.localTitle=t)},setContent:function(t){t=Object(f["o"])(t)?"":t,this.localContent!==t&&(this.localContent=t)},onShow:function(t){this.$emit(s["N"],t),t&&(this.localShow=!t.defaultPrevented)},onShown:function(t){this.localShow=!0,this.$emit(s["O"],t)},onHide:function(t){this.$emit(s["t"],t)},onHidden:function(t){this.$emit(s["s"],t),this.localShow=!1},onDisabled:function(t){t&&t.type===s["k"]&&(this.$emit(x,!0),this.$emit(s["k"],t))},onEnabled:function(t){t&&t.type===s["m"]&&(this.$emit(x,!1),this.$emit(s["m"],t))},doOpen:function(){!this.localShow&&this.$_toolpop&&this.$_toolpop.show()},doClose:function(){this.localShow&&this.$_toolpop&&this.$_toolpop.hide()},doDisable:function(){this.$_toolpop&&this.$_toolpop.disable()},doEnable:function(){this.$_toolpop&&this.$_toolpop.enable()}},render:function(t){return t()}})},b4fd:function(t,e,n){"use strict";n("7731")},d052:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-input-group",[n("b-input-group-prepend",[n("b-button",{staticClass:"py-0",attrs:{variant:"outline-dark",size:"sm"},on:{click:function(e){return t.valueChange(t.value-1)}}},[n("b-icon",{attrs:{icon:"dash","font-scale":"1.6"}})],1)],1),n("b-form-input",{staticClass:"border-secondary text-center",attrs:{id:t.id,size:t.size,value:t.value,type:"number",min:"0",number:""},on:{update:t.valueChange}}),n("b-input-group-append",[n("b-button",{staticClass:"py-0",attrs:{variant:"outline-dark",size:"sm"},on:{click:function(e){return t.valueChange(t.value+1)}}},[n("b-icon",{attrs:{icon:"plus","font-scale":"1.6"}})],1)],1)],1)},o=[],r=(n("caad"),n("a9e3"),n("0759")),i=n("1947"),s=n("4797"),c=n("7386"),u=n("5e12"),l=n("3656"),d=n("ccc0"),f={name:"InputSpinButton",components:{BIcon:r["a"],BButton:i["a"],BFormInput:s["a"],BIconDash:c["b"],BIconPlus:c["d"],BInputGroup:u["a"],BInputGroupPrepend:l["a"],BInputGroupAppend:d["a"]},props:{id:{type:String,required:!0},size:{type:String,required:!1,default:"md",validator:function(t){return["sm","md","lg"].includes(t)}},value:{type:Number,required:!0}},methods:{valueChange:function(t){t<=0?this.$emit("input",0):this.$emit("input",t)}}},m=f,p=(n("b4fd"),n("2877")),h=Object(p["a"])(m,a,o,!1,null,"2f5aba03",null);e["a"]=h.exports},d6e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n("2f79"),o=n("b42e"),r=n("c637"),i=n("a723"),s=n("cf75"),c=Object(s["d"])({textTag:Object(s["c"])(i["t"],"p")},r["p"]),u=Object(a["c"])({name:r["p"],functional:!0,props:c,render:function(t,e){var n=e.props,a=e.data,r=e.children;return t(n.textTag,Object(o["a"])(a,{staticClass:"card-text"}),r)}})},e189:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",{staticClass:"match-height"},[n("b-col",{attrs:{sm:"12",lg:"6"}},[n("b-card",{attrs:{title:"Daemon"}},[n("b-card-text",{staticClass:"mb-3"},[t._v(" An easy way to update your Flux daemon to the latest version. Flux will be automatically started once update is done. ")]),n("div",{staticClass:"text-center"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"update-daemon",variant:"success","aria-label":"Update Daemon"}},[t._v(" Update Daemon ")]),n("confirm-dialog",{attrs:{target:"update-daemon","confirm-button":"Update Daemon"},on:{confirm:function(e){return t.updateDaemon()}}})],1)],1)],1),n("b-col",{attrs:{sm:"12",lg:"6"}},[n("b-card",{attrs:{title:"Manage Process"}},[n("b-card-text",{staticClass:"mb-3"},[t._v(" Here you can manage your Flux daemon process. ")]),n("div",{staticClass:"text-center"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1 mb-1",attrs:{id:"start-daemon",variant:"success","aria-label":"Start Daemon"}},[t._v(" Start Daemon ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1 mb-1",attrs:{id:"stop-daemon",variant:"success","aria-label":"Stop Daemon"}},[t._v(" Stop Daemon ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1 mb-1",attrs:{id:"restart-daemon",variant:"success","aria-label":"Restart Daemon"}},[t._v(" Restart Daemon ")]),n("confirm-dialog",{attrs:{target:"start-daemon","confirm-button":"Start Daemon"},on:{confirm:function(e){return t.startDaemon()}}}),n("confirm-dialog",{attrs:{target:"stop-daemon","confirm-button":"Stop Daemon"},on:{confirm:function(e){return t.stopDaemon()}}}),n("confirm-dialog",{attrs:{target:"restart-daemon","confirm-button":"Restart Daemon"},on:{confirm:function(e){return t.restartDaemon()}}})],1)],1)],1)],1),n("b-row",{staticClass:"match-height"},[n("b-col",{attrs:{sm:"12",lg:"8"}},[n("b-card",{attrs:{title:"Rescan"}},[n("b-card-text",{staticClass:"mb-2"},[t._v(" Choose a blockheight to rescan Daemon from and click on Rescan Daemon to begin rescanning. ")]),n("div",{staticClass:"mb-1",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[n("b-card-text",{staticClass:"mr-1 mb-0"},[t._v(" Block Height ")]),n("input-spin-button",{staticStyle:{width:"250px"},attrs:{id:"sb-vertical"},model:{value:t.rescanDaemonHeight,callback:function(e){t.rescanDaemonHeight=e},expression:"rescanDaemonHeight"}}),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1",staticStyle:{width:"250px"},attrs:{id:"rescan-daemon",variant:"success","aria-label":"Rescan Daemon"}},[t._v(" Rescan Daemon ")]),n("confirm-dialog",{attrs:{target:"rescan-daemon","confirm-button":"Rescan Daemon"},on:{confirm:function(e){return t.rescanDaemon()}}})],1)],1)],1),n("b-col",{attrs:{sm:"12",lg:"4"}},[n("b-card",{attrs:{title:"Reindex"}},[n("b-card-text",{staticClass:"mb-2"},[t._v(" This option reindexes Flux blockchain data. It will take several hours to finish the operation. ")]),n("div",{staticClass:"text-center"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"reindex-daemon",variant:"success","aria-label":"Reindex Daemon"}},[t._v(" Reindex Daemon ")]),n("confirm-dialog",{attrs:{target:"reindex-daemon","confirm-button":"Reindex Daemon"},on:{confirm:function(e){return t.reindexDaemon()}}})],1)],1)],1)],1)],1)},o=[],r=(n("d3b7"),n("25f0"),n("205f")),i=n("a15b"),s=n("b28b"),c=n("d6e4"),u=n("1947"),l=n("b307"),d=n("e009"),f=n("bc3a"),m=n.n(f),p=n("327f"),h=n("d052"),b=n("6076"),g=n("867f"),v=n("4328"),O={components:{BCard:r["a"],BRow:i["a"],BCol:s["a"],BCardText:c["a"],BButton:u["a"],InputSpinButton:h["a"],ConfirmDialog:p["a"],ToastificationContent:l["a"]},directives:{Ripple:d["a"]},data:function(){return{rescanDaemonHeight:0}},mounted:function(){this.checkDaemonVersion()},methods:{checkDaemonVersion:function(){var t=this;b["a"].getInfo().then((function(e){console.log(e);var n=e.data.data.version;m.a.get("https://raw.githubusercontent.com/runonflux/flux/master/helpers/daemoninfo.json").then((function(e){console.log(e),e.data.version!==n?t.showToast("warning","Daemon requires an update!"):t.showToast("success","Daemon is up to date.")})).catch((function(e){console.log(e),t.showToast("danger","Error verifying recent version")}))})).catch((function(e){console.log(e),t.showToast("danger","Error connecting to Daemon")}))},updateDaemon:function(){var t=this;b["a"].getInfo().then((function(e){console.log(e);var n=e.data.data.version;m.a.get("https://raw.githubusercontent.com/runonflux/flux/master/helpers/daemoninfo.json").then((function(e){if(console.log(e),e.data.version!==n){var a=localStorage.getItem("zelidauth"),o=v.parse(a);console.log(o),t.showToast("warning","Daemon is now updating in the background"),g["a"].updateDaemon(a).then((function(e){console.log(e),"error"===e.data.status&&t.showToast("danger",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),console.log(e.code),t.showToast("danger",e.toString())}))}else t.showToast("success","Daemon is already up to date")})).catch((function(e){console.log(e),t.showToast("danger","Error verifying recent version")}))})).catch((function(e){console.log(e),t.showToast("danger","Error connecting to Daemon")}))},startDaemon:function(){var t=this;this.showToast("warning","Daemon will start");var e=localStorage.getItem("zelidauth");b["a"].start(e).then((function(e){"error"===e.data.status?t.showToast("danger",e.data.data.message||e.data.data):t.showToast("success",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),t.showToast("danger","Error while trying to start Daemon")}))},stopDaemon:function(){var t=this;this.showToast("warning","Daemon will be stopped");var e=localStorage.getItem("zelidauth");b["a"].stopDaemon(e).then((function(e){"error"===e.data.status?t.showToast("danger",e.data.data.message||e.data.data):t.showToast("success",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),t.showToast("danger","Error while trying to stop Daemon")}))},restartDaemon:function(){var t=this;this.showToast("warning","Daemon will now restart");var e=localStorage.getItem("zelidauth");b["a"].restart(e).then((function(e){"error"===e.data.status?t.showToast("danger",e.data.data.message||e.data.data):t.showToast("success",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),t.showToast("danger","Error while trying to restart Daemon")}))},rescanDaemon:function(){var t=this;this.showToast("warning","Daemon will now rescan. This will take up to an hour.");var e=localStorage.getItem("zelidauth"),n=this.rescanDaemonHeight>0?this.rescanDaemonHeight:0;b["a"].rescanDaemon(e,n).then((function(e){"error"===e.data.status?t.showToast("danger",e.data.data.message||e.data.data):t.showToast("success",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),t.showToast("danger","Error while trying to rescan Daemon")}))},reindexDaemon:function(){var t=this;this.showToast("warning","Daemon will now reindex. This will take several hours.");var e=localStorage.getItem("zelidauth");g["a"].reindexDaemon(e).then((function(e){"error"===e.data.status?t.showToast("danger",e.data.data.message||e.data.data):t.showToast("success",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),t.showToast("danger","Error while trying to reindex Daemon")}))},showToast:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"InfoIcon";this.$toast({component:l["a"],props:{title:e,icon:n,variant:t}})}}},w=O,j=n("2877"),x=Object(j["a"])(w,a,o,!1,null,null,null);e["default"]=x.exports}}]);