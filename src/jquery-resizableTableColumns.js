/// <reference path="jquery.js" />
/// <reference path="jquery-resizable.js" />
/*
jquery-resizable-table-columns
Version 0.14 - 1/4/2015
� 2015 Rick Strahl, West Wind Technologies 
www.west-wind.com
Licensed under MIT License
*/
(function($, undefined) {
    $.fn.resizableTableColumns = function(opt) {
        opt = $.extend({
            resizeHeight: false,
            handleSelector: "> .resizer",
        }, opt);

        return this.each(function() {
            $(this)
                .css({ position: "relative" })
                .prepend("<div class='resizer'></div>")
                .resizable(opt);
        });
    };
})(jQuery, undefined);
