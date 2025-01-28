var lt=Object.defineProperty;var Y=t=>{throw TypeError(t)};var dt=(t,o,e)=>o in t?lt(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e;var m=(t,o,e)=>dt(t,typeof o!="symbol"?o+"":o,e),R=(t,o,e)=>o.has(t)||Y("Cannot "+e);var h=(t,o,e)=>(R(t,o,"read from private field"),e?e.call(t):o.get(t)),w=(t,o,e)=>o.has(t)?Y("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(t):o.set(t,e),D=(t,o,e,n)=>(R(t,o,"write to private field"),n?n.call(t,e):o.set(t,e),e),f=(t,o,e)=>(R(t,o,"access private method"),e);var nt=(t=>(t.AutoClose="autoClose",t.CloseButton="closeButton",t.Draggable="draggable",t.Duration="duration",t.Title="title",t.Message="message",t.Position="position",t.Variant="variant",t))(nt||{}),v=(t=>(t.Error="error",t.Info="info",t.Default="default",t.Loading="loading",t.Success="success",t.Warning="warning",t))(v||{}),i=(t=>(t.TopRight="top-right",t.TopLeft="top-left",t.BottomRight="bottom-right",t.BottomLeft="bottom-left",t))(i||{});const ut=`* {
	box-sizing: border-box;
}

:host {
	--color: var(--toastive-content-color, #333);
	--font-size: var(--toastive-font-size, 0.8rem);
	--width: var(--toastive-width, 350px);
	--padding-vertical: var(--toastive-padding-vertical, 1rem);
	--padding-horizontal: var(--toastive-padding-horizontal, 1rem);
	display: block;
	height: fit-content;
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

@media (max-width: 576px) {
	:host {
		width: 100%;
	}
}

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
`,O=` <svg
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
  </svg>`,vt='<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>',ht='<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-alert-triangle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /></svg>',pt='<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /></svg>',gt='<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-exclamation-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1" /></svg>',mt='<svg xmlns="http://www.w3.org/2000/svg" width="24"  height="24" viewBox="0 0 200 200"><radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="#333333"></stop><stop offset=".3" stop-color="#333333" stop-opacity=".9"></stop><stop offset=".6" stop-color="#333333" stop-opacity=".6"></stop><stop offset=".8" stop-color="#333333" stop-opacity=".3"></stop><stop offset="1" stop-color="#333333" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a12)" stroke-width="15" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#333333" stroke-width="15" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg>';var b,p,_,x,E,L,z;class at extends HTMLElement{constructor(e){super();w(this,p);w(this,b);m(this,"autoClose");m(this,"closeButton");m(this,"draggable");m(this,"duration");m(this,"icon");m(this,"title");m(this,"message");m(this,"position");m(this,"variant");w(this,E,e=>{switch(e){case v.Success:return vt;case v.Warning:return ht;case v.Info:return pt;case v.Error:return gt;case v.Loading:return mt;default:return""}});w(this,L,()=>{h(this,b)&&clearTimeout(h(this,b)),this.remove()});w(this,z,()=>{const e=n=>{const a=this.position===i.TopRight||this.position===i.BottomRight,c=n instanceof MouseEvent?n.clientX:n.touches[0].clientX,s=u=>{const g=(u instanceof MouseEvent?u.clientX:u.touches[0].clientX)-c;(Math.abs(g)>10&&a&&g>0||!a&&g<0)&&(this.style.transition="none",this.style.transform=`translate(${g}px)`)},d=u=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",d),document.removeEventListener("touchmove",s),document.removeEventListener("touchend",d);const g=(u instanceof MouseEvent?u.clientX:u.changedTouches[0].clientX)-c;a&&g>50||!a&&g<-50?(this.style.transition="transform 0.3s",a?this.style.transform="translateX(100%)":this.style.transform="translateX(-100%)",setTimeout(()=>{h(this,L).call(this)},300)):(this.style.transition="transform 0.3s",this.style.transform="translateX(0)")};document.addEventListener("mousemove",s),document.addEventListener("mouseup",d),document.addEventListener("touchmove",s),document.addEventListener("touchend",d)};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e,{passive:!0})});this.attachShadow({mode:"open"});const{autoClose:n=!0,closeButton:a=!1,draggable:r=!0,duration:c=5e3,title:s="",message:d="",position:u=i.BottomRight,variant:T=v.Default}=e||{};this.options={autoClose:n,closeButton:a,draggable:r,duration:c,title:s,message:d,position:u,variant:T}}static get observedAttributes(){return Object.values(nt)}get button(){var e;return(e=this.shadowRoot)==null?void 0:e.getElementById("toastive__close")}get template(){const{autoClose:e,closeButton:n,title:a,message:r,position:c,variant:s}=this;return`
      <style>
        ${ut}
      </style>
      <div class="toastive ${s} ${c}">
        ${h(this,E).call(this,s)?`<slot name="icon">${h(this,E).call(this,s)}</slot>`:""}
        <slot ${a?"":"hidden"} name="title">${a}</slot>
        <slot ${r?"":"hidden"} name="message">${r}</slot>
        ${n?`<button id="toastive__close" class="toastive__close">${O}</button>`:""}
        ${e?'<div class="toastive__progress"></div>':""}
      </div>
    `}set options(e){var a;Object.entries(e).forEach(([r,c])=>this[r]=c);const n=document.createElement("template");n.innerHTML=this.template,(a=this.shadowRoot)==null||a.appendChild(n.content.cloneNode(!0))}connectedCallback(){var e,n;(e=this.shadowRoot)!=null&&e.isConnected&&(this.closeButton&&((n=this.button)==null||n.addEventListener("click",a=>f(this,p,x).call(this,a))),this.autoClose&&f(this,p,_).call(this),this.draggable&&h(this,z).call(this))}disconnectedCallback(){var e;this.closeButton&&((e=this.button)==null||e.removeEventListener("click",n=>f(this,p,x).call(this,n))),this.autoClose&&h(this,b)&&clearTimeout(h(this,b))}close(){f(this,p,x).call(this)}update(e){var u,T,g,q,X,$,V,j,A,I,W;const{autoClose:n,closeButton:a,duration:r,title:c,message:s,variant:d}=e||{};if(r&&this.duration!==r&&(this.duration=r,this.autoClose&&((T=(u=this.shadowRoot)==null?void 0:u.querySelector(".toastive__progress"))==null||T.animate([{width:"100%"},{width:"0%"}],{duration:this.duration,easing:"linear",fill:"forwards"}))),s&&this.message!==s){const l=(g=this.shadowRoot)==null?void 0:g.querySelector("slot[name='message']");l.innerHTML=s,this.message=s}if(c&&this.title!==c){const l=(q=this.shadowRoot)==null?void 0:q.querySelector("slot[name='title']");l.innerHTML=c,this.title=c}if(n&&this.autoClose!==n&&(($=(X=this.shadowRoot)==null?void 0:X.querySelector(".toastive"))==null||$.appendChild(document.createElement("div")).classList.add("toastive__progress"),f(this,p,_).call(this),this.autoClose=n),d&&this.variant!==d){(j=(V=this.shadowRoot)==null?void 0:V.querySelector(".toastive"))==null||j.classList.replace(this.variant,d);const l=(A=this.shadowRoot)==null?void 0:A.querySelector("slot[name='icon']");if(l){const S=h(this,E).call(this,d);l.innerHTML="",S&&(l.innerHTML=S)}this.variant=d}if(a&&this.closeButton!==a){const l=document.createElement("button");l.id="toastive__close",l.classList.add("toastive__close"),l.innerHTML=O,(W=(I=this.shadowRoot)==null?void 0:I.querySelector(".toastive"))==null||W.appendChild(l),l.addEventListener("click",S=>f(this,p,x).call(this,S)),this.closeButton=a}}}b=new WeakMap,p=new WeakSet,_=function(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(".toastive__progress");e==null||e.animate([{width:"100%"},{width:"0%"}],{duration:this.duration,easing:"linear",fill:"forwards"}),D(this,b,setTimeout(()=>{f(this,p,x).call(this)},this.duration))},x=function(e){e==null||e.stopPropagation(),this.animate([{transform:"translateY(0%)",opacity:1},{transform:this.position===i.TopRight||this.position===i.TopLeft?"translateY(-100%)":"translateY(100%)",opacity:0}],{duration:300,easing:"ease-in-out",fill:"forwards"}).onfinish=()=>{h(this,L).call(this)}},E=new WeakMap,L=new WeakMap,z=new WeakMap;customElements.define("mm-toastive",at);const ft=`mm-toastive-wrapper {
	--gap: var(--toastive-wrapper-gap, 1rem);
	--vertical-offset: var(--toastive-wrapper-vertical-offset, 1rem);
	--horizontal-offset: var(--toastive-wrapper-horizontal-offset, 1rem);

	align-items: center;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: var(--gap);
	height: fit-content;
	padding: 0;
	pointer-events: none;
	position: fixed;
	transition: max-height 0.3s ease-in-out;
	width: fit-content;
	z-index: 9999;
}

mm-toastive-wrapper.top-left {
	justify-content: flex-start;
	left: var(--horizontal-offset);
	top: var(--vertical-offset);
}

mm-toastive-wrapper.top-right {
	justify-content: flex-start;
	right: var(--horizontal-offset);
	top: var(--vertical-offset);
}

mm-toastive-wrapper.bottom-left {
	bottom: var(--vertical-offset);
	justify-content: flex-end;
	left: var(--horizontal-offset);
}

mm-toastive-wrapper.bottom-right {
	bottom: var(--vertical-offset);
	justify-content: flex-end;
	right: var(--horizontal-offset);
}

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
        ${ft}
        </style>
    `}connectedCallback(){var e;(e=this.shadowRoot)!=null&&e.isConnected&&f(this,M,st).call(this)}addToastive(e){var a,r;e.position===i.TopLeft||e.position===i.TopRight?(a=this.shadowRoot)==null||a.prepend(e):(r=this.shadowRoot)==null||r.appendChild(e)}}M=new WeakSet,st=function(){const e=document.createElement("template");e.innerHTML=this.template,this.appendChild(e.content.cloneNode(!0))};customElements.define("mm-toastive-wrapper",rt);const H=t=>{let o=document.querySelector(`mm-toastive-wrapper.${(t==null?void 0:t.position)??i.BottomRight}`);o||(o=new rt,o.classList.add((t==null?void 0:t.position)??i.BottomRight),document.body.appendChild(o));const e=new at(t);return o.addToastive(e),e},it=(t,o)=>{const e=()=>H({...t}),n=document.createElement("button");return n.textContent=o,n.classList.add("playground"),n.addEventListener("click",e),n},ct={argTypes:{autoClose:{control:{type:"boolean"},description:"Auto close the toast after a certain duration",name:"Auto Close",type:{name:"boolean",required:!1}},closeButton:{control:{type:"boolean"},description:"Show a close button to dismiss the toast",name:"Close Button",type:{name:"boolean",required:!1}},draggable:{control:{type:"boolean"},description:"Make the toast closeable by dragging",name:"Draggable",type:{name:"boolean",required:!1}},duration:{control:{type:"number"},description:"Duration in milliseconds before the toast auto closes",name:"Duration",type:{name:"number",required:!1}},message:{control:{type:"text"},description:"Message to display in the toast",name:"Message",type:{name:"string",required:!1}},position:{control:{type:"select"},description:"Position of the toast on the screen",name:"Position",options:Object.values(i),type:{name:"string",required:!1}},title:{control:{type:"text"},description:"Title to display in the toast",name:"Title",type:{name:"string",required:!1}},variant:{control:{type:"select"},description:"Variant color of the toast",options:Object.values(v),name:"Variant",type:{name:"string",required:!1}}},parameters:{layout:"centered"},component:"Toastive",title:"Documentation/Toastive"},y=t=>{const o=()=>{H({autoClose:t.autoClose,closeButton:t.closeButton,draggable:t.draggable,duration:t.duration,message:t.message,position:t.position,title:t.title,variant:t.variant})},e=document.createElement("button");e.textContent="Show Toastive",e.classList.add("playground"),e.addEventListener("click",o);const n=document.createElement("button");n.classList.add("playground"),n.textContent="Clear",n.addEventListener("click",()=>{document.querySelectorAll("mm-toastive-wrapper").forEach(r=>r.remove())});const a=document.createElement("div");return a.append(e,n),a};y.argTypes=ct.argTypes;y.args={autoClose:void 0,closeButton:void 0,draggable:void 0,duration:void 0,message:"👋 Hi there, I'm a toast!!",position:void 0,title:void 0,variant:void 0};y.parameters={cssprops:{"toastive-wrapper-gap":{category:"Wrapper",control:"text",description:"The gap between each toastive element",value:"1rem"},"toastive-wrapper-horizontal-offset":{category:"Wrapper",control:"text",description:"The horizontal offset of the toastive wrapper",value:"1rem"},"toastive-wrapper-vertical-offset":{category:"Wrapper",control:"text",description:"The vertical offset of the toastive wrapper",value:"1rem"},"toastive-font-family":{category:"Toastive",subcategory:"Font",control:"text",description:"The font family of the toastive element",value:"inherit"},"toastive-font-size":{category:"Toastive",subcategory:"Font",control:"text",description:"The font size of the toastive element",value:"0.8rem"},"toastive-content-color":{category:"Toastive",subcategory:"Color",control:"color",description:"The color of the toastive element",value:"#333"},"toastive-background-color":{category:"Toastive",subcategory:"Color",control:"color",description:"The background color of the toastive element",value:"#fff"},"toastive-border-color":{category:"Toastive",subcategory:"Border",control:"color",description:"The border color of the toastive element",value:"#ededed"},"toastive-border-width":{category:"Toastive",subcategory:"Border",control:"text",description:"The border width of the toastive element",value:"1px"},"toastive-border-radius":{category:"Toastive",subcategory:"Border",control:"text",description:"The border radius of the toastive element",value:"0.25rem"},"toastive-width":{category:"Toastive",subcategory:"Layout",control:"text",description:"The width of the toastive element",value:"350px"},"toastive-padding-horizontal":{category:"Toastive",subcategory:"Layout",control:"text",description:"The horizontal padding of the toastive element",value:"1rem"},"toastive-padding-vertical":{category:"Toastive",subcategory:"Layout",control:"text",description:"The vertical padding of the toastive element",value:"1rem"},"toastive-box-shadow":{category:"Toastive",subcategory:"Shadow",control:"text",description:"The box shadow of the toastive element",value:"0 4px 12px rgba(0, 0, 0, 0.1)"},"toastive-info-content-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The color of the info variant",value:"#0973dc"},"toastive-info-background-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The background color of the info variant",value:"#f0f8ff"},"toastive-info-border-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The border color of the info variant",value:"#d3e0fd"},"toastive-success-content-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The color of the success variant",value:"#008a2e"},"toastive-success-background-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The background color of the success variant",value:"#ecfdf3"},"toastive-success-border-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The border color of the success variant",value:"#d3fde5"},"toastive-warning-content-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The color of the warning variant",value:"#dc7609"},"toastive-warning-background-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The background color of the warning variant",value:"#fffcf0"},"toastive-warning-border-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The border color of the warning variant",value:"#fdf5d3"},"toastive-error-content-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The color of the error variant",value:"#e60000"},"toastive-error-background-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The background color of the error variant",value:"#fff0f0"},"toastive-error-border-color":{category:"Toastive",subcategory:"Variant",control:"color",description:"The border color of the error variant",value:"#ffe0e1"},"toastive-progress-color":{category:"Toastive",subcategory:"Progress",control:"color",description:"The color of the progress bar"},"toastive-progress-height":{category:"Toastive",subcategory:"Progress",control:"text",description:"The height of the progress bar",value:"0.25rem"},"toastive-progress-opacity":{category:"Toastive",subcategory:"Progress",control:"text",description:"The opacity of the progress bar",value:"0.5"},"toastive-close-button-color":{category:"Toastive",subcategory:"Close Button",control:"color",description:"The color of the close button"},"toastive-close-button-size":{category:"Toastive",subcategory:"Close Button",control:"text",description:"The size of the close button",value:"1rem"}}};const C=()=>it({title:"Toastive",message:"👋 Hi from top-right corner!",position:i.TopRight,variant:v.Success,autoClose:!0,duration:5e3,closeButton:!1},"Show Toastive");C.tags=["auto-docs","!dev"];const B=()=>it({title:"Toastive",message:"👋 Hi from top-right corner!",position:i.TopRight,variant:v.Success,autoClose:!1,closeButton:!0},"Show Toastive");B.tags=["auto-docs","!dev"];const k=()=>{const t=()=>{const e=H({title:"Toastive",message:"👋 Hi from top-right corner!",position:i.TopRight,variant:v.Loading,autoClose:!1,closeButton:!1});setTimeout(()=>{e.update({title:"Updated Toastive",message:"👋 Hi! This is an updated messade",variant:v.Success,autoClose:!0})},3e3)},o=document.createElement("button");return o.textContent="Show Toastive",o.classList.add("playground"),o.addEventListener("click",t),o};k.tags=["auto-docs","!dev"];var P,N,U;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`(args: ToastiveProps) => {
  const showToast = () => {
    showToastive({
      autoClose: args.autoClose,
      closeButton: args.closeButton,
      draggable: args.draggable,
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
}`,...(U=(N=y.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var F,G,J;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`() => createButtonToShowToastive({
  title: 'Toastive',
  message: '👋 Hi from top-right corner!',
  position: ToastivePosition.TopRight,
  variant: ToastiveVariant.Success,
  autoClose: true,
  duration: 5000,
  closeButton: false
}, 'Show Toastive')`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,Z;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`() => createButtonToShowToastive({
  title: 'Toastive',
  message: '👋 Hi from top-right corner!',
  position: ToastivePosition.TopRight,
  variant: ToastiveVariant.Success,
  autoClose: false,
  closeButton: true
}, 'Show Toastive')`,...(Z=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var tt,et,ot;k.parameters={...k.parameters,docs:{...(tt=k.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
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
        message: '👋 Hi! This is an updated messade',
        variant: ToastiveVariant.Success,
        autoClose: true
      });
    }, 3000);
  };
  const createButton = document.createElement('button');
  createButton.textContent = 'Show Toastive';
  createButton.classList.add('playground');
  createButton.addEventListener('click', showToast);
  return createButton;
}`,...(ot=(et=k.parameters)==null?void 0:et.docs)==null?void 0:ot.source}}};const bt=["playground","propsExample","closeButtonExample","updatedPropsExample"],wt=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:bt,closeButtonExample:B,default:ct,playground:y,propsExample:C,updatedPropsExample:k},Symbol.toStringTag,{value:"Module"}));export{wt as T,B as c,C as p,k as u};
