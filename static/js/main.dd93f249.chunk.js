(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,a){e.exports=a(65)},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),c=a(40),l=a(9),o=a(22),s={stockTicker:"AAPL",days:0,entryDate:(new Date).toISOString().split("T")[0],expirationDate:(new Date).toISOString().split("T")[0],exitLevel:0,stockPrice:0,credit:0,dividend:"",shortStrike:0,combinedProfit:0,costPerShares:0,ror:0,breakEven:0,downsideProtection:0,annualizedROR:0},u=Object(o.b)({name:"formData",initialState:s,reducers:{setStockTicker:function(e,t){e.stockTicker=t.payload},setEntryDate:function(e,t){e.entryDate=t.payload},setExpirationDate:function(e,t){e.expirationDate=t.payload},setUpdateDays:function(e,t){e.days=t.payload},setExitLevel:function(e,t){e.exitLevel=t.payload},setStockPrice:function(e,t){e.stockPrice=t.payload},setCombinedProfit:function(e,t){e.combinedProfit=t.payload},setCredit:function(e,t){e.credit=t.payload},setDividend:function(e,t){e.dividend=t.payload},setShortStrike:function(e,t){e.shortStrike=t.payload},setCostPerShares:function(e,t){e.costPerShares=t.payload},setROR:function(e,t){e.ror=t.payload},setBreakEven:function(e,t){e.breakEven=t.payload},setDownsideProtection:function(e,t){e.downsideProtection=t.payload},setAnnualizedROR:function(e,t){e.annualizedROR=t.payload}}}),m=u.actions,d=m.setStockTicker,f=m.setEntryDate,E=m.setUpdateDays,p=m.setExpirationDate,b=m.setExitLevel,v=m.setStockPrice,h=m.setCombinedProfit,g=m.setCredit,O=m.setDividend,N=m.setShortStrike,j=m.setCostPerShares,k=m.setROR,y=m.setBreakEven,D=m.setDownsideProtection,S=m.setAnnualizedROR,w=u.reducer,P=function(){return function(e){return function(t){try{return e(t)}catch(a){throw console.error("Caught an exception!",a),a}}}},T=function(e){return function(t){return function(a){console.group(a.type),console.log("dispatching",a);var n=t(a);return console.log("next state",e.getState()),console.groupEnd(),n}}},C=Object(o.a)({reducer:{formData:w},middleware:function(e){return e().concat(P,T)}}),x=a(34),R=a(1),F=a(16),q=a(4),L=a(32),z=(a(58),function(e){var t=e.field,a=e.form,n=a.touched,c=a.errors,l=e.label,o=e.placeholder,s=Object(L.a)(e,["field","form","label","placeholder"]),u=Object(r.useState)(!1),m=Object(q.a)(u,2),d=m[0],f=m[1],E=Object(r.useState)(!1),p=Object(q.a)(E,2),b=p[0],v=p[1],h=d&&!b,g=n[t.name]&&c[t.name];return i.a.createElement("div",{className:"input-wrapper"},l&&i.a.createElement("label",{className:"floating-label ".concat(d||b?"active":""," ").concat(g?"error":""),htmlFor:s.id||s.name},l),i.a.createElement("input",Object.assign({className:"".concat(g?"input-error":""),placeholder:h?o:""},s,{onFocus:function(){return f(!0)},onBlur:function(e){f(!1),e.target.value?v(!0):v(!1)}})),g&&i.a.createElement("div",{className:"error-message"},c[t.name]))}),A=(a(59),function(e){var t=e.title,a=Object(L.a)(e,["title"]);return i.a.createElement("button",Object.assign({},a,{className:"red-button"}),t)}),_=(a(60),a(26)),B=function(e){return e.formData.stockTicker},I=function(e){return e.formData.days},M=function(e){return e.formData.exitLevel},V=function(e){return e.formData.combinedProfit},H=function(e){return e.formData.costPerShares},U=function(e){return e.formData.ror},$=function(e){return e.formData.breakEven},J=function(e){return e.formData.annualizedROR},Y=function(e){return e.formData.downsideProtection},W=Object(_.a)(function(e){return e.formData.expirationDate},function(e){return e}),G=Object(_.a)(function(e){return e.formData.entryDate},function(e){return e}),K=Object(_.a)(B,function(e){return e}),Q=Object(_.a)(function(e){return e.formData.stockPrice},function(e){return e}),X=Object(_.a)(function(e){return e.formData.shortStrike},function(e){return e}),Z=Object(_.a)(function(e){return e.formData.credit},function(e){return e}),ee=Object(_.a)(function(e){return e.formData.dividend},function(e){return e}),te=Object(_.a)(V,function(e){return e}),ae=Object(_.a)(H,function(e){return e}),ne=Object(_.a)(U,function(e){return e}),re=Object(_.a)(I,function(e){return e}),ie=(Object(_.a)(M,function(e){return e}),Object(_.a)($,function(e){return e})),ce=(Object(_.a)(J,function(e){return e}),Object(_.a)(Y,function(e){return e}),a(14)),le=ce.c().shape({input1:ce.d().required("This field is required"),input2:ce.a().required("This field is required"),input3:ce.a().required("This field is required"),input4:ce.b().required("This field is required"),input5:ce.b().required("This field is required"),input6:ce.b().required("This field is required"),input7:ce.b().required("This field is required"),input8:ce.b().required("This field is required"),input9:ce.b().required("This field is required")}),oe=function(){var e=function(){var e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return"".concat(t,"-").concat(a,"-").concat(n)}(),t=Object(l.c)(),a=Object(l.d)(W),n=Object(l.d)(G),c=Object(l.d)(K),o=Object(l.d)(Q),s=Object(l.d)(X),u=Object(l.d)(Z),m=Object(l.d)(ee),w=Object(l.d)(te),P=Object(l.d)(ae),T=Object(l.d)(ie),C=Object(l.d)(ne),x=Object(l.d)(re);Object(r.useEffect)(function(){var e=function(e,t){var a=new Date(e),n=(new Date(t)-a)/864e5;return Math.ceil(n)}(n,a);!isNaN(e)&&e>=0&&t(E(e))},[n,a,t]),Object(r.useEffect)(function(){if(!isNaN(o)){var e=parseFloat(.92*o).toFixed(2);t(b(e))}},[o,b]),Object(r.useEffect)(function(){var e=100*parseFloat(o-u);t(j(e))},[o,j,u]),Object(r.useEffect)(function(){var e=parseFloat(u)+parseFloat(m)-(parseFloat(o)-parseFloat(s));t(h(e))},[s,m,u,h]),Object(r.useEffect)(function(){var e=100*parseFloat(C/x).toFixed(2);t(S(e))},[C,x,S]),Object(r.useEffect)(function(){var e=parseFloat(o-(u-m));t(y(e))},[o,u,m,y]),Object(r.useEffect)(function(){if(T>0&&!isNaN(T)){var e=100*parseFloat(T/o-1).toFixed(2);t(D(e))}},[T,o,D]),Object(r.useEffect)(function(){var e=100*parseFloat(100*w/P).toFixed(2);t(k(e))},[T,o,D]);var R=function(e){t(g(e.target.value))},q=function(e){t(O(e.target.value))},L=function(e){t(d(e.target.value))},_=function(e){t(f(e.target.value))},B=function(e){t(p(e.target.value))},I=function(e){t(v(Number(e.target.value)))},M=function(e){t(N(Number(e.target.value)))};return i.a.createElement("div",null,i.a.createElement("h1",null,"Form Example"),i.a.createElement(F.c,{initialValues:{stockTicker:"AAPL",entryDate:e,expirationDate:"",stockPrice:"",shortStrike:"",credit:"",input8:""},validationSchema:le,onSubmit:function(e,t){(0,t.setSubmitting)(!1)}},function(e){var t=e.isSubmitting;return i.a.createElement(F.b,null,i.a.createElement("div",{className:"form-grid"},i.a.createElement(F.a,{component:z,placeholder:"e.g AAPL",name:"stockTicker",label:"Enter stock/ticker",value:c,onChange:L}),i.a.createElement(F.a,{component:z,type:"date",name:"entryDate",label:"Entry date",value:n,onChange:_}),i.a.createElement(F.a,{component:z,type:"date",name:"expirationDate",label:"Expiration date",onChange:B}),i.a.createElement(F.a,{component:z,type:"number",name:"stockPrice",label:"Stock Price",onChange:I}),i.a.createElement(F.a,{component:z,type:"number",name:"shortStrike",label:"Short strike",onChange:M}),i.a.createElement(F.a,{component:z,name:"credit",placeholder:"enter credit number",label:"Credit",onChange:R}),i.a.createElement(F.a,{name:"dividend",component:z,placeholder:"eneter dividend number",label:"Dividend",onChange:q})),i.a.createElement("div",{className:"button-container"},i.a.createElement(A,{type:"submit",title:"Calculate",disabled:t})))}))},se=Object(l.b)(function(e){return{stockTicker:B(e)}})(function(){var e=Object(r.useRef)(),t=Object(l.d)(B);return Object(r.useEffect)(function(){return e.current=function(){document.getElementById("tradingview_215b4")&&"TradingView"in window&&new window.TradingView.widget({autosize:!0,symbol:t,interval:"W",timezone:"Etc/UTC",theme:"light",style:"1",locale:"en",toolbar_bg:"#f1f3f6",enable_publishing:!1,withdateranges:!0,hide_side_toolbar:!1,allow_symbol_change:!0,details:!0,hotlist:!0,container_id:"tradingview_215b4"})},n||(n=new Promise(function(e){var t=document.createElement("script");t.id="tradingview-widget-loading-script",t.src="https://s3.tradingview.com/tv.js",t.type="text/javascript",t.onload=e,document.head.appendChild(t)})),n.then(function(){return e.current&&e.current()}),function(){return e.current=null}},[t]),i.a.createElement("div",{className:"tradingview-widget-container"},i.a.createElement("div",{id:"tradingview_215b4"}))}),ue=(a(61),Object(l.b)(function(e){return{stockTicker:B(e),days:I(e),exitLevel:M(e),combinedProfit:V(e),costPerShares:H(e),ror:U(e),breakEven:$(e),downsideProtection:Y(e),annualizedROR:J(e)}})(function(e){var t=e.stockTicker,a=e.days,n=e.exitLevel,r=e.combinedProfit,c=e.costPerShares,l=e.ror,o=e.breakEven,s=e.downsideProtection,u=e.annualizedROR,m=isNaN(u)?0:u,d=isNaN(l)?0:l,f=isNaN(r)?0:r;return i.a.createElement("div",{className:"result-container"},i.a.createElement("h2",{className:"result-title"},"Your Results"),i.a.createElement("div",{className:"result-grid"},i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Stock Ticker"),i.a.createElement("span",{className:"result-item-value"},t)),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Days"),i.a.createElement("span",{className:"result-item-value"},a)),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Exit Level"),i.a.createElement("span",{className:"result-item-value"},"$",n)),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Combined Net Credit / Profit"),i.a.createElement("span",{className:"result-item-value"},"$",f)),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Cost per 100 shares"),i.a.createElement("span",{className:"result-item-value"},"$",c)),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"ROR"),i.a.createElement("span",{className:"result-item-value"},d,"%")),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Downside protection"),i.a.createElement("span",{className:"result-item-value"},s,"%")),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Annualized ROR"),i.a.createElement("span",{className:"result-item-value"},m,"%")),i.a.createElement("div",{className:"result-item"},i.a.createElement("span",{className:"result-item-title"},"Break Even"),i.a.createElement("span",{className:"result-item-value"},o))),i.a.createElement("div",{className:"tradingview-container"},i.a.createElement("h3",{className:"tradingview-title"},"TradingView Chart"),i.a.createElement(se,{stockTicker:t})))})),me=function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Home Page"),i.a.createElement(oe,null),i.a.createElement(ue,null))},de=function(){return i.a.createElement("h1",null,"My Profile")},fe=(a(62),function(){return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"logo"},i.a.createElement("span",{role:"img","aria-label":"logo"},"\ud83d\udd30")),i.a.createElement("nav",{className:"nav"},i.a.createElement("ul",{className:"nav-list"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{href:"/"},"Home")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{href:"/profile"},"Profile")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{href:"/logout"},"Logout")))))}),Ee=(a(63),function(){var e=Object(r.useState)(!1),t=Object(q.a)(e,2),a=t[0],n=t[1];return i.a.createElement("div",{className:"sidebar ".concat(a?"open":"")},i.a.createElement("button",{className:"toggle-btn",onClick:function(){return n(!a)}},a?"Close":"Menu"),i.a.createElement("nav",null,i.a.createElement("ul",null,["Courses","Indicators","TST Inner Circle","CSA","SSO System","My Top 5 Trade Setups","ETF Edge Portfolio","Slingshot Traders Playbook","Trade of the Decade 2.0","10 for 10"].map(function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("a",{href:"/".concat(e.toLowerCase().replace(/\s+/g,"-"))},e))}))))}),pe=function(){return i.a.createElement(x.a,null,i.a.createElement(fe,null),i.a.createElement(Ee,null),i.a.createElement("div",null,i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(x.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(x.b,{to:"/profile"},"My Profile")))),i.a.createElement(R.c,null,i.a.createElement(R.a,{path:"/",element:i.a.createElement(me,null)}),i.a.createElement(R.a,{path:"/profile",element:i.a.createElement(de,null)}))))},be=(a(64),document.getElementById("root"));Object(c.createRoot)(be).render(i.a.createElement(l.a,{store:C},i.a.createElement(pe,null)))}},[[46,1,2]]]);
//# sourceMappingURL=main.dd93f249.chunk.js.map