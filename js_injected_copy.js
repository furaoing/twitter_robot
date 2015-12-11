var dispatchMouseEvent = function(target, var_args) {
  var e = document.createEvent("MouseEvents");
  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
  target.dispatchEvent(e);
};


var take_some_time = function() {
    var a = 1;
    for (var i=0;i<100;i++)
    {
        a = a + 1;
    }
};

        $(document).ready(function(){
var ele = document.getElementsByClassName("ProfileTweet-actionButton u-textUserColorHover js-actionButton js-actionReply");
            var page_container = document.getElementById("page-container");
            var len = ele.length;
            var fire_event = new Array(len);
            var base_time_interval = 3000;
            var time_interval_buffer = 0;

            function assign_ad_text(str)
            {
                var tweet_box = document.getElementById("tweet-box-template");
                var input_area = tweet_box.firstElementChild;
            var htmls_created = input_area.innerHTML + str;
            input_area.innerHTML = htmls_created;
            }


                fire_event[0] = function(){
                    dispatchMouseEvent(ele[0], "click", true, true);
                     var ad_text = " Hi, how\'s it going ?";
                     assign_ad_text(ad_text);
                    var tweet_box = document.getElementById("tweet-box-template");
                     var button = tweet_box.parentNode.nextElementSibling.firstElementChild.nextElementSibling.lastElementChild;
                var send = function() {
                    dispatchMouseEvent(button, "click", true, true);
                };

                    var pause = function() {
                        dispatchMouseEvent(page_container, "click", true, true);
                    };
                    setTimeout(send, 500);
                    setTimeout(pause, 1000);
                };

            fire_event[1] = function(){
                    dispatchMouseEvent(ele[1], "click", true, true);
                     var ad_text = " Hi, what is going on, my stock is missing ?";
                     assign_ad_text(ad_text);
                    var tweet_box = document.getElementById("tweet-box-template");
                     var button = tweet_box.parentNode.nextElementSibling.firstElementChild.nextElementSibling.lastElementChild;
                var send = function() {
                    dispatchMouseEvent(button, "click", true, true);

                };

                var pause = function() {
                        dispatchMouseEvent(page_container, "click", true, true);
                    };

                    setTimeout(send, 500);
                setTimeout(pause, 1000);
                };

                 time_interval_buffer = base_time_interval*0;
                 setTimeout(fire_event[0], time_interval_buffer);

            time_interval_buffer = base_time_interval*1;
                 setTimeout(fire_event[1], time_interval_buffer);
});
