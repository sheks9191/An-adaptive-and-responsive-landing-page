//..............Mobile Nav..................................

const menuBar = document.querySelector('.menu-bar'),
      headerCon = document.querySelector('.header-container'),
      navLis = document.querySelectorAll('.header-container ul li');


      menuBar.addEventListener('click', (e) => {
           menuBar.classList.toggle('active')
           headerCon.classList.toggle('active')
      })

      navLis.forEach(navLi => {
          navLi.addEventListener('mouseenter', () => {
              navLi.classList.add('active')
          })

           navLi.addEventListener('mouseleave', () => {
              navLi.classList.remove('active')
          })
      })

       navLis.forEach(navLi => {
           navLi.addEventListener('click', () => {
           menuBar.classList.remove('active')
           headerCon.classList.remove('active')
           })
       })


//...............Testimonial Slider.................................

const boxes = document.querySelectorAll('.testimonial-rows .box'),
      leftBtn = document.querySelector('.control-btns .fa-chevron-left'),
      rightBtn = document.querySelector('.control-btns .fa-chevron-right');



let img = 0

setInterval(slideImg, 5000)

function slideImg() {
    img++
    slideImages()
}

function slideImages() {

   if(img > boxes.length - 1) {
       img = 0
   }else if(img < 0) {
       img = boxes.length - 1
   }

   boxes.forEach(box => {
       box.style.transform = `translateX(${-400 * img}px)`
   })
}

rightBtn.addEventListener('click', () => {
    img--
    slideImages()
    leftBtn.classList.remove('active')
    rightBtn.classList.add('active')
})

leftBtn.addEventListener('click', () => {
    img++
    slideImages()
     leftBtn.classList.add('active')
    rightBtn.classList.remove('active')
})

//...........................................................................
const cons = document.querySelectorAll('.container')


 window.addEventListener('scroll', displayCon)

    displayCon()

    function displayCon() {
        const displayPoint = window.innerHeight * 0.9
        cons.forEach(con => {
            let conTop = con.getBoundingClientRect().top

            if(conTop > displayPoint){
                con.style.opacity = 0;
            }else {
                con.style.opacity = 1;
                con.style.transition = `opacity ${500}ms ease-in ${500}ms`
                con.classList.add('active')
            }
        })
        
    }
