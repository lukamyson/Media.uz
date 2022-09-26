

let gif = document.querySelector('.gif__div');
let asd = document.querySelector('.asd')

function Biggif() {
   gif.classList.add('active');
   asd.classList.add('active');
}

setTimeout(() => {
   Biggif()
   // recursion()
}, 4000);


let headerListMenu = document.querySelector('.header__list-menu');
let SpanHeader = document.querySelector('.header__span');
let ListHeader = document.querySelector('.header__list');


headerListMenu.addEventListener('click', function () {
   ListHeader.classList.toggle('active');
   SpanHeader.classList.toggle('active');
})

// let slide1 = document.querySelector('.slide__title1')





let headermenu = document.querySelector('.header__menu');
let menu = document.querySelector('.menu');
let menuList = document.querySelector('.menu__list');





headermenu.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
})







var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




let startTitle = document.querySelector('.slide__title')
let txt = startTitle.innerHTML
startTitle.innerHTML = ""
function recursion(x = 0) {
    startTitle.innerHTML += txt[x]
    x++
    if (x < txt.length) {
        setTimeout(() => {
            recursion(x)
        }, 100);
    }
}
recursion()

let btnsPlus = document.querySelectorAll('.flex__plus');
let btnsMinus = document.querySelectorAll('.flex__minus');
let btns = document.querySelectorAll(".btn");
let flexNum = document.querySelectorAll('.flex__num')

// console.log(btnsPlus);
// console.log(btnsMinus);

for (let i = 0; i < flexNum.length; i++) {
   btnsPlus[i].addEventListener("click", () => {
      let num = Number(flexNum[i].innerHTML);
      flexNum[i].innerHTML = num + 1
      if(num == 10) {
         flexNum[i].innerHTML = num;
         flexNum[i].style = `color: red; border: 1px solid red;`
      }
   });
   btnsMinus[i].addEventListener("click", () => {
      let num = Number(flexNum[i].innerHTML);
      if(num !== 0) {
         flexNum[i].innerHTML = num - 1
      }
      if(num !== 0) {
         flexNum[i].innerHTML = num - 1;
         flexNum[i].style = `color: blue; border:none;`
      }
   });
}



// btnPlusOrMinus.forEach(function (el) {
//     el.addEventListener('click', function(){
//         PlusOrMinus(this)
//     })
//  })




// function PlusOrMinus(element) {
//    let x = 0;
//     const parent = element.closest('.main__flex-box'),
//      parentId = parent.getAttribute('id');
//      out = parent.querySelector('.flex__num'),
//      elemData = element.getAttribute('data-symbol');
//      if (elemData == '+' && x < 10) {
//         x++
//      }else if (elemData == '-' && x > 0) {
//         x--
//      }
//      out.innerHTML = x
//  }
//  let flexNum = document.querySelector('.flex__num')
//  function plus() {
//    console.log(flexNum);
//  }