<template>
    <head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
      <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/archivo-narrow" type="text/css"/>
      <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/galaxyfontjohuria" type="text/css"/>
      <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/seshat-regular" type="text/css"/>
  </head>
  <body>
    <section id='intro'>
      <div class='header'>Which trio is the best?</div>
      <div class='introduction' >
        <p>
          Despite being a team sport, most NBA(National Basketball Association) teams rely heavily on the star players
          in it to get them to great success. If we look at the NBA history in these two decades, in most cases,
          at least three excellent players are required for the team to win more games in the regular seasons and
          go further in the playoffs. Is Lebron James one of the greatest players in NBA history? Absolutely.
          Did he win a championship when he is the only all star player in the team? No. But he did that
          with the help of Dwyane Wade and Chris Bosh, and he did it again with the help of Kyrie Irving and Kevin Love.
          Hence, the performance of the three best players in a team, the trio, is a good metric to see their dominance
          to the league at that time.
        </p>
        <p>
          There are plenty of excellent trios in NBA history. Among them, we select 10 well known trios favored by
          fans and media in the 21st century, to see what the data and visualizations say about which is the best
          trio in it.
        </p>
      </div>
    </section>
    <p class="section-header"><span>Here are the trios in our list:</span></p>
    <div class='trio-list'>
      <ul>
        <li>
          Lebron James, Dwyane Wade, Chris Bosh (Miami Heat, 2010~2014)
        </li>
        <li>
          Kevin Durant, Russell Westbrook, James Harden (Oklahoma City Thunder, 2009~2011)
        </li>
        <li>
          Tim Duncan, Tony Parker, Manu Ginobili (San Antonio Spurs, 2002~2013)
        </li>
        <li>
          Tim Duncan, Tony Parker, Kawhi Leonard (San Antonio Spurs, 2014~2015)
        </li>
        <li>
          Lebron James, Kyrie Irving, Kevin Love (Cleveland Cavaliers, 2014~2017)
        </li>
        <li>
          Chris Paul, Blake Griffin, DeAndre Jordan (Los Angeles Clippers, 2011~2017)
        </li>
        <li>
          Stephen Curry, Klay Thompson, Draymond Green (Golden State Warriors, 2012~2015)
        </li>
        <li>
          Stephen Curry, Klay Thompson, Kevin Durant (Golden State Warriors, 2016~2019)
        </li>
        <li>
          Paul Pierce, Kevin Garnett, Ray Allen (Boston Celtics, 2007~2012)
        </li>
        <li>
          Kobe Bryant, Pau Gasol, Andrew Bynum (Los Angeles Lakers, 2008~2011)
        </li>
      </ul>
    </div>
    <div class="introduction">
      <p>
        In our visualization, we use season as the unit, a trio played in different seasons will be viewed as a
        different data point to observe their improvement. We take into account multiple aspects of the trio’s
        performance, like offensive ability, defensive ability, efficiency rating, win share, honors, age, etc.
        We use PER(Player efficiency rating) and WS(Win share) correlations to give an overview of the trios'
        performance. And the two radar charts below give a further comparison of two selected trio’s performances
        in different NBA seasons. When clicking the dot of each trio in the scatter plot, a more detailed page
        with their information will be shown.
      </p>
    </div>
  </body>
    <div>       
<!--     <div style="background: #ececec; padding: 10px">
    <a-card title="Card title" :bordered="false" style="width:100%; height:300px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
  </div> -->
        <!-- <h2>Dashboard for TMDB 5000 Movie Dataset</h2> -->
<!--         <a-row type="flex">
            <a-col :flex="3" type="flex">
                <a-row :flex="1">
                    <a-card title="Scatter Plot: The relationship between movie budget and revenue by genre (brush to zoom)" style="width: 95%">
                        <ScatterPlot /> 
                    </a-card>
                </a-row>
                <br />
                <a-row :flex="1">
                    <a-card title="Strem Graph: The trend in the number of movies by genre over time (click to select)" style="width: 95%">
                        <StreamGraph />
                    </a-card>
                </a-row>
            </a-col>
            <a-col :flex="5" type="flex">
                <a-card title="Bubble Chart: The overview of the dataset distribution" style="width: 730px">
                    <BubbleChart /> 
                </a-card>
            </a-col>
        </a-row> -->
        <hr>
        <br>
        <scatter />
        <hr>
        <br>
        <RadarChart /> 
    </div>
</template>

<script>
// import StreamGraph from "../components/sg.vue"
// import ScatterPlot from "../components/sp.vue"
import scatter from "../components/scatter1.vue"
import RadarChart from "../components/rc1.vue"
import * as d3 from "d3";
// import csvPath from '../../assets/data/SF_Historical_Ballot_Measures.csv';

export default {
    data(){
        return {
            dataExists: false,
        }
    },
    components: {
        RadarChart,
        scatter
    },
    created(){},
    mounted(){},
    methods: {}
}

</script>

<style>
  .header {
    font-family: 'SeshatRegular';
    font-size: 60px;
    font-weight: bold;
    text-align: center;
  }
  .introduction {
    font-family: 'ArchivoNarrowRegular';
    font-weight: normal;
    font-style: normal;
    font-size: 25px;
    width: 85%;
    margin: auto;
  }
  .section-header {
    font-family: 'SeshatRegular';
    font-size: 25px;
    margin: auto;
    width: 70%;
    font-weight: bold;
  }
  .trio-list {
    font-family: 'ArchivoNarrowRegular';
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
    width: 70%;
    margin: auto;
  }
  .attr-intro {
    font-family: 'ArchivoNarrowRegular';
    font-weight: normal;
    font-style: normal;
    font-size: 25px;
    width: 60%;
    margin: auto;
  }

</style>

<!-- <style >
.demo-page-header :deep(tr:last-child td) {
  padding-bottom: 0;
}
</style> -->
