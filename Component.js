sap.ui.define(["sap/ui/core/UIComponent","vuei5/VUEIComponent","vuei5/UI5Library","./Main"],function(e,t,i,n){return t.extend("test.Component",{vuei5:{vueRoot:n,components:{...i("sap/m/library","m:",["Avatar","Panel","Text"])}},metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments);this.getRouter().initialize();try{const e=document.querySelector(".vuei5-loader");e.style.opacity="0";setTimeout(e.remove,500)}catch(e){}}})});