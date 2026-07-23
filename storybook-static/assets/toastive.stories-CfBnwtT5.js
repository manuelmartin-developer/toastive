import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u}from"./iframe-OCLNdyie.js";var d=e({__namedExportsOrder:()=>F,actionButton:()=>A,clearingToasts:()=>N,customIcon:()=>P,default:()=>g,defaultVariant:()=>b,errorVariant:()=>w,globalDefaults:()=>M,infoVariant:()=>S,loadingVariant:()=>T,maxVisible:()=>k,pauseOnHover:()=>O,playground:()=>_,positions:()=>E,quickStart:()=>v,successVariant:()=>x,themes:()=>D,updateInPlace:()=>j,variants:()=>y,warningVariant:()=>C}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I=t((()=>{a(),o(),f=(e,t)=>{i(e);try{return t()}finally{c()}},p=(e,t,n=`default`)=>{let r=document.createElement(`button`);return r.textContent=e,r.classList.add(`playground`),n===`muted`&&r.classList.add(`playground--muted`),r.type=`button`,r.addEventListener(`click`,t),r},m=(...e)=>{let t=document.createElement(`div`);return t.style.cssText=`display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; justify-content: center; padding: 0.5rem;`,e.forEach(e=>t.append(e)),t},h=(e,t)=>({title:e.charAt(0).toUpperCase()+e.slice(1),message:t??`This is a ${e} toast`,variant:e,autoClose:!0,duration:5e3}),g={argTypes:{action:{control:{type:`object`},description:`Secondary action button`,name:`Action`,table:{category:`Behavior`}},autoClose:{control:{type:`boolean`},description:"Auto close the toast after `duration`",name:`Auto Close`,table:{category:`Behavior`}},closeButton:{control:{type:`boolean`},description:`Show a close button to dismiss the toast`,name:`Close Button`,table:{category:`Appearance`}},customIcon:{control:{type:`text`},description:`HTML string for the icon slot default content`,name:`Custom Icon`,table:{category:`Appearance`}},draggable:{control:{type:`boolean`},description:`Allow the toast to be dismissed by dragging`,name:`Draggable`,table:{category:`Behavior`}},duration:{control:{type:`number`},description:`Milliseconds before auto-close (only if autoClose)`,name:`Duration`,table:{category:`Behavior`}},message:{control:{type:`text`},description:`Message body of the toast`,name:`Message`,table:{category:`Content`}},pauseOnHover:{control:{type:`boolean`},description:`Pause the timer when the toast is hovered or focused`,name:`Pause On Hover`,table:{category:`Behavior`}},position:{control:{type:`select`},description:`Where the toast appears on screen`,name:`Position`,options:Object.values(s),table:{category:`Behavior`}},theme:{control:{type:`select`},description:`Color theme (light or dark)`,name:`Theme`,options:Object.values(l),table:{category:`Appearance`}},title:{control:{type:`text`},description:`Title of the toast`,name:`Title`,table:{category:`Content`}},variant:{control:{type:`select`},description:`Color variant of the toast`,name:`Variant`,options:Object.values(r),table:{category:`Appearance`}}},parameters:{layout:`centered`,options:{storySort:{order:[`Playground`,`Quick Start`,`Variants`,`Default Variant`,`Success Variant`,`Info Variant`,`Warning Variant`,`Error Variant`,`Loading Variant`,`Positions`,`Themes`,`Pause On Hover`,`Max Visible`,`Action Button`,`Update In Place`,`Global Defaults`,`Clearing Toasts`,`Custom Icon`]}}},component:`Toastive`,title:`Documentation/Toastive`},_={render:e=>{let t=p(`Show Toastive`,()=>{n({action:e.action||void 0,autoClose:e.autoClose,closeButton:e.closeButton,customIcon:e.customIcon||void 0,draggable:e.draggable,duration:e.duration,message:e.message,pauseOnHover:e.pauseOnHover,position:e.position,theme:e.theme,title:e.title,variant:e.variant})}),r=p(`Clear all`,()=>u(),`muted`);return m(t,r)},args:{autoClose:!0,closeButton:!1,customIcon:``,draggable:!0,duration:5e3,message:`👋 Hi there, I'm a toast!`,pauseOnHover:!0,position:s.BottomRight,theme:l.Light,title:``,variant:r.Default},parameters:{cssprops:{"toastive-wrapper-gap":{category:`Wrapper`,control:`text`,description:`The gap between each toastive element`,value:`1rem`},"toastive-wrapper-horizontal-offset":{category:`Wrapper`,control:`text`,description:`The horizontal offset of the toastive wrapper`,value:`1rem`},"toastive-wrapper-vertical-offset":{category:`Wrapper`,control:`text`,description:`The vertical offset of the toastive wrapper`,value:`1rem`},"toastive-font-family":{category:`Toastive`,subcategory:`Font`,control:`text`,description:`The font family of the toastive element`,value:`inherit`},"toastive-font-size":{category:`Toastive`,subcategory:`Font`,control:`text`,description:`The font size of the toastive element`,value:`0.8rem`},"toastive-content-color":{category:`Toastive`,subcategory:`Color`,control:`color`,description:`The color of the toastive element`,value:`#333`},"toastive-background-color":{category:`Toastive`,subcategory:`Color`,control:`color`,description:`The background color of the toastive element`,value:`#fff`},"toastive-border-color":{category:`Toastive`,subcategory:`Border`,control:`color`,description:`The border color of the toastive element`,value:`#ededed`},"toastive-border-width":{category:`Toastive`,subcategory:`Border`,control:`text`,description:`The border width of the toastive element`,value:`1px`},"toastive-border-radius":{category:`Toastive`,subcategory:`Border`,control:`text`,description:`The border radius of the toastive element`,value:`0.25rem`},"toastive-width":{category:`Toastive`,subcategory:`Layout`,control:`text`,description:`The width of the toastive element`,value:`350px`},"toastive-padding-horizontal":{category:`Toastive`,subcategory:`Layout`,control:`text`,description:`The horizontal padding of the toastive element`,value:`1rem`},"toastive-padding-vertical":{category:`Toastive`,subcategory:`Layout`,control:`text`,description:`The vertical padding of the toastive element`,value:`1rem`},"toastive-box-shadow":{category:`Toastive`,subcategory:`Shadow`,control:`text`,description:`The box shadow of the toastive element`,value:`0 4px 12px rgba(0, 0, 0, 0.1)`},"toastive-info-content-color":{category:`Toastive`,subcategory:`Variant`,control:`color`,description:`The color of the info variant`,value:`#0973dc`},"toastive-info-background-color":{category:`Toastive`,subcategory:`Variant`,control:`color`,description:`The background color of the info variant`,value:`#f0f8ff`},"toastive-info-border-color":{category:`Toastive`,subcategory:`Variant`,control:`color`,description:`The border color of the info variant`,value:`#d3e0fd`},"toastive-success-content-color":{category:`Toastive`,subcategory:`Variant`,control:`color`,description:`The color of the success variant`,value:`#008a2e`},"toastive-success-background-color":{category:`Toastive`,subcategory:`Variant`,control:`color`,description:`The background color of the success variant`,value:`#ecfdf3`},"toastive-success-border-color":{category:`Toastive`,subcategory:`Variant`,control:`color`,description:`The border color of the success variant`,value:`#d3fde5`},"toastive-warning-content-color":{category:`Toastive`,subcategory:`Variant`,control:`color`,description:`The color of the warning variant`,value:`#dc7609`},"toastive-warning-background-color":{category:`Toastive`,subcategory:`Variant`,control:`color`,description:`The background color of the warning variant`,value:`#fffcf0`},"toastive-warning-border-color":{category:`Toastive`,subcategory:`Variant`,control:`color`,description:`The border color of the warning variant`,value:`#fdf5d3`},"toastive-error-content-color":{category:`Toastive`,subcategory:`Variant`,control:`color`,description:`The color of the error variant`,value:`#e60000`},"toastive-error-background-color":{category:`Toastive`,subcategory:`Variant`,control:`color`,description:`The background color of the error variant`,value:`#fff0f0`},"toastive-error-border-color":{category:`Toastive`,subcategory:`Variant`,control:`color`,description:`The border color of the error variant`,value:`#ffe0e1`},"toastive-progress-color":{category:`Toastive`,subcategory:`Progress`,control:`color`,description:`The color of the progress bar`},"toastive-progress-height":{category:`Toastive`,subcategory:`Progress`,control:`text`,description:`The height of the progress bar`,value:`0.25rem`},"toastive-progress-opacity":{category:`Toastive`,subcategory:`Progress`,control:`text`,description:`The opacity of the progress bar`,value:`0.5`},"toastive-close-button-color":{category:`Toastive`,subcategory:`Close Button`,control:`color`,description:`The color of the close button`},"toastive-close-button-size":{category:`Toastive`,subcategory:`Close Button`,control:`text`,description:`The size of the close button`,value:`1rem`},"toastive-action-color":{category:`Toastive`,subcategory:`Action Button`,control:`color`,description:`The color of the action button`},"toastive-action-background-color":{category:`Toastive`,subcategory:`Action Button`,control:`color`,description:`The background color of the action button`},"toastive-action-border-color":{category:`Toastive`,subcategory:`Action Button`,control:`color`,description:`The border color of the action button`},"toastive-action-border-width":{category:`Toastive`,subcategory:`Action Button`,control:`text`,description:`The border width of the action button`,value:`1px`},"toastive-action-border-radius":{category:`Toastive`,subcategory:`Action Button`,control:`text`,description:`The border radius of the action button`,value:`0.25rem`}}}},v={render:()=>m(p(`Show Toastive 🚀`,()=>n({title:`Saved`,message:`Your changes have been stored.`,variant:r.Success,position:s.TopRight}))),tags:[`auto-docs`,`!dev`]},y={render:()=>m(p(`Default`,()=>n(h(r.Default))),p(`Success`,()=>n(h(r.Success))),p(`Info`,()=>n(h(r.Info))),p(`Warning`,()=>n(h(r.Warning))),p(`Error`,()=>n(h(r.Error))),p(`Loading`,()=>n({...h(r.Loading,`Loading...`),autoClose:!1}))),tags:[`auto-docs`,`!dev`]},b={render:()=>m(p(`Show default toast`,()=>n(h(r.Default)))),tags:[`auto-docs`,`!dev`]},x={render:()=>m(p(`Show success toast`,()=>n(h(r.Success)))),tags:[`auto-docs`,`!dev`]},S={render:()=>m(p(`Show info toast`,()=>n(h(r.Info)))),tags:[`auto-docs`,`!dev`]},C={render:()=>m(p(`Show warning toast`,()=>n(h(r.Warning)))),tags:[`auto-docs`,`!dev`]},w={render:()=>m(p(`Show error toast`,()=>n(h(r.Error)))),tags:[`auto-docs`,`!dev`]},T={render:()=>m(p(`Show loading toast`,()=>n({...h(r.Loading,`Loading...`),autoClose:!1}))),tags:[`auto-docs`,`!dev`]},E={render:()=>{let e=p(`Show one toast in each position`,()=>{n({position:s.TopLeft,variant:r.Default,theme:l.Dark,message:`↖️ Top left`}),n({position:s.TopCenter,variant:r.Default,theme:l.Dark,message:`⬆️ Top center`}),n({position:s.TopRight,variant:r.Default,theme:l.Dark,message:`↗️ Top right`}),n({position:s.BottomCenter,variant:r.Default,theme:l.Dark,message:`⬇️ Bottom center`}),n({position:s.BottomRight,variant:r.Default,theme:l.Dark,message:`↘️ Bottom right`}),n({position:s.BottomLeft,variant:r.Default,theme:l.Dark,message:`↙️ Bottom left`})}),t=p(`Clear all`,()=>u(),`muted`);return m(e,t)},tags:[`auto-docs`,`!dev`]},D={render:()=>{let e=p(`Light theme`,()=>n({variant:r.Info,message:`Light theme toast`,theme:l.Light})),t=p(`Dark theme`,()=>n({variant:r.Info,message:`Dark theme toast`,theme:l.Dark})),i=p(`Clear all`,()=>u(),`muted`);return m(e,t,i)},tags:[`auto-docs`,`!dev`]},O={render:()=>{let e=p(`With pause (15s)`,()=>n({message:`Hover or focus me to pause`,duration:15e3,pauseOnHover:!0})),t=p(`Without pause (15s)`,()=>n({message:`I do not pause on hover`,duration:15e3,pauseOnHover:!1}));return m(e,t)},tags:[`auto-docs`,`!dev`]},k={render:()=>{let e=p(`Spam 6 toasts (cap: 3 per position)`,()=>f({maxVisible:3},()=>{for(let e=0;e<6;e++)n({message:`Toast #${e+1}`,variant:r.Info})})),t=p(`Reset`,()=>{u(),c()});return m(e,t)},tags:[`auto-docs`,`!dev`]},A={render:()=>{let e=p(`Show "Item deleted" (with Undo)`,()=>{n({message:`Item moved to trash`,variant:r.Default,autoClose:!1,closeButton:!0,action:{label:`Undo`,onClick:()=>console.log(`undo clicked`),closeOnClick:!0}})}),t=p(`Show "Retry keeps toast open"`,()=>{n({message:`Connection lost`,variant:r.Warning,autoClose:!1,closeButton:!0,action:{label:`Retry`,onClick:()=>console.log(`retry clicked`),closeOnClick:!1}})}),i=p(`Clear all`,()=>u(),`muted`);return m(e,t,i)},tags:[`auto-docs`,`!dev`]},j={render:()=>{let e=null,t=null,i=p(`Simulate upload (loading → success)`,()=>{e&&e.close(),t&&=(clearTimeout(t),null),e=n({title:`Uploading`,message:`Please wait...`,variant:r.Loading,autoClose:!1}),t=setTimeout(()=>{e?.update({title:`Done`,message:`Upload complete.`,variant:r.Success,autoClose:!0}),t=null},2500)}),a=p(`Clear all`,()=>{t&&=(clearTimeout(t),null),e=null,u()});return m(i,a)},tags:[`auto-docs`,`!dev`]},M={render:()=>{let e={position:s.TopRight,duration:3e3,theme:l.Dark},t=p(`Success (uses defaults)`,()=>f(e,()=>n({variant:r.Success,message:`Inherits position + duration + theme from defaults`}))),i=p(`Error (uses defaults)`,()=>f(e,()=>n({variant:r.Error,message:`Same defaults, different variant`}))),a=p(`Reset defaults`,()=>{u()});return m(t,i,a)},tags:[`auto-docs`,`!dev`]},N={render:()=>{let e=p(`Spam 8 toasts`,()=>{for(let e=0;e<8;e++)n({message:`Toast #${e+1}`,variant:r.Info})}),t=p(`Clear top-right only`,()=>u(s.TopRight)),i=p(`Clear everything`,()=>u());return m(e,t,i)},tags:[`auto-docs`,`!dev`]},P={render:()=>{let e=p(`Show with custom rocket icon`,()=>n({variant:r.Info,message:`Custom SVG slot via customIcon`,customIcon:`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9.03429 5.96305L6.49114 8.49856C6.02369 8.9646 5.59488 9.3921 5.25624 9.77856C5.03877 10.0267 4.82145 10.2984 4.63737 10.5985L4.61259 10.5738C4.56555 10.5269 4.54201 10.5034 4.51839 10.4805C4.07636 10.0516 3.55641 9.71062 2.98636 9.47575C2.9559 9.4632 2.92498 9.45095 2.86314 9.42645L2.48449 9.27641C1.97153 9.07315 1.83482 8.41279 2.22514 8.02365C3.34535 6.90684 4.69032 5.56594 5.33941 5.29662C5.91185 5.05911 6.53023 4.98008 7.12664 5.06822C7.67311 5.14898 8.19006 5.42968 9.03429 5.96305Z" fill="currentColor"></path><path d="M13.3767 19.3132C13.5816 19.5212 13.7177 19.6681 13.8408 19.8251C14.0031 20.0322 14.1483 20.2523 14.2748 20.4829C14.4172 20.7426 14.5278 21.02 14.749 21.5748C14.929 22.0265 15.5272 22.1459 15.8746 21.7995L15.9586 21.7157C17.0788 20.5988 18.4237 19.2579 18.6938 18.6108C18.9321 18.04 19.0113 17.4235 18.9229 16.8289C18.8419 16.2841 18.5605 15.7688 18.0256 14.9273L15.474 17.4713C14.9959 17.9479 14.5576 18.385 14.1612 18.7273C13.9236 18.9325 13.6637 19.1376 13.3767 19.3132Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.4467 16.3769L20.2935 10.5476C21.1356 9.70811 21.5566 9.28836 21.7783 8.75458C22.0001 8.22081 22.0001 7.62719 22.0001 6.43996V5.87277C22.0001 4.04713 22.0001 3.13431 21.4312 2.56715C20.8624 2 19.9468 2 18.1157 2H17.5468C16.356 2 15.7606 2 15.2252 2.2211C14.6898 2.4422 14.2688 2.86195 13.4268 3.70146L7.57991 9.53078C6.59599 10.5117 5.98591 11.12 5.74966 11.7075C5.67502 11.8931 5.6377 12.0767 5.6377 12.2692C5.6377 13.0713 6.2851 13.7168 7.57991 15.0077L7.75393 15.1812L9.79245 13.1123C10.0832 12.8172 10.558 12.8137 10.8531 13.1044C11.1481 13.3951 11.1516 13.87 10.8609 14.1651L8.8162 16.2403L8.95326 16.3769C10.2481 17.6679 10.8955 18.3133 11.7 18.3133C11.8777 18.3133 12.0478 18.2818 12.2189 18.2188C12.8222 17.9966 13.438 17.3826 14.4467 16.3769ZM17.1935 9.5312C16.435 10.2874 15.2053 10.2874 14.4468 9.5312C13.6883 8.775 13.6883 7.54895 14.4468 6.79274C15.2053 6.03653 16.435 6.03653 17.1935 6.79274C17.952 7.54895 17.952 8.775 17.1935 9.5312Z" fill="currentColor"></path></svg>`})),t=p(`Show with custom star icon`,()=>n({variant:r.Success,message:`Any inline SVG works`,customIcon:`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="currentColor"></path></svg>`})),i=p(`Clear all`,()=>u(),`muted`);return m(e,t,i)},tags:[`auto-docs`,`!dev`]},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (args: ToastiveProps) => {
    const show = playgroundButton('Show Toastive', () => {
      showToastive({
        action: args.action || undefined,
        autoClose: args.autoClose,
        closeButton: args.closeButton,
        customIcon: args.customIcon || undefined,
        draggable: args.draggable,
        duration: args.duration,
        message: args.message,
        pauseOnHover: args.pauseOnHover,
        position: args.position,
        theme: args.theme,
        title: args.title,
        variant: args.variant
      });
    });
    const clear = playgroundButton('Clear all', () => clearToasts(), 'muted');
    return playgroundRow(show, clear);
  },
  args: {
    autoClose: true,
    closeButton: false,
    customIcon: '',
    draggable: true,
    duration: 5000,
    message: "👋 Hi there, I'm a toast!",
    pauseOnHover: true,
    position: ToastivePosition.BottomRight,
    theme: ToastiveTheme.Light,
    title: '',
    variant: ToastiveVariant.Default
  },
  parameters: {
    cssprops: {
      'toastive-wrapper-gap': {
        category: 'Wrapper',
        control: 'text',
        description: 'The gap between each toastive element',
        value: '1rem'
      },
      'toastive-wrapper-horizontal-offset': {
        category: 'Wrapper',
        control: 'text',
        description: 'The horizontal offset of the toastive wrapper',
        value: '1rem'
      },
      'toastive-wrapper-vertical-offset': {
        category: 'Wrapper',
        control: 'text',
        description: 'The vertical offset of the toastive wrapper',
        value: '1rem'
      },
      'toastive-font-family': {
        category: 'Toastive',
        subcategory: 'Font',
        control: 'text',
        description: 'The font family of the toastive element',
        value: 'inherit'
      },
      'toastive-font-size': {
        category: 'Toastive',
        subcategory: 'Font',
        control: 'text',
        description: 'The font size of the toastive element',
        value: '0.8rem'
      },
      'toastive-content-color': {
        category: 'Toastive',
        subcategory: 'Color',
        control: 'color',
        description: 'The color of the toastive element',
        value: '#333'
      },
      'toastive-background-color': {
        category: 'Toastive',
        subcategory: 'Color',
        control: 'color',
        description: 'The background color of the toastive element',
        value: '#fff'
      },
      'toastive-border-color': {
        category: 'Toastive',
        subcategory: 'Border',
        control: 'color',
        description: 'The border color of the toastive element',
        value: '#ededed'
      },
      'toastive-border-width': {
        category: 'Toastive',
        subcategory: 'Border',
        control: 'text',
        description: 'The border width of the toastive element',
        value: '1px'
      },
      'toastive-border-radius': {
        category: 'Toastive',
        subcategory: 'Border',
        control: 'text',
        description: 'The border radius of the toastive element',
        value: '0.25rem'
      },
      'toastive-width': {
        category: 'Toastive',
        subcategory: 'Layout',
        control: 'text',
        description: 'The width of the toastive element',
        value: '350px'
      },
      'toastive-padding-horizontal': {
        category: 'Toastive',
        subcategory: 'Layout',
        control: 'text',
        description: 'The horizontal padding of the toastive element',
        value: '1rem'
      },
      'toastive-padding-vertical': {
        category: 'Toastive',
        subcategory: 'Layout',
        control: 'text',
        description: 'The vertical padding of the toastive element',
        value: '1rem'
      },
      'toastive-box-shadow': {
        category: 'Toastive',
        subcategory: 'Shadow',
        control: 'text',
        description: 'The box shadow of the toastive element',
        value: '0 4px 12px rgba(0, 0, 0, 0.1)'
      },
      'toastive-info-content-color': {
        category: 'Toastive',
        subcategory: 'Variant',
        control: 'color',
        description: 'The color of the info variant',
        value: '#0973dc'
      },
      'toastive-info-background-color': {
        category: 'Toastive',
        subcategory: 'Variant',
        control: 'color',
        description: 'The background color of the info variant',
        value: '#f0f8ff'
      },
      'toastive-info-border-color': {
        category: 'Toastive',
        subcategory: 'Variant',
        control: 'color',
        description: 'The border color of the info variant',
        value: '#d3e0fd'
      },
      'toastive-success-content-color': {
        category: 'Toastive',
        subcategory: 'Variant',
        control: 'color',
        description: 'The color of the success variant',
        value: '#008a2e'
      },
      'toastive-success-background-color': {
        category: 'Toastive',
        subcategory: 'Variant',
        control: 'color',
        description: 'The background color of the success variant',
        value: '#ecfdf3'
      },
      'toastive-success-border-color': {
        category: 'Toastive',
        subcategory: 'Variant',
        control: 'color',
        description: 'The border color of the success variant',
        value: '#d3fde5'
      },
      'toastive-warning-content-color': {
        category: 'Toastive',
        subcategory: 'Variant',
        control: 'color',
        description: 'The color of the warning variant',
        value: '#dc7609'
      },
      'toastive-warning-background-color': {
        category: 'Toastive',
        subcategory: 'Variant',
        control: 'color',
        description: 'The background color of the warning variant',
        value: '#fffcf0'
      },
      'toastive-warning-border-color': {
        category: 'Toastive',
        subcategory: 'Variant',
        control: 'color',
        description: 'The border color of the warning variant',
        value: '#fdf5d3'
      },
      'toastive-error-content-color': {
        category: 'Toastive',
        subcategory: 'Variant',
        control: 'color',
        description: 'The color of the error variant',
        value: '#e60000'
      },
      'toastive-error-background-color': {
        category: 'Toastive',
        subcategory: 'Variant',
        control: 'color',
        description: 'The background color of the error variant',
        value: '#fff0f0'
      },
      'toastive-error-border-color': {
        category: 'Toastive',
        subcategory: 'Variant',
        control: 'color',
        description: 'The border color of the error variant',
        value: '#ffe0e1'
      },
      'toastive-progress-color': {
        category: 'Toastive',
        subcategory: 'Progress',
        control: 'color',
        description: 'The color of the progress bar'
      },
      'toastive-progress-height': {
        category: 'Toastive',
        subcategory: 'Progress',
        control: 'text',
        description: 'The height of the progress bar',
        value: '0.25rem'
      },
      'toastive-progress-opacity': {
        category: 'Toastive',
        subcategory: 'Progress',
        control: 'text',
        description: 'The opacity of the progress bar',
        value: '0.5'
      },
      'toastive-close-button-color': {
        category: 'Toastive',
        subcategory: 'Close Button',
        control: 'color',
        description: 'The color of the close button'
      },
      'toastive-close-button-size': {
        category: 'Toastive',
        subcategory: 'Close Button',
        control: 'text',
        description: 'The size of the close button',
        value: '1rem'
      },
      'toastive-action-color': {
        category: 'Toastive',
        subcategory: 'Action Button',
        control: 'color',
        description: 'The color of the action button'
      },
      'toastive-action-background-color': {
        category: 'Toastive',
        subcategory: 'Action Button',
        control: 'color',
        description: 'The background color of the action button'
      },
      'toastive-action-border-color': {
        category: 'Toastive',
        subcategory: 'Action Button',
        control: 'color',
        description: 'The border color of the action button'
      },
      'toastive-action-border-width': {
        category: 'Toastive',
        subcategory: 'Action Button',
        control: 'text',
        description: 'The border width of the action button',
        value: '1px'
      },
      'toastive-action-border-radius': {
        category: 'Toastive',
        subcategory: 'Action Button',
        control: 'text',
        description: 'The border radius of the action button',
        value: '0.25rem'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => playgroundRow(playgroundButton('Show Toastive 🚀', () => showToastive({
    title: 'Saved',
    message: 'Your changes have been stored.',
    variant: ToastiveVariant.Success,
    position: ToastivePosition.TopRight
  }))),
  tags: ['auto-docs', '!dev']
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => playgroundRow(playgroundButton('Default', () => showToastive(withMessage(ToastiveVariant.Default))), playgroundButton('Success', () => showToastive(withMessage(ToastiveVariant.Success))), playgroundButton('Info', () => showToastive(withMessage(ToastiveVariant.Info))), playgroundButton('Warning', () => showToastive(withMessage(ToastiveVariant.Warning))), playgroundButton('Error', () => showToastive(withMessage(ToastiveVariant.Error))), playgroundButton('Loading', () => showToastive({
    ...withMessage(ToastiveVariant.Loading, 'Loading...'),
    autoClose: false
  }))),
  tags: ['auto-docs', '!dev']
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => playgroundRow(playgroundButton('Show default toast', () => showToastive(withMessage(ToastiveVariant.Default)))),
  tags: ['auto-docs', '!dev']
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => playgroundRow(playgroundButton('Show success toast', () => showToastive(withMessage(ToastiveVariant.Success)))),
  tags: ['auto-docs', '!dev']
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => playgroundRow(playgroundButton('Show info toast', () => showToastive(withMessage(ToastiveVariant.Info)))),
  tags: ['auto-docs', '!dev']
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => playgroundRow(playgroundButton('Show warning toast', () => showToastive(withMessage(ToastiveVariant.Warning)))),
  tags: ['auto-docs', '!dev']
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => playgroundRow(playgroundButton('Show error toast', () => showToastive(withMessage(ToastiveVariant.Error)))),
  tags: ['auto-docs', '!dev']
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => playgroundRow(playgroundButton('Show loading toast', () => showToastive({
    ...withMessage(ToastiveVariant.Loading, 'Loading...'),
    autoClose: false
  }))),
  tags: ['auto-docs', '!dev']
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const showAll = playgroundButton('Show one toast in each position', () => {
      showToastive({
        position: ToastivePosition.TopLeft,
        variant: ToastiveVariant.Default,
        theme: ToastiveTheme.Dark,
        message: '↖️ Top left'
      });
      showToastive({
        position: ToastivePosition.TopCenter,
        variant: ToastiveVariant.Default,
        theme: ToastiveTheme.Dark,
        message: '⬆️ Top center'
      });
      showToastive({
        position: ToastivePosition.TopRight,
        variant: ToastiveVariant.Default,
        theme: ToastiveTheme.Dark,
        message: '↗️ Top right'
      });
      showToastive({
        position: ToastivePosition.BottomCenter,
        variant: ToastiveVariant.Default,
        theme: ToastiveTheme.Dark,
        message: '⬇️ Bottom center'
      });
      showToastive({
        position: ToastivePosition.BottomRight,
        variant: ToastiveVariant.Default,
        theme: ToastiveTheme.Dark,
        message: '↘️ Bottom right'
      });
      showToastive({
        position: ToastivePosition.BottomLeft,
        variant: ToastiveVariant.Default,
        theme: ToastiveTheme.Dark,
        message: '↙️ Bottom left'
      });
    });
    const clear = playgroundButton('Clear all', () => clearToasts(), 'muted');
    return playgroundRow(showAll, clear);
  },
  tags: ['auto-docs', '!dev']
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const showLight = playgroundButton('Light theme', () => showToastive({
      variant: ToastiveVariant.Info,
      message: 'Light theme toast',
      theme: ToastiveTheme.Light
    }));
    const showDark = playgroundButton('Dark theme', () => showToastive({
      variant: ToastiveVariant.Info,
      message: 'Dark theme toast',
      theme: ToastiveTheme.Dark
    }));
    const clear = playgroundButton('Clear all', () => clearToasts(), 'muted');
    return playgroundRow(showLight, showDark, clear);
  },
  tags: ['auto-docs', '!dev']
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const withPause = playgroundButton('With pause (15s)', () => showToastive({
      message: 'Hover or focus me to pause',
      duration: 15000,
      pauseOnHover: true
    }));
    const withoutPause = playgroundButton('Without pause (15s)', () => showToastive({
      message: 'I do not pause on hover',
      duration: 15000,
      pauseOnHover: false
    }));
    return playgroundRow(withPause, withoutPause);
  },
  tags: ['auto-docs', '!dev']
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    // The cap is only available via setDefaults(). Wrap the spam run in
    // \`withDefaults\` so the \`maxVisible\` cap applies during the burst but
    // is restored as soon as the click handler returns — no state leaks.
    const spam = playgroundButton('Spam 6 toasts (cap: 3 per position)', () => withDefaults({
      maxVisible: 3
    }, () => {
      for (let i = 0; i < 6; i++) {
        showToastive({
          message: \`Toast #\${i + 1}\`,
          variant: ToastiveVariant.Info
        });
      }
    }));
    const reset = playgroundButton('Reset', () => {
      clearToasts();
      resetDefaults();
    });
    return playgroundRow(spam, reset);
  },
  tags: ['auto-docs', '!dev']
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const undoableDelete = playgroundButton('Show "Item deleted" (with Undo)', () => {
      showToastive({
        message: 'Item moved to trash',
        variant: ToastiveVariant.Default,
        autoClose: false,
        closeButton: true,
        action: {
          label: 'Undo',
          onClick: () => console.log('undo clicked'),
          closeOnClick: true
        }
      });
    });
    const persistAction = playgroundButton('Show "Retry keeps toast open"', () => {
      showToastive({
        message: 'Connection lost',
        variant: ToastiveVariant.Warning,
        autoClose: false,
        closeButton: true,
        action: {
          label: 'Retry',
          onClick: () => console.log('retry clicked'),
          closeOnClick: false
        }
      });
    });
    const clear = playgroundButton('Clear all', () => clearToasts(), 'muted');
    return playgroundRow(undoableDelete, persistAction, clear);
  },
  tags: ['auto-docs', '!dev']
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Track the active simulation so spam-clicks don't stack toasts and
    // the "Clear all" button can cancel a pending timeout mid-flight.
    let active: ToastiveInstance | null = null;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const startSim = () => {
      if (active) active.close();
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      active = showToastive({
        title: 'Uploading',
        message: 'Please wait...',
        variant: ToastiveVariant.Loading,
        autoClose: false
      });
      timer = setTimeout(() => {
        active?.update({
          title: 'Done',
          message: 'Upload complete.',
          variant: ToastiveVariant.Success,
          autoClose: true
        });
        timer = null;
      }, 2500);
    };
    const show = playgroundButton('Simulate upload (loading → success)', startSim);
    const clear = playgroundButton('Clear all', () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      active = null;
      clearToasts();
    });
    return playgroundRow(show, clear);
  },
  tags: ['auto-docs', '!dev']
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Wrap each click in \`withDefaults\` so the position/duration/theme
    // defaults are only in effect for the lifetime of that single toast.
    // Without this wrapper the state would survive and contaminate the
    // rest of the docs once the user navigates to another story.
    const appDefaults = {
      position: ToastivePosition.TopRight,
      duration: 3000,
      theme: ToastiveTheme.Dark
    };
    const success = playgroundButton('Success (uses defaults)', () => withDefaults(appDefaults, () => showToastive({
      variant: ToastiveVariant.Success,
      message: 'Inherits position + duration + theme from defaults'
    })));
    const error = playgroundButton('Error (uses defaults)', () => withDefaults(appDefaults, () => showToastive({
      variant: ToastiveVariant.Error,
      message: 'Same defaults, different variant'
    })));
    const reset = playgroundButton('Reset defaults', () => {
      clearToasts();
    });
    return playgroundRow(success, error, reset);
  },
  tags: ['auto-docs', '!dev']
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const spam = playgroundButton('Spam 8 toasts', () => {
      for (let i = 0; i < 8; i++) {
        showToastive({
          message: \`Toast #\${i + 1}\`,
          variant: ToastiveVariant.Info
        });
      }
    });
    const clearTopRight = playgroundButton('Clear top-right only', () => clearToasts(ToastivePosition.TopRight));
    const clearAll = playgroundButton('Clear everything', () => clearToasts());
    return playgroundRow(spam, clearTopRight, clearAll);
  },
  tags: ['auto-docs', '!dev']
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rocketIcon = \`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9.03429 5.96305L6.49114 8.49856C6.02369 8.9646 5.59488 9.3921 5.25624 9.77856C5.03877 10.0267 4.82145 10.2984 4.63737 10.5985L4.61259 10.5738C4.56555 10.5269 4.54201 10.5034 4.51839 10.4805C4.07636 10.0516 3.55641 9.71062 2.98636 9.47575C2.9559 9.4632 2.92498 9.45095 2.86314 9.42645L2.48449 9.27641C1.97153 9.07315 1.83482 8.41279 2.22514 8.02365C3.34535 6.90684 4.69032 5.56594 5.33941 5.29662C5.91185 5.05911 6.53023 4.98008 7.12664 5.06822C7.67311 5.14898 8.19006 5.42968 9.03429 5.96305Z" fill="currentColor"></path><path d="M13.3767 19.3132C13.5816 19.5212 13.7177 19.6681 13.8408 19.8251C14.0031 20.0322 14.1483 20.2523 14.2748 20.4829C14.4172 20.7426 14.5278 21.02 14.749 21.5748C14.929 22.0265 15.5272 22.1459 15.8746 21.7995L15.9586 21.7157C17.0788 20.5988 18.4237 19.2579 18.6938 18.6108C18.9321 18.04 19.0113 17.4235 18.9229 16.8289C18.8419 16.2841 18.5605 15.7688 18.0256 14.9273L15.474 17.4713C14.9959 17.9479 14.5576 18.385 14.1612 18.7273C13.9236 18.9325 13.6637 19.1376 13.3767 19.3132Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.4467 16.3769L20.2935 10.5476C21.1356 9.70811 21.5566 9.28836 21.7783 8.75458C22.0001 8.22081 22.0001 7.62719 22.0001 6.43996V5.87277C22.0001 4.04713 22.0001 3.13431 21.4312 2.56715C20.8624 2 19.9468 2 18.1157 2H17.5468C16.356 2 15.7606 2 15.2252 2.2211C14.6898 2.4422 14.2688 2.86195 13.4268 3.70146L7.57991 9.53078C6.59599 10.5117 5.98591 11.12 5.74966 11.7075C5.67502 11.8931 5.6377 12.0767 5.6377 12.2692C5.6377 13.0713 6.2851 13.7168 7.57991 15.0077L7.75393 15.1812L9.79245 13.1123C10.0832 12.8172 10.558 12.8137 10.8531 13.1044C11.1481 13.3951 11.1516 13.87 10.8609 14.1651L8.8162 16.2403L8.95326 16.3769C10.2481 17.6679 10.8955 18.3133 11.7 18.3133C11.8777 18.3133 12.0478 18.2818 12.2189 18.2188C12.8222 17.9966 13.438 17.3826 14.4467 16.3769ZM17.1935 9.5312C16.435 10.2874 15.2053 10.2874 14.4468 9.5312C13.6883 8.775 13.6883 7.54895 14.4468 6.79274C15.2053 6.03653 16.435 6.03653 17.1935 6.79274C17.952 7.54895 17.952 8.775 17.1935 9.5312Z" fill="currentColor"></path></svg>\`;
    const starIcon = \`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="currentColor"></path></svg>\`;
    const showRocket = playgroundButton('Show with custom rocket icon', () => showToastive({
      variant: ToastiveVariant.Info,
      message: 'Custom SVG slot via customIcon',
      customIcon: rocketIcon
    }));
    const showStar = playgroundButton('Show with custom star icon', () => showToastive({
      variant: ToastiveVariant.Success,
      message: 'Any inline SVG works',
      customIcon: starIcon
    }));
    const clear = playgroundButton('Clear all', () => clearToasts(), 'muted');
    return playgroundRow(showRocket, showStar, clear);
  },
  tags: ['auto-docs', '!dev']
}`,...P.parameters?.docs?.source}}},F=[`playground`,`quickStart`,`variants`,`defaultVariant`,`successVariant`,`infoVariant`,`warningVariant`,`errorVariant`,`loadingVariant`,`positions`,`themes`,`pauseOnHover`,`maxVisible`,`actionButton`,`updateInPlace`,`globalDefaults`,`clearingToasts`,`customIcon`]}));I();export{F as __namedExportsOrder,A as actionButton,N as clearingToasts,P as customIcon,g as default,b as defaultVariant,w as errorVariant,M as globalDefaults,S as infoVariant,T as loadingVariant,k as maxVisible,d as n,O as pauseOnHover,_ as playground,E as positions,v as quickStart,x as successVariant,I as t,D as themes,j as updateInPlace,y as variants,C as warningVariant};