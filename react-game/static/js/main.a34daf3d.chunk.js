(window["webpackJsonpnew-project"]=window["webpackJsonpnew-project"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(2),c=t.n(o),i=(t(13),t(3)),s=t(4),u=t(6),l=t(5),h=t(7),m=(t(14),function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(u.a)(this,Object(l.a)(n).call(this,e))).state={list:[{id:1,question:"Con ki\u1ebfn n\u1eb7ng m\u1ea5y c\xe2n?",answer:["135kg","135mg","135g","135ng"],correct:"135mg"},{id:2,question:"\u0110i\u1ec1n v\xe0o ch\u1ed7 tr\u1ed1ng: G\xe1y s\u1edbm \u0103n ...",answer:["m\xec","g\xec","c\u01a1m","L"],correct:"g\xec"},{id:3,question:"Qu\u1ea7n g\xec nhi\u1ec1u nh\u1ea5t",answer:["Qu\u1ea7n \u0111\u1ea3o","Qu\u1ea7n h\xf9ng","Qu\u1ea7n \u0111\xf9i","Qu\u1ea7n ch\xedp"],correct:"Qu\u1ea7n ch\xedp"},{id:4,question:"Con n\xe0o khi n\u1ed1i li\u1ec1n l\u1ea1i v\u1edbi nhau th\xec c\xf3 \u0111\u1ed9 d\xe0i l\u1edbn nh\u1ea5t?",answer:["Con \u0111\u01b0\u1eddng","Con ki\u1ebfn","Con s\xf4ng","Con ng\u01b0\u1eddi"],correct:"Con ng\u01b0\u1eddi"}],numberquestion:0,totalcorrect:1,status:["","","",""]},t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"checkAnswer",value:function(e,n,t,r){var a=this.state.list[n].correct;n<=4?a===e?(n+=1,t+=1):n+=1:n=5,this.setState({numberquestion:n,totalcorrect:t}),console.log(r)}},{key:"resetQuiz",value:function(e,n){this.setState({numberquestion:0,totalcorrect:0})}},{key:"render",value:function(){var e=this,n=this.state.numberquestion,t=this.state.totalcorrect;if(n<=4){var r=this.state.list[n].question,o=this.state.list[n].answer.map((function(r,o){return a.a.createElement("li",{key:o},a.a.createElement("h3",{className:"exit",onClick:function(){return e.checkAnswer(r,n,t,o)}},a.a.createElement("p",null,r)))}));return a.a.createElement("div",{className:"App"},a.a.createElement("div",null,a.a.createElement("h1",null,"Quiz"),a.a.createElement("ul",null,a.a.createElement("h2",null,r),o)))}return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Ch\xfac M\u1eebng"),a.a.createElement("p",null,"B\u1ea1n \u0111\xe3 \u0111\xfang ",t," /5 c\xe2u"),a.a.createElement("button",{onClick:function(){return e.resetQuiz(n,t)}},"L\xe0m l\u1ea1i"))}}]),n}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,n,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a34daf3d.chunk.js.map