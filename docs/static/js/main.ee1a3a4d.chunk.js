(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(21));t.getCurrentItem=i.default;var a=r(n(198));t.getCurrentList=a.default;var u=r(n(199));t.getItemDepth=u.default;var o=r(n(76));t.getItemsAtRange=o.default;var l=r(n(47));t.getListForItem=l.default;var s=r(n(200));t.getPreviousItem=s.default;var c=r(n(48));t.isList=c.default;var f=r(n(201));t.isSelectionInList=f.default},100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(23),i=n(10);t.default=function(e,t,n,a){if(e.shiftKey)return a();var u=t.value,o=i.getCurrentItem(n)(u);return o?(e.preventDefault(),u.selection.isExpanded&&t.delete(),o.nodes.every(function(e){return""===e.text})?i.getItemDepth(n)(u)>1?r.decreaseItemDepth(n,t):r.unwrapList(n,t):r.splitListItem(n,t)):a()}},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),a=n(10);t.default=function(e){return function(t,n,u){var o=function(e){var t=e.selection,n=e.document,r=n.getClosestBlock(t.start.key),a=n.getClosestBlock(t.end.key);if(r===a)return i.List([r]);var u=n.getCommonAncestor(r.key,a.key),o=u.getPath(r.key),l=u.getPath(a.key);return u.nodes.slice(o[0],l[0]+1)}(t.value);return n=n||e.types[0],t.withoutNormalizing(function(){t.wrapBlock({type:n,data:r.Data.create(u)})}),o.forEach(function(n){a.isList(e)(n)?n.nodes.forEach(function(e){var n=e.key;t.withoutNormalizing(function(){t.unwrapNodeByKey(n)})}):t.withoutNormalizing(function(){t.wrapBlockByKey(n.key,e.typeItem)})}),t.normalize()}}},198:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(21)),a=r(n(47));t.default=function(e){return function(t,n){var r=i.default(e)(t,n);return r?a.default(e)(t,r):null}}},199:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(21));t.default=function e(t){return function(n,r){var a=n.document,u=n.startBlock;r=r||u;var o=i.default(t)(n,r);if(!o)return 0;var l=a.getParent(o.key);return 1+e(t)(n,l)}}},200:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(21));t.default=function(e){return function(t,n){var r=t.document,a=t.startBlock;n=n||a;var u=i.default(e)(t,n);if(!u)return null;var o=r.getPreviousSibling(u.key);return o&&o.type===e.typeItem?o:null}}},201:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(76)),a=r(n(47));t.default=function(e){return function(t,n){var r=i.default(e)(t);return!r.isEmpty()&&(!n||a.default(e)(t,r.first()).get("type")===n)}}},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10);t.default=function(e,t){var n=r.getItemsAtRange(e)(t.value);return n.isEmpty()?t:t.withoutNormalizing(function(){n.forEach(function(e){t.unwrapNodeByKey(e.key)});var e=n.first(),r=t.value.document.getParent(e.key);if(r){var i=r.nodes.findIndex(function(t){return t.key===e.key});n.forEach(function(e){e.nodes.forEach(function(e){t.moveNodeByKey(e.key,r.key,i),i+=1})}),n.forEach(function(e){t.removeNodeByKey(e.key)})}})}},203:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10);t.default=function(e,t){var n=t.value,i=r.getCurrentItem(e)(n);return i?t.splitDescendantsByKey(i.key,n.selection.start.key,n.selection.start.offset):t}},204:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(10);t.default=function(e,t){var n=i.getPreviousItem(e)(t.value),a=i.getCurrentItem(e)(t.value);return n&&a?function(e,t,n,a){var u=t.value.document.getDescendant(a),o=u.nodes.size,l=u.nodes.last(),s=i.isList(e)(l)?l:null;if(s)return t.moveNodeByKey(n.key,s.key,s.nodes.size);var c=i.getListForItem(e)(t.value,u);if(!c)throw new Error("Destination is not in a list");var f=r.Block.create({object:"block",type:c.type,data:c.data});return f.validate(t),t.withoutNormalizing(function(){t.insertNodeByKey(a,o,f),t.moveNodeByKey(n.key,f.key,0)})}(e,t,a,n.key):t}},205:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(10);t.default=function(e,t){var n=t.value,a=n.document;if(1===i.getItemDepth(e)(n))return t;var u=i.getCurrentItem(e)(n);if(!u)return t;var o=a.getParent(u.key),l=a.getParent(o.key),s=a.getParent(l.key),c=o.nodes.skipUntil(function(e){return e===u}).rest(),f=o.nodes.size===c.size+1;if(c.isEmpty())t.moveNodeByKey(u.key,s.key,s.nodes.indexOf(l)+1);else{var d=r.Block.create({object:"block",type:o.type,data:o.data});t.withoutNormalizing(function(){t.insertNodeByKey(u.key,u.nodes.size,d)}),t.withoutNormalizing(function(){t.moveNodeByKey(u.key,s.key,s.nodes.indexOf(l)+1)}),c.forEach(function(e,n){t.withoutNormalizing(function(){t.moveNodeByKey(e.key,d.key,d.nodes.size+n)})})}return f&&t.removeNodeByKey(o.key),t}},206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(23),i=n(10);t.default=function(e,t,n,a){var u=t.value;return u.selection.isCollapsed&&i.getCurrentItem(n)(u)?e.shiftKey?(e.preventDefault(),r.decreaseItemDepth(n,t)):(e.preventDefault(),r.increaseItemDepth(n,t)):a()}},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(23),i=n(10);t.default=function(e,t,n,a){var u=t.value,o=u.selection,l=u.selection.start.offset;if(o.isExpanded)return a();if(l>0)return a();var s=i.getCurrentItem(n)(u);return s?!o.isCollapsed&&o.anchor.isAtEndOfNode(s)?a():(e.preventDefault(),r.unwrapList(n,t)):a()}},208:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(55)),a=n(209),u=n(23),o=n(10);function l(e,t){return function(n){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var a=n.value;return o.isSelectionInList(e)(a)?t.apply(void 0,[e,n].concat(r)):n}}t.default=function(e){void 0===e&&(e={});var t=new i.default(e);return{schema:a.schema(t),normalizeNode:a.normalizeNode(t),utils:{getCurrentItem:o.getCurrentItem(t),getCurrentList:o.getCurrentList(t),getItemDepth:o.getItemDepth(t),getItemsAtRange:o.getItemsAtRange(t),getPreviousItem:o.getPreviousItem(t),isList:o.isList(t),isSelectionInList:o.isSelectionInList(t)},changes:{decreaseItemDepth:l(t,u.decreaseItemDepth),increaseItemDepth:l(t,u.increaseItemDepth),splitListItem:l(t,u.splitListItem),unwrapList:l(t,u.unwrapList),wrapInList:u.wrapInList(t)}}}},209:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(210));t.schema=i.default;var a=r(n(211));t.normalizeNode=a.default},21:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(t,n){var r=t.document;if(!n){if(!t.selection.start.key)return null;n=t.startBlock}var i=r.getParent(n.key);return i&&i.type===e.typeItem?i:null}}},210:function(e,t,n){"use strict";function r(e){return function(t,n){var r=e[n.code];r&&r(t,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n={blocks:(t={},t[e.typeItem]={parent:e.types.map(function(e){return{type:e}}),nodes:[{match:{object:"block"}}],normalize:r({parent_type_invalid:function(e,t){e.withoutNormalizing(function(){e.unwrapNodeByKey(t.node.key)})},child_object_invalid:function(t,n){!function(e,t,n){t.withoutNormalizing(function(){t.wrapBlockByKey(n.nodes.first().key,e.typeDefault)});var r=t.value.document.getDescendant(n.key).nodes.first();n.nodes.rest().forEach(function(e,n){t.withoutNormalizing(function(){t.moveNodeByKey(e.key,r.key,n+1)})})}(e,t,n.node)}})},t)};return e.types.forEach(function(t){n.blocks[t]={nodes:[{match:{type:e.typeItem}}],normalize:r({child_type_invalid:function(t,n){t.withoutNormalizing(function(){t.wrapBlockByKey(n.child.key,e.typeItem)})}})}}),n}},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10);t.default=function(e){return function(t){return function(e,t){if("document"===t.object||"block"===t.object){var n=t.nodes.map(function(n,i){if(!r.isList(e)(n))return null;var a=t.nodes.get(i+1);return a&&r.isList(e)(a)&&e.canMerge(n,a)?[n,a]:null}).filter(Boolean);if(!n.isEmpty())return function(e){n.reverse().forEach(function(t){var n=t,r=n[0],i=n[1],a=e.value.document.getDescendant(i.key);a.nodes.forEach(function(t,n){e.withoutNormalizing(function(){e.moveNodeByKey(t.key,r.key,r.nodes.size+n)})}),e.withoutNormalizing(function(){e.removeNodeByKey(i.key)})})}}}(e,t)}}},229:function(e,t,n){"use strict";n.r(t);var r=n(5),i=n.n(r),a=n(78),u=n.n(a),o=(n(95),n(79)),l=n(80),s=n(88),c=n(81),f=n(89),d=(n(97),n(82)),p=n.n(d),v=n(84),y=Object(v.a)({blocks:{heading:"heading",paragraph:"paragraph",ul_list:"ul_list",ol_list:"ol_list",list_item:"list_item"}}),m=y("value",null,y("document",null,y("heading",null,"Slate + List Edition"),y("paragraph",null,"This page is a basic example of Slate + slate-edit-list plugin. Press Enter in a list to create a new list item. Press Enter again to exit and Shift+Enter to create a paragraph in a list. The items at range are detected and highlighted, for demonstration purpose."),y("ul_list",{style:{listStyleType:"disc"}},y("list_item",null,y("paragraph",null,"First item in the list")),y("list_item",null,y("paragraph",null,"List item can contain blocks"),y("heading",null,"Here is a heading"),y("paragraph",null,"And another paragraph")),y("list_item",null,y("paragraph",null,"Third item in the list, with a nested list"),y("ol_list",{style:{listStyleType:"decimal"}},y("list_item",null,y("paragraph",null,"First item in the nested list")),y("list_item",null,y("paragraph",null,"Second item in the nested list"))))),y("paragraph",null,"End paragraph"))),h=n(87),_=p()(),g=[_];function k(e){var t=e.node,n=e.attributes,i=e.children,a=e.editor,u=_.utils.getItemsAtRange(a.value).contains(t);switch(t.type){case"ul_list":return r.createElement("ul",n,i);case"ol_list":return r.createElement("ol",n,i);case"list_item":return r.createElement("li",Object.assign({className:u?"current-item":"",title:u?"Current Item":""},e.attributes),e.children);case"paragraph":return r.createElement("p",n,i);case"heading":return r.createElement("h1",n,i);default:return r.createElement("p",n,i)}}var b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).onChange=function(e){var t=e.value,r=t.toJSON();console.log(r),n.setState({value:t})},n.state={value:m},n.editor=r.createRef(),n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"renderToolbar",value:function(){var e=this,t=_.changes,n=t.wrapInList,i=t.unwrapList,a=t.increaseItemDepth,u=t.decreaseItemDepth,o=_.utils.isSelectionInList(this.state.value);return r.createElement("div",null,r.createElement("button",{className:o?"active":"",onClick:function(){return e.call(o?i:n)}},r.createElement("i",{className:"fa fa-list-ul fa-lg"})),r.createElement("button",{className:o?"":"disabled",onClick:function(){return e.call(u)}},r.createElement("i",{className:"fa fa-outdent fa-lg"})),r.createElement("button",{className:o?"":"disabled",onClick:function(){return e.call(a)}},r.createElement("i",{className:"fa fa-indent fa-lg"})),r.createElement("span",{className:"sep"},"\xb7"),r.createElement("button",{onClick:function(){return e.call(n)}},"Wrap in list"),r.createElement("button",{onClick:function(){return e.call(i)}},"Unwrap from list"))}},{key:"call",value:function(e){this.editor.current&&this.editor.current.command(e)}},{key:"render",value:function(){return r.createElement("div",null,this.renderToolbar(),r.createElement(h.a,{ref:this.editor,placeholder:"Enter some text...",plugins:g,value:this.state.value,onChange:this.onChange,renderNode:k,shouldNodeComponentUpdate:function(e){return"list_item"===e.node.type}}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(225),n(227);u.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},23:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(101));t.wrapInList=i.default;var a=r(n(202));t.unwrapList=a.default;var u=r(n(203));t.splitListItem=u.default;var o=r(n(204));t.increaseItemDepth=o.default;var l=r(n(205));t.decreaseItemDepth=l.default},47:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(48));t.default=function(e){return function(t,n){var r=t.document.getParent(n.key);return r&&i.default(e)(r)?r:null}}},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(t){return e.types.includes(t.type)}}},55:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t}(n(0).Record({types:["ul_list","ol_list"],typeItem:"list_item",typeDefault:"paragraph",canMerge:function(e,t){return e.type===t.type}}));t.default=i},76:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=r(n(48)),u=r(n(21));t.default=function(e){return function(t,n){if(!(n=n||t.selection).start.key)return i.List();var r=t.document,o=r.getClosestBlock(n.start.key),l=r.getClosestBlock(n.end.key);if(o===l){var s=u.default(e)(t,o);return s?i.List([s]):i.List()}var c=r.getCommonAncestor(o.key,l.key);if(a.default(e)(c)){var f=c.getPath(o.key),d=c.getPath(l.key);return c.nodes.slice(f[0],d[0]+1)}return c.type===e.typeItem?i.List([c]):i.List()}}},82:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(55)),u=n(99),o=i(n(208));var l=function(e){return function(t,n,r){var i=t;switch(i.key){case"Enter":return u.onEnter(i,n,e,r);case"Tab":return u.onTab(i,n,e,r);case"Backspace":return u.onBackspace(i,n,e,r);default:return r()}}};t.default=function(e){void 0===e&&(e={});var t=new a.default(e),n=o.default(e);return r({},n,{onKeyDown:l(t)})}},90:function(e,t,n){e.exports=n(229)},95:function(e,t,n){},97:function(e,t,n){},99:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(100));t.onEnter=i.default;var a=r(n(206));t.onTab=a.default;var u=r(n(207));t.onBackspace=u.default}},[[90,2,1]]]);
//# sourceMappingURL=main.ee1a3a4d.chunk.js.map