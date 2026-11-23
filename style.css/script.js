
// ===== CONTENT =====
const U=(src,w=800)=>{
  // If it's already a full URL (http/https or starts with // or /), use it as-is
  if(/^(https?:)?\/\//.test(src) || src.startsWith('/')) return src;
  // Otherwise treat it as an Unsplash photo ID
  return `https://images.unsplash.com/photo-${src}?w=${w}&q=80&auto=format&fit=crop`;
};
const gallery=[
 ['https://www.kechangeambassadors.org/_next/image?url=%2Fimages%2Fhome%2Fyouth-mentorship-session.jpeg&w=1920&q=75','Creating Awareness Amongst Students','rl'],
 ['https://www.kechangeambassadors.org/_next/image?url=%2Fimages%2Fabout%2Fchake-staff-group.jpeg&w=1920&q=75','Sharing Moments','ru'],
 ['https://www.kechangeambassadors.org/_next/image?url=%2Fimages%2Ftraining%2Fcommunity-work-training.jpeg&w=640&q=75','Tree Planting Sessions','rr']];


const projects=[
    ['https://th.bing.com/th/id/OIP.CQtZ-dz99xTidHe6cRxUtgAAAA?w=239&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3','Green Future Initiative','Climate','Tree planting, climate education and sustainable agriculture for a greener tomorrow.'],
 ['https://th.bing.com/th/id/OIP.BwaE9HYLRri8wSk3rBNuqQHaD4?w=292&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3','Smart Mushroom Cultivation','Livelihoods','Teaching youth and women mushroom farming for nutrition and income.'],
 ['https://th.bing.com/th/id/OIP.Rl-NoMedhzvXyAGiqzzKYAHaFj?w=221&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3','Lake Circular Green Project','Environment','Protecting Lake Victoria through waste management, recycling and circular economy practices.'],
 ['https://th.bing.com/th/id/OIP.xFxhs1dRlIizbM__rWBCxwHaEK?w=300&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3','Teenage Pregnancy Awareness','Health','Community campaigns and safe spaces to prevent teenage pregnancy and early marriage.'],
 ['https://th.bing.com/th/id/OIP.zpD3oM6WKHDWKC_htjGWWgHaGS?w=193&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3','Waste to Wealth Project','Enterprise','Turning waste into products and income for young people and women.']];
const tests=[
 ['"CHAKE gave me the confidence to speak up and start my own mushroom product Innovation."','Dr. Caren Adhiambo Otieno.','Organizing Secretary, Homabay','https://www.kechangeambassadors.org/_next/image?url=%2Fimages%2Fabout%2Fteam%2Fcaren-adhiambo-otieno.jpeg&w=96&q=75'],
 ['"The CHAKE sessions opened conversations in our school that nobody dared to start."','Dr. Karen Otieno','Education','https://www.kechangeambassadors.org/_next/image?url=%2Fimages%2Fabout%2Fteam%2Fkaren-atieno.jpeg&w=96&q=75']];
 
const team=[
 ['Director','Elizabeth Achieng Odero','https://www.kechangeambassadors.org/_next/image?url=%2Fimages%2Fabout%2Fteam%2Felizabeth-achieng-odero.jpeg&w=96&q=75'],
 ['Treasure','Ms. Frida Adhiambo Okeyo','https://www.kechangeambassadors.org/_next/image?url=%2Fimages%2Fabout%2Fteam%2Ffrida-okeyo.jpeg&w=96&q=75'],
 ['Organizing Secretary','Dr. Caren Adhiambo Otieno','https://www.kechangeambassadors.org/_next/image?url=%2Fimages%2Fabout%2Fteam%2Fcaren-adhiambo-otieno.jpeg&w=96&q=75'],
 ['Education','Dr. Karen Otieno','https://www.kechangeambassadors.org/_next/image?url=%2Fimages%2Fabout%2Fteam%2Fkaren-atieno.jpeg&w=96&q=75'],
 ['Project Manager','Dr. Henric Ibsen','https://www.kechangeambassadors.org/_next/image?url=%2Fimages%2Fabout%2Fteam%2Fibsen-henric-ongidi.jpeg&w=96&q=75'],
 ['Communication Officer','Reinhard Otieno','https://www.kechangeambassadors.org/_next/image?url=%2Fimages%2Fabout%2Fteam%2Freinhard-otieno.jpeg&w=96&q=75'],
 ['Secretary','Paskalia Akinyi','https://www.kechangeambassadors.org/_next/image?url=%2Fimages%2Fabout%2Fteam%2Fpaskalia-glory-akinyi.jpeg&w=96&q=75'],
 ['Medical Doctor','Dr. Noel Curt Odero','https://www.kechangeambassadors.org/_next/image?url=%2Fimages%2Fabout%2Fteam%2Fnoel-curt-odero.jpeg&w=96&q=75'],
 ['Assistant Secretary','Solet Amondi Saoke','https://www.kechangeambassadors.org/_next/image?url=%2Fimages%2Fabout%2Fteam%2Fsolet-bunde.jpeg&w=96&q=75'],
 ['Assistant Youth Coordinator','Maryann Otieno','https://www.kechangeambassadors.org/_next/image?url=%2Fimages%2Fabout%2Fteam%2Fmaryanne-adhiambo.jpeg&w=96&q=75'],

 ['Youth Coordinator','Isaac Owuor','https://www.kechangeambassadors.org/_next/image?url=%2Fimages%2Fabout%2Fteam%2Fisaac-opiyo.jpeg&w=96&q=75']];



// ===== PARTNERS: Add your partner names and image links here =====
// Each entry: [Partner Name, Image URL]
const partners=[
 ['Rongo University','data:image/webp;base64,UklGRqYEAABXRUJQVlA4IJoEAAAQFQCdASpkAGQAPp1MoUulpCMhppgI0LATiWUA1iizx4D+xRnH22L7mF88ye6N/DvvP+DKa0tivRtQJUd8Y6BXO49Kewb0kvRpWw/UxMb6LvXmsn1DGVwJXFoWFHGb1jVNa46ADxVHrBN8ASBXf+gCeSEnRMuAOZOsEk2ZbMZPz4ApIxMaWNOZdcZiRWlK5L6JAQAOxjf14g5bIPb/l7PLjBaVuj+1Dt3tZvvgeq8jTGAA/vxKAAAQzHnbRcPsS6pQCb7dnsiUUhhsADzQaHdY/eLoHjrOLBiIj8ACURVEVNtFdhp5cx1f/Z391vYmIp+0mZQ6DwP0i9cZZvG6qFwE1+Ek4bmNaGrnCafPYgDwNC+9nTKrtJ49+stKrWsLCrwv5s84ifyEDuRQ+wV3oHf94l8N7VPp/WBIo7jwuyLxNJEq5GQbLaZcUlI7BFeGK3orEIKjxPGPi97NM9bxjoHpa+9SRdNML2UVr1MpsmkIdsT+EeQpsjXto5zFGDEXYHLJlrnkWMAR1D3zuR3fisphz+MFh4n9YXJWqO08/nT6RfJoN+QaQdtcqIo+7QFzrC1d9aXNuWpwPC+IHpTFs1B1kHGzLac08YShxfx8yST8PkI9Ln5Eqd1dWn/btGE7gwXb7ZdRo4CdZaXYvcnO+N61BbYMSsSNGxDpm3Gat17/7mR9cd7cUI1hXAuuKQ+b/rwTRnfNLiCNdL0PGW9GtvwHn5rxELJ60CKVo45XL2cLgyIbtjncdj5p4HsnXq8yUWMCDOivGtwMyllWgBImrMKwdFD24OdTTdU/Kt0ok/krTeFJ4dlhlKzdT9zojnNw4Eomt5bZ85HJibWOf8TRXEb4H+WfuTo9oN5PG7JUb1srBXC1saXfEb70n/XVXR+8Fh3SDlaDIUBA16nJ5CK4hzduk162ko/5en7rGedCb6zoHTcBZtYhjorBAiLb+QHlps3uEFjuOLH8b+LQbSilM3Mq6vMLDbxE8NKW7te303jXchXo8xij/2BR8reJEKa6CqQdk/ZNkn0WuNx2dWisVv7g/34DRgN2kkA7JFPTHaVH1ABGD4Xibh4VovbDXtJR13+y75uEQVp5LlDF6jNE7AFU3r4JD8kAmqwMhv/FNTbVcmrvNPwzzu9ACyI36VIPKSe7RVySdhKOYXjjp/etQ34VpfCCi9vyXp0wlci/E/zl3xX92Uoc3aYs+ZU/e5cY/CORCWKHcJ7z1QmUHN3+8td/ZkJs2d37s6kAAc2urjwj7NDG8ACEseh+wq0NhJ4phGSbaAe1lJSQF9Cghau6sVGXbU2drpsn2Wi3Ex59ZGcBLmkmG62U/rSeDIjUbdPtoXJTLesMVq/qDBpYvVBWtRpr8+LQqBH2s/GCdBY1ffGb604YhkRHImKzBamIABNKEWxRgbo98+Ht3cb2cSFbdVKlR9qMv8zc1YJYROG1t99gT5RRQLXKD/WPZVakEBofhxMsxnhCEkAGrwAsca1cQwtDnLCtU7CE9xNbcPF/HH85YocVLC57zvirFpqRKIE+b36XdtV+QpLNaFyRtJQMEHSce58jmmoAAAAAAA=='],
 ['Homa Bay County','https://www.bing.com/th/id/OIP.rV-1ifKjbGtQ58zFT4lmdAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2']
];

const $=s=>document.querySelector(s);
$('#gal').innerHTML=gallery.map((g,i)=>`<div class="card ${g[2]} d${i+1}"><div class="gi"><img loading="lazy" src="${U(g[0])}" alt="${g[1]}"></div><div class="cap">${g[1]}</div></div>`).join('');
$('#proj').innerHTML=projects.map((p,i)=>`<div class="card rl d${i+1}"><div class="pi"><img loading="lazy" src="${U(p[0],600)}" alt="${p[1]}"></div><div class="pf"><span class="tag">${p[2]}</span><h4>${p[1]}</h4><p>${p[3]}</p></div></div>`).join('');
$('#tst').innerHTML=tests.map((t,i)=>`<div class="card tc ${['rl','ru','rr'][i]} d${i+2}"><div class="stars">★★★★★</div><q class="testimonial">${t[0]}</q><div class="au"><div class="av"><img loading="lazy" src="${U(t[3],200)}" alt="${t[1]}"></div><div><strong>${t[1]}</strong><span>${t[2]}</span></div></div></div>`).join('');
$('#tm').innerHTML=team.map((t,i)=>`<div class="card tm ${i%2?'rr':'rl'} d${i+1}"><div class="tp"><img loading="lazy" src="${U(t[2],300)}" alt="${t[0]}"></div><h4>${t[1]}</h4><p>${t[0]}</p></div>`).join('');
$('#pt').innerHTML=partners.map((p,i)=>`<div class="card lg ${i%2?'rr':'rl'} d${(i%3)+1}"><div class="p-avatar"><img loading="lazy" src="${p[1]}" alt="${p[0]}"></div><div class="p-name">${p[0]}</div></div>`).join('');

// scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('v');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rl,.rr,.ru').forEach(el=>io.observe(el));

// count-up stats
const so=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;so.unobserve(e.target);
 const n=+e.target.dataset.n,s=e.target.dataset.s||'',t0=performance.now();
 const f=t=>{const k=Math.min((t-t0)/1400,1);e.target.textContent=Math.round(n*(1-Math.pow(1-k,3)))+(k===1?s:'');if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)}),{threshold:.6});
