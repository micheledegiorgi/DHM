function FirstLoad() {
    try {
        if (!document.cookie.split('; ').find(row => row.startsWith('FirstLoad'))) {
            location.href = 'beforewestart.html';
            document.cookie = "FirstLoad=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        }
    } catch (e) {
        alert("FirstLoad " + e);
    }
}

function StartSlider() {
    try {
        InstructionSlider = document.querySelectorAll(".slide");
        ResetSlider();
        for (let i = 0; i < InstructionSlider.length; i++) {
            InstructionSlider[i].addEventListener("click", ProgressSlider);
        }
        InstructionSlider[0].style.display = "block";
    } catch (e) {
        alert("StartSlider " + e);
    }
}

function StartTopicSlider() {
    try {
        InstructionSlider = document.querySelectorAll(".slide");
        topicslidersec = document.getElementById("topicslider");
        ResetSlider();
        for (let i = 0; i < InstructionSlider.length; i++) {
            InstructionSlider[i].addEventListener("click", ProgressTopicSlider);
        }
        InstructionSlider[0].style.display = "block";
    } catch (e) {
        alert("StartTopicSlider " + e);
    }
}

function ProgressTopicSlider() {
    try {
        ResetSlider();
        InstructionSlider[current + 1].style.display = "block";
        current++;
        if (current === 2) {
            current = -1;
        }
    } catch (e) {
        alert("ProgressTopicSlider " + e);
    }
}

function ProgressSlider() {
    try {
        ResetSlider();
        InstructionSlider[current + 1].style.display = "block";
        current++;
        if (current === 4) {
            current = -1;
            if (Sliderflag === false) {
                Readthemanifesto();
                Sliderflag = true;
            }
        }
    } catch (e) {
        alert("ProgressSlider" + e);
    }
}

function ResetSlider() {
    try {
        for (let i = 0; i < InstructionSlider.length; i++) {
            InstructionSlider[i].style.display = "none";
        }
    } catch (e) {
        alert("ResetSlider" + e)
    }
}

function Readthemanifesto() {
    try {
        let Ready = document.createElement("section");
        Ready.setAttribute("id", "Ready");
        let h2 = document.createElement("h2"),
            th = document.createTextNode("You're ready"),
            p = document.createElement("p"),
            tp = document.createTextNode("Come on now! What are you waiting for?");

        h2.appendChild(th);
        p.appendChild(tp);

        let anchor = document.createElement("a"),
            readybutton = document.createElement("input");

        anchor.setAttribute("href", "index.html");
        readybutton.setAttribute("type", "button");
        readybutton.setAttribute("value", "Read the manifesto");
        readybutton.setAttribute("class", "btn");
        readybutton.setAttribute("id", "readybutton");

        anchor.appendChild(readybutton);
        Ready.appendChild(h2);
        Ready.appendChild(p);
        Ready.appendChild(anchor);
        Body.appendChild(Ready);
    } catch (e) {
        alert("ResetSlider" + e)
    }
}

function AboutRedirect() {
    try {
        aboutmenu = document.getElementById("aboutmenu");
        toggler = document.getElementById("toggler");

        aboutmenu.addEventListener("click", function () {
            toggler.click();
        });
    } catch (e) {
        alert("AboutRedirect" + e);
    }
}

function CConScroll() {
    try {
        let hamburger = document.getElementById("hamburger");

        window.addEventListener('scroll', function () {
            let y = window.scrollY;
            if (y < 650) {
                hamburger.style.backgroundColor = "#fff";
            } else {
                hamburger.style.backgroundColor = "#2e282aff";
            }

        });
    } catch (e) {
        alert("CConScroll" + e)
    }
}

function init(){
    const loader = document.querySelector(".loader");
    const content = document.querySelector(".main");
    setTimeout(()=> {
        loader.style.opacity = 0;
        loader.style.display = "none";

        content.style.opacity = 1;
        content.style.display = "block";
    }, 4000);
}


let InstructionSlider;
let SlideContent5;
let current;
let Sliderflag;
let Body;
let pagetitle;
let toggler;
let aboutmenu;


function LoadManager() {
    try {
        Body = document.querySelector("body");
        current = 0;
        Sliderflag = false;
        
        
        if (window.location.pathname == '/DHM/index.html' ||
            window.location.pathname == '/DHM/instructionmanual.html' ||
            window.location.pathname == '/DHM/introduction.html' ||
            window.location.pathname == '/DHM/searchelsewhere.html') {
                FirstLoad();
        }

        if (window.location.pathname == '/DHM/beforewestart.html') {
            init();
        }

        if (window.location.pathname == '/DHM/instructionmanual.html') {
            StartSlider();
        }

        if (window.location.pathname == '/DHM/index.html') {
            AboutRedirect();
        }

        if (window.location.pathname == '/DHM/topic/whatdh.html' ||
            window.location.pathname == '/DHM/topic/opensource.html' ||
            window.location.pathname == '/DHM/topic/generativehumanities.html' ||
            window.location.pathname == '/DHM/topic/processgod.html' ||
            window.location.pathname == '/DHM/topic/theorypractice.html' ||
            window.location.pathname == '/DHM/topic/curation.html' ||
            window.location.pathname == '/DHM/topic/discfinitude.html' ||
            window.location.pathname == '/DHM/topic/beyonddh.html') {
            CConScroll();
        }

        if (window.location.pathname == '/topic/opensource.html') {
            StartTopicSlider();
        }


        

    } catch (e) {
        alert("LoadManager " + e);
    }
}

window.onload = LoadManager;