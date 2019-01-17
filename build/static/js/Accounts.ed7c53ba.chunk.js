webpackJsonp([30],{2268:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var c=t[r](l),u=c.value}catch(e){return void a(e)}if(!c.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){return{accounts:e.app.accounts}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(82),d=n(s),i=a(12),m=n(i),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(179);var p=a(0),E=n(p),b=a(18),h=a(89),v=a(16),g=a(13),y=a(17),N=a(24),_=a(28),w=a(41),k=a(56),x=n(k),O=a(25),A=a(36),C=(n(A),a(14)),F=function(e){function t(){var e=this;l(this,t);var a=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.loadAccounts=function(){var t=r(m.default.mark(function t(){var n,r,l,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),e.next=3,C.Client.getAccounts({sort:"-balance",limit:u,start:(c-1)*u});case 3:n=e.sent,r=n.accounts,l=n.total,a.setState({loading:!1,accounts:r,total:l});case 7:case"end":return e.stop()}},t,e)}));return function(){return t.apply(this,arguments)}}(),a.onChange=function(e,t){a.loadAccounts(e,t)},a.onSearchFieldChangeHandler=function(e){a.setState({searchString:e.target.value})},a.customizedColumn=function(){var e=a.props.intl;return[{title:(0,y.upperFirst)(e.formatMessage({id:"address"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"40%",render:function(t,a,n){return 2==a.accountType?E.default.createElement("span",{className:"d-flex"},E.default.createElement(d.default,{placement:"top",title:e.formatMessage({id:"contracts"})},E.default.createElement("span",null,E.default.createElement("i",{className:"far fa-file mr-1"}))),E.default.createElement(N.AddressLink,{address:t,isContract:2==a.toAddressType})):E.default.createElement(N.AddressLink,{address:t})}},{title:(0,y.upperFirst)(e.formatMessage({id:"supply"})),dataIndex:"balance",key:"supply",align:"left",className:"ant_table",render:function(e,t,a){return E.default.createElement("div",null,E.default.createElement(g.FormattedNumber,{value:parseInt(e)/_.ONE_TRX/_.CIRCULATING_SUPPLY*100,minimumFractionDigits:8,maximumFractionDigits:8})," %")}},{title:(0,y.upperFirst)(e.formatMessage({id:"power"})),dataIndex:"power",key:"power",align:"center",render:function(e,t,a){return E.default.createElement(g.FormattedNumber,{value:parseInt(e)/_.ONE_TRX})}},{title:(0,y.upperFirst)(e.formatMessage({id:"balance"})),dataIndex:"balance",key:"balance",align:"right",className:"ant_table",render:function(e,t,a){return E.default.createElement(w.TRXPrice,{amount:parseInt(e)/_.ONE_TRX})}}]},a.state={loading:!0,searchString:"",accounts:[],total:0},a}return u(t,e),f(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"componentDidUpdate",value:function(){}},{key:"filteredAccounts",value:function(){var e=this.props.accounts,t=this.state.searchString;return t=t.toUpperCase(),t.length>0&&(e=(0,y.filter)(e,function(e){return-1!==e.address.toUpperCase().indexOf(t)})),e}},{key:"renderAccounts",value:function(){var e=this.state.accounts;if(0!==e.length)return E.default.createElement(p.Fragment,null,E.default.createElement("div",{className:"table-responsive"},E.default.createElement("table",{className:"table table-striped m-0"},E.default.createElement("thead",{className:"thead-dark"},E.default.createElement("tr",null,E.default.createElement("th",null,(0,v.tu)("address")),E.default.createElement("th",{className:"d-md-table-cell"},(0,v.tu)("supply")),E.default.createElement("th",{className:"d-md-table-cell"},(0,v.tu)("power")),E.default.createElement("th",null,(0,v.tu)("balance")))),E.default.createElement("tbody",null,e.map(function(e,t){return E.default.createElement("tr",{key:e.address},E.default.createElement("th",null,E.default.createElement(N.AddressLink,{address:e.address})),E.default.createElement("td",{className:"d-md-table-cell text-nowrap"},E.default.createElement(g.FormattedNumber,{value:e.balance/_.ONE_TRX/_.CIRCULATING_SUPPLY*100,minimumFractionDigits:8,maximumFractionDigits:8})," %"),E.default.createElement("td",{className:"text-nowrap d-md-table-cell"},E.default.createElement(g.FormattedNumber,{value:e.power/_.ONE_TRX})),E.default.createElement("td",{className:"text-nowrap"},E.default.createElement(w.TRXPrice,{amount:e.balance/_.ONE_TRX})))})))))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.match,t.intl),n=this.state,r=n.total,l=n.loading,c=n.accounts,u=this.customizedColumn(),o=a.formatMessage({id:"view_total"})+" "+r+" "+a.formatMessage({id:"account_unit"});return E.default.createElement("main",{className:"container header-overlap pb-3 token_black"},E.default.createElement("div",{className:"row"},E.default.createElement("div",{className:"col-md-12"},E.default.createElement("div",{className:"card h-100 text-center widget-icon accout_unit"},E.default.createElement("div",{className:"card-body"},E.default.createElement("h3",{className:"text-primary"},E.default.createElement(g.FormattedNumber,{value:r})),(0,v.tu)("total_accounts"))))),l&&E.default.createElement("div",{className:"loading-style"},E.default.createElement(O.TronLoader,null)),E.default.createElement("div",{className:"row mt-2"},E.default.createElement("div",{className:"col-md-12 table_pos"},r?E.default.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},o):"",E.default.createElement(x.default,{bordered:!0,loading:l,column:u,data:c,total:r,onPageChange:function(t,a){e.loadAccounts(t,a)}}))))}}]),t}(p.Component),T={loadAccounts:h.loadAccounts};t.default=(0,b.connect)(o,T)((0,g.injectIntl)(F))}});