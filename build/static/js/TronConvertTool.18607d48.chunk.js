webpackJsonp([21],{2256:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(i),d=(n(17),n(16),n(18)),s=(n(24),n(13),n(25)),f=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={loader:!1},n}return a(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("convertTool").onload=function(){e.setState({loader:!0})}}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return u.default.createElement("div",{className:"container header-overlap"},u.default.createElement("div",{className:"card"},u.default.createElement("div",{className:"row",style:{justifyContent:"center"}},u.default.createElement("div",{className:this.state.loader?"loader-hidden col-md-12":"show col-md-12"},u.default.createElement(s.TronLoader,null)),u.default.createElement("div",{className:this.state.loader?"show col-md-12":"hidden col-md-12",style:{width:"100%",height:"100%",minHeight:"750px",paddingTop:"15px",border:0}},u.default.createElement("iframe",{id:"convertTool",style:{width:"100%",height:"100%",minHeight:"750px",paddingTop:"15px",border:0},src:"https://tronscan.org/TronConvertTool/"})))))}}]),t}(i.Component),p={};t.default=(0,d.connect)(l,p)(f)}});