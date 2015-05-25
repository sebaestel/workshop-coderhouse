(function($){
		"use strict";
		/*=======================================
          COUNTDOWN TIMER
         =======================================*/ 
		console.log('contador');
		$('#countdown_dashboard').countDown({
				targetDate: {
					'day': 		12,
					'month': 	6,
					'year': 	2015,
					'hour': 	0,
					'min': 		0,
					'sec': 		0 },
				omitWeeks: true
			});
		
})(jQuery);