document.querySelectorAll('[data-n]').forEach(el=>so.observe(el));

// ===== PROJECT AUTO-SCROLL EVERY 5 SECONDS =====
(function projectAutoScroll(){
  const el = document.getElementById('proj');
  if(!el) return;
  const cards = el.querySelectorAll('.card');
  if(!cards.length) return;
  let currentIndex = 0;
  let paused = false;
  let timer = null;

  function scrollToCard(index){
    if(index >= cards.length) index = 0;
    if(index < 0) index = cards.length - 1;
    currentIndex = index;
    const card = cards[index];
    if(card){
      el.scrollTo({ left: card.offsetLeft - 4, behavior: 'smooth' });
    }
  }

  function nextCard(){
    if(!paused){
      scrollToCard(currentIndex + 1);
    }
  }

  timer = setInterval(nextCard, 5000);

  el.addEventListener('mouseenter', ()=> paused = true);
  el.addEventListener('mouseleave', ()=> paused = false);

  el.addEventListener('touchstart', ()=> paused = true, {passive:true});
  el.addEventListener('touchend', ()=>{
    setTimeout(()=> paused = false, 8000);
  }, {passive:true});

  el.addEventListener('wheel', ()=>{
    paused = true;
    clearTimeout(el._resumeT);
    el._resumeT = setTimeout(()=> paused = false, 8000);
  }, {passive:true});

  el.addEventListener('scroll', ()=>{
    if(paused){
      const scrollLeft = el.scrollLeft;
      cards.forEach((card, i)=>{
        if(Math.abs(card.offsetLeft - 4 - scrollLeft) < 40) currentIndex = i;
      });
    }
  }, {passive:true});
})();

