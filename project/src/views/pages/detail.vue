<template>
  <div>
    <!-- <Slider /> -->
    <SD />
  </div>
  <hr>
  <div>
    <Table />
  </div>
  <div>
    <PieChart />
  </div>
  <div>
    <LineChart1 />
  </div>

</template>



<script>
// import StreamGraph from "../components/sg.vue"
// import ScatterPlot from "../components/sp.vue"
// import Slider from "../components/slider.vue"
import SD from "../components/sd.vue"
import Table from "../components/table.vue"
import LineChart1 from "../components/linechart1.vue"
import PieChart from "../components/piechart.vue"
import * as d3 from "d3";
// import csvPath from '../../assets/data/SF_Historical_Ballot_Measures.csv';

export default {
    components: {
        // Slider,
        SD,
        Table,
        LineChart1,
        PieChart
    },
    created(){},
    mounted(){},
    methods: {}
}

</script>