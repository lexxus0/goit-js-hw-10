/* empty css                      */import{f as h,i as f}from"./assets/vendor-77e16229.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d=document.querySelector("#datetime-picker"),r=document.querySelector('button[data-action="start"]'),g=document.querySelector('span[data-action="days"]'),y=document.querySelector('span[data-action="hours"]'),S=document.querySelector('span[data-action="minutes"]'),C=document.querySelector('span[data-action="seconds"]');let u=null,l=null;r.disabled=!0;function b(o){const t=Math.floor(o/864e5),a=Math.floor(o%864e5/36e5),m=Math.floor(o%864e5%36e5/6e4),p=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:a,minutes:m,seconds:p}}function c(o){return String(o).padStart(2,"0")}const x={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,allowInput:!1,dateFormat:"Y-m-d H:i",onClose(o){const n=o[0];n<=new Date?(f.warning({title:"Error",message:"Please choose a date in the future",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",messageLineHeight:"150%",titleSize:"16px",titleLineHeight:"150%",position:"topRight",timeout:5e3,maxWidth:"400px",closeOnClick:!0,pauseOnHover:!0,iconColor:"#fff",closeOnEscape:!0}),r.disabled=!0):(u=n,r.disabled=!1)}};h("#datetime-picker",x);r.addEventListener("click",()=>{u&&(d.disabled=!0,r.disabled=!0,clearInterval(l),l=setInterval(()=>{const n=u-new Date;if(n<=0){clearInterval(l),f.success({title:"Finally!",message:"Countdown has ended",backgroundColor:"##228B22",position:"topRight",timeout:3e3,maxWidth:"400px",closeOnClick:!0,pauseOnHover:!1,messageSize:"16px",messageLineHeight:"150%",titleSize:"16px",titleLineHeight:"150%",closeOnEscape:!0,titleColor:"#fff",messageColor:"#fff"}),d.disabled=!1,r.disabled=!0;return}const{days:s,hours:i,minutes:e,seconds:t}=b(n);g.textContent=c(s),y.textContent=c(i),S.textContent=c(e),C.textContent=c(t)},1e3))});
//# sourceMappingURL=commonHelpers.js.map