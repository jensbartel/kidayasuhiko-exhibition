// Shrinking Header
function scrollFunction() {


    if ($(window).width() > 768) {
        console.log($(window).width());
        var logoHeightExpand = 50;
        var logoHeightCollapse = logoHeightExpand * .75;
        var paddingExpand = "20px 0";
        var paddingCollapse = "10px 0";
    } else if ($(window).width() < 415) {
        var logoHeightExpand = 32;
        var logoHeightCollapse = logoHeightExpand * .8;
        var paddingExpand = "5px 0";
        var paddingCollapse = "0";
    } else {
        console.log($(window).width());
        var logoHeightExpand = 44;
        var logoHeightCollapse = logoHeightExpand * .8;
        var paddingExpand = "20px 0";
        var paddingCollapse = "10px 0";
    }



    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").style.padding = paddingCollapse;
        document.getElementById("logo").style.height = logoHeightCollapse + "px";
    } else {
        document.getElementById("header").style.padding = paddingExpand;
        document.getElementById("logo").style.height = logoHeightExpand + "px";
    }
}

window.onscroll = function () {
    scrollFunction();
};




// Hamburger Button 
function menuButtonAnimation() {

    var element = document.getElementById("hamburger");
    element.classList.toggle("is-active");

    var sideDrawer = document.getElementById("side-drawer");

    // is side-drawer is visible, close all submenus
    var submenus = document.getElementsByClassName("submenu");
    if (sideDrawer.classList.contains("active")) {
        var i;
        for (i = 0; i < submenus.length; i++) {
            submenus[i].classList.remove("active");
        }
    }

    // show/hide side drawer
    sideDrawer.classList.toggle("active");

}


// Side Drawer Menu
function showSubmenu(x) {

    var submenus = [];
    if (x === '1') {
        submenus = ["submenu1", "submenu2", "submenu3"];
    } else if (x === '2') {
        submenus = ["submenu2", "submenu1", "submenu3"];
    } else if (x === '3') {
        submenus = ["submenu3", "submenu1", "submenu2"];
    };

    var clickedMenu = document.getElementById(submenus[0]);
    var otherMenu1 = document.getElementById(submenus[1]);
    var otherMenu2 = document.getElementById(submenus[2]);

    clickedMenu.classList.toggle("active");
    if (otherMenu1.classList.contains("active")) {
        otherMenu1.classList.remove("active");
    };
    if (otherMenu2.classList.contains("active")) {
        otherMenu2.classList.remove("active");
    };
}






// More button / Show-Hide function
function showHide() {

    var btn = document.getElementById("more");
    var showHideDiv = document.getElementById("showHide");

    if (btn.innerHTML === "さらに表示") {
        btn.innerHTML = "表示を減らす";
        showHideDiv.style.display = "block";
        console.log("there");
    } else {
        btn.innerHTML = "さらに表示";
        showHideDiv.style.display = "none";
        console.log("here");
    }



}
