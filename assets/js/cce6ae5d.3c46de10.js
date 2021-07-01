(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(8),i=(n(0),n(184)),r=n(185),c=n(38),s={id:"start",title:"Basics: DiffSection and GroupSection"},l={unversionedId:"sections/start",id:"sections/start",isDocsHomePage:!1,title:"Basics: DiffSection and GroupSection",description:"The Sections API is a declarative, composable, and thread-safe API for writing highly-optimized list screens, built on top of Litho. It tries to address issues we've had at Facebook when writing complex lists, such as maintaining many view types, handling multiple data sources and composing lists together.",source:"@site/../docs/sections/start.mdx",slug:"/sections/start",permalink:"/docs/sections/start",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/sections/start.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Dynamic Props",permalink:"/docs/mainconcepts/coordinate-state-actions/dynamic-props"},next:{title:"Adding and adapting RecyclerCollection to your App",permalink:"/docs/sections/recycler-collection-component"}},d=[{value:"RecyclerCollectionComponent",id:"recyclercollectioncomponent",children:[]},{value:"DiffSection",id:"diffsection",children:[{value:"SingleComponentSection",id:"singlecomponentsection",children:[]},{value:"DataDiffSection",id:"datadiffsection",children:[]}]},{value:"GroupSection",id:"groupsection",children:[]},{value:"Putting all of the pieces together",id:"putting-all-of-the-pieces-together",children:[]},{value:"Where to go next?",id:"where-to-go-next",children:[]}],p={toc:d};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The Sections API is a declarative, composable, and thread-safe API for writing highly-optimized list screens, built on top of Litho.")," It tries to address issues we've had at Facebook when writing complex lists, such as maintaining many view types, handling multiple data sources and composing lists together."),Object(i.b)("p",null,"While Litho Components are used for displaying pieces of UI, Sections are a way of composing data into a list of Litho Components or Views. If you visualize your screen as being a tree of components, the nodes for the root of the tree and the subtrees are Sections, while the leaves are Litho Components that represent individual items that will be displayed on screen."),Object(i.b)("img",{src:Object(r.a)("/images/sections-intro.png"),width:"800px"}),Object(i.b)("p",null,"Sections use the same hierarchical declarative data model as Components and under the hood transparently handle things like calculating minimal sets of changes for data updates and doing granular UI refreshes. As part of Litho, the Sections API shares the same main concepts such as annotation-based code generation, event handling, props and state updates. It is built on top of ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/layout/recyclerview"},"Android's ",Object(i.b)("inlineCode",{parentName:"a"},"RecyclerView")),"."),Object(i.b)("p",null,"In this document we'll walk you through the parts necessary to build a list: a ",Object(i.b)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," for your layout, which sets several ",Object(i.b)("inlineCode",{parentName:"p"},"DiffSection")," that are either ",Object(i.b)("inlineCode",{parentName:"p"},"SingleComponentSection")," or ",Object(i.b)("inlineCode",{parentName:"p"},"DataDiffSection"),", all contained inside ",Object(i.b)("inlineCode",{parentName:"p"},"GroupSection")," hierarchies."),Object(i.b)("p",null,"If you have the time we recommend you also watch this Litho Lesson which covers the basics of how the diffing happens:"),Object(i.b)("div",{align:"center"},Object(i.b)("iframe",{"padding-top":"10px",width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/-Ahskig2Lw0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("h2",{id:"recyclercollectioncomponent"},"RecyclerCollectionComponent"),Object(i.b)("p",null,"You can use ",Object(i.b)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," as you would use any other component in the framework by building it and adding it as a child in your layout."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"RecyclerCollectionComponent.create(c)\n    .section(createGroupSection())\n    .build();\n")),Object(i.b)("p",null,"This is all you need to know about adding Sections to your layout for now. You can find an explanation of advanced use cases such as snapping and horizontal lists on the ",Object(i.b)("a",{parentName:"p",href:"recycler-collection-component"},"RecyclerCollectionComponent docs"),"."),Object(i.b)("h2",{id:"diffsection"},"DiffSection"),Object(i.b)("p",null,"Most lists are composed of groups of homogeneous items interleaved with one-off items. As an example, imagine a list of contacts sorted alphabetically and separated by headers indicating the first letter of the contact's name."),Object(i.b)("p",null,"Following this model the Sections API ships two ",Object(i.b)("inlineCode",{parentName:"p"},"DiffSectionSpec")," implementations that can be combined to represent the structure of nearly any surface: ",Object(i.b)("inlineCode",{parentName:"p"},"SingleComponentSection")," and ",Object(i.b)("inlineCode",{parentName:"p"},"DataDiffSection"),"."),Object(i.b)("h3",{id:"singlecomponentsection"},"SingleComponentSection"),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"SingleComponentSection")," is used to represent a ",Object(i.b)("strong",{parentName:"p"},"one-off row")," in a complex list. As the name suggests, you can use this Section to render a single Component which is passed to this Section as its only prop."),Object(i.b)("p",null,"One of the typical use cases of a ",Object(i.b)("inlineCode",{parentName:"p"},"SingleComponentSection")," is to add a loading spinner at the end of a list:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"SingleComponentSection.create(c)\n    .component(Progress.create(c).build())\n    .build();\n")),Object(i.b)("p",null,"Or a header for your data:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'SingleComponentSection.create(c)\n    .component(Text.create(c).text("Friends").build())\n    .build();\n')),Object(i.b)("h3",{id:"datadiffsection"},"DataDiffSection"),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"DataDiffSection")," is used to ",Object(i.b)("strong",{parentName:"p"},"represent a homogeneous list of ",Object(i.b)("em",{parentName:"strong"},"immutable")," data"),". The minimal information that you have to pass to a ",Object(i.b)("inlineCode",{parentName:"p"},"DataDiffSection")," is the list of items that it needs to render and a callback for rendering each item in this list."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"DataDiffSection.<MyModel>create(c)\n    .data(ImmutableList.of(new MyModel(1), new MyModel(2), new MyModel(3)))\n    .renderEventHandler(MyGroupSection.onRenderEdge(c))\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"DataDiffSection")," is designed to efficiently render the parts of a surface that handle large flows of data. When an item at a certain position needs to be displayed on screen, the framework will check whether the model we have received in the new list of data changed since the last time we rendered it."),Object(i.b)("p",null,"If the data changed for the item in that position, the framework will dispatch a ",Object(i.b)("inlineCode",{parentName:"p"},"RenderEvent")," for that item and the ",Object(i.b)("inlineCode",{parentName:"p"},"DataDiffSection")," will use the ",Object(i.b)("inlineCode",{parentName:"p"},"RenderEvent")," handler we passed as prop to create a Component for that item and display it."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"@OnEvent(RenderEvent.class)\nstatic RenderInfo onRenderEdge(\n    SectionContext c,\n    @FromEvent MyModel model) {\n    return ComponentRenderInfo.create()\n        .component(MyModelItemComponent.create(c).item(model).build())\n        .build();\n}\n")),Object(i.b)("p",null,"By default ",Object(i.b)("inlineCode",{parentName:"p"},"DataDiffSection")," will detect data changes by checking instance equality and subsequently calling ",Object(i.b)("inlineCode",{parentName:"p"},"equals")," on the objects in the data list."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You can visit the ",Object(i.b)("a",{parentName:"p",href:"best-practices"},"Best Practices and Performance")," documentation for a deep dive of how to build performant and accurate diffing, including diffing for classes where ",Object(i.b)("inlineCode",{parentName:"p"},"equals")," is not overwritten."))),Object(i.b)("h2",{id:"groupsection"},"GroupSection"),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"GroupSectionSpec")," is used to ",Object(i.b)("strong",{parentName:"p"},"structure your Sections into a hierarchy"),", each one responsible for rendering its own chunk of data."),Object(i.b)("p",null,"Group section specs are classes annotated with ",Object(i.b)("inlineCode",{parentName:"p"},"@GroupSectionSpec"),". Implementing a ",Object(i.b)("inlineCode",{parentName:"p"},"GroupSectionSpec")," is very simple: you only need to write one method annotated with ",Object(i.b)("inlineCode",{parentName:"p"},"@OnCreateChildren"),". This method returns a tree of Sections that will have root in this ",Object(i.b)("inlineCode",{parentName:"p"},"GroupSectionSpec"),"."),Object(i.b)("p",null,"Let's have a look at how you would declare a simple list that contains a header followed by a list of ",Object(i.b)("inlineCode",{parentName:"p"},"String")," items:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"@GroupSectionSpec\nclass SimpleListSectionSpec {\n\n  @OnCreateChildren\n  static Children onCreateChildren(\n      SectionContext c,\n      @Prop String headerTitle,\n      @Prop List<String> data) {\n    return Children.create()\n        .child(\n            SingleComponentSection.create(c)\n                .component(\n                    Text.create(c)\n                        .text(headerTitle)\n                        .build()))\n        .child(\n            DataDiffSection.<String>create(c)\n                .data(data)\n                .renderEventHandler(SimpleListSection.onRender(c)))\n        .build();\n  }\n\n  @OnEvent(RenderEvent.class)\n  static RenderInfo onRender(\n      SectionContext c,\n      @FromEvent String model) {\n    return ComponentRenderInfo.create()\n        .component(\n            Text.create(c)\n                .text(model)\n                .build())\n        .build();\n    }\n}\n")),Object(i.b)("h2",{id:"putting-all-of-the-pieces-together"},"Putting all of the pieces together"),Object(i.b)("p",null,"Imagine a surface that has multiple such subsections consisting of a header and list of Strings. An example could be a list of contacts grouped alphabetically, delimited by headers showing the first letter of the name. You can easily achieve that by creating a ",Object(i.b)("inlineCode",{parentName:"p"},"GroupSectionSpec")," that has a ",Object(i.b)("inlineCode",{parentName:"p"},"SimpleListSection")," child for every letter."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"@GroupSectionSpec\nclass ContactsSectionSpec {\n\n  @OnCreateChildren\n  static Children onCreateChildren(\n      SectionContext c,\n      @Prop List<String> data) {\n\n    final Children.Builder builder = Children.create();\n\n    for(char firstLetter = 'A'; firstLetter <= 'Z'; firstLetter++) {\n        builder.child(\n            SimpleListSection.create(c)\n                .key(String.valueOf(firstLetter))\n                .headerTitle(String.valueOf(firstLetter))\n                .data(getItemsForLetter(firstLetter, data)));\n    }\n\n    return build.build();\n  }\n}\n")),Object(i.b)("p",null,"Below is a representation of the tree of Sections that has the root in ",Object(i.b)("inlineCode",{parentName:"p"},"ContactsSectionSpec"),". Each node in the tree is a Section, and the leaves are Components that can be rendered on screen. Each one of the sections in the tree acts as a data source. Its responsibilities are to describe what data it needs and how that data should be rendered."),Object(i.b)("img",{src:Object(r.a)("/images/group-section-spec.png"),width:"800"}),Object(i.b)("p",null,"The Sections hierarchy becomes a data source for the ",Object(i.b)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent"),", and we only have to pass the data that the ",Object(i.b)("inlineCode",{parentName:"p"},"ContactsSection")," will use to create each ",Object(i.b)("inlineCode",{parentName:"p"},"SimpleListSection"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@OnCreateLayout\nstatic Component onCreateLayout(\n    final ComponentContext c) {\n  return RecyclerCollectionComponent.create(c)\n    .section(\n        ContactsSection.create(new SectionContext(c))\n            .dataModel(ImmutableList.of("Andy", "Aziz", "Aditya", "Nico", "Sergey"))\n            .build())\n    .build();\n}\n')),Object(i.b)("p",null,"That is everything there is to most list you'll build. A small API surface for a lot of functionality! The complexity of handling operations on your list, such as inserts or removes, is hidden away and handled by the infrastructure."),Object(i.b)("h2",{id:"where-to-go-next"},"Where to go next?"),Object(i.b)("p",null,"We suggest reading into ",Object(i.b)("a",{parentName:"p",href:"best-practices"},"Best Practices and Performance")," first. Afterwards you can head for one of the documents referring to advanced use cases your list may have, such as ",Object(i.b)("a",{parentName:"p",href:"recycler-collection-component"},"complex list layouts"),", ",Object(i.b)("a",{parentName:"p",href:"services"},"granular dependency injection"),", or ",Object(i.b)("a",{parentName:"p",href:"working-ranges"},"prefetch and pagination"),"."),Object(i.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)("p",null,"If you find yourself in trouble, you can also check our internal wiki about ",Object(i.b)("a",{parentName:"p",href:"https://fburl.com/wiki/sr02b53q"},"debugging frequently reported issues with Flipper"),".")),Object(i.b)(c.OssOnly,{mdxType:"OssOnly"},Object(i.b)("div",null)))}b.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,h=p["".concat(r,".").concat(u)]||p[u]||b[u]||i;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},185:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n(10),o=n(186);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,c=void 0!==r&&r,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+d:d}(i,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},186:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))}}]);