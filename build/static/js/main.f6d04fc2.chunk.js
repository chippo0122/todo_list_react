(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,o){},,function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){"use strict";o.r(e);var n=o(1),a=o(8),c=o.n(a),r=o(6),s=o(9),i=o(2),l=o(3),d=o(5),u=o(4),h=o(10),p=(o(15),o(0)),j=function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).handleKeyUp=function(e){var o=e.target;if("Enter"===e.code)if(""!==o.value){var n={id:Object(h.a)(),task:o.value,done:!1};t.props.appGetData(n),o.value=""}else alert("Insertion shouldn't be blanked")},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"todo-header",children:Object(p.jsx)("input",{onKeyUp:this.handleKeyUp,type:"text",placeholder:"Please insert your Task, and Press Enter Key"})})}}]),o}(n.Component),b=function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={isHover:!1},t.handleMouse=function(e){return function(){t.setState({isHover:e})}},t.changeDoneState=function(e){return function(o){t.props.updateTodo(e,o.target.checked)}},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this,e=this.props,o=e.id,n=e.task,a=e.done,c=this.state.isHover;return Object(p.jsxs)("li",{onMouseLeave:this.handleMouse(!1),onMouseEnter:this.handleMouse(!0),style:{backgroundColor:c?"#888":"#222"},children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"checkbox",checked:a,onChange:this.changeDoneState(o)}),Object(p.jsx)("span",{children:n})]}),Object(p.jsx)("button",{onClick:function(){return t.props.delTodo(o)},className:"btn btn-danger",style:{display:c?"block":"none"},children:"Delete"})]})}}]),o}(n.Component),f=(o(17),function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this.props,e=t.todos,o=t.updateTodo,a=t.delTodo;return Object(p.jsx)("ul",{className:"todo-main",children:e.map((function(t){return Object(n.createElement)(b,Object(r.a)(Object(r.a)({delTodo:a,updateTodo:o},t),{},{key:t.id}))}))})}}]),o}(n.Component)),O=(o(18),function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).handleCheckAll=function(e){t.props.checkAllTodo(e.target.checked)},t.clearAllDone=function(){var e=t.props.todos.reduce((function(t,e){return t+(e.done?1:0)}),0);0!==e&&window.confirm("Delete ".concat(e," task").concat(e>1?"s":"","?"))&&t.props.clearDone()},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this.props.todos,e=t.length,o=t.reduce((function(t,e){return e.done?t+1:t}),0);return Object(p.jsxs)("div",{className:"todo-footer",children:[Object(p.jsx)("label",{children:Object(p.jsx)("input",{type:"checkbox",onChange:this.handleCheckAll,checked:o===e&&0!==e})}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{children:["Finish: ",o]})," / Total: ",e]}),Object(p.jsx)("button",{onClick:this.clearAllDone,className:"btn btn-danger",children:"Delete Finished Task"})]})}}]),o}(n.Component)),v=(o(19),function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.appGetData=function(e){var o=t.state.todos,n=[e].concat(Object(s.a)(o));localStorage.setItem("react_todo_list",JSON.stringify(n)),t.setState({todos:n})},t.updateTodo=function(e,o){var n=t.state.todos.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{done:o}):t}));localStorage.setItem("react_todo_list",JSON.stringify(n)),t.setState({todos:n})},t.delTodo=function(e){if(window.confirm("Delete Pernemently?")){var o=t.state.todos.filter((function(t){return e!==t.id}));localStorage.setItem("react_todo_list",JSON.stringify(o)),t.setState({todos:o})}},t.checkAllTodo=function(e){var o=t.state.todos.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{done:e})}));localStorage.setItem("react_todo_list",JSON.stringify(o)),t.setState({todos:o})},t.clearDone=function(){var e=t.state.todos.filter((function(t){return!t.done}));localStorage.setItem("react_todo_list",JSON.stringify(e)),t.setState({todos:e})},t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("react_todo_list"));t&&this.setState({todos:t})}},{key:"render",value:function(){var t=this.state.todos;return Object(p.jsx)("div",{className:"todo-container",children:Object(p.jsxs)("div",{className:"todo-wrap",children:[Object(p.jsx)("h1",{className:"title",children:"To do List"}),Object(p.jsx)(j,{appGetData:this.appGetData}),Object(p.jsx)(f,{delTodo:this.delTodo,updateTodo:this.updateTodo,todos:t}),Object(p.jsx)(O,{clearDone:this.clearDone,checkAllTodo:this.checkAllTodo,todos:t})]})})}}]),o}(n.Component));o(20);c.a.render(Object(p.jsx)(v,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.f6d04fc2.chunk.js.map