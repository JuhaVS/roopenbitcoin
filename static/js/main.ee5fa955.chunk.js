(this.webpackJsonprising=this.webpackJsonprising||[]).push([[0],{40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),r=a(15),c=a.n(r),s=a(3),o=a(16),l=a.n(o),d=a(0),h=function(e){var t=e.data,a=e.m,n=e.n,i=0,r=0;if(0===t.length)return Object(d.jsx)("p",{children:t.length});if(a-n>7776e3||n<1527109200){for(var c=t.prices[0][1],s=1;s<t.prices.length;s++)t.prices[s][1]<c?(c=t.prices[s][1],r++):(c=t.prices[s][1],r>i?(i=r,r=0):r=0),r>i&&(i=r);return i>0&&(i+=1),Object(d.jsxs)("p",{children:[" ",i]})}for(var o=t.prices[0][1],l=24;l<t.prices.length;l+=24)t.prices[l][1]<o?(o=t.prices[l][1],console.log(t.prices[l][1]),r++):(o=t.prices[l][1],r>i?(i=r,r=0):r=0),r>i&&(i=r);return i>0&&(i+=1),Object(d.jsxs)("p",{children:[" ",i]})},j=function(e){var t=e.data,a=e.n,n=e.m,i=0,r=0,c=0,s=[],o=0;if(0===t.length)return Object(d.jsx)("p",{children:t.length});if(n-a>7776e3||a<1527109200){i=t.total_volumes[0][1];for(var l=1;l<t.total_volumes.length;l++)i<t.total_volumes[l][1]&&(i=t.total_volumes[l][1],c=l);r=t.total_volumes[c][0];var h=new Date(r).toLocaleDateString("fi-FI");return Object(d.jsxs)("p",{children:["Highest trading volume was on ",h," and it was ",t.total_volumes[c][1]," \u20ac"]})}for(var j=0;j<t.total_volumes.length;j+=24){for(var u=0;u<24;u++)o+=t.total_volumes[u][1];s.push(o)}var p=s.indexOf(Math.max.apply(Math,s));p*=24,r=t.total_volumes[p][0];var v=new Date(r).toLocaleDateString("fi-FI");return Object(d.jsxs)("p",{children:[" Highest trading volume was on ",v," and it was ",Math.max.apply(Math,s)," \u20ac"]})},u=function(e){var t=e.data,a=0,n=0,i=0,r=0,c=0,s=0,o=0;if(0===t.length)return Object(d.jsx)("p",{children:t.length});for(var l=0;l<t.prices.length;l++){a=t.prices[l][1];for(var h=l;h<t.prices.length;h++)t.prices[h][1]>a&&(r=t.prices[h][1]-a)>c&&(c=r,i=t.prices[l][0],n=t.prices[h][0],s=t.prices[l][1],o=t.prices[h][1])}var j=new Date(i).toLocaleDateString("fi-FI"),u=new Date(n).toLocaleDateString("fi-FI");return s<o?Object(d.jsxs)("p",{children:[" Scrooge should travel to ",j," and sell all the bitcoin on ",u,"  to maximize the profits. "]}):Object(d.jsx)("p",{children:"Scrooge shouldn't buy and sell, bad timing. "})};a(40);var p=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(""),c=Object(s.a)(r,2),o=c[0],p=c[1],v=Object(n.useState)([]),b=Object(s.a)(v,2),g=b[0],m=b[1],O=Object(n.useState)(""),f=Object(s.a)(O,2),x=f[0],w=f[1],S=Object(n.useState)(""),y=Object(s.a)(S,2),D=y[0],k=y[1];return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{id:"search",children:[Object(d.jsx)("h3",{children:"Dates"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new Date(a).getTime()/1e3-7200,n=new Date(o).getTime()/1e3+7200;if(w(t),k(n),t>n)alert("Yrit\xe4 uudestaan");else{var i="https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from="+t+"&to="+n;l.a.get(i).then((function(e){m(e.data)}))}},children:["From",Object(d.jsx)("input",{id:"date",type:"date",value:a,onChange:function(e){i(e.target.value)}}),"To",Object(d.jsx)("input",{id:"date1",type:"date",value:o,onChange:function(e){p(e.target.value)}}),Object(d.jsx)("button",{type:"submit",children:"Search"})]})]}),Object(d.jsxs)("div",{id:"results",children:[Object(d.jsx)("h3",{children:"How many days is the longest bearish (downward) trend within a given date range?"}),Object(d.jsx)(h,{data:g,m:D,n:x}),Object(d.jsx)("h3",{children:"Which date within a given date range had the highest trading volume?"}),Object(d.jsx)(j,{data:g,m:D,n:x}),Object(d.jsx)("h3",{children:"Time travel"}),Object(d.jsx)(u,{data:g})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Example: In bitcoin\u2019s historical data from CoinGecko, the price decreased 3 days in a row for the inputs from 2020-01-19 and to 2020-01-21, and the price decreased for 5 days in a row for the inputs from 2020-03-01 and to 2021-08-01."}),Object(d.jsx)("p",{children:"Yl\xe4puolella olevan teht\xe4v\xe4nannon mukaan bitcoinin arvo laski aikav\xe4lill\xe4 1.3.2020 - 1.8.2021 5 p\xe4iv\xe4\xe4, mutta CoinGeckon tietojen mukaan se laski 9 p\xe4iv\xe4\xe4."})]})]})};c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.ee5fa955.chunk.js.map