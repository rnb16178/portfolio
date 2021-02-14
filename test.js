/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

/* Create chart */
var chart = am4core.create("chartdiv", am4charts.TreeMap);
chart.data = [{
  "name": "First",
  "children": [
    {
      "name": "A1",
      "children": [
        { "name": "A1-1", "value": 687 },
        { "name": "A1-2", "value": 148 }
      ]
    },
    {
      "name": "A2",
      "children": [
        { "name": "A2-1", "value": 220 },
        { "name": "A2-2", "value": 480 },
        { "name": "A2-3", "value": 150 }
      ]
    },
    {
      "name": "A3",
      "children": [
        { "name": "A3-1", "value": 200 },
        { "name": "A3-2", "value": 320 }
      ]
    },
  ]
}, {
  "name": "Second",
  "children": [
    {
      "name": "B1",
      "children": [
        { "name": "B1-1", "value": 220 },
        { "name": "B1-2", "value": 150 },
        { "name": "B1-3", "value": 199 },
        { "name": "B1-4", "value": 481 }
      ]
    },
    {
      "name": "B2",
      "children": [
        { "name": "B2-1", "value": 210 },
        { "name": "B2-3", "value": 150 }
      ]
    },
    {
      "name": "B3",
      "children": [
        { "name": "B3-1", "value": 320 },
        { "name": "B3-2", "value": 310 }
      ]
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
chart.homeText = "TOP";
chart.navigationBar = new am4charts.NavigationBar();