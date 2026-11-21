const button=document.querySelector('.lang');
const items=document.querySelectorAll('[data-pl][data-en]');
let language=localStorage.getItem('strona-language')==='en'?'en':'pl';
function setLanguage(next){language=next;document.documentElement.lang=next;items.forEach(el=>el.innerHTML=el.dataset[next]);button.setAttribute('aria-pressed',String(next==='en'));button.setAttribute('aria-label',next==='pl'?'Switch language to English':'Zmień język na polski');document.title=next==='pl'?'Strona na Nowo — Twoja firma online':'Strona na Nowo — Your business online';document.querySelector('meta[name="description"]').content=next==='pl'?'Profesjonalne, przystępne cenowo strony internetowe dla małych firm. One-page za 999 zł netto.':'Affordable refreshes for existing small-business websites. One-page package for PLN 999 net.';localStorage.setItem('strona-language',next)}
button.addEventListener('click',()=>setLanguage(language==='pl'?'en':'pl'));
document.querySelector('#year').textContent=new Date().getFullYear();
setLanguage(language);
