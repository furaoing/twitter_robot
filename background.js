// Called when the user clicks on the browser action.

function send_data_to_content_page(data) {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {sc: data}, function (response) {
    });
  });
}

function load_injected_js()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    var data = xmlhttp.responseText;
        send_data_to_content_page(data)
    }
  };
xmlhttp.open("GET","js_injected.js",true);
xmlhttp.send();
}

/*
document.addEventListener("DOMContentLoaded", function(event) {
  load_injected_js();
});
*/

chrome.browserAction.onClicked.addListener(function(tab) {

  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
    file: "injection_js.js"
  });

  load_injected_js();
});