(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(8),r=(n(0),n(184)),o={id:"best-practices",title:"Best Practices and Performance"},s={unversionedId:"sections/best-practices",id:"sections/best-practices",isDocsHomePage:!1,title:"Best Practices and Performance",description:"When working with Sections, it is not unfrequent to ask yourself whether what you\u2019re doing is performant, efficient, or idiomatic. The API is short and straightforward, which makes you feel like the problems have to be very subtle and hard to find. The reality is much simpler: Sections is built on top of Android\u2019s RecyclerView and inherits all of its properties, which are common knowledge amongst Android developers. You could build your own if you need to, and it won\u2019t be much different from what Sections gives you today.",source:"@site/../docs/sections/best-practices.mdx",slug:"/sections/best-practices",permalink:"/docs/sections/best-practices",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/sections/best-practices.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Adding and adapting RecyclerCollection to your App",permalink:"/docs/sections/recycler-collection-component"},next:{title:"Nested scrolling and measurement",permalink:"/docs/sections/hscrolls"}},c=[{value:"Immutability",id:"immutability",children:[]},{value:"Identity",id:"identity",children:[]},{value:"SingleComponentSection Diffing",id:"singlecomponentsection-diffing",children:[]},{value:"DataDiffSection Diffing",id:"datadiffsection-diffing",children:[]},{value:"Usage pitfalls to avoid",id:"usage-pitfalls-to-avoid",children:[{value:"Keep Component and Section keys stable",id:"keep-component-and-section-keys-stable",children:[]},{value:"It is still just a fancy RecyclerView adapter",id:"it-is-still-just-a-fancy-recyclerview-adapter",children:[]},{value:"Sections may have different contexts than their Components",id:"sections-may-have-different-contexts-than-their-components",children:[]}]},{value:"Usage tips to follow",id:"usage-tips-to-follow",children:[{value:"Triggering partial redraws from outside the Sections Component",id:"triggering-partial-redraws-from-outside-the-sections-component",children:[]},{value:"Triggering full redraws from outside the Sections Component",id:"triggering-full-redraws-from-outside-the-sections-component",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When working with Sections, it is not unfrequent to ask yourself whether what you\u2019re doing is performant, efficient, or idiomatic. The API is short and straightforward, which makes you feel like the problems have to be very subtle and hard to find. The reality is much simpler: Sections is built on top of Android\u2019s RecyclerView and inherits all of its properties, which are common knowledge amongst Android developers. You could build your own if you need to, and it won\u2019t be much different from what Sections gives you today."),Object(r.b)("p",null,"In this document we\u2019ll introduce the ",Object(r.b)("strong",{parentName:"p"},"two key qualities of performance")," in Sections: ",Object(r.b)("strong",{parentName:"p"},"identity")," and ",Object(r.b)("strong",{parentName:"p"},"immutability"),". These qualities of a data model identity is what is ",Object(r.b)("strong",{parentName:"p"},"used by Sections to define whether a section needs to be redrawn"),". The more unnecessary redraws, the worse your component will perform. Skipping a redraw for a component that has meaningfully changed is not acceptable."),Object(r.b)("p",null,"Once you read through this document if you feel you need to know ",Object(r.b)("em",{parentName:"p"},"more")," and ",Object(r.b)("em",{parentName:"p"},"deeper")," about RecyclerView, we recommend the original articles on ",Object(r.b)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/layout/recyclerview"},"RecyclerView")," and ",Object(r.b)("a",{parentName:"p",href:"https://developer.android.com/reference/androidx/recyclerview/widget/DiffUtil"},"DiffUtils"),", the foundations of Sections. You\u2019ll find they have an extensive API full of flexibility and pitfalls we\u2019ve condensed and simplified for Facebook use cases."),Object(r.b)("h2",{id:"immutability"},"Immutability"),Object(r.b)("p",null,"Immutability is a quality of a data model, where its values cannot change over time. An example of mutable data is an ",Object(r.b)("inlineCode",{parentName:"p"},"ArrayList"),", which can ",Object(r.b)("em",{parentName:"p"},"add")," new elements. An example of immutable data is Java\u2019s ",Object(r.b)("inlineCode",{parentName:"p"},"String"),", which cannot be modified in-place, and whose operations always create a new ",Object(r.b)("inlineCode",{parentName:"p"},"String")," instance."),Object(r.b)("p",null,"As a performance-oriented person your intuition may be that creating objects incurs on a penalty and mutability is obviously faster. This is certainly true for cases with small locality, such as single-class CPU-bound algorithms. For large-scale cases where concurrency is involved, ",Object(r.b)("strong",{parentName:"p"},"the complexity added to prevent data races and other nasty behaviours heavily offsets the cost of a few additional allocations per second"),"."),Object(r.b)("p",null,"So, what can we do to minimise the number of additional allocations of immutable data models? Never request them if they\u2019re not necessary! To do this ",Object(r.b)("strong",{parentName:"p"},"on Sections we visit your data model to find the smallest granularity we have to request a redraw for"),". This is done using the data model\u2019s identity."),Object(r.b)("h2",{id:"identity"},"Identity"),Object(r.b)("p",null,"Identity is another quality of a data model that defines ",Object(r.b)("strong",{parentName:"p"},"whether it is equal to another data model"),", or even itself. ",Object(r.b)("strong",{parentName:"p"},"The action of comparing two data models to find the most granular differences is referred as diffing"),"."),Object(r.b)("p",null,"What the equality is for a data model is to be defined by its creator. It can be defined by its reference in memory (",Object(r.b)("em",{parentName:"p"},"referencial equality"),"), the hash of its contents (",Object(r.b)("em",{parentName:"p"},"hash equality"),"), the value of a field such as id (",Object(r.b)("em",{parentName:"p"},"identifier equality"),"), or even delegate to the equality of each of its fields (",Object(r.b)("em",{parentName:"p"},"structural equality"),")."),Object(r.b)("p",null,"Let\u2019s see one example, ",Object(r.b)("inlineCode",{parentName:"p"},"User"),", which has a list of ",Object(r.b)("inlineCode",{parentName:"p"},"Friend"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-kotlin"},"typealias User = {\n  user: FbId\n  friends: Array<Friend>\n}\n\ntypealias Friend = {\n  name: String\n  id: FbId\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'User user1 = new User(\n  user= "1234"\n  friends= [\n    new Friend(\n      name= "kata"\n      id= "333"\n    )\n  ]\n)\n\nUser user2 = new User(\n  user= "1234"\n  friends= [\n    new Friend(\n      name= "kata"\n      id= "333"\n    )\n  ]\n)\n')),Object(r.b)("p",null,"We could define the identity of ",Object(r.b)("inlineCode",{parentName:"p"},"User")," as its ",Object(r.b)("em",{parentName:"p"},"reference"),", which implies:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"user1 == user1 // true\nuser1 == user2 // false\n")),Object(r.b)("p",null,"Or we could define it as the ",Object(r.b)("em",{parentName:"p"},"structure")," or ",Object(r.b)("em",{parentName:"p"},"hash")," of its contents, which becomes:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"user1.hashCode() == user1.hashCode() // true\nuser1.hashCode() == user2.hashCode() // true\nuser1.equals(user1)                  // true\nuser1.equals(user2)                  // true\n")),Object(r.b)("p",null,"Or we could just use the ",Object(r.b)("inlineCode",{parentName:"p"},"user")," ",Object(r.b)("em",{parentName:"p"},"identifier")," as the identity:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'User user3 = new User(\n  user= "1234"\n  friends= []\n)\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"user1.user == user1.user // true\nuser1.user == user2.user // true\nuser1.user == user3.user // true\n")),Object(r.b)("p",null,"So, choosing the right identity for your data model is key for performance."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Notice that these go from more strict to less strict: reference, structure and hash, then identifier."))),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Java classes use the ",Object(r.b)("inlineCode",{parentName:"p"},"equals")," function to define their identity, and the default implementation delegates to referential equality. Do remember to ",Object(r.b)("inlineCode",{parentName:"p"},"@Override")," it accordingly."))),Object(r.b)("h2",{id:"singlecomponentsection-diffing"},"SingleComponentSection Diffing"),Object(r.b)("p",null,"SingleComponentSection is built as a thin wrapper, so it follows the Component rules for identity. ",Object(r.b)("strong",{parentName:"p"},"If a wrapped Component has not significantly changed it won\u2019t trigger a redraw"),"."),Object(r.b)("p",null,"The diffing algorithm for Components starts by checking the ",Object(r.b)("em",{parentName:"p"},"referential equality")," of the component with ",Object(r.b)("inlineCode",{parentName:"p"},"=="),", then it traverses its Props and checks their ",Object(r.b)("em",{parentName:"p"},"structural equality")," with ",Object(r.b)("inlineCode",{parentName:"p"},"equals"),"."),Object(r.b)("h2",{id:"datadiffsection-diffing"},"DataDiffSection Diffing"),Object(r.b)("p",null,"The main API of Sections is a wrapper around Android\u2019s ",Object(r.b)("inlineCode",{parentName:"p"},"RecyclerView")," operations, calling notifications for updates, insertions and removals behind the scenes. It takes a ",Object(r.b)("inlineCode",{parentName:"p"},"List")," of elements and uses a ",Object(r.b)("strong",{parentName:"p"},"traversal algorithm that takes into account all the kinds of identity equality listed above by using ",Object(r.b)("inlineCode",{parentName:"strong"},"=="),", ",Object(r.b)("inlineCode",{parentName:"strong"},"equals")," and user defined Events"),"."),Object(r.b)("p",null,"First it checks whether it needs to do a granular identity check on the data model, and if the check passes it visits the contents of the data model."),Object(r.b)("p",null,"The check for granularity does ",Object(r.b)("em",{parentName:"p"},"referential equality")," with ",Object(r.b)("inlineCode",{parentName:"p"},"=="),", then checks ",Object(r.b)("em",{parentName:"p"},"identifier equality")," using the event ",Object(r.b)("inlineCode",{parentName:"p"},"OnCheckIsSameItemEvent"),", and lastly it falls back to ",Object(r.b)("em",{parentName:"p"},"structural equality")," with ",Object(r.b)("inlineCode",{parentName:"p"},"equals"),". Remember that Java\u2019s ",Object(r.b)("inlineCode",{parentName:"p"},"equals")," defaults to referential equality. If any of them passes, it goes one level further to check for equality on its contents using the event ",Object(r.b)("inlineCode",{parentName:"p"},"OnCheckIsSameContentEvent"),"."),Object(r.b)("p",null,"These two new events ",Object(r.b)("inlineCode",{parentName:"p"},"OnCheckIsSameItemEvent")," and ",Object(r.b)("inlineCode",{parentName:"p"},"OnCheckIsSameContentEvent")," exist for the benefit of data models where it\u2019s not possible to override ",Object(r.b)("em",{parentName:"p"},"equals")," directly, i.e. using GraphQL-generated models directly."),Object(r.b)("p",null,"Their API is similar to other Litho Events, where a function needs to be annotated as the listener in the ComponentSpec. The model to compare has to be annotated with ",Object(r.b)("inlineCode",{parentName:"p"},"@FromEvent"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@OnEvent(OnCheckIsSameItemEvent.class)\nprotected static Boolean onCheckIsSameItemEvent(\n  SectionContext c,\n  @InjectProp SomeHelper helper,\n  @FromEvent BookmarkFolderItemComponentGraphQL previousItem,\n  @FromEvent BookmarkFolderItemComponentGraphQL nextItem) {\n\n  return previousItem.id == nextItem.id;\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@OnEvent(OnCheckIsSameContentEvent.class)\nprotected static boolean onCheckIsSameContent(\n  SectionContext c,\n  @InjectProp SomeHelper helper,\n  @FromEvent BookmarkFolderItemComponentGraphQL previousItem,\n  @FromEvent BookmarkFolderItemComponentGraphQL nextItem) {\n\n  return previousItem.bookmark.equals(nextItem.bookmark);\n}\n")),Object(r.b)("p",null,"This means that we\u2019ve made the algorithm check if two ",Object(r.b)("inlineCode",{parentName:"p"},"BookmarkFolderItemComponentGraphQL")," have the same ",Object(r.b)("em",{parentName:"p"},"reference")," with ",Object(r.b)("inlineCode",{parentName:"p"},"=="),", then if they have the same ",Object(r.b)("inlineCode",{parentName:"p"},"id")," ",Object(r.b)("em",{parentName:"p"},"identifier"),", and lastly if they match their ",Object(r.b)("em",{parentName:"p"},"structure")," with ",Object(r.b)("inlineCode",{parentName:"p"},"equals"),". If either of these checks pass, then we dig deeper to compare the ",Object(r.b)("em",{parentName:"p"},"structure")," of their bookmark field."),Object(r.b)("h2",{id:"usage-pitfalls-to-avoid"},"Usage pitfalls to avoid"),Object(r.b)("p",null,"With this knowledge in mind, we can talk about tips and pitfalls to take into account to prevent over- and under- redraws."),Object(r.b)("h3",{id:"keep-component-and-section-keys-stable"},"Keep Component and Section keys stable"),Object(r.b)("p",null,"Same as with any other Component, Sections have a key that can be overloaded to the user\u2019s benefit. ",Object(r.b)("strong",{parentName:"p"},"If the key is unstable, meaning that it changes at a different frequency than its contents, it will result in overdraws"),". Double check both for the Section and the RecyclerCollectionComponent."),Object(r.b)("h3",{id:"it-is-still-just-a-fancy-recyclerview-adapter"},"It is still just a fancy RecyclerView adapter"),Object(r.b)("p",null,"Any bugs or unexpected behaviours inherited from the Android implementation remain. ",Object(r.b)("strong",{parentName:"p"},"It is not uncommon to encounter a known issue, so be sure to also search the Android bugtracker"),"."),Object(r.b)("p",null,"One frequent support request asks ",Object(r.b)("strong",{parentName:"p"},"why adding elements before the first element doesn\u2019t scroll the view to the top on the first redraw?")," This is an inherited behaviour that is easily solved by ",Object(r.b)("inlineCode",{parentName:"p"},"requestFocus")," to scroll to the current top position."),Object(r.b)("h3",{id:"sections-may-have-different-contexts-than-their-components"},"Sections may have different contexts than their Components"),Object(r.b)("p",null,"This happens frequently when ",Object(r.b)("strong",{parentName:"p"},"events are not triggered")," when the caller and the listener are on different ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentContext"),". Check that your container ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentTree")," and the Components you're displaying belong in the same context."),Object(r.b)("h2",{id:"usage-tips-to-follow"},"Usage tips to follow"),Object(r.b)("h3",{id:"triggering-partial-redraws-from-outside-the-sections-component"},"Triggering partial redraws from outside the Sections Component"),Object(r.b)("p",null,"We will use the example of a ",Object(r.b)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," that is acted externally, by selecting and highlighting a bookmark after it has been added from a post in another Component."),Object(r.b)("p",null,"The best approach here is to rely on ",Object(r.b)("inlineCode",{parentName:"p"},"DataDiffSection")," diffing to modify the right row. That will mean either ",Object(r.b)("strong",{parentName:"p"},"modifying or wrapping the current data model to include a new property")," of whether it\u2019s highlighted."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"class BookmarkFolderItemComponentHighlight {\n  int highlightColor = 0;\n  bool isHighlight = false;\n  BookmarkFolderItemComponentGraphQL model;\n\n  // constructor\n\n  // equals and hashCode\n}\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"These additional object allocations are cheaper than a full redrawn for single-row changes."))),Object(r.b)("h3",{id:"triggering-full-redraws-from-outside-the-sections-component"},"Triggering full redraws from outside the Sections Component"),Object(r.b)("p",null,"We will use the example of a \u201cNight Mode\u201c for your ",Object(r.b)("inlineCode",{parentName:"p"},"RecyclerCollection"),". You\u2019d like for the background to change between both day and night modes when a button that\u2019s not part of the ",Object(r.b)("inlineCode",{parentName:"p"},"RecyclerCollection")," is clicked."),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This approach causes the list to lose its State. Prefer partial redraws wherever possible."))),Object(r.b)("p",null,"The easiest way of triggering a redraw from scratch is by ",Object(r.b)("strong",{parentName:"p"},"making the color state part of the Section key"),". When your Component triggers the event and the algorithm traverses the view, ",Object(r.b)("strong",{parentName:"p"},"it\u2019ll see that the key has change and trigger a full redraw of the relevant Section"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@OnCreateChildren\nstatic Children onCreateChildren(final SectionContext c, @Prop int color) {\n  return Children.create()\n      .child(\n          DataDiffSection.<Integer>create(c)\n              .key("my_section_" + color)\n              .data(generateData(32))\n              .renderEventHandler(ListSection.onRender(c)))\n      .build();\n}\n')))}d.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,h=p["".concat(o,".").concat(b)]||p[b]||m[b]||r;return n?i.a.createElement(h,s(s({ref:t},l),{},{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);