function scrollToSection(){

document.getElementById("about").scrollIntoView({
behavior:"smooth"
})

}



/* COUNTER */

const counters=document.querySelectorAll(".counter")

counters.forEach(counter=>{

counter.innerText="0"

const update=()=>{

const target=+counter.getAttribute("data-target")

const c=+counter.innerText

const increment=target/200

if(c<target){

counter.innerText=Math.ceil(c+increment)

setTimeout(update,10)

}

else{

counter.innerText=target

}

}

update()

})



/* GALLERY SLIDER */

let slides=document.querySelectorAll(".slide")

let index=0

setInterval(()=>{

slides[index].classList.remove("active")

index=(index+1)%slides.length

slides[index].classList.add("active")

},4000)

window.addEventListener("scroll",function(){

const nav=document.querySelector("nav")

if(window.scrollY>50){

nav.style.background="rgba(15,23,42,0.95)"

}else{

nav.style.background="rgba(255,255,255,0.1)"

}

})