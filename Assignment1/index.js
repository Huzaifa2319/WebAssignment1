window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    // document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("head").style.padding = "10px";
    document.getElementById("logo").style.fontSize = "35px";
    var li = document.getElementById("nid").children;
    for (let i = 0; i < li.length; i++) {
      li[i].classList.add("scr");
    }
  } else {
    document.getElementById("head").style.padding = "20px";
    document.getElementById("logo").style.fontSize = "55px";
    var li = document.getElementById("nid").children;
    for (let i = 0; i < li.length; i++) {
      li[i].classList.remove("scr");
    }
  }
}
