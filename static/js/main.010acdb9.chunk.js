(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,a){e.exports=a(64)},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),c=a(39),l=a(5),o=a(22),s={stockTicker:"AAPL",days:0,entryDate:(new Date).toISOString().split("T")[0],expirationDate:(new Date).toISOString().split("T")[0],exitLevel:0,stockPrice:0,credit:0,dividend:"",shortStrike:0,combinedProfit:0,costPerShares:0,ror:0,breakEven:0,downsideProtection:0,annualizedROR:0},u=Object(o.b)({name:"formData",initialState:s,reducers:{setStockTicker:function(e,t){e.stockTicker=t.payload},setEntryDate:function(e,t){e.entryDate=t.payload},setExpirationDate:function(e,t){e.expirationDate=t.payload},setUpdateDays:function(e,t){e.days=t.payload},setExitLevel:function(e,t){e.exitLevel=t.payload},setStockPrice:function(e,t){e.stockPrice=t.payload},setCombinedProfit:function(e,t){e.combinedProfit=t.payload},setCredit:function(e,t){e.credit=t.payload},setDividend:function(e,t){e.dividend=t.payload},setShortStrike:function(e,t){e.shortStrike=t.payload},setCostPerShares:function(e,t){e.costPerShares=t.payload},setROR:function(e,t){e.ror=t.payload},setBreakEven:function(e,t){e.breakEven=t.payload},setDownsideProtection:function(e,t){e.downsideProtection=t.payload},setAnnualizedROR:function(e,t){e.annualizedROR=t.payload}}}),m=u.actions,d=m.setStockTicker,f=m.setEntryDate,p=m.setUpdateDays,b=m.setExpirationDate,v=m.setExitLevel,E=m.setStockPrice,h=m.setCombinedProfit,k=m.setCredit,g=m.setDividend,N=m.setShortStrike,O=m.setCostPerShares,D=m.setROR,j=m.setBreakEven,y=m.setDownsideProtection,S=m.setAnnualizedROR,w=u.reducer,P=function(){return function(e){return function(t){try{return e(t)}catch(a){throw console.error("Caught an exception!",a),a}}}},x=function(e){return function(t){return function(a){console.group(a.type),console.log("dispatching",a);var n=t(a);return console.log("next state",e.getState()),console.groupEnd(),n}}},C=Object(o.a)({reducer:{formData:w},middleware:function(e){return e().concat(P,x)}}),F=a(37),R=a(1),T=a(16),q=a(4),L=a(45),V=(a(58),function(e){var t=e.field,a=e.formikProps,n=a.touched,c=a.errors,l=e.label,o=e.placeholder,s=Object(L.a)(e,["field","formikProps","label","placeholder"]),u=Object(r.useState)(!1),m=Object(q.a)(u,2),d=m[0],f=m[1],p=Object(r.useState)(!1),b=Object(q.a)(p,2),v=b[0],E=b[1],h=d&&!v,k=n[t.name]&&c[t.name];return i.a.createElement("div",{className:"input-wrapper"},l&&i.a.createElement("label",{className:"floating-label ".concat(d||v?"active":""," ").concat(k?"error":""),htmlFor:s.id||s.name},l),i.a.createElement("input",Object.assign({className:"".concat(k?"input-error":""),placeholder:h?o:""},t,s,{onFocus:function(){return f(!0)},onBlur:function(e){!function(e){f(!1),e.target.value?E(!0):E(!1)}(e),t.onBlur(e)}})),k&&i.a.createElement("div",{className:"error-message"},c[t.name]))}),_=(a(59),a(26)),A=function(e){return e.formData.stockTicker},z=Object(_.a)(function(e){return e.formData.expirationDate},function(e){return e}),B=Object(_.a)(function(e){return e.formData.entryDate},function(e){return e}),I=Object(_.a)(A,function(e){return e}),U=Object(_.a)(function(e){return e.formData.stockPrice},function(e){return e}),M=Object(_.a)(function(e){return e.formData.shortStrike},function(e){return e}),$=Object(_.a)(function(e){return e.formData.credit},function(e){return e}),J=Object(_.a)(function(e){return e.formData.dividend},function(e){return e}),Y=Object(_.a)(function(e){return e.formData.combinedProfit},function(e){return e}),H=Object(_.a)(function(e){return e.formData.costPerShares},function(e){return e}),W=Object(_.a)(function(e){return e.formData.ror},function(e){return e}),G=Object(_.a)(function(e){return e.formData.days},function(e){return e}),K=Object(_.a)(function(e){return e.formData.exitLevel},function(e){return e}),Q=Object(_.a)(function(e){return e.formData.breakEven},function(e){return e}),X=Object(_.a)(function(e){return e.formData.annualizedROR},function(e){return e}),Z=Object(_.a)(function(e){return e.formData.downsideProtection},function(e){return e}),ee=a(14),te=function(e){return"number"===typeof e&&!isNaN(e)&&e!==1/0&&e!==-1/0},ae=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),ne=ee.c().shape({stockTicker:ee.e().required("Stock ticker is required"),entryDate:ee.a().required("Entry date is required").max(ee.d("expirationDate"),"Entry date must be before expiration date"),expirationDate:ee.a().required("Expiration date is required").min(ee.d("entryDate"),"Expiration date must be after entry date"),stockPrice:ee.b().min(.01,"Stock price must be greater than 0").required("Stock price is required"),shortStrike:ee.b().required("Short strike is required"),credit:ee.b().required("Credit is required"),dividend:ee.b().required("Dividend is required")}),re=function(){var e=function(){var e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return"".concat(t,"-").concat(a,"-").concat(n)}(),t=Object(l.c)(),a=Object(l.d)(z),n=Object(l.d)(B),c=Object(l.d)(I),o=Object(l.d)(U),s=Object(l.d)(M),u=Object(l.d)($),m=Object(l.d)(J),w=Object(l.d)(Y),P=Object(l.d)(H),x=Object(l.d)(Q),C=Object(l.d)(W),F=Object(l.d)(G);Object(r.useEffect)(function(){var e=function(e,t){var a=new Date(e),n=(new Date(t)-a)/864e5;return Math.ceil(n)}(n,a);if(!isNaN(e)&&e>=0&&t(p(e)),!isNaN(o)){var r=Math.round(.92*o);t(v(r));var i=(100*parseFloat(o-u)).toFixed(2);t(O(i));var c=parseFloat(o-(u-m)).toFixed(2);t(j(c)),x>0&&!isNaN(x)&&t(y(x/o-1))}var l=parseFloat(u)+parseFloat(m)-parseFloat(o-s);t(h(l));var d=(C/e*365).toFixed(2);t(S(d));var f=(100*parseFloat(100*w/P)).toFixed(2);t(D(f))},[n,a,o,s,u,m,x,w,P,C,F,t]);return i.a.createElement("div",null,i.a.createElement("h1",{className:"main-title"},"Steady Calculator"),i.a.createElement(T.c,{initialValues:{stockTicker:"AAPL",entryDate:e,expirationDate:"",stockPrice:"",shortStrike:"",credit:"",dividend:""},validationSchema:ne},function(e){return i.a.createElement(T.b,null,i.a.createElement("div",{className:"form-grid"},i.a.createElement(T.a,{component:V,label:"Enter stock/ticker",name:"stockTicker",onChange:function(a){return function(e,a){var n=e.target.value;a.setFieldValue("stockTicker",n),t(d(n))}(a,e)},placeholder:"e.g AAPL",value:c,formikProps:e}),i.a.createElement(T.a,{component:V,label:"Entry date",name:"entryDate",onChange:function(a){return function(e,a){var n=e.target.value;a.setFieldValue("entryDate",n),t(f(n))}(a,e)},type:"date",value:n,formikProps:e}),i.a.createElement(T.a,{component:V,label:"Expiration date",name:"expirationDate",onChange:function(a){return function(e,a){var n=e.target.value;a.setFieldValue("expirationDate",n),t(b(n))}(a,e)},type:"date",formikProps:e}),i.a.createElement(T.a,{component:V,label:"Stock Price",name:"stockPrice",onChange:function(a){return function(e,a){var n=""===e.target.value?"":Number(e.target.value);a.setFieldValue("stockPrice",n),t(E(n))}(a,e)},type:"number",formikProps:e}),i.a.createElement(T.a,{component:V,label:"Short strike",name:"shortStrike",onChange:function(a){return function(e,a){var n=""===e.target.value?"":Number(e.target.value);a.setFieldValue("shortStrike",n),t(N(n))}(a,e)},type:"number",formikProps:e}),i.a.createElement(T.a,{component:V,label:"Credit",name:"credit",type:"number",onChange:function(a){return function(e,a){var n=e.target.value;a.setFieldValue("credit",n),t(k(n))}(a,e)},placeholder:"enter credit number",formikProps:e}),i.a.createElement(T.a,{component:V,label:"Dividend",name:"dividend",type:"number",onChange:function(a){return function(e,a){var n=e.target.value;a.setFieldValue("dividend",n),t(g(n))}(a,e)},placeholder:"eneter dividend number",formikProps:e})))}))},ie=(a(60),Object(l.b)(function(e){return{stockTicker:A(e)}})(function(){var e=Object(r.useRef)(),t=Object(l.d)(A);return Object(r.useEffect)(function(){return e.current=function(){document.getElementById("tradingview_215b4")&&"TradingView"in window&&new window.TradingView.widget({autosize:!0,symbol:t,interval:"W",timezone:"Etc/UTC",theme:"light",style:"1",locale:"en",toolbar_bg:"#f1f3f6",enable_publishing:!1,withdateranges:!0,hide_side_toolbar:!1,allow_symbol_change:!0,details:!0,hotlist:!0,container_id:"tradingview_215b4"})},n||(n=new Promise(function(e){var t=document.createElement("script");t.id="tradingview-widget-loading-script",t.src="https://s3.tradingview.com/tv.js",t.type="text/javascript",t.onload=e,document.head.appendChild(t)})),n.then(function(){return e.current&&e.current()}),function(){return e.current=null}},[t]),i.a.createElement("div",{className:"tradingview-widget-container"},i.a.createElement("div",{id:"tradingview_215b4"}))})),ce=(a(61),a(62),function(e){var t=e.currentStep,a=e.steps;return i.a.createElement("section",null,i.a.createElement("ol",{className:"progress-bar"},a.map(function(e,a){return i.a.createElement("li",{key:a,className:t===a?"is-active":t>a?"is-complete":""},i.a.createElement("span",null,e.label),e.hasChanges&&i.a.createElement("span",{className:"has-changes"}))})))}),le=function(){var e=Object(r.useState)(3),t=Object(q.a)(e,2),a=t[0],n=(t[1],Object(l.d)(I)),c=Object(l.d)(G),o=Object(l.d)(K),s=Object(l.d)(Y),u=Object(l.d)(H),m=Object(l.d)(W),d=Object(l.d)(Q),f=Object(l.d)(Z),p=Object(l.d)(X),b=te(parseFloat(p))?p:0,v=te(parseFloat(m))?m:0,E=te(s)?s:0,h=te(f)?f:0,k=ae.format(v),g=ae.format(u),N=ae.format(E),O=ae.format(b),D=h.toLocaleString("en-US",{style:"percent",maximumFractionDigits:2}),j=100*N;return i.a.createElement("div",{className:"result-container"},i.a.createElement("div",{className:"title-and-content-wrapper"},i.a.createElement("h2",{className:"result-title"},"Your Results"),i.a.createElement("div",{className:"content-wrapper"},i.a.createElement("div",{className:"result-grid"},i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Combined Net Credit / Profit"),i.a.createElement("span",{className:"result-item-value"},"$",N)),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Cost per 100 shares"),i.a.createElement("span",{className:"result-item-value"},"$",g)),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Downside protection"),i.a.createElement("span",{className:"result-item-value"},D)),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"ROR"),i.a.createElement("span",{className:"result-item-value"},k,"%")),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Annualized ROR"),i.a.createElement("span",{className:"result-item-value"},O,"%")),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Break Even"),i.a.createElement("span",{className:"result-item-value"},d)),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Days"),i.a.createElement("span",{className:"result-item-value"},c)),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Stock Ticker"),i.a.createElement("span",{className:"result-item-value"},n)),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Exit Level"),i.a.createElement("span",{className:"result-item-value"},"$",o))))),i.a.createElement("div",{className:"cover-call-container"},i.a.createElement("h3",null,"The Covered Call"),i.a.createElement("div",{className:"result-container-cover"},i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Cost Basis"),i.a.createElement("span",{className:"result-item-value"},g)),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Max Profit"),i.a.createElement("span",{className:"result-item-value"},j))),i.a.createElement("div",{className:"progress-bar-wrapper"},i.a.createElement(ce,{currentStep:a,steps:[{label:"1000"},{label:"2000"},{label:"100 shares"},{label:"100 shares"},{label:"three hundred backs"},{label:"hello"},{label:"Test"},{label:"Step"},{label:"Step"},{label:"test"}]})),i.a.createElement("div",{className:"tradingview-container"},i.a.createElement("h3",{className:"tradingview-title"},"Interactive Chart"),i.a.createElement(ie,{stockTicker:n}))))},oe=function(){return i.a.createElement("div",null,i.a.createElement(re,null),i.a.createElement(le,null))},se=function(){return i.a.createElement(F.a,null,i.a.createElement("div",null,i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(F.b,{to:"/"},"Home")))),i.a.createElement(R.c,null,i.a.createElement(R.a,{path:"/",element:i.a.createElement(oe,null)}))))},ue=(a(63),document.getElementById("root"));Object(c.createRoot)(ue).render(i.a.createElement(l.a,{store:C},i.a.createElement(se,null)))}},[[46,1,2]]]);
//# sourceMappingURL=main.010acdb9.chunk.js.map