$( document ).ready(function() {
	//Mobile Nav
	(function(){
		$('#nav-small').hide();
    	$('#nav-toggle').click(function(){
    		$('#nav-small').slideToggle('fast');
    	});	
		
		$('#nav-small li').click(function(){
	    	$('#nav-small').slideUp('fast');  
		});
	}());


	//Skills-tools Chart
    (function(){
        var data = {
    	    labels: ["jQuery/Javascript", "Angular", "Html/Css", "UI/UX", "Photoshop/Illustrator", "Branding/Design", "Photograpy", "Php/Laravel"],
    	    datasets: [
    	        {
    	            label: "My First dataset",
    	            fillColor: "rgba(220,220,220,0.2)",
    	            strokeColor: "rgba(220,220,220,1)",
    	            pointColor: "rgba(220,220,220,1)",
    	            pointStrokeColor: "#fff",
    	            pointHighlightFill: "#fff",
    	            pointHighlightStroke: "rgba(220,220,220,1)",
    	            data: [80,70,90,80,90,85,90,60]
    	        }
    	    ]
    	};

    	var options = {

        //Boolean - Whether to show lines for each scale point
        scaleShowLine : false,

        //Boolean - Whether we show the angle lines out of the radar
        angleShowLineOut : true,

        //Boolean - Whether to show labels on the scale
        scaleShowLabels : false,

        // Boolean - Whether the scale should begin at zero
        scaleBeginAtZero : true,

        //String - Colour of the angle line
        angleLineColor : "rgba(0,0,0,.5)",

        //Number - Pixel width of the angle line
        angleLineWidth : 1,

        //String - Point label font declaration
        pointLabelFontFamily : "'Arial'",

        //String - Point label font weight
        pointLabelFontStyle : "normal",

        //Number - Point label font size in pixels
        pointLabelFontSize : 16,

        //String - Point label font colour
        pointLabelFontColor : "#000",

        //Boolean - Whether to show a dot for each point
        pointDot : true,

        //Number - Radius of each point dot in pixels
        pointDotRadius : 3,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth : 1,

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius : 10,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke : true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth : 2,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill : true,

        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"





    	}



    	Chart.defaults.global.responsive = true;
    	var ctx = document.getElementById("myChart").getContext("2d");
    	var myRadarChart = new Chart(ctx).Radar(data, options);
    }());


});