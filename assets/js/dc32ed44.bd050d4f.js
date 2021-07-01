(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),o=t(8),r=(t(0),t(184)),c={id:"events",title:"Events Overview"},i={unversionedId:"mainconcepts/coordinate-state-actions/events",id:"mainconcepts/coordinate-state-actions/events",isDocsHomePage:!1,title:"Events Overview",description:"This page was moved from the old website without any change and might be updated",source:"@site/../docs/mainconcepts/coordinate-state-actions/events.md",slug:"/mainconcepts/coordinate-state-actions/events",permalink:"/docs/mainconcepts/coordinate-state-actions/events",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/coordinate-state-actions/events.md",version:"current",sidebar:"mainSidebar",previous:{title:"Hoisting State",permalink:"/docs/mainconcepts/coordinate-state-actions/hoisting-state"},next:{title:"Triggering events with Handles",permalink:"/docs/mainconcepts/coordinate-state-actions/trigger-events"}},l=[{value:"Callbacks",id:"callbacks",children:[]}],p={toc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Content will be updated")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This page was moved from the old website without any change and might be updated"))),Object(r.b)("p",null,"The framework provides a general-purpose API to connect components through events. Events are declared as a POJO with an ",Object(r.b)("inlineCode",{parentName:"p"},"@Event")," annotation. By convention we suffix Event class names with ",Object(r.b)("em",{parentName:"p"},"Event"),". Event declarations may not be inner classes of your ",Object(r.b)("inlineCode",{parentName:"p"},"LayoutSpec")," or ",Object(r.b)("inlineCode",{parentName:"p"},"MountSpec"),". This is by design as specs are supposed to be a private concept and events can be used across multiple components."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@Event\npublic class ColorChangedEvent {\n  public int color;\n}\n")),Object(r.b)("p",null,"In this example we will assume we have a component called ",Object(r.b)("inlineCode",{parentName:"p"},"ColorComponent"),". To indicate that a ",Object(r.b)("inlineCode",{parentName:"p"},"ColorComponent")," can dispatch a ",Object(r.b)("inlineCode",{parentName:"p"},"ColorChangedEvent")," our ",Object(r.b)("inlineCode",{parentName:"p"},"ColorComponentSpec")," must be annotated with that information. This is done with the ",Object(r.b)("inlineCode",{parentName:"p"},"events")," parameter of the ",Object(r.b)("inlineCode",{parentName:"p"},"@MountSpec")," and ",Object(r.b)("inlineCode",{parentName:"p"},"@LayoutSpec")," annotations. A component may be annotated to dispatch multiple events."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec(events = { ColorChangedEvent.class })\nclass ColorComponentSpec {\n  ...\n  @OnCreateLayout\n  static Component onCreateLayout(\n      Context c,\n      @Prop int color) {\n    ...\n    EventHandler handler = ColorComponent.getColorChangedEventHandler(c);\n    if (handler != null) {\n      ColorComponent.dispatchColorChangedEvent(\n          handler,\n          color);\n    }\n    ...\n  }\n}\n")),Object(r.b)("p",null,"For an event of type ",Object(r.b)("inlineCode",{parentName:"p"},"FooEvent"),", this will auto-generate a matching ",Object(r.b)("inlineCode",{parentName:"p"},"dispatchFooEvent")," method and an event identifier that will used by event callbacks."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"dispatchFooEvent")," method takes an ",Object(r.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/EventHandler.html"},"EventHandler")," as the first argument followed by the list of attributes defined in your ",Object(r.b)("inlineCode",{parentName:"p"},"@Event")," class. An ",Object(r.b)("inlineCode",{parentName:"p"},"EventHandler")," is essentially a generic listener interface to connect components through events. The convention is to have an ",Object(r.b)("inlineCode",{parentName:"p"},"EventHandler")," prop for each event exposed by your component."),Object(r.b)("p",null,"In the example above, ",Object(r.b)("inlineCode",{parentName:"p"},"ColorComponent")," takes a ",Object(r.b)("inlineCode",{parentName:"p"},"colorChangedHandler")," as prop and dispatches the ",Object(r.b)("inlineCode",{parentName:"p"},"ColorChangedEvent")," to it with the generated ",Object(r.b)("inlineCode",{parentName:"p"},"dispatchColorChangedEvent()")," method."),Object(r.b)("h2",{id:"callbacks"},"Callbacks"),Object(r.b)("p",null,"In order to handle events dispatched by other components, you'll need an ",Object(r.b)("inlineCode",{parentName:"p"},"EventHandler")," instance and a matching callback."),Object(r.b)("p",null,"You can create ",Object(r.b)("inlineCode",{parentName:"p"},"EventHandler")," instances by using your generated component's corresponding event handler factory method. This method will have the same name as your event callback method."),Object(r.b)("p",null,"You define the event callback using the ",Object(r.b)("inlineCode",{parentName:"p"},"@OnEvent")," annotation. ",Object(r.b)("inlineCode",{parentName:"p"},"@OnEvent")," takes one argument: the event class. The first parameter of a method annotated with ",Object(r.b)("inlineCode",{parentName:"p"},"@OnEvent")," has to be a ComponentContext that the framework will populate for you."),Object(r.b)("p",null,"For example, here's how a component would define a handler for the ",Object(r.b)("inlineCode",{parentName:"p"},"ColorChangedEvent")," declared above:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\nclass MyComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @Prop String someColor) {\n\n    return Column.create(c)\n        ...\n        .child(\n            ColorComponent.create(c)\n                .color(someColor)\n                .colorChangedHandler(MyComponent.onColorChanged(c)))\n        ...\n        .build();\n\n  }\n\n  @OnEvent(ColorChangedEvent.class)\n  static void onColorChanged(\n      ComponentContext c,\n      @FromEvent int color,\n      @Prop String someProp) {\n    Log.d("MyComponent", "Color changed: " + color);\n  }\n}\n')),Object(r.b)("p",null,"Using the ",Object(r.b)("inlineCode",{parentName:"p"},"@Param")," annotation on one or more of the parameters of the callback method you can define dynamic event parameters. This is useful if you would like to define a callback for a certain type of event e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"onAvatarClicked()")," but would like to know what avatar was clicked. The avatar parameter in this case would be passed to the event handler factory method."),Object(r.b)("p",null,"As you can see, ",Object(r.b)("inlineCode",{parentName:"p"},"@OnEvent")," callbacks have access to all component props just like the other spec methods."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\nclass FacePileComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @Prop Uri[] faces) {\n    Component.Builder builder = Column.create(c);\n    for (Uri face : faces) {\n      builder.child(\n          FrescoImage.create(c)\n              .uri(face)\n              .clickHandler(FacePileComponent.onFaceClicked(c, face)));\n    }\n\n    return builder.build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onFaceClicked(\n      ComponentContext c,\n      @Param Uri face) {\n    Log.d("FacePileComponent", "Face clicked: " + face);\n  }\n}\n')))}s.isMDXComponent=!0},184:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,u=d["".concat(c,".").concat(m)]||d[m]||b[m]||r;return t?o.a.createElement(u,i(i({ref:n},p),{},{components:t})):o.a.createElement(u,i({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<r;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);