/**
 * Created by roy on 2015/12/9.
 */

// var js_injected = 'var dispatchMouseEvent = function(target, var_args) {  var e = document.createEvent("MouseEvents");  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));  target.dispatchEvent(e);};        $(document).ready(function(){var ele = document.getElementsByClassName("ProfileTweet-actionButton u-textUserColorHover js-actionButton js-actionReply");            var len = ele.length;            var fire_event = new Array(len);            var base_time_interval = 3000;            var time_interval_buffer = 0;            var fire_event0 = dispatchMouseEvent(ele[0], "click", true, true);            var fire_event1 = dispatchMouseEvent(ele[1], "click", true, true);            setTimeout(fire_event0, 1000);            setTimeout(fire_event1, 2000);});';

function inject(str) {
    var para = document.createElement("script");
    document.head.appendChild(para);
    para.innerHTML = str;
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      var res = request.sc;
      inject(res);
  });

/*
para.innerHTML='var dispatchMouseEvent = function(target, var_args) {'+
  'var e = document.createEvent("MouseEvents");'+
  // If you need clientX, clientY, etc., you can call
  // initMouseEvent instead of initEvent
  'e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));'+
  'target.dispatchEvent(e);'+
'};'+

'$(document).ready(function(){' +
'var ele = document.getElementById("my_button");'+
'dispatchMouseEvent(ele, "click", true, true);'+
'});';
*/