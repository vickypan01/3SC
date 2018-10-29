
$(function() {
		

		var updateInterval = 3000; // in milliseconds

		setInterval(function() {
			
		}, updateInterval);

		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        /*---------------------------- For World map Starts Here ---------------------------------**/
        $('#world-map-gdp').vectorMap({
            map: 'world_mill',
            vertical:true,
            backgroundColor:'#3F51B5',           
            series: {
                regions: [{
                    values: {
                        'IN': '#222f7a',
                        'US': '#222f7a',
                        'GR': '#222f7a',
                        'AU': '#222f7a',
                        'UK': '#222f7a',
                        'RO': '#222f7a',
                        'BR': '#222f7a'
                    },
                    normalizeFunction: 'polynomial',
                    attribute: 'fill'
                }]
            }
        });

       
var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container-to',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 2,
            beta: 5,
            depth: 20,
            viewDistance:20
        }
    },
    title: {
        text: ''
    },
    credits: {
        enabled: false
    },
    subtitle: {
        text: ''
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    xAxis: {
        categories: Highcharts.getOptions().lang.shortMonths,
        labels: {
            skew3d: true,
            style: {
                fontSize: '14px'
            }
        }
    },
    yAxis: {
        title: {
            text: null
        }
    },
    series: [{
        //data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        name: 'Order Per Month ',
        data: [2, 3, null, 4, 0, 5, 1, 4, 6, 3,12,8]
    }]
});

function showValues() {
    $('#alpha-value').html(chart.options.chart.options3d.alpha);
    $('#beta-value').html(chart.options.chart.options3d.beta);
    $('#depth-value').html(chart.options.chart.options3d.depth);
}

// Activate the sliders
$('#sliders input').on('input change', function () {
    chart.options.chart.options3d[this.id] = parseFloat(this.value);
    showValues();
    chart.redraw(false);
});

showValues();


/**---------------------------------- Container type Chart -------------------------**/


Highcharts.chart('opct-chart', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: ''
    },
    credits: {
        enabled: false
    },
    subtitle: {
        text: ''
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: 'Delivered amount',
        data: [
            ['1500C', 8],
            ['1500CRT', 3],
            ['2500C', 1],
            ['2500CRT', 6],
            ['770CRT', 5]
        ]
    }]
});


Highcharts.chart('top-destination-wise', {

    chart: {
        type: 'variwide'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'category',
        title: {
            text: ''
        }
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: true
    },

    series: [{
        name: 'Labor Costs',
        data: [
            ['Bangkok', 50.2, 335504],
            ['Bagota', 42, 277339],
            ['Jakarta', 39.2, 421611],
            ['Maxico City', 38, 462057],
            ['Tel Aviv', 35.6, 2228857]
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                align: 'right',
                formatter: function () {
                    return Highcharts.numberFormat(this.y, 0);
                },
                style: {
                    margin: '10px 0 0 0'
                }
            },
        tooltip: {
            pointFormat: '<b>{point.y}</b>'
        },
        colorByPoint: true
    }]

});

Highcharts.chart('tcpc', {
    chart: {
        type: 'variablepie'
    },
    title: {
        text: ''
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            'Area (square km): <b>{point.y}</b><br/>' +
            'Population density (people per square km): <b>{point.z}</b><br/>'
    },
    credits: {
        enabled: false
    },
    series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'countries',
        data: [{
            name: 'DHL Canada',
            y: 505370,
            z: 92.9
        }, {
            name: 'Panalpina',
            y: 551500,
            z: 118.7
        }, {
            name: 'Australia',
            y: 312685,
            z: 124.6
        }, {
            name: 'DHL Australia',
            y: 78867,
            z: 137.5
        }, {
            name: 'DHL Australia',
            y: 301340,
            z: 201.8
        }, {
            name: 'Switzerland',
            y: 41277,
            z: 214.5
        }, {
            name: 'Germany',
            y: 357022,
            z: 235.6
        }]
    }]
});

