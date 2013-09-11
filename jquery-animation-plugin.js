(function($) {
   $.fn.MultiAnimation = function(options) {

      var selector = this;

      var settings = $.extend({
         animation_function : null,
         next_button        : null,
         prev_button        : null
      }, options);

      var next_function = function(){
         jQuery.each(selector, function(index, element){
            var container = $(this);
            var active_item = $(container.find(".active-item"));
            if (active_item.is(":last-child")){
               var next_item = $(container.children(":first-child"));
            } else {
               var next_item = $(active_item.next());
            }
            settings.animation_function(active_item, next_item);

         });
      };

      var previous_function = function(){
         jQuery.each(selector, function(index, element){
            var container = $(this);
            var active_item = $(container.find(".active-item"));
            if (active_item.is(":first-child")){
               var next_item = $(container.children(":last-child"));
            } else {
               var next_item = active_item.previous();
            }
            settings.animation(active_item, next_item);
         });
      };

      $("" + settings.next_button).bind("click", next_function);
      $("" + settings.previous_button).bind("click", previous_function);

      console.log("OK");


   }
}(jQuery));

