(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{753:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=(a(33),a(757)),o=a.n(i),c=a(754),m=a(766),l=(a(763),a(758)),s=a.n(l);a(764);var p=class extends n.Component{render(){return r.a.createElement("div",{className:"about"},r.a.createElement("h1",null,"Edit About component or pages/about.jsx to include your information."))}};const d=c.c.div.withConfig({displayName:"about__BodyContainer",componentId:"sc-15mt7nw-0"})(["padding:",";"],e=>e.theme.sitePadding);t.default=class extends r.a.Component{render(){return r.a.createElement(m.a,{location:this.props.location},r.a.createElement("div",{className:"index-container"},r.a.createElement(o.a,{title:s.a.siteTitle}),r.a.createElement("main",null,r.a.createElement(d,null,r.a.createElement(p,null)))))}}},763:function(e,t,a){"use strict";var n=a(2),r=a.n(n),i=a(757),o=a.n(i),c=a(758),m=a.n(c);t.a=class extends n.Component{render(){const{postNode:e,postPath:t,postSEO:a}=this.props;let n,i,c,l;if(a){const a=e.frontmatter;n=a.title,i=a.description?a.description:e.excerpt,l=m.a.siteUrl+m.a.pathPrefix+t}else n=m.a.siteTitle,i=m.a.siteDescription,c=m.a.siteLogo;const s="/"===m.a.pathPrefix?"":m.a.pathPrefix;c=m.a.siteUrl+s+c;const p=m.a.siteUrl+m.a.pathPrefix,d=[{"@context":"http://schema.org","@type":"WebSite",url:p,name:n,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:""}];return a&&d.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":l,name:n,image:c}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:p,name:n,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:"",headline:n,image:{"@type":"ImageObject",url:c},description:i}]),r.a.createElement(o.a,null,r.a.createElement("meta",{name:"description",content:i}),r.a.createElement("meta",{name:"image",content:c}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),r.a.createElement("meta",{property:"og:url",content:a?l:p}),a?r.a.createElement("meta",{property:"og:type",content:"article"}):null,r.a.createElement("meta",{property:"og:title",content:n}),r.a.createElement("meta",{property:"og:description",content:i}),r.a.createElement("meta",{property:"og:image",content:c}),r.a.createElement("meta",{property:"fb:app_id",content:m.a.siteFBAppID?m.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:m.a.userTwitter?m.a.userTwitter:""}),r.a.createElement("meta",{name:"twitter:title",content:n}),r.a.createElement("meta",{name:"twitter:description",content:i}),r.a.createElement("meta",{name:"twitter:image",content:c}))}}},779:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-about-jsx-3a2e185f1c293d7ba3ba.js.map