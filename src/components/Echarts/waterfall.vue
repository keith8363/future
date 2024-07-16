<template>
	<div class="comm-chart" ref="chart"></div>
</template>
<script setup lang="ts">
import noData from '@/assets/header/noData.png';
import { throttle } from '@/utils/debounce';
import { fontSizeWidth } from '@/utils/rem';
import * as echarts from 'echarts';
import { nextTick, onMounted, onUnmounted, reactive, shallowRef, watch } from 'vue';
import { color, fontColor } from './params';

const chart = shallowRef(null)
let myChart:any = null
const props = defineProps({
    data:{
      type:Object,
      require:true
    }
})

const myColor = props.data?.data.map(i=>i.color)

let opts:any = {
  color: myColor || color(),
  fontColor: fontColor,
  data:[],
  ...props.data
}

const standard = reactive({
    name: 'Placeholder',
    type: 'bar',
    stack: 'Total',
    silent: true,
    itemStyle: {
      borderColor: 'transparent',
      color: 'transparent'
    },
    emphasis: {
      itemStyle: {
        borderColor: 'transparent',
        color: 'transparent'
      }
    },
    data:[] as Array<any>
  })

watch(
  props.data!,
  throttle((_o,n:any)=>{
    opts = {
			...opts,
			...JSON.parse(JSON.stringify(n)),
		}
    init()
  }),
  {
    deep:true
  }
)

onMounted(() => {
	init();
})

onUnmounted(() => {
	if (myChart) {
		myChart.dispose()
	}
})

const init = () => {
  if(!opts.data.length && !myChart &&!chart){
    chart.value.innerHTML = `<div class="noData"><img src="${noData}"><span class="noDataText">暂无数据</span></div>`
		return
  }
  if(myChart){
    myChart.clear()
  }else{
    myChart = echarts.init(chart.value)
    window.addEventListener(
			'resize',
			() => {
				myChart.resize()
			},
			false
		)
  }
  
  const len = opts.data.length
  let sum = 0 
  opts.data.forEach((i,index)=>{  
    if(len-1!==index){
      i.data[index] > 0 && (sum+=i.data[index])
      const num =  sum - Math.abs(i.data[index]) 
      standard.data.push(num)
    }else{
      standard.data.push(0)
    } 
  })
 
  nextTick(()=>{
    initChat()
  })
}

const initChat = () => {
  const options = {
    color: opts.color,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      confine: false, // 是否将 tooltip 框限制在图表的区域内
      textStyle: {
				color: '#fff',
				fontSize: fontSizeWidth(14),
			},
      backgroundColor: 'rgba(9, 10, 42, 0.56)',
      formatter: function (params) {
        var index = params[1].dataIndex + 1;
        const value = params[index].value!== 0 ? params[index].value ? params[index].value : '--' : params[index].value
        return params[index].name + ' : ' + value + opts.unit;
      }
    },
    title:{
      // text: opts.title,
      show:false,
      textStyle: {
				color: opts.fontColor,
				fontSize: opts.textStyleSize || fontSizeWidth(14),
				fontWeight: 400,
				lineHeight: fontSizeWidth(25),
			},
			subtextStyle: {
				color: opts.fontColor,
				fontSize: opts.subtextStyleSize || fontSizeWidth(24),
				fontWeight: 600,
				width: 200,
			},
			left: 'center',
			top: opts.top || '27%',
			...opts.title,
    },

    toolbox:{
			show:opts.download ? opts.download.show :false,
			// itemSize:fontSizeWidth(36),
			feature:{
				saveAsImage:{
					show:true,
					type:'png',
					title:'导出',
					preventDefault:true,
					name:opts.title || '',
					pixelRatio:2,
					nameText:'导出',
					excludeComponents:['toolbox'],
					backgroundColor:'#fff',
					// icon:Download,
					
				},
				dataView:{
					show:false
				}
			},
			...opts.download
		},
  
    xAxis: {
			type: 'category',
			data: opts.names,
			axisTick: {
				show: false,
			},
			axisLabel: {
				show: true,
				fontSize: opts.xAxisFontSize || fontSizeWidth(14),
				formatter: function (value: string) {
					const len = value.length
					const limitLen = opts.xAxisFontSize ? 5 : 8
					return len > limitLen ? value.slice(0, limitLen) + '...' : value
				},
				interval: opts.interval || 0,
			},
			...opts.xAxis,
			...opts.mYxAxis,
		},
    yAxis: opts.yAxis || {
			type: 'value',
			axisLabel: {
				fontSize: fontSizeWidth(14),
			},
			name: `单位：${opts.unit}`,
		},
    series:[standard].concat(opts.data.map((a:any)=>{
      return {
        barWidth:opts.barWidth || fontSizeWidth(15),
        type: 'bar',
        stack: 'Total',
        silent: true,
        data:a.data.map(i=>typeof i === 'number' ? Math.abs(i) : i),
        label:a.label
      }
    }))
    
  }

  myChart.setOption(options)
}
</script>