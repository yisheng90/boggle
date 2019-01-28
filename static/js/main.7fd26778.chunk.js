(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(41)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),s=a.n(i),c=(a(15),a(1)),o=a(2),l=a(4),u=a(3),d=a(5),h=a(6),m=(a(17),function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(c.a)(this,e),this.word=t[0],this.letters=t,this.adjecents=[]}return Object(o.a)(e,[{key:"populateAdjacentDices",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=[-5,-4,-3,-1,1,3,4,5];e%4===0?a=[-4,-3,1,4,5]:e%4===3&&(a=[-5,-4,-1,3,4]),this.adjecents=a.reduce(function(a,n){return((n=e+n)>=0||n<=12)&&t[n]&&a.push(t[n]),a},[])}},{key:"rollDice",value:function(){var e=Math.floor(Math.random()*this.letters.length);this.word=this.letters[e]}}]),e}()),p=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";Object(c.a)(this,e),this.word=t,this.isCompleteString=!1,this.children={}},f=function(){function e(){Object(c.a)(this,e),this.rootNode=new p}return Object(o.a)(e,[{key:"insert",value:function(e){for(var t=this.rootNode,a=0;a<e.length;a++){var n=e[a];t.children[n]||(t.children[n]=new p(e[a])),t=t.children[n],a===e.length-1&&(t.isCompleteString=!0)}}},{key:"find",value:function(e){for(var t=this.rootNode,a=0;a<e.length;a++){var n=e[a];if(!t.children[n])return!1;if(t=t.children[n],a===e.length-1)return t.isCompleteString}}}]),e}(),v=function(){function e(){Object(c.a)(this,e),this.dictionary=new f}return Object(o.a)(e,[{key:"init",value:function(){var e=this;fetch("./dictionary.txt").then(function(e){return e.text()}).then(function(t){t.split("\n").forEach(function(t){return e.dictionary.insert(t)})})}},{key:"isValidStringInput",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(!e)return!0;for(var n=t.filter(function(t){return t.word===e.charAt(0)||"*"===t.word}),r=!1;!r&&n.length>0;){var i=n.shift();a.includes(i)||(a.push(i),(r=this.isValidStringInput(e.substring(1),i.adjecents,a))||a.pop())}return r}},{key:"isWordSubmitted",value:function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).find(function(t){return t.word===e})}},{key:"isValidWord",value:function(e){return this.dictionary.find(e)}}]),e}(),b=[["d","e","i","l","r","x"],["h","l","n","n","r","z"],["d","e","l","r","v","y"],["e","l","r","t","t","y"],["e","h","r","t","v","w"],["e","e","g","h","n","w"],["a","a","e","e","g","n"],["a","o","o","t","t","w"],["e","i","o","s","s","t"],["e","e","i","n","s","u"],["d","i","s","t","t","y"],["a","f","f","k","p","s"],["a","c","h","o","p","s"],["c","i","m","o","t","u"],["h","i","m","n","q","u"],["a","b","b","j","o","o"]],O=function(){function e(){Object(c.a)(this,e),this.dices=b.map(function(e){return new m(e)}),this.answers=[],this.totalScore=0,this.timeLimit=180,this.validator=new v,this.validator.init()}return Object(o.a)(e,[{key:"init",value:function(){this._rollDices(),this._addWildCards(2)}},{key:"addWord",value:function(e){this.validator.isValidStringInput(e,this.dices)&&!this.validator.isWordSubmitted(e,this.answers)&&this.validator.isValidWord(e)&&(this.answers.push({word:e,score:this._getScore(e)}),this.totalScore+=this._getScore(e))}},{key:"restart",value:function(){this.answers=[],this.totalScore=0,this.dices.forEach(function(e){e.rollDice()}),this._addWildCards(2)}},{key:"_getScore",value:function(e){var t=e.length;return t>=8?11:7===t?5:6===t?5:5===t?2:1}},{key:"_rollDices",value:function(){for(var e=this,t=0;t<this.dices.length;t++){var a=Math.floor(Math.random()*this.dices.length),n=this.dices[a];this.dices[a]=this.dices[t],this.dices[t]=n}this.dices.forEach(function(t,a){t.rollDice(),t.populateAdjacentDices(a,e.dices)})}},{key:"_addWildCards",value:function(e){for(;e>0;){var t=Math.floor(Math.random()*this.dices.length);"*"!==this.dices[t].word&&(this.dices[t].word="*",e--)}}}]),e}(),g=(a(19),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"badge"},r.a.createElement("div",null,this.props.word),r.a.createElement("div",{className:"badgeTip"},this.props.score))}}]),t}(n.Component)),j=(a(21),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tile"},r.a.createElement("div",null,this.props.dice))}}]),t}(n.Component)),y=(a(23),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"inputWrapper"},r.a.createElement("input",{type:"text",name:"word",className:"input",placeholder:"Your Word",onKeyDown:function(t){return e.props.onChangeHandler(t)}}))}}]),t}(n.Component)),w=(a(25),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"_renderDices",value:function(e){return e.map(function(e,t){var a="".concat(e.word,"-").concat(t);return r.a.createElement(j,{dice:e,key:a})})}},{key:"_renderRows",value:function(){for(var e=this,t=[],a=0;a<4;a++){var n=this.props.dices.slice(4*a,4*a+4);t.push(n)}return t.map(function(t,a){var n="diceRow-".concat(a);return r.a.createElement("div",{className:"diceRow",key:n},e._renderDices(t))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"gameBoard"},r.a.createElement("div",{className:"diceHolder"},this._renderRows()),r.a.createElement(y,{onChangeHandler:this.props.onChangeHandler}))}}]),t}(n.Component)),k=(a(27),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"logo"},r.a.createElement("div",{className:"text-blue dice",id:"logoOne"},"B"),r.a.createElement("div",{className:"text-yellow dice",id:"logoTwo"},"O"),r.a.createElement("div",{className:"text-blue dice",id:"logoThree"},"G"),r.a.createElement("div",{className:"text-yellow dice",id:"logoFour"},"G"),r.a.createElement("div",{className:"text-blue dice",id:"logoFive"},"L"),r.a.createElement("div",{className:"text-yellow dice",id:"logoSix"},"E"))}}]),t}(n.Component)),E=(a(29),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"_renderList",value:function(){return this.props.answers.map(function(e){var t="".concat(e.word,"-list-badge");return r.a.createElement(g,{word:e.word,score:e.score,key:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"listWrapper"},this._renderList())}}]),t}(n.Component)),S=(a(31),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"buttonWrapper"},r.a.createElement("button",{className:"button",onClick:this.props.onClickHandler},this.props.title))}}]),t}(n.Component)),_=(a(33),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"summary"},r.a.createElement(k,null),r.a.createElement("div",{className:"summaryBoard"},r.a.createElement("div",null,"Total Score: ",this.props.totalScore),r.a.createElement("div",null,"Number of Words: ",this.props.answers.length)),r.a.createElement(E,{answers:this.props.answers}),r.a.createElement(S,{title:"Again!",onClickHandler:this.props.onClickHandler}))}}]),t}(n.Component)),C=(a(35),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isStarted:a.props.isStarted,time:a.props.timeLimit},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){!e.isStarted&&this.props.isStarted?(this.setState({time:this.props.timeLimit}),this._setTimer()):e.isStarted&&!this.props.isStarted&&clearInterval(this.timer)}},{key:"_setTimer",value:function(){var e=this;!0===e.props.isStarted&&(e.timer=setInterval(function(){var t=e.state.time-1;0===t&&(clearInterval(e.timer),e.props.recordTimeOut()),e.setState({time:t})},1e3))}},{key:"_getSeconds",value:function(){var e=Math.floor(this.state.time%60).toString();return e=1===e.length?"0"+e:e}},{key:"_getMinutes",value:function(){var e=Math.floor(this.state.time/60).toString();return e=1===e.length?"0"+e:e}},{key:"render",value:function(){return r.a.createElement("div",{className:"timer"},r.a.createElement("div",{className:"minutes"},this._getMinutes()),r.a.createElement("div",{className:"seperator"},":"),r.a.createElement("div",{className:"second"},this._getSeconds()))}}]),t}(n.Component)),N=(a(37),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).game=new O,a.state={alphabets:a.game.dices.map(function(e){return e.word.toUpperCase()}),hasStarted:!1,hasTimeOut:!1,totalScore:a.game.totalScore,answers:a.game.answers},a.addWord=a._addWord.bind(Object(h.a)(Object(h.a)(a))),a.restart=a._restart.bind(Object(h.a)(Object(h.a)(a))),a.recordTimeOut=a._recordTimeOut.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.game.init(),this._setGame()}},{key:"componentWillUpdate",value:function(e,t,a){t.alphabets!==this.state.alphabets&&this.setState({hasStarted:!0,hasTimeOut:!1})}},{key:"_addWord",value:function(e){!1===this.state.hasTimeOut&&13===e.keyCode&&e.target.value.length>0&&(this.game.addWord(e.target.value),this.setState({answers:this.game.answers,totalScore:this.game.totalScore}),e.target.value="")}},{key:"_recordTimeOut",value:function(){this.setState({hasTimeOut:!0})}},{key:"_restart",value:function(e){e.preventDefault(),this.game.restart(),this._setGame()}},{key:"_setGame",value:function(){this.setState({alphabets:this.game.dices.map(function(e){return e.word.toUpperCase()}),hasStarted:!1,hasTimeOut:!1,totalScore:this.game.totalScore,answers:this.game.answers})}},{key:"_renderBadge",value:function(){var e=this.state.answers[this.state.answers.length-1];if(e)return r.a.createElement(g,{word:e.word,score:e.score})}},{key:"_renderPage",value:function(){return this.state.hasTimeOut?r.a.createElement(_,{totalScore:"20",answers:this.state.answers,onClickHandler:this.restart}):r.a.createElement("div",null,r.a.createElement("div",{className:"headerWrapper"},r.a.createElement(C,{isStarted:this.state.hasStarted,timeLimit:this.game.timeLimit,recordTimeOut:this.recordTimeOut}),r.a.createElement("div",{className:"textWhite"},this.state.totalScore),r.a.createElement("div",null,r.a.createElement("a",{href:"#",className:"textLink",onClick:this.restart},"Restart"))),r.a.createElement("div",{className:"bodyWrapper"},this._renderBadge(),r.a.createElement(w,{dices:this.state.alphabets,onChangeHandler:this.addWord})))}},{key:"render",value:function(){return r.a.createElement("div",null,this._renderPage())}}]),t}(n.Component)),W=(a(39),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"homePage"},r.a.createElement(k,null),r.a.createElement(S,{title:"PLAY!",onClickHandler:this.props.onClickHandler}))}}]),t}(n.Component)),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).pages=[,r.a.createElement(N,null)],a.state={currentIdx:0},a.nextPage=a._nextPage.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"_nextPage",value:function(){this.setState({currentIdx:1})}},{key:"_renderPage",value:function(){return 0===this.state.currentIdx?r.a.createElement(W,{onClickHandler:this.nextPage}):r.a.createElement(N,null)}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},this._renderPage())}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.7fd26778.chunk.js.map