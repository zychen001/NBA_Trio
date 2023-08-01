<template>
    <a-row>
      <a-col :flex="3">
        <div id="piechart1"></div>
      </a-col>
      <a-col :flex="3">
        <div id="piechart2"></div>
      </a-col>
      <a-col :flex="2">
        <div id="piechart3"></div>
      </a-col>
    </a-row>
    <a-row>
     <a-col :flex="3">
        <div id="piechart4"></div>
      </a-col>
        <a-col :flex="3">
        <div id="piechart5"></div>
      </a-col>
      <a-col :flex="2">
        <div id="piechart6"></div>
      </a-col>
    </a-row>
</template>

<script>
    import * as d3 from "d3";

    export default {
        name: 'PieChart',
        data() {
            return {
                trio:
                {'LeBron_Wade_Bosh_2010': {'points': [['Trio', 70.9],
                   ['Teammates', 31.19999999999999]],
                  'rebounds': [['Trio', 22.2], ['Teammates', 19.900000000000002]],
                  'assists': [['Trio', 13.5], ['Teammates', 6.5]],
                  'steals': [['Trio', 3.9], ['Teammates', 2.6999999999999997]],
                  'blocks': [['Trio', 2.3], ['Teammates', 2.9000000000000004]],
                  'attemps': [['Trio', 50.7], ['Teammates', 26.099999999999994]]},
                 'LeBron_Wade_Bosh_2011': {'points': [['Trio', 67.2],
                   ['Teammates', 31.299999999999997]],
                  'rebounds': [['Trio', 20.6], ['Teammates', 21.0]],
                  'assists': [['Trio', 12.6], ['Teammates', 7.4]],
                  'steals': [['Trio', 4.5], ['Teammates', 4.4]],
                  'blocks': [['Trio', 2.9], ['Teammates', 2.5000000000000004]],
                  'attemps': [['Trio', 50.2], ['Teammates', 28.799999999999997]]},
                 'LeBron_Wade_Bosh_2012': {'points': [['Trio', 64.6],
                   ['Teammates', 38.30000000000001]],
                  'rebounds': [['Trio', 19.8], ['Teammates', 18.8]],
                  'assists': [['Trio', 14.1], ['Teammates', 8.9]],
                  'steals': [['Trio', 4.5], ['Teammates', 4.199999999999999]],
                  'blocks': [['Trio', 3.1], ['Teammates', 2.3000000000000003]],
                  'attemps': [['Trio', 45.9], ['Teammates', 31.500000000000007]]},
                 'LeBron_Wade_Bosh_2013': {'points': [['Trio', 62.3],
                   ['Teammates', 39.900000000000006]],
                  'rebounds': [['Trio', 18.0], ['Teammates', 18.9]],
                  'assists': [['Trio', 12.1], ['Teammates', 10.4]],
                  'steals': [['Trio', 4.1], ['Teammates', 4.800000000000001]],
                  'blocks': [['Trio', 2.2], ['Teammates', 2.3]],
                  'attemps': [['Trio', 43.8], ['Teammates', 32.7]]},
                 'Pierce_Garnett_Allen_2007': {'points': [['Trio', 55.8], ['Teammates', 44.7]],
                  'rebounds': [['Trio', 18.0], ['Teammates', 24.0]],
                  'assists': [['Trio', 11.0], ['Teammates', 11.399999999999999]],
                  'steals': [['Trio', 3.6], ['Teammates', 4.9]],
                  'blocks': [['Trio', 2.0], ['Teammates', 2.5999999999999996]],
                  'attemps': [['Trio', 41.1], ['Teammates', 35.6]]},
                 'Pierce_Garnett_Allen_2008': {'points': [['Trio', 54.5],
                   ['Teammates', 46.400000000000006]],
                  'rebounds': [['Trio', 17.6], ['Teammates', 24.5]],
                  'assists': [['Trio', 8.9], ['Teammates', 13.799999999999999]],
                  'steals': [['Trio', 3.0], ['Teammates', 4.6]],
                  'blocks': [['Trio', 1.7], ['Teammates', 3.0]],
                  'attemps': [['Trio', 40.8], ['Teammates', 36.400000000000006]]},
                 'Pierce_Garnett_Allen_2009': {'points': [['Trio', 48.9],
                   ['Teammates', 50.300000000000004]],
                  'rebounds': [['Trio', 14.9], ['Teammates', 23.700000000000003]],
                  'assists': [['Trio', 8.4], ['Teammates', 15.1]],
                  'steals': [['Trio', 3.0], ['Teammates', 5.5]],
                  'blocks': [['Trio', 1.5], ['Teammates', 3.4000000000000004]],
                  'attemps': [['Trio', 35.6], ['Teammates', 41.199999999999996]]},
                 'Pierce_Garnett_Allen_2010': {'points': [['Trio', 50.3], ['Teammates', 46.2]],
                  'rebounds': [['Trio', 17.7], ['Teammates', 21.099999999999998]],
                  'assists': [['Trio', 8.4], ['Teammates', 14.999999999999998]],
                  'steals': [['Trio', 3.3], ['Teammates', 4.8999999999999995]],
                  'blocks': [['Trio', 1.6], ['Teammates', 2.6]],
                  'attemps': [['Trio', 36.6], ['Teammates', 39.199999999999996]]},
                 'Pierce_Garnett_Allen_2011': {'points': [['Trio', 49.4], ['Teammates', 42.4]],
                  'rebounds': [['Trio', 16.5], ['Teammates', 22.299999999999997]],
                  'assists': [['Trio', 9.8], ['Teammates', 13.8]],
                  'steals': [['Trio', 3.1], ['Teammates', 4.4]],
                  'blocks': [['Trio', 1.6], ['Teammates', 3.9]],
                  'attemps': [['Trio', 38.3], ['Teammates', 38.8]]},
                 'Durant_Westbrook_Harden_2009': {'points': [['Trio', 56.1],
                   ['Teammates', 45.4]],
                  'rebounds': [['Trio', 15.7], ['Teammates', 27.8]],
                  'assists': [['Trio', 12.6], ['Teammates', 7.4]],
                  'steals': [['Trio', 3.8], ['Teammates', 4.2]],
                  'blocks': [['Trio', 1.7], ['Teammates', 4.2]],
                  'attemps': [['Trio', 42.0], ['Teammates', 38.8]]},
                 'Durant_Westbrook_Harden_2010': {'points': [['Trio', 61.8],
                   ['Teammates', 43.0]],
                  'rebounds': [['Trio', 14.5], ['Teammates', 28.299999999999997]],
                  'assists': [['Trio', 13.0], ['Teammates', 7.399999999999999]],
                  'steals': [['Trio', 4.1], ['Teammates', 3.9000000000000004]],
                  'blocks': [['Trio', 1.7], ['Teammates', 4.2]],
                  'attemps': [['Trio', 45.0], ['Teammates', 35.599999999999994]]},
                 'Durant_Westbrook_Harden_2011': {'points': [['Trio', 68.4],
                   ['Teammates', 34.69999999999999]],
                  'rebounds': [['Trio', 16.7], ['Teammates', 27.000000000000004]],
                  'assists': [['Trio', 12.7], ['Teammates', 5.800000000000001]],
                  'steals': [['Trio', 4.0], ['Teammates', 3.5]],
                  'blocks': [['Trio', 1.8], ['Teammates', 6.3999999999999995]],
                  'attemps': [['Trio', 49.0], ['Teammates', 30.200000000000003]]},
                 'LeBron_Irving_Love_2014': {'points': [['Trio', 63.4],
                   ['Teammates', 39.699999999999996]],
                  'rebounds': [['Trio', 18.9], ['Teammates', 24.1]],
                  'assists': [['Trio', 14.8], ['Teammates', 7.300000000000001]],
                  'steals': [['Trio', 3.8], ['Teammates', 3.5]],
                  'blocks': [['Trio', 1.5], ['Teammates', 2.7]],
                  'attemps': [['Trio', 47.7], ['Teammates', 34.5]]},
                 'LeBron_Irving_Love_2015': {'points': [['Trio', 60.9], ['Teammates', 43.4]],
                  'rebounds': [['Trio', 20.3], ['Teammates', 24.2]],
                  'assists': [['Trio', 13.9], ['Teammates', 8.799999999999999]],
                  'steals': [['Trio', 3.3], ['Teammates', 3.4000000000000004]],
                  'blocks': [['Trio', 1.4], ['Teammates', 2.5]],
                  'attemps': [['Trio', 47.9], ['Teammates', 36.1]]},
                 'LeBron_Irving_Love_2016': {'points': [['Trio', 70.6], ['Teammates', 39.7]],
                  'rebounds': [['Trio', 22.9], ['Teammates', 20.9]],
                  'assists': [['Trio', 16.4], ['Teammates', 6.300000000000001]],
                  'steals': [['Trio', 3.3], ['Teammates', 3.3]],
                  'blocks': [['Trio', 1.3], ['Teammates', 2.7]],
                  'attemps': [['Trio', 52.4], ['Teammates', 32.50000000000001]]},
                 'Curry_Thompson_Green_2012': {'points': [['Trio', 42.4],
                   ['Teammates', 58.800000000000004]],
                  'rebounds': [['Trio', 11.0], ['Teammates', 34.0]],
                  'assists': [['Trio', 9.8], ['Teammates', 12.7]],
                  'steals': [['Trio', 3.1], ['Teammates', 3.8000000000000003]],
                  'blocks': [['Trio', 1.0], ['Teammates', 3.2]],
                  'attemps': [['Trio', 35.8], ['Teammates', 47.60000000000001]]},
                 'Curry_Thompson_Green_2013': {'points': [['Trio', 48.6],
                   ['Teammates', 55.699999999999996]],
                  'rebounds': [['Trio', 12.4], ['Teammates', 32.9]],
                  'assists': [['Trio', 12.6], ['Teammates', 10.700000000000001]],
                  'steals': [['Trio', 3.7], ['Teammates', 4.1]],
                  'blocks': [['Trio', 1.6], ['Teammates', 3.4]],
                  'attemps': [['Trio', 38.8], ['Teammates', 46.60000000000001]]},
                 'Curry_Thompson_Green_2014': {'points': [['Trio', 57.2], ['Teammates', 52.8]],
                  'rebounds': [['Trio', 15.7], ['Teammates', 29.000000000000004]],
                  'assists': [['Trio', 14.3], ['Teammates', 13.099999999999998]],
                  'steals': [['Trio', 4.7], ['Teammates', 4.6000000000000005]],
                  'blocks': [['Trio', 2.3], ['Teammates', 3.7]],
                  'attemps': [['Trio', 43.4], ['Teammates', 43.6]]},
                 'Curry_Thompson_Green_2015': {'points': [['Trio', 66.2], ['Teammates', 48.7]],
                  'rebounds': [['Trio', 18.8], ['Teammates', 27.400000000000002]],
                  'assists': [['Trio', 16.2], ['Teammates', 12.7]],
                  'steals': [['Trio', 4.4], ['Teammates', 4.0]],
                  'blocks': [['Trio', 2.2], ['Teammates', 3.8999999999999995]],
                  'attemps': [['Trio', 47.6], ['Teammates', 39.699999999999996]]},
                 'Curry_Thompson_Durant_2016': {'points': [['Trio', 72.7],
                   ['Teammates', 43.2]],
                  'rebounds': [['Trio', 16.5], ['Teammates', 28.0]],
                  'assists': [['Trio', 13.5], ['Teammates', 16.9]],
                  'steals': [['Trio', 3.7], ['Teammates', 5.8999999999999995]],
                  'blocks': [['Trio', 2.3], ['Teammates', 4.4]],
                  'attemps': [['Trio', 52.4], ['Teammates', 34.699999999999996]]},
                 'Curry_Thompson_Durant_2017': {'points': [['Trio', 72.8],
                   ['Teammates', 40.7]],
                  'rebounds': [['Trio', 15.7], ['Teammates', 27.8]],
                  'assists': [['Trio', 14.0], ['Teammates', 15.3]],
                  'steals': [['Trio', 3.1], ['Teammates', 4.9]],
                  'blocks': [['Trio', 2.5], ['Teammates', 5.0]],
                  'attemps': [['Trio', 51.0], ['Teammates', 34.099999999999994]]},
                 'Curry_Thompson_Durant_2018': {'points': [['Trio', 74.8],
                   ['Teammates', 42.3]],
                  'rebounds': [['Trio', 15.5], ['Teammates', 30.700000000000003]],
                  'assists': [['Trio', 13.5], ['Teammates', 15.899999999999999]],
                  'steals': [['Trio', 3.1], ['Teammates', 4.5]],
                  'blocks': [['Trio', 2.1], ['Teammates', 4.4]],
                  'attemps': [['Trio', 55.1], ['Teammates', 34.699999999999996]]},
                 'Kobe_Gasol_Bynum_2008': {'points': [['Trio', 60.0],
                   ['Teammates', 46.900000000000006]],
                  'rebounds': [['Trio', 22.8], ['Teammates', 21.099999999999998]],
                  'assists': [['Trio', 9.8], ['Teammates', 13.5]],
                  'steals': [['Trio', 2.5], ['Teammates', 6.300000000000001]],
                  'blocks': [['Trio', 3.3], ['Teammates', 1.7999999999999998]],
                  'attemps': [['Trio', 52.8], ['Teammates', 32.3]]},
                 'Kobe_Gasol_Bynum_2009': {'points': [['Trio', 60.3],
                   ['Teammates', 41.400000000000006]],
                  'rebounds': [['Trio', 25.0], ['Teammates', 19.299999999999997]],
                  'assists': [['Trio', 9.4], ['Teammates', 11.700000000000001]],
                  'steals': [['Trio', 2.6], ['Teammates', 4.9]],
                  'blocks': [['Trio', 3.4], ['Teammates', 1.5000000000000004]],
                  'attemps': [['Trio', 45.1], ['Teammates', 38.199999999999996]]},
                 'Kobe_Gasol_Bynum_2010': {'points': [['Trio', 55.4], ['Teammates', 46.1]],
                  'rebounds': [['Trio', 24.7], ['Teammates', 19.3]],
                  'assists': [['Trio', 9.4], ['Teammates', 12.6]],
                  'steals': [['Trio', 2.2], ['Teammates', 5.1]],
                  'blocks': [['Trio', 3.7], ['Teammates', 1.3999999999999995]],
                  'attemps': [['Trio', 44.6], ['Teammates', 37.800000000000004]]},
                 'Kobe_Gasol_Bynum_2011': {'points': [['Trio', 64.0], ['Teammates', 33.3]],
                  'rebounds': [['Trio', 27.6], ['Teammates', 18.6]],
                  'assists': [['Trio', 9.6], ['Teammates', 12.9]],
                  'steals': [['Trio', 2.3], ['Teammates', 3.6000000000000005]],
                  'blocks': [['Trio', 3.6], ['Teammates', 1.6999999999999997]],
                  'attemps': [['Trio', 50.4], ['Teammates', 30.199999999999996]]},
                 'Duncan_Parker_Ginobili_2002': {'points': [['Trio', 46.4],
                   ['Teammates', 49.4]],
                  'rebounds': [['Trio', 17.8], ['Teammates', 24.8]],
                  'assists': [['Trio', 11.2], ['Teammates', 8.8]],
                  'steals': [['Trio', 3.0], ['Teammates', 4.7]],
                  'blocks': [['Trio', 3.1], ['Teammates', 3.3000000000000003]],
                  'attemps': [['Trio', 35.7], ['Teammates', 41.099999999999994]]},
                 'Duncan_Parker_Ginobili_2003': {'points': [['Trio', 49.8],
                   ['Teammates', 41.7]],
                  'rebounds': [['Trio', 20.1], ['Teammates', 25.0]],
                  'assists': [['Trio', 12.4], ['Teammates', 7.999999999999998]],
                  'steals': [['Trio', 3.5], ['Teammates', 4.6]],
                  'blocks': [['Trio', 3.0], ['Teammates', 3.5]],
                  'attemps': [['Trio', 39.9], ['Teammates', 38.6]]},
                 'Duncan_Parker_Ginobili_2004': {'points': [['Trio', 52.9],
                   ['Teammates', 43.300000000000004]],
                  'rebounds': [['Trio', 19.2], ['Teammates', 23.2]],
                  'assists': [['Trio', 12.7], ['Teammates', 8.900000000000002]],
                  'steals': [['Trio', 3.5], ['Teammates', 4.0]],
                  'blocks': [['Trio', 3.1], ['Teammates', 3.4999999999999996]],
                  'attemps': [['Trio', 40.3], ['Teammates', 38.400000000000006]]},
                 'Duncan_Parker_Ginobili_2005': {'points': [['Trio', 52.6],
                   ['Teammates', 43.99999999999999]],
                  'rebounds': [['Trio', 17.8], ['Teammates', 23.7]],
                  'assists': [['Trio', 12.6], ['Teammates', 8.299999999999999]],
                  'steals': [['Trio', 3.5], ['Teammates', 3.0999999999999996]],
                  'blocks': [['Trio', 2.5], ['Teammates', 3.2]],
                  'attemps': [['Trio', 39.3], ['Teammates', 38.0]]},
                 'Duncan_Parker_Ginobili_2006': {'points': [['Trio', 55.1],
                   ['Teammates', 43.4]],
                  'rebounds': [['Trio', 18.2], ['Teammates', 22.500000000000004]],
                  'assists': [['Trio', 12.4], ['Teammates', 9.700000000000001]],
                  'steals': [['Trio', 3.4], ['Teammates', 3.8000000000000003]],
                  'blocks': [['Trio', 2.9], ['Teammates', 2.1999999999999997]],
                  'attemps': [['Trio', 39.7], ['Teammates', 37.5]]},
                 'Duncan_Parker_Ginobili_2007': {'points': [['Trio', 57.6],
                   ['Teammates', 37.800000000000004]],
                  'rebounds': [['Trio', 19.3], ['Teammates', 21.999999999999996]],
                  'assists': [['Trio', 13.3], ['Teammates', 7.699999999999999]],
                  'steals': [['Trio', 3.0], ['Teammates', 3.4000000000000004]],
                  'blocks': [['Trio', 2.4], ['Teammates', 1.6999999999999997]],
                  'attemps': [['Trio', 43.5], ['Teammates', 34.8]]},
                 'Duncan_Parker_Ginobili_2008': {'points': [['Trio', 56.8],
                   ['Teammates', 40.2]],
                  'rebounds': [['Trio', 18.3], ['Teammates', 22.7]],
                  'assists': [['Trio', 14.0], ['Teammates', 7.199999999999999]],
                  'steals': [['Trio', 2.9], ['Teammates', 2.9]],
                  'blocks': [['Trio', 2.2], ['Teammates', 1.7999999999999998]],
                  'attemps': [['Trio', 43.5], ['Teammates', 36.2]]},
                 'Duncan_Parker_Ginobili_2009': {'points': [['Trio', 50.4],
                   ['Teammates', 51.00000000000001]],
                  'rebounds': [['Trio', 16.3], ['Teammates', 26.499999999999996]],
                  'assists': [['Trio', 13.8], ['Teammates', 8.5]],
                  'steals': [['Trio', 2.5], ['Teammates', 3.8]],
                  'blocks': [['Trio', 2.0], ['Teammates', 2.5999999999999996]],
                  'attemps': [['Trio', 38.7], ['Teammates', 42.5]]},
                 'Duncan_Parker_Ginobili_2010': {'points': [['Trio', 48.3],
                   ['Teammates', 55.400000000000006]],
                  'rebounds': [['Trio', 15.7], ['Teammates', 26.2]],
                  'assists': [['Trio', 14.2], ['Teammates', 8.2]],
                  'steals': [['Trio', 3.4], ['Teammates', 3.9]],
                  'blocks': [['Trio', 2.3], ['Teammates', 2.2]],
                  'attemps': [['Trio', 37.4], ['Teammates', 43.4]]},
                 'Duncan_Parker_Kawhi_2012': {'points': [['Trio', 50.0], ['Teammates', 53.0]],
                  'rebounds': [['Trio', 18.9], ['Teammates', 22.4]],
                  'assists': [['Trio', 11.9], ['Teammates', 13.200000000000001]],
                  'steals': [['Trio', 3.2], ['Teammates', 5.3]],
                  'blocks': [['Trio', 3.4], ['Teammates', 2.0000000000000004]],
                  'attemps': [['Trio', 38.3], ['Teammates', 43.10000000000001]]},
                 'Duncan_Parker_Kawhi_2013': {'points': [['Trio', 44.6],
                   ['Teammates', 60.800000000000004]],
                  'rebounds': [['Trio', 18.2], ['Teammates', 25.099999999999998]],
                  'assists': [['Trio', 10.7], ['Teammates', 14.5]],
                  'steals': [['Trio', 2.8], ['Teammates', 4.6000000000000005]],
                  'blocks': [['Trio', 2.8], ['Teammates', 2.3]],
                  'attemps': [['Trio', 35.4], ['Teammates', 48.1]]},
                 'Duncan_Parker_Kawhi_2014': {'points': [['Trio', 44.8],
                   ['Teammates', 58.400000000000006]],
                  'rebounds': [['Trio', 18.2], ['Teammates', 25.400000000000002]],
                  'assists': [['Trio', 10.4], ['Teammates', 13.999999999999998]],
                  'steals': [['Trio', 3.7], ['Teammates', 4.3]],
                  'blocks': [['Trio', 2.9], ['Teammates', 2.5000000000000004]],
                  'attemps': [['Trio', 35.6], ['Teammates', 47.99999999999999]]},
                 'Paul_Griffin_Jordan_2011': {'points': [['Trio', 47.9], ['Teammates', 49.6]],
                  'rebounds': [['Trio', 22.8], ['Teammates', 18.8]],
                  'assists': [['Trio', 12.6], ['Teammates', 8.4]],
                  'steals': [['Trio', 3.8], ['Teammates', 4.6000000000000005]],
                  'blocks': [['Trio', 2.8], ['Teammates', 2.0]],
                  'attemps': [['Trio', 36.2], ['Teammates', 45.099999999999994]]},
                 'Paul_Griffin_Jordan_2012': {'points': [['Trio', 43.7],
                   ['Teammates', 57.39999999999999]],
                  'rebounds': [['Trio', 19.2], ['Teammates', 22.400000000000002]],
                  'assists': [['Trio', 13.7], ['Teammates', 10.2]],
                  'steals': [['Trio', 4.2], ['Teammates', 5.3999999999999995]],
                  'blocks': [['Trio', 2.1], ['Teammates', 3.4999999999999996]],
                  'attemps': [['Trio', 31.6], ['Teammates', 48.99999999999999]]},
                 'Paul_Griffin_Jordan_2013': {'points': [['Trio', 53.6],
                   ['Teammates', 54.300000000000004]],
                  'rebounds': [['Trio', 27.4], ['Teammates', 15.600000000000001]],
                  'assists': [['Trio', 15.5], ['Teammates', 9.100000000000001]],
                  'steals': [['Trio', 4.7], ['Teammates', 3.8999999999999995]],
                  'blocks': [['Trio', 3.2], ['Teammates', 1.5999999999999996]],
                  'attemps': [['Trio', 39.7], ['Teammates', 42.8]]},
                 'Paul_Griffin_Jordan_2014': {'points': [['Trio', 52.5], ['Teammates', 54.2]],
                  'rebounds': [['Trio', 27.2], ['Teammates', 15.400000000000002]],
                  'assists': [['Trio', 15.6], ['Teammates', 9.200000000000001]],
                  'steals': [['Trio', 3.8], ['Teammates', 4.0]],
                  'blocks': [['Trio', 2.9], ['Teammates', 2.1]],
                  'attemps': [['Trio', 37.9], ['Teammates', 45.4]]},
                 'Paul_Griffin_Jordan_2016': {'points': [['Trio', 52.2], ['Teammates', 56.5]],
                  'rebounds': [['Trio', 26.9], ['Teammates', 16.200000000000003]],
                  'assists': [['Trio', 15.3], ['Teammates', 7.199999999999999]],
                  'steals': [['Trio', 3.5], ['Teammates', 4.0]],
                  'blocks': [['Trio', 2.8], ['Teammates', 1.5]],
                  'attemps': [['Trio', 35.0], ['Teammates', 48.2]]}}
            }
        },
        mounted(){
            var trio = this.$route.query.name;
            var season = this.$route.query.season;
            var key = trio + "_" + season;
            this.drawPieChart(this.trio[key]["points"], "#piechart1", "Points");
            this.drawPieChart(this.trio[key]["attemps"], "#piechart2", "Attemps");
            this.drawPieChart(this.trio[key]["rebounds"], "#piechart3", "Rebounds");
            this.drawPieChart(this.trio[key]["assists"], "#piechart4", "Assists");
            this.drawPieChart(this.trio[key]["steals"], "#piechart5", "Steals");
            this.drawPieChart(this.trio[key]["blocks"], "#piechart6", "Blocks");
        },
        methods: {
            drawPieChart(dataset, id, item){
                var width = 400;
                var height = 400;


                var pie = d3.pie()
                            .sort(null)
                            .value(function(d){
                              return d[1];
                            });
                var piedata = pie(dataset);

                var outerRadius = width / 4;
                var innerRadius = 0;

                var arc = d3.arc()
                            .outerRadius(outerRadius)
                            .innerRadius(innerRadius);

                var colors = d3.schemeCategory10;

                var svg = d3.select(id)
                            .append('svg')
                            .attr('width', width)
                            .attr('height', height);

                var arcs = svg.selectAll('g')
                              .data(piedata)
                              .enter()
                              .append('g')
                              .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

                arcs.append('path')
                    .attr('fill', function(d, i){
                      return colors[i];
                    })
                    .attr('d', function(d){
                      return arc(d);
                    });

                arcs.append('text')
                        .attr('transform', function(d, i){
                            var x = arc.centroid(d)[0] * 2.8;
                            var y = arc.centroid(d)[1] * 2.8;
                            if(i === 4) {
                                return 'translate(' + (x * 1.2) + ', ' + (y * 1.2) + ')';
                            } else if(i === 3) {
                              return 'translate(' + (x - 40) + ', ' + y + ')';
                            } else if(i === 5) {
                                return 'translate(' + (x + 40) + ', ' + y + ')';
                            }
                            return 'translate(' + x + ', ' + y + ')';
                        })
                        .attr('text-anchor', 'middle')
                        .text(function(d){
                            var percent = Number(d.value) / d3.sum(dataset, function(d){
                                return d[1];
                            }) * 100;
                            return d.data[0] + ': ' + percent.toFixed(1) + '%';
                        })

                arcs.append('line')
                        .attr('stroke', 'black')
                        .attr('x1', function(d){ return arc.centroid(d)[0] * 2; })
                        .attr('y1', function(d){ return arc.centroid(d)[1] * 2; })
                        .attr('x2', function(d, i){
                            if(i === 4) {
                                return arc.centroid(d)[0] * 3.2;
                            }
                            return arc.centroid(d)[0] * 2.5;
                        })
                        .attr('y2', function(d, i){
                            if(i === 4) {
                                return arc.centroid(d)[1] * 3.2;
                            }
                            return arc.centroid(d)[1] * 2.5;
                        });

                svg.append("text")
                .attr("x", width / 2)
                .attr("y", 58)
                .attr("text-anchor", "middle")
                .style("font-size", "15px")
                .text(`${item}`);
            }
        }
    }

</script>


<style>

</style>