(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[765],{765:function(e,t,r){"use strict";r.r(t);var n=r(861),c=r(439),s=r(757),o=r.n(s),a=r(791),i=r(868),u=r(510),p=r(184);t.default=function(){var e=(0,a.useState)([]),t=(0,c.Z)(e,2),r=t[0],s=t[1];return(0,a.useEffect)((function(){function e(){return(e=(0,n.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.fetchTrendingMovies();case 3:t=e.sent,s(t.results.slice(0,20)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(u.Z,{movies:r})]})}},868:function(e,t,r){"use strict";var n=r(861),c=r(757),s=r.n(c),o=r(7),a=r.n(o),i="https://api.themoviedb.org/3/movie",u="fd5362f1dc10a3ce9a04b5e02c85fcbb";function p(){return(p=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"/").concat(t,"?api_key=").concat(u));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),console.log("Error:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"/").concat(t,"/credits?api_key=").concat(u));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),console.log("Error:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"/").concat(t,"/release_dates?api_key=").concat(u));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),console.log("Error:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"/").concat(t,"/reviews?api_key=").concat(u));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),console.log("Error:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),console.log("Error:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function d(){return(d=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(u));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),console.log("Error:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var y={fetchMovieDetails:function(e){return p.apply(this,arguments)},fetchCastDetails:function(e){return f.apply(this,arguments)},fetchRelease:function(e){return h.apply(this,arguments)},fetchReviews:function(e){return l.apply(this,arguments)},fetchTrendingMovies:function(){return v.apply(this,arguments)},searchMovies:function(e){return d.apply(this,arguments)}};y.fetchMovieDetails.propTypes={movieId:a().string.isRequired},y.fetchCastDetails.propTypes={movieId:a().string.isRequired},y.fetchRelease.propTypes={movieId:a().string.isRequired},y.fetchReviews.propTypes={movieId:a().string.isRequired},y.searchMovies.propTypes={query:a().string.isRequired},t.Z=y},510:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});r(791);var n=r(689),c=r(87),s="MovieList_homeLink__aaD2A",o=r(184),a=function(e){var t=e.movies,r=(0,n.TH)();return(0,o.jsx)("ul",{children:t.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:"/movies/".concat(e.id),state:{from:r},className:s,children:e.title})},e.id)}))})}},888:function(e,t,r){"use strict";var n=r(47);function c(){}function s(){}s.resetWarningCache=c,e.exports=function(){function e(e,t,r,c,s,o){if(o!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:c};return r.PropTypes=r,r}},7:function(e,t,r){e.exports=r(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},861:function(e,t,r){"use strict";function n(e,t,r,n,c,s,o){try{var a=e[s](o),i=a.value}catch(u){return void r(u)}a.done?t(i):Promise.resolve(i).then(n,c)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(c,s){var o=e.apply(t,r);function a(e){n(o,c,s,a,i,"next",e)}function i(e){n(o,c,s,a,i,"throw",e)}a(void 0)}))}}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=765.c2cc9e52.chunk.js.map