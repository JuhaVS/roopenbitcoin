(this.webpackJsonprising=this.webpackJsonprising||[]).push([[0],{40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a.n(i),r=a(15),s=a.n(r),c=a(3),o=a(16),l=a.n(o),h=a(0),d=function(e){var t=e.data,a=e.m,i=e.n,n=0,r=0;if(0===t.length)return Object(h.jsx)("p",{children:t.length});if(a-i>7776e3||i<1527109200){for(var s=t.prices[0][1],c=1;c<t.prices.length;c++)t.prices[c][1]<s?(s=t.prices[c][1],r++):(s=t.prices[c][1],r>n?(n=r,r=0):r=0),r>n&&(n=r);return n>0&&(n+=1),Object(h.jsxs)("p",{children:[" ",n]})}for(var o=t.prices[0][1],l=24;l<t.prices.length;l+=24)t.prices[l][1]<o?(o=t.prices[l][1],console.log(t.prices[l][1]),r++):(o=t.prices[l][1],r>n?(n=r,r=0):r=0),r>n&&(n=r);return n>0&&(n+=1),Object(h.jsxs)("p",{children:[" ",n]})},j=function(e){var t=e.data,a=e.n,i=e.m,n=0,r=0,s=0,c=[],o=0;if(0===t.length)return Object(h.jsx)("p",{children:t.length});if(i-a>7776e3||a<1527109200){n=t.total_volumes[0][1];for(var l=1;l<t.total_volumes.length;l++)n<t.total_volumes[l][1]&&(n=t.total_volumes[l][1],s=l);r=t.total_volumes[s][0];var d=new Date(r).toLocaleDateString("fi-FI");return Object(h.jsxs)("p",{children:["Highest trading volume was on ",d," and it was ",t.total_volumes[s][1]," \u20ac"]})}for(var j=0;j<t.total_volumes.length;j+=24){for(var u=0;u<24;u++)o+=t.total_volumes[u][1];c.push(o)}var p=c.indexOf(Math.max.apply(Math,c));p*=24,r=t.total_volumes[p][0];var v=new Date(r).toLocaleDateString("fi-FI");return Object(h.jsxs)("p",{children:[" Highest trading volume was on ",v," and it was ",Math.max.apply(Math,c)," \u20ac"]})},u=function(e){var t=e.data,a=0,i=0,n=0,r=0,s=0,c=0,o=0;if(0===t.length)return Object(h.jsx)("p",{children:t.length});for(var l=0;l<t.prices.length;l++){a=t.prices[l][1];for(var d=l;d<t.prices.length;d++)t.prices[d][1]>a&&(r=t.prices[d][1]-a)>s&&(s=r,n=t.prices[l][0],i=t.prices[d][0],c=t.prices[l][1],o=t.prices[d][1])}var j=new Date(n).toLocaleDateString("fi-FI"),u=new Date(i).toLocaleDateString("fi-FI");return c<o?Object(h.jsxs)("p",{children:[" Scrooge should travel to ",j," and sell all the bitcoin on ",u,"  to maximize the profits. "]}):Object(h.jsx)("p",{children:"Scrooge shouldn't buy and sell, bad timing. "})};a(40);var p=function(){var e=Object(i.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],r=Object(i.useState)(""),s=Object(c.a)(r,2),o=s[0],p=s[1],v=Object(i.useState)([]),b=Object(c.a)(v,2),m=b[0],g=b[1],O=Object(i.useState)(""),f=Object(c.a)(O,2),x=f[0],w=f[1],k=Object(i.useState)(""),S=Object(c.a)(k,2),y=S[0],D=S[1];return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{id:"search",children:[Object(h.jsx)("h3",{children:"Dates"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new Date(a).getTime()/1e3-7200,i=new Date(o).getTime()/1e3+7200;w(t),D(i);var n="https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from="+t+"&to="+i;l.a.get(n).then((function(e){g(e.data)}))},children:["From",Object(h.jsx)("input",{id:"date",type:"date",value:a,onChange:function(e){n(e.target.value)}}),"To",Object(h.jsx)("input",{id:"date1",type:"date",value:o,onChange:function(e){p(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Search"})]})]}),Object(h.jsxs)("div",{id:"results",children:[Object(h.jsx)("h3",{children:"How many days is the longest bearish (downward) trend within a given date range?"}),Object(h.jsx)(d,{data:m,m:y,n:x}),Object(h.jsx)("h3",{children:"Which date within a given date range had the highest trading volume?"}),Object(h.jsx)(j,{data:m,m:y,n:x}),Object(h.jsx)("h3",{children:"Time travel"}),Object(h.jsx)(u,{data:m})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Example: In bitcoin\u2019s historical data from CoinGecko, the price decreased 3 days in a row for the inputs from 2020-01-19 and to 2020-01-21, and the price decreased for 5 days in a row for the inputs from 2020-03-01 and to 2021-08-01."}),Object(h.jsx)("p",{children:"Yl\xe4puolella olevan teht\xe4v\xe4nannon mukaan bitcoinin arvo laski aikav\xe4lill\xe4 1.3.2020 - 1.8.2021 5 p\xe4iv\xe4\xe4, mutta CoinGeckon tietojen mukaan se laski 9 p\xe4iv\xe4\xe4."}),Object(h.jsx)("p",{children:"Mik\xe4li ensimm\xe4ist\xe4 p\xe4iv\xe4\xe4 ei lasketa mukaan laski bitcoinin arvo taas vastaavasti 19.1.2020-21.1.2020 v\xe4lisen\xe4 aikana 2 p\xe4iv\xe4\xe4."})]})]})};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.72907d6e.chunk.js.map