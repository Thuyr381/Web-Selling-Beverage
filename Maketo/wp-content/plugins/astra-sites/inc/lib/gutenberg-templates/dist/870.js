"use strict";(self.webpackChunkast_block_templates=self.webpackChunkast_block_templates||[]).push([[870],{7870:function(e,t,o){o.r(t),o.d(t,{default:function(){return $}});var a=o(5711),s=o(5940),r=o(7363),n=o(8195),l=o(5302),c=o(1882),i=o(8096),p=o(5868),m=o(4142),u=o(9148),d=o(6128),g=o(1569),b=o(5622),f=o(8680),h=o(1277),y=o(7712),k=o(6302);const{post:v}=wp.ajax,{parse:I}=wp.blocks,{bypassAuth:w}=ast_block_template_vars;var _=(0,a.Z)((0,s.Z)((e=>{const{getImportItemInfo:t,getCurrentScreen:o,getSitePreview:a,getActiveBlockPaletteSlug:s,getActivePagePaletteSlug:r,getDisableAi:n,getAdaptiveMode:l}=e("ast-block-templates");return{importItemInfo:t(),sitePreview:a(),currentScreen:o(),activeBlockPaletteSlug:s(),activePagePaletteSlug:r(),disableAI:n(),adaptiveMode:l()}})),(0,i.Z)((e=>{const{setImportItemInfo:t,setTogglePopup:o,setOnboardingAiPopup:a}=e("ast-block-templates"),{insertBlocks:s}=wp.data.dispatch("core/block-editor");return{setImportItemInfo:t,onSetTogglePopup:o,insertBlocks:s,setOnboardingAiPopup:a}})))((0,r.memo)((e=>{let{setImportItemInfo:t,requiredPlugins:o,importItemInfo:a,title:s,btnClass:i,insertBlocks:_,onSetTogglePopup:P,item:E,onClick:S,onBlockImport:x,activeBlockPaletteSlug:A,activePagePaletteSlug:R,currentScreen:N,disableAI:C,importing:$=!1,adaptiveMode:T,showIcon:j=!0}=e,[B]=(0,r.useState)(a),O=o||[];const Z=i||"",[L]=(0,r.useState)(s||"Import"),{index:D}=wp.data.select("core/block-editor").getBlockInsertionPoint(),{importInProgress:q,syncLibNotice:M,stepData:{token:z}}=(0,l.Z)((e=>{const{getImportInProgress:t,getNotice:o,getAIStepData:a}=e(k.L);return{importInProgress:t(),syncLibNotice:o(),stepData:a()}}),[]),{setImportInProgress:F,toggleConnectZipAI:W}=(0,c.Z)(k.L),H="info"===M?.type,K=(0,n.gt)(),Q=(e,t,o)=>{(0,h.Am)((0,y.Z)({title:e,message:t}),y.Z.getOptions({type:o}))},U=async()=>{try{await(0,u.j)({slug:"ultimate-addons-for-gutenberg",init:"ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php",name:"Spectra"})}catch(e){F(!1),Q("Import failed!","Spectra activation failed!","error")}},V=()=>{(0,u.j)({slug:"wpforms-lite",init:"wpforms-lite/wpforms.php",name:"WPForms Lite"}).then((()=>{Y()})).catch((()=>{F(!1),Q("Import failed!","WPForms activation failed!","error")}))},G=()=>{const e=B.original_content,t="all-blocks-grid"===N?"block":"page",o="block"===t?B["blocks-category"][0]:B["pages-category"][0];v({action:"ast_block_templates_import_block",content:e,category:o,_ajax_nonce:ast_block_template_vars._ajax_nonce,style:"all-blocks-grid"===N?A:R,disableAI:C,block_type:t,adaptiveMode:T}).done((e=>{F(!1);const t=(0,n.CN)(I(e));_(t,D,"",!1),J(t[0].clientId),P(),document.getElementById("ast-block-templates-modal-wrap").classList.remove("open"),document.body.classList.remove("ast-block-templates-modal-open"),(K.inactive||K.notInstalled)&&(0,b.iP)(),"function"==typeof x&&x(e,D)})).fail((()=>{F(!1),Q("Import failed!","Failed to import the block. Please try again later or contact support for assistance.","error")}))},J=e=>{e&&setTimeout((()=>{const t=X(),o="block-"+e,a=t.getElementById(o);a&&a.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2500)},X=()=>{const e=document.getElementsByClassName("is-tablet-preview"),t=document.getElementsByClassName("is-mobile-preview");if(0!==e.length||0!==t.length){const o=e[0]||t[0];let a=!1;o&&(a=o.getElementsByTagName("iframe")[0]);const s=a?.contentWindow.document||a?.contentDocument;if(s)return s}return document},Y=()=>{B?.["post-meta"]?.["astra-site-wpforms-path"]||""?v({action:"ast_block_templates_import_wpforms",id:B.id,_ajax_nonce:ast_block_template_vars._ajax_nonce}).done((()=>{G()})).fail((()=>{F(!1),Q("Import failed!","WPForms import failed!","error")})):G()};return React.createElement(p.Z,{className:(0,n.AK)("min-w-[4.875rem] h-7 hover:shadow-small sp-text-sm",Z,(q&&!$||H)&&"opacity-50 cursor-not-allowed"),type:"button",variant:"primary",onClick:z||w?async e=>{q||H||(F(!0),"function"==typeof S&&S(e),K.notInstalled?await(async()=>{try{await(0,u.H)({slug:"ultimate-addons-for-gutenberg",init:"ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php",name:"Spectra"}),await U()}catch(e){F(!1),Q("Import failed!","Spectra installation failed!","error")}})():K.inactive&&await U(),(0,g.I)(E.ID,"astra-blocks").then((e=>{t(e),B=e,O=e?.["post-meta"]?.["astra-blocks-required-plugins"]?d.t.parse(e["post-meta"]["astra-blocks-required-plugins"]):[],O.length?"not-installed"===ast_block_template_vars.wpforms_status?(0,u.H)({slug:"wpforms-lite",init:"wpforms-lite/wpforms.php",name:"WPForms Lite"}).then((()=>{V()})).catch((()=>{F(!1),Q("Import failed!","WPForms installation failed!","error")})):"inactive"===ast_block_template_vars.wpforms_status?V():Y():Y()})).catch((e=>{Q("Import failed!",e,"error"),F(!0)})))}:async()=>{W(),(0,n.jw)("ast-import",{blockId:E.ID,blockType:E.type,blockPaletteSlug:A,pagePaletteSlug:R})},isSmall:!0,hasPrefixIcon:!$&&j},$?React.createElement(m.Z,{className:"h-4 w-4 !shrink-0"}):React.createElement(React.Fragment,null,j&&React.createElement(f.Z,{className:"h-4 w-4 !shrink-0"}),React.createElement("span",{className:"truncate"},L)))}))),P=o(168);const E=e=>{const t=["skip","logo","fav-icon"];for(const o of t)if(e.includes(o))return!0;return!1},S={linearTween(e,t,o,a){return o*e/a+t},easeInQuad(e,t,o,a){return o*(e/=a)*e+t},easeOutQuad(e,t,o,a){return-o*(e/=a)*(e-2)+t},easeInOutQuad(e,t,o,a){return(e/=a/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t},easeInCubic(e,t,o,a){return o*(e/=a)*e*e+t},easeOutCubic(e,t,o,a){return e/=a,o*(--e*e*e+1)+t},easeInOutCubic(e,t,o,a){return(e/=a/2)<1?o/2*e*e*e+t:o/2*((e-=2)*e*e+2)+t}};Object.seal(S);var x=S,A=o(3066);const{spectra_common_styles:R,is_rtl:N}=ast_block_template_vars,C="visible";var $=(0,a.Z)((0,s.Z)((e=>{const{getDisableAi:t,getDisablePreview:o,getTogglePopup:a}=e("ast-block-templates");return{disableAi:t(),disablePreview:o(),togglePopup:a()}})))((0,r.memo)((e=>{let{item:t,content:o,stylesheet:a,astraCustomizer:s,globalStylesheet:l,colorPalette:c,dynamicContent:i,selectedImages:p,disableAi:m,togglePopup:u,email:d,phone:g,address:b}=e;const f=(0,r.useRef)(null),h=(0,r.useRef)(null),y=t["thumbnail-image-url"]||"",k=t["featured-image-url"]||"",v=(0,n.gt)();let I=0,w=0,S=0;const[$,T]=(0,r.useState)({importing:!1}),[j,B]=(0,r.useState)(`${ast_block_template_vars.uri}dist/placeholder_200_200.png`),[O,Z]=(0,r.useState)(`${ast_block_template_vars.uri}dist/placeholder_200_200.png`);function L(){const e=f?.current,t=h?.current;if(!e||!t)return;const o=e.parentNode.offsetWidth/1200,a=o*t.offsetHeight;e.style.transform=`scale(${o})`,e.style.height=`${a}px`}(0,r.useLayoutEffect)((()=>{let e=!0;const t={landscape:[],portrait:[]};p?.forEach((e=>{"landscape"===e.orientation?t.landscape.push(e):t.portrait.push(e)}));const r=t,n=new Image;n.src=y;const u=new Image;u.src=k;const f=h.current;function v(t,o){e&&(t.onload=()=>{o(t.src)})}v(n,B),v(u,Z);const _=document.getElementById("astra-wp-editor-styles-inline-css")?.textContent.replace(/:root/g,".block-container").replace(/body/g,".block-container"),P=document.getElementById("astra-block-editor-styles-inline-css")?.textContent.replace(/:root/g,".block-container").replace(/body/g,".block-container");let x="";var A,N,$;if(a&&(A=a,N=r?.landscape,a=m?A:0!==Object.keys(i).length&&i?N&&0===N.length?A:A.replace(/background-image\s*:\s*url\(['"]?([^'")]+)['"]?\)/g,(function(e,t){if(E(t))return e;if(!N[S]?.url)return"";const o=N[S]?.url;return S++,S%=N.length,'background-image: url("'+o+'")'})):A),x+=s?`<style type="text/css" id="gt-astra-customizer">${s}</style>`:"",x+=`<style type="text/css" id="gt-spectra-common-stylesheet">${R}</style>`,x=a?`${x} <style type="text/css" id="gt-common-stylesheet">${a}</style>`:x,l&&(x+=`<style type="text/css" id="gt-global-stylesheet"> ${l} </style>`),_&&(x+=`<style type="text/css" id="gt-wpeditor-css" > ${_} </style>`),P&&(x+=`<style type="text/css" id="gt-blockeditor-css"> ${P} </style>`),f&&o){let e=f.shadowRoot;if(null===e&&(e=f.attachShadow({mode:"open"})),null===e)return;let t=o;if(!m){const e=i??[];e&&Object.keys(e)?.length>0&&Object.keys(e).forEach((o=>{t=null!==e[o]?t.replace(o,e[o]):t})),i&&Object.keys(i).length>0&&($=t,d&&($=$.replace("contact@example.com",d)),g&&($=$.replace("202-555-0188",g)),b&&($=$.replace("2360 Hood Avenue, San Diego, CA, 92123",b)),t=$,t=q(t))}e.innerHTML=x+'<div class="st-block-container">'+t+"</div>",c.forEach(((t,o)=>{e?.host.style.setProperty(`--ast-global-color-${o}`,t)}));const a=f.shadowRoot.querySelectorAll("img");e&&(a.forEach((e=>{E(e.src)||m||0===r.landscape.length||0===r.portrait.length||0===Object.keys(i).length||!i||D(e,"hidden")})),L(),((e,t)=>{if(m)return;if(0===Object.keys(i).length||!i)return;const o=t.landscape?t.landscape:[],a=t.portrait?t.portrait:[];0!==o.length&&0!==a.length&&e?.forEach((function(e,t){E(e.src)||(e.onload=()=>{const s=e.getAttribute("src")||"";if(s.includes("unsplash")||s.includes("pexels")||s.includes("pixabay"))return void D(e,C);const r=(e=>{const t=new Image;return t.src=e,t.width>t.height?"landscape":"portrait"})(e.src);let n;if(I=t%o.length,w=t%a.length,n="landscape"===r?o[I]:a[w],void 0!==n)if(n.url.includes("unsplash")||n.url.includes("pexels")||n.url.includes("pixabay")){if("landscape"===r?(I++,I%=o.length):(w++,w%=a.length),"PICTURE"===e.parentNode.nodeName)e.parentNode.querySelectorAll("source").forEach((e=>{e.setAttribute("srcset",n.optimized_url)})),e.parentNode.querySelector("img").setAttribute("src",n.optimized_url);else{const t=document.createElement("img");t.src=n.optimized_url,e.parentNode.replaceChild(t,e)}D(e,C)}else D(e,C);else D(e,C)},e.onerror=()=>{D(e,C)})}))})(a,r))}return()=>{e=!1}}),[t,m,i,p]),(0,r.useEffect)((()=>{const e=new ResizeObserver(L);return e.observe(document.documentElement),()=>{e&&e.disconnect()}}),[]),(0,r.useEffect)((()=>{const e=document.querySelector("#ast-block-templates-modal-wrap");if(!e)return;const t=new MutationObserver(L);return t.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{t&&t.disconnect()}}),[]),(0,r.useEffect)((()=>{const e=h?.current;if(e){const t=e.shadowRoot;c.forEach(((e,o)=>{null!==t&&t.host.style.setProperty(`--ast-global-color-${o}`,e)}))}}),[c]);const D=(e,t)=>{e&&(e.style.visibility=t)},q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return b?e.replace(/(src="https:\/\/maps\.google\.com\/maps\?q=)([^&]+)(&z=\d+&hl=en&t=m&output=embed&iwloc=near")/g,`$1${encodeURIComponent(b)}$3`):e};let M=0,z=0;const F=(e,t,o)=>{const a=e.scrollTop,s=t-a;let r=0;const n=function(){r+=20;const t=x.linearTween(r,a,s,o);e.scrollTop=t,r<o&&(M=setTimeout(n,20))};n()};(0,r.useEffect)((()=>{u||(I=0,w=0,S=0)}),[u]);const W=N?"origin-top-right":"origin-top-left";return React.createElement(A.Z,{className:(0,n.AK)("w-full h-fit p-5",!0===$.importing?"importing":"")},React.createElement("div",{className:(0,n.AK)("cursor-pointer relative border border-solid border-border-primary hover:border-accent-spectra transition duration-150 ease-in-out overflow-hidden group",$.importing&&"border-accent-spectra")},React.createElement("div",{className:`thumbnail left-0 m-0 min-h-[auto] overflow-visible text-left top-0 ${W} relative pointer-events-none`,ref:f},React.createElement("div",{className:"absolute w-[1200px] pointer-events-none max-h-[1600px] overflow-hidden",ref:h},!o&&React.createElement("img",{srcSet:`${O}, ${j}`,src:j,alt:"Preview"}),React.createElement("div",{className:"preview"},React.createElement("span",{className:"ast-block-templates-icon ast-block-templates-icon-search"})))),React.createElement("div",{className:"absolute inset-0 grid grid-cols-1 grid-rows-1 place-items-end",onMouseEnter:()=>{if("page"!==t.type)return;const e=h.current;M&&clearTimeout(M),z=setTimeout((()=>{F(e,e.scrollHeight,4e3)}),1e3)},onMouseLeave:()=>{z&&clearTimeout(z);const e=h.current;M&&clearTimeout(M),F(e,0,1500)}},React.createElement("div",{className:(0,n.AK)("opacity-0 group-hover:opacity-100 w-full flex items-center justify-between px-3 py-2 backdrop-blur-sm bg-white/[0.85] shadow-action-buttons transition-all duration-150 ease-in-out",!0===$.importing?"opacity-100":"")},React.createElement(_,{title:v.notInstalled?"Install Spectra & Insert":v.inactive?"Activate Spectra & Insert":"Insert",showIcon:v.active,liveRequest:!0,item:t,importing:$.importing,onClick:()=>{T({...$,importing:!0})},onBlockImport:()=>{T({...$,importing:!1})}}),React.createElement(P.Z,{item:t})))))})))}}]);