// scroller arrows
document.querySelectorAll('[data-sc]').forEach(b=>b.onclick=()=>$('#proj').scrollBy({left:b.dataset.sc*340,behavior:'smooth'}));

// ===== MOBILE SIDEBAR (only for small screens) =====
const hamburger = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
const closeSidebar = document.getElementById('closeSidebar');

function openSidebar(){
  sidebar.classList.add('open');
  overlay.classList.add('on');
  document.body.style.overflow = 'hidden';
}
function closeSidebarFn(){
  sidebar.classList.remove('open');
  overlay.classList.remove('on');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openSidebar);
closeSidebar.addEventListener('click', closeSidebarFn);
overlay.addEventListener('click', closeSidebarFn);
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape' && sidebar.classList.contains('open')) closeSidebarFn();
});

// ===== DONATE MODAL =====
const ov=$('#ov'),open=e=>{e.preventDefault();ov.classList.add('on')},close=()=>ov.classList.remove('on');
document.querySelectorAll('[data-donate]').forEach(b=>b.addEventListener('click',open));
$('#cl').onclick=close;ov.onclick=e=>{if(e.target===ov)close()};document.onkeydown=e=>{if(e.key==='Escape')close()};
document.querySelectorAll('[data-copy]').forEach(b=>b.onclick=()=>{
 (navigator.clipboard?navigator.clipboard.writeText(b.dataset.copy):Promise.reject()).catch(()=>{}).finally(()=>{const t=$('#ts');t.textContent='Number copied: '+b.dataset.copy;t.classList.add('s');setTimeout(()=>t.classList.remove('s'),2000)})});