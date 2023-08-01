<template>

  <a-slider id="scatterchart-slider" v-model:value="selected" :min=1 :max=8 :marks="marks" class="scatter-slider" />
  <h2 class="chartname"> {{this.selected}} team selected</h2>
  <div id="scatter"></div>

</template>

<script>

import * as d3 from "d3";

export default {
  name: "scatter",
  data() {
    return {
      titleX: "PER",
      titleY: "WS",
      csvData: {},
      selected: 8,
      marks: {
        1: "MIA",
        2: "SAS",
        3: "OKC",
        4: "CLE",
        5: "GSW",
        6: "LAC",
        7: "BOS",
        8: "LAL",
      },
    }
  },
  mounted() {
    this.drawChart();
  },
  watch: {
    selected: {
      handler() { this.drawChart(); }
    }
  },

  methods: {
    jump1(event, d) {  
      this.$router.push({
        path: '/detail',
        query: {
          name: d["name"],
          season: d["year"]
        }
      });
    },
    getStat() {
      let a = "#26ad10";
      let colors = {};
      let stats = [];
      const COLOR_SCHEME = ["#dc3737", "#050101", "#0866ec", "#790505", "#e8d670", "#e76b76", "#26ad10", "#c2a608"];
      stats["Heat"] = [];
      stats["Spurs"] = [];
      stats["Thunder"] = [];
      stats["Cavaliers"] = [];
      stats["Warriors"] = [];
      stats["Clippers"] = [];
      stats["Celtics"] = [];
      stats["Lakers"] = [];
      let per1 = [24.1, 25.3, 25.2, 23.43];
      let ws1 = [12.9, 9.7, 12.63, 9.8];
      for (let i = 0; i < 4; i++) {
        stats["Heat"].push({
          per: per1[i],
          ws: ws1[i],
          name: "LeBron_Wade_Bosh",
          year: 2010 + i,
        });
      }
      let per2 = [19.37, 20.43, 22.43, 22.1, 23.87, 22.9, 23.57, 21.2, 21.3, 22.13, 20.07, 20.17, 19.7];
      let ws2 = [9.467, 9.9, 10.73, 9.73, 11.07, 9.73, 7.9, 8.07, 8.6, 7.37, 6.33, 7.43, 8.23];
      for (let i = 0; i < 13; i++) {
        if (i < 9) {
          stats["Spurs"].push({
            per: per2[i],
            ws: ws2[i],
            name: "Duncan_Parker_Ginobili",
            year: 2002 + i,
          });
        } else if (i >= 9 && i < 11) {
          stats["Spurs"].push({
            per: per2[i],
            ws: ws2[i],
            name: "Duncan_Parker_Ginobili",
            year: 2003 + i,
          });
        } else {
          stats["Spurs"].push({
            per: per2[i],
            ws: ws2[i],
            name: "Duncan_Parker_Kawhi",
            year: 2003 + i,
          });
        }
      }
      let per3 = [19.3, 21.2, 23.4];
      let ws3 = [8.9, 9.5, 9.8];
      for (let i = 0; i < 3; i++) {
        stats["Thunder"].push({
          per: per3[i],
          ws: ws3[i],
          name: "Durant_Westbrook_Harden",
          year: 2009 + i,
        });
      }
      let per4 = [22.07, 22.13, 23.7];
      let ws4 = [9.83, 9.03, 9.4];
      for (let i = 0; i < 3; i++) {
        stats["Cavaliers"].push({
          per: per4[i],
          ws: ws4[i],
          name: "LeBron_Irving_Love",
          year: 2014 + i,
        });
      }
      let per5 = [13.7, 17.03, 21.73, 23.1, 23.2, 23.4, 21.71];
      let ws5 = [5.37, 8.3, 11, 12.3, 10.57, 8.13, 8.77];
      for (let i = 0; i < 7; i++) {
        if (i < 5) {
          stats["Warriors"].push({
            per: per5[i],
            ws: ws5[i],
            name: "Curry_Thompson_Green",
            year: 2012 + i,
          });
        } else {
          stats["Warriors"].push({
            per: per5[i],
            ws: ws5[i],
            name: "Curry_Thompson_Durant",
            year: 2012 + i,
          });
        }
      }
      let per6 = [22.27, 22, 22.67, 23.27, 24.8];
      let ws6 = [9.16, 10.23, 11.83, 12.63, 10.03];
      for (let i = 0; i < 5; i++) {
        if (i < 4) {
          stats["Clippers"].push({
            per: per6[i],
            ws: ws6[i],
            name: "Paul_Griffin_Jordan",
            year: 2011 + i,
          });
        } else {
          stats["Clippers"].push({
            per: per6[i],
            ws: ws6[i],
            name: "Paul_Griffin_Jordan",
            year: 2012 + i,
          });
        }
      }
      let per7 = [20.43, 18.73, 17.6, 18.9, 18.27];
      let ws7 = [11.67, 9.5, 7.83, 10.2, 6.2];
      for (let i = 0; i < 5; i++) {
        stats["Celtics"].push({
          per: per7[i],
          ws: ws7[i],
          name: "Pierce_Garnett_Allen",
          year: 2007 + i,
        });
      }
      let per8 = [22.2, 21.67, 22.77];
      let ws8 = [10.7, 9.4, 10.53];
      for (let i = 0; i < 3; i++) {
        stats["Lakers"].push({
          per: per8[i],
          ws: ws8[i],
          name: "Kobe_Gasol_Bynum",
          year: 2008 + i,
        });
      }
      let trios = ["Heat", "Spurs", "Thunder", "Cavaliers", "Warriors", "Clippers", "Celtics", "Lakers"];
      trios = trios.slice(0, this.selected);
      let newStats = [];
      let newStats1 = [];
      trios.forEach((team, i) => {
        newStats.push(...stats[team].map(d => Object.assign(d, {color: COLOR_SCHEME[i]}))
        );
      });
      colors["Heat"] = [];
      colors["Spurs"] = [];
      colors["Thunder"] = [];
      colors["Cavaliers"] = [];
      colors["Warriors"] = [];
      colors["Heat"] = COLOR_SCHEME[0];
      colors["Spurs"] = COLOR_SCHEME[1];
      colors["Thunder"] = COLOR_SCHEME[2];
      colors["Cavaliers"] = COLOR_SCHEME[3];
      colors["Warriors"] = COLOR_SCHEME[4];
      colors["Clippers"] = COLOR_SCHEME[5];
      colors["Celtics"] = COLOR_SCHEME[6];
      colors["Lakers"] = COLOR_SCHEME[7];
      console.log(stats);
      return {
        stats: newStats,
        colors: colors,
        trios: trios,
      }
    },
    drawChart() {
      let { stats, colors, trios } = this.getStat();
      console.log("stats", stats);
      let [height, width] = [500, 1600];
      let [marginLeft, marginRight, marginTop, marginBottom] = [40, 130, 40, 40];
      let X = d3.map(stats, d => d["per"]);
      let Y = d3.map(stats, d => d["ws"]);
      let xDomain = d3.extent(X);
      let yDomain = d3.extent(Y);
      let [insetLeft, insetRight, insetTop, insetBottom] = [6, 6, 6, 6]
      let xRange = [marginLeft + insetLeft, width - marginRight - insetRight];
      let yRange = [height - marginBottom - insetBottom, marginTop + insetTop];
      const xScale = d3.scaleLinear(xDomain, xRange);
      const yScale = d3.scaleLinear(yDomain, yRange);
      const xAxis = d3.axisBottom(xScale).ticks(width / 80);
      const yAxis = d3.axisLeft(yScale).ticks(height / 50);

      d3.select("#scatter").select("svg").remove();

      const svg = d3.select("#scatter")
          .append("svg")
          .attr("width", width)
          .attr("height", height)
          .attr("viewBox", [0, 0, width, height]);

      const tooltip = d3
          .select("#scatter")
          .append("div")
          .style("opacity", 0)
          .attr("class", "tooltip")
          .style("background-color", "white")
          .style("border", "solid")
          .style("border-width", "1px")
          .style("border-radius", "5px")
          .style("padding", "5px")
          .style("position", "absolute");

      const mouseover = function (event, d) {
        tooltip
            .style("opacity", 1)
            .html(d.name + "_" + d.year)
            .style("left", event.x + 10 + "px")
            .style("top", event.y + 10 + "px");
      };

      const mousemove = function (event, d) {
        tooltip
            .style('left', event.pageX + 10 + 'px')
            .style('top', event.pageY + 10 + 'px');
      };
      const mouseleave = function (event, d) {
        tooltip.transition().duration(200).style("opacity", 0);
      };

      svg.append("g")
          .attr("transform", `translate(0,${height - marginBottom})`)
          .call(xAxis)
          .call(g => g.select(".domain").remove())
          .call(g => g.selectAll(".tick line").clone()
              .attr("y2", marginTop + marginBottom - height)
              .attr("stroke-opacity", 0.2))
          .call(g => g.append("text")
              .attr("x", width - marginRight + 20)
              .attr("y", marginBottom - 25)
              .attr("fill", "currentColor")
              .attr("text-anchor", "end")
              .text(this.titleX));

      svg.append("g")
          .attr("transform", `translate(${marginLeft},0)`)
          .call(yAxis)
          .call(g => g.select(".domain").remove())
          .call(g => g.selectAll(".tick line").clone()
              .attr("x2", width - marginLeft - marginRight)
              .attr("stroke-opacity", 0.2))
          .call(g => g.append("text")
              .attr("x", -marginLeft)
              .attr("y", 25)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(this.titleY));
      // console.log(stats);





      svg.append("rect")
          .style("fill", "none")
          .style("pointer-events", "all")
          .attr("width", width)
          .attr("height", height)

      svg.append("g")
          //.attr("stroke", "#fff")
          .attr("stroke-width", 1)
          .selectAll("dot")
          .data(stats)
          .enter()
          .append("circle")
          .attr("stroke", d => d.color)
          .attr("cx", d => xScale(d["per"]))
          .attr("cy", d => yScale(d["ws"]))
          .attr("r", 5)
          .style("fill", d => d.color)
          .on("click", this.jump1)
          .on("mouseover", mouseover)
          .on("mousemove", mousemove)
          .on("mouseleave", mouseleave);

      svg.append("g")
          .selectAll("dots")
          .data(trios)
          .enter()
          .append("circle")
          .attr("cx", 1500)
          .attr("cy", (_, i) => 10 + i * 25)
          .attr("r", 6)
          .style("fill", d => colors[d]);

      svg.selectAll("trios")
          .data(trios)
          .enter()
          .append("text")
          .attr("x", 1520)
          .attr("y", function (d, i) {
            return 10 + i * 25
          })
          .style("fill", d => colors[d])
          .text(d => d)
          .attr("text-anchor", "left")
          .style("alignment-baseline", "middle");


      svg.append("text")
          .attr("x", width / 2)
          .attr("y", 16)
          .attr("text-anchor", "middle")
          .style("font-size", "15px")
          .style("text-decoration", "underline")
          .text(`${this.titleX}-${this.titleY} Correlations`);

      console.log("finish scatter");
      return svg.node();

    },

  },
}
</script>

<style>
.scatter-slider {
  margin-left: 20px;
  margin-right: 20px;
}

</style>