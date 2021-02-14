am4core.ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    changeSection();
    income();
    grants();
    sections();
    expendature();
    
}); 
function expendature(){
    /* Create chart */
var chart = am4core.create("expdiv", am4charts.TreeMap);
chart.data = [{
  "name": "Trading Activities",
  "children": [
    {
      "name": "Retail Operating Costs","value":6749000
    },{
      "name": "Hostel and Conferece Expendature","value":1441000
    },{
      "name": "Sponsorship, Promotion and Royalties","value":350000
    }
    
  ]
}, {
  "name": "Charitable Activities",
  "children": [
    {
      "name": "Youth Programme",
      "children": [
        { "name": "Direct", "value": 9406000 },
        { "name": "Grant Funding", "value": 182000 },
        { "name": "Support Costs", "value": 1925000 },
      ]
    },
    {
      "name": "Development Of Scouting",
      "children": [
        { "name": "Direct", "value": 9112000 },
        { "name": "Grant Funding", "value": 183000 },
        { "name": "Support Costs", "value": 2792000 },
      ]
    },
    {
      "name": "Adult Support and Services to Members",
      "children": [
        { "name": "Direct", "value": 8232000 },
        { "name": "Grant Funding", "value": 183000 },
        { "name": "Support Costs", "value": 1828000 },
      ]
    },{
      "name": "Support and Training",
      "children": [
        { "name": "Direct", "value": 9452000 },
        { "name": "Grant Funding", "value": 182000 },
        { "name": "Support Costs", "value": 2503000 },
      ]
    },
  ]
},{
  "name": "Staffing Costs",
  "children": [
    {
      "name": "Wages and Salaries", "value":12278000
    },{
      "name": "Social Security Costs", "value":1185000
    },{
      "name": "Defined Contribution Pension Costs", "value":791000
    },{
      "name": "Other Pension Costs", "value":47000
    },
  ]
}];

chart.maxLevels = 1;

/* Set color step */
chart.colors.step = 2;

/* Define data fields */
chart.dataFields.value = "value";
chart.dataFields.name = "name";
chart.dataFields.children = "children";
chart.numberFormatter.numberFormat="'£' #,###";

var level1 = chart.seriesTemplates.create("0");
var level1_bullet = level1.bullets.push(new am4charts.LabelBullet());
level1_bullet.locationY = 0.5;
level1_bullet.locationX = 0.5;
level1_bullet.label.text = "{name}";
level1_bullet.label.fill = am4core.color("#fff");

var level2 = chart.seriesTemplates.create("1");
var level2_bullet = level2.bullets.push(new am4charts.LabelBullet());
level2_bullet.locationY = 0.5;
level2_bullet.locationX = 0.5;
level2_bullet.label.text = "{name}";
level2_bullet.label.fill = am4core.color("#fff");

var level3 = chart.seriesTemplates.create("2");
var level3_bullet = level3.bullets.push(new am4charts.LabelBullet());
level3_bullet.locationY = 0.5;
level3_bullet.locationX = 0.5;
level3_bullet.label.text = "{name}";
level3_bullet.label.fill = am4core.color("#fff");

/* Navigation bar */
chart.homeText = "Scout Association Expendature 2019/20";
chart.navigationBar = new am4charts.NavigationBar();
  
}
function sections(){
    var chart = am4core.create("chartdiv", am4charts.PieChart);
    chart.data = [{
        "section": "Beavers",
        "total": 127030,
        "color": am4core.color("#006ddf"),
    }, {
        "section": "Cubs",
        "total": 157172,
        "color": am4core.color("#23a950"),
    }, {
        "section": "Scouts",
        "total": 133473,
        "color": am4core.color("#004851"),
    }, {
        "section": "Explorers",
        "total": 45907,
        "color": am4core.color("#003982"),
    }, {
        "section": "Network",
        "total": 16501,
        "color": am4core.color("#000000"),
    }];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "total";
    pieSeries.dataFields.category = "section";

    // Let's cut a hole in our Pie chart the size of 40% the radius
    chart.innerRadius = am4core.percent(40);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#7413dc");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.propertyFields.fill = "color";

    chart.legend = new am4charts.Legend();
}

function income() {
    // Create chart instance
    var chart = am4core.create("incomediv", am4charts.XYChart);
    // Add data
    chart.data = [{
        "category": "Donations and Legacies",
        "income": 14224000,
        "expenses": 328000
    }, {
        "category": "Charitable Activities",
        "income": 24756000,
        "expenses": 45980000
    }, {
        "category": "Trading",
        "income": 12806000,
        "expenses": 8540000
    }, {
        "category": "investments",
        "income": 712000,
        "expenses": 0
    }, {
        "category": "other",
        "income": 1044000,
        "expenses": 0
    }];

    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.numberFormatter.numberFormat = "'£'#,###";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.opposite = true;

    // Create series
    function createSeries(field, name) {
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = field;
        series.dataFields.categoryY = "category";
        series.name = name;
        series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
        series.columns.template.height = am4core.percent(100);
        series.sequencedInterpolation = true;

        var valueLabel = series.bullets.push(new am4charts.LabelBullet());
        valueLabel.label.text = "{valueX}";
        valueLabel.label.horizontalCenter = "left";
        valueLabel.label.dx = 10;
        valueLabel.label.hideOversized = false;
        valueLabel.label.truncate = false;

        var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
        categoryLabel.label.text = "{name}";
        categoryLabel.label.horizontalCenter = "right";
        categoryLabel.label.dx = -10;
        categoryLabel.label.fill = am4core.color("#fff");
        categoryLabel.label.hideOversized = false;
        categoryLabel.label.truncate = false;
    }

    createSeries("income", "Income");
    createSeries("expenses", "Expenses");
}

function changeSection() {
    //find what section is to be viewed and change the title accordingly
    var section = document.getElementById("section").value;

    //create chart instance
    var chart = am4core.create("gendiv", am4charts.PieChart);

    //get the section data
    if (section == "Beavers") {
        chart.data = [{
            "gender": "male",
            "total": 100997,
            "color": am4core.color("#6ca0dc"),
        }, {
            "gender": "female",
            "total": 25633,
            "color": am4core.color("#f8b9d4"),
        }, {
            "gender": "other",
            "total": 400,
            "color": am4core.color("#003982"),
        }];
    } else if (section == "Cubs") {
        var chart = am4core.create("gendiv", am4charts.PieChart);
        // Add data
        chart.data = [{
            "gender": "male",
            "total": 122714,
            "color": am4core.color("#6ca0dc"),
        }, {
            "gender": "female",
            "total": 34085,
            "color": am4core.color("#f8b9d4"),
        }, {
            "gender": "other",
            "total": (19 + 354),
            "color": am4core.color("#003982"),

        }];
    }
    else if (section == "Scouts") {
        var chart = am4core.create("gendiv", am4charts.PieChart);
        chart.data = [{
            "gender": "male",
            "total": 96995,
            "color": am4core.color("#6ca0dc"),
        }, {
            "gender": "female",
            "total": 36089,
            "color": am4core.color("#f8b9d4"),
        }, {
            "gender": "other",
            "total": (34 + 395),
            "color": am4core.color("#003982"),
        }];
    } else if (section == "Explorers") {
        var chart = am4core.create("gendiv", am4charts.PieChart);
        chart.data = [{
            "gender": "male",
            "total": 30489,
            "color": am4core.color("#6ca0dc"),
        }, {
            "gender": "female",
            "total": 15195,
            "color": am4core.color("#f8b9d4"),
        }, {
            "gender": "other",
            "total": (61 + 162),
            "color": am4core.color("#003982"),
        }];
    } else if (section == "Network") {
        var chart = am4core.create("gendiv", am4charts.PieChart);
        chart.data = [{
            "gender": "male",
            "total": 10409,
            "color": am4core.color("#6ca0dc"),
        }, {
            "gender": "female",
            "total": 5892,
            "color": am4core.color("#f8b9d4"),
        }, {
            "gender": "other",
            "total": (200),
            "color": am4core.color("#003982"),
        }];
    }

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "total";
    pieSeries.dataFields.category = "gender";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.propertyFields.fill = "color";
    pieSeries.slices.template.propertyFields.fill = "color";

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    chart.legend = new am4charts.Legend();
}
function grants() {
    // Create chart instance
    var chart = am4core.create("grantdiv", am4charts.RadarChart);

    // Add data
    chart.data = [{

      "category": "Other",
      "value": 36000,
      "full": 730000
    }, {
      "category": "International Fund",
      "value": 26000,
      "full": 730000
    }, {
      "category": "Benevolent Fund",
      "value": 26000,
      "full": 730000
    }, {
      "category": "King Georde VI Leadership Fund",
      "value": 37000,
      "full": 730000
    }, {
      "category": "Development",
      "value": 71000,
      "full": 730000
    }, {
      "category": "Admiralty Fund and Trinity House Fund",
      "value": 250000,
      "full": 730000
    }, {
      "category": "Grants from Legacies to Local Scout Groups",
      "value": 284000,
      "full": 730000
    }];

    // Make chart not full circle
    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(20);

    // Set number format
    chart.numberFormatter.numberFormat = "'£'#,###";

    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.fontWeight = 500;
    categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
      return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
    });
    categoryAxis.renderer.minGridDistance = 10;

    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = 300000;
    valueAxis.strictMinMax = true;

    // Create series
    var series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template.cornerRadiusTopLeft = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;

    var series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series2.columns.template.radarColumn.cornerRadius = 20;

    series2.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Add cursor
    chart.cursor = new am4charts.RadarCursor();
  }