function sayHello(){
    alert("안녕");
}
sayHello();

// 1. HTML -> js 
// 햄버거메뉴 -> navToggleDiv 
// 햄버거메뉴 i - > navToggleI
// .nav-list -> navListUl
// const navToggleDiv = document.getElementById("nav_toggle");
const navToggleI = nav_toggle.getElemntsByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-list")[0];


// 2. Event Handling
// 햄버거메뉴 클릭하면, 햄버거메뉴 i "bi bi-list<-> X "bi bi -x-lg"
// 햄버거메뉴 클릭하면, .nav-list에 .show-menu 보여주기 <-> 안 보여주기
nav_toggle.onclick =  () =>  alert("안녕"); //   ok 익명함수(람다식)
// nav_toggle.onclick =   alert("안녕"); // not ok

// ---------------------------------
// HTML -> js
// id 
// const navToggleDiv = document.getElementById("nav_toggle");
// const navToggleDiv = nav_toggle; // js 변수규칙은 지켜져야 함 

// class
// const navToggleDiv = document.getElementsByClassName("nav-toggle")[0];

// tag
// const navToggleDiv = document.getElementsByTagName("div")[0];

// querySelector, querySelectorAll
// const navToggleDiv = document.querySelector("#nav_toggle");
// const navToggleDiv = document.querySelectorAll(".nav-toggle")[0];
// const navToggleDiv = document.querySelectorAll("div")[0];






   