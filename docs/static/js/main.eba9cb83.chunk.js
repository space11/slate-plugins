(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(122));t.default=function(e){return function(t,n){var r=t.document.getParent(n.key);return r&&a.default(e)(r)?r:null}}},122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(t){return e.types.includes(t.type)}}},123:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(189));t.getCurrentBlockquote=a.default;var c=r(n(552));t.isSelectionInBlockquote=c.default},124:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(553));t.unwrapBlockquote=a.default;var c=r(n(554));t.wrapInBlockquote=c.default},164:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t}(n(1).Record({types:["ul_list","ol_list"],typeItem:"list_item",typeDefault:"paragraph",canMerge:function(e,t){return e.type===t.type}}));t.default=a},184:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),c=r(n(122)),o=r(n(57));t.default=function(e){return function(t,n){if(!(n=n||t.selection).start.key)return a.List();var r=t.document,i=r.getClosestBlock(n.start.key),u=r.getClosestBlock(n.end.key);if(i===u){var l=o.default(e)(t,i);return l?a.List([l]):a.List()}var s=r.getCommonAncestor(i.key,u.key);if(c.default(e)(s)){var f=s.getPath(i.key),d=s.getPath(u.key);return s.nodes.slice(f[0],d[0]+1)}return s.type===e.typeItem?a.List([s]):a.List()}}},185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bindAndScopeChange=function(e,t,n){return function(r){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];return t(e,r)?n.apply(void 0,[e,r].concat(a)):r}}},187:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t}(n(1).Record({type:"blockquote",typeDefault:"paragraph"}));t.default=a},188:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(123),a=n(124);t.default=function(e,t,n,c){var o=t.value;return r.getCurrentBlockquote(n)(o)&&o.selection.isCollapsed?0!==o.selection.start.offset?c():(e.preventDefault(),a.unwrapBlockquote(n,t),!0):c()}},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(t,n){var r=t.document;if(!n){if(!t.selection.start.key)return null;n=t.startBlock}var a=r.getParent(n.key);return a&&a.type===e.type?a:null}}},190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(123),a=n(124);t.default=function(e,t,n,c){var o=t.value,i=o.startBlock;return r.getCurrentBlockquote(n)(o)?0!==i.text.length?c():(e.preventDefault(),a.unwrapBlockquote(n,t),!0):c()}},196:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=a(n(164)),o=n(425),i=a(n(534));var u=function(e){return function(t,n,r){var a=t;switch(a.key){case"Enter":return o.onEnter(a,n,e,r);case"Tab":return o.onTab(a,n,e,r);case"Backspace":return o.onBackspace(a,n,e,r);default:return r()}}};t.default=function(e){void 0===e&&(e={});var t=new c.default(e),n=i.default(e);return r({},n,{onKeyDown:u(t)})}},202:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=a(n(187)),o=n(551),i=a(n(556));t.default=function(e){void 0===e&&(e={});var t=new c.default(e),n=i.default(e);return r({},n,{onKeyDown:o.onKeyDown(t)})}},29:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(57));t.getCurrentItem=a.default;var c=r(n(524));t.getCurrentList=c.default;var o=r(n(525));t.getItemDepth=o.default;var i=r(n(184));t.getItemsAtRange=i.default;var u=r(n(121));t.getListForItem=u.default;var l=r(n(526));t.getPreviousItem=l.default;var s=r(n(122));t.isList=s.default;var f=r(n(527));t.isSelectionInList=f.default},290:function(e,t,n){e.exports=n(560)},295:function(e,t,n){},425:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(426));t.onEnter=a.default;var c=r(n(532));t.onTab=c.default;var o=r(n(533));t.onBackspace=o.default},426:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(68),a=n(29);t.default=function(e,t,n,c){if(e.shiftKey)return c();var o=t.value,i=a.getCurrentItem(n)(o);return i?(e.preventDefault(),o.selection.isExpanded&&t.delete(),i.nodes.every(function(e){return""===e.text})?a.getItemDepth(n)(o)>1?r.decreaseItemDepth(n,t):r.unwrapList(n,t):r.splitListItem(n,t)):c()}},427:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=n(1),c=n(29);t.default=function(e){return function(t,n,o){var i=function(e){var t=e.selection,n=e.document,r=n.getClosestBlock(t.start.key),c=n.getClosestBlock(t.end.key);if(r===c)return a.List([r]);var o=n.getCommonAncestor(r.key,c.key),i=o.getPath(r.key),u=o.getPath(c.key);return o.nodes.slice(i[0],u[0]+1)}(t.value);return n=n||e.types[0],t.withoutNormalizing(function(){t.wrapBlock({type:n,data:r.Data.create(o)})}),i.forEach(function(n){c.isList(e)(n)?n.nodes.forEach(function(e){var n=e.key;t.withoutNormalizing(function(){t.unwrapNodeByKey(n)})}):t.withoutNormalizing(function(){t.wrapBlockByKey(n.key,e.typeItem)})}),t.normalize()}}},524:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(57)),c=r(n(121));t.default=function(e){return function(t,n){var r=a.default(e)(t,n);return r?c.default(e)(t,r):null}}},525:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(57));t.default=function e(t){return function(n,r){var c=n.document,o=n.startBlock;r=r||o;var i=a.default(t)(n,r);if(!i)return 0;var u=c.getParent(i.key);return 1+e(t)(n,u)}}},526:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(57));t.default=function(e){return function(t,n){var r=t.document,c=t.startBlock;n=n||c;var o=a.default(e)(t,n);if(!o)return null;var i=r.getPreviousSibling(o.key);return i&&i.type===e.typeItem?i:null}}},527:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(184)),c=r(n(121));t.default=function(e){return function(t,n){var r=a.default(e)(t);return!r.isEmpty()&&(!n||c.default(e)(t,r.first()).get("type")===n)}}},528:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(29);t.default=function(e,t){var n=r.getItemsAtRange(e)(t.value);return n.isEmpty()?t:t.withoutNormalizing(function(){n.forEach(function(e){t.unwrapNodeByKey(e.key)});var e=n.first(),r=t.value.document.getParent(e.key);if(r){var a=r.nodes.findIndex(function(t){return t.key===e.key});n.forEach(function(e){e.nodes.forEach(function(e){t.moveNodeByKey(e.key,r.key,a),a+=1})}),n.forEach(function(e){t.removeNodeByKey(e.key)})}})}},529:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(29);t.default=function(e,t){var n=t.value,a=r.getCurrentItem(e)(n);return a?t.splitDescendantsByKey(a.key,n.selection.start.key,n.selection.start.offset):t}},530:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=n(29);t.default=function(e,t){var n=a.getPreviousItem(e)(t.value),c=a.getCurrentItem(e)(t.value);return n&&c?function(e,t,n,c){var o=t.value.document.getDescendant(c),i=o.nodes.size,u=o.nodes.last(),l=a.isList(e)(u)?u:null;if(l)return t.moveNodeByKey(n.key,l.key,l.nodes.size);var s=a.getListForItem(e)(t.value,o);if(!s)throw new Error("Destination is not in a list");var f=r.Block.create({object:"block",type:s.type,data:s.data});return f.validate(t),t.withoutNormalizing(function(){t.insertNodeByKey(c,i,f),t.moveNodeByKey(n.key,f.key,0)})}(e,t,c,n.key):t}},531:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=n(29);t.default=function(e,t){var n=t.value,c=n.document;if(1===a.getItemDepth(e)(n))return t;var o=a.getCurrentItem(e)(n);if(!o)return t;var i=c.getParent(o.key),u=c.getParent(i.key),l=c.getParent(u.key),s=i.nodes.skipUntil(function(e){return e===o}).rest(),f=i.nodes.size===s.size+1;if(s.isEmpty())t.moveNodeByKey(o.key,l.key,l.nodes.indexOf(u)+1);else{var d=r.Block.create({object:"block",type:i.type,data:i.data});t.withoutNormalizing(function(){t.insertNodeByKey(o.key,o.nodes.size,d)}),t.withoutNormalizing(function(){t.moveNodeByKey(o.key,l.key,l.nodes.indexOf(u)+1)}),s.forEach(function(e,n){t.withoutNormalizing(function(){t.moveNodeByKey(e.key,d.key,d.nodes.size+n)})})}return f&&t.removeNodeByKey(i.key),t}},532:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(68),a=n(29);t.default=function(e,t,n,c){var o=t.value;return o.selection.isCollapsed&&a.getCurrentItem(n)(o)?e.shiftKey?(e.preventDefault(),r.decreaseItemDepth(n,t)):(e.preventDefault(),r.increaseItemDepth(n,t)):c()}},533:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(68),a=n(29);t.default=function(e,t,n,c){var o=t.value,i=o.selection,u=o.selection.start.offset;if(i.isExpanded)return c();if(u>0)return c();var l=a.getCurrentItem(n)(o);return l?!i.isCollapsed&&i.anchor.isAtEndOfNode(l)?c():(e.preventDefault(),r.unwrapList(n,t)):c()}},534:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(185),c=r(n(164)),o=n(535),i=n(68),u=n(29);var l=function(e,t){return u.isSelectionInList(e)(t.value)};t.default=function(e){void 0===e&&(e={});var t=new c.default(e);return{schema:o.schema(t),normalizeNode:o.normalizeNode(t),utils:{getCurrentItem:u.getCurrentItem(t),getCurrentList:u.getCurrentList(t),getItemDepth:u.getItemDepth(t),getItemsAtRange:u.getItemsAtRange(t),getPreviousItem:u.getPreviousItem(t),isList:u.isList(t),isSelectionInList:u.isSelectionInList(t)},changes:{decreaseItemDepth:a.bindAndScopeChange(t,l,i.decreaseItemDepth),increaseItemDepth:a.bindAndScopeChange(t,l,i.increaseItemDepth),splitListItem:a.bindAndScopeChange(t,l,i.splitListItem),unwrapList:a.bindAndScopeChange(t,l,i.unwrapList),wrapInList:i.wrapInList(t)}}}},535:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(536));t.schema=a.default;var c=r(n(537));t.normalizeNode=c.default},536:function(e,t,n){"use strict";function r(e){return function(t,n){var r=e[n.code];r&&r(t,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n={blocks:(t={},t[e.typeItem]={parent:e.types.map(function(e){return{type:e}}),nodes:[{match:{object:"block"}}],normalize:r({parent_type_invalid:function(e,t){e.withoutNormalizing(function(){e.unwrapNodeByKey(t.node.key)})},child_object_invalid:function(t,n){!function(e,t,n){t.withoutNormalizing(function(){t.wrapBlockByKey(n.nodes.first().key,e.typeDefault)});var r=t.value.document.getDescendant(n.key).nodes.first();n.nodes.rest().forEach(function(e,n){t.withoutNormalizing(function(){t.moveNodeByKey(e.key,r.key,n+1)})})}(e,t,n.node)}})},t)};return e.types.forEach(function(t){n.blocks[t]={nodes:[{match:{type:e.typeItem}}],normalize:r({child_type_invalid:function(t,n){t.withoutNormalizing(function(){t.wrapBlockByKey(n.child.key,e.typeItem)})}})}}),n}},537:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(29);t.default=function(e){return function(t){return function(e,t){if("document"===t.object||"block"===t.object){var n=t.nodes.map(function(n,a){if(!r.isList(e)(n))return null;var c=t.nodes.get(a+1);return c&&r.isList(e)(c)&&e.canMerge(n,c)?[n,c]:null}).filter(Boolean);if(!n.isEmpty())return function(e){n.reverse().forEach(function(t){var n=t,r=n[0],a=n[1],c=e.value.document.getDescendant(a.key);c.nodes.forEach(function(t,n){e.withoutNormalizing(function(){e.moveNodeByKey(t.key,r.key,r.nodes.size+n)})}),e.withoutNormalizing(function(){e.removeNodeByKey(a.key)})})}}}(e,t)}}},551:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(188));t.onBackspace=a.default;var c=r(n(190));t.onEnter=c.default;var o=r(n(555));t.onKeyDown=o.default},552:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(189));t.default=function(e){return function(t){return Boolean(a.default(e)(t))}}},553:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return t.unwrapBlock(e.type)}},554:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(t){return t.wrapBlock(e.type)}}},555:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(190)),c=r(n(188));t.default=function(e){return function(t,n,r){var o=t;switch(o.key){case"Enter":return a.default(o,n,e,r);case"Backspace":return c.default(o,n,e,r);default:return r()}}}},556:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(185),c=r(n(187)),o=n(123),i=n(124),u=n(557);var l=function(e,t){return o.isSelectionInBlockquote(e)(t.value)};t.default=function(e){var t=new c.default(e);return{schema:u.schema(t),utils:{isSelectionInBlockquote:o.isSelectionInBlockquote(t)},changes:{wrapInBlockquote:i.wrapInBlockquote(t),unwrapBlockquote:a.bindAndScopeChange(t,l,i.unwrapBlockquote)}}}},557:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(558));t.schema=a.default},558:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.default=function(e){var t;return{blocks:(t={},t[e.type]={nodes:[{match:{type:e.typeDefault}}],normalize:function(t,n){switch(n.code){case"child_type_invalid":return function(e,t,n){var a=n.node.nodes.filter(function(e){return"block"!==e.object});if(!a.isEmpty()){var c=r.Block.create({type:e.typeDefault});return t.withoutNormalizing(function(){t.insertNodeByKey(n.node.key,0,c),a.forEach(function(e,n){t.moveNodeByKey(e.key,c.key,n)})})}}(e,t,n)}}},t)}}},560:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(31),o=n.n(c),i=(n(295),n(562)),u=n(415),l=n(561),s=n(563),f=n(11),d=n.n(f),p=n(76),m=n.n(p),h=n(77),v=n.n(h),y=n(22),g=n.n(y),_=n(78),b=n.n(_),k=n(79),E=n.n(k),w=n(18),O=n(26),j=Object(O.withTheme)()(Object(O.withStyles)({svg:{height:"34px",maxHeight:"34px",marginRight:"1rem"}})(function(e){var t={fill:e.theme.palette.background.paper},n={fill:e.theme.typography.body1.color},a=e.classes;return r.createElement("svg",{className:a.svg,version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 268 50.6",xmlSpace:"preserve"},r.createElement("g",null,r.createElement("path",{style:t,d:"M29.4,45.8c-0.5,0.2-1.5,0.4-3,0.7c-1.5,0.2-3.3,0.4-5.5,0.4c-2.7,0-5.1-0.4-7.1-1.3s-3.8-2.2-5.2-3.9\r S6.2,38,5.5,35.6c-0.7-2.4-1-5-1-8c0-3.2,0.4-5.9,1.2-8.3s2-4.4,3.4-6c1.5-1.6,3.2-2.8,5.1-3.6c2-0.8,4.1-1.2,6.3-1.2\r c2.4,0,4.6,0.3,6.7,0.8c2,0.5,3.7,1.2,4.9,2.1l1.5-3.7c-1-0.6-2.5-1.3-4.7-2c-2.1-0.7-4.8-1.1-8.1-1.1c-2.9,0-5.5,0.5-8.1,1.5\r C10.2,7,8,8.5,6.1,10.4s-3.4,4.4-4.5,7.2c-1,2.8-1.6,6.1-1.6,9.9s0.5,7,1.5,9.9s2.4,5.3,4.3,7.2c1.8,1.9,4,3.4,6.4,4.4\r c2.5,1,5.2,1.5,8.1,1.5c3.5,0,6.4-0.3,8.7-0.8c2.4-0.5,4-1,4.8-1.3V28.8h-4.4V45.8z"}),r.createElement("path",{style:t,d:"M64.9,45.6c-0.4,0.2-1.3,0.4-2.8,0.6c-1.5,0.2-3.2,0.3-5.1,0.3c-1.8,0-3.2-0.2-4.4-0.7c-1.2-0.4-2.2-1.2-3-2.2\r s-1.3-2.3-1.7-3.9c-0.3-1.6-0.5-3.6-0.5-6V16.6h-4.2v18.6c0,2.3,0.2,4.3,0.7,6.2c0.4,1.9,1.2,3.5,2.2,4.8s2.4,2.3,4,3.1\r c1.7,0.7,3.7,1.1,6.2,1.1c3,0,5.6-0.2,7.7-0.6c2.1-0.4,3.8-0.8,5-1.2v-32h-4.2L64.9,45.6L64.9,45.6z"}),r.createElement("path",{style:t,d:"M99.8,46c-1.3,0.4-3.1,0.6-5.4,0.6c-4.1,0-7.1-1.1-9-3.3c-1.1-1.2-1.9-2.8-2.4-4.7h-4.5\r c0.1,0.5,0.2,0.9,0.3,1.4c0.6,2.1,1.6,3.9,2.9,5.5c1.3,1.5,3,2.7,5.1,3.6s4.5,1.3,7.4,1.3c2.2,0,4.1-0.2,5.8-0.7\r c1.6-0.5,2.8-0.9,3.4-1.2l-0.8-3.6C102.1,45.3,101.2,45.5,99.8,46z"}),r.createElement("path",{style:t,d:"M102.2,19.8c-0.7-0.8-1.5-1.5-2.4-2c0.2-0.7,0.3-1.4,0.3-2.2c0-4.5-3.6-8.1-8.1-8.1s-8.1,3.6-8.1,8.1\r c0,1,0.2,2,0.5,2.9c-0.6,0.5-1.2,1-1.8,1.6c-1.3,1.5-2.4,3.3-3.3,5.4c-0.8,2.2-1.2,4.7-1.2,7.6c0,0.3,0,0.6,0,0.9h4.4h3.3h20\r c0-0.3,0.1-0.6,0.1-1c0-0.3,0-0.7,0-1C105.9,26.5,104.6,22.4,102.2,19.8z M92,10.7c2.7,0,4.8,2.2,4.8,4.8s-2.2,4.8-4.8,4.8\r s-4.8-2.2-4.8-4.8S89.3,10.7,92,10.7z M82.6,30.5c0.1-1.4,0.4-2.8,0.9-4.2c0.5-1.3,1.2-2.5,2-3.5c0.3-0.4,0.7-0.8,1.1-1.1\r c1.4,1.2,3.3,2,5.3,2c2.3,0,4.4-1,5.9-2.6c0.5,0.4,0.9,0.8,1.2,1.2c1.5,1.9,2.3,4.6,2.4,8.1H82.6V30.5z"}),r.createElement("path",{style:t,d:"M131.5,34.8c-0.9-0.7-1.9-1.4-3.1-1.9c-1.2-0.5-2.4-1.1-3.7-1.6c-1.2-0.5-2.3-1-3.3-1.4s-1.8-0.9-2.4-1.4\r c-0.7-0.5-1.2-1.1-1.5-1.7s-0.5-1.4-0.5-2.3s0.2-1.7,0.6-2.3c0.4-0.6,0.9-1.1,1.5-1.5s1.4-0.7,2.2-0.9s1.7-0.3,2.7-0.3\r c2.3,0,4.1,0.2,5.3,0.6s2.1,0.8,2.6,1l1-3.7c-0.6-0.3-1.6-0.6-3.1-1s-3.3-0.6-5.6-0.6c-3.5,0-6.3,0.8-8.4,2.5c-2,1.7-3,3.8-3,6.5\r c0,1.4,0.3,2.6,0.8,3.6s1.2,1.8,2,2.5c0.9,0.7,1.8,1.3,2.9,1.9c1.1,0.5,2.3,1.1,3.5,1.6c1.5,0.6,2.8,1.2,3.9,1.7\r c1,0.5,1.9,1,2.5,1.5c0.6,0.5,1.1,1.1,1.4,1.7c0.3,0.6,0.4,1.4,0.4,2.3c0,1.9-0.8,3.2-2.3,4c-1.6,0.8-3.5,1.2-5.9,1.2\r c-1.3,0-2.5-0.1-3.5-0.3s-1.9-0.4-2.6-0.6c-0.7-0.2-1.3-0.4-1.7-0.6c-0.4-0.2-0.7-0.3-0.8-0.4l-1.1,3.8c0.5,0.3,1.5,0.6,3.1,1.1\r c1.5,0.5,3.8,0.7,6.7,0.7c3.9,0,6.9-0.8,9.2-2.3c2.2-1.5,3.4-3.8,3.4-6.8c0-1.6-0.3-2.9-0.8-3.9C133.1,36.5,132.4,35.5,131.5,34.8z\r "}),r.createElement("path",{style:t,d:"M157.5,46c-1.1,0.4-2.5,0.6-4.2,0.6c-1,0-2-0.1-2.8-0.3c-0.9-0.2-1.6-0.6-2.2-1.3c-0.6-0.6-1.1-1.5-1.4-2.7\r c-0.3-1.2-0.5-2.7-0.5-4.6V20.1h13.2v-3.5h-13.2V6.1l-4.2,0.8v30.5c0,2.2,0.2,4.1,0.5,5.8c0.3,1.6,0.9,3,1.8,4.1\r c0.8,1.1,1.9,1.9,3.3,2.4c1.4,0.5,3.1,0.8,5.2,0.8c1.7,0,3.4-0.2,4.9-0.7s2.5-0.9,3.1-1.3l-1-3.5C159.4,45.3,158.6,45.6,157.5,46z"}),r.createElement("path",{style:n,d:"M196,29.4c-0.8-0.9-1.8-1.6-2.8-2.1c-1.1-0.6-2.2-1-3.5-1.3c2-0.6,3.7-1.8,4.9-3.5s1.8-3.7,1.8-6.1\r c0-2.2-0.5-4-1.4-5.5c-1-1.5-2.3-2.7-3.9-3.5c-1.6-0.9-3.5-1.5-5.7-1.9s-4.4-0.6-6.8-0.6c-0.8,0-1.7,0-2.7,0.1\r c-1,0-1.9,0.1-2.9,0.2s-2,0.2-2.9,0.4c-0.9,0.1-1.8,0.3-2.6,0.5v42.7c0.6,0.2,1.4,0.3,2.3,0.5c0.9,0.1,1.8,0.3,2.8,0.4\r c1,0.1,2,0.2,2.9,0.3s1.8,0.1,2.5,0.1c7,0,12.1-1.1,15.4-3.3s5-5.4,5-9.6c0-1.8-0.2-3.3-0.7-4.5C197.5,31.4,196.8,30.3,196,29.4z\r M171.9,9.1c0.7-0.1,1.6-0.2,2.7-0.3c1.1-0.1,2.4-0.1,4-0.1c2,0,3.8,0.1,5.4,0.4c1.6,0.3,3,0.7,4.2,1.4c1.2,0.6,2.1,1.5,2.7,2.5\r c0.6,1,1,2.2,1,3.7c0,1.6-0.3,2.9-0.9,4c-0.6,1-1.4,1.9-2.5,2.5c-1,0.6-2.3,1-3.7,1.3s-2.9,0.4-4.5,0.4h-8.4V9.1z M192.7,41.8\r c-0.9,1.2-2,2.1-3.4,2.8s-3,1.2-4.9,1.4c-1.9,0.3-3.8,0.4-5.7,0.4c-1.3,0-2.6-0.1-3.9-0.2c-1.3-0.1-2.2-0.2-2.9-0.3V28.4h9.2\r c2,0,3.7,0.1,5.3,0.4s3,0.7,4.1,1.4c1.1,0.7,2,1.6,2.6,2.7s0.9,2.6,0.9,4.3C194,39,193.6,40.5,192.7,41.8z"}),r.createElement("path",{style:n,d:"M227.4,46c-1.3,0.4-3.1,0.6-5.4,0.6c-4.1,0-7.1-1.1-9-3.3c-1.1-1.2-1.9-2.8-2.4-4.7h-4.5\r c0.1,0.5,0.2,0.9,0.3,1.4c0.6,2.1,1.6,3.9,2.9,5.5c1.3,1.5,3,2.7,5.1,3.6s4.5,1.3,7.4,1.3c2.2,0,4.1-0.2,5.8-0.7\r c1.6-0.5,2.8-0.9,3.4-1.2l-0.8-3.6C229.7,45.3,228.7,45.5,227.4,46z"}),r.createElement("path",{style:n,d:"M247.9,45.5c-0.4-0.4-0.7-0.9-0.9-1.5s-0.3-1.4-0.3-2.5V0l-4.2,0.8v41c0,1.6,0.2,2.9,0.5,3.9\r c0.4,1,0.9,1.9,1.6,2.6c0.7,0.7,1.6,1.2,2.6,1.5s2.3,0.5,3.7,0.5l0.6-3.5c-0.9-0.1-1.6-0.3-2.2-0.4C248.8,46.3,248.3,46,247.9,45.5\r z"}),r.createElement("path",{style:n,d:"M265.8,46.3c-0.6-0.2-1.1-0.4-1.5-0.8c-0.4-0.4-0.7-0.9-0.9-1.5c-0.2-0.6-0.3-1.4-0.3-2.5V0l-4.2,0.8v41\r c0,1.6,0.2,2.9,0.5,3.9c0.4,1,0.9,1.9,1.6,2.6c0.7,0.7,1.6,1.2,2.6,1.5s2.3,0.5,3.7,0.5l0.6-3.5C267.1,46.8,266.4,46.5,265.8,46.3z\r "}),r.createElement("path",{style:n,d:"M229.8,19.8c-2-2.2-4.7-3.5-7.8-3.8v-5h3.6V7.4h-10.8V11h3.6v5c-1.3,0.1-2.5,0.4-3.7,0.9\r c-1.7,0.7-3.3,1.8-4.6,3.2c-1.3,1.5-2.4,3.3-3.3,5.4c-0.8,2.2-1.2,4.7-1.2,7.6c0,0.3,0,0.6,0,0.9h27h0.6c0-0.3,0.1-0.6,0.1-1\r c0-0.3,0-0.7,0-1C233.4,26.5,232.2,22.4,229.8,19.8z M210.2,30.5c0.1-1.4,0.4-2.8,0.9-4.2c0.5-1.3,1.2-2.5,2-3.5\r c0.9-1,1.9-1.8,3.1-2.4c1.2-0.6,2.5-0.9,4-0.9c2.8,0,5,1,6.5,2.9s2.3,4.6,2.4,8.1H210.2z"})))})),M=n(193),B=n.n(M),N=n(82),I=n.n(N),P=n(194),C=n.n(P),D=n(565),x=n(564),z=function(e){return r.createElement("a",Object.assign({target:"blank",href:"https://github.com/guestbell/slate-plugins"},e))},S=Object(O.withStyles)(function(e){return{whiteText:{color:"white"},root:{flexGrow:1},appBar:{zIndex:e.zIndex.drawer+1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar}})(Object(x.a)(function(e){var t=e.classes;return r.createElement(r.Fragment,null,r.createElement(m.a,{position:"fixed",className:t.appBar},r.createElement(v.a,null,r.createElement("a",{target:"blank",href:"https://guestbell.com"},r.createElement(j,null)),r.createElement(g.a,{variant:"h6",className:d()(t.grow,t.whiteText)},"Slate plugins"),r.createElement(b.a,{component:z},r.createElement(E.a,{className:d()("fa fa-github",t.whiteText)})))),r.createElement(w.c,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper}},r.createElement("div",{className:t.toolbar}),r.createElement(w.d,null,r.createElement(w.e,{button:!0,color:"inherit",component:function(e){return r.createElement(D.a,{to:"/",className:e.className,exact:!0},e.children)}},r.createElement(w.f,null,r.createElement(B.a,null)),r.createElement(w.g,{primary:"Home"})),r.createElement(w.b,null),r.createElement(w.e,{button:!0,color:"inherit",component:function(e){return r.createElement(D.a,{to:"/slate-edit-list",className:e.className},e.children)}},r.createElement(w.f,null,r.createElement(I.a,null)),r.createElement(w.g,{primary:"Edit list"})),r.createElement(w.e,{button:!0,color:"inherit",component:function(e){return r.createElement(D.a,{to:"/slate-edit-blockquote",className:e.className},e.children)}},r.createElement(w.f,null,r.createElement(C.a,null)),r.createElement(w.g,{primary:"Edit blockquote"})))))})),L=Object(O.withStyles)(function(e){return{root:{display:"flex",flexDirection:"column"},content:{flexGrow:1,padding:3*e.spacing.unit,marginLeft:240},toolbar:e.mixins.toolbar}})(function(e){var t=e.classes;return r.createElement("div",{className:d()("main-layout",e.className,t.root)},r.createElement(S,null),r.createElement("main",{className:d()(t.content)},r.createElement("div",{className:t.toolbar}),e.children))}),q=n(130),K=function(e){return r.createElement("h2",null,"Not found what you were looking for")},T=n(45),A=n(46),R=n(48),V=n(47),F=n(49),H=n(196),J=n.n(H),U=n(83),G=Object(U.a)({blocks:{heading:"heading",paragraph:"paragraph",ul_list:"ul_list",ol_list:"ol_list",list_item:"list_item"}}),W=G("value",null,G("document",null,G("heading",null,"Slate + List Edition"),G("paragraph",null,"This page is a basic example of Slate + slate-edit-list plugin. Press Enter in a list to create a new list item. Press Enter again to exit and Shift+Enter to create a paragraph in a list. The items at range are detected and highlighted, for demonstration purpose."),G("ul_list",{style:{listStyleType:"disc"}},G("list_item",null,G("paragraph",null,"First item in the list")),G("list_item",null,G("paragraph",null,"List item can contain blocks"),G("heading",null,"Here is a heading"),G("paragraph",null,"And another paragraph")),G("list_item",null,G("paragraph",null,"Third item in the list, with a nested list"),G("ol_list",{style:{listStyleType:"decimal"}},G("list_item",null,G("paragraph",null,"First item in the nested list")),G("list_item",null,G("paragraph",null,"Second item in the nested list"))))),G("paragraph",null,"End paragraph"))),Q=n(85),X=function(e){return r.createElement(w.a,Object.assign({style:{marginRight:"1rem"},variant:"outlined"},e))},$=n(201),Y=n.n($),Z=n(200),ee=n.n(Z),te=J()(),ne=[te];function re(e){var t=e.node,n=e.attributes,a=e.children,c=e.editor,o=te.utils.getItemsAtRange(c.value).contains(t);switch(t.type){case"ul_list":return r.createElement("ul",n,a);case"ol_list":return r.createElement("ol",n,a);case"list_item":return r.createElement("li",Object.assign({className:o?"current-item":"",title:o?"Current Item":""},e.attributes),e.children);case"paragraph":return r.createElement("p",n,a);case"heading":return r.createElement("h1",n,a);default:return r.createElement("p",n,a)}}var ae=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(R.a)(this,Object(V.a)(t).call(this,e))).onChange=function(e){var t=e.value,r=t.toJSON();console.log(r),n.setState({value:t})},n.state={value:W},n.editor=r.createRef(),n}return Object(F.a)(t,e),Object(A.a)(t,[{key:"renderToolbar",value:function(){var e=this,t=te.changes,n=t.wrapInList,a=t.unwrapList,c=t.increaseItemDepth,o=t.decreaseItemDepth,i=te.utils.isSelectionInList(this.state.value);return r.createElement("div",null,r.createElement(X,{color:i?"secondary":"primary",onClick:function(){return e.call(i?a:n)}},r.createElement(I.a,null)),r.createElement(X,{disabled:!i,onClick:function(){return e.call(o)}},r.createElement(ee.a,null)),r.createElement(X,{disabled:!i,onClick:function(){return e.call(c)}},r.createElement(Y.a,null)),r.createElement(X,{onClick:function(){return e.call(n)}},"Wrap in list"),r.createElement(X,{onClick:function(){return e.call(a)}},"Unwrap from list"))}},{key:"call",value:function(e){this.editor.current&&this.editor.current.command(e)}},{key:"render",value:function(){return r.createElement("div",null,this.renderToolbar(),r.createElement(Q.a,{className:"slate-editor",ref:this.editor,placeholder:"Enter some text...",plugins:ne,value:this.state.value,onChange:this.onChange,renderNode:re,shouldNodeComponentUpdate:function(e){return"list_item"===e.node.type}}))}}]),t}(r.Component),ce=n(202),oe=n.n(ce),ie=Object(U.a)({blocks:{heading:"heading",paragraph:"paragraph",blockquote:"blockquote"}}),ue=ie("value",null,ie("document",null,ie("heading",null,"Slate + Quote Editing"),ie("paragraph",null,"This page is a basic example of Slate + slate-edit-blockquote plugin."),ie("blockquote",null,ie("paragraph",null,"Some text in the blockquote")),ie("paragraph",null,"End paragraph"))),le=oe()(),se=[le];function fe(e){var t=e.node,n=e.children,a=e.attributes;switch(t.type){case"blockquote":return r.createElement("blockquote",a,n);case"paragraph":return r.createElement("p",a,n);case"heading":return r.createElement("h1",a,n);default:return null}}var de=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(R.a)(this,Object(V.a)(t).call(this,e))).onChange=function(e){var t=e.value,r=t.toJSON();console.log(r),n.setState({value:t})},n.state={value:ue},n.editor=r.createRef(),n}return Object(F.a)(t,e),Object(A.a)(t,[{key:"renderToolbar",value:function(){var e=this,t=le.changes,n=t.wrapInBlockquote,a=t.unwrapBlockquote,c=le.utils.isSelectionInBlockquote(this.state.value);return r.createElement("div",null,r.createElement(X,{onClick:function(){return e.call(n)}},"Blockquote"),r.createElement(X,{disabled:!c,onClick:function(){return e.call(a)}},"Unwrap"))}},{key:"call",value:function(e){this.editor.current&&this.editor.current.command(e)}},{key:"render",value:function(){return r.createElement("div",null,this.renderToolbar(),r.createElement(Q.a,{className:"slate-editor",ref:this.editor,placeholder:"Enter some text...",plugins:se,value:this.state.value,onChange:this.onChange,renderNode:fe}))}}]),t}(r.Component),pe=n(206),me=n(203),he={overrides:{h1:{component:function(e){return r.createElement(g.a,Object.assign({gutterBottom:!0,variant:"h4"},e))}},h2:{component:function(e){return r.createElement(g.a,Object.assign({gutterBottom:!0,variant:"h6"},e))}},h3:{component:function(e){return r.createElement(g.a,Object.assign({gutterBottom:!0,variant:"subtitle1"},e))}},h4:{component:function(e){return r.createElement(g.a,Object.assign({gutterBottom:!0,variant:"caption",paragraph:!0},e))}},p:{component:function(e){return r.createElement(g.a,Object.assign({paragraph:!0},e))}},li:{component:Object(O.withStyles)(function(e){return{listItem:{marginTop:e.spacing.unit}}})(function(e){var t=e.classes,n=Object(pe.a)(e,["classes"]);return r.createElement("li",{className:t.listItem},r.createElement(g.a,Object.assign({component:"span"},n)))})}}},ve=function(e){return r.createElement("div",{className:"slate-editor"},r.createElement(me.a,Object.assign({options:he},e)))},ye=n(205),ge=n.n(ye),_e=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(R.a)(this,Object(V.a)(t).call(this,e))).state={},n}return Object(F.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(ge.a.join("/slate-plugins","docs",this.props.packageName,"Readme.md")).then(function(e){return e.text()}).then(function(t){e.setState({docsMarkdown:t})}).catch(function(t){e.setState({docsMarkdown:"##Unable to load docs\n```".concat(JSON.stringify(t))})})}},{key:"render",value:function(){var e=this.props.classes;return r.createElement("div",null,this.props.children&&r.createElement(g.a,{variant:"h2",gutterBottom:!0},"Demo"),this.props.children,this.state.docsMarkdown&&r.createElement("div",{className:e.docsContainer},this.props.children&&r.createElement(g.a,{variant:"h2",gutterBottom:!0},"Docs"),r.createElement(ve,{className:e.documentationMarkdown},this.state.docsMarkdown)))}}]),t}(r.Component),be=Object(O.withStyles)(function(e){return{documentationMarkdown:{padding:"".concat(3*e.spacing.unit,"px"),backgroundColor:"white"},docsContainer:{marginTop:"".concat(3*e.spacing.unit,"px")}}})(_e),ke=q.b.div({enter:{y:0,opacity:1,delay:100,beforeChildren:!0},exit:{y:-20,opacity:0,transition:{duration:200}}}),Ee=function(e,t){return function(n){return r.createElement(be,{packageName:e},r.createElement(t,n))}},we=[{exact:!0,path:"/",component:function(){return r.createElement(be,{packageName:""})},className:"home"},{path:"/slate-edit-list",component:Ee("slate-edit-list",ae),className:"slate-edit-list"},{path:"/slate-edit-blockquote",component:Ee("slate-edit-blockquote",de),className:"slate-edit-blockquote"},{component:K}],Oe=r.createElement(u.a,{render:function(e){var t=e.location,n=we.find(function(e){var n=Object(l.a)(t.pathname,{path:e.path,exact:e.exact,strict:e.strict});return Boolean(n)}),a=n&&n.className;return r.createElement(L,{className:a},r.createElement(q.a,null,r.createElement(ke,{key:t.pathname,className:"d-flex flex-column"},r.createElement(s.a,{location:t},we.map(function(e,t){return r.createElement(u.a,Object.assign({},e,{key:t}))})))))}}),je=n(80),Me=n.n(je),Be=Object(O.createMuiTheme)({palette:{primary:{main:"#10bdc7"},secondary:{main:"#555555"}},typography:{useNextVariants:!0}}),Ne=function(e){return r.createElement(O.MuiThemeProvider,{theme:Be},r.createElement(Me.a,null),r.createElement(i.a,{basename:"/slate-plugins"},Oe))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(t,n){var r=t.document;if(!n){if(!t.selection.start.key)return null;n=t.startBlock}var a=r.getParent(n.key);return a&&a.type===e.typeItem?a:null}}},68:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(427));t.wrapInList=a.default;var c=r(n(528));t.unwrapList=c.default;var o=r(n(529));t.splitListItem=o.default;var i=r(n(530));t.increaseItemDepth=i.default;var u=r(n(531));t.decreaseItemDepth=u.default}},[[290,2,1]]]);
//# sourceMappingURL=main.eba9cb83.chunk.js.map