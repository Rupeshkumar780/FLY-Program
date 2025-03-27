const load = document.querySelector("#loader");
const heading = document.querySelector(".top-heading");
const content = document.querySelector(".pillars");

window.addEventListener("load",(e)=>{
    setTimeout(() =>{
        load.style.display = "none";
        heading.style.display = "block";
        content.style.display = "block";
    },1000);
});

const boxes = document.querySelectorAll(".box");
boxes.forEach(b =>{
    b.addEventListener("mouseover", ()=>{
        b.style.transform = "scale(1.04)";
        b.style.border = "3.5px solid rgb(34, 34, 34)";
        b.style.transition = "ease 1s";
    });
    b.addEventListener("mouseout", ()=>{
        b.style.transform = "scale(1)";
        b.style.border = "3.5px solid rgb(86, 83, 83)";
        b.style.transition = "ease 1s";
    });
    b.addEventListener("touchstart", ()=>{
        b.style.transform = "scale(1.04)";
        b.style.border = "3.5px solid rgb(34, 34, 34)";
        b.style.transition = "ease 1s";
    });
    b.addEventListener("touchend", ()=>{
        b.style.transform = "scale(1)";
        b.style.border = "3.5px solid rgb(86, 83, 83)";
        b.style.transition = "ease 1s";
    });
})

const videos = document.querySelectorAll("iframe");
videos.forEach(vdo =>{
    vdo.addEventListener("mouseover",()=>{
        vdo.style.transform = "scale(1.1,1.05)";
        vdo.style.transition = "ease 2s";
        vdo.style.border = "3.5px solid rgb(83, 92, 255)";
    });
    vdo.addEventListener("mouseout",()=>{
        vdo.style.transform = "scale(1,1)";
        vdo.style.transition = "ease 2s";
        vdo.style.border = "3.5px solid rgb(122, 177, 255)";
    });
});
