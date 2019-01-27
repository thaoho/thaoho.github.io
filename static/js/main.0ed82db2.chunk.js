(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(60)},33:function(e,t,n){},35:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"toggleForm",function(){return v}),n.d(r,"setFilterMode",function(){return E}),n.d(r,"getAllWords",function(){return O}),n.d(r,"removeWord",function(){return w}),n.d(r,"addWord",function(){return g}),n.d(r,"toggleWord",function(){return j});var o=n(0),a=n.n(o),i=n(24),c=n.n(i),u=(n(33),n(2)),l=n(3),s=n(6),d=n(4),m=n(7),h=(n(35),n(5)),f=n(12),p=n.n(f),b="https://serverthaomap.herokuapp.com/word/";function v(){return{type:"TOGGLE_FORM"}}function E(e){return{type:"SET_FILTER_MODE",filterMode:e}}function O(){return function(e){p.a.get(b).then(function(t){return e({type:"SET_WORDS",words:t.data.words})})}}function w(e){return function(t){p.a.delete(b+e).then(function(){return t({type:"REMOVE_WORD",_id:e})})}}function g(e,t){return function(n){p.a.post(b,{en:e,vn:t}).then(function(e){var t=e.data,r=t.success,o=t.word,a=t.message;if(!r)return alert(a);n({type:"ADD_WORD",word:o})})}}function j(e,t){return function(n){p.a.put(b+e,{isMemorized:t}).then(function(t){return n({type:"TOGGLE_WORD",_id:e})})}}var M=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.word;return a.a.createElement("div",{className:"word"},a.a.createElement("div",{className:"word-container"},a.a.createElement("h3",{className:"text-success"},t.en),a.a.createElement("h3",{className:"text-danger"},t.isMemorized?"----":t.vn)),a.a.createElement("div",{className:"btn-container"},a.a.createElement("button",{className:t.isMemorized?"btn btn-success":"btn btn-danger",onClick:function(){return e.props.toggleWord(t._id,!t.isMemorized)}},t.isMemorized?"Forgot":"Memorized"),a.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.props.removeWord(t._id)}},"Remove")))}}]),t}(o.Component),_=Object(h.b)(null,r)(M),y=n(11),W=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={txtEn:"",txtVn:""},n.addWord=n.addWord.bind(Object(y.a)(Object(y.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"addWord",value:function(){var e=this.state,t=e.txtEn,n=e.txtVn;this.props.addWord(t,n),this.setState({txtEn:"",txtVn:""})}},{key:"render",value:function(){var e=this,t=this.props.shouldShowForm;return a.a.createElement("div",null,t?a.a.createElement("div",{className:"form-group word-from"},a.a.createElement("input",{placeholder:"English",className:"form-control",value:this.state.txtEn,onChange:function(t){return e.setState({txtEn:t.target.value})}}),a.a.createElement("br",null),a.a.createElement("input",{placeholder:"Vietnamese",className:"form-control",value:this.state.txtVn,onChange:function(t){return e.setState({txtVn:t.target.value})}}),a.a.createElement("br",null),a.a.createElement("div",{className:"btn-container"},a.a.createElement("button",{className:"btn btn-success",onClick:this.addWord},"Add word"),a.a.createElement("button",{className:"btn btn-danger",onClick:this.props.toggleForm},"Cancel"))):a.a.createElement("button",{className:"btn btn-success",style:{width:200,margin:10},onClick:this.props.toggleForm},"+"))}}]),t}(o.Component),S=Object(h.b)(function(e){return{shouldShowForm:e.shouldShowForm}},r)(W),k=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filterMode,n=e.setFilterMode;return a.a.createElement("div",null,a.a.createElement("select",{className:"word",value:t,onChange:function(e){return n(e.target.value)}},a.a.createElement("option",{value:"Show_All"},"Show All"),a.a.createElement("option",{value:"Show_Memorized"},"Show Memoried"),a.a.createElement("option",{value:"Show_Forgot"},"Show Forgot")))}}]),t}(o.Component),D=Object(h.b)(function(e){return{filterMode:e.filterMode}},r)(k),F=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.getAllWords()}},{key:"render",value:function(){var e=this.props,t=e.words,n=e.filterMode;return a.a.createElement("div",null,a.a.createElement(S,null),a.a.createElement("br",null),a.a.createElement(D,null),t.filter(function(e){return("Show_Forgot"!==n||!e.isMemorized)&&!("Show_Memorized"===n&&!e.isMemorized)}).map(function(e){return a.a.createElement(_,{key:e._id,word:e})}))}}]),t}(o.Component),R=Object(h.b)(function(e){return{words:e.words,filterMode:e.filterMode}},r)(F),N=n(8),C=n(26);var x=n(27);var z=Object(N.c)({words:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"SET_WORDS"===t.type?e.concat(t.words):"REMOVE_WORD"===t.type?e.filter(function(e){return e._id!==t._id}):"ADD_WORD"===t.type?e.concat(t.word):"TOGGLE_WORD"===t.type?e.map(function(e){return t._id===e._id?Object(x.a)({},e,{isMemorized:!e.isMemorized}):e}):e},shouldShowForm:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"TOGGLE_FORM"===t.type?!e:"ADD_WORD"!==t.type&&e},filterMode:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"SET_FILTER_MODE"===t.type?t.filterMode:e}}),T=Object(N.d)(z,Object(N.a)(C.a)),A=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(h.a,{store:T},a.a.createElement(R,null)))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.0ed82db2.chunk.js.map