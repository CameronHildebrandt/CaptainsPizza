function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");

    // window.scroll({
    //   top: 500,
    //   left: 0,
    //   behavior: 'smooth'
    // });

  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  // Reset all zoomed menus
  // document.getElementById("zoomCheck0").checked = false;
  // document.getElementById("zoomCheck1").checked = false;
  // document.getElementById("zoomCheck2").checked = false;
  // document.getElementById("zoomCheck3").checked = false;
}
