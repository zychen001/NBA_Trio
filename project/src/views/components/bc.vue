<template>
    <a-row type="flex">
      <button @click="jump1">跳转</button>
        <a-col :flex="4">
            <div id="rc"></div>
        </a-col>
<!--         <a-col :flex="1">
            <div id="legend"></div>
            <div style="margin-left: 0px">
                  <input type="checkbox" class="checkbox" value="A" checked><label>group A</label>
                  <input type="checkbox" class="checkbox" value="B" checked><label>group B</label>
                  <input type="checkbox" class="checkbox" value="C" checked><label>group C</label>
            </div>
            <a-checkbox-group v-model:value="checkedList" :options="plainOptions" @change="handleChange"/>
        </a-col> -->
    </a-row>
</template>

<script>
    import * as d3 from "d3";

    export default {
        name: 'RadarChart',
        data() {
            return {
                trio : {
                     'MIA1011': [[{'axis': 'Point', 'value': 4.09},
                       {'axis': 'Rebound', 'value': 3.05},
                       {'axis': 'Assist', 'value': 2.95},
                       {'axis': 'Steal', 'value': 3.17},
                       {'axis': 'Block', 'value': 2.17},
                       {'axis': 'Winning', 'value': 3.17}]],
                     'MIA1112': [[{'axis': 'Point', 'value': 3.72},
                       {'axis': 'Rebound', 'value': 2.65},
                       {'axis': 'Assist', 'value': 2.55},
                       {'axis': 'Steal', 'value': 4.17},
                       {'axis': 'Block', 'value': 3.17},
                       {'axis': 'Winning', 'value': 3.11}]],
                     'MIA1213': [[{'axis': 'Point', 'value': 3.46},
                       {'axis': 'Rebound', 'value': 2.45},
                       {'axis': 'Assist', 'value': 3.23},
                       {'axis': 'Steal', 'value': 4.17},
                       {'axis': 'Block', 'value': 3.5},
                       {'axis': 'Winning', 'value': 3.78}]],
                     'MIA1314': [[{'axis': 'Point', 'value': 3.23},
                       {'axis': 'Rebound', 'value': 2.0},
                       {'axis': 'Assist', 'value': 2.32},
                       {'axis': 'Steal', 'value': 3.5},
                       {'axis': 'Block', 'value': 2.0},
                       {'axis': 'Winning', 'value': 2.87}]],
                     'BOS0708': [[{'axis': 'Point', 'value': 2.58},
                       {'axis': 'Rebound', 'value': 2.0},
                       {'axis': 'Assist', 'value': 1.82},
                       {'axis': 'Steal', 'value': 2.67},
                       {'axis': 'Block', 'value': 1.67},
                       {'axis': 'Winning', 'value': 3.78}]],
                     'BOS0809': [[{'axis': 'Point', 'value': 2.45},
                       {'axis': 'Rebound', 'value': 1.9},
                       {'axis': 'Assist', 'value': 0.86},
                       {'axis': 'Steal', 'value': 1.67},
                       {'axis': 'Block', 'value': 1.17},
                       {'axis': 'Winning', 'value': 3.48}]],
                     'BOS0910': [[{'axis': 'Point', 'value': 1.89},
                       {'axis': 'Rebound', 'value': 1.23},
                       {'axis': 'Assist', 'value': 0.64},
                       {'axis': 'Steal', 'value': 1.67},
                       {'axis': 'Block', 'value': 0.83},
                       {'axis': 'Winning', 'value': 2.56}]],
                     'BOS1011': [[{'axis': 'Point', 'value': 2.03},
                       {'axis': 'Rebound', 'value': 1.92},
                       {'axis': 'Assist', 'value': 0.64},
                       {'axis': 'Steal', 'value': 2.17},
                       {'axis': 'Block', 'value': 1.0},
                       {'axis': 'Winning', 'value': 3.02}]],
                     'BOS1112': [[{'axis': 'Point', 'value': 1.94},
                       {'axis': 'Rebound', 'value': 1.62},
                       {'axis': 'Assist', 'value': 1.27},
                       {'axis': 'Steal', 'value': 1.83},
                       {'axis': 'Block', 'value': 1.0},
                       {'axis': 'Winning', 'value': 2.44}]],
                     'OKC0910': [[{'axis': 'Point', 'value': 2.61},
                       {'axis': 'Rebound', 'value': 1.42},
                       {'axis': 'Assist', 'value': 2.55},
                       {'axis': 'Steal', 'value': 3.0},
                       {'axis': 'Block', 'value': 1.17},
                       {'axis': 'Winning', 'value': 2.56}]],
                     'OKC1011': [[{'axis': 'Point', 'value': 3.18},
                       {'axis': 'Rebound', 'value': 1.12},
                       {'axis': 'Assist', 'value': 2.73},
                       {'axis': 'Steal', 'value': 3.5},
                       {'axis': 'Block', 'value': 1.17},
                       {'axis': 'Winning', 'value': 2.94}]],
                     'OKC1112': [[{'axis': 'Point', 'value': 3.84},
                       {'axis': 'Rebound', 'value': 1.67},
                       {'axis': 'Assist', 'value': 2.59},
                       {'axis': 'Steal', 'value': 3.33},
                       {'axis': 'Block', 'value': 1.33},
                       {'axis': 'Winning', 'value': 2.33}]],
                     'CLE1415': [[{'axis': 'Point', 'value': 3.34},
                       {'axis': 'Rebound', 'value': 2.22},
                       {'axis': 'Assist', 'value': 3.55},
                       {'axis': 'Steal', 'value': 3.0},
                       {'axis': 'Block', 'value': 0.83},
                       {'axis': 'Winning', 'value': 2.79}]],
                     'CLE1516': [[{'axis': 'Point', 'value': 3.09},
                       {'axis': 'Rebound', 'value': 2.58},
                       {'axis': 'Assist', 'value': 3.14},
                       {'axis': 'Steal', 'value': 2.17},
                       {'axis': 'Block', 'value': 0.67},
                       {'axis': 'Winning', 'value': 3.09}]],
                     'CLE1617': [[{'axis': 'Point', 'value': 4.06},
                       {'axis': 'Rebound', 'value': 3.22},
                       {'axis': 'Assist', 'value': 4.27},
                       {'axis': 'Steal', 'value': 2.17},
                       {'axis': 'Block', 'value': 0.5},
                       {'axis': 'Winning', 'value': 2.64}]],
                     'GSW1415': [[{'axis': 'Point', 'value': 2.72},
                       {'axis': 'Rebound', 'value': 1.42},
                       {'axis': 'Assist', 'value': 3.32},
                       {'axis': 'Steal', 'value': 4.5},
                       {'axis': 'Block', 'value': 2.17},
                       {'axis': 'Winning', 'value': 4.31}]],
                     'GSW1516': [[{'axis': 'Point', 'value': 3.62},
                       {'axis': 'Rebound', 'value': 2.2},
                       {'axis': 'Assist', 'value': 4.18},
                       {'axis': 'Steal', 'value': 4.0},
                       {'axis': 'Block', 'value': 2.0},
                       {'axis': 'Winning', 'value': 3.86}]],
                     'GSW1617': [[{'axis': 'Point', 'value': 4.27},
                       {'axis': 'Rebound', 'value': 1.62},
                       {'axis': 'Assist', 'value': 2.95},
                       {'axis': 'Steal', 'value': 2.83},
                       {'axis': 'Block', 'value': 2.17},
                       {'axis': 'Winning', 'value': 3.86}]],
                     'GSW1718': [[{'axis': 'Point', 'value': 4.28},
                       {'axis': 'Rebound', 'value': 1.42},
                       {'axis': 'Assist', 'value': 3.18},
                       {'axis': 'Steal', 'value': 1.83},
                       {'axis': 'Block', 'value': 2.5},
                       {'axis': 'Winning', 'value': 3.17}]],
                     'GSW1819': [[{'axis': 'Point', 'value': 4.48},
                       {'axis': 'Rebound', 'value': 1.38},
                       {'axis': 'Assist', 'value': 2.95},
                       {'axis': 'Steal', 'value': 1.83},
                       {'axis': 'Block', 'value': 1.83},
                       {'axis': 'Winning', 'value': 3.09}]],
                     'LAL0809': [[{'axis': 'Point', 'value': 3.0},
                       {'axis': 'Rebound', 'value': 3.2},
                       {'axis': 'Assist', 'value': 1.27},
                       {'axis': 'Steal', 'value': 0.83},
                       {'axis': 'Block', 'value': 3.83},
                       {'axis': 'Winning', 'value': 3.7}]],
                     'LAL0910': [[{'axis': 'Point', 'value': 3.03},
                       {'axis': 'Rebound', 'value': 3.75},
                       {'axis': 'Assist', 'value': 1.09},
                       {'axis': 'Steal', 'value': 1.0},
                       {'axis': 'Block', 'value': 4.0},
                       {'axis': 'Winning', 'value': 3.09}]],
                     'LAL1011': [[{'axis': 'Point', 'value': 2.54},
                       {'axis': 'Rebound', 'value': 3.67},
                       {'axis': 'Assist', 'value': 1.09},
                       {'axis': 'Steal', 'value': 0.33},
                       {'axis': 'Block', 'value': 4.5},
                       {'axis': 'Winning', 'value': 3.09}]],
                     'LAL1112': [[{'axis': 'Point', 'value': 3.4},
                       {'axis': 'Rebound', 'value': 4.4},
                       {'axis': 'Assist', 'value': 1.18},
                       {'axis': 'Steal', 'value': 0.5},
                       {'axis': 'Block', 'value': 4.33},
                       {'axis': 'Winning', 'value': 1.88}]],
                     'SAS0304': [[{'axis': 'Point', 'value': 1.98},
                       {'axis': 'Rebound', 'value': 2.53},
                       {'axis': 'Assist', 'value': 2.45},
                       {'axis': 'Steal', 'value': 2.5},
                       {'axis': 'Block', 'value': 3.33},
                       {'axis': 'Winning', 'value': 3.09}]],
                     'SAS0405': [[{'axis': 'Point', 'value': 2.29},
                       {'axis': 'Rebound', 'value': 2.3},
                       {'axis': 'Assist', 'value': 2.59},
                       {'axis': 'Steal', 'value': 2.5},
                       {'axis': 'Block', 'value': 3.5},
                       {'axis': 'Winning', 'value': 3.25}]],
                     'SAS0506': [[{'axis': 'Point', 'value': 2.26},
                       {'axis': 'Rebound', 'value': 1.95},
                       {'axis': 'Assist', 'value': 2.55},
                       {'axis': 'Steal', 'value': 2.5},
                       {'axis': 'Block', 'value': 2.5},
                       {'axis': 'Winning', 'value': 3.55}]],
                     'SAS0607': [[{'axis': 'Point', 'value': 2.51},
                       {'axis': 'Rebound', 'value': 2.05},
                       {'axis': 'Assist', 'value': 2.45},
                       {'axis': 'Steal', 'value': 2.33},
                       {'axis': 'Block', 'value': 3.17},
                       {'axis': 'Winning', 'value': 3.17}]],
                     'SAS0708': [[{'axis': 'Point', 'value': 2.76},
                       {'axis': 'Rebound', 'value': 2.33},
                       {'axis': 'Assist', 'value': 2.86},
                       {'axis': 'Steal', 'value': 1.67},
                       {'axis': 'Block', 'value': 2.33},
                       {'axis': 'Winning', 'value': 3.02}]],
                     'SAS0809': [[{'axis': 'Point', 'value': 2.68},
                       {'axis': 'Rebound', 'value': 2.08},
                       {'axis': 'Assist', 'value': 3.18},
                       {'axis': 'Steal', 'value': 1.5},
                       {'axis': 'Block', 'value': 2.0},
                       {'axis': 'Winning', 'value': 2.87}]],
                     'SAS0910': [[{'axis': 'Point', 'value': 2.04},
                       {'axis': 'Rebound', 'value': 1.58},
                       {'axis': 'Assist', 'value': 3.09},
                       {'axis': 'Steal', 'value': 0.83},
                       {'axis': 'Block', 'value': 1.67},
                       {'axis': 'Winning', 'value': 2.56}]],
                     'SAS1011': [[{'axis': 'Point', 'value': 1.83},
                       {'axis': 'Rebound', 'value': 1.42},
                       {'axis': 'Assist', 'value': 3.27},
                       {'axis': 'Steal', 'value': 2.33},
                       {'axis': 'Block', 'value': 2.17},
                       {'axis': 'Winning', 'value': 3.4}]],
                     'SAS1213': [[{'axis': 'Point', 'value': 2.0},
                       {'axis': 'Rebound', 'value': 2.22},
                       {'axis': 'Assist', 'value': 2.23},
                       {'axis': 'Steal', 'value': 2.0},
                       {'axis': 'Block', 'value': 4.0},
                       {'axis': 'Winning', 'value': 3.17}]],
                     'SAS1314': [[{'axis': 'Point', 'value': 1.46},
                       {'axis': 'Rebound', 'value': 2.05},
                       {'axis': 'Assist', 'value': 1.68},
                       {'axis': 'Steal', 'value': 1.33},
                       {'axis': 'Block', 'value': 3.0},
                       {'axis': 'Winning', 'value': 3.48}]],
                     'SAS1415': [[{'axis': 'Point', 'value': 1.48},
                       {'axis': 'Rebound', 'value': 2.05},
                       {'axis': 'Assist', 'value': 1.55},
                       {'axis': 'Steal', 'value': 2.83},
                       {'axis': 'Block', 'value': 3.17},
                       {'axis': 'Winning', 'value': 2.94}]],
                     'LAC1213': [[{'axis': 'Point', 'value': 1.37},
                       {'axis': 'Rebound', 'value': 2.3},
                       {'axis': 'Assist', 'value': 3.05},
                       {'axis': 'Steal', 'value': 3.67},
                       {'axis': 'Block', 'value': 1.83},
                       {'axis': 'Winning', 'value': 3.02}]],
                     'LAC1314': [[{'axis': 'Point', 'value': 2.36},
                       {'axis': 'Rebound', 'value': 4.35},
                       {'axis': 'Assist', 'value': 3.86},
                       {'axis': 'Steal', 'value': 4.5},
                       {'axis': 'Block', 'value': 3.67},
                       {'axis': 'Winning', 'value': 3.09}]],
                     'LAC1415': [[{'axis': 'Point', 'value': 2.25},
                       {'axis': 'Rebound', 'value': 4.3},
                       {'axis': 'Assist', 'value': 3.91},
                       {'axis': 'Steal', 'value': 3.0},
                       {'axis': 'Block', 'value': 3.17},
                       {'axis': 'Winning', 'value': 3.02}]],
                     'LAC1617': [[{'axis': 'Point', 'value': 2.22},
                       {'axis': 'Rebound', 'value': 4.22},
                       {'axis': 'Assist', 'value': 3.77},
                       {'axis': 'Steal', 'value': 2.5},
                       {'axis': 'Block', 'value': 3.0},
                       {'axis': 'Winning', 'value': 2.64}]]}
            }
        },

        mounted(){
            var margin = {top: 100, right: 100, bottom: 100, left: 100},
                width = Math.min(500, window.innerWidth - 10) - margin.left - margin.right,
                height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
            // var color = d3.scale.ordinal()
            //     .range(["#CC333F","#00A0B0"]);
            var color = d3.scaleOrdinal()
            // .domain(["Eco", "Eco Plus", "Business" ])
            .range([ "#440154ff", "#21908dff", "#fde725ff"])
            var radarChartOptions = {
              w: width,
              h: height,
              margin: margin,
              maxValue: 5,
              levels: 5,
              roundStrokes: true,
              color: color
            };
            this.radarChart("#rc", this.trio["LAC1415"], radarChartOptions);
        },
        methods: {
            // jump2(){
            //   this.$router.push({
            //     name: "Detail",
            //     params: {
            //       name: "ming",
            //       age: 18
            //     }
            //   });
            // },
          jump1() {  
            this.$router.push({
              path: '/detail',
              query: {
                name: "ming",
                age: 18
              }
                });
          },

            radarChart(id, data, options) {
                var cfg = {
                 w: 600,                //Width of the circle
                 h: 600,                //Height of the circle
                 margin: {top: 20, right: 20, bottom: 20, left: 20}, //The margins of the SVG
                 levels: 3,             //How many levels or inner circles should there be drawn
                 maxValue: 0,           //What is the value that the biggest circle will represent
                 labelFactor: 1.25,     //How much farther than the radius of the outer circle should the labels be placed
                 wrapWidth: 60,         //The number of pixels after which a label needs to be given a new line
                 opacityArea: 0.35,     //The opacity of the area of the blob
                 dotRadius: 4,          //The size of the colored circles of each blog
                 opacityCircles: 0.1,   //The opacity of the circles of each blob
                 strokeWidth: 2,        //The width of the stroke around each blob
                 roundStrokes: false,   //If true the area and stroke will follow a round path (cardinal-closed)
                 // color: d3.scale.category10()   //Color function
                 color: d3.schemeTableau10
                };
                
                //Put all of the options into a variable called cfg
                if('undefined' !== typeof options){
                  for(var i in options){
                    if('undefined' !== typeof options[i]){ cfg[i] = options[i]; }
                  }//for i
                }//if
                
                //If the supplied maxValue is smaller than the actual one, replace by the max in the data
                var maxValue = Math.max(cfg.maxValue, d3.max(data, function(i){return d3.max(i.map(function(o){return o.value;}))}));
                    
                var allAxis = (data[0].map(function(i, j){return i.axis})), //Names of each axis
                    total = allAxis.length,                 //The number of different axes
                    radius = Math.min(cfg.w/2, cfg.h/2),    //Radius of the outermost circle
                    Format = d3.format('.2f'),               //Percentage formatting
                    angleSlice = Math.PI * 2 / total;       //The width in radians of each "slice"
                
                //Scale for the radius
                var rScale = d3.scaleLinear()
                    .range([0, radius])
                    .domain([0, maxValue]);
                    
                /////////////////////////////////////////////////////////
                //////////// Create the container SVG and g /////////////
                /////////////////////////////////////////////////////////

                //Remove whatever chart with the same id/class was present before
                d3.select(id).select("svg").remove();
                
                //Initiate the radar chart SVG
                var svg = d3.select(id).append("svg")
                        .attr("width",  cfg.w + cfg.margin.left + cfg.margin.right)
                        .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
                        .attr("class", "radar"+id);
                //Append a g element        
                var g = svg.append("g")
                        .attr("transform", "translate(" + (cfg.w/2 + cfg.margin.left) + "," + (cfg.h/2 + cfg.margin.top) + ")");
                
                /////////////////////////////////////////////////////////
                ////////// Glow filter for some extra pizzazz ///////////
                /////////////////////////////////////////////////////////
                
                //Filter for the outside glow
                var filter = g.append('defs').append('filter').attr('id','glow'),
                    feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation','2.5').attr('result','coloredBlur'),
                    feMerge = filter.append('feMerge'),
                    feMergeNode_1 = feMerge.append('feMergeNode').attr('in','coloredBlur'),
                    feMergeNode_2 = feMerge.append('feMergeNode').attr('in','SourceGraphic');

                /////////////////////////////////////////////////////////
                /////////////// Draw the Circular grid //////////////////
                /////////////////////////////////////////////////////////
                
                //Wrapper for the grid & axes
                var axisGrid = g.append("g").attr("class", "axisWrapper");
                
                //Draw the background circles
                axisGrid.selectAll(".levels")
                   .data(d3.range(1,(cfg.levels+1)).reverse())
                   .enter()
                    .append("circle")
                    .attr("class", "gridCircle")
                    .attr("r", function(d, i){return radius/cfg.levels*d;})
                    .style("fill", "#CDCDCD")
                    .style("stroke", "#CDCDCD")
                    .style("fill-opacity", cfg.opacityCircles)
                    .style("filter" , "url(#glow)");

                //Text indicating at what % each level is
                axisGrid.selectAll(".axisLabel")
                   .data(d3.range(1,(cfg.levels+1)).reverse())
                   .enter().append("text")
                   .attr("class", "axisLabel")
                   .attr("x", 4)
                   .attr("y", function(d){return -d*radius/cfg.levels;})
                   .attr("dy", "0.4em")
                   .style("font-size", "10px")
                   .attr("fill", "#737373")
                   .text(function(d,i) { return Format(maxValue * d/cfg.levels); });

                /////////////////////////////////////////////////////////
                //////////////////// Draw the axes //////////////////////
                /////////////////////////////////////////////////////////
                
                //Create the straight lines radiating outward from the center
                var axis = axisGrid.selectAll(".axis")
                    .data(allAxis)
                    .enter()
                    .append("g")
                    .attr("class", "axis");
                //Append the lines
                axis.append("line")
                    .attr("x1", 0)
                    .attr("y1", 0)
                    .attr("x2", function(d, i){ return rScale(maxValue*1.1) * Math.cos(angleSlice*i - Math.PI/2); })
                    .attr("y2", function(d, i){ return rScale(maxValue*1.1) * Math.sin(angleSlice*i - Math.PI/2); })
                    .attr("class", "line")
                    .style("stroke", "white")
                    .style("stroke-width", "2px");

                //Append the labels at each axis
                axis.append("text")
                    .attr("class", "legend")
                    .style("font-size", "11px")
                    .attr("text-anchor", "middle")
                    .attr("dy", "0.35em")
                    .attr("x", function(d, i){ return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice*i - Math.PI/2); })
                    .attr("y", function(d, i){ return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice*i - Math.PI/2); })
                    .text(function(d){return d})
                    .call(wrap, cfg.wrapWidth);

                /////////////////////////////////////////////////////////
                ///////////// Draw the radar chart blobs ////////////////
                /////////////////////////////////////////////////////////
                
                //The radial line function
                // var radarLine = d3.svg.line.radial()
                //     .interpolate("linear-closed")
                //     .radius(function(d) { return rScale(d.value); })
                //     .angle(function(d,i) {  return i*angleSlice; });
                const radarLine = d3.radialLine()
                .curve(d3.curveLinearClosed)
                .radius(d => rScale(d.value))
                .angle((d,i) => i * angleSlice);    
                    
                // if(cfg.roundStrokes) {
                //     radarLine.interpolate("cardinal-closed");
                // }

                if(cfg.roundStrokes) {
                    radarLine.curve(d3.curveCardinalClosed)
                }
                            
                //Create a wrapper for the blobs    
                var blobWrapper = g.selectAll(".radarWrapper")
                    .data(data)
                    .enter().append("g")
                    .attr("class", "radarWrapper");
                        
                //Append the backgrounds    
                blobWrapper
                    .append("path")
                    .attr("class", "radarArea")
                    .attr("d", function(d,i) { return radarLine(d); })
                    .style("fill", function(d,i) { return cfg.color(i); })
                    .style("fill-opacity", cfg.opacityArea)
                    .on('mouseover', function (d,i){
                        //Dim all blobs
                        d3.selectAll(".radarArea")
                            .transition().duration(200)
                            .style("fill-opacity", 0.1); 
                        //Bring back the hovered over blob
                        d3.select(this)
                            .transition().duration(200)
                            .style("fill-opacity", 0.7);    
                    })
                    .on('mouseout', function(){
                        //Bring back all blobs
                        d3.selectAll(".radarArea")
                            .transition().duration(200)
                            .style("fill-opacity", cfg.opacityArea);
                    });
                    
                //Create the outlines   
                blobWrapper.append("path")
                    .attr("class", "radarStroke")
                    .attr("d", function(d,i) { return radarLine(d); })
                    .style("stroke-width", cfg.strokeWidth + "px")
                    .style("stroke", function(d,i) { return cfg.color(i); })
                    .style("fill", "none")
                    .style("filter" , "url(#glow)");        
                
                //Append the circles
                blobWrapper.selectAll(".radarCircle")
                    .data(function(d,i) { return d; })
                    .enter().append("circle")
                    .attr("class", "radarCircle")
                    .attr("r", cfg.dotRadius)
                    .attr("cx", function(d,i){ return rScale(d.value) * Math.cos(angleSlice*i - Math.PI/2); })
                    .attr("cy", function(d,i){ return rScale(d.value) * Math.sin(angleSlice*i - Math.PI/2); })
                    .style("fill", function(d,i,j) { return cfg.color(j); })
                    .style("fill-opacity", 0.8);

                /////////////////////////////////////////////////////////
                //////// Append invisible circles for tooltip ///////////
                /////////////////////////////////////////////////////////
                
                //Wrapper for the invisible circles on top
                var blobCircleWrapper = g.selectAll(".radarCircleWrapper")
                    .data(data)
                    .enter().append("g")
                    .attr("class", "radarCircleWrapper");
                    
                //Append a set of invisible circles on top for the mouseover pop-up
                blobCircleWrapper.selectAll(".radarInvisibleCircle")
                    .data(function(d,i) { return d;})
                    .enter().append("circle")
                    .attr("class", "radarInvisibleCircle")
                    .attr("r", cfg.dotRadius*1.5)
                    .attr("cx", function(d,i){ return rScale(d.value) * Math.cos(angleSlice*i - Math.PI/2); })
                    .attr("cy", function(d,i){ return rScale(d.value) * Math.sin(angleSlice*i - Math.PI/2); })
                    .style("fill", "none")
                    .style("pointer-events", "all")
                    .on("mouseover", function(d,i) {
                        var newX =  parseFloat(d3.select(this).attr('cx')) - 10;
                        var newY =  parseFloat(d3.select(this).attr('cy')) - 10;
                                
                        tooltip
                            .attr('x', newX)
                            .attr('y', newY)
                            .text(Format(d.value))
                            .transition().duration(200)
                            .style('opacity', 1);
                    })
                    .on("mouseout", function(){
                        tooltip.transition().duration(200)
                            .style("opacity", 0);
                    });
                    
                //Set up the small tooltip for when you hover over a circle
                var tooltip = g.append("text")
                    .attr("class", "tooltip")
                    .style("opacity", 0);
                
                /////////////////////////////////////////////////////////
                /////////////////// Helper Function /////////////////////
                /////////////////////////////////////////////////////////

                //Taken from http://bl.ocks.org/mbostock/7555321
                //Wraps SVG text    
                function wrap(text, width) {
                  text.each(function() {
                    var text = d3.select(this),
                        words = text.text().split(/\s+/).reverse(),
                        word,
                        line = [],
                        lineNumber = 0,
                        lineHeight = 1.4, // ems
                        y = text.attr("y"),
                        x = text.attr("x"),
                        dy = parseFloat(text.attr("dy")),
                        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
                        
                    while (word = words.pop()) {
                      line.push(word);
                      tspan.text(line.join(" "));
                      if (tspan.node().getComputedTextLength() > width) {
                        line.pop();
                        tspan.text(line.join(" "));
                        line = [word];
                        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                      }
                    }
                  });
                }//wrap 
                
            }//RadarChart
        }
    }

</script>