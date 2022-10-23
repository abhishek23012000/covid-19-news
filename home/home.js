// dark mode
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
 document.body.classList.toggle('dark-mode');
})

$(document).ready(function(){

    [...document.querySelectorAll('.first-column')].map(column => {
    column.style.setProperty('--animation', 'slide');
    column.style.setProperty('height', '200%');
    column.innerHTML = column.innerHTML + column.innerHTML;
    });
    
    });

    
$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
        $('#toTopBtn').fadeIn();
      } else {
        $('#toTopBtn').fadeOut();
      }
    });
  
    $('#toTopBtn').click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  });
  // menu.onclick = () => {
  //   menu.classList.toggle('fa-times');
  //   navbar.classList.toggle('active');
  // }

window.onload=()=>{
  const sections=document.querySelectorAll('.sections');
  const list=document.querySelectorAll('.nav-item');
  document.addEventListener("scroll",()=>{
    let active='';
    sections.forEach(section =>{
      const topHeight=section.offsetTop;
      // const sectionHeight=section.clientHeight;
      if(scrollY>=topHeight-350)
        active=section.getAttribute('id');
    })
    // console.log(list);
  list.forEach(li => {
    const link = li.querySelectorAll('a');
    link[0].classList.remove('active');
    if(li.classList.contains(active))
      link[0].classList.add('active');
  })
  })
}