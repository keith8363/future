<template>
	<div class="comm-chart" ref="chart"></div>
</template>
<script setup lang="ts">
import noData from '@/assets/header/noData.png'
import { throttle } from '@/utils/debounce'
import { fontSizeWidth } from '@/utils/rem'
import * as echarts from 'echarts'
import { onMounted, onUnmounted, shallowRef, watch } from 'vue'
import { color, fontColor } from './params'
const emits = defineEmits(['getCurrentItem'])
const chart = shallowRef(null)
let myChart: any = null
const props = defineProps({
	data: {
		type: Object,
	},
})
let opts: any = {
	color: color('linear'),
	fontColor: fontColor,
	data: [],
	limitMin: 0.05,
	limitMax: 0.05,
	xAxis: {
		interval: null,
	},
	...props.data,
}
watch(
	() => props.data!,
	throttle((_o, n: any) => {
		opts = {
			...opts,
			...JSON.parse(JSON.stringify(n)),
		}
		init()
	}),
	{ deep: true }
)
onMounted(() => {
	init()
})
let isStop = false
onUnmounted(() => {
	isStop = true
	if (myChart) {
		myChart.dispose()
		myChart = null
	}
})
const init = () => {
	if (!opts.names.length && !myChart && chart.value) {
		chart.value.innerHTML = `<div class="noData"><img src="${noData}"><span class="noDataText">暂无数据</span></div>`
		return
	}
	if (myChart) {
		myChart.dispose()
	}

	if (!opts.names.length || !opts.data.length) return
	myChart = echarts.init(chart.value)
	window.addEventListener('resize', () => {
		if(myChart){
			myChart.resize()
		}
	})
	if (opts.type === 2) {
		initChat2()
	} else if (opts.type === 3) {
		initChat3()
	} else if (opts.type === 4) {
		initChat4()
	} else if (opts.type === 5) {
		initChat5()
	} else {
		initChat()
	}
}
const initChat = () => {
	const options = {
		color: opts.color,
		grid: {
			bottom: 35,
			...opts.grid,
		},
		tooltip: {
			trigger: 'axis',
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			confine: true,
			enterable: true,
			textStyle: {
				color: '#fff',
				fontSize: fontSizeWidth(18),
			},
			position: 'top',
			formatter: (data: any) => {
				let str = `${data[0].name}<br>`
				data.map((a: any) => {
					str += `${
						a.marker
					}<span style="color:#fff"><span style="width:${fontSizeWidth(
						60
					)}px;display:inline-block;">${a.seriesName}</span>`
					str += `<span style="min-width:8em;text-align:right;display:inline-block;font-weight:600">${
						a.value != 'undefined' ? a.value : '--'
					}${opts.data[a.seriesIndex].unit}</span></span><br>`
				})
				return str
			},
		},
		dataZoom: {
			start: 0,
			type: 'inside',
		},
		xAxis: {
			type: 'category',
			data: opts.names,
			boundaryGap: 0,

			axisTick: {
				show: false,
			},
			axisLabel: {
				show: true,
				fontSize: fontSizeWidth(14),
			},
			...opts.xAxis,
		},
		yAxis: opts.yAxis || {
			type: 'value',
			name: `单位：${opts.unit}`,
		},
		legend: {
			right: fontSizeWidth(50),
			top: fontSizeWidth(10),
			itemGap: fontSizeWidth(15),
			itemHeight: fontSizeWidth(15),
			itemWidth: fontSizeWidth(15),
			icon: 'rect',
			textStyle: {
				fontSize: fontSizeWidth(16),
			},
			...opts.legend,
		},
		series: opts.data.map((a: any, index: number) => {
			return {
				barWidth: fontSizeWidth(25),
				showSymbol: a.symbol,
				symbol: a.symbol,
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				/* areaStyle:{
                        color:opts.color[index]
                    }, */
				markPoint: a.markPoint,
				...a,
				emphasis: {
					showSymbol: true,
					itemStyle: {
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
				smooth: true,
				showBackground: true,
				backgroundStyle: {
					color: 'rgba(180, 180, 180, 0.2)',
					shadowColor: 'rgba(180, 180, 180, 1)',
				},
				itemStyle: {
					borderColor: '#fff',
					borderRadius: [fontSizeWidth(4), fontSizeWidth(4), 0, 0],
				},
				lineStyle: {
					width: fontSizeWidth(2),
				},
			}
		}),
	}
	myChart.setOption(options)
	let index = 0,
		timer: any = null
	const fn = () => {
		if (isStop) return
		if (index == opts.data.length) {
			index = 0
		}
		myChart.dispatchAction({
			type: 'highlight',
			seriesIndex: [0],
			dataIndex: index,
		})
		myChart.dispatchAction({
			type: 'showTip',
			seriesIndex: [0],
			dataIndex: index,
		})
		if (timer) {
			clearTimeout(timer)
		}
		if (isStop) return
		timer = setTimeout(() => {
			index++
			fn()
		}, 1000)
	}
	// fn();
}
const initChat2 = () => {
	if (opts.limitMaxMin && opts.yAxis.length && opts.yAxis[0]) {
		let yAxisData:any[] = []
		opts.data.map((a) => {
			if ((a.yAxisIndex == 0 || !a.yAxisIndex)&&a.data) {
				yAxisData = yAxisData.concat(a.data.filter(a => a !== ''))
			}
		})
		const originMin = yAxisData.reduce((s, a) => (!a || s < Number(a) ? s : Number(a)),Number(yAxisData[0])),
					originMax =  yAxisData.reduce((s, a) => (s > Number(a) ? s : Number(a)),0),originDiff = originMax - originMin;
		let diff = 0;
		let dot = 0;
		let min = originMin;
		let max = originMax;
		if(diff === 0){
			diff = originMin
		}
		if(originDiff>0.5&&originDiff<=2){
			dot = 1
		}else if(originDiff > 0.01&&originDiff <= 0.5){
			dot = 2;
		}else if(originDiff > 0.001&&originDiff <= 0.01){
			dot = 3;
		}else if(originDiff == 0){
			dot = 1;
		}
		if(originDiff>0.01&&originDiff<=0.1){
			diff = 0.01;
		}else if(originDiff>0.1&&originDiff<=2){
			diff = originDiff / 3;
		}else  if(originDiff > 2&&originDiff <= 100){
			diff = originDiff / 3;
		}else if(originDiff > 100){
			diff = originDiff / 3;
		}
		opts.yAxis[0].max = (max + diff).toFixed(dot);
		opts.yAxis[0].min = (min - diff).toFixed(dot);
		if(Number(opts.yAxis[0].min) <= 0&&originMin>=0){
			opts.yAxis[0].min = 0;
		}
	}
	if (opts.limitMaxMin && opts.yAxis.length && opts.yAxis[1]) {
		let yAxisData = []
		opts.data.map((a) => {
			if (a.yAxisIndex == 1) {
				yAxisData = yAxisData.concat(a.data)
			}
		})
		opts.yAxis[1].max = yAxisData.reduce(
			(s, a) => (s > Number(a) ? s : Number(a)),
			0
		)
		if(opts.yAxis[1].dot != undefined&&opts.yAxis[1].dot === 0){
			opts.yAxis[1].max = (
				opts.yAxis[1].max +
				opts.yAxis[1].max * opts.limitMax
			).toFixed(0)
			opts.yAxis[1].min = (
				yAxisData.reduce(
					(s, a) => (!a || s < Number(a) ? s : Number(a)),
					Number(yAxisData[0])
				) -
				opts.yAxis[1].max * opts.limitMin
			).toFixed(0)
		}else{
			opts.yAxis[1].max = (
			opts.yAxis[1].max +
			opts.yAxis[1].max * opts.limitMax
			).toFixed(1)
			opts.yAxis[1].min = (
				yAxisData.reduce(
					(s, a) => (!a || s < Number(a) ? s : Number(a)),
					Number(yAxisData[0])
				) -
				opts.yAxis[1].min * opts.limitMin
			).toFixed(0)
		}
		
	}
	const options = {
		color: opts.color,
		grid: {
			bottom: fontSizeWidth(40),
			...opts.grid,
		},
		tooltip: {
			trigger: 'axis',
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			confine: true,
			enterable: true,
			textStyle: {
				color: '#fff',
				fontSize: fontSizeWidth(18),
			},
			position: 'top',
			formatter: (data: any) => {
				let str = `${data[0].name.replace(/\n/gi,'')}<br>`
				data.map((a: any) => {
					str += `${
						a.marker
					}<span style="color:#fff"><span style="width:12em;display:inline-block;;font-size: ${fontSizeWidth(
						18
					)}px">${a.seriesName}</span>`
					str += `<span style="text-align:right;display:inline-block;font-weight:600;font-size: ${fontSizeWidth(
						18
					)}px">${a.value != 'undefined'&&a.value != undefined && a.value ? a.value : '-'}${
						opts.data[a.seriesIndex].unit
					}</span></span><br>`
				})
				return str
			},
		},
		dataZoom: {
			show: (opts.dataZoom && opts.dataZoom.show) || false,
			type: 'slider',
			bottom: fontSizeWidth(20),
			right: fontSizeWidth(15),
			left: fontSizeWidth(15),
			height: fontSizeWidth(0),
			zoomLock: true,
			startValue: !opts.dataZoom ? 0 : 100,
			endValue: !opts.dataZoom ? 100 : 90,
			brushSelect: true,
			showDetail: false,
			moveHandleSize: fontSizeWidth(13),
			zoomOnMouseWheel: true,
			moveHandleStyle: {
				borderWidth: fontSizeWidth(2),
				color: '#7d74fa',
			},
			handleStyle: {
				borderWidth: 0,
			},
			brushStyle: {
				borderWidth: 0,
			},
			xAxisIndex: 0,
			...opts.dataZoom,
		},
		xAxis: {
			type: 'category',
			data: opts.names,
			// boundaryGap: 0,
			boundaryGap: ['30%', '10%'],
			axisTick: {
				show: false,
			},
			axisLabel: {
				interval: opts.xAxis.interval,
				show: true,
				fontSize: opts.xAxis.fontSize || fontSizeWidth(14),
			},
			...opts.xAxis,
		},
		yAxis: opts.yAxis || {
			type: 'value',
			name: `单位：${opts.unit}`,
		},
		legend: {
			right: fontSizeWidth(50),
			top: fontSizeWidth(10),
			itemGap: fontSizeWidth(13),
			itemHeight: fontSizeWidth(13),
			itemWidth: fontSizeWidth(13),
			textStyle: {
				fontSize: fontSizeWidth(14),
			},
			...opts.legend,
		},
		visualMap: opts.visualMap || [],
		series: opts.data.map((a: any, index: number) => {
			return {
				barWidth: fontSizeWidth(25),
				symbolSize: a.symbolSize,
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				barCategoryGap: -(index + 1) * 0.5,
				areaStyle: {},
				markPoint: a.markPoint,
				emphasis: {
					showSymbol: true,
					itemStyle: {
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
				smooth: true,
				showBackground: true,
				backgroundStyle: {
					color: 'rgba(180, 180, 180, 0.2)',
					shadowColor: 'rgba(180, 180, 180, 1)',
				},
				itemStyle: {
					borderColor: '#fff',
					borderRadius: [fontSizeWidth(4), fontSizeWidth(4), 0, 0],
				},
				lineStyle: {
					width: fontSizeWidth(2),
				},
				...a,
			}
		}),
	}
	myChart.setOption(options)
	myChart.off('click')
	myChart.getZr().on('click', function (params: any) {
		const pointInPixel = [params.offsetX, params.offsetY]
		if (myChart.containPixel('grid', pointInPixel)) {
			const xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [
				params.offsetX,
				params.offsetY,
			])[0]
			emits('getCurrentItem', xIndex)
		}
	})
}
const initChat3 = () => {
	let min1 = Math.min(...opts.data[0].value)
	let max1 = Math.max(...opts.data[0].value)
	let min2 = Math.min(...opts.data[1].value)
	let max2 = Math.max(...opts.data[1].value)
	// let min3 = Math.min(...opts.data[2].value)
	// let max3 = Math.max(...opts.data[2].value)

	const options = {
		grid: {
			top: opts.grid.top || '20%',
			left: fontSizeWidth(0),
			right: fontSizeWidth(0),
			bottom: fontSizeWidth(18),
			containLabel: true,
			...opts.grid,
		},
		tooltip: {
			trigger: 'axis',
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			textStyle: {
				color: '#fff',
				fontSize: fontSizeWidth(14),
			},
			position: 'top',
			formatter: (data: any) => {
				let str = `${data[0].name}<br>`
				data.map((a: any, index: number) => {
					str += `${a.marker}<span style="color:#fff">${
						a.seriesName
					} <span style="width:70px;padding-right:20px;text-align:right;display:inline-block;font-weight:600">${
						a.value
					} ${opts.data[a.seriesIndex].unit}</span></span><br>`
				})
				return str
			},
			...opts.tooltip,
		},
		legend: [
			{
				top: 'top',
				left: 'center',
				orient: 'horizontal',
				itemWidth: 15,
				itemHeight: 10,
				itemGap: 15,
				borderRadius: 4,
				textStyle: {
					color: '#000',
					fontFamily: 'Alibaba PuHuiTi',
					fontSize: 14,
					fontWeight: 400,
				},
			},
		],
		// dataZoom: [
		// 	{
		// 		// 设置滚动条的隐藏与显示
		// 		show: false,
		// 		// 设置滚动条类型
		// 		type: 'slider',
		// 		showDetail: false,
		// 		// 数据窗口范围的起始数值
		// 		startValue: 0,
		// 		// 数据窗口范围的结束数值（一页显示多少条数据）
		// 		endValue: 6,
		// 		// empty：当前数据窗口外的数据，被设置为空。
		// 		// 即不会影响其他轴的数据范围
		// 		filterMode: 'empty',
		// 		// 是否锁定选择区域（或叫做数据窗口）的大小
		// 		zoomLoxk: true,
		// 		// 控制手柄的尺寸
		// 		handleSize: 0,
		// 		// dataZoom-slider组件离容器下侧的距离
		// 		bottom: 0,
		// 	},
		// 	{
		// 		// 没有下面这块的话，只能拖动滚动条，
		// 		// 鼠标滚轮在区域内不能控制外部滚动条
		// 		type: 'inside',
		// 		// 滚轮是否触发缩放
		// 		zoomOnMouseWheel: false,
		// 		// 鼠标滚轮触发滚动
		// 		moveOnMouseMove: true,
		// 		moveOnMouseWheel: true,
		// 	},
		// ],
		color: opts.color,
		xAxis: {
			type: 'category',
			data: opts.names || [],

			axisLine: {
				show: false,
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
				show: true,
				// interval: 0,
				// rotate: 45, // 将标签逆时针旋转45度
				textStyle: {
					color: '#393939', //X轴文字颜色
				},
			},
			...opts.xAxis,
		},
		yAxis: opts.yAxis || [
			{
				type: 'value',
				name: `y1`,
				show: false,
				min: min1,
				max: max1,
			},
			{
				type: 'value',
				name: `y2`,
				show: false,
				min: min2,
				max: max2,
			},
			// {
			// 	type: 'value',
			// 	name: `y3`,
			// 	show: false,
			// 	min: min3,
			// 	max: max3,
			// },
		],
		series: opts.data.map((item) => {
			return {
				name: item.name,
				type: 'line',
				data: item.value,
				yAxisIndex: item.yAxisIndex, // 使用第一个 Y 轴
			}
		}),
	}
	myChart.setOption(options)
	// debugger
}

const initChat4 = () => {
	let min1 = Math.min(...opts.data[0].value)
	let max1 = Math.max(...opts.data[0].value)
	let min2 = Math.min(...opts.data[1].value)
	let max2 = Math.max(...opts.data[1].value)
	const options = {
		grid: {
			top: opts.grid.top || '20%',
			left: fontSizeWidth(0),
			right: fontSizeWidth(0),
			bottom: fontSizeWidth(18),
			containLabel: true,
			...opts.grid,
		},
		tooltip: {
			trigger: 'axis',
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			textStyle: {
				color: '#fff',
				fontSize: fontSizeWidth(14),
			},
			position: 'top',
			formatter: (data: any) => {
				let str = `${data[0].name}<br>`
				data.map((a: any, index: number) => {
					str += `${a.marker}<span style="color:#fff">${
						a.seriesName
					} <span style="width:70px;padding-right:20px;text-align:right;display:inline-block;font-weight:600">${
						a.value
					} ${opts.data[a.seriesIndex].unit}</span></span><br>`
				})
				return str
			},
			...opts.tooltip,
		},
		legend: [
			{
				top: 'top',
				left: 'center',
				orient: 'horizontal',
				itemWidth: 15,
				itemHeight: 10,
				itemGap: 15,
				borderRadius: 4,
				textStyle: {
					color: '#000',
					fontFamily: 'Alibaba PuHuiTi',
					fontSize: 14,
					fontWeight: 400,
				},
			},
		],
		color: opts.color,
		xAxis: {
			type: 'category',
			data: opts.names || [],

			axisTick: {
				show: false,
			},
			axisLabel: {
				show: true,
				interval: 0,
				// rotate: 45, // 将标签逆时针旋转45度
				fontSize: fontSizeWidth(12),
			},
			...opts.xAxis,
		},
		yAxis: opts.yAxis || [
			{
				type: 'value',
				name: `y1`,
				show: false,
				min: min1,
				max: max1,
			},
			{
				type: 'value',
				name: `y2`,
				show: false,
				min: min2,
				max: max2,
			},
		],
		series: opts.data.map((item) => {
			return {
				name: item.name,
				type: 'line',
				data: item.value,
				yAxisIndex: item.yAxisIndex, // 使用第一个 Y 轴
			}
		}),
	}
	myChart.setOption(options)
}

const initChat5 = () => {
	if (opts.limitMaxMin && opts.yAxis.length && opts.yAxis[0]) {
		let yAxisData = []
		opts.data.map((a) => {
			if (a.yAxisIndex == 0 || !a.yAxisIndex) {
				yAxisData = yAxisData.concat(a.data)
			}
		})
		opts.yAxis[0].max = yAxisData.reduce(
			(s, a) => (s > Number(a) ? s : Number(a)),
			0
		)
		opts.yAxis[0].max = (
			opts.yAxis[0].max +
			opts.yAxis[0].max * opts.limitMax
		).toFixed(opts.yAxis[0].dot != undefined ? opts.yAxis[0].dot : 1)
		opts.yAxis[0].min = (
			yAxisData.reduce(
				(s, a) => (!a || s < Number(a) ? s : Number(a)),
				Number(yAxisData[0])
			) -
			opts.yAxis[0].max * opts.limitMin
		).toFixed(0)
	}
	if (opts.limitMaxMin && opts.yAxis.length && opts.yAxis[1]) {
		let yAxisData = []
		opts.data.map((a) => {
			if (a.yAxisIndex == 1) {
				yAxisData = yAxisData.concat(a.data)
			}
		})
		opts.yAxis[1].max = yAxisData.reduce(
			(s, a) => (s > Number(a) ? s : Number(a)),
			0
		)
		opts.yAxis[1].max = (
			opts.yAxis[1].max +
			opts.yAxis[1].max * opts.limitMax
		).toFixed(1)
		opts.yAxis[1].min = (
			yAxisData.reduce(
				(s, a) => (!a || s < Number(a) ? s : Number(a)),
				Number(yAxisData[0])
			) -
			opts.yAxis[1].max * opts.limitMin
		).toFixed(0)
	}
	const options = {
		color: opts.color,
		grid: {
			bottom: fontSizeWidth(40),
			...opts.grid,
		},
		tooltip: {
			trigger: 'axis',
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			confine: true,
			enterable: true,
			textStyle: {
				color: '#fff',
				fontSize: fontSizeWidth(18),
			},
			position: 'top',
			formatter: (data: any) => {
				let str = `${data[0].name}<br>`
				data.map((a: any) => {
					str += `${
						a.marker
					}<span style="color:#fff"><span style="width:10em;display:inline-block;;font-size: ${fontSizeWidth(
						18
					)}px">${a.seriesName}</span>`
					str += `<span style="text-align:right;display:inline-block;font-weight:600;font-size: ${fontSizeWidth(
						18
					)}px">${a.value != 'undefined' && a.value ? a.value : '--'}${
						opts.data[a.seriesIndex].unit
					}</span></span><br>`
				})
				return str
			},
		},
		dataZoom: {
			show: (opts.dataZoom && opts.dataZoom.show) || false,
			type: 'slider',
			bottom: fontSizeWidth(20),
			right: fontSizeWidth(15),
			left: fontSizeWidth(15),
			height: fontSizeWidth(0),
			zoomLock: true,
			startValue: !opts.dataZoom ? 0 : 100,
			endValue: !opts.dataZoom ? 100 : 90,
			brushSelect: true,
			showDetail: false,
			moveHandleSize: fontSizeWidth(13),
			zoomOnMouseWheel: true,
			moveHandleStyle: {
				borderWidth: fontSizeWidth(2),
				color: '#7d74fa',
			},
			handleStyle: {
				borderWidth: 0,
			},
			brushStyle: {
				borderWidth: 0,
			},
			xAxisIndex: 0,
			...opts.dataZoom,
		},
		xAxis: {
			type: 'category',
			data: opts.names,
			// boundaryGap: 0,
			boundaryGap: ['30%', '10%'],
			axisTick: {
				show: false,
			},
			axisLabel: {
				interval: opts.xAxis.interval,
				show: true,
				fontSize: fontSizeWidth(14),
			},
			...opts.xAxis,
		},
		yAxis: opts.yAxis || {
			type: 'value',
			name: `单位：${opts.unit}`,
		},
		legend: {
			right: fontSizeWidth(50),
			top: fontSizeWidth(10),
			itemGap: fontSizeWidth(13),
			itemHeight: fontSizeWidth(13),
			itemWidth: fontSizeWidth(13),
			textStyle: {
				fontSize: fontSizeWidth(14),
			},
			...opts.legend,
		},
		visualMap: opts.visualMap || [],
		series: opts.data.map((a: any, index: number) => {
			return {
				smooth: false, //平滑曲线显示
				symbol: 'circle', //标记的图形为实心圆
				symbolSize: fontSizeWidth(6), //标记的大小
				itemStyle: {
					normal: {
						color: '#72A9FE',
						borderColor: 'rgba(114, 169, 254, 0.5)', //圆点透明 边框
						borderWidth: 7,
					},
				},
				lineStyle: {
					color: '#72A9FE',
				},
				...a,
			}
		}),
	}
	myChart.setOption(options)
	myChart.off('click')
	myChart.getZr().on('click', function (params: any) {
		const pointInPixel = [params.offsetX, params.offsetY]
		if (myChart.containPixel('grid', pointInPixel)) {
			const xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [
				params.offsetX,
				params.offsetY,
			])[0]
			emits('getCurrentItem', xIndex)
		}
	})
}
</script>
<style lang="scss" scope>
.comm-chart {
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--el-text-color-secondary);
	font-size: 14px;
	.noData {
		margin-top: -10 px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		img {
			width: 70 px;
			height: 70 px;
		}
		.noDataText {
			line-height: 50 px;
			padding-left: 10 px;
			font-size: 16 px;
		}
	}
}
</style>