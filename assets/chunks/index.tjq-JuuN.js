import{_ as l,d as a,v as o}from"./cesium-view.vue_vue_type_script_setup_true_lang.D2-5frOc.js";import{d as c,p as d,o as u,b as f,w,j as t}from"./framework.gNInh0IH.js";import"/docs/cesiumStatic/index.js";import"./theme.BkUhgw0I.js";const V=c({__name:"index",setup(p){const n=d(),s=()=>{var e;(e=n.value)==null||e.destroyViewer()},r=()=>{var e;if(a.value){console.warn("defaultViewer 已经有了");return}else(e=n.value)==null||e.createViewer()},i=()=>{console.log("viewer",a),console.log("viewerManger",o),console.log("viewerMangerAllViewer",o.getAllViewers()),console.log("viewerMangerViewer",o.safeGet())};return(e,v)=>(u(),f(l,{ref_key:"cesiumViewRef",ref:n},{default:w(()=>[t("div",{class:"pointer-events-none absolute left-0 top-0 flex h-20 w-full gap-4"},[t("button",{onClick:s,class:"da-btn da-btn-error da-btn-sm pointer-events-auto"},"点击销毁"),t("button",{onClick:r,class:"da-btn da-btn-success da-btn-sm pointer-events-auto"},"点击初始化"),t("button",{onClick:i,class:"da-btn da-btn-info da-btn-sm pointer-events-auto"},"打印viewer")])]),_:1},512))}});export{V as default};
