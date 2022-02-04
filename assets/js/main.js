
const toggler = document.getElementById('toggler');
let sections = document.getElementsByTagName('section');
let myLink = document.getElementsByClassName('nav-link');
const nav_collapse = document.getElementById('navcollapser');

// Dynamically setting height
const mycol = document.querySelector(".col");
function outputsize() {
    let cW = mycol.offsetWidth;
    let mycoh = Array.from(document.getElementsByClassName('col'));
    let chead =  Array.from(document.getElementsByClassName('card-header'));
    mycoh.forEach((colHeight)=>{
        let myncol = (cW*1.5) +'px';
        colHeight.style.height = myncol;
    })
    chead.forEach((head)=>{
        head.style.height = (cW*1.5) /3  +'px';
        head.style.width= (cW*1.5) /3  +'px' ;
    }) 
}
outputsize()
new ResizeObserver(outputsize).observe(mycol)

// getting the url clicks
const scroller = () =>{
 Array.from(myLink).forEach((e, i) => {
        e.addEventListener('click', (d)=>{
            d.target.preventDefault;
        });
    });
    
};
scroller();

// setting navbar for mobile
const toggleNav = () =>{
    nav_collapse.hidden = true;
    toggler.addEventListener('click', (e)=> {
        const thisEl = e.target;
        let x = thisEl.ariaExpanded;
        if (x == "false"){
            x = "true"
        } else {
            x = "false"
        }
        thisEl.classList.toggle("x");
        thisEl.setAttribute("aria-expanded", x);
        nav_collapse.classList.toggle("show");
        console.log(x);
    });
};
toggleNav();


