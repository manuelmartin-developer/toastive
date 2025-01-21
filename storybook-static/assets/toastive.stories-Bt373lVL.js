var lt=Object.defineProperty;var j=t=>{throw TypeError(t)};var dt=(t,e,o)=>e in t?lt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var f=(t,e,o)=>dt(t,typeof e!="symbol"?e+"":e,o),_=(t,e,o)=>e.has(t)||j("Cannot "+o);var v=(t,e,o)=>(_(t,e,"read from private field"),o?o.call(t):e.get(t)),w=(t,e,o)=>e.has(t)?j("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),O=(t,e,o,n)=>(_(t,e,"write to private field"),n?n.call(t,o):e.set(t,o),o),g=(t,e,o)=>(_(t,e,"access private method"),o);var nt=(t=>(t.AutoClose="autoClose",t.closeButton="closeButton",t.Duration="duration",t.Title="title",t.Message="message",t.Position="position",t.Variant="variant",t))(nt||{}),p=(t=>(t.Error="error",t.Info="info",t.Default="default",t.Loading="loading",t.Success="success",t.Warning="warning",t))(p||{}),s=(t=>(t.TopRight="top-right",t.TopLeft="top-left",t.BottomRight="bottom-right",t.BottomLeft="bottom-left",t))(s||{});const ut=`/* Global */
* {
	box-sizing: border-box;
}

/* Attributes */

:host {
	/* Host variables */
	--color: var(--toastive-content-color, #333);
	--font-size: var(--toastive-font-size, 0.8rem);
	--width: var(--toastive-width, 350px);
	--padding-vertical: var(--toastive-padding-vertical, 1rem);
	--padding-horizontal: var(--toastive-padding-horizontal, 1rem);

	/* Host styles */
	display: block;
	pointer-events: auto;
	position: relative;
	width: var(--width);
}

slot {
	display: block;
	width: fit-content;
}

slot[hidden] {
	display: none;
}

slot[name='title'] {
	font-weight: bold;
	margin-bottom: 0.2rem;
}

slot[name='icon'] {
	align-items: center;
	display: flex;
	justify-content: center;
	left: 1rem;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}

/* Classes */

.toastive {
	align-items: flex-start;
	background: var(--toastive-background-color, #fff);
	border: var(--toastive-border-width, 1px) solid var(--toastive-border-color, #ededed);
	border-radius: var(--toastive-border-radius, 0.25rem);
	box-shadow: var(--toastive-box-shadow, 0 4px 12px rgba(0, 0, 0, 0.1));
	color: var(--color);
	display: flex;
	flex-direction: column;
	font-family: var(--toastive-font-family, inherit);
	font-size: var(--font-size);
	justify-content: flex-start;
	padding: var(--padding-vertical) var(--padding-horizontal);
	position: relative;
	transition:
		background 0.3s ease-in-out,
		border-color 0.3s ease-in-out,
		color 0.3s ease-in-out,
		padding 0.3s ease-in-out;
	width: 100%;
}

.toastive.top-left,
.toastive.top-right {
	animation: toastive-slide-top 0.3s ease-in-out;
}

.toastive.bottom-left,
.toastive.bottom-right {
	animation: toastive-slide-bottom 0.3s ease-in-out;
}

.toastive.success {
	--color: var(--toastive-success-content-color, #008a2e);

	background: var(--toastive-success-background-color, #ecfdf3);
	border-color: var(--toastive-success-border-color, #d3fde5);
	color: var(--color);
	padding-left: 3rem;
}

.toastive.info {
	--color: var(--toastive-info-content-color, #0973dc);

	background: var(--toastive-info-background-color, #f0f8ff);
	border-color: var(--toastive-info-border-color, #d3e0fd);
	color: var(--color);
	padding-left: 3rem;
}

.toastive.warning {
	--color: var(--toastive-warning-content-color, #dc7609);

	background: var(--toastive-warning-background-color, #fffcf0);
	border-color: var(--toastive-warning-border-color, #fdf5d3);
	color: var(--color);
	padding-left: 3rem;
}

.toastive.error {
	--color: var(--toastive-error-content-color, #e60000);

	background: var(--toastive-error-background-color, #fff0f0);
	border-color: var(--toastive-error-border-color, #ffe0e1);
	color: var(--color);
	padding-left: 3rem;
}

.toastive.loading {
	padding-left: 3rem;
}

.toastive__progress {
	background-color: var(--toastive-progress-color, var(--color));
	bottom: 0;
	height: var(--toastive-progress-height, 0.25rem);
	left: 0;
	opacity: var(--toastive-progress-opacity, 0.5);
	position: absolute;
	width: 100%;
}

.toastive__close {
	background: none;
	border: none;
	color: var(--toastive-close-button-color, var(--color));
	cursor: pointer;
	padding: 0;
	position: absolute;
	right: var(--padding-horizontal);
	top: 50%;
	transform: translateY(-50%);
	width: var(--toastive-close-button-size, 1rem);
	height: var(--toastive-close-button-size, 1rem);
}

.toastive__close > svg {
	stroke-width: 1.5;
	height: 100%;
	width: 100%;
}

/* Media queries */

@media (max-width: 576px) {
	:host {
		width: 100%;
	}
}

/* Animations */

@keyframes toastive-slide-top {
	from {
		opacity: 0;
		transform: translateY(-100%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes toastive-slide-bottom {
	from {
		opacity: 0;
		transform: translateY(100%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
`,P=` <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>`,vt='<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>',pt='<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-alert-triangle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /></svg>',ht='<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /></svg>',mt='<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-exclamation-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1" /></svg>',ft='<svg xmlns="http://www.w3.org/2000/svg" width="24"  height="24" viewBox="0 0 200 200"><radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="#333333"></stop><stop offset=".3" stop-color="#333333" stop-opacity=".9"></stop><stop offset=".6" stop-color="#333333" stop-opacity=".6"></stop><stop offset=".8" stop-color="#333333" stop-opacity=".3"></stop><stop offset="1" stop-color="#333333" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a12)" stroke-width="15" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#333333" stroke-width="15" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg>';var b,m,R,L,B,k,z;class at extends HTMLElement{constructor(o){super();w(this,m);w(this,b);f(this,"autoClose");f(this,"closeButton");f(this,"duration");f(this,"icon");f(this,"title");f(this,"message");f(this,"position");f(this,"variant");w(this,B,o=>{switch(o){case p.Success:return vt;case p.Warning:return pt;case p.Info:return ht;case p.Error:return mt;case p.Loading:return ft;default:return""}});w(this,k,()=>{this.remove(),v(this,b)&&clearTimeout(v(this,b))});w(this,z,()=>{const o=n=>{const a=this.position===s.TopRight||this.position===s.BottomRight,c=n instanceof MouseEvent?n.clientX:n.touches[0].clientX,r=u=>{const h=(u instanceof MouseEvent?u.clientX:u.touches[0].clientX)-c;(Math.abs(h)>10&&a&&h>0||!a&&h<0)&&(this.style.transition="none",this.style.transform=`translate(${h}px)`)},d=u=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",d),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",d);const h=(u instanceof MouseEvent?u.clientX:u.changedTouches[0].clientX)-c;a&&h>50||!a&&h<-50?(this.style.transition="transform 0.3s",a?this.style.transform="translateX(100%)":this.style.transform="translateX(-100%)",setTimeout(()=>{v(this,k).call(this)},300)):(this.style.transition="transform 0.3s",this.style.transform="translateX(0)")};document.addEventListener("mousemove",r),document.addEventListener("mouseup",d),document.addEventListener("touchmove",r),document.addEventListener("touchend",d)};this.addEventListener("mousedown",o),this.addEventListener("touchstart",o)});this.attachShadow({mode:"open"});const{autoClose:n=!0,closeButton:a=!1,duration:i=5e3,title:c="",message:r="",position:d=s.BottomRight,variant:u=p.Default}=o||{};this.options={autoClose:n,closeButton:a,duration:i,title:c,message:r,position:d,variant:u}}static get observedAttributes(){return Object.values(nt)}get button(){var o;return(o=this.shadowRoot)==null?void 0:o.getElementById("toastive__close")}get template(){const{autoClose:o,closeButton:n,title:a,message:i,position:c,variant:r}=this;return`
      <style>
        ${ut}
      </style>
      <div class="toastive ${r} ${c}">
        ${v(this,B).call(this,r)?`<slot name="icon">${v(this,B).call(this,r)}</slot>`:""}
        <slot ${a?"":"hidden"} name="title">${a}</slot>
        <slot ${i?"":"hidden"} name="message">${i}</slot>
        ${n?`<button id="toastive__close" class="toastive__close">${P}</button>`:""}
        ${o?'<div class="toastive__progress"></div>':""}
      </div>
    `}set options(o){var a;Object.entries(o).forEach(([i,c])=>this[i]=c);const n=document.createElement("template");n.innerHTML=this.template,(a=this.shadowRoot)==null||a.appendChild(n.content.cloneNode(!0))}connectedCallback(){var o,n;(o=this.shadowRoot)!=null&&o.isConnected&&(this.closeButton&&((n=this.button)==null||n.addEventListener("click",a=>g(this,m,L).call(this,a))),this.autoClose&&g(this,m,R).call(this),v(this,z).call(this))}disconnectedCallback(){var o;this.closeButton&&((o=this.button)==null||o.removeEventListener("click",n=>g(this,m,L).call(this,n))),this.autoClose&&v(this,b)&&clearTimeout(v(this,b))}close(){g(this,m,L).call(this)}update(o){var u,E,h,q,X,$,V,A,I,Y,W;const{autoClose:n,closeButton:a,duration:i,title:c,message:r,variant:d}=o||{};if(i&&this.duration!==i&&(this.duration=i,this.autoClose&&((E=(u=this.shadowRoot)==null?void 0:u.querySelector(".toastive__progress"))==null||E.animate([{width:"100%"},{width:"0%"}],{duration:this.duration,easing:"linear",fill:"forwards"}))),r&&this.message!==r){const l=(h=this.shadowRoot)==null?void 0:h.querySelector("slot[name='message']");l.innerHTML=r,this.message=r}if(c&&this.title!==c){const l=(q=this.shadowRoot)==null?void 0:q.querySelector("slot[name='title']");l.innerHTML=c,this.title=c}if(n&&this.autoClose!==n&&(($=(X=this.shadowRoot)==null?void 0:X.querySelector(".toastive"))==null||$.appendChild(document.createElement("div")).classList.add("toastive__progress"),g(this,m,R).call(this),this.autoClose=n),d&&this.variant!==d){(A=(V=this.shadowRoot)==null?void 0:V.querySelector(".toastive"))==null||A.classList.replace(this.variant,d);const l=(I=this.shadowRoot)==null?void 0:I.querySelector("slot[name='icon']");if(l){const S=v(this,B).call(this,d);l.innerHTML="",S&&(l.innerHTML=S)}this.variant=d}if(a&&this.closeButton!==a){const l=document.createElement("button");l.id="toastive__close",l.classList.add("toastive__close"),l.innerHTML=P,(W=(Y=this.shadowRoot)==null?void 0:Y.querySelector(".toastive"))==null||W.appendChild(l),l.addEventListener("click",S=>g(this,m,L).call(this,S)),this.closeButton=a}}}b=new WeakMap,m=new WeakSet,R=function(){var n;const o=(n=this.shadowRoot)==null?void 0:n.querySelector(".toastive__progress");o==null||o.animate([{width:"100%"},{width:"0%"}],{duration:this.duration,easing:"linear",fill:"forwards"}),O(this,b,setTimeout(()=>{this.animate([{transform:"translateY(0%)",opacity:1},{transform:this.position===s.TopRight||this.position===s.TopLeft?"translateY(-100%)":"translateY(100%)",opacity:0}],{duration:300,easing:"ease-in-out",fill:"forwards"}).onfinish=()=>{v(this,k).call(this)}},this.duration))},L=function(o){o==null||o.stopPropagation(),this.animate([{transform:"translateY(0%)",opacity:1},{transform:this.position===s.TopRight||this.position===s.TopLeft?"translateY(-100%)":"translateY(100%)",opacity:0}],{duration:300,easing:"ease-in-out",fill:"forwards"}).onfinish=()=>{v(this,k).call(this)}},B=new WeakMap,k=new WeakMap,z=new WeakMap;customElements.define("mm-toastive",at);const gt=`* {
	box-sizing: border-box;
}

mm-toastive-wrapper {
	--gap: var(--toastive-wrapper-gap, 1rem);
	--vertical-offset: var(--toastive-wrapper-vertical-offset, 1rem);
	--horizontal-offset: var(--toastive-wrapper-horizontal-offset, 1rem);

	align-items: flex-start;
	display: flex;
	justify-content: flex-start;
	pointer-events: none;
	position: fixed;
	gap: var(--gap);
	width: fit-content;
	z-index: 9999;
	padding: 0;
	height: fit-content;
	transition: height 0.3s ease-in-out;
}

mm-toastive-wrapper.top-left {
	left: var(--horizontal-offset);
	top: var(--vertical-offset);
	flex-direction: column-reverse;
}

mm-toastive-wrapper.top-right {
	right: var(--horizontal-offset);
	top: var(--vertical-offset);
	flex-direction: column-reverse;
}

mm-toastive-wrapper.bottom-left {
	bottom: var(--vertical-offset);
	left: var(--horizontal-offset);
	flex-direction: column;
}

mm-toastive-wrapper.bottom-right {
	bottom: var(--vertical-offset);
	right: var(--horizontal-offset);
	flex-direction: column;
}

/* Media queries */
@media (max-width: 576px) {
	mm-toastive-wrapper {
		padding: 0 var(--horizontal-offset);
		width: 100%;
	}

	mm-toastive-wrapper.top-left,
	mm-toastive-wrapper.top-right,
	mm-toastive-wrapper.bottom-left,
	mm-toastive-wrapper.bottom-right {
		left: 0;
		right: 0;
	}
}
`;var M,st;class rt extends HTMLElement{constructor(){super();w(this,M);this.attachShadow({mode:"open"})}get template(){return`
        <style>
        ${gt}
        </style>
    `}connectedCallback(){var o;(o=this.shadowRoot)!=null&&o.isConnected&&g(this,M,st).call(this)}addToastive(o){var n;(n=this.shadowRoot)==null||n.appendChild(o)}}M=new WeakSet,st=function(){const o=document.createElement("template");o.innerHTML=this.template,this.appendChild(o.content.cloneNode(!0))};customElements.define("mm-toastive-wrapper",rt);const H=t=>{let e=document.querySelector(`mm-toastive-wrapper.${(t==null?void 0:t.position)??s.BottomRight}`);e||(e=new rt,e.classList.add((t==null?void 0:t.position)??s.BottomRight),document.body.appendChild(e));const o=new at(t);return e.addToastive(o),o},it=(t,e)=>{const o=()=>H({...t}),n=document.createElement("button");return n.textContent=e,n.classList.add("playground"),n.addEventListener("click",o),n},ct={argTypes:{autoClose:{control:{type:"boolean"},description:"Auto close the toast after a certain duration",name:"Auto Close",type:{name:"boolean",required:!1}},closeButton:{control:{type:"boolean"},description:"Show a close button to dismiss the toast",name:"Close Button",type:{name:"boolean",required:!1}},duration:{control:{type:"number"},description:"Duration in milliseconds before the toast auto closes",name:"Duration",type:{name:"number",required:!1}},message:{control:{type:"text"},description:"Message to display in the toast",name:"Message",type:{name:"string",required:!1}},position:{control:{type:"select"},description:"Position of the toast on the screen",name:"Position",options:Object.values(s),type:{name:"string",required:!1}},title:{control:{type:"text"},description:"Title to display in the toast",name:"Title",type:{name:"string",required:!1}},variant:{control:{type:"select"},description:"Variant color of the toast",options:Object.values(p),name:"Variant",type:{name:"string",required:!1}}},parameters:{layout:"centered"},component:"Toastive",title:"Documentation/Toastive"},y=t=>{const e=()=>{H({autoClose:t.autoClose,closeButton:t.closeButton,duration:t.duration,message:t.message,position:t.position,title:t.title,variant:t.variant})},o=document.createElement("button");o.textContent="Show Toastive",o.classList.add("playground"),o.addEventListener("click",e);const n=document.createElement("button");n.classList.add("playground"),n.textContent="Clear",n.addEventListener("click",()=>{document.querySelectorAll("mm-toastive-wrapper").forEach(i=>i.remove())});const a=document.createElement("div");return a.append(o,n),a};y.argTypes=ct.argTypes;y.args={autoClose:void 0,closeButton:void 0,duration:void 0,message:"👋 Hi there, I'm a toast!!",position:void 0,title:void 0,variant:void 0};y.parameters={cssprops:{"toastive-wrapper-gap":{category:"Wrapper",control:"text",description:"The gap between each toastive element",value:"1rem"},"toastive-wrapper-horizontal-offset":{category:"Wrapper",control:"text",description:"The horizontal offset of the toastive wrapper",value:"1rem"},"toastive-wrapper-vertical-offset":{category:"Wrapper",control:"text",description:"The vertical offset of the toastive wrapper",value:"1rem"},"toastive-font-family":{category:"Toastive",subcategory:"Font",control:"text",description:"The font family of the toastive element",value:"inherit"},"toastive-font-size":{category:"Toastive",subcategory:"Font",control:"text",description:"The font size of the toastive element",value:"0.8rem"},"toastive-content-color":{category:"Toastive",subcategory:"Color",control:"color",description:"The color of the toastive element",value:"#333"},"toastive-background-color":{category:"Toastive",subcategory:"Color",control:"color",description:"The background color of the toastive element",value:"#fff"},"toastive-border-color":{category:"Toastive",subcategory:"Border",control:"color",description:"The border color of the toastive element",value:"#ededed"},"toastive-border-width":{category:"Toastive",subcategory:"Border",control:"text",description:"The border width of the toastive element",value:"1px"},"toastive-border-radius":{category:"Toastive",subcategory:"Border",control:"text",description:"The border radius of the toastive element",value:"0.25rem"},"toastive-width":{category:"Toastive",subcategory:"Layout",control:"text",description:"The width of the toastive element",value:"350px"},"toastive-padding-horizontal":{category:"Toastive",subcategory:"Layout",control:"text",description:"The horizontal padding of the toastive element",value:"1rem"},"toastive-padding-vertical":{category:"Toastive",subcategory:"Layout",control:"text",description:"The vertical padding of the toastive element",value:"1rem"},"toastive-box-shadow":{category:"Toastive",subcategory:"Shadow",control:"text",description:"The box shadow of the toastive element",value:"0 4px 12px rgba(0, 0, 0, 0.1)"},"toastive-info-content-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The color of the info variant",value:"#0973dc"},"toastive-info-background-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The background color of the info variant",value:"#f0f8ff"},"toastive-info-border-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The border color of the info variant",value:"#d3e0fd"},"toastive-success-content-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The color of the success variant",value:"#008a2e"},"toastive-success-background-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The background color of the success variant",value:"#ecfdf3"},"toastive-success-border-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The border color of the success variant",value:"#d3fde5"},"toastive-warning-content-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The color of the warning variant",value:"#dc7609"},"toastive-warning-background-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The background color of the warning variant",value:"#fffcf0"},"toastive-warning-border-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The border color of the warning variant",value:"#fdf5d3"},"toastive-error-content-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The color of the error variant",value:"#e60000"},"toastive-error-background-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The background color of the error variant",value:"#fff0f0"},"toastive-error-border-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The border color of the error variant",value:"#ffe0e1"},"toastive-progress-color":{category:"Toastive",subcategory:"Progress",control:"color",description:"The color of the progress bar"},"toastive-progress-height":{category:"Toastive",subcategory:"Progress",control:"text",description:"The height of the progress bar",value:"0.25rem"},"toastive-progress-opacity":{category:"Toastive",subcategory:"Progress",control:"text",description:"The opacity of the progress bar",value:"0.5"},"toastive-close-button-color":{category:"Toastive",subcategory:"Close Button",control:"color",description:"The color of the close button"},"toastive-close-button-size":{category:"Toastive",subcategory:"Close Button",control:"text",description:"The size of the close button",value:"1rem"}}};const T=()=>it({title:"Toastive",message:"👋 Hi from top-right corner!",position:s.TopRight,variant:p.Success,autoClose:!0,duration:5e3,closeButton:!1},"Show Toastive");T.tags=["auto-docs","!dev"];const x=()=>it({title:"Toastive",message:"👋 Hi from top-right corner!",position:s.TopRight,variant:p.Success,autoClose:!1,closeButton:!0},"Show Toastive");x.tags=["auto-docs","!dev"];const C=()=>{const t=()=>{const o=H({title:"Toastive",message:"👋 Hi from top-right corner!",position:s.TopRight,variant:p.Loading,autoClose:!1,closeButton:!1});setTimeout(()=>{o.update({title:"Updated Toastive",message:"👋 Hi from top-left corner!",position:s.TopLeft,variant:p.Warning,autoClose:!0})},3e3)},e=document.createElement("button");return e.textContent="Show Toastive",e.classList.add("playground"),e.addEventListener("click",t),e};C.tags=["auto-docs","!dev"];var D,G,N;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`(args: ToastiveProps) => {
  const showToast = () => {
    showToastive({
      autoClose: args.autoClose,
      closeButton: args.closeButton,
      duration: args.duration,
      message: args.message,
      position: args.position,
      title: args.title,
      variant: args.variant
    });
  };
  const createButton = document.createElement('button');
  createButton.textContent = 'Show Toastive';
  createButton.classList.add('playground');
  createButton.addEventListener('click', showToast);
  const clearButton = document.createElement('button');
  clearButton.classList.add('playground');
  clearButton.textContent = 'Clear';
  clearButton.addEventListener('click', () => {
    document.querySelectorAll('mm-toastive-wrapper').forEach(toastive => toastive.remove());
  });
  const buttonsContainer = document.createElement('div');
  buttonsContainer.append(createButton, clearButton);
  return buttonsContainer;
}`,...(N=(G=y.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var U,F,J;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`() => createButtonToShowToastive({
  title: 'Toastive',
  message: '👋 Hi from top-right corner!',
  position: ToastivePosition.TopRight,
  variant: ToastiveVariant.Success,
  autoClose: true,
  duration: 5000,
  closeButton: false
}, 'Show Toastive')`,...(J=(F=T.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,Q,Z;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`() => createButtonToShowToastive({
  title: 'Toastive',
  message: '👋 Hi from top-right corner!',
  position: ToastivePosition.TopRight,
  variant: ToastiveVariant.Success,
  autoClose: false,
  closeButton: true
}, 'Show Toastive')`,...(Z=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var tt,ot,et;C.parameters={...C.parameters,docs:{...(tt=C.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
  const showToast = () => {
    const toastive = showToastive({
      title: 'Toastive',
      message: '👋 Hi from top-right corner!',
      position: ToastivePosition.TopRight,
      variant: ToastiveVariant.Loading,
      autoClose: false,
      closeButton: false
    });
    setTimeout(() => {
      toastive.update({
        title: 'Updated Toastive',
        message: '👋 Hi from top-left corner!',
        position: ToastivePosition.TopLeft,
        variant: ToastiveVariant.Warning,
        autoClose: true
      });
    }, 3000);
  };
  const createButton = document.createElement('button');
  createButton.textContent = 'Show Toastive';
  createButton.classList.add('playground');
  createButton.addEventListener('click', showToast);
  return createButton;
}`,...(et=(ot=C.parameters)==null?void 0:ot.docs)==null?void 0:et.source}}};const bt=["playground","propsExample","closeButtonExample","updatedPropsExample"],wt=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:bt,closeButtonExample:x,default:ct,playground:y,propsExample:T,updatedPropsExample:C},Symbol.toStringTag,{value:"Module"}));export{wt as T,x as c,T as p,C as u};
