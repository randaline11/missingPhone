 // repeatedly call function every sec
 //looper();  // make it work somehow....
//var movie  = document.getElementById("movie").addEventListener("ended", looper);
//var movie = document.getElementById('movie');

//alert(movie);
var showInterval = setInterval(showCode, 1000);
//call the cookie reader function every second.
var readerInterval = setInterval(cookieReader, 1000);
//movie.addEventListener('onEnded', looper2(e){ alert("hello2!");});

//var video = document.getElementById("movie");
//video.addEventListener("ended", looper);

//video.onended = looper();

/*

//function designed to get rid of the qr code picture once video's ended
function looper(themovie) {
  alert ("hello!");
  //var css ="visibility:hidden;";

  // fix the default hidden visibility of image by overwriting with css var
//  qr.style.cssText= css;
}
*/

// after certain time in video, display the QR code
function showCode() {
  var myVid = document.getElementById("movie"); // monitor the movie
    //current time of video, rounded down to nearest second
  var updatingTime = Math.floor(myVid.currentTime);

    // after 3 seconds in video, display qr code on top of video
  if (updatingTime > 3) {

    var qr = document.getElementById("google");
    var css ="position:absolute;left:0px;right:0px;height:100px;width:100px;";

    // fix the default hidden visibility of image by overwriting with css var
    qr.style.cssText= css;

    clearInterval(showInterval);  // stop repeating the function call
      }
}  // corresponds to showCode




//  read the cookie given by the other page and change the video on this one
function cookieReader() {
  //assuming there was a cookie sent....
  if (document.cookie !== "") {
    var cookies = document.cookie.split(";");  // cookie with name
    var cookies2 = document.cookie.split("=");  // split name/value pair
  //  alert(document.cookie);
    // display a different video by grabbing src from cookie
    document.getElementById("movie").src = cookies2[1]; // value only
    // TEST 5:11 PM
    var css ="visibility:hidden;";
    qr.style.cssText= css;  // overwrite hidden default of qr code


    cookieDelete();  // delete the cookie at the end
    }

}

//delete a cookie if need be
function cookieDelete() {
//  alert("cookieDelete");
  document.cookie = "my_vid=; expires=Fri, 19 Dec 1997 01:02:03 UTC";
  //alert ("document.cookie is" + document.cookie);


}


// change the video playing back to the original
// A function to make a cookie.
//function makeCookie(video){
//  document.cookie="my_vid=rose.mp4";
//}
