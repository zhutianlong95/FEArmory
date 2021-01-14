<template>
  <div class="main">
    <div id="chart" class="chart">
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'EChartsDemo1',
  data () {
    return {
      point: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const chart = echarts.init(document.querySelector('#chart'))
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          stack: '总量',
          markLine: {
            data: [
            ]
          }
          // markArea: {
          //   data: [
          //     [
          //       {
          //         coord: ['Thu', 934]
          //       },
          //       {
          //         coord: ['Sat', 1330]
          //       },
          //       {
          //         coord: ['Fri', 1290]
          //       }
          //     ]
          //   ]
          // }
        }
        // {
        //   name: '联盟广告',
        //   type: 'line',
        //   stack: '总量',
        //   areaStyle: { normal: {} },
        //   data: [null, 0, 200, 400, 0, 30, null]
        // }
        ]
      }
      chart.setOption(option)

      chart.on('click', (params) => {
        console.log(params)
        this.point.push({
          coord: [params.name, params.value]
        })

        if (this.point.length === 2) {
          option.series[0].markLine.data = [this.point]
          // option.series.push({
          //   type: 'line',
          //   stack: '总量',
          //   areaStyle: { normal: {} },
          //   data: [null, 0, 325, 340, 20, null, null]
          // })
          chart.setOption(option)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .chart {
    width: 500px;
    height: 400px;
  }
}
</style>
