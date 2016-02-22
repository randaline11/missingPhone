// A function to make a cookie.
function makeCookie(video){
  document.cookie="my_vid=" + video;
//  alert(document.cookie);
}

//delete a cookie if need be
function cookieDelete() {
  document.cookie = "my_img=; expires=Fri, 19 Dec 1997 01:02:03 UTC";
}
