(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a.n(n),r=(a(14),a(9)),o=a(2),l=a(3),s=a(5),i=a(4),h=a(1),b=a(0),j=function(){return Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Job"})]})})},u=function(e){console.log("TableBody"),console.log(e),console.log("TableBody");var t=e.characterData.map((function(t,a){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.name}),Object(b.jsx)("td",{children:t.job}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{onClick:function(){return e.removeCharacter(a)},children:"Delete"})})]},a)}));return Object(b.jsx)("tbody",{children:t})},d=function(e){console.log("Table"),console.log(e),console.log("Table");var t=e.characterData,a=e.removeCharacter;return Object(b.jsxs)("table",{children:[Object(b.jsx)(j,{}),Object(b.jsx)(u,{characterData:t,removeCharacter:a})]})},m=a(8),O=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).initialState={name:"",job:""},e.state=e.initialState,e.handleChange=function(t){var a=t.target,n=a.name,c=a.value;e.setState(Object(m.a)({},n,c))},e.submitForm=function(){e.props.handleSubmit(e.state),e.setState(e.initialState)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange}),Object(b.jsx)("label",{htmlFor:"job",children:"Job"}),Object(b.jsx)("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),Object(b.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]})}}]),a}(h.Component),v=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={characters:[]},e.removeCharacter=function(t){var a=e.state.characters;console.log("removeCharacter"),console.log(a),console.log("removeCharacter"),e.setState({characters:a.filter((function(e,a){return a!==t}))})},e.handleSubmit=function(t){console.log("handleSubmit"),console.log(t),console.log("handleSubmit"),e.setState({characters:[].concat(Object(r.a)(e.state.characters),[t])})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.characters;return console.log("App"),console.log(e),console.log("App"),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(d,{characterData:e,removeCharacter:this.removeCharacter}),Object(b.jsx)(O,{handleSubmit:this.handleSubmit})]})}}]),a}(h.Component);c.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fad7f393.chunk.js.map