const sections=document.querySelectorAll('section');
const navLi=document.querySelectorAll('.navbar-nav li');

window.addEventListener('scroll',()=>{
    let current='';    
    sections.forEach(section=>{
        const sectionTop=section.offsetTop;
        const sectionHeight=section.clientHeight;
        if(scrollY-10>=(sectionTop-sectionHeight/2.5)){
            current=section.getAttribute('id');
        }
    })
    console.log(current)
    navLi.forEach(li=>{
    li.classList.remove('active');
    if(li.classList.contains(current)){
        li.classList.add('active');
    }    
    })
    
})
