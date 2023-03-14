
		$(document).ready(function(){
		   s12 = [0];
		   plot3 = $.jqplot('chart4',[s12],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: -3,
					   max: 3,
					   intervals:[-3, -1.5, 0, 1.5 , 3],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter2(){
		s12[0] = parseFloat(document.getElementById('A1').value); 
		plot3 = $.jqplot('chart4',[s12],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: -3,
					   max: 3,
					   intervals:[-3, -1.5, 0, 1.5 , 3],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}