Highcharts.chart('totordrpndg', {
    chart: {
        zoomType: 'xy',
        type: 'line',
        height: "350"
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '10px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    credits: {
        enabled: false
    },
    yAxis: {
        min: 0,
        title: {
            text: 'No of Pending Orders'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: '{point.y}'
    },
    series: [{
        name: 'Status',
        data: [
            ['Order Confirmation', 22],
            ['CNT Selection', 45],
            ['CNT Reservation', 14],
            ['CNT pickup from SC', 44],
            ['CNT Handover at Handover point', 156],
            ['CNT unloading at consignee point', 99],
            ['CNT pickup from Unloading Point', 78],
            ['CNT Return at SC Destination/Consolidation', 67],
            ['Point', 12]
        ],

        lineWidth: 2,
        color: '#ed7d31',
        dataLabels: {
            enabled: true,
            //rotation: -90,
            //color: '#FFFFFF',
            align: 'top',
            format: '{point.y}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '8px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});


var vikas = 0.45;
var vikas1 = 0.25;
var vikas2 = 0.7;
var vikas3 = 0.23;
var vikas4 = 0.4;

/**----- For 1500C progress Bar-------**/
var bar = new ProgressBar.Line(rp15c, {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1600,
    color: '#7cb5ec',
    trailColor: '#eee',
    trailWidth: 1,
    value:50,    
    svgStyle: {width: '90%', height: '100%'},
    text: {
      style: {        
        color: '#999',
        position: 'absolute',
        margin: '0',
        top: '20px',
        padding: 0,        
        transform: null
      },
      autoStyleContainer: false
    },
    fill: 'rgba(0, 0, 0, 0.5)',
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(vikas * 100) + ' %');
    }
  });
  
  bar.animate(vikas); 
/*------- End -----------------------*/
/**----- For 1500CRT progress Bar-------**/
var bar = new ProgressBar.Line(rp15crt, {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1600,
    color: '#434348',
    trailColor: '#eee',
    trailWidth: 1,
    value:50,    
    svgStyle: {width: '90%', height: '100%'},
    text: {
      style: {        
        color: '#999',
        position: 'absolute',
        margin: '0',
        top: '20px',
        padding: 0,        
        transform: null
      },
      autoStyleContainer: false
    },
    fill: 'rgba(0, 0, 0, 0.5)',
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(vikas1 * 100) + ' %');
    }
  });
  
  bar.animate(vikas1); 
/*------- End -----------------------*/
/**----- For 2500C progress Bar-------**/
  var bar = new ProgressBar.Line(rp25c, {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1600,
    color: '#90ed7d',
    trailColor: '#eee',
    trailWidth: 1,
    value:50,    
    svgStyle: {width: '90%', height: '100%'},
    text: {
      style: {        
        color: '#999',
        position: 'absolute',
        margin: '0',
        top: '20px',
        padding: 0,        
        transform: null
      },
      autoStyleContainer: false
    },
    fill: 'rgba(0, 0, 0, 0.5)',
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(vikas2 * 100) + ' %');
    }
  });
bar.animate(vikas2); 
/*------- End -----------------------*/
/**----- For 2500CRT progress Bar-------**/
var bar = new ProgressBar.Line(rp25crt, {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1600,
    color: '#f7a35c',
    trailColor: '#eee',
    trailWidth: 1,
    value:50,    
    svgStyle: {width: '90%', height: '100%'},
    text: {
      style: {        
        color: '#999',
        position: 'absolute',
        margin: '0',
        top: '20px',
        padding: 0,        
        transform: null
      },
      autoStyleContainer: false
    },
    fill: 'rgba(0, 0, 0, 0.5)',
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(vikas3 * 100) + ' %');
    }
  });
  bar.animate(vikas3);
/*------- End -----------------------*/
/**----- For 2500CRT progress Bar-------**/
var bar = new ProgressBar.Line(rp770crt, {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1600,
    color: '#8085e9',
    trailColor: '#eee',
    trailWidth: 1,
    value:50,    
    svgStyle: {width: '90%', height: '100%'},
    text: {
      style: {        
        color: '#999',
        position: 'absolute',
        margin: '0',
        top: '20px',
        padding: 0,        
        transform: null
      },
      autoStyleContainer: false
    },
    fill: 'rgba(0, 0, 0, 0.5)',
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(vikas4 * 100) + ' %');
    }
  });
  bar.animate(vikas4);


  /**------------------------------------Total Stock Transfer Shipment ------------------------------**/

  var chart = AmCharts.makeChart("chartdiv", {
    "theme": "light",
    "type": "serial",
    "startDuration": 2,
    "creditsPosition":"bottom-right",
    "dataProvider": [{
        "country": "Jan",
        "visits": 4025,
        "color": "#FF0F00"
    }, {
        "country": "Feb",
        "visits": 1882,
        "color": "#FF6600"
    }, {
        "country": "Mar",
        "visits": 1809,
        "color": "#FF9E01"
    }, {
        "country": "Apr",
        "visits": 1322,
        "color": "#FCD202"
    }, {
        "country": "May",
        "visits": 1122,
        "color": "#F8FF01"
    }, {
        "country": "June",
        "visits": 1114,
        "color": "#B0DE09"
    }, {
        "country": "July",
        "visits": 984,
        "color": "#04D215"
    }, {
        "country": "Aug",
        "visits": 711,
        "color": "#0D8ECF"
    }, {
        "country": "Sep",
        "visits": 665,
        "color": "#0D52D1"
    }, {
        "country": "Oct",
        "visits": 580,
        "color": "#2A0CD0"
    }, {
        "country": "Nov",
        "visits": 443,
        "color": "#8A0CCF"
    }, {
        "country": "Dec",
        "visits": 441,
        "color": "#CD0D74"
    }],
    "valueAxes": [{
        "position": "left",
        "axisAlpha":0,
        "gridAlpha":0
    }],
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "colorField": "color",
        "fillAlphas": 0.85,
        "lineAlpha": 0.1,
        "type": "column",
        "topRadius":1,
        "valueField": "visits"
    }],
    "depth3D": 40,
	"angle": 30,
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha":0,
        "gridAlpha":0

    },
    "export": {
    	"enabled": true
     }

}, 0);


/***-------------------------- Total Event Shipment-------------------------------------------------------------***/

var chart = AmCharts.makeChart("totevntship", {
    "type": "pie",
    "theme": "light",
    "innerRadius": "40%",
    "creditsPosition":"bottom-right",
    "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
    "dataProvider": [{
        "country": "January",
        "litres": 501.9
    }, {
        "country": "Febuary",
        "litres": 301.9
    }, {
        "country": "March",
        "litres": 201.1
    }, {
        "country": "April",
        "litres": 165.8
    }, {
        "country": "May",
        "litres": 139.9
    }, {
        "country": "June",
        "litres": 88.3
    }, {
        "country": "July",
        "litres": 100
    }, {
        "country": "Auguest",
        "litres": 38.5
    }, {
        "country": "September",
        "litres": 55
    }, {
        "country": "Oct",
        "litres": 41
    }, {
        "country": "November",
        "litres": 12
    }, {
        "country": "December",
        "litres": 8.3
    }],
    "balloonText": "[[value]]",
    "valueField": "litres",
    "titleField": "country",
    "balloon": {
        "drop": true,
        "adjustBorderColor": false,
        "color": "#FFFFFF",
        "fontSize": 16
    },
    "export": {
        "enabled": true
    }
});




        
        


//         $.getJSON('https://cdn.rawgit.com/highcharts/highcharts/680f5d50a47e90f53d814b53f80ce1850b9060c0/samples/data/world-population-density.json', function (data) {

    
//     $.each(data, function () {
//         this.value = (this.value < 1 ? 1 : this.value);
//     });

//     Highcharts.mapChart('wmp', {

//         chart: {
//             map: 'custom/world'
//         },

//         title: {
//             text: 'Fixed tooltip with HTML'
//         },

//         legend: {
//             title: {
//                 text: 'Population density per km²',
//                 style: {
//                     color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
//                 }
//             }
//         },

//         mapNavigation: {
//             enabled: true,
//             buttonOptions: {
//                 verticalAlign: 'bottom'
//             }
//         },

//         tooltip: {
//             backgroundColor: 'none',
//             borderWidth: 0,
//             shadow: false,
//             useHTML: true,
//             padding: 0,
//             pointFormat: '<span class="f32"><span class="flag {point.properties.hc-key}">' +
//                 '</span></span> {point.name}<br>' +
//                 '<span style="font-size:30px">{point.value}/km²</span>',
//             positioner: function () {
//                 return { x: 0, y: 250 };
//             }
//         },

//         colorAxis: {
//             min: 1,
//             max: 1000,
//             type: 'logarithmic'
//         },

//         series: [{
//             data: data,
//             joinBy: ['iso-a3', 'code3'],
//             name: 'Population density',
//             states: {
//                 hover: {
//                     color: '#a4edba'
//                 }
//             }
//         }]
//     });
// });





    });
    


    