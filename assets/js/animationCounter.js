/* ===========================================================
 * animationCounter.js v.1.0.0
 * ===========================================================
 * Copyright 2017 Micheline Pavadé
 * http://www.pixel-renaissance.com
 * https://github.com/mpavade/
 *
 * animationCounter.js is a jQuery plugin that animates a number from a value to another value
 * or to an infinite value
 *
 * License MIT
 *
 * ========================================================== */


(function($){

	$.fn.animationCounter = function(options) {
		return this.each(function() {
			try {
				var element = $(this);

				var defaults = {
					start: 0,
					end: null,
					step: 1,
					delay: 1000,
					txt: ""
				}

				var settings = $.extend(defaults, options || {})

				var nb_start = settings.start;
				var nb_end = settings.end;

 				element.text(nb_start + settings.txt);

				var counter = function() {
					// Definition of conditions of arrest
					if (nb_end != null && nb_start >= nb_end) {
						return;
					}
					// incrementation
					nb_start = nb_start + settings.step;

					// display
          element.text(nb_start.toFixed(2) + settings.txt);
				}

				// Timer
				// Launches every "settings.delay"
				setInterval(counter, settings.delay);

			} catch(e){
				alert( e + ' at line ' + e.lineNumber );
			}
		});
	};

})(jQuery);



let searchParams = new URLSearchParams(window.location.search);


if (searchParams.has('compliance')){
	$('#counter1').animationCounter({
		start: 8.17,
		end: 8.17,
		step: 0.01,
		delay: 1,
		});
		
		$('#counter2').animationCounter({
		start: 9.49,
		end: 9.49,
		step: 0.01,
		delay: 1,
		});
		
		$('#counter3').animationCounter({
		start: 4.61,
		end: 4.61,
		step: 0.01,
		delay: 1,
		});
} else {
	$('#counter1').animationCounter({
		start: 0.00,
		end: 8.16,
		step: 0.01,
		delay: 1,
		});
		
		$('#counter2').animationCounter({
		start: 0.00,
		end: 9.48,
		step: 0.01,
		delay: 1,
		});
		
		$('#counter3').animationCounter({
		start: 0.00,
		end: 4.60,
		step: 0.01,
		delay: 1,
		});
}