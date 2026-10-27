$(function(){
 $(window).on('scroll',function(){$('.fl-nav').toggleClass('solid',$(this).scrollTop()>10);
  $('.dest').each(function(){const r=this.getBoundingClientRect().top-innerHeight/2;const b=+$(this).data('y')||50;$(this).css('background-position-y',Math.max(0,Math.min(100,b+r*.03))+'%')})}).trigger('scroll');
 if(matchMedia('(prefers-reduced-motion:reduce)').matches)$('.banner video').each(function(){this.pause()});
 const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){$(x.target).addClass('in');io.unobserve(x.target)}}),{threshold:.12});
 $('.rv').each(function(i){$(this).css('transition-delay',(i%3)*.09+'s');io.observe(this)});
 $('.filters .f').on('click',function(){$('.f').removeClass('on');$(this).addClass('on');const c=$(this).data('f');
  $('.col-pk').each(function(){const s=c==='all'||String($(this).data('cat')).includes(c);
   if(s){$(this).show().css('opacity',0).animate({opacity:1},350)}else{$(this).hide()}})});
 $('#enq').on('submit',function(e){e.preventDefault();const d=Object.fromEntries(new FormData(this));
  const t=`Hi Flyloop Holidays! I'm ${d.name}. Interested in: ${d.service}. Travel date: ${d.date||'flexible'}. ${d.msg||''} (Ph: ${d.phone})`;
  window.open('https://wa.me/917356523300?text='+encodeURIComponent(t),'_blank')});
});
