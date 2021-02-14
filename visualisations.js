am4core.ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    changeSection();
    income();
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
}); 

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