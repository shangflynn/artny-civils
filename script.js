const IMAGE_FALLBACKS={
  'project-paving-crew.webp':'https://ungaroadman.com/assets/img/resource/about-11.webp',
  'project-finished-markings-2.webp':'https://www.wirtgen-group.com/binary/576/o17359v85_SUPER_8003i_Schwaebisch_Hall_Jobsite.jpg',
  'project-roller-close.webp':'https://www.wirtgen-group.com/binary/576/o17359v85_SUPER_8003i_Schwaebisch_Hall_Jobsite.jpg',
  'project-fresh-surface-1.webp':'https://ungaroadman.com/assets/img/resource/about-11.webp',
  'project-finished-markings-1.webp':'https://ungaroadman.com/assets/img/resource/about-11.webp',
  'tar-paving.webp':'https://ungaroadman.com/assets/img/resource/about-11.webp',
  'driveway-paving.webp':'https://www.hampshireconstruction.co.uk/img/project/block-paving-project-2.JPG',
  'brick-paving-pattern.webp':'https://www.awbsltd.com/image/cache/catalog/blog/aggregate-650x434.jpg',
  'tennis-court.webp':'https://strivetenniscourtresurfacing.com/photo/hero-tennis-court-resurfacing-230291.jpg',
  'road-grading.webp':'https://www.wirtgen-group.com/binary/576/o17359v85_SUPER_8003i_Schwaebisch_Hall_Jobsite.jpg',
  'concrete-pour.webp':'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=82',
  'site-clearance.webp':'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=82',
  'gate-installation.webp':'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=82',
  'gate-repair.webp':'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=82',
  'exterior-painting.webp':'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=82',
  'brickwork.webp':'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1600&q=82',
  'general-construction.webp':'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=82'
};
function installImageFallbacks(){document.querySelectorAll('img').forEach(img=>{const apply=()=>{try{const name=(new URL(img.src,location.href)).pathname.split('/').pop();const fallback=IMAGE_FALLBACKS[name];if(fallback&&img.src!==fallback){img.removeEventListener('error',apply);img.src=fallback}}catch(e){}};img.addEventListener('error',apply);if(img.complete&&img.naturalWidth===0)apply()})}
const f=document.getElementById('galleryFilters');if(f)f.onclick=e=>{let b=e.target.closest('button');if(!b)return;f.querySelectorAll('button').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('#galleryGrid figure').forEach(x=>x.hidden=b.dataset.filter!=='all'&&x.dataset.category!==b.dataset.filter)};
window.initLightbox=()=>{let l=document.getElementById('lightbox');if(!l)return;let a=[...document.querySelectorAll('.gallery img')],i=0,s=n=>{i=(n+a.length)%a.length;l.querySelector('img').src=a[i].src;l.classList.add('open')};a.forEach((x,n)=>x.onclick=()=>s(n));const c=l.querySelector('.close');const p=l.querySelector('.prev');const nx=l.querySelector('.next');if(c)c.onclick=()=>l.classList.remove('open');if(p)p.onclick=()=>s(i-1);if(nx)nx.onclick=()=>s(i+1);l.onclick=e=>{if(e.target===l)l.classList.remove('open')}};
document.addEventListener('DOMContentLoaded',()=>{installImageFallbacks();initLightbox();});