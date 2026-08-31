(function(){
window.ARTNY.resolve=function(){
  let p=location.pathname.replace(/\/+$/,'')||'/';
  if(p==='/')return window.ARTNY.home();
  if(p==='/about')return window.ARTNY.about();
  if(p==='/services')return window.ARTNY.servicesPage();
  if(p==='/projects')return window.ARTNY.projects();
  if(p==='/projects/asphalt-surfacing')return window.ARTNY.project();
  if(p==='/gallery')return window.ARTNY.gallery();
  if(p==='/feedback')return window.ARTNY.feedback();
  if(p==='/contact')return window.ARTNY.contact();
  if(p==='/quote')return window.ARTNY.quote();
  let s=window.ARTNY.services.find(x=>p===`/${x.slug}`);
  return s?window.ARTNY.servicePage(s):window.ARTNY.notFound();
};
})();