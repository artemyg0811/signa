function s(){var b={};onkeydown=onkeyup=function(a){a=a||event;b[a.keyCode]="keydown"==a.type;b[16]&&b[17]&&b[18]&&b[68]&&(document.querySelector(".signa")||(a=document.createElement("div"),a.classList.add("signa"),a.innerHTML='<style>.signa{position:fixed;bottom:-10px;left:50%;max-width:900px;width:100%;-webkit-transform:translate(-50%, 100%);-ms-transform:translate(-50%, 100%);transform:translate(-50%, 100%);padding:0 16px;-webkit-transition:.4s;-o-transition:.4s;transition:.4s;z-index:1}.signa._show{bottom:24px;-webkit-transform:translate(-50%, 0);-ms-transform:translate(-50%, 0);transform:translate(-50%, 0)}.signa__body{padding:12px 24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-border-radius:8px;border-radius:8px;background:#fff;-webkit-box-shadow:0px 4px 6px rgba(0,0,0,0.1);box-shadow:0px 4px 6px rgba(0,0,0,0.1)}.signa-text{font-size:14px;line-height:1.4;color:#333;opacity:.7}.signa-text span{font-weight:600}.signa-text a{color:inherit;text-decoration:underline;-webkit-transition:.2s;-o-transition:.2s;transition:.2s}.signa-text a:hover{color:#009E74}.signa-close{height:18px;background:none;border:none;margin:0 0 0 16px;cursor:pointer}.signa-close svg path,.signa-close svg rect{-webkit-transition:.2s;-o-transition:.2s;transition:.2s}.signa-close:hover svg path{fill-opacity:.4}.signa-close:hover svg rect{stroke-opacity:.4}.signa-close svg{width:18px;height:18px}</style><div class="signa__body"><div class="signa-text">\u0421\u0430\u0439\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043b <span>\u0423\u0433\u0440\u044e\u043c\u043e\u0432 \u0410\u0440\u0442\u0451\u043c</span>: <a href="https://ugryumov.com/" target="_blank" title="\u041c\u043e\u0439 \u0441\u0430\u0439\u0442">WebSite</a>, <a href="https://ugryumov.com/contacts/telegram" target="_blank" title="\u041c\u043e\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u043c">Telegram</a>, <a href="https://ugryumov.com/contacts/vk" target="_blank" title="\u042f \u0432\u043e \u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435">\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435</a></div><button class="signa-close"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.75737 5.818L5.81803 4.75734L8.99999 7.9393L12.182 4.75732L13.2426 5.81798L10.0607 8.99996L13.2427 12.182L12.182 13.2426L8.99999 10.0606L5.81801 13.2426L4.75735 12.1819L7.93933 8.99996L4.75737 5.818Z" fill="#333333" fill-opacity="0.6"/><rect x="0.5" y="0.5" width="17" height="17" rx="8.5" stroke="#333333" stroke-opacity="0.6"/></svg></button></div>',
document.querySelector("body").append(a)),setTimeout(function(){var c=document.querySelector(".signa"),d=c.querySelector(".signa-close");c.classList.toggle("_show");d.addEventListener("click",function(){c.classList.remove("_show")})},1))}}s();