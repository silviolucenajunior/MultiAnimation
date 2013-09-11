function AnimationPlugin(){
   this.elements_container = [];
   this.selectors = [];
   this.animation = null;

}

AnimationPlugin.prototype = {
   constructor: AnimationPlugin,
   next: function(){
      jQuery.each(this.elements_container, function(index, element){
         var container = $(this);
         var active_item = $(container.find(".active-item"));
         if (active_item.is(":last-child")){
            var next_item = $(container.children(":first-child"));
         } else {
            var next_item = $(active_item.next());
         }
         this.animation(active_item, next_item);

      });
   },
   previous: function(){
      jQuery.each(this.elements_container, function(index, element){
         var container = $(this);
         var active_item = $(container.find(".active-item"));
         if (active_item.is(":first-child")){
            var next_item = $(container.children(":last-child"));
         } else {
            var next_item = active_item.previous();
         }
         this.animation(active_item, next_item);
      });
   },
   addSelector: function(selector){
      this.selectors.push(selector);
      var elements = [];
      jQuery.each(this.selectors, function(index){
         elements.push($("" + this));
      });
      this.elements_container = elements;
   },
   setAnimation: function(animation_function){
      this.animation = animation_function;
   }

}