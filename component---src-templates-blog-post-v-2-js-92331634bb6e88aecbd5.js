(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{151:function(t,e,n){"use strict";n.r(e);var a=n(8),r=(n(0),n(155)),i=n(159),o=n.n(i);var c=function(t){return Object(a.b)(o.a,{title:t.title,meta:[{name:"title",content:t.title},{name:"description",content:t.description},{property:"og:title",content:t.title},{property:"og:url",content:t.pathname?t.url+t.pathname:t.url},{property:"og:image",content:t.thumbnail&&t.thumbnail},{property:"og:image:secure_url",content:t.thumbnail&&t.thumbnail},{property:"og:description",content:t.description},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:locale",content:"en"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:t.title},{name:"twitter:description",content:t.description},{name:"twitter:image",content:t.thumbnail&&t.thumbnail},{property:"og:type",content:"website"},{name:"robots",content:"index, follow"},{name:"twitter:creator",content:"@karticles"},{property:"og:site_name",content:"karticles"}]},Object(a.b)("html",{lang:"en"}))};n.d(e,"pageQuery",function(){return l});e.default=function(t){var e=t.data;console.log(e);var n=e.blog||e.blogAlternate,i=n.frontmatter,o=n.html;return Object(a.b)(r.a,null,Object(a.b)(c,{title:i.title}),Object(a.b)("div",{className:"blog-post-container"},Object(a.b)("div",{className:"blog-post"},Object(a.b)("h1",null,i.title),Object(a.b)("h2",null,i.date),Object(a.b)("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:o}}))))};var l="579255545"},153:function(t,e,n){var a;t.exports=(a=n(158))&&a.default||a},154:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return m}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return g});var a=n(8),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(152),s=n.n(l);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return l.withPrefix}),n.d(e,"navigate",function(){return l.navigate}),n.d(e,"push",function(){return l.push}),n.d(e,"replace",function(){return l.replace}),n.d(e,"navigateTo",function(){return l.navigateTo});var u=n(153),b=n.n(u);n.d(e,"PageRenderer",function(){return b.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var p=i.a.createContext({}),g=function(t){return Object(a.b)(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.b)("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},155:function(t,e,n){"use strict";var a=n(8),r=n(157),i=n(0),o=n.n(i),c=n(159),l=n.n(c),s=n(154),u=n(156),b={name:"146q31f",styles:"float:right;"},d={name:"1bh6bcn",styles:"float:right;margin-right:5px;"},p={name:"1bh6bcn",styles:"float:right;margin-right:5px;"};e.a=function(t){var e=t.children;return Object(a.b)(s.StaticQuery,{query:"610245948",render:function(t){return Object(a.b)(o.a.Fragment,null,Object(a.b)(l.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Articles Collection"},{name:"keywords",content:"Articles, blog"}]},Object(a.b)("html",{lang:"en"})),Object(a.b)("div",{css:Object(a.a)("margin:0 auto;max-width:700px;padding:",Object(u.a)(2),";padding-top:",Object(u.a)(1.5),";")},Object(a.b)(s.Link,{to:"/"},Object(a.b)("h3",{css:Object(a.a)("margin-bottom:",Object(u.a)(2),";display:inline-block;font-style:normal;")},t.site.siteMetadata.title)),Object(a.b)(s.Link,{to:"/about",css:b},"About"),Object(a.b)(s.Link,{to:"/tags",css:d},"Tags"),Object(a.b)(s.Link,{to:"/categories",css:p},"Categories"),e))},data:r})}},156:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var a=n(160),r=n.n(a),i=n(161),o=n.n(i),c=new r.a(o.a),l=c.rhythm},157:function(t){t.exports={data:{site:{siteMetadata:{title:"Karticles"}}}}},158:function(t,e,n){"use strict";n.r(e);n(51);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(52),l=n(2),s=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s}}]);
//# sourceMappingURL=component---src-templates-blog-post-v-2-js-92331634bb6e88aecbd5.js.map