<template>
    <a-row type="flex">
        <a-col :flex="4">
            <div style="margin-left: 0px">
                <label>Data Dimension </label>
                <a-select v-model:value="selected1" style="width: 170px" @change="handleChange">
                    <a-select-option value="MIA1011">MIA</a-select-option>
                    <a-select-option value="MIA1112">Movie Rating</a-select-option>
                    <a-select-option value="MIA1213">Movie Runtime</a-select-option>
                    <a-select-option value="MIA1314">Movie Release Time</a-select-option>
                    <a-select-option value="BOS0708">Movie Keyword</a-select-option>
                    <a-select-option value="BOS0809">Movie Keyword</a-select-option>
                    <a-select-option value="BOS0910">Movie Keyword</a-select-option>
                    <a-select-option value="BOS1011">BOS</a-select-option>
                    <a-select-option value="BOS1112">Movie Keyword</a-select-option>
                    <a-select-option value="OKC0910">Movie Keyword</a-select-option>
                    <a-select-option value="OKC1011">Movie Keyword</a-select-option>
                    <a-select-option value="OKC1112">Movie Keyword</a-select-option>
                    <a-select-option value="CLE1415">Movie Keyword</a-select-option>
                    <a-select-option value="CLE1516">Movie Keyword</a-select-option>
                    <a-select-option value="CLE1617">Movie Keyword</a-select-option>
                    <a-select-option value="GSW1415">Movie Keyword</a-select-option>
                    <a-select-option value="GSW1516">Movie Keyword</a-select-option>
                    <a-select-option value="GSW1617">Movie Keyword</a-select-option>
                    <a-select-option value="GSW1718">Movie Keyword</a-select-option>
                    <a-select-option value="GSW1819">Movie Keyword</a-select-option>
                    <a-select-option value="LAL0809">Movie Keyword</a-select-option>
                    <a-select-option value="LAL0910">Movie Keyword</a-select-option>
                    <a-select-option value="LAL1011">Movie Keyword</a-select-option>
                    <a-select-option value="LAL1112">Movie Keyword</a-select-option>
                    <a-select-option value="SAS0304">Movie Keyword</a-select-option>
                    <a-select-option value="SAS0405">Movie Keyword</a-select-option>
                    <a-select-option value="SAS0506">Movie Keyword</a-select-option>
                    <a-select-option value="SAS0607">Movie Keyword</a-select-option>
                    <a-select-option value="SAS0708">Movie Keyword</a-select-option>
                    <a-select-option value="SAS0809">Movie Keyword</a-select-option>
                    <a-select-option value="SAS0910">Movie Keyword</a-select-option>
                    <a-select-option value="SAS1011">Movie Keyword</a-select-option>
                    <a-select-option value="SAS1213">Movie Keyword</a-select-option>
                    <a-select-option value="SAS1314">Movie Keyword</a-select-option>
                    <a-select-option value="SAS1415">Movie Keyword</a-select-option>
                    <a-select-option value="LAC1213">Movie Keyword</a-select-option>
                    <a-select-option value="LAC1314">Movie Keyword</a-select-option>
                    <a-select-option value="LAC1415">Movie Keyword</a-select-option>
                    <a-select-option value="LAC1617">Movie Keyword</a-select-option>
                </a-select>
            </div>
            <div id="rc1"></div>
        </a-col>
        <a-col :flex="4">
              <div style="margin-left: 0px">
                <label>Data Dimension </label>
                <a-select v-model:value="selected2" style="width: 170px" @change="handleChange">
                    <a-select-option value="MIA1011">MIA</a-select-option>
                    <a-select-option value="MIA1112">Movie Rating</a-select-option>
                    <a-select-option value="MIA1213">Movie Runtime</a-select-option>
                    <a-select-option value="MIA1314">Movie Release Time</a-select-option>
                    <a-select-option value="BOS0708">Movie Keyword</a-select-option>
                    <a-select-option value="BOS0809">Movie Keyword</a-select-option>
                    <a-select-option value="BOS0910">Movie Keyword</a-select-option>
                    <a-select-option value="BOS1011">BOS</a-select-option>
                    <a-select-option value="BOS1112">Movie Keyword</a-select-option>
                    <a-select-option value="OKC0910">Movie Keyword</a-select-option>
                    <a-select-option value="OKC1011">Movie Keyword</a-select-option>
                    <a-select-option value="OKC1112">Movie Keyword</a-select-option>
                    <a-select-option value="CLE1415">Movie Keyword</a-select-option>
                    <a-select-option value="CLE1516">Movie Keyword</a-select-option>
                    <a-select-option value="CLE1617">Movie Keyword</a-select-option>
                    <a-select-option value="GSW1415">Movie Keyword</a-select-option>
                    <a-select-option value="GSW1516">Movie Keyword</a-select-option>
                    <a-select-option value="GSW1617">Movie Keyword</a-select-option>
                    <a-select-option value="GSW1718">Movie Keyword</a-select-option>
                    <a-select-option value="GSW1819">Movie Keyword</a-select-option>
                    <a-select-option value="LAL0809">Movie Keyword</a-select-option>
                    <a-select-option value="LAL0910">Movie Keyword</a-select-option>
                    <a-select-option value="LAL1011">Movie Keyword</a-select-option>
                    <a-select-option value="LAL1112">Movie Keyword</a-select-option>
                    <a-select-option value="SAS0304">Movie Keyword</a-select-option>
                    <a-select-option value="SAS0405">Movie Keyword</a-select-option>
                    <a-select-option value="SAS0506">Movie Keyword</a-select-option>
                    <a-select-option value="SAS0607">Movie Keyword</a-select-option>
                    <a-select-option value="SAS0708">Movie Keyword</a-select-option>
                    <a-select-option value="SAS0809">Movie Keyword</a-select-option>
                    <a-select-option value="SAS0910">Movie Keyword</a-select-option>
                    <a-select-option value="SAS1011">Movie Keyword</a-select-option>
                    <a-select-option value="SAS1213">Movie Keyword</a-select-option>
                    <a-select-option value="SAS1314">Movie Keyword</a-select-option>
                    <a-select-option value="SAS1415">Movie Keyword</a-select-option>
                    <a-select-option value="LAC1213">Movie Keyword</a-select-option>
                    <a-select-option value="LAC1314">Movie Keyword</a-select-option>
                    <a-select-option value="LAC1415">Movie Keyword</a-select-option>
                    <a-select-option value="LAC1617">Movie Keyword</a-select-option>
                </a-select>
            </div>
            <div id="rc2"></div>
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
                selected1: "MIA1011",
                selected2: "BOS1011",
                trio : 
                {'MIA1011': [{'name': 'MIA1011',
                   'axes': [{'axis': 'Point', 'value': 4.37},
                    {'axis': 'Rebound', 'value': 2.94},
                    {'axis': 'Assist', 'value': 3.19},
                    {'axis': 'Steal', 'value': 3.4},
                    {'axis': 'Block', 'value': 2.08},
                    {'axis': 'Winning', 'value': 2.66}]}],
                 'MIA1112': [{'name': 'MIA1112',
                   'axes': [{'axis': 'Point', 'value': 3.78},
                    {'axis': 'Rebound', 'value': 2.33},
                    {'axis': 'Assist', 'value': 2.62},
                    {'axis': 'Steal', 'value': 4.6},
                    {'axis': 'Block', 'value': 3.33},
                    {'axis': 'Winning', 'value': 2.52}]}],
                 'MIA1213': [{'name': 'MIA1213',
                   'axes': [{'axis': 'Point', 'value': 3.36},
                    {'axis': 'Rebound', 'value': 2.02},
                    {'axis': 'Assist', 'value': 3.56},
                    {'axis': 'Steal', 'value': 4.6},
                    {'axis': 'Block', 'value': 3.75},
                    {'axis': 'Winning', 'value': 3.91}]}],
                 'MIA1314': [{'name': 'MIA1314',
                   'axes': [{'axis': 'Point', 'value': 2.99},
                    {'axis': 'Rebound', 'value': 1.34},
                    {'axis': 'Assist', 'value': 2.31},
                    {'axis': 'Steal', 'value': 3.8},
                    {'axis': 'Block', 'value': 1.88},
                    {'axis': 'Winning', 'value': 2.03}]}],
                 'BOS0708': [{'name': 'BOS0708',
                   'axes': [{'axis': 'Point', 'value': 1.95},
                    {'axis': 'Rebound', 'value': 1.34},
                    {'axis': 'Assist', 'value': 1.62},
                    {'axis': 'Steal', 'value': 2.8},
                    {'axis': 'Block', 'value': 1.46},
                    {'axis': 'Winning', 'value': 3.91}]}],
                 'BOS0809': [{'name': 'BOS0809',
                   'axes': [{'axis': 'Point', 'value': 1.74},
                    {'axis': 'Rebound', 'value': 1.18},
                    {'axis': 'Assist', 'value': 0.31},
                    {'axis': 'Steal', 'value': 1.6},
                    {'axis': 'Block', 'value': 0.83},
                    {'axis': 'Winning', 'value': 3.28}]}],
                 'BOS0910': [{'name': 'BOS0910',
                   'axes': [{'axis': 'Point', 'value': 0.84},
                    {'axis': 'Rebound', 'value': 0.15},
                    {'axis': 'Assist', 'value': 0.0},
                    {'axis': 'Steal', 'value': 1.6},
                    {'axis': 'Block', 'value': 0.42},
                    {'axis': 'Winning', 'value': 1.41}]}],
                 'BOS1011': [{'name': 'BOS1011',
                   'axes': [{'axis': 'Point', 'value': 1.06},
                    {'axis': 'Rebound', 'value': 1.22},
                    {'axis': 'Assist', 'value': 0.0},
                    {'axis': 'Steal', 'value': 2.2},
                    {'axis': 'Block', 'value': 0.62},
                    {'axis': 'Winning', 'value': 2.34}]}],
                 'BOS1112': [{'name': 'BOS1112',
                   'axes': [{'axis': 'Point', 'value': 0.92},
                    {'axis': 'Rebound', 'value': 0.76},
                    {'axis': 'Assist', 'value': 0.88},
                    {'axis': 'Steal', 'value': 1.8},
                    {'axis': 'Block', 'value': 0.62},
                    {'axis': 'Winning', 'value': 1.16}]}],
                 'OKC0910': [{'name': 'OKC0910',
                   'axes': [{'axis': 'Point', 'value': 1.99},
                    {'axis': 'Rebound', 'value': 0.46},
                    {'axis': 'Assist', 'value': 2.62},
                    {'axis': 'Steal', 'value': 3.2},
                    {'axis': 'Block', 'value': 0.83},
                    {'axis': 'Winning', 'value': 1.41}]}],
                 'OKC1011': [{'name': 'OKC1011',
                   'axes': [{'axis': 'Point', 'value': 2.91},
                    {'axis': 'Rebound', 'value': 0.0},
                    {'axis': 'Assist', 'value': 2.88},
                    {'axis': 'Steal', 'value': 3.8},
                    {'axis': 'Block', 'value': 0.83},
                    {'axis': 'Winning', 'value': 2.19}]}],
                 'OKC1112': [{'name': 'OKC1112',
                   'axes': [{'axis': 'Point', 'value': 3.97},
                    {'axis': 'Rebound', 'value': 0.84},
                    {'axis': 'Assist', 'value': 2.69},
                    {'axis': 'Steal', 'value': 3.6},
                    {'axis': 'Block', 'value': 1.04},
                    {'axis': 'Winning', 'value': 0.94}]}],
                 'CLE1415': [{'name': 'CLE1415',
                   'axes': [{'axis': 'Point', 'value': 3.17},
                    {'axis': 'Rebound', 'value': 1.68},
                    {'axis': 'Assist', 'value': 4.0},
                    {'axis': 'Steal', 'value': 3.2},
                    {'axis': 'Block', 'value': 0.42},
                    {'axis': 'Winning', 'value': 1.87}]}],
                 'CLE1516': [{'name': 'CLE1516',
                   'axes': [{'axis': 'Point', 'value': 2.77},
                    {'axis': 'Rebound', 'value': 2.21},
                    {'axis': 'Assist', 'value': 3.44},
                    {'axis': 'Steal', 'value': 2.2},
                    {'axis': 'Block', 'value': 0.21},
                    {'axis': 'Winning', 'value': 2.5}]}],
                 'CLE1617': [{'name': 'CLE1617',
                   'axes': [{'axis': 'Point', 'value': 4.32},
                    {'axis': 'Rebound', 'value': 3.21},
                    {'axis': 'Assist', 'value': 5.0},
                    {'axis': 'Steal', 'value': 2.2},
                    {'axis': 'Block', 'value': 0.0},
                    {'axis': 'Winning', 'value': 1.56}]}],
                 'GSW1415': [{'name': 'GSW1415',
                   'axes': [{'axis': 'Point', 'value': 2.17},
                    {'axis': 'Rebound', 'value': 0.46},
                    {'axis': 'Assist', 'value': 3.69},
                    {'axis': 'Steal', 'value': 5.0},
                    {'axis': 'Block', 'value': 2.08},
                    {'axis': 'Winning', 'value': 5.0}]}],
                 'GSW1516': [{'name': 'GSW1516',
                   'axes': [{'axis': 'Point', 'value': 3.62},
                    {'axis': 'Rebound', 'value': 1.64},
                    {'axis': 'Assist', 'value': 4.88},
                    {'axis': 'Steal', 'value': 4.4},
                    {'axis': 'Block', 'value': 1.88},
                    {'axis': 'Winning', 'value': 4.06}]}],
                 'GSW1617': [{'name': 'GSW1617',
                   'axes': [{'axis': 'Point', 'value': 4.66},
                    {'axis': 'Rebound', 'value': 0.76},
                    {'axis': 'Assist', 'value': 3.19},
                    {'axis': 'Steal', 'value': 3.0},
                    {'axis': 'Block', 'value': 2.08},
                    {'axis': 'Winning', 'value': 4.06}]}],
                 'GSW1718': [{'name': 'GSW1718',
                   'axes': [{'axis': 'Point', 'value': 4.68},
                    {'axis': 'Rebound', 'value': 0.46},
                    {'axis': 'Assist', 'value': 3.5},
                    {'axis': 'Steal', 'value': 1.8},
                    {'axis': 'Block', 'value': 2.5},
                    {'axis': 'Winning', 'value': 2.66}]}],
                 'GSW1819': [{'name': 'GSW1819',
                   'axes': [{'axis': 'Point', 'value': 5.0},
                    {'axis': 'Rebound', 'value': 0.38},
                    {'axis': 'Assist', 'value': 3.19},
                    {'axis': 'Steal', 'value': 1.8},
                    {'axis': 'Block', 'value': 1.67},
                    {'axis': 'Winning', 'value': 2.5}]}],
                 'LAL0809': [{'name': 'LAL0809',
                   'axes': [{'axis': 'Point', 'value': 2.62},
                    {'axis': 'Rebound', 'value': 3.17},
                    {'axis': 'Assist', 'value': 0.88},
                    {'axis': 'Steal', 'value': 0.6},
                    {'axis': 'Block', 'value': 4.17},
                    {'axis': 'Winning', 'value': 3.75}]}],
                 'LAL0910': [{'name': 'LAL0910',
                   'axes': [{'axis': 'Point', 'value': 2.67},
                    {'axis': 'Rebound', 'value': 4.01},
                    {'axis': 'Assist', 'value': 0.63},
                    {'axis': 'Steal', 'value': 0.8},
                    {'axis': 'Block', 'value': 4.37},
                    {'axis': 'Winning', 'value': 2.5}]}],
                 'LAL1011': [{'name': 'LAL1011',
                   'axes': [{'axis': 'Point', 'value': 1.88},
                    {'axis': 'Rebound', 'value': 3.89},
                    {'axis': 'Assist', 'value': 0.63},
                    {'axis': 'Steal', 'value': 0.0},
                    {'axis': 'Block', 'value': 5.0},
                    {'axis': 'Winning', 'value': 2.5}]}],
                 'LAL1112': [{'name': 'LAL1112',
                   'axes': [{'axis': 'Point', 'value': 3.26},
                    {'axis': 'Rebound', 'value': 5.0},
                    {'axis': 'Assist', 'value': 0.75},
                    {'axis': 'Steal', 'value': 0.2},
                    {'axis': 'Block', 'value': 4.79},
                    {'axis': 'Winning', 'value': 0.0}]}],
                 'SAS0304': [{'name': 'SAS0304',
                   'axes': [{'axis': 'Point', 'value': 0.98},
                    {'axis': 'Rebound', 'value': 2.14},
                    {'axis': 'Assist', 'value': 2.5},
                    {'axis': 'Steal', 'value': 2.6},
                    {'axis': 'Block', 'value': 3.54},
                    {'axis': 'Winning', 'value': 2.5}]}],
                 'SAS0405': [{'name': 'SAS0405',
                   'axes': [{'axis': 'Point', 'value': 1.48},
                    {'axis': 'Rebound', 'value': 1.79},
                    {'axis': 'Assist', 'value': 2.69},
                    {'axis': 'Steal', 'value': 2.6},
                    {'axis': 'Block', 'value': 3.75},
                    {'axis': 'Winning', 'value': 2.81}]}],
                 'SAS0506': [{'name': 'SAS0506',
                   'axes': [{'axis': 'Point', 'value': 1.43},
                    {'axis': 'Rebound', 'value': 1.26},
                    {'axis': 'Assist', 'value': 2.62},
                    {'axis': 'Steal', 'value': 2.6},
                    {'axis': 'Block', 'value': 2.5},
                    {'axis': 'Winning', 'value': 3.44}]}],
                 'SAS0607': [{'name': 'SAS0607',
                   'axes': [{'axis': 'Point', 'value': 1.83},
                    {'axis': 'Rebound', 'value': 1.41},
                    {'axis': 'Assist', 'value': 2.5},
                    {'axis': 'Steal', 'value': 2.4},
                    {'axis': 'Block', 'value': 3.33},
                    {'axis': 'Winning', 'value': 2.66}]}],
                 'SAS0708': [{'name': 'SAS0708',
                   'axes': [{'axis': 'Point', 'value': 2.23},
                    {'axis': 'Rebound', 'value': 1.83},
                    {'axis': 'Assist', 'value': 3.06},
                    {'axis': 'Steal', 'value': 1.6},
                    {'axis': 'Block', 'value': 2.29},
                    {'axis': 'Winning', 'value': 2.34}]}],
                 'SAS0809': [{'name': 'SAS0809',
                   'axes': [{'axis': 'Point', 'value': 2.11},
                    {'axis': 'Rebound', 'value': 1.45},
                    {'axis': 'Assist', 'value': 3.5},
                    {'axis': 'Steal', 'value': 1.4},
                    {'axis': 'Block', 'value': 1.88},
                    {'axis': 'Winning', 'value': 2.03}]}],
                 'SAS0910': [{'name': 'SAS0910',
                   'axes': [{'axis': 'Point', 'value': 1.08},
                    {'axis': 'Rebound', 'value': 0.69},
                    {'axis': 'Assist', 'value': 3.38},
                    {'axis': 'Steal', 'value': 0.6},
                    {'axis': 'Block', 'value': 1.46},
                    {'axis': 'Winning', 'value': 1.41}]}],
                 'SAS1011': [{'name': 'SAS1011',
                   'axes': [{'axis': 'Point', 'value': 0.74},
                    {'axis': 'Rebound', 'value': 0.46},
                    {'axis': 'Assist', 'value': 3.62},
                    {'axis': 'Steal', 'value': 2.4},
                    {'axis': 'Block', 'value': 2.08},
                    {'axis': 'Winning', 'value': 3.13}]}],
                 'SAS1213': [{'name': 'SAS1213',
                   'axes': [{'axis': 'Point', 'value': 1.01},
                    {'axis': 'Rebound', 'value': 1.68},
                    {'axis': 'Assist', 'value': 2.19},
                    {'axis': 'Steal', 'value': 2.0},
                    {'axis': 'Block', 'value': 4.37},
                    {'axis': 'Winning', 'value': 2.66}]}],
                 'SAS1314': [{'name': 'SAS1314',
                   'axes': [{'axis': 'Point', 'value': 0.14},
                    {'axis': 'Rebound', 'value': 1.41},
                    {'axis': 'Assist', 'value': 1.44},
                    {'axis': 'Steal', 'value': 1.2},
                    {'axis': 'Block', 'value': 3.12},
                    {'axis': 'Winning', 'value': 3.28}]}],
                 'SAS1415': [{'name': 'SAS1415',
                   'axes': [{'axis': 'Point', 'value': 0.18},
                    {'axis': 'Rebound', 'value': 1.41},
                    {'axis': 'Assist', 'value': 1.25},
                    {'axis': 'Steal', 'value': 3.0},
                    {'axis': 'Block', 'value': 3.33},
                    {'axis': 'Winning', 'value': 2.19}]}],
                 'LAC1213': [{'name': 'LAC1213',
                   'axes': [{'axis': 'Point', 'value': 0.0},
                    {'axis': 'Rebound', 'value': 1.79},
                    {'axis': 'Assist', 'value': 3.31},
                    {'axis': 'Steal', 'value': 4.0},
                    {'axis': 'Block', 'value': 1.67},
                    {'axis': 'Winning', 'value': 2.34}]}],
                 'LAC1314': [{'name': 'LAC1314',
                   'axes': [{'axis': 'Point', 'value': 1.59},
                    {'axis': 'Rebound', 'value': 4.92},
                    {'axis': 'Assist', 'value': 4.44},
                    {'axis': 'Steal', 'value': 5.0},
                    {'axis': 'Block', 'value': 3.96},
                    {'axis': 'Winning', 'value': 2.5}]}],
                 'LAC1415': [{'name': 'LAC1415',
                   'axes': [{'axis': 'Point', 'value': 1.41},
                    {'axis': 'Rebound', 'value': 4.85},
                    {'axis': 'Assist', 'value': 4.5},
                    {'axis': 'Steal', 'value': 3.2},
                    {'axis': 'Block', 'value': 3.33},
                    {'axis': 'Winning', 'value': 2.34}]}],
                 'LAC1617': [{'name': 'LAC1617',
                   'axes': [{'axis': 'Point', 'value': 1.37},
                    {'axis': 'Rebound', 'value': 4.73},
                    {'axis': 'Assist', 'value': 4.31},
                    {'axis': 'Steal', 'value': 2.6},
                    {'axis': 'Block', 'value': 3.12},
                    {'axis': 'Winning', 'value': 1.56}]}]}
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
              color: d3.scaleOrdinal().range(["#26AF32", "#762712"]),
              format: '.2f'
            };
            this.radarChart("#rc1", this.trio["GSW1819"], radarChartOptions);
            this.radarChart("#rc2", this.trio["MIA1011"], radarChartOptions);
        },
        methods: {
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