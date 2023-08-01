<template>
    <a-row type="flex">
      <a-col :span="24">
        <div id="linechart1"></div>
      </a-col>
      <a-col :span="24">
        <div id="linechart2"></div>
      </a-col>
      <a-col :span="24">
        <div id="linechart3"></div>
      </a-col>
    </a-row>
</template>

<script>
import * as d3 from "d3";
import Lebron2010 from "../../assets/data/Lebron2010.csv";
import Wade2010 from "../../assets/data/Wade2010.csv";
import Bosh2010 from "../../assets/data/Bosh2010.csv";
import Lebron2011 from "../../assets/data/Lebron2011.csv";
import Wade2011 from "../../assets/data/Wade2011.csv";
import Bosh2011 from "../../assets/data/Bosh2011.csv";
import Lebron2012 from "../../assets/data/Lebron2012.csv";
import Wade2012 from "../../assets/data/Wade2012.csv";
import Bosh2012 from "../../assets/data/Bosh2012.csv";
import Lebron2013 from "../../assets/data/Lebron2013.csv";
import Wade2013 from "../../assets/data/Wade2013.csv";
import Bosh2013 from "../../assets/data/Bosh2013.csv";
import Duncan2002 from "../../assets/data/Duncan2002.csv";
import Parker2002 from "../../assets/data/Parker2002.csv";
import Duncan2003 from "../../assets/data/Duncan2003.csv";
import Parker2003 from "../../assets/data/Parker2003.csv";
import Duncan2004 from "../../assets/data/Duncan2004.csv";
import Parker2004 from "../../assets/data/Parker2004.csv";
import Duncan2005 from "../../assets/data/Duncan2005.csv";
import Parker2005 from "../../assets/data/Parker2005.csv";
import Duncan2006 from "../../assets/data/Duncan2006.csv";
import Parker2006 from "../../assets/data/Parker2006.csv";
import Duncan2007 from "../../assets/data/Duncan2007.csv";
import Parker2007 from "../../assets/data/Parker2007.csv";
import Duncan2008 from "../../assets/data/Duncan2008.csv";
import Parker2008 from "../../assets/data/Parker2008.csv";
import Duncan2009 from "../../assets/data/Duncan2009.csv";
import Parker2009 from "../../assets/data/Parker2009.csv";
import Duncan2010 from "../../assets/data/Duncan2010.csv";
import Parker2010 from "../../assets/data/Parker2010.csv";
import Duncan2011 from "../../assets/data/Duncan2011.csv";
import Parker2011 from "../../assets/data/Parker2011.csv";
import Duncan2012 from "../../assets/data/Duncan2012.csv";
import Parker2012 from "../../assets/data/Parker2012.csv";
import Duncan2013 from "../../assets/data/Duncan2013.csv";
import Parker2013 from "../../assets/data/Parker2013.csv";
import Duncan2014 from "../../assets/data/Duncan2014.csv";
import Parker2014 from "../../assets/data/Parker2014.csv";
import Duncan2015 from "../../assets/data/Duncan2015.csv";
import Parker2015 from "../../assets/data/Parker2015.csv";
import Ginobili2002 from "../../assets/data/Ginobili2002.csv";
import Ginobili2003 from "../../assets/data/Ginobili2003.csv";
import Ginobili2004 from "../../assets/data/Ginobili2004.csv";
import Ginobili2005 from "../../assets/data/Ginobili2005.csv";
import Ginobili2006 from "../../assets/data/Ginobili2006.csv";
import Ginobili2007 from "../../assets/data/Ginobili2007.csv";
import Ginobili2008 from "../../assets/data/Ginobili2008.csv";
import Ginobili2009 from "../../assets/data/Ginobili2009.csv";
import Ginobili2010 from "../../assets/data/Ginobili2010.csv";
import Ginobili2011 from "../../assets/data/Ginobili2011.csv";
import Ginobili2012 from "../../assets/data/Ginobili2012.csv";
import Ginobili2013 from "../../assets/data/Ginobili2013.csv";
import Kawhi2014 from "../../assets/data/Kawhi2014.csv";
import Kawhi2015 from "../../assets/data/Kawhi2015.csv";
import Durant2009 from "../../assets/data/Durant2009.csv";
import Westbrook2009 from "../../assets/data/Westbrook2009.csv";
import Harden2009 from "../../assets/data/Harden2009.csv";
import Durant2010 from "../../assets/data/Durant2010.csv";
import Westbrook2010 from "../../assets/data/Westbrook2010.csv";
import Harden2010 from "../../assets/data/Harden2010.csv";
import Durant2011 from "../../assets/data/Durant2011.csv";
import Westbrook2011 from "../../assets/data/Westbrook2011.csv";
import Harden2011 from "../../assets/data/Harden2011.csv";
import Lebron2014 from "../../assets/data/Lebron2014.csv";
import Irving2014 from "../../assets/data/Irving2014.csv";
import Love2014 from "../../assets/data/Love2014.csv";
import Lebron2015 from "../../assets/data/Lebron2015.csv";
import Irving2015 from "../../assets/data/Irving2015.csv";
import Love2015 from "../../assets/data/Love2015.csv";
import Lebron2016 from "../../assets/data/Lebron2016.csv";
import Irving2016 from "../../assets/data/Irving2016.csv";
import Love2016 from "../../assets/data/Love2016.csv";
import Curry2012 from "../../assets/data/Curry2012.csv";
import Thompson2012 from "../../assets/data/Thompson2012.csv";
import Green2012 from "../../assets/data/Green2012.csv";
import Curry2013 from "../../assets/data/Curry2013.csv";
import Thompson2013 from "../../assets/data/Thompson2013.csv";
import Green2013 from "../../assets/data/Green2013.csv";
import Curry2014 from "../../assets/data/Curry2014.csv";
import Thompson2014 from "../../assets/data/Thompson2014.csv";
import Green2014 from "../../assets/data/Green2014.csv";
import Curry2015 from "../../assets/data/Curry2015.csv";
import Thompson2015 from "../../assets/data/Thompson2015.csv";
import Green2015 from "../../assets/data/Green2015.csv";
import Curry2016 from "../../assets/data/Curry2016.csv";
import Thompson2016 from "../../assets/data/Thompson2016.csv";
import Durant2016 from "../../assets/data/Durant2016.csv";
import Curry2017 from "../../assets/data/Curry2017.csv";
import Thompson2017 from "../../assets/data/Thompson2017.csv";
import Durant2017 from "../../assets/data/Durant2017.csv";
import Curry2018 from "../../assets/data/Curry2018.csv";
import Thompson2018 from "../../assets/data/Thompson2018.csv";
import Durant2018 from "../../assets/data/Durant2018.csv";
import Paul2011 from "../../assets/data/Paul2011.csv";
import Griffin2011 from "../../assets/data/Griffin2011.csv";
import Jordan2011 from "../../assets/data/Jordan2011.csv";
import Paul2012 from "../../assets/data/Paul2012.csv";
import Griffin2012 from "../../assets/data/Griffin2012.csv";
import Jordan2012 from "../../assets/data/Jordan2012.csv";
import Paul2013 from "../../assets/data/Paul2013.csv";
import Griffin2013 from "../../assets/data/Griffin2013.csv";
import Jordan2013 from "../../assets/data/Jordan2013.csv";
import Paul2014 from "../../assets/data/Paul2014.csv";
import Griffin2014 from "../../assets/data/Griffin2014.csv";
import Jordan2014 from "../../assets/data/Jordan2014.csv";
import Paul2016 from "../../assets/data/Paul2016.csv";
import Griffin2016 from "../../assets/data/Griffin2016.csv";
import Jordan2016 from "../../assets/data/Jordan2016.csv";
import Pierce2007 from "../../assets/data/Pierce2007.csv";
import Garnett2007 from "../../assets/data/Garnett2007.csv";
import Allen2007 from "../../assets/data/Allen2007.csv";
import Pierce2008 from "../../assets/data/Pierce2008.csv";
import Garnett2008 from "../../assets/data/Garnett2008.csv";
import Allen2008 from "../../assets/data/Allen2008.csv";
import Pierce2009 from "../../assets/data/Pierce2009.csv";
import Garnett2009 from "../../assets/data/Garnett2009.csv";
import Allen2009 from "../../assets/data/Allen2009.csv";
import Pierce2010 from "../../assets/data/Pierce2010.csv";
import Garnett2010 from "../../assets/data/Garnett2010.csv";
import Allen2010 from "../../assets/data/Allen2010.csv";
import Pierce2011 from "../../assets/data/Pierce2011.csv";
import Garnett2011 from "../../assets/data/Garnett2011.csv";
import Allen2011 from "../../assets/data/Allen2011.csv";
import Kobe2008 from "../../assets/data/Kobe2008.csv";
import Gasol2008 from "../../assets/data/Gasol2008.csv";
import Bynum2008 from "../../assets/data/Bynum2008.csv";
import Kobe2009 from "../../assets/data/Kobe2009.csv";
import Gasol2009 from "../../assets/data/Gasol2009.csv";
import Bynum2009 from "../../assets/data/Bynum2009.csv";
import Kobe2010 from "../../assets/data/Kobe2010.csv";
import Gasol2010 from "../../assets/data/Gasol2010.csv";
import Bynum2010 from "../../assets/data/Bynum2010.csv";
import { toRaw } from 'vue';

export default {
    name: 'LineChart1',
    data() {
        return {
            lineChartData: Array,
            name: "Lebron",
            year: 2010,
            dataMap:{
                "LeBron2010": Lebron2010,
                "Wade2010" : Wade2010,
                "Bosh2010": Bosh2010,
                "LeBron2011": Lebron2011,
                "Wade2011": Wade2011,
                "Bosh2011": Bosh2011,
                "LeBron2012": Lebron2012, 
                "Wade2012": Wade2012,
                "Bosh2012": Bosh2012,
                "LeBron2013": Lebron2013,
                "Wade2013": Wade2013, 
                "Bosh2013": Bosh2013, 
                "Duncan2002": Duncan2002, 
                "Parker2002": Parker2002,  
                "Duncan2003": Duncan2003,
                "Parker2003": Parker2003, 
                "Duncan2004": Duncan2004, 
                "Parker2004": Parker2004, 
                "Duncan2005": Duncan2005,
                "Parker2005": Parker2005,
                "Duncan2006": Duncan2006,
                "Parker2006": Parker2006,
                "Duncan2007": Duncan2007,
                "Parker2007": Parker2007,
                "Duncan2008": Duncan2008,
                "Parker2008": Parker2008,
                "Duncan2009": Duncan2009,
                "Parker2009": Parker2009,
                "Duncan2010": Duncan2010,
                "Parker2010": Parker2010,
                "Duncan2011": Duncan2011,
                "Parker2011": Parker2011,
                "Duncan2012": Duncan2012,
                "Parker2012": Parker2012,
                "Duncan2013": Duncan2013,
                "Parker2013": Parker2013,
                "Duncan2014": Duncan2014,
                "Parker2014": Parker2014,
                "Duncan2015": Duncan2015,
                "Parker2015": Parker2015,
                "Ginobili2002": Ginobili2002,
                "Ginobili2003": Ginobili2003,
                "Ginobili2004": Ginobili2004,
                "Ginobili2005": Ginobili2005,
                "Ginobili2006": Ginobili2006,
                "Ginobili2007": Ginobili2007,
                "Ginobili2008": Ginobili2008,
                "Ginobili2009": Ginobili2009,
                "Ginobili2010": Ginobili2010,
                "Ginobili2011": Ginobili2011,
                "Ginobili2012": Ginobili2012,
                "Ginobili2013": Ginobili2013,
                "Kawhi2014": Kawhi2014,
                "Kawhi2015": Kawhi2015,
                "Durant2009": Durant2009,
                "Westbrook2009": Westbrook2009, 
                "Harden2009": Harden2009,
                "Durant2010": Durant2010, 
                "Westbrook2010": Westbrook2010,
                "Harden2010": Harden2010,
                "Durant2011": Durant2011,
                "Westbrook2011": Westbrook2011,
                "Harden2011": Harden2011, 
                "LeBron2014": Lebron2014,
                "Irving2014": Irving2014,
                "Love2014": Love2014, 
                "LeBron2015": Lebron2015,
                "Irving2015": Irving2015,
                "Love2015": Love2015,
                "LeBron2016": Lebron2016, 
                "Irving2016": Irving2016,
                "Love2016": Love2016,
                "Curry2012": Curry2012,
                "Thompson2012": Thompson2012,
                "Green2012": Green2012,
                "Curry2013": Curry2013,
                "Thompson2013": Thompson2013,
                "Green2013": Green2013,
                "Curry2014": Curry2014,
                "Thompson2014": Thompson2014,
                "Green2014": Green2014,
                "Curry2015": Curry2015,
                "Thompson2015": Thompson2015,
                "Green2015": Green2015,
                "Curry2016": Curry2016,
                "Thompson2016": Thompson2016,
                "Durant2016": Durant2016,
                "Curry2017": Curry2017,
                "Thompson2017": Thompson2017,
                "Durant2017": Durant2017,
                "Curry2018": Curry2018,
                "Thompson2018": Thompson2018,
                "Durant2018": Durant2018,
                "Paul2011": Paul2011,
                "Griffin2011": Griffin2011,
                "Jordan2011":Jordan2011,
                "Paul2012": Paul2012,
                "Griffin2012": Griffin2012,
                "Jordan2012": Jordan2012,
                "Paul2013": Paul2013,
                "Griffin2013": Griffin2013,
                "Jordan2013": Jordan2013,
                "Paul2014": Paul2014,
                "Griffin2014": Griffin2014,
                "Jordan2014": Jordan2014,
                "Paul2016": Paul2016,
                "Griffin2016": Griffin2016,
                "Jordan2016": Jordan2016,
                "Pierce2007": Pierce2007,
                "Garnett2007": Garnett2007,
                "Allen2007": Allen2007,
                "Pierce2008": Pierce2008,
                "Garnett2008": Garnett2008,
                "Allen2008": Allen2008,
                "Pierce2009": Pierce2009,
                "Garnett2009": Garnett2009,
                "Allen2009": Allen2009,
                "Pierce2010": Pierce2010,
                "Garnett2010": Garnett2010,
                "Allen2010": Allen2010,
                "Pierce2011": Pierce2011,
                "Garnett2011": Garnett2011,
                "Allen2011": Allen2011,
                "Kobe2008": Kobe2008,
                "Gasol2008": Gasol2008,
                "Bynum2008": Bynum2008,
                "Kobe2009": Kobe2009,
                "Gasol2009": Gasol2009,
                "Bynum2009": Bynum2009,
                "Kobe2010": Kobe2010,
                "Gasol2010": Gasol2010,
                "Bynum2010": Bynum2010,
            }
        }
    },
    mounted() {
      var trio = this.$route.query.name;
      var season = this.$route.query.season;
      var pathArr = trio.split("_")
      var csv1 = this.dataMap[pathArr[0] + season]
      this.getStats(csv1).then(() => this.drawChart("#linechart1", pathArr[0], season));
      var csv2 = this.dataMap[pathArr[1] + season]
      this.getStats(csv2).then(() => this.drawChart("#linechart2", pathArr[1], season));
      var csv3 = this.dataMap[pathArr[2] + season]
      this.getStats(csv3).then(() => this.drawChart("#linechart3", pathArr[2], season));
    },
    methods: {
        getStats(path) {
          // get data from csv file
          return new Promise((res, rej) => {
            d3.csv(path).then((stats) => {
              const point = [];
              const assist = [];
              const rebound = [];
              const newData = [];
              stats.forEach((d) => {
                point.push([parseInt(d.id), parseInt(d["得分"])]);
                assist.push([parseInt(d.id), parseInt(d["助攻"])]);
                rebound.push([parseInt(d.id), parseInt(d["篮板"])]);
              });
              newData.push(point);
              newData.push(assist);
              newData.push(rebound);
              this.lineChartData = newData;
              res();
            });
          });
        },
        drawChart(id, name, season) {
            // process data
            const attributes = ["Point", "Assist", "Rebound"];
            const stats = toRaw(this.lineChartData);
            let colorMap = {};
            const COLOR_SCHEME = ["#ee1f3d", "#1f5bd2", "#26ad10"];
            attributes.forEach((attr, i) => {
              colorMap[attr] = COLOR_SCHEME[i];
            });
            console.log("attr", attributes);
            console.log("lineData", stats);

            // draw line chart
            let [height, width] = [350, 535];
            let [marginLeft, marginRight, marginTop, marginBottom] = [30, 130, 30, 30]
            let xDomain = [0, 82];
            let yDomain = [0, 60];
            const xScale = d3.scaleLinear(xDomain, [marginLeft, width - marginRight]);
            const yScale = d3.scaleLinear(yDomain, [height - marginBottom, marginTop]);
            const xAxis = d3.axisBottom(xScale).ticks(width / 40);
            const yAxis = d3.axisLeft(yScale).ticks(height / 30);

            d3.select(id).select("svg").remove();
            const svg = d3.select("#linechart1")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])

            // draw axes
            const x = svg.append("g")
                .attr("transform", `translate(0,${height - marginBottom})`)
                .call(xAxis)
                .call(g => g.append("text")
                    .attr("x", width - marginRight)
                    .attr("y", marginBottom - 20)
                    .attr("fill", "currentColor")
                    .attr("text-anchor", "start")
                    .text("Games"));
            const y = svg.append("g")
                .call(yAxis)
                .attr("transform", `translate(${marginLeft},0)`)
                .call(g => g.selectAll(".tick line").clone()
                    .attr("x2", width - marginLeft - marginRight)
                    .attr("stroke-opacity", 0.1))
                .call(g => g.append("text")
                    .attr("x", -marginLeft)
                    .attr("y", 10)
                    .attr("fill", "currentColor")
                    .attr("text-anchor", "start")
                    .text("Numbers"));

            // draw lines with each game's data
            let line = d3.line()
                .curve(d3.curveLinear)
                .x(i => xScale(i[0]))
                .y(i => yScale(i[1]));

            let drawLine = (data, color) => {
                svg.append("path")
                    .attr("fill", "none")
                    .attr("stroke", color)
                    .attr("stroke-width", 1.5)
                    .attr("stroke-linecap", "round")
                    .attr("stroke-linejoin", "round")
                    .attr("stroke-opacity", 0.9)
                    .attr("d", line(data));
            }

            // draw legends
            svg.selectAll("dots")
                .data(attributes)
                .enter()
                .append("circle")
                .attr("cx", 450)
                .attr("cy", (_, i) => 20 + i * 25)
                .attr("r", 6)
                .style("fill", d => colorMap[d])

            svg.selectAll("attrs")
                .data(attributes)
                .enter()
                .append("text")
                .attr("x", 465)
                .attr("y", function (d, i) { return 20 + i * 25 })
                .style("fill", d => colorMap[d])
                .text(d => d)
                .attr("text-anchor", "left")
                .style("alignment-baseline", "middle");

            attributes.forEach((attr, i) => {
                drawLine(stats[i], colorMap[attr])
            })

            // draw title
            svg.append("text")
                .attr("x", width / 2 - 50)
                .attr("y", 12)
                .attr("text-anchor", "middle")
                .style("font-size", "15px")
                .text(`Overview of ${name} in ${season}~${parseInt(season) + 1} season`);

            return svg.node();
        }
    },
}

</script>


<style scoped>

</style>