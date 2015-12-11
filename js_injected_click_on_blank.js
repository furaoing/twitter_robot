var dispatchMouseEvent = function(target, var_args) {
  var e = document.createEvent("MouseEvents");
  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
  target.dispatchEvent(e);
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
                    var pause = function() {
                        var evt = new MouseEvent("click", {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                    clientX: 20,
                            clientY:750
                    /* whatever properties you want to give it */
                });
                page_container.dispatchEvent(evt);
                    };
                    setTimeout(pause, 0);
                };


                 time_interval_buffer = base_time_interval*0;
                 setTimeout(fire_event[0], time_interval_buffer);

});
