"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[147],{147:function(e,t,i){i.r(t),i.d(t,{default:function(){return _}});var n=i(439),s=i(791),c=i(689),r=i(87),a=i(184),o=function(){var e=(0,c.UO)().movieId,t=(0,s.useState)(""),i=(0,n.Z)(t,2),r=i[0],o=i[1];return(0,s.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"/release_dates?api_key=fd5362f1dc10a3ce9a04b5e02c85fcbb")).then((function(e){return e.json()})).then((function(e){var t=e.results.find((function(e){return"US"===e.iso_3166_1}));t&&o(t.release_dates[0].release_date)})).catch((function(e){console.log("Error:",e)}))}),[e]),(0,a.jsx)("span",{children:r&&r.substring(0,4)})},l="MovieDetails_movieSection__UVG6d",d="MovieDetails_backBtn__aoic9",h="MovieDetails_backBtnText__D3c+g",u="MovieDetails_movieDetails__eqthc",v="MovieDetails_movieImg__B2Jy1",f="MovieDetails_movieInformation__CDpXY",m="MovieDetails_movieAdditional__8LIr2",_=function(){var e,t,i=(0,s.useState)(null),_=(0,n.Z)(i,2),j=_[0],x=_[1],p=(0,c.UO)().movieId,b=(0,c.TH)(),g=(0,s.useRef)(null!==(e=null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,s.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(p,"?api_key=fd5362f1dc10a3ce9a04b5e02c85fcbb")).then((function(e){return e.json()})).then((function(e){x(e)})).catch((function(e){console.log("Error:",e)}))}),[p]),(0,a.jsxs)("div",{className:l,children:[(0,a.jsx)("button",{type:"button",className:d,children:(0,a.jsx)(r.rU,{to:g.current,className:h,children:"Go back"})}),j&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:u,children:[(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(j.poster_path),alt:j.title||j.name,className:v}),(0,a.jsxs)("div",{className:f,children:[(0,a.jsxs)("h2",{children:[j.title||j.name," (",(0,a.jsx)(o,{},p),")"]}),(0,a.jsxs)("p",{children:["User Score: ",(10*parseFloat(j.vote_average)).toFixed(0),"%"]}),(0,a.jsx)("h3",{children:"Overview"}),(0,a.jsx)("p",{children:j.overview}),(0,a.jsx)("h3",{children:"Genres"}),(0,a.jsx)("p",{children:j.genres&&j.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,a.jsxs)("div",{className:m,children:[(0,a.jsx)("h3",{children:"Additional information"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"cast",children:"Cast"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"rewievs",children:"Rewievs"})})]})]}),(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:(0,a.jsx)(c.j3,{})})]})]})}}}]);
//# sourceMappingURL=147.2d773275.chunk.js.map