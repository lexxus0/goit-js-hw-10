import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as d}from"./assets/vendor-77e16229.js";const u=document.querySelector("#datetime-picker"),o=document.querySelector('button[data-action="start"]'),g=document.querySelector('span[data-action="days"]'),S=document.querySelector('span[data-action="hours"]'),y=document.querySelector('span[data-action="minutes"]'),C=document.querySelector('span[data-action="seconds"]');let r=null,i=null;o.disabled=!0;function x(e){const s=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),p=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:m,minutes:f,seconds:p}}function n(e){return String(e).padStart(2,"0")}const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,allowInput:!1,dateFormat:"Y-m-d H:i",onClose(e){const t=e[0];t<=new Date?(d.warning({title:"Error",message:"Please choose a date in the future",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",messageLineHeight:"150%",titleSize:"16px",titleLineHeight:"150%",position:"topRight",timeout:5e3,maxWidth:"400px",closeOnClick:!0,pauseOnHover:!0,iconColor:"#fff",closeOnEscape:!0}),o.disabled=!0):(r=t,o.disabled=!1)}};h("#datetime-picker",b);o.addEventListener("click",()=>{r&&(u.disabled=!0,o.disabled=!0,clearInterval(i),i=setInterval(()=>{const t=r-new Date;if(t<=0){clearInterval(i),d.success({title:"Finally!",message:"Countdown has ended",backgroundColor:"##228B22",position:"topRight",timeout:3e3,maxWidth:"400px",closeOnClick:!0,pauseOnHover:!1,messageSize:"16px",messageLineHeight:"150%",titleSize:"16px",titleLineHeight:"150%",closeOnEscape:!0,titleColor:"#fff",messageColor:"#fff"}),u.disabled=!1,o.disabled=!0;return}const{days:a,hours:c,minutes:l,seconds:s}=x(t);g.textContent=n(a),S.textContent=n(c),y.textContent=n(l),C.textContent=n(s)},1e3))});
//# sourceMappingURL=commonHelpers.js.map