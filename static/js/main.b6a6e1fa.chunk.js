(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=n(2),l=n(3),u=n(5),d=n(4),j=(n(17),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("h1",{children:"Welcome to the RESTy App"})}}]),n}(c.a.Component)),h=(n(18),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("footer",{children:[Object(s.jsx)("hr",{}),"\xa9 Dina Ayoub @ Code Fellows 401"]})}}]),n}(c.a.Component)),b=n(7),O=n.n(b),p=n(11),f=n(10),x=(n(20),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).handleClick=function(){var t=Object(f.a)(O.a.mark((function t(e){var n,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),console.log("HERE"),n=[],console.log("method",s.state.method),console.log("url",s.state.url),t.next=7,fetch(s.state.url,{method:s.state.method,mode:"cors"}).then((function(t){if(console.log("res status",t.status),200===t.status){var e,s=Object(p.a)(t.headers.entries());try{for(s.s();!(e=s.n()).done;){var a=e.value,c={};c[a[0]]=a[1],n.push(c)}}catch(r){s.e(r)}finally{s.f()}return t.json()}}));case 7:a=t.sent,console.log("COUNT"),s.props.getResults(a.length,n,a);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s.handleChange=function(t){s.setState({url:t.target.value})},s.handleRadioButtons=function(t){s.setState({method:t.target.value})},s.state={method:"GET",url:""},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"text",id:"url","data-testid":"url",placeholder:"Enter URL",onChange:this.handleChange}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{id:"radioButtons","data-testid":"method",children:[Object(s.jsxs)("label",{className:"labels",children:[Object(s.jsx)("input",{type:"radio",defaultChecked:!0,className:"radioButtons",name:"radioButton",value:"GET",onClick:this.handleRadioButtons}),"GET"]}),Object(s.jsxs)("label",{className:"labels",children:[Object(s.jsx)("input",{type:"radio",className:"radioButtons",name:"radioButton",value:"POST",onClick:this.handleRadioButtons}),"POST"]}),Object(s.jsxs)("label",{className:"labels",children:[Object(s.jsx)("input",{type:"radio",className:"radioButton",name:"radioButton",value:"PUT",onClick:this.handleRadioButtons}),"PUT"]}),Object(s.jsxs)("label",{className:"labels",children:[Object(s.jsx)("input",{type:"radio",className:"radioButton",name:"radioButton",value:"DELETE",onClick:this.handleRadioButtons}),"DELETE"]})]}),Object(s.jsx)("button",{"data-testid":"submit-button",onClick:this.handleClick,children:"Go"})]})}}]),n}(c.a.Component)),m=n(8),v=n.n(m),y=(n(21),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{id:"results",children:[Object(s.jsx)("div",{className:"content",children:Object(s.jsxs)("h3",{children:["Count of results: ",Object(s.jsx)("span",{"data-testid":"count",children:this.props.count})]})}),Object(s.jsx)("div",{className:"content",children:Object(s.jsx)("h3",{children:"Headers"})}),Object(s.jsx)("div",{className:"content","data-testid":"headers",children:Object(s.jsx)(v.a,{src:this.props.headers})}),Object(s.jsx)("div",{className:"content",children:Object(s.jsx)("h3",{children:"Body"})}),Object(s.jsx)("div",{className:"content","data-testid":"results",children:Object(s.jsx)(v.a,{src:this.props.results})}),Object(s.jsx)("div",{id:"emptyDiv",children:"\xa0"})]})}}]),n}(c.a.Component)),g=(n(22),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).getResults=function(t,e,n){console.log("count",t),s.setState({count:t,headers:e,results:n}),console.log("state",s.state)},s.state={count:0,headers:{},results:[]},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(j,{}),Object(s.jsx)(x,{getResults:this.getResults}),Object(s.jsx)(y,{count:this.state.count,headers:this.state.headers,results:this.state.results}),Object(s.jsx)(h,{})]})}}]),n}(c.a.Component));o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b6a6e1fa.chunk.js.map