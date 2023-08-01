<template>
    <a-row type="flex">
        <a-col :span="12">
            <div style="margin-left: 0px">
                <label style="margin-left: 100px">Trio: </label>
                <a-select v-model:value="selected1" style="width: 225px" @change="handleChange1">
                    <a-select-option value="LeBron_Wade_Bosh">LeBron_Wade_Bosh</a-select-option>
                    <a-select-option value="Pierce_Garnett_Allen">Pierce_Garnett_Allen</a-select-option>
                    <a-select-option value="Durant_Westbrook_Harden">Durant_Westbrook_Harden</a-select-option>
                    <a-select-option value="LeBron_Irving_Love">LeBron_Irving_Love</a-select-option>
                    <a-select-option value="Curry_Thompson_Green">Curry_Thompson_Green</a-select-option>
                    <a-select-option value="Curry_Thompson_Durant">Curry_Thompson_Durant</a-select-option>
                    <a-select-option value="Kobe_Gasol_Bynum">Kobe_Gasol_Bynum</a-select-option>
                    <a-select-option value="Duncan_Parker_Ginobili">Duncan_Parker_Ginobili</a-select-option>
                    <a-select-option value="Duncan_Parker_Kawhi">Duncan_Parker_Kawhi</a-select-option>
                    <a-select-option value="Paul_Griffin_Jordan">Paul_Griffin_Jordan</a-select-option>
                </a-select>
                <label style="margin-left: 30px">Season: </label>
                <a-select
                  v-model:value="value1"
                  mode="multiple"
                  style="width: 240px"
                  placeholder="Please select"
                  :options="seasons1"
                  @change="handleChange2"
                >
                </a-select>
            </div>
            <div id="rc1" ></div>
        </a-col>
        <a-col :span="12">
            <div style="margin-left: 0px">
                <label style="margin-left: 100px">Trio: </label>
                <a-select v-model:value="selected2" style="width: 225px" @change="handleChange3">
                    <a-select-option value="LeBron_Wade_Bosh">LeBron_Wade_Bosh</a-select-option>
                    <a-select-option value="Pierce_Garnett_Allen">Pierce_Garnett_Allen</a-select-option>
                    <a-select-option value="Durant_Westbrook_Harden">Durant_Westbrook_Harden</a-select-option>
                    <a-select-option value="LeBron_Irving_Love">LeBron_Irving_Love</a-select-option>
                    <a-select-option value="Curry_Thompson_Green">Curry_Thompson_Green</a-select-option>
                    <a-select-option value="Curry_Thompson_Durant">Curry_Thompson_Durant</a-select-option>
                    <a-select-option value="Kobe_Gasol_Bynum">Kobe_Gasol_Bynum</a-select-option>
                    <a-select-option value="Duncan_Parker_Ginobili">Duncan_Parker_Ginobili</a-select-option>
                    <a-select-option value="Duncan_Parker_Kawhi">Duncan_Parker_Kawhi</a-select-option>
                    <a-select-option value="Paul_Griffin_Jordan">Paul_Griffin_Jordan</a-select-option>
                </a-select>
                <label style="margin-left: 30px">Season: </label>
                <a-select
                  v-model:value="value2"
                  mode="multiple"
                  style="width: 240px"
                  placeholder="Please select"
                  :options="seasons2"
                  @change="handleChange4"
                >
                </a-select>
            </div>
            <div id="rc2"></div>
        </a-col>
    </a-row>
</template>

<script>
    import * as d3 from "d3";

    export default {
        name: 'RadarChart',
        data() {
            return {
                seasons1:[{value:"2010~2011"}, {value:"2011~2012"}, {value:"2012~2013"}, {value:"2013~2014"}],
                seasons2:[{value:"2007~2008"}, {value:"2008~2009"}, {value:"2009~2010"}, {value:"2010~2011"}, {value:"2011~2012"}],
                value1: ['2010~2011','2011~2012'],
                value2: ['2007~2008','2008~2009'],
                selected1: "LeBron_Wade_Bosh",
                selected2: "Pierce_Garnett_Allen",
                t2s:
                {
                  "LeBron_Wade_Bosh": [{value:"2010~2011"}, {value:"2011~2012"}, {value:"2012~2013"}, {value:"2013~2014"}],
                  "Pierce_Garnett_Allen":[{value:"2007~2008"}, {value:"2008~2009"}, {value:"2009~2010"}, {value:"2010~2011"}, {value:"2011~2012"}],
                  "Durant_Westbrook_Harden": [{value:"2009~2010"}, {value:"2010~2011"}, {value:"2011~2012"}],
                  "LeBron_Irving_Love": [{value:"2014~2015"}, {value:"2015~2016"}, {value:"2016~2017"}],
                  "Curry_Thompson_Green": [{value:"2014~2015"}, {value:"2015~2016"}],
                  "Curry_Thompson_Durant":[{value:"2016~2017"}, {value:"2017~2018"}, {value:"2018~2019"}],
                  "Kobe_Gasol_Bynum": [{value:"2008~2009"}, {value:"2009~2010"}, {value:"2010~2011"}, {value:"2011~2012"}],
                  "Duncan_Parker_Ginobili":[{value:"2003~2004"}, {value:"2004~2005"}, {value:"2005~2006"}, {value:"2006~2007"}, {value:"2007~2008"}, {value:"2008~2009"}, {value:"2009~2010"}, {value:"2010~2011"}],
                  "Duncan_Parker_Kawhi":[{value:"2012~2013"}, {value:"2013~2014"}, {value:"2014~2015"}],
                  "Paul_Griffin_Jordan": [{value:"2012~2013"}, {value:"2013~2014"}, {value:"2014~2015"}, {value:"2016~2017"}]
                },
                trio : 
                {'LeBron_Wade_Bosh': {'2010~2011': {'name': '2010~2011',
                   'axes': [{'axis': 'Point', 'value': 4.37},
                    {'axis': 'Rebound', 'value': 2.94},
                    {'axis': 'Assist', 'value': 3.19},
                    {'axis': 'Steal', 'value': 3.4},
                    {'axis': 'Block', 'value': 2.08},
                    {'axis': 'Winning', 'value': 2.66}]},
                  '2011~2012': {'name': '2011~2012',
                   'axes': [{'axis': 'Point', 'value': 3.78},
                    {'axis': 'Rebound', 'value': 2.33},
                    {'axis': 'Assist', 'value': 2.62},
                    {'axis': 'Steal', 'value': 4.6},
                    {'axis': 'Block', 'value': 3.33},
                    {'axis': 'Winning', 'value': 2.52}]},
                  '2012~2013': {'name': '2012~2013',
                   'axes': [{'axis': 'Point', 'value': 3.36},
                    {'axis': 'Rebound', 'value': 2.02},
                    {'axis': 'Assist', 'value': 3.56},
                    {'axis': 'Steal', 'value': 4.6},
                    {'axis': 'Block', 'value': 3.75},
                    {'axis': 'Winning', 'value': 3.91}]},
                  '2013~2014': {'name': '2013~2014',
                   'axes': [{'axis': 'Point', 'value': 2.99},
                    {'axis': 'Rebound', 'value': 1.34},
                    {'axis': 'Assist', 'value': 2.31},
                    {'axis': 'Steal', 'value': 3.8},
                    {'axis': 'Block', 'value': 1.88},
                    {'axis': 'Winning', 'value': 2.03}]}},
                 'Pierce_Garnett_Allen': {'2007~2008': {'name': '2007~2008',
                   'axes': [{'axis': 'Point', 'value': 1.95},
                    {'axis': 'Rebound', 'value': 1.34},
                    {'axis': 'Assist', 'value': 1.62},
                    {'axis': 'Steal', 'value': 2.8},
                    {'axis': 'Block', 'value': 1.46},
                    {'axis': 'Winning', 'value': 3.91}]},
                  '2008~2009': {'name': '2008~2009',
                   'axes': [{'axis': 'Point', 'value': 1.74},
                    {'axis': 'Rebound', 'value': 1.18},
                    {'axis': 'Assist', 'value': 0.31},
                    {'axis': 'Steal', 'value': 1.6},
                    {'axis': 'Block', 'value': 0.83},
                    {'axis': 'Winning', 'value': 3.28}]},
                  '2009~2010': {'name': '2009~2010',
                   'axes': [{'axis': 'Point', 'value': 0.84},
                    {'axis': 'Rebound', 'value': 0.15},
                    {'axis': 'Assist', 'value': 0.0},
                    {'axis': 'Steal', 'value': 1.6},
                    {'axis': 'Block', 'value': 0.42},
                    {'axis': 'Winning', 'value': 1.41}]},
                  '2010~2011': {'name': '2010~2011',
                   'axes': [{'axis': 'Point', 'value': 1.06},
                    {'axis': 'Rebound', 'value': 1.22},
                    {'axis': 'Assist', 'value': 0.0},
                    {'axis': 'Steal', 'value': 2.2},
                    {'axis': 'Block', 'value': 0.62},
                    {'axis': 'Winning', 'value': 2.34}]},
                  '2011~2012': {'name': '2011~2012',
                   'axes': [{'axis': 'Point', 'value': 0.92},
                    {'axis': 'Rebound', 'value': 0.76},
                    {'axis': 'Assist', 'value': 0.88},
                    {'axis': 'Steal', 'value': 1.8},
                    {'axis': 'Block', 'value': 0.62},
                    {'axis': 'Winning', 'value': 1.16}]}},
                 'Durant_Westbrook_Harden': {'2009~2010': {'name': '2009~2010',
                   'axes': [{'axis': 'Point', 'value': 1.99},
                    {'axis': 'Rebound', 'value': 0.46},
                    {'axis': 'Assist', 'value': 2.62},
                    {'axis': 'Steal', 'value': 3.2},
                    {'axis': 'Block', 'value': 0.83},
                    {'axis': 'Winning', 'value': 1.41}]},
                  '2010~2011': {'name': '2010~2011',
                   'axes': [{'axis': 'Point', 'value': 2.91},
                    {'axis': 'Rebound', 'value': 0.0},
                    {'axis': 'Assist', 'value': 2.88},
                    {'axis': 'Steal', 'value': 3.8},
                    {'axis': 'Block', 'value': 0.83},
                    {'axis': 'Winning', 'value': 2.19}]},
                  '2011~2012': {'name': '2011~2012',
                   'axes': [{'axis': 'Point', 'value': 3.97},
                    {'axis': 'Rebound', 'value': 0.84},
                    {'axis': 'Assist', 'value': 2.69},
                    {'axis': 'Steal', 'value': 3.6},
                    {'axis': 'Block', 'value': 1.04},
                    {'axis': 'Winning', 'value': 0.94}]}},
                 'LeBron_Irving_Love': {'2014~2015': {'name': '2014~2015',
                   'axes': [{'axis': 'Point', 'value': 3.17},
                    {'axis': 'Rebound', 'value': 1.68},
                    {'axis': 'Assist', 'value': 4.0},
                    {'axis': 'Steal', 'value': 3.2},
                    {'axis': 'Block', 'value': 0.42},
                    {'axis': 'Winning', 'value': 1.87}]},
                  '2015~2016': {'name': '2015~2016',
                   'axes': [{'axis': 'Point', 'value': 2.77},
                    {'axis': 'Rebound', 'value': 2.21},
                    {'axis': 'Assist', 'value': 3.44},
                    {'axis': 'Steal', 'value': 2.2},
                    {'axis': 'Block', 'value': 0.21},
                    {'axis': 'Winning', 'value': 2.5}]},
                  '2016~2017': {'name': '2016~2017',
                   'axes': [{'axis': 'Point', 'value': 4.32},
                    {'axis': 'Rebound', 'value': 3.21},
                    {'axis': 'Assist', 'value': 5.0},
                    {'axis': 'Steal', 'value': 2.2},
                    {'axis': 'Block', 'value': 0.0},
                    {'axis': 'Winning', 'value': 1.56}]}},
                 'Curry_Thompson_Green': {'2014~2015': {'name': '2014~2015',
                   'axes': [{'axis': 'Point', 'value': 2.17},
                    {'axis': 'Rebound', 'value': 0.46},
                    {'axis': 'Assist', 'value': 3.69},
                    {'axis': 'Steal', 'value': 5.0},
                    {'axis': 'Block', 'value': 2.08},
                    {'axis': 'Winning', 'value': 5.0}]},
                  '2015~2016': {'name': '2015~2016',
                   'axes': [{'axis': 'Point', 'value': 3.62},
                    {'axis': 'Rebound', 'value': 1.64},
                    {'axis': 'Assist', 'value': 4.88},
                    {'axis': 'Steal', 'value': 4.4},
                    {'axis': 'Block', 'value': 1.88},
                    {'axis': 'Winning', 'value': 4.06}]}},
                 'Curry_Thompson_Durant': {'2016~2017': {'name': '2016~2017',
                   'axes': [{'axis': 'Point', 'value': 4.66},
                    {'axis': 'Rebound', 'value': 0.76},
                    {'axis': 'Assist', 'value': 3.19},
                    {'axis': 'Steal', 'value': 3.0},
                    {'axis': 'Block', 'value': 2.08},
                    {'axis': 'Winning', 'value': 4.06}]},
                  '2017~2018': {'name': '2017~2018',
                   'axes': [{'axis': 'Point', 'value': 4.68},
                    {'axis': 'Rebound', 'value': 0.46},
                    {'axis': 'Assist', 'value': 3.5},
                    {'axis': 'Steal', 'value': 1.8},
                    {'axis': 'Block', 'value': 2.5},
                    {'axis': 'Winning', 'value': 2.66}]},
                  '2018~2019': {'name': '2018~2019',
                   'axes': [{'axis': 'Point', 'value': 5.0},
                    {'axis': 'Rebound', 'value': 0.38},
                    {'axis': 'Assist', 'value': 3.19},
                    {'axis': 'Steal', 'value': 1.8},
                    {'axis': 'Block', 'value': 1.67},
                    {'axis': 'Winning', 'value': 2.5}]}},
                 'Kobe_Gasol_Bynum': {'2008~2009': {'name': '2008~2009',
                   'axes': [{'axis': 'Point', 'value': 2.62},
                    {'axis': 'Rebound', 'value': 3.17},
                    {'axis': 'Assist', 'value': 0.88},
                    {'axis': 'Steal', 'value': 0.6},
                    {'axis': 'Block', 'value': 4.17},
                    {'axis': 'Winning', 'value': 3.75}]},
                  '2009~2010': {'name': '2009~2010',
                   'axes': [{'axis': 'Point', 'value': 2.67},
                    {'axis': 'Rebound', 'value': 4.01},
                    {'axis': 'Assist', 'value': 0.63},
                    {'axis': 'Steal', 'value': 0.8},
                    {'axis': 'Block', 'value': 4.37},
                    {'axis': 'Winning', 'value': 2.5}]},
                  '2010~2011': {'name': '2010~2011',
                   'axes': [{'axis': 'Point', 'value': 1.88},
                    {'axis': 'Rebound', 'value': 3.89},
                    {'axis': 'Assist', 'value': 0.63},
                    {'axis': 'Steal', 'value': 0.0},
                    {'axis': 'Block', 'value': 5.0},
                    {'axis': 'Winning', 'value': 2.5}]},
                  '2011~2012': {'name': '2011~2012',
                   'axes': [{'axis': 'Point', 'value': 3.26},
                    {'axis': 'Rebound', 'value': 5.0},
                    {'axis': 'Assist', 'value': 0.75},
                    {'axis': 'Steal', 'value': 0.2},
                    {'axis': 'Block', 'value': 4.79},
                    {'axis': 'Winning', 'value': 0.0}]}},
                 'Duncan_Parker_Ginobili': {'2003~2004': {'name': '2003~2004',
                   'axes': [{'axis': 'Point', 'value': 0.98},
                    {'axis': 'Rebound', 'value': 2.14},
                    {'axis': 'Assist', 'value': 2.5},
                    {'axis': 'Steal', 'value': 2.6},
                    {'axis': 'Block', 'value': 3.54},
                    {'axis': 'Winning', 'value': 2.5}]},
                  '2004~2005': {'name': '2004~2005',
                   'axes': [{'axis': 'Point', 'value': 1.48},
                    {'axis': 'Rebound', 'value': 1.79},
                    {'axis': 'Assist', 'value': 2.69},
                    {'axis': 'Steal', 'value': 2.6},
                    {'axis': 'Block', 'value': 3.75},
                    {'axis': 'Winning', 'value': 2.81}]},
                  '2005~2006': {'name': '2005~2006',
                   'axes': [{'axis': 'Point', 'value': 1.43},
                    {'axis': 'Rebound', 'value': 1.26},
                    {'axis': 'Assist', 'value': 2.62},
                    {'axis': 'Steal', 'value': 2.6},
                    {'axis': 'Block', 'value': 2.5},
                    {'axis': 'Winning', 'value': 3.44}]},
                  '2006~2007': {'name': '2006~2007',
                   'axes': [{'axis': 'Point', 'value': 1.83},
                    {'axis': 'Rebound', 'value': 1.41},
                    {'axis': 'Assist', 'value': 2.5},
                    {'axis': 'Steal', 'value': 2.4},
                    {'axis': 'Block', 'value': 3.33},
                    {'axis': 'Winning', 'value': 2.66}]},
                  '2007~2008': {'name': '2007~2008',
                   'axes': [{'axis': 'Point', 'value': 2.23},
                    {'axis': 'Rebound', 'value': 1.83},
                    {'axis': 'Assist', 'value': 3.06},
                    {'axis': 'Steal', 'value': 1.6},
                    {'axis': 'Block', 'value': 2.29},
                    {'axis': 'Winning', 'value': 2.34}]},
                  '2008~2009': {'name': '2008~2009',
                   'axes': [{'axis': 'Point', 'value': 2.11},
                    {'axis': 'Rebound', 'value': 1.45},
                    {'axis': 'Assist', 'value': 3.5},
                    {'axis': 'Steal', 'value': 1.4},
                    {'axis': 'Block', 'value': 1.88},
                    {'axis': 'Winning', 'value': 2.03}]},
                  '2009~2010': {'name': '2009~2010',
                   'axes': [{'axis': 'Point', 'value': 1.08},
                    {'axis': 'Rebound', 'value': 0.69},
                    {'axis': 'Assist', 'value': 3.38},
                    {'axis': 'Steal', 'value': 0.6},
                    {'axis': 'Block', 'value': 1.46},
                    {'axis': 'Winning', 'value': 1.41}]},
                  '2010~2011': {'name': '2010~2011',
                   'axes': [{'axis': 'Point', 'value': 0.74},
                    {'axis': 'Rebound', 'value': 0.46},
                    {'axis': 'Assist', 'value': 3.62},
                    {'axis': 'Steal', 'value': 2.4},
                    {'axis': 'Block', 'value': 2.08},
                    {'axis': 'Winning', 'value': 3.13}]}},
                 'Duncan_Parker_Kawhi': {'2012~2013': {'name': '2012~2013',
                   'axes': [{'axis': 'Point', 'value': 1.01},
                    {'axis': 'Rebound', 'value': 1.68},
                    {'axis': 'Assist', 'value': 2.19},
                    {'axis': 'Steal', 'value': 2.0},
                    {'axis': 'Block', 'value': 4.37},
                    {'axis': 'Winning', 'value': 2.66}]},
                  '2013~2014': {'name': '2013~2014',
                   'axes': [{'axis': 'Point', 'value': 0.14},
                    {'axis': 'Rebound', 'value': 1.41},
                    {'axis': 'Assist', 'value': 1.44},
                    {'axis': 'Steal', 'value': 1.2},
                    {'axis': 'Block', 'value': 3.12},
                    {'axis': 'Winning', 'value': 3.28}]},
                  '2014~2015': {'name': '2014~2015',
                   'axes': [{'axis': 'Point', 'value': 0.18},
                    {'axis': 'Rebound', 'value': 1.41},
                    {'axis': 'Assist', 'value': 1.25},
                    {'axis': 'Steal', 'value': 3.0},
                    {'axis': 'Block', 'value': 3.33},
                    {'axis': 'Winning', 'value': 2.19}]}},
                 'Paul_Griffin_Jordan': {'2012~2013': {'name': '2012~2013',
                   'axes': [{'axis': 'Point', 'value': 0.0},
                    {'axis': 'Rebound', 'value': 1.79},
                    {'axis': 'Assist', 'value': 3.31},
                    {'axis': 'Steal', 'value': 4.0},
                    {'axis': 'Block', 'value': 1.67},
                    {'axis': 'Winning', 'value': 2.34}]},
                  '2013~2014': {'name': '2013~2014',
                   'axes': [{'axis': 'Point', 'value': 1.59},
                    {'axis': 'Rebound', 'value': 4.92},
                    {'axis': 'Assist', 'value': 4.44},
                    {'axis': 'Steal', 'value': 5.0},
                    {'axis': 'Block', 'value': 3.96},
                    {'axis': 'Winning', 'value': 2.5}]},
                  '2014~2015': {'name': '2014~2015',
                   'axes': [{'axis': 'Point', 'value': 1.41},
                    {'axis': 'Rebound', 'value': 4.85},
                    {'axis': 'Assist', 'value': 4.5},
                    {'axis': 'Steal', 'value': 3.2},
                    {'axis': 'Block', 'value': 3.33},
                    {'axis': 'Winning', 'value': 2.34}]},
                  '2016~2017': {'name': '2016~2017',
                   'axes': [{'axis': 'Point', 'value': 1.37},
                    {'axis': 'Rebound', 'value': 4.73},
                    {'axis': 'Assist', 'value': 4.31},
                    {'axis': 'Steal', 'value': 2.6},
                    {'axis': 'Block', 'value': 3.12},
                    {'axis': 'Winning', 'value': 1.56}]}}}
            }
        },

        mounted(){
            var margin = {top: 100, right: 100, bottom: 100, left: 100},
                width = Math.min(500, window.innerWidth - 10) - margin.left - margin.right,
                height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

            var radarChartOptions = {
              w: 600,
              h: 400,
              margin: margin,
              levels: 5,
              maxValue: 5,
              roundStrokes: false,
              // color: d3.scaleOrdinal().range(["#26AF32", "#762712"]),
              format: '.2f',
              legend: { title: 'Season', translateX: 100, translateY: 40 },
            };
            var rlist1 = [this.trio["LeBron_Wade_Bosh"]["2010~2011"], this.trio["LeBron_Wade_Bosh"]["2011~2012"]];
            this.radarChart("#rc1", rlist1, radarChartOptions);
            var rlist2 = [this.trio["Pierce_Garnett_Allen"]["2007~2008"], this.trio["Pierce_Garnett_Allen"]["2008~2009"]]
            this.radarChart("#rc2", rlist2, radarChartOptions);
        },
        methods: {
            handleChange1(){
              this.seasons1 = this.t2s[this.selected1];
              this.value1 = [this.seasons1[0].value, this.seasons1[1].value];
              d3.select('#rc1').select('svg').remove();
              var margin = {top: 100, right: 100, bottom: 100, left: 100},
                width = Math.min(500, window.innerWidth - 10) - margin.left - margin.right,
                height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

              var radarChartOptions = {
                w: 600,
                h: 400,
                margin: margin,
                levels: 5,
                maxValue: 5,
                roundStrokes: false,
                // color: d3.scaleOrdinal().range(["#26AF32", "#762712"]),
                format: '.2f',
                legend: { title: 'Organization XYZ', translateX: 100, translateY: 40 },
              };
              var showlist = []
              for(let i in this.value1){
                showlist.push(this.trio[this.selected1][this.value1[i]])
              }
              this.radarChart("#rc1", showlist, radarChartOptions);
            },
            handleChange2(){
              d3.select('#rc1').select('svg').remove();
              var margin = {top: 100, right: 100, bottom: 100, left: 100},
                width = Math.min(500, window.innerWidth - 10) - margin.left - margin.right,
                height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

              var radarChartOptions = {
                w: 600,
                h: 400,
                margin: margin,
                levels: 5,
                maxValue: 5,
                roundStrokes: false,
                format: '.2f',
                legend: { title: 'Season', translateX: 100, translateY: 40 },
              };
              var showlist = []
              for(let i in this.value1){
                showlist.push(this.trio[this.selected1][this.value1[i]])
              }
              this.radarChart("#rc1", showlist, radarChartOptions);
            },
            handleChange3(){
              this.seasons2 = this.t2s[this.selected2];
              this.value2 = [this.seasons2[0].value, this.seasons2[1].value];
              d3.select('#rc2').select('svg').remove();
              var margin = {top: 100, right: 100, bottom: 100, left: 100},
                width = Math.min(500, window.innerWidth - 10) - margin.left - margin.right,
                height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

              var radarChartOptions = {
                w: 600,
                h: 400,
                margin: margin,
                levels: 5,
                maxValue: 5,
                roundStrokes: false,
                format: '.2f',
                legend: { title: 'Season', translateX: 100, translateY: 40 },
              };
              var showlist = []
              for(let i in this.value2){
                showlist.push(this.trio[this.selected2][this.value2[i]])
              }
              this.radarChart("#rc2", showlist, radarChartOptions);
            },
            handleChange4(){
              d3.select('#rc2').select('svg').remove();
              var margin = {top: 100, right: 100, bottom: 100, left: 100},
                width = Math.min(500, window.innerWidth - 10) - margin.left - margin.right,
                height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

              var radarChartOptions = {
                w: 600,
                h: 400,
                margin: margin,
                levels: 5,
                maxValue: 5,
                roundStrokes: false,
                format: '.2f',
                legend: { title: 'Season', translateX: 100, translateY: 40 },
              };
              var showlist = []
              for(let i in this.value2){
                showlist.push(this.trio[this.selected2][this.value2[i]])
              }
              this.radarChart("#rc2", showlist, radarChartOptions);
            },
            radarChart(parent_selector, data, options) {
              const max = Math.max;
              const sin = Math.sin;
              const cos = Math.cos;
              const HALF_PI = Math.PI / 2;  
              //Wraps SVG text - Taken from http://bl.ocks.org/mbostock/7555321
              const wrap = (text, width) => {
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

              const cfg = {
               w: 600,        //Width of the circle
               h: 600,        //Height of the circle
               margin: {top: 20, right: 20, bottom: 20, left: 20}, //The margins of the SVG
               levels: 3,       //How many levels or inner circles should there be drawn
               maxValue: 0,       //What is the value that the biggest circle will represent
               labelFactor: 1.25,   //How much farther than the radius of the outer circle should the labels be placed
               wrapWidth: 60,     //The number of pixels after which a label needs to be given a new line
               opacityArea: 0.35,   //The opacity of the area of the blob
               dotRadius: 4,      //The size of the colored circles of each blog
               opacityCircles: 0.1,   //The opacity of the circles of each blob
               strokeWidth: 2,    //The width of the stroke around each blob
               roundStrokes: false, //If true the area and stroke will follow a round path (cardinal-closed)
               color: d3.scaleOrdinal(d3.schemeCategory10), //Color function,
               format: '.2%',
               unit: '',
               legend: false
              };

              //Put all of the options into a variable called cfg
              if('undefined' !== typeof options){
                for(var i in options){
                if('undefined' !== typeof options[i]){ cfg[i] = options[i]; }
                }//for i
              }//if

              //If the supplied maxValue is smaller than the actual one, replace by the max in the data
              // var maxValue = max(cfg.maxValue, d3.max(data, function(i){return d3.max(i.map(function(o){return o.value;}))}));
              let maxValue = 0;
              for (let j=0; j < data.length; j++) {
                for (let i = 0; i < data[j].axes.length; i++) {
                  data[j].axes[i]['id'] = data[j].name;
                  if (data[j].axes[i]['value'] > maxValue) {
                    maxValue = data[j].axes[i]['value'];
                  }
                }
              }
              maxValue = max(cfg.maxValue, maxValue);

              const allAxis = data[0].axes.map((i, j) => i.axis), //Names of each axis
                total = allAxis.length,         //The number of different axes
                radius = Math.min(cfg.w/2, cfg.h/2),  //Radius of the outermost circle
                Format = d3.format(cfg.format),       //Formatting
                angleSlice = Math.PI * 2 / total;   //The width in radians of each "slice"

              //Scale for the radius
              const rScale = d3.scaleLinear()
                .range([0, radius])
                .domain([0, maxValue]);

              /////////////////////////////////////////////////////////
              //////////// Create the container SVG and g /////////////
              /////////////////////////////////////////////////////////
              const parent = d3.select(parent_selector);

              //Remove whatever chart with the same id/class was present before
              parent.select("svg").remove();

              //Initiate the radar chart SVG
              let svg = parent.append("svg")
                  .attr("width",  cfg.w + cfg.margin.left + cfg.margin.right)
                  .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
                  .attr("class", "radar");

              //Append a g element
              let g = svg.append("g")
                  .attr("transform", "translate(" + (cfg.w/2 + cfg.margin.left) + "," + (cfg.h/2 + cfg.margin.top) + ")");

              /////////////////////////////////////////////////////////
              ////////// Glow filter for some extra pizzazz ///////////
              /////////////////////////////////////////////////////////

              //Filter for the outside glow
              let filter = g.append('defs').append('filter').attr('id','glow'),
                feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation','2.5').attr('result','coloredBlur'),
                feMerge = filter.append('feMerge'),
                feMergeNode_1 = feMerge.append('feMergeNode').attr('in','coloredBlur'),
                feMergeNode_2 = feMerge.append('feMergeNode').attr('in','SourceGraphic');

              /////////////////////////////////////////////////////////
              /////////////// Draw the Circular grid //////////////////
              /////////////////////////////////////////////////////////

              //Wrapper for the grid & axes
              let axisGrid = g.append("g").attr("class", "axisWrapper");

              //Draw the background circles
              axisGrid.selectAll(".levels")
                 .data(d3.range(1,(cfg.levels+1)).reverse())
                 .enter()
                .append("circle")
                .attr("class", "gridCircle")
                .attr("r", d => radius / cfg.levels * d)
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
                 .attr("y", d => -d * radius / cfg.levels)
                 .attr("dy", "0.4em")
                 .style("font-size", "10px")
                 .attr("fill", "#737373")
                 .text(d => Format(maxValue * d / cfg.levels) + cfg.unit);

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
                .attr("x2", (d, i) => rScale(maxValue *1.1) * cos(angleSlice * i - HALF_PI))
                .attr("y2", (d, i) => rScale(maxValue* 1.1) * sin(angleSlice * i - HALF_PI))
                .attr("class", "line")
                .style("stroke", "white")
                .style("stroke-width", "2px");

              //Append the labels at each axis
              axis.append("text")
                .attr("class", "legend")
                .style("font-size", "11px")
                .attr("text-anchor", "middle")
                .attr("dy", "0.35em")
                .attr("x", (d,i) => rScale(maxValue * cfg.labelFactor) * cos(angleSlice * i - HALF_PI))
                .attr("y", (d,i) => rScale(maxValue * cfg.labelFactor) * sin(angleSlice * i - HALF_PI))
                .text(d => d)
                .call(wrap, cfg.wrapWidth);

              /////////////////////////////////////////////////////////
              ///////////// Draw the radar chart blobs ////////////////
              /////////////////////////////////////////////////////////

              //The radial line function
              const radarLine = d3.radialLine()
                .curve(d3.curveLinearClosed)
                .radius(d => rScale(d.value))
                .angle((d,i) => i * angleSlice);

              if(cfg.roundStrokes) {
                radarLine.curve(d3.curveCardinalClosed)
              }

              //Create a wrapper for the blobs
              const blobWrapper = g.selectAll(".radarWrapper")
                .data(data)
                .enter().append("g")
                .attr("class", "radarWrapper");

              //Append the backgrounds
              blobWrapper
                .append("path")
                .attr("class", "radarArea")
                .attr("d", d => radarLine(d.axes))
                .style("fill", (d,i) => cfg.color(i))
                .style("fill-opacity", cfg.opacityArea)
                .on('mouseover', function(d, i) {
                  //Dim all blobs
                  parent.selectAll(".radarArea")
                    .transition().duration(200)
                    .style("fill-opacity", 0.1);
                  //Bring back the hovered over blob
                  d3.select(this)
                    .transition().duration(200)
                    .style("fill-opacity", 0.7);
                })
                .on('mouseout', () => {
                  //Bring back all blobs
                  parent.selectAll(".radarArea")
                    .transition().duration(200)
                    .style("fill-opacity", cfg.opacityArea);
                });

              //Create the outlines
              blobWrapper.append("path")
                .attr("class", "radarStroke")
                .attr("d", function(d,i) { return radarLine(d.axes); })
                .style("stroke-width", cfg.strokeWidth + "px")
                .style("stroke", (d,i) => cfg.color(i))
                .style("fill", "none")
                .style("filter" , "url(#glow)");

              //Append the circles
              blobWrapper.selectAll(".radarCircle")
                .data(d => d.axes)
                .enter()
                .append("circle")
                .attr("class", "radarCircle")
                .attr("r", cfg.dotRadius)
                .attr("cx", (d,i) => rScale(d.value) * cos(angleSlice * i - HALF_PI))
                .attr("cy", (d,i) => rScale(d.value) * sin(angleSlice * i - HALF_PI))
                .style("fill", (d) => cfg.color(d.id))
                .style("fill-opacity", 0.8);

              /////////////////////////////////////////////////////////
              //////// Append invisible circles for tooltip ///////////
              /////////////////////////////////////////////////////////

              //Wrapper for the invisible circles on top
              const blobCircleWrapper = g.selectAll(".radarCircleWrapper")
                .data(data)
                .enter().append("g")
                .attr("class", "radarCircleWrapper");

              //Append a set of invisible circles on top for the mouseover pop-up
              blobCircleWrapper.selectAll(".radarInvisibleCircle")
                .data(d => d.axes)
                .enter().append("circle")
                .attr("class", "radarInvisibleCircle")
                .attr("r", cfg.dotRadius * 1.5)
                .attr("cx", (d,i) => rScale(d.value) * cos(angleSlice*i - HALF_PI))
                .attr("cy", (d,i) => rScale(d.value) * sin(angleSlice*i - HALF_PI))
                .style("fill", "none")
                .style("pointer-events", "all")
                .on("mouseover", function(d, i) {
                  tooltip
                    .attr('x', this.cx.baseVal.value - 10)
                    .attr('y', this.cy.baseVal.value - 10)
                    .transition()
                    .style('display', 'block')
                    .text(Format(i["value"]) + cfg.unit);
                })
                .on("mouseout", function(){
                  tooltip.transition()
                    .style('display', 'none').text('');
                });

              const tooltip = g.append("text")
                .attr("class", "tooltip")
                .attr('x', 0)
                .attr('y', 0)
                .style("font-size", "12px")
                .style('display', 'none')
                .attr("text-anchor", "middle")
                .attr("dy", "0.35em");

              if (cfg.legend !== false && typeof cfg.legend === "object") {
                let legendZone = svg.append('g');
                let names = data.map(el => el.name);
                if (cfg.legend.title) {
                  let title = legendZone.append("text")
                    .attr("class", "title")
                    .attr('transform', `translate(${cfg.legend.translateX},${cfg.legend.translateY})`)
                    .attr("x", cfg.w - 70)
                    .attr("y", 10)
                    .attr("font-size", "12px")
                    .attr("fill", "#404040")
                    .text(cfg.legend.title);
                }
                let legend = legendZone.append("g")
                  .attr("class", "legend")
                  .attr("height", 100)
                  .attr("width", 200)
                  .attr('transform', `translate(${cfg.legend.translateX},${cfg.legend.translateY + 20})`);
                // Create rectangles markers
                legend.selectAll('rect')
                  .data(names)
                  .enter()
                  .append("rect")
                  .attr("x", cfg.w - 65)
                  .attr("y", (d,i) => i * 20)
                  .attr("width", 10)
                  .attr("height", 10)
                  .style("fill", (d,i) => cfg.color(i));
                // Create labels
                legend.selectAll('text')
                  .data(names)
                  .enter()
                  .append("text")
                  .attr("x", cfg.w - 52)
                  .attr("y", (d,i) => i * 20 + 9)
                  .attr("font-size", "11px")
                  .attr("fill", "#737373")
                  .text(d => d);
              }
              // return svg;
            }
        }
    }

</script>