document.querySelectorAll('.demo-action').forEach((el)=>el.addEventListener('click',(event)=>{event.preventDefault();let toast=document.createElement('div');toast.className='demo-toast';toast.textContent=el.dataset.message||'CTA demo berhasil diklik.';document.body.appendChild(toast);requestAnimationFrame(()=>toast.classList.add('show'));setTimeout(()=>{toast.classList.remove('show');setTimeout(()=>toast.remove(),260)},2500)}));

// FAQ accordion
document.querySelectorAll('.x-faq-q').forEach((btn)=>btn.addEventListener('click',()=>{
  const item=btn.closest('.x-item');
  const group=btn.closest('.x-faq');
  const willOpen=!item.classList.contains('open');
  if(group&&group.hasAttribute('data-single')){
    group.querySelectorAll('.x-item.open').forEach((o)=>o.classList.remove('open'));
  }
  item.classList.toggle('open',willOpen);
}));

// Scroll reveal
if('IntersectionObserver' in window){
  const io=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){entry.target.classList.add('in');io.unobserve(entry.target);}
    });
  },{threshold:.12});
  document.querySelectorAll('.x-reveal').forEach((el)=>io.observe(el));
}else{
  document.querySelectorAll('.x-reveal').forEach((el)=>el.classList.add('in'));
}