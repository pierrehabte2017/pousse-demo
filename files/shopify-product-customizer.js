!function(){"use strict";var i={t:"https://www.printful.com",appName:"printful",i:function(){var t="";if(document.currentScript)t=document.currentScript.src;else for(var e=document.getElementsByTagName("script"),i=0;i<e.length;i++)if(/shopify-product-customizer.js/i.test(e[i].src)){t=e[i].src;break}var o=t.indexOf("?");if(t=0<o?t.substring(0,o):t){if(-1==t.indexOf(this.appName)||-1!==t.indexOf("cdn.printful.com"))return this.t;var o="http://",n=(0==(t=0==t.indexOf("http://")?t.replace("http://",""):t).indexOf("https://")&&(t=t.replace("https://",""),o="https://"),0==t.indexOf("//")&&(t=t.replace("//",""),o="https://"),t.split("/").shift());n&&(this.t=o+n)}return this.t}},s={o:null,u:{h:{p:"Personalizar diseño",fr:"Personnaliser le design",l:"Design personalisieren",m:"Personalizza le grafiche",g:"デザインをカスタマイズ"},v:{p:"Crear diseño personalizado",fr:"Créer un design personnalisé",l:"Erstelle ein personalisiertes Design",m:"Crea grafiche personalizzate",g:"カスタムデザインを追加"}},translate:function(t){return!this.o&&document&&document.documentElement&&(this.o=document.documentElement.lang),this.o=this.o||"en",this.u[t]&&this.u[t][this.o]?this.u[t][this.o]:t}},r=({A:{t:"https://www.printful.com",C:s.translate("Personalize design")},P:null,form:null,I:null,S:null,B:null,init:function(){this.A.t=i.i(),this.A.D=this.A.t+"/product-customizer/",this.P=void 0!==Shopify.shop?Shopify.shop:null;var t=document.querySelectorAll('form[action$="/cart/add"]');0===t.length?console.log("Valid checkout form not found"):(this.form=Array.from(t).find(function(t){if(0<t.querySelectorAll('[type="submit"]').length)return t}),this.form?(0<(t=this.form.querySelectorAll('[type="submit"]')).length&&(this.S=t[0]),this.U()?(this.B=this._(),this.M()):document.querySelector(".pf-customisable-product")&&(this.N(),this.M())):console.log("Add to cart button missing on form"))},N:function(){this.B=this.k(),this.S.parentNode.insertBefore(this.B,this.S.nextSibling)},M:function(){this.B.onclick=this.R.bind(this),this.S&&(this.B.disabled=this.S.disabled,new MutationObserver(function(t){t.forEach(function(t){"attributes"===t.type&&"disabled"===t.attributeName&&(this.B.disabled=this.S.disabled)}.bind(this))}.bind(this)).observe(this.S,{attributes:!0}))},_:function(){return document.getElementById("pfCustomizeProductBtn")},U:function(){return!!this._()},k:function(){var t=document.createElement("button");return t.innerText=this.A.C,t.setAttribute("class","btn button"),t.setAttribute("style","margin: 5px 0;"),t.setAttribute("id","pfCustomizeProductBtn"),t},R:function(t){t.preventDefault();var t=!1,e=this.form.querySelectorAll('select[name="id"]');if(0<e.length)t=e[0].options[e[0].selectedIndex].value;else{var e=this.form.querySelectorAll('input[name="id"]');if(0==e.length)return;t=e[0].value}t&&(e=this.A.D+"?store="+this.P+"&variant="+t,document.body.appendChild(this.F(e)),this.K())},K:function(){var t=window.addEventListener?"addEventListener":"attachEvent";(0,window[t])("attachEvent"==t?"onmessage":"message",function(t){t.origin===this.A.t&&void 0!==t.data.action&&"PFProductCustomized"===t.data.action&&this.T(t.data.hash)}.bind(this))},T:function(t){var e,i;t&&(0<(e=this.form.querySelectorAll('[name="properties[customisationId]"]')).length?i=e[0]:((i=document.createElement("input")).type="hidden",i.name="properties[customisationId]",this.form.appendChild(i)),i.value=t),this.form.submit()},F:function(t){this.G();var e=!1,i=!(!window.navigator||!window.navigator.userAgent)&&window.navigator.userAgent,i=(i&&i.match(/iPhone|iPad|iPod/i)&&(e=!0),document.createElement("div")),o=(i.className="pf-customize-modal",i.setAttribute("style","position: fixed; z-index: 2147483648; padding: 20px; top: 0; width: 100%; height: 100%; left: 0; background: rgba(0, 0 , 0, 0.6); box-sizing: border-box;"),document.createElement("div")),n=(o.setAttribute("style","padding: 15px; border-bottom: 1px solid #e5e5e5; overflow:hidden; position:absolute; top:0; left:0; width:100%; box-sizing: border-box;"),document.createElement("button")),r=(n.onclick=this.G.bind(this),n.setAttribute("style","height:30px; width:30px; cursor:pointer; border:0px; background:0 0; padding:0; -webkit-appearance:none; color:#000; float:right; background:none;"),document.createElement("img")),r=(r.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAgVJREFUaAXtmU2KwkAQhZ0hQbyDu7mIB3PhwoN5EXfeIYguJo9JQRMydurnNYxTDTH+dNWr71VD2mSzyZEOpAPpQDqQDqQD6UA6kA6kA80dOJ1O++Px+NVKGFrQ9Oh9WoMhPAzD5fF4XFpAQwNa0PRAf1iABXaMle7e+r4/nM/nqyVfLUZgx3nS3etutzuMddxqsfPf1cALsJKTAr0AK3omaPWSfj6f21ERx3zso5f3C1hob6da5nW8/KzuMLJVCgnpNEvDBMyGZsGibjMwC5oJ6waOhmbDhgBHQbeADQP2QreCDQW2QreEDQfWQreGpQCvhcY8bFTGk2wX8ZWMkGu5JCvPrstSmWj+vta9aX5TWGjSgJG8Ao0p80HrrAhRgSGigKbDoh468EroJrCoRf1vCUF/edA7/K+WtAJWFg19adM6XIGVWzPvcVmqweL+F1r6FhuPNbBys08zV9a89xy6pC0AlhgPdBiwp3BPrBY+BDii4Igca+DdwJGFRub6Dd4FzCiQkbOENwMzC2PmNgEzC5JusDTUwKxCBLQ8M7TU/5a6rruPReGYj/B9MDYo065MtqKl5n2qpfyu+l7dYWRceIIYDltWvtBp05ND5DQBI7CA3jKfDUMLo4C+W58N/2RyvAIahThSqEKhBU1VUE5OB9KBdCAdSAfSgXQgHUgH0oEQB74BG1sUIwNoL3cAAAAASUVORK5CYII=",r.setAttribute("style","height:30px; width:30px;"),n.appendChild(r),o.appendChild(n),document.createElement("h4")),n=(r.className="product-customizer__header-title",r.setAttribute("style","float: left;font-weight:bold;font-size:23px;color:#222;line-height:30px;margin:0px;"),r.innerText=s.translate("Create a personalized design"),o.appendChild(r),document.createElement("div")),r=(n.setAttribute("style","background-color: #fff; width: 100%; height: 100%;overflow:hidden;position:relative"),n.appendChild(o),document.createElement("style")),o=(r.innerHTML="@media screen and (max-width: 768px) { .product-customizer__header-title {font-size: 16px !important;} }",n.appendChild(r),i.appendChild(n),document.createElement("iframe"));return o.src=t,o.width="100%",o.height="100%",e?((r=document.createElement("div")).setAttribute("style","-webkit-overflow-scrolling: touch; overflow: scroll; height: 100%; top: 61px; box-sizing: border-box; position: absolute; width: 100%; padding-bottom: 60px;"),o.setAttribute("style","border: 0; box-sizing: border-box;"),r.appendChild(o),n.appendChild(r)):(o.setAttribute("style","border: 0; padding-top: 60px; box-sizing: border-box;"),n.appendChild(o)),this.I=i},G:function(){this.I&&(this.I.parentNode.removeChild(this.I),this.I=null)}}.init(),{A:{t:"https://www.printful.com"},J:["customisationId:","customisationId"],init:function(){this.A.t=i.i(),this.L();var e=this;new MutationObserver(function(t){t.forEach(function(){e.L()})}).observe(document.body,{childList:!0,subtree:!0})},L:function(){var t=document.querySelectorAll('form[action="/cart"]');this.O(t)},O:function(t){for(var e=0;e<t.length;e++){var i=t[e];i.classList.contains("pf-form-processed")||(i.classList.add("pf-form-processed"),this.W(i))}},W:function(t){for(var e=t.childNodes,i=0;i<e.length;i++){var o=e[i];o.nodeType==Node.TEXT_NODE?this.V(o):this.W(o)}},V:function(t){for(var e,i,o=0;o<this.J.length;o++){var n=this.J[o];-1!=t.textContent.indexOf(n)&&(t.textContent=t.textContent.replace(n,""))}-1!=t.textContent.indexOf("pfc_")&&(e=t.textContent.indexOf("pfc_"),i=(e=t.textContent.substring(e,e+32+4)).substring(4,36),t.textContent=t.textContent.replace(e,""),this.X(t.parentNode,this.A.t+r.j,!0),this.q(t.parentNode,this.A.t+r.j,!0),this.Y(i,t),0==t.parentNode.textContent.trim().length)&&t.parentNode.tagName&&(t.parentNode.style.display="none")},Y:function(t,e){var i=new XMLHttpRequest,e=(i.onload=function(t,e,i){var o;200==this.status&&((o=JSON.parse(this.responseText).result.image)?(i.X(t.parentNode,o,!0),i.q(t.parentNode,o,!0)):setTimeout(function(){i.Y(e,t)},2e3))}.bind(i,e,t,this),this.A.t+"/rpc/product-customizer-rpc/get-thumb");i.open("POST",e,!0),i.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8"),i.send("hash="+t)},X:function(t,e,i){return this.H(t,e,i,function(t,e){return"IMG"==t.tagName&&(t.src=e,t.setAttribute("data-widths","[800]"),t.setAttribute("data-srcset",e+" 800w"),t.setAttribute("srcset",e+" 800w"),!0)})},q:function(t,e,i){return this.H(t,e,i,function(t,e){return"A"==t.tagName&&0<t.style.backgroundImage.length&&(t.style.backgroundImage="url("+e+")",!0)})},H:function(t,e,i,o){if(!t)return!1;if(t.classList.contains("pf-form-processed"))return console.warn("Looks like image was not replaced"),!0;for(var n=0;n<t.children.length;n++){var r=t.children[n];if(o(r,e))return!0;if(this.H(r,e,!1,o))return!0}return!!i&&this.H(t.parentNode,e,!0,o)}});r.j="/static/images/product-customizer/loading.gif",r.init(),{A:{t:"https://api.printful.com"},form:null,init:function(){var t;"undefined"!=typeof pfEdt&&pfEdt&&(t=i.i(),this.A.t=t.replace("www.","api."),this.P=void 0!==Shopify.shop?Shopify.shop:null,0!==(t=document.querySelectorAll('form[action$="/cart/add"]')).length)&&(this.form=Array.from(t).find(function(t){return 0<t.querySelectorAll('[type="submit"]').length||0<t.querySelectorAll('[class*="add-to-cart"], [class*="cart-submit"], [class*="form__submit"], [class*="submit"]').length?t:void 0}),this.Z())},$:function(t){var e,i=document.createElement("div");i.classList.add("edt"),i.style.width="100%",i.style.textAlign="center",i.style.marginTop="8px",i.style.padding="0 8px";return"undefined"!=typeof pfEdtUseDefaultStyling&&(pfEdtUseDefaultStyling?(e=document.querySelector("p"))&&(i.style.color=e.style.color):("undefined"!=typeof pfEdtTextColor&&(i.style.color=pfEdtTextColor),"undefined"!=typeof pfEdtBackgroundColor&&(i.style.backgroundColor=pfEdtBackgroundColor),"undefined"!=typeof pfEdtBorderColor&&(i.style.border="1px solid "+pfEdtBorderColor),"undefined"!=typeof pfEdtTextAlignment&&(i.style.textAlign={0:"center",1:"left",2:"right"}[pfEdtTextAlignment]))),pfEdtFlags[t.result.countryCode]?i.innerHTML=t.result.html.replace("{img}",'<img src="'+pfEdtFlags[t.result.countryCode]+'" style="height: 1em; width: 1.5em; margin-bottom: -0.125em;">'):i.innerHTML=t.result.html.replace("{img}",""),i},tt:function(){var t=Shopify.locale+"_"+pfProductId;return"undefined"!=typeof pfSyncProductIdentity&&(t+="_"+pfSyncProductIdentity),t},et:function(){var t=Shopify.locale+"_edtCached_"+pfProductId;return"undefined"!=typeof pfSyncProductIdentity&&(t+="_"+pfSyncProductIdentity),t},Z:function(){try{if(e=localStorage.getItem(this.tt())){var t=Number(localStorage.getItem(this.et()));if(Date.now()-144e5<t)return void((e=JSON.parse(e)).result&&e.result.html&&(i=this.$(e),this.form.appendChild(i)))}}catch(t){}var e,i,t=new XMLHttpRequest;t.onload=function(t){if(200==this.status){var e,i=JSON.parse(this.responseText);if(i.result)if(i.result.is_success||"internal_server_error"!=i.result.reason_code){try{localStorage.setItem(t.tt(),this.responseText),localStorage.setItem(t.et(),Date.now().toString())}catch(t){}i.result&&i.result.html&&(e=t.$(i),t.form.appendChild(e))}else console.log(i.result.reason)}}.bind(t,this),"undefined"!=typeof pfProductId&&"object"!=typeof pfProductId&&pfProductId&&(e=null,"undefined"!=typeof pfSyncProductIdentity&&(e=pfSyncProductIdentity),i=this.A.t+"/estimate-delivery-time?productId="+pfProductId+"&locale="+Shopify.locale+"&storeIdentity="+Shopify.shop,e&&(i+="&productIdentity="+e),t.open("GET",i,!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8"),t.send())}}.init()}();