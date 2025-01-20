(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,'/* ---------------------------- Buttons --------------------------------- */\n\nbutton {\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 8px 16px;\n  margin: 2px 0;\n  transition: 0.3s;\n  background-color: var(--inactive-button-color1);\n  color: var(--inactive-button-text-color1);\n  /* box-shadow: 1px 1px 1px rgb(124 124 124 / 0.5); */\n}\n\n.alt-buttons {\n  background-color: var(--inactive-button-color2);\n  color: var(--inactive-button-text-color2);\n}\n\n/* Change background color of buttons on hover */\nbutton:hover {\n  background-color: var(--hover-button-color1);\n  color: var(--hover-button-text-color1);\n}\n\n.alt-buttons:hover {\n  background-color: var(--hover-button-color2);\n  color: var(--hover-button-text-color2);\n}\n\n/* Create an active/current tablink class */\nbutton.active {\n  background-color: var(--active-button-color1);\n  color: var(--active-button-text-color1);\n}\n\n.alt-buttons.active {\n  background-color: var(--active-button-color2);\n  color: var(--active-button-text-color2);\n}\n\n/* ---------------------------- Container --------------------------------- */\n\n.main-content-containers {\n  padding: 10px 20px;\n  text-align: left;\n  height: fit-content;\n  margin: 10px 5px;\n  border: solid 2px grey;\n  border-radius: 1px;\n  background-color: var(--main-color);\n}\n\n.content-container-tabs {\n  min-height: 25px;\n  padding: 5px 10px;\n  border-bottom: solid 2px grey;\n  cursor: default;\n  text-align: left;\n}\n\n.content-container-paragraphs {\n  padding: 12px;\n  background-color: var(--content-background-color);\n}\n\n.content-container-paragraphs-ul {\n  padding: 5px 20px;\n  margin: 0 5px;\n}\n\n.content-container-rating-lines {\n  border-bottom: solid 2px rgba(128, 128, 128, 0.2);\n  display: flex;\n  cursor: default;\n  background-color: var(--content-background-color);\n}\n\n.content-container-rating-numerical {\n  padding: 5px 10px 5px 15px;\n  width: 15px;\n  max-width: 15px;\n  min-width: 15px;\n  background-color: var(--content-background-color);\n  font-weight: 500;\n  color: var(--text-color);\n}\n\n/* Parents the overall condition text and is the description text. */\n.content-container-rating-description-and-condition-bubble {\n  padding: 5px 5px 5px 5px;\n  text-indent: -8px;\n  text-wrap: wrap;\n  color: var(--text-color);\n}\n\n/* The overall condition text. (Good, Fair, Poor) */\n.content-container-rating-condition-bubble {\n  margin: 0 8px 0 5px;\n  padding: 0 5px;\n  font-weight: 500;\n  border-radius: 1px;\n  text-wrap: nowrap;\n  background-color: var(--active-button-color1);\n  color: var(--active-button-text-color1);\n}\n\n.content-container-comment-lines {\n  padding: 0 15px;\n  margin-bottom: 3px;\n  color: rgb(172, 172, 172);\n  text-indent: -15px;\n  border-bottom: solid 2px rgba(128, 128, 128, 0.2);\n  transition: 0.2s;\n  color: var(--text-color);\n}\n\n.content-container-comment-lines:active {\n  color: rgb(123, 131, 189);\n}\n\n.content-container-links-line {\n  min-height: 25px;\n  padding: 20px;\n  padding: 5px;\n  color: var(--text-color);\n  border-top: solid 2px grey;\n  cursor: default;\n  text-align: left;\n}\n\n.content-container-links-line-label {\n  display: inline-block;\n  cursor: default;\n}\n\n.content-container-links-line-links {\n  color: var(--text-color);\n  text-decoration: none;\n  padding: 4px 8px;\n  margin: 0 2px;\n  /* background: rgb(33, 33, 99); */\n  background-color: var(--inactive-button-color1);\n  border-radius: 0px;\n  white-space: nowrap;\n  display: inline-block;\n  user-select: none;\n}\n\n.content-container-links-line-links:hover,\n.content-container-links-line-links:active,\n.content-container-links-line-links:focus {\n  color: var(--text-color);\n  text-decoration: none;\n  background: rgba(255, 255, 255, 0.2);\n  background-color: var(--hover-button-color1);\n  border-radius: 1px;\n}\n\n.paragraph-rating {\n  margin: 0 0 5px 0;\n}\n\n/* cards */\n\n.element-content-cards-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.element-content-cards {\n  width: 550px;\n  height: 160px;\n  min-height: fit-content;\n  text-align: left;\n  margin: 10px 5px;\n  padding-bottom: 5px;\n  border: solid 2px grey;\n  border-radius: 1px;\n  background-color: var(--main-color);\n}\n\n.element-content-cards li {\n  margin: 8px 10px;\n}\n\n.element-card-header {\n  margin: -2px -2px 5px -2px;\n  background-color: var(--hover-button-color1);\n  padding: 10px 4px 4px 8px;\n  border-bottom: solid 1px grey;\n  border-radius: 1px;\n}\n\n.element-card-paragraph {\n  text-indent: 25px hanging;\n}\n\n.culvert-content-cards-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.culvert-content-cards {\n  width: 550px;\n  height: 280px;\n  min-height: fit-content;\n  text-align: left;\n  margin: 10px 5px;\n  padding-bottom: 5px;\n  border: solid 2px grey;\n  border-radius: 1px;\n  background-color: var(--main-color);\n}\n\n.culvert-content-cards li {\n  margin: 0px 10px;\n}\n\n.culvert-card-header {\n  margin: -2px -2px 8px -2px;\n  background-color: var(--hover-button-color1);\n  padding: 10px 4px 4px 8px;\n  border-bottom: solid 1px grey;\n  border-radius: 1px;\n}\n\n.culvert-card-paragraph {\n  text-indent: 25px hanging;\n}\n\n.naming-conventions-content-cards-container {\n  display: block;\n  /* flex-wrap: wrap;\n  justify-content: space-around; */\n}\n\n.naming-conventions-card-header {\n  margin: -2px -2px 8px -2px;\n  background-color: var(--hover-button-color1);\n  padding: 10px 4px 4px 8px;\n  border-bottom: solid 1px grey;\n  border-radius: 1px;\n}\n\n.naming-conventions-content-cards {\n  min-height: fit-content;\n  text-align: left;\n  margin: 10px 5px;\n  padding-bottom: 5px;\n  border: solid 2px grey;\n  border-radius: 1px;\n  background-color: var(--main-color);\n}\n\n.naming-conventions-content-cards li {\n  margin: 8px 10px;\n}\n\n.naming-conventions-card-paragraph {\n  text-indent: 25px hanging;\n}\n\n.maintenance-content-cards-container {\n  display: block;\n  /* flex-wrap: wrap;\n  justify-content: space-around; */\n}\n\n.maintenance-card-header {\n  margin: -2px -2px 8px -2px;\n  background-color: var(--hover-button-color1);\n  padding: 10px 4px 4px 4px;\n  border-bottom: solid 1px grey;\n  border-radius: 1px;\n}\n\n.maintenance-content-cards {\n  min-height: fit-content;\n  text-align: left;\n  margin: 10px 5px;\n  padding-bottom: 5px;\n  border: solid 2px grey;\n  border-radius: 1px;\n  background-color: var(--main-color);\n}\n\n.maintenance-content-cards li {\n  margin: 8px 10px;\n}\n\n.maintenance-card-paragraph {\n  text-indent: 25px hanging;\n}\n\n.report-walkthrough-content-cards-container {\n  display: block;\n  /* flex-wrap: wrap;\n  justify-content: space-around; */\n}\n\n.report-walkthrough-card-header {\n  margin: -2px -2px 8px -2px;\n  background-color: var(--hover-button-color1);\n  padding: 10px 4px 4px 8px;\n  border-bottom: solid 1px grey;\n  border-radius: 1px;\n}\n\n.report-walkthrough-content-cards {\n  min-height: fit-content;\n  text-align: left;\n  margin: 10px 5px;\n  padding-bottom: 5px;\n  border: solid 2px grey;\n  border-radius: 1px;\n  background-color: var(--main-color);\n}\n\n.report-walkthrough-content-cards li {\n  margin: 8px 10px;\n}\n\n.report-walkthrough-card-paragraph {\n  text-indent: 25px hanging;\n}\n\n/* maintenance tab*/\n\n.component-maintenance-container {\n  display: flex;\n  background-color: var(--content-background-color);\n  border-bottom: solid 2px rgba(128, 128, 128, 0.2);\n}\n\n.component-maintenance-button1,\n.component-maintenance-button2,\n.component-maintenance-button3,\n.component-maintenance-button4 {\n  margin: 4px 5px;\n}\n\n.component-maintenance-button1 {\n  background-color: gray;\n}\n.component-maintenance-button2 {\n  background-color: rgb(19, 114, 19);\n}\n.component-maintenance-button3 {\n  background-color: rgb(177, 177, 33);\n}\n.component-maintenance-button4 {\n  background-color: rgb(158, 33, 33);\n}\n\n.component-maintenance-item {\n  padding: 12px 0 0 10px;\n}\n\n/* elements tab*/\n\n.elements-segment-header {\n  margin: 8px 0px 0px 0px;\n  background-color: var(--hover-button-color1);\n  padding: 10px 4px 4px 8px;\n  border-bottom: solid 1px grey;\n  border-radius: 1px;\n}\n\n.component-elements-container {\n  display: flex;\n  background-color: var(--content-background-color);\n  border-bottom: solid 2px rgba(128, 128, 128, 0.2);\n}\n\n.component-elements-button2,\n.component-elements-button3,\n.component-elements-button4 {\n  margin: 4px 5px;\n}\n\n.component-elements-button2 {\n  background-color: rgb(177, 177, 33);\n}\n.component-elements-button3 {\n  background-color: rgb(146, 90, 16);\n}\n.component-elements-button4 {\n  background-color: rgb(158, 33, 33);\n}\n\n.component-elements-item {\n  padding: 12px 0 0 10px;\n}\n\n/* Hidden initially */\n.asset-containers,\n.bridge-component-containers,\n.bridge-alignment-containers,\n.bridge-approach-containers,\n.bridge-joints-containers,\n.bridge-railings-containers,\n.bridge-deck-containers,\n.bridge-super-containers,\n.bridge-sub-containers,\n.bridge-bearings-containers,\n.bridge-culvert-containers,\n.bridge-channel-containers,\n.bridge-scour-containers,\n.bridge-overtopping-containers,\n.bridge-wildlife-containers,\n.culvert-item-containers,\n.wall-item-containers,\n.element-content-containers {\n  display: none;\n}\n\n/* textarea */\n\n.textarea-containers {\n  width: 100%;\n  border: none;\n}\n\n.textarea-containers:hover,\n.textarea-containers:focus,\n.textarea-comments:focus {\n  background: rgba(91, 84, 122, 0.1);\n}\n\n.textarea-mirrors {\n  display: grid;\n  margin-left: 0px;\n  /* padding: 3px 5px 0 3px; */\n  text-align: left;\n}\n\n.textarea-mirrors::after {\n  content: attr(data-replicated-value) " ";\n  white-space: pre-wrap;\n  visibility: hidden;\n}\n\n.textarea-comments,\n.textarea-mirrors::after {\n  padding: 3px 5px 5px 3px;\n  padding: 0px;\n  font: inherit;\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n.textarea-comments {\n  resize: none;\n  border: none;\n  outline: none;\n  box-shadow: none;\n  background: transparent;\n  overflow: hidden;\n  transition: 3s;\n  color: rgb(172, 172, 172);\n  color: var(--text-color);\n}\n',""]);const c=i},919:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),l=t.n(c),m=new URL(t(377),t.b),u=i()(o()),s=l()(m);u.push([n.id,`/* ---------------------------- Defaults | Resets --------------------------------- */\n\n:root {\n  /* theme blue-grey*/\n  --main-background: url(${s});\n  --main-background-overlay: rgb(54 54 54 / 0.9);\n  --main-color: rgb(58 73 95 / 0.9);\n  --text-color: rgb(233 233 233);\n  --content-background-color: rgb(34 34 34 / 0.7);\n\n  /* primary buttons - background */\n  --active-button-color1: rgb(182 182 182);\n  --hover-button-color1: rgb(40 40 65);\n  --inactive-button-color1: rgb(47 47 77);\n  /* primary buttons - text */\n  --active-button-text-color1: rgb(42 42 42);\n  --hover-button-text-color1: var(--text-color);\n  --inactive-button-text-color1: var(--text-color);\n\n  /* secondary buttons - background */\n  --active-button-color2: rgb(200 200 200);\n  --hover-button-color2: rgb(58 88 74);\n  --inactive-button-color2: rgb(65 99 79);\n  /* secondary buttons - text */\n  --active-button-text-color2: rgb(42 42 42);\n  --hover-button-text-color2: var(--text-color);\n  --inactive-button-text-color2: var(--text-color);\n}\n\nhtml,\nheader,\ntextarea,\ninput,\nbutton,\ndiv,\np,\nli,\nul {\n  font-family: "Ubuntu", sans-serif;\n  font-family: "DM Sans", sans-serif;\n  font-family: "Roboto", sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: var(--text-color);\n}\n\nul {\n  margin: 0 0 0 -15px;\n  text-indent: -5px;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\na,\nspan {\n  font-family: "DM Sans", sans-serif;\n  font-family: "Roboto", sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  border: none;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n\n/* ---------------------------- HTML | Body --------------------------------- */\n\nhtml {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\nbody {\n  margin: 0px 10px 10px 10px;\n  margin: 0px 0px 0px 0px;\n  padding: 0;\n  height: 100%;\n  background-image: var(--main-background);\n  background-size: 100px 115px;\n}\n\n/* ---------------------------- Header | Main | Footer --------------------------------- */\n\n.header {\n  position: -webkit-sticky; /* Safari */\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 40px;\n  padding: 10px 0;\n  border: none;\n  border-bottom: solid 2px grey;\n  border-radius: 1px 1px 1px 1px;\n  z-index: 1;\n  overflow: hidden;\n  background-color: var(--main-color);\n  color: var(--text-color);\n}\n\n.header-tab-line {\n  overflow: hidden;\n  border: 1px solid transparent;\n  background-color: transparent;\n  padding: 0 0 0 16px;\n}\n\n/* buttons styled in a separate section. */\n\nmain {\n  position: fixed;\n  top: 62px;\n  height: calc(100% - 62px - 57px);\n  width: calc(100% - 20px);\n  width: 100%;\n  overflow-y: auto;\n  background-color: var(--main-background-overlay);\n  color: var(--text-color);\n}\n\n/* main containers styled in a separate section. */\n\n.footer {\n  position: fixed;\n  bottom: 0;\n  width: calc(100% - 20px); /* minus the padding on both sides */\n  width: 100%;\n  height: 35px;\n  padding: 10px 0;\n  border: none;\n  border-top: solid 2px grey;\n  border-radius: 1px 1px 1px 1px;\n  z-index: 1;\n  overflow: hidden;\n  background-color: var(--main-color);\n  color: var(--text-color);\n}\n\n.footer-spacer {\n  /* sits above footer to add a little blank space for extra scrolling */\n  height: 5px;\n  display: block;\n  margin-top: 5px;\n  background-color: none;\n}\n\n/* ---------------------------- Footer Logo --------------------------------- */\n\n.outer-container {\n  position: absolute;\n  left: 50%; /* Positions the top-left corner inside the parent */\n  transform: translate(-50%, 0%);\n  -ms-transform: translate(-50%, 0%); /* Adjusts the position based on width and height (left, top) */\n  width: 320px;\n  height: 30px;\n  cursor: default;\n}\n\n.inner-container {\n  margin: auto;\n  width: 290px;\n  height: 40px;\n  text-align: center;\n  display: flex;\n  padding-left: 0px; /* Margin (auto) and width values allow the object to be centered horizontally inside parent */\n}\n\n.footer-image-holder {\n  /* Logo */\n  width: 30px;\n  height: 60px;\n  margin: -6px 0 0 0;\n  padding: 0 0 0 0;\n  border: 3px solid rgb(12, 158, 158, 0);\n}\n\n.iterate-img {\n  padding-left: 0px;\n  height: 40px;\n  width: 40px;\n}\n\n.footer-text-holder {\n  /* Text */\n  width: 290px;\n  height: 60px;\n  margin: -4px 0 0 0;\n  padding: 4px 0 0 0;\n  border: 3px solid rgba(245, 144, 144, 0);\n}\n.ite-text {\n  color: rgba(158, 38, 158, 0.7);\n  color: rgba(167, 84, 167, 0.7);\n  text-shadow: 0 0 4px rgb(0, 0, 0), 3px 3px 4px rgb(0, 0, 0);\n  font-family: "Ubuntu", sans-serif;\n  font-size: 24px;\n  font-weight: bold;\n}\n.rate-text {\n  color: rgba(255, 55, 0, 0.7);\n  color: rgba(241, 89, 47, 0.7);\n  text-shadow: 0 0 4px rgb(0, 0, 0), 3px 3px 4px rgb(0, 0, 0);\n  font-family: "Ubuntu", sans-serif;\n  font-size: 24px;\n  font-weight: bold;\n}\n.trailing-text {\n  font-size: 12px;\n  color: rgb(224, 224, 224);\n  vertical-align: 2px;\n  text-shadow: 0 0 8px rgb(0, 0, 0), 3px 3px 8px rgb(0, 0, 0);\n}\n\n/* //////////////////////////////////////////////////////////////////////////////////////////// */\n\n/* Layout Styles */\n.layout-container {\n  display: flex;\n  height: calc(100vh - 80px); /* Full viewport height minus header/footer */\n  overflow: hidden;\n}\n\n.sidebar {\n  width: 250px;\n  background-color: #f4f4f4;\n  border-right: 1px solid #ddd;\n  padding: 10px;\n  transition: width 0.3s;\n  position: relative;\n}\n\n.sidebar.collapsed {\n  width: 60px;\n}\n\n.sidebar-nav {\n  margin-top: 20px;\n}\n\n.sidebar-button {\n  display: block;\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 5px;\n  background: #fff;\n  border: none;\n  text-align: left;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.sidebar-button:hover {\n  background: #e8e8e8;\n}\n\n/* Sidebar Toggle Button */\n.sidebar-toggle {\n  position: absolute;\n  top: 10px;\n  right: -20px;\n  background: #333;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n\n/* Main Content */\n.main-content {\n  flex-grow: 1;\n  padding: 20px;\n  overflow-y: auto;\n}\n\n.content-section {\n  display: none;\n}\n\n.content-section:not(.hidden) {\n  display: block;\n}\n\n/* Hidden Content */\n.hidden {\n  display: none;\n}\n`,""]);const d=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var m=0;m<n.length;m++){var u=[].concat(n[m]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],m=r.base?l[0]+r.base:l[0],u=a[m]||0,s="".concat(m," ").concat(u);a[m]=u+1;var d=t(s),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var b=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:s,updater:b,references:1})}i.push(s)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var l=r(n,o),m=0;m<a.length;m++){var u=t(a[m]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=l}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},377:(n,e,t)=>{n.exports=t.p+"assets/light-down-black2.b7f63a054494f6bcbf3a.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="/snbi_report_guide/",t.b=document.baseURI||self.location.href,t.nc=void 0;var r=document.getElementById("element-components-container");function o(n,e){var t=document.createElement("button");return t.className="component-elements-button".concat(n),t.textContent="CS".concat(n),t.dataset.buttonNumber="Element ".concat(e),t.dataset.buttonCategory="".concat(n),t.addEventListener("click",(function(n){return i(n)})),t}function a(n){var e=document.createElement("div");e.className="component-elements-container";for(var t=2;t<=4;t++){var r=o(t,n.number);e.appendChild(r)}var a=document.createElement("div");return a.className="component-elements-item",a.textContent="".concat(n.number,": ").concat(n.name),e.appendChild(a),e}function i(n){var e=n.target,t=e.getAttribute("data-button-number"),r=e.getAttribute("data-button-category"),o=e.getAttribute("data-button-name");t.includes("Element")&&(alert("Opening details for ".concat(t," at Condition State ").concat(r)),navigator.clipboard.writeText("Opening details for ".concat(t," at Condition State ").concat(r))),t.includes("Maintenance")&&(alert("Opening details for ".concat(o," at Deficiency Level ").concat(r)),navigator.clipboard.writeText("Opening details for ".concat(o," at Deficiency Level ").concat(r)))}r.innerHTML="",[{header:"Approach Slabs:",elements:[{number:320,name:"Prestressed Concrete Approach Slab",component:"Approach",material:"Prestressed Concrete"},{number:321,name:"Reinforced Concrete Approach Slab",component:"Approach",material:"Reinforced Concrete"}],containerID:"approach-elements-container"},{header:"Joints:",elements:[{number:300,name:"Strip Seal Expansion Joint",component:"Joint",material:"Other"},{number:301,name:"Pourable Joint Seal",component:"Joint",material:"Other"},{number:302,name:"Compression Joint Seal",component:"Joint",material:"Other"},{number:303,name:"Assembly Joint with Seal (Modular)",component:"Joint",material:"Other"},{number:304,name:"Open Expansion Joint",component:"Joint",material:"Other"},{number:305,name:"Assembly Joint without Seal",component:"Joint",material:"Other"},{number:306,name:"Other Joint",component:"Joint",material:"Other"}],containerID:"joints-elements-container"},{header:"Bridge Railings:",elements:[{number:330,name:"Metal Bridge Rail",component:"Bridge Rail",material:"Metal"},{number:331,name:"Reinforced Concrete Bridge Rail",component:"Bridge Rail",material:"Reinforced Concrete"},{number:332,name:"Timber Bridge Rail",component:"Bridge Rail",material:"Timber"},{number:333,name:"Other Bridge Rail",component:"Bridge Rail",material:"Other"},{number:334,name:"Masonry Bridge Rail",component:"Bridge Rail",material:"Masonry"}],containerID:"railings-elements-container"},{header:"Deck/Slabs:",elements:[{number:12,name:"Reinforced Concrete Deck",component:"Deck/Slab",material:"Reinforced Concrete"},{number:13,name:"Prestressed Concrete Deck",component:"Deck/Slab",material:"Prestressed Concrete"},{number:28,name:"Steel Open Grid Deck",component:"Deck/Slab",material:"Steel"},{number:29,name:"Steel Concrete Filled Grid Deck",component:"Deck/Slab",material:"Steel/Concrete"},{number:30,name:"Steel Corrugated or Orthotropic Deck",component:"Deck/Slab",material:"Steel"},{number:31,name:"Timber Deck",component:"Deck/Slab",material:"Timber"},{number:38,name:"Reinforced Concrete Slab",component:"Deck/Slab",material:"Reinforced Concrete"},{number:54,name:"Timber Slab",component:"Deck/Slab",material:"Timber"},{number:60,name:"Other Deck",component:"Deck/Slab",material:"Other"},{number:65,name:"Other Slab",component:"Deck/Slab",material:"Other"}],containerID:"deck-elements-container"},{header:"Protective Coatings - Wearing Surface:",elements:[{number:510,name:"Wearing Surfaces",component:"Protective Coating",material:"Other"}],containerID:"wearing-elements-container"},{header:"Superstructure:",elements:[{number:15,name:"Prestressed Concrete Top Flange",component:"Superstructure",material:"Prestressed Concrete"},{number:16,name:"Reinforced Concrete Top Flange",component:"Superstructure",material:"Reinforced Concrete"},{number:102,name:"Steel Closed Web/Box Girder",component:"Superstructure",material:"Steel"},{number:104,name:"Prestressed Concrete Closed Web/Box Girder",component:"Superstructure",material:"Prestressed Concrete"},{number:105,name:"Reinforced Concrete Closed Web/Box Girder",component:"Superstructure",material:"Reinforced Concrete"},{number:106,name:"Other Closed Web/Box Girder",component:"Superstructure",material:"Other"},{number:107,name:"Steel Girder/Beam",component:"Superstructure",material:"Steel"},{number:109,name:"Prestressed Concrete Girder/Beam",component:"Superstructure",material:"Prestressed Concrete"},{number:110,name:"Reinforced Concrete Open Girder/Beam",component:"Superstructure",material:"Reinforced Concrete"},{number:111,name:"Timber Open Girder/Beam",component:"Superstructure",material:"Timber"},{number:112,name:"Other Open Girder/Beam",component:"Superstructure",material:"Other"},{number:113,name:"Steel Stringer",component:"Superstructure",material:"Steel"},{number:115,name:"Prestressed Concrete Stringer",component:"Superstructure",material:"Prestressed Concrete"},{number:116,name:"Reinforced Concrete Stringer",component:"Superstructure",material:"Reinforced Concrete"},{number:117,name:"Timber Stringer",component:"Superstructure",material:"Timber"},{number:118,name:"Other Stringer",component:"Superstructure",material:"Other"},{number:120,name:"Steel Truss",component:"Superstructure",material:"Steel"},{number:135,name:"Timber Truss",component:"Superstructure",material:"Timber"},{number:136,name:"Other Truss",component:"Superstructure",material:"Other"},{number:141,name:"Steel Arch",component:"Superstructure",material:"Steel"},{number:142,name:"Other Arch",component:"Superstructure",material:"Other"},{number:143,name:"Prestressed Concrete Arch",component:"Superstructure",material:"Prestressed Concrete"},{number:144,name:"Reinforced Concrete Arch",component:"Superstructure",material:"Reinforced Concrete"},{number:145,name:"Masonry Arch",component:"Superstructure",material:"Masonry"},{number:146,name:"Timber Arch",component:"Superstructure",material:"Timber"},{number:147,name:"Steel Cable-Primary",component:"Superstructure",material:"Steel"},{number:148,name:"Steel Cable-Secondary",component:"Superstructure",material:"Steel"},{number:149,name:"Other Cable Secondary",component:"Superstructure",material:"Other"},{number:152,name:"Steel Floor Beam",component:"Superstructure",material:"Steel"},{number:154,name:"Prestressed Concrete Floor Beam",component:"Superstructure",material:"Prestressed Concrete"},{number:155,name:"Reinforced Concrete Floor Beam",component:"Superstructure",material:"Reinforced Concrete"},{number:156,name:"Timber Floor Beam",component:"Superstructure",material:"Timber"},{number:157,name:"Other Floor Beam",component:"Superstructure",material:"Other"},{number:161,name:"Steel Pin, Pin and Hanger Assembly, or Both",component:"Superstructure",material:"Steel"},{number:162,name:"Steel Gusset Plate",component:"Superstructure",material:"Steel"}],containerID:"super-elements-container"},{header:"Protective Coatings - Paint:",elements:[{number:515,name:"Steel Protective Coating",component:"Protective Coating",material:"Paint"}],containerID:"paint-elements-container"},{header:"Bearings:",elements:[{number:310,name:"Elastomeric Bearing",component:"Bearing",material:"Other"},{number:311,name:"Movable Bearing (roller, sliding, etc.)",component:"Bearing",material:"Steel"},{number:312,name:"Enclosed/Concealed Bearing",component:"Bearing",material:"Steel"},{number:313,name:"Fixed Bearing",component:"Bearing",material:"Steel"},{number:314,name:"Pot Bearing",component:"Bearing",material:"Steel"},{number:315,name:"Disk Bearing",component:"Bearing",material:"Steel"},{number:316,name:"Other Bearing",component:"Bearing",material:"Other"}],containerID:"bearings-elements-container"},{header:"Substructure:",elements:[{number:202,name:"Steel Column",component:"Substructure",material:"Steel"},{number:203,name:"Other Column",component:"Substructure",material:"Other"},{number:204,name:"Prestressed Concrete Column",component:"Substructure",material:"Prestressed Concrete"},{number:205,name:"Reinforced Concrete Column",component:"Substructure",material:"Reinforced Concrete"},{number:207,name:"Column Tower (Trestle)",component:"Substructure",material:"Other"},{number:210,name:"Reinforced Concrete Pier Wall",component:"Substructure",material:"Reinforced Concrete"},{number:211,name:"Other Pier Wall",component:"Substructure",material:"Other"},{number:213,name:"Masonry Pier Wall",component:"Substructure",material:"Masonry"},{number:215,name:"Reinforced Concrete Abutment",component:"Substructure",material:"Reinforced Concrete"},{number:217,name:"Masonry Abutment",component:"Substructure",material:"Masonry"},{number:218,name:"Other Abutment",component:"Substructure",material:"Other"},{number:219,name:"Steel Abutment",component:"Substructure",material:"Steel"},{number:220,name:"Reinforced Pile Cap/Footing",component:"Substructure",material:"Reinforced Concrete"},{number:225,name:"Steel Pile",component:"Substructure",material:"Steel"},{number:226,name:"Prestressed Concrete Pile",component:"Substructure",material:"Prestressed Concrete"},{number:227,name:"Reinforced Concrete Pile",component:"Substructure",material:"Reinforced Concrete"},{number:228,name:"Timber Pile",component:"Substructure",material:"Timber"},{number:229,name:"Other Pile",component:"Substructure",material:"Other"},{number:231,name:"Steel Pier Cap",component:"Substructure",material:"Steel"},{number:233,name:"Prestressed Concrete Pier Cap",component:"Substructure",material:"Prestressed Concrete"},{number:234,name:"Reinforced Concrete Pier Cap",component:"Substructure",material:"Reinforced Concrete"},{number:235,name:"Timber Pier Cap",component:"Substructure",material:"Timber"},{number:236,name:"Other Pier Cap",component:"Substructure",material:"Other"}],containerID:"sub-elements-container"},{header:"Culvert:",elements:[{number:240,name:"Steel Culvert",component:"Culvert",material:"Steel"},{number:241,name:"Reinforced Concrete Culvert",component:"Culvert",material:"Reinforced Concrete"},{number:242,name:"Timber Culvert",component:"Culvert",material:"Timber"},{number:243,name:"Other Culvert",component:"Culvert",material:"Other"},{number:244,name:"Masonry Culvert",component:"Culvert",material:"Masonry"},{number:245,name:"Prestressed Concrete Culvert",component:"Culvert",material:"Prestressed Concrete"}],containerID:"culvert-elements-container"}].forEach((function(n){var e=document.createElement("div");e.className="elements-segment-header",e.textContent=n.header,r.appendChild(e);var t=document.getElementById(n.containerID);n.elements.forEach((function(n){var e=a(n),o=a(n);r.appendChild(e),t.appendChild(o)}))}));function c(n,e,t){var r=document.createElement("button");r.id="".concat(t,"-bt").concat(n.number,"-").concat(e),r.className="component-maintenance-button".concat(e),r.textContent="+",r.setAttribute("data-button-number","Maintenance Item ".concat(n.number));var o=["Grey","Green","Yellow","Red"][e-1]||"Red";return r.setAttribute("data-button-category",o),r.setAttribute("data-button-name",n.name),r.addEventListener("click",(function(n){return i(n)})),r}function l(n,e,t){var r=document.getElementById(e);r.innerHTML="";var o=document.createElement("div");o.className="elements-segment-header",o.textContent="Maintenance Items:",r.appendChild(o),n.forEach((function(n){var e=function(n,e){var t=document.createElement("div");t.className="component-maintenance-container";for(var r=1;r<=4;r++){var o=c(n,r,e);t.appendChild(o)}var a=document.createElement("div");return a.className="component-maintenance-item",a.textContent=n.name,t.appendChild(a),t}(n,t);r.appendChild(e)}))}l(["Approach Repair","Attenuator Repair","Bearing Repair","Brush Cutting / Herbicide Spray","Channel Debris Removal","Concrete Crack Seal","Deck Cleaning and Flushing","Deck Patch","Drain Repair","Erosion Control / Riprap","Graffiti Removal","Guardrail / Barrier Wall Repair","Joint Repair","Signage Install / Signage Repair","Substructure Cleaning and Flushing","Substructure Repair","Superstructure Cleaning and Flushing","Superstructure Repair"].map((function(n,e){return{number:e+1,name:n}})),"maintenance-container","bridge-maintenance"),[{tasks:[{number:2,name:"Attenuator Repair"},{number:14,name:"Signage Install / Signage Repair"}],containerID:"alignment-maintenance-container"},{tasks:[{number:1,name:"Approach Repair"}],containerID:"approach-maintenance-container"},{tasks:[{number:13,name:"Joint Repair"}],containerID:"joints-maintenance-container"},{tasks:[{number:2,name:"Attenuator Repair"},{number:11,name:"Graffiti Removal"},{number:12,name:"Guardrail / Barrier Wall Repair"}],containerID:"railings-maintenance-container"},{tasks:[{number:6,name:"Concrete Crack Seal"},{number:7,name:"Deck Cleaning and Flushing"},{number:8,name:"Deck Patch"},{number:9,name:"Drain Repair"}],containerID:"deck-maintenance-container"},{tasks:[{number:11,name:"Graffiti Removal"},{number:14,name:"Signage Install / Signage Repair"},{number:17,name:"Superstructure Cleaning and Flushing"},{number:18,name:"Superstructure Repair"}],containerID:"super-maintenance-container"},{tasks:[{number:3,name:"Bearing Repair"}],containerID:"bearings-maintenance-container"},{tasks:[{number:2,name:"Attenuator Repair"},{number:11,name:"Graffiti Removal"},{number:14,name:"Signage Install / Signage Repair"},{number:15,name:"Substructure Cleaning and Flushing"},{number:16,name:"Substructure Repair"}],containerID:"sub-maintenance-container"},{tasks:[{number:6,name:"Concrete Crack Seal"},{number:18,name:"Superstructure Repair"},{number:16,name:"Substructure Repair"}],containerID:"culvert-maintenance-container"},{tasks:[{number:4,name:"Brush Cutting / Herbicide Spray"},{number:5,name:"Channel Debris Removal"},{number:10,name:"Erosion Control / Riprap"}],containerID:"channel-maintenance-container"}].forEach((function(n){l(n.tasks,n.containerID,"maintenance")}));var m=t(72),u=t.n(m),s=t(825),d=t.n(s),p=t(659),b=t.n(p),g=t(56),h=t.n(g),x=t(540),f=t.n(x),v=t(113),S=t.n(v),y=t(919),C={};C.styleTagTransform=S(),C.setAttributes=h(),C.insert=b().bind(null,"head"),C.domAPI=d(),C.insertStyleElement=f(),u()(y.A,C),y.A&&y.A.locals&&y.A.locals;var k=t(365),w={};w.styleTagTransform=S(),w.setAttributes=h(),w.insert=b().bind(null,"head"),w.domAPI=d(),w.insertStyleElement=f(),u()(k.A,w),k.A&&k.A.locals&&k.A.locals;var R=document.querySelector("#bridge-alignment-pg1 .content-container-paragraphs");if(R){var P=DOMPurify.sanitize('<p>\n                  Thissssss item identifies bridges that do not function adequately due to the horizontal or vertical alignment of the bridge and approach roadway. It is not intended\n                  that the alignment be compared to current standards, but rather to the existing roadway alignment.\n                </p>\n                <br />\n                <p>\n                  The basic criterion is how the alignment of the bridge and approach roadway relates to the general highway alignment for the section of highway the bridge\n                  carries.\n                </p>\n                <br />\n                <p>Do not consider speed reductions due to the bridge width or intersecting highways when reporting this item.</p>\n                <br />\n                <p>The operating speed reduction is in comparison to the posted speed limit for the highway segment:</p>\n                <ul class="content-container-paragraphs-ul">\n                  <li>Use code G when the operating speed is no different at the bridge than the rest of the highway segment that crosses the bridge.</li>\n                  <li>Use code F when the operating speed is noticeably different at the bridge than the rest of the highway segment that crosses the bridge.</li>\n                  <li>Use code P when the operating speed is substantially different at the bridge than the rest of the highway segment that crosses the bridge.</li>\n                </ul>');R.innerHTML=P,console.log("Sanitization complete and inserted.")}else console.log("Container element not found.");function O(n){for(var e=n.currentTarget,t=e.dataset.target,r=e.dataset.containerClass,o=e.dataset.buttonClass,a=document.getElementsByClassName(r),i=0;i<a.length;i++)a[i].style.display="none";for(var c=document.getElementsByClassName(o),l=0;l<c.length;l++)c[l].classList.remove("active");document.getElementById(t).style.display="block",e.classList.add("active")}function D(n){var e=n.currentTarget.innerHTML;navigator.clipboard.writeText(e).catch((function(n){console.error("Error copying text: ",n)}))}function T(n){var e=n.currentTarget;navigator.clipboard.readText().then((function(n){e.value+=n})).catch((function(n){console.error("Error pasting text: ",n)}))}["asset-buttons","bridge-component-buttons","bridge-alignment-buttons","bridge-approach-buttons","bridge-joints-buttons","bridge-railings-buttons","bridge-deck-buttons","bridge-super-buttons","bridge-bearings-buttons","bridge-sub-buttons","bridge-culvert-buttons","bridge-channel-buttons","bridge-scour-buttons","bridge-overtopping-buttons","bridge-wildlife-buttons","bridge-elements-buttons","bridge-maintenance-buttons","bridge-review-buttons","element-item-buttons","culvert-item-buttons","wall-item-buttons"].forEach((function(n){document.querySelectorAll(".".concat(n)).forEach((function(n){n.addEventListener("click",O)}))})),document.querySelectorAll(".content-container-comment-lines").forEach((function(n){n.addEventListener("click",D)})),document.querySelectorAll(".textarea-comments").forEach((function(n){n.addEventListener("dblclick",T)})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".textarea-comments").forEach((function(n){n.addEventListener("input",(function(e){var t,r;t=n.id,(r=document.getElementById(t)).parentNode.dataset.replicatedValue=r.value}))}))}))})();