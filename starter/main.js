

// basic ES5 function declaration
// funtion name(){}

var myname = "Nirvana Studios"

function popsomething() {
alert( myname + "i have been coding since 12")
}




console.log(document)

var ourbody = document.querySelector(".ourpagebody")

// ourbody.style.background = "black"



var hamburger = document.querySelector(".hamburger-container")
var mobilelinkscontainer = document.querySelector('.mobile-links-container')

console.log(hamburger)

// hamburger.classlist.add(yam)


function addandremove() {
    hamburger.classList.toggle('showburger')
    mobilelinkscontainer.classList.toggle('showmobilelinks')
}