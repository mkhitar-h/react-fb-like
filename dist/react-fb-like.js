module.exports=function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),p=r(1),c=o(p),u=function(e){function t(){return n(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.language,r=e.appId;document&&"undefined"!=typeof document&&!function(e,o,n){var a=e.getElementsByTagName(o)[e.getElementsByTagName(o).length-1];if(!e.getElementById(n)){var s=e.createElement(o);s.id=n,s.src="//connect.facebook.net/"+t+"/sdk.js#xfbml=1&version=v2.7&appId="+r,a.parentNode.insertBefore(s,a)}}(document,"script","facebook-jssdk")}},{key:"render",value:function(){var e=this.props,t=e.href,r=e.layout,o=e.action,n=e.size,a=e.share,s=e.showFaces,i=e.reference,p=e.width,u=e.colorscheme,l=e.kidDirectedSite;return c["default"].createElement("div",{className:"fb-like","data-href":t,"data-layout":r,"data-action":o,"data-size":n,"data-show-faces":s,"data-share":a,"data-width":p,"data-ref":i,"data-colorscheme":u,"data-kid-directed-site":l})}}]),t}(p.Component);u.propTypes={appId:p.PropTypes.string.isRequired,language:p.PropTypes.string.isRequired,href:p.PropTypes.string,layout:p.PropTypes.oneOf(["standard","box_count","button_count","button"]),action:p.PropTypes.string,size:p.PropTypes.string,share:p.PropTypes.bool,showFaces:p.PropTypes.bool,width:p.PropTypes.oneOfType([p.PropTypes.string,p.PropTypes.number]),reference:p.PropTypes.string,colorscheme:p.PropTypes.string,kidDirectedSite:p.PropTypes.bool},u.defaultProps={language:"en_US",layout:"standard",action:"like",size:"small",share:!0,showFaces:!0,colorscheme:"light",kidDirectedSite:!1},t["default"]=u},function(e,t){e.exports=require("react")}]);
//# sourceMappingURL=react-fb-like.js.map