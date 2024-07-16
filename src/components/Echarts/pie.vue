<template>
	<div class="comm-chart" ref="chart"></div>
</template>
<script setup lang="ts">
import noData from '@/assets/header/noData.png'
import { throttle } from '@/utils/debounce'
import { fontSizeWidth } from '@/utils/rem'
import * as echarts from 'echarts'
import { onMounted, onUnmounted, shallowRef, watch } from 'vue'
import nextImg from './images/next.png'
import prevImg from './images/prev.png'
import { color, fontColor } from './params'
const emits = defineEmits(['getCurrentItem'])

const chart = shallowRef(null)

const chartInstance = shallowRef(null)
let myChart: any = null

const props = defineProps({
	data: {
		type: Object,
	},
	top: Number,
	isPropsStop: {
		type: Boolean,
		default: true,
	},
	fontSize: { type: Number, default: 0 },
})
let opts: any = {
	type: 1,
	color: color(),
	fontColor: fontColor,
	timer: 5000,
	data: [],
	...props.data,
}
watch(
	props.data,
	throttle((_o, n: any) => {
		opts = {
			...opts,
			...JSON.parse(JSON.stringify(n)),
		}
		init()
	}),
	{
		deep: true,
	}
)
onMounted(() => {
	init()
	chartInstance.value = myChart
})
let isStop = false
onUnmounted(() => {
	isStop = true
})
const init = () => {
	if (!opts.data.length && !myChart) {
		chart.value.innerHTML = `<div class="noData"><img src="${noData}"><span class="noDataText">暂无数据</span></div>`
		return
	}
	// if (!opts.data.length) {
	// 	chart.value.innerHTML = `<div class="noData"><img src="${noData}"><span class="noDataText">暂无数据</span></div>`
	// 	return
	// }
	if (myChart) {
		myChart.clear()
	} else {
		myChart = echarts.init(chart.value)
		window.addEventListener(
			'resize',
			() => {
				myChart.resize()
			},
			false
		)
	}

	if (opts.type === 2) {
		initChat2()
	} else if (opts.type === 3) {
		initChat3()
	} else if (opts.type === 4) {
		initChat4()
	} else if (opts.type === 5) {
		// 重要代码勿动
		initChat5()
	} else if (opts.type === 6) {
		initChat6()
	} else if (opts.type === 7) {
		initChat7()
	} else if (opts.type === 8) {
		initChat8()
	} else if (opts.type === 9) {
		initChat9()
	} else if (opts.type === 10) {
		initChat10()
	} else if (opts.type === 11) {
		initChat11()
	} else if (opts.type === 12) {
		initChat12()
	} else if (opts.type === 13) {
		initChat13()
	} else if (opts.type === 14) {
		initChat14()
	} else if (opts.type === 15) {
		initChat15()
	} else if(opts.type === 16) {
		initChat16()
	}else {
		initChat()
	}
}
const initChat = () => {
	const sum = opts.data.reduce((s: number, a: any) => s + a.value, 0)
	const options = {
		color: opts.color,
		title: {
			text: opts.data[0].name,
			textStyle: {
				color: opts.fontColor,
				fontSize: opts.textStyleSize || fontSizeWidth(14),
				fontWeight: 400,
				lineHeight: fontSizeWidth(25),
			},
			subtext: `${((opts.data[0].value * 100) / sum).toFixed(2)}%`,
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
		tooltip: {
			show: false,
			trigger: 'item',
			confine: true,
			...opts.tooltip,
		},
		legend: {
			// orient: 'vertical',
			// type: 'scroll',
			// left: 'center',
			left: fontSizeWidth(3),
			bottom: fontSizeWidth(opts.labelBottom || '0'),
			itemGap: fontSizeWidth(10),
			itemHeight: fontSizeWidth(15),
			itemWidth: fontSizeWidth(15),
			textStyle: {
				color: opts.fontColor,
				align: 'left',
				rich: {
					a: {
						width: fontSizeWidth(160),
						fontSize: fontSizeWidth(16),
						fontWeight: 600,
					},
					b: {
						fontSize: fontSizeWidth(16),
						width: fontSizeWidth(60),
						padding: [0, 0, 0, fontSizeWidth(20)],
					},
					c: {
						fontSize: fontSizeWidth(16),
						width: fontSizeWidth(100),
						align: 'right',
					},
				},
			},

			data: opts.data.map((r) => r.name),
			formatter: (name) => {
				if (name) {
					const data1 = opts.data.find((a) => a.name === name)
					let zw = ''
					for (let i = String(data1.value).length + name.length; i < 20; i++) {
						zw += ''
					}
					return `{a| ${name}}{b|${zw}${data1.value}${opts.unit}} {c|${(
						(data1.value * 100) /
						sum
					).toFixed(2)}%}`
				}
			},
			...opts.legend,
		},

		series: [
			{
				name: opts.title,
				type: 'pie',
				center: opts.center || ['50%', '35%'],
				radius: opts.radius || ['43%', '60%'],
				labelLine: {
					show: false,
				},
				tooltip: {
					show: true,
				},
				label: {
					show: false,
				},
				data: opts.data,
				emphasis: {
					itemStyle: {
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
				itemStyle: {
					borderColor: '#fff',
					borderRadius: 4,
				},
				selectedMode: 'single',
				select: {
					disabled: false,
				},
			},
			{
				type: 'pie',
				center: opts.center || ['50%', '35%'],
				radius: '25%',
				tooltip: {
					show: false,
				},
				legend: {
					show: false,
				},
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				data: [100],
				itemStyle: {
					color: {
						type: 'radial',
						x: 0.5,
						y: 0.5,
						r: 0.5,
						colorStops: [
							{
								offset: 0,
								color: '#fff', // 0% 处的颜色
							},
							{
								offset: 0.4,
								color: '#fff', // 0% 处的颜色
							},
							{
								offset: 1,
								color: '#E3E8FF', // 100% 处的颜色
							},
						],
						global: false, // 缺省为 false
					},
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.1)',
				},
				emphasis: {
					disabled: true,
				},
			},
			{
				type: 'pie',
				center: opts.center || ['50%', '35%'],
				radius: ['35%', '36%'],
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				tooltip: {
					show: false,
				},
				data: [
					{
						value: 100,
						itemStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 1,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.4,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#6A70BE', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
					{
						value: 100,
						itemStyle: {
							color: {
								type: 'linear',
								x: 1,
								y: 0,
								x2: 0,
								y2: 0,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.4,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#6A70BE', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
					{
						value: 100,
						itemStyle: {
							color: {
								type: 'linear',
								x: 1,
								y: 1,
								x2: 1,
								y2: 0,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.6,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#6A70BE', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
				],
				emphasis: {
					disabled: true,
				},
			},
		],
	}
	myChart.setOption(options)
	myChart.on('highlight', (data: any) => {
		if (!opts.data[data.dataIndex]) return
		options.title.text = opts.data[data.dataIndex].name
		options.title.subtext = `${(
			(opts.data[data.dataIndex].value * 100) /
			sum
		).toFixed(2)}%`
		myChart.setOption(options)
	})
	myChart.setOption(options)
	myChart.off('click')
	myChart.on('click', function (params: any) {
		myChart.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: params.dataIndex,
		})
	})
	let index = 0,
		timer: any = null
	const fn = () => {
		if (isStop || !myChart) return
		if (index == opts.data.length) {
			index = 0
		}
		myChart.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: index,
		})
		new Promise((resolve, reject) => {
			isStop = true
			timer = window.setTimeout(() => {
				window.clearTimeout(timer)
				if (!myChart) return
				resolve()
			}, opts.timer)
		}).then(() => {
			isStop = false
			myChart.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: index,
			})
			index++
			fn()
		})
	}

	if (opts.timer && !timer) {
		fn()
	}
	//
}
const initChat2 = () => {
	const sum = opts.data.reduce(
		(s: number, a: any) =>
			s + parseFloat((a.value1 + '').replace(/[^\d|/.]/gi, '')),
		0
	)
	const data = props.isPropsStop
		? opts.data
				.sort((a, b) => Number(a.value1) - Number(b.value1))
				.map((item: any, index) => {
					item.percent = '0%'
					if (item.value1) {
						let value = Math.abs(
							parseFloat((item.value1 + '').replace(/[^\d|/.]/gi, ''))
						)
						item.percent = (sum ? (value * 100) / sum : 0).toFixed(2) + '%'
					}
					item.value = item.value1 == 0 ? 0 : index + 1
					return item
				})
		: opts.data.map((item: any, index) => {
				item.percent = '0%'
				if (item.value1) {
					let value = Math.abs(
						parseFloat((item.value1 + '').replace(/[^\d|/.]/gi, ''))
					)
					item.percent = ((value * 100) / sum).toFixed(2) + '%'
				}
				item.value = index + 1
				return item
		  })
	const options = {
		color: opts.color,
		tooltip: {
			trigger: 'item',
			confine: true,
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			textStyle: {
				color: '#fff',
			},
			formatter: (data: any) => {
				return `
				${data.marker.replace(/10px/gi, fontSizeWidth(10) + 'px')}
				<span style="font-size: ${fontSizeWidth(18)}px;padding-bottom:${fontSizeWidth(
					20
				)}px">${data.name}</span>
				${opts.tooltip && opts.tooltip.inline ? '' : `<br>`}
				
				<span style="color:#fff;font-size: ${fontSizeWidth(18)}px">
					<span style="width:${fontSizeWidth(
						opts.tooltip && opts.tooltip.inline ? 0 : 120
					)}px;display:inline-block;">${
					opts.tipName ? opts.tipName : '人数'
				}</span>
					<span style="width:${fontSizeWidth(
						120
					)}px;text-align:right;display:inline-block;font-weight:600;font-size: ${fontSizeWidth(
					18
				)}px">
						${data.data.value2 || data.data.value1}${opts.unit}
					</span>
				</span>
				${opts.tooltip && opts.tooltip.inline ? '' : '<br>'}
			
				<span style="color:#fff;font-size: ${fontSizeWidth(
					18
				)}px;padding-left:${fontSizeWidth(16)}px;padding-top:10px">
				${
					opts.tooltip && opts.tooltip.inline
						? ''
						: '<span style="width:${fontSizeWidth(120)}px;display:inline-block;">占比</span>'
				} 
					<span style="width:${fontSizeWidth(
						opts.tooltip && opts.tooltip.inline ? 80 : 120
					)}px;text-align:right;display:inline-block;font-weight:600;font-size: ${fontSizeWidth(
					18
				)}px">
						${data.data.percent}
					</span>
				</span>`
			},
			...opts.tooltip,
		},
		title: {
			text: opts?.title,
			textStyle: {
				color: opts.fontColor,
				fontSize: fontSizeWidth(16),
				fontWeight: 600,
				lineHeight: fontSizeWidth(35),
			},
			left: opts.titleLeft || 'center',
			top: opts.titleTop || '62%',
		},
		legend: {
			left: fontSizeWidth(3),
			bottom: fontSizeWidth(opts.labelBottom || '0'),
			itemGap: fontSizeWidth(12),
			itemHeight: fontSizeWidth(15),
			itemWidth: fontSizeWidth(15),
			pageIcons: {
				vertical: [`image://${prevImg}`, `image://${nextImg}`],
			},
			textStyle: {
				color: opts.fontColor,
				fontSize: fontSizeWidth(12),
				align: 'left',
				rich: {
					a: {
						width: fontSizeWidth(150),
						fontSize: fontSizeWidth(16),
						fontWeight: 600,
					},
					b: {
						fontSize: fontSizeWidth(16),
						width: fontSizeWidth(60),
						padding: [0, 0, 0, fontSizeWidth(20)],
					},
					c: {
						fontSize: fontSizeWidth(16),
						width: fontSizeWidth(100),
						align: 'right',
					},
				},
			},
			data: opts.data.map((r) => r.name),
			// 参数:customLayout 判断legend的每个项是否采取纵向布局
			formatter:
				opts.legend && opts.legend.customLayout
					? (name: any) => {
							const data1 = data.find((a: any) => a.name === name)
							return `{a|${name}}\n{b|${data1.value1}${opts.unit}}\n{c|${data1.percent}}`
					  }
					: (name: any) => {
							const maxName = opts.data.reduce(
								(s: number, a: any) => (s > a.name.length ? s : a.name.length),
								0
							)
							const maxValue = opts.data.reduce(
								(s: number, a: any) =>
									s > String(a.value).length ? s : String(a.value1).length,
								0
							)
							const data1 = opts.data.find((a: any) => a.name === name)
							let zw = '',
								zv = ''
							for (let i = name.length; i < maxName; i++) {
								zw += '   '
							}
							for (let i = String(data1.value1).length; i < maxValue; i++) {
								zv += ''
							}
							return `{a|${name}${zw}}{b|${data1.value1}${opts.unit}}\t\t\t\t\t\t\t\t\t\t\t\t${zv}{c|${data1.percent}}   `
					  },
			...opts.legend,
		},
		toolbox: {
			show: opts.download ? opts.download.show : false,
			// itemSize:fontSizeWidth(36),
			feature: {
				saveAsImage: {
					show: true,
					type: 'png',
					title: '导出',
					preventDefault: true,
					name: opts.download ? opts.download.title : opts.title || '',
					pixelRatio: 2,
					nameText: '导出',
					excludeComponents: ['toolbox'],
					backgroundColor: '#fff',
					// icon:Download,
				},
				dataView: {
					show: false,
				},
			},
			...opts.download,
		},
		series: [
			{
				name: opts.title,
				type: 'pie',
				selectedMode: 'single',
				center: opts.center || ['50%', '35%'],
				radius: opts.radius || ['18%', '50%'],
				roseType: opts.roseType != undefined ? opts.roseType : 'area',
				label: {
					show: (opts.label && opts.label.show) || false,
					formatter: ({ data }) => {
						return `{c|${data.value2 || data.value1}${
							data.unit ? data.unit : ''
						}}  \t\t\t{a|${data.percent}} \n{b|${data.name}} `
					},
					rich: {
						a: {
							color: 'rgb(98,137,169)',
							fontSize: fontSizeWidth(12),
							fontWeight: 'bold',
							width: fontSizeWidth(30),
							lineHeight: fontSizeWidth(5),
						},
						c: {
							color: '#0B0F5A',
							fontSize: fontSizeWidth(18),
							fontWeight: 'bold',
							lineHeight: fontSizeWidth(5),
						},
						b: {
							color: 'rgb(98,137,169)',
							fontSize: fontSizeWidth(14),
							padding: [0, 0, 0, 0],
							height: fontSizeWidth(25),
						},
					},
				},
				labelLine: {
					show: (opts.labelLine && opts.labelLine.show) || false,
					lineStyle: {
						color: 'rgb(98,137,169)',
					},
					smooth: 0.2,
					length: 20,
					length2: 15,
				},
				data: data,
				emphasis: {
					itemStyle: {
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
				itemStyle: {
					borderColor: '#fff',
					borderRadius: 4,
				},
				zlevel: 1,
			},
			{
				type: 'pie',
				center: opts.BoxCenter || opts.center || ['50%', '35%'],
				radius: opts.BoxCenter || opts.boxCenterRadius || ['0', '66%'],
				// center:opts.center||['50%','35%'],
				// radius: ['40%','41%'],
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				tooltip: {
					show: false,
				},
				data: [
					{
						value: 1,
						itemStyle: {
							color: {
								type: 'radial',
								x: 0.5,
								y: 0.5,
								r: 0.5,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.6,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(227, 232, 255, 0.5)', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
				],
				emphasis: {
					disabled: true,
				},
				zlevel: 0,
			},
		],
	}

	myChart.setOption(options)
	myChart.off('click')
	myChart.on('click', function (params: any) {
		myChart.dispatchAction({
			type: 'highlight',
			seriesIndex: params.seriesIndex,
			dataIndex: params.dataIndex,
		})
		emits('getCurrentItem', params.data.name, {
			...params.data,
			selected: params.event.target.selected,
		})
	})
}
const initChat3 = () => {
	const sum = opts.data.reduce((s: number, a: any) => s + a.value1, 0)
	opts.data = opts.data
		.sort((a, b) => Number(a.value1) - Number(b.value1))
		.map((item: any, index) => {
			item.percent = item.value1
				? ((item.value1 * 100) / sum).toFixed(2) + '%'
				: '0%'
			item.value = index + 1
			return item
		})
	const options = {
		color: opts.color,
		tooltip: {
			trigger: 'item',
			confine: true,
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			textStyle: {
				color: '#fff',
			},
			formatter: (data: any) => {
				return `<span style="padding-bottom:${fontSizeWidth(20)}px">${
					data.name
				}</span><br>${data.marker.replace(
					/10px/gi,
					fontSizeWidth(10) + 'px'
				)} <span style="color:#fff">${
					opts.tipName ? opts.tipName : '人数'
				}<span style="width:${fontSizeWidth(
					100
				)}px;text-align:right;display:inline-block;font-weight:600">${
					data.data.value1
				}${
					opts.unit
				}</span></span><br><span style="color:#fff;padding-left:${fontSizeWidth(
					20
				)}px;">占比<span style="width:${fontSizeWidth(
					100
				)}px;text-align:right;display:inline-block;font-weight:600">${(
					(data.data.value1 * 100) /
					sum
				).toFixed(2)}%</span></span>`
			},
		},
		title: {
			text: opts.title,
			textStyle: {
				color: opts.fontColor,
				fontSize: 20,
				fontWeight: 600,
				lineHeight: 35,
			},
			left: 'center',
			top: '67%',
		},
		legend: {
			orient: 'vertical',
			type: 'scroll',
			itemWidth: fontSizeWidth(20),
			itemHeight: fontSizeWidth(20),
			itemGap: fontSizeWidth(12),
			padding: [fontSizeWidth(30), 0],
			right: fontSizeWidth(20),
			pageIcons: {
				vertical: [`image://${prevImg}`, `image://${nextImg}`],
			},
			pageIconSize: [fontSizeWidth((16 * 13) / 11), fontSizeWidth(13)],
			textStyle: {
				color: opts.fontColor,
				align: 'left',
				fontSize: fontSizeWidth(16),
				rich: {
					a: {
						width: fontSizeWidth(100),
						fontSize: fontSizeWidth(16),
					},
					b: {
						fontSize: fontSizeWidth(16),
						fontWeight: 600,
						width: fontSizeWidth(50),
						padding: [0, 0, 0, fontSizeWidth(20)],
					},
					c: {
						fontSize: fontSizeWidth(16),
						fontWeight: 600,
						width: fontSizeWidth(90),
						align: 'right',
					},
				},
			},
			data: opts.data.map((r) => r.name),
			formatter: (name) => {
				if (name) {
					const data1 = opts.data.find((a) => a.name === name)
					return `{a| ${name}}{b|${data1.value1.toFixed(1)}${
						opts.unit || ''
					}} {c|${data1.percent}%}`
				}
			},
			...opts.legend,
		},
		series: [
			{
				name: opts.title,
				type: 'pie',
				center: opts.center || ['35%', '50%'],
				radius: opts.radius || ['38%', '70%'],
				roseType: 'area',
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				data: opts.data,
				emphasis: {
					itemStyle: {
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
				itemStyle: {
					borderColor: '#fff',
					borderRadius: 4,
				},
				zlevel: 1,
			},
			{
				type: 'pie',
				center: opts.center || ['35%', '50%'],
				radius: opts.radius
					? ['0', Number(opts.radius[1].replace('%', '')) + 6 + '%']
					: ['38%', '76%'],
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				tooltip: {
					show: false,
				},
				data: [
					{
						value: 1,
						itemStyle: {
							color: {
								type: 'radial',
								x: 0.5,
								y: 0.5,
								r: 0.5,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.6,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(227, 232, 255, 0.5)', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
				],
				emphasis: {
					disabled: true,
				},
				zlevel: 0,
			},
		],
	}
	myChart.setOption(options)
	myChart.off('click')
	myChart.on('click', function (params: any) {
		emits('getCurrentItem', params.data.name)
	})
}
const initChat4 = () => {
	const options = {
		color: opts.color,
		tooltip: {
			trigger: 'item',
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			textStyle: {
				color: '#fff',
			},
		},
		title: opts.data
			.map((a: any, index: number) => {
				return {
					text: `{a|${a.data[0].value}} {b|${a.unit}}`,
					textStyle: {
						color: opts.fontColor,
						width: 200,
						rich: {
							a: {
								align: 'center',
								fontSize: 24 - props.fontSize,
								fontWeight: 600,
							},
							b: {
								color: '#788CA2',
								padding: [5, 0, props.fontSize, 0],
							},
						},
					},
					subtext: `{a|${a.data[0].name}}`,
					subtextStyle: {
						color: opts.fontColor,
						fontSize: 15 - props.fontSize,
						width: 200,
						rich: {
							a: {
								color: '#788CA2',
								align: 'center',
								fontSize: 15 - props.fontSize,
							},
						},
					},
					left: index * 34 - (opts.left || 3) + '%',
					top: props.top ? props.top + '%' : '45%',
					bottom: 0,
				}
			})
			.concat(
				opts.data.map((a: any, index: number) => {
					return {
						text: `{a|${a.name}}`,
						textStyle: {
							color: opts.fontColor,
							rich: {
								a: {
									align: 'left',
									fontSize: 16 - props.fontSize,
									fontWeight: 600,
									padding: [0, 0, 0, 50],
								},
							},
						},
						subtext: `{a|${a.data.reduce(
							(s: number, a: any) => a.value + s,
							0
						)}} {b|${a.unit}}`,
						subtextStyle: {
							color: opts.fontColor,
							fontSize: 14 - props.fontSize,
							width: 200,
							rich: {
								a: {
									color: a.color[0],
									align: 'center',
									fontSize: 30 - props.fontSize,
									fontWeight: 600,
									fontFamily: 'DIN-Bold',
								},
								b: {
									color: '#788CA2',
									padding: opts.Bpadding,
								},
							},
						},
						left: index * 34.5 + 11 + '%',
						top: props.top ? props.top + '%' : '45%',
						bottom: 0,
					}
				})
			),
		series: opts.data.map((a: any, index: number) => {
			return {
				type: 'pie',
				radius: ['80%', '100%'],
				center: ['50%', '50%'],
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				...a,
				data: a.data.map((b: any, key: number) => {
					return {
						itemStyle: {
							color: a.color[key],
						},
						...b,
					}
				}),
				left: index * 34 + 13 + '%',
				right: (opts.data.length - index) * 34 - 4 + '%',
				top: 10,
				bottom: 0,
			}
		}),
	}
	myChart.setOption(options)
	myChart.off('click')
	myChart.on('click', function (params: any) {
		emits('getCurrentItem', params.data.name)
	})
}
const initChat5 = () => {
	const sum = opts.data.reduce((s: number, a: any) => s + a.value, 0)
	const options = {
		color: opts.color,
		tooltip: {
			trigger: 'item',
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			textStyle: {
				color: '#fff',
			},
			formatter: (data: any) => {
				return `${data.name}<br>${
					data.marker
				} <span style="color:#fff">人数<span style="width:100px;text-align:right;display:inline-block;font-weight:600">${
					data.value
				}${
					opts.unit
				}</span></span><br><span style="color:#fff;padding-left:18px;">占比<span style="width:100px;text-align:right;display:inline-block;font-weight:600">${(
					(data.value * 100) /
					sum
				).toFixed(2)}%</span></span>`
			},
		},
		title: {
			text: opts?.title,
			textStyle: {
				color: opts.fontColor,
				fontSize: 20,
				fontWeight: 600,
				lineHeight: 35,
			},
			left: opts.titleLeft || 'center',
			top: opts.titleTop || '62%',
		},
		legend: {
			orient: 'vertical',
			type: 'scroll',
			// left: 'center',
			bottom: '0',
			itemGap: 8,
			itemHeight: 15,
			itemWidth: 15,
			textStyle: {
				color: opts.fontColor,
				align: 'left',
				rich: {
					a: {
						width: fontSizeWidth(150),
					},
					b: {
						fontSize: fontSizeWidth(16),
						fontWeight: 600,
						width: fontSizeWidth(60),
						padding: [0, 0, 0, fontSizeWidth(20)],
					},
					c: {
						fontSize: fontSizeWidth(16),
						fontWeight: 600,
						width: fontSizeWidth(100),
						align: 'right',
					},
				},
			},
			data: opts.data.map((r) => r.name),
			formatter: (name: string) => {
				if (name) {
					const data1 = opts.data.find((a) => a.name === name)
					let zw = ''
					for (let i = String(data1.value).length + name.length; i < 9; i++) {
						zw += ''
					}
					if (name.length > 5) {
						name = name.slice(0, 5) + '...'
					}
					return `{a| ${name}}{b|${zw}${data1.value}${opts.unit}} {c|${(
						(data1.value * 100) /
						sum
					).toFixed(2)}%}`
				}
			},
			...opts.legend,
		},
		series: [
			{
				name: opts.title,
				type: 'pie',
				center: opts.center || ['50%', '35%'],
				radius: ['18%', '50%'],
				// roseType: 'angle',
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				data: opts.data.map((item: any) => {
					item.percent = item.value
						? ((item.value * 100) / sum).toFixed(2) + '%'
						: '0%'
					item.orgnum = item.value
					return item
				}),
				emphasis: {
					itemStyle: {
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
				itemStyle: {
					borderColor: '#fff',
					borderRadius: 4,
				},
				zlevel: 1,
			},
			{
				type: 'pie',
				center: opts.center || ['50%', '35%'],
				radius: ['0', '54%'],
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				tooltip: {
					show: false,
				},
				data: [
					{
						value: 1,
						itemStyle: {
							color: {
								type: 'radial',
								x: 0.5,
								y: 0.5,
								r: 0.5,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.6,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(227, 232, 255, 0.5)', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
				],
				emphasis: {
					disabled: true,
				},
				zlevel: 0,
			},
		],
	}

	myChart.setOption(options)
	myChart.off('click')
	myChart.on('click', function (params: any) {
		emits('getCurrentItem', params.data.name)
	})
	let index = 0,
		timer: any = null
	const fn = () => {
		if (timer) {
			clearTimeout(timer)
		}
		if (isStop) return
		if (index == opts.data.length) {
			index = 0
		}
		myChart.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: index,
		})
		myChart.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index,
		})
		timer = setTimeout(() => {
			if (isStop) return
			myChart.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: index,
			})
			index++
			fn()
		}, 1000)
	}
	// fn();
}
const initChat6 = () => {
	// if (!opts.data.length) {
	// 	chart.value.innerHTML = `<div class="noData"><img src="${noData}"><span class="noDataText">暂无数据</span></div>`
	// 	return
	// }
	const sum = opts.data.reduce((s: number, a: any) => s + a.value, 0)
	const options = {
		color: opts.color,
		title: {
			text: opts.data[0]?.name,
			textStyle: {
				color: opts.fontColor,
				fontSize: opts.textStyleSize || fontSizeWidth(14),
				fontWeight: 400,
				lineHeight: fontSizeWidth(25),
			},
			textAlign: 'center',
			subtext: `${
				opts.data[0]?.value
					? ((opts.data[0]?.value * 100) / sum).toFixed(2)
					: ''
			}%`,
			subtextStyle: {
				color: opts.fontColor,
				fontSize: opts.subtextStyleSize || fontSizeWidth(24),
				fontWeight: 600,
				width: 200,
			},
			left: opts.titleLeft || 'center',
			top: opts.titleTop || opts.top || '27%',
			...opts.title,
		},
		tooltip: {
			show: false,
			trigger: 'item',
			...opts.tooltip,
		},
		legend: {
			// left: fontSizeWidth(3),
			bottom: fontSizeWidth(opts.labelBottom || '0'),
			itemGap: fontSizeWidth(12),
			itemHeight: fontSizeWidth(15),
			itemWidth: fontSizeWidth(15),
			left: 'auto',
			right: fontSizeWidth(20),
			orient: 'vertical',
			padding: [fontSizeWidth(20), 0],
			top: 'center',
			textStyle: {
				color: opts.fontColor,
				align: 'left',
				rich: {
					a: {
						width: fontSizeWidth(60),
						fontWeight: 600,
					},
					b: {
						fontSize: fontSizeWidth(16),
						width: fontSizeWidth(60),
						padding: [0, 0, 0, fontSizeWidth(20)],
					},
				},
			},
			data: opts.data.map((r) => r.name),
			formatter: (name) => {
				if (name) {
					const data1 = opts.data.find((a) => a.name === name)
					if (!data1) return
					let zw = ''
					for (let i = String(data1.value).length + name.length; i < 9; i++) {
						zw += ''
					}
					return `{a| ${name}}{b|${zw}${data1.value}${opts.unit}}`
				}
			},
			// ...opts.legend,
		},
		series: [
			{
				name: opts.title,
				type: 'pie',
				center: opts.center || ['50%', '35%'],
				radius: ['43%', '60%'],
				labelLine: {
					show: false,
				},
				tooltip: {
					show: true,
				},
				label: {
					show: false,
				},
				data: opts.data,
				emphasis: {
					itemStyle: {
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
				itemStyle: {
					borderColor: '#fff',
					borderRadius: 4,
				},
				selectedMode: 'single',
				select: {
					disabled: false,
				},
			},
			{
				type: 'pie',
				center: opts.center || ['50%', '35%'],
				radius: '25%',
				tooltip: {
					show: false,
				},
				legend: {
					show: false,
				},
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				data: [100],
				itemStyle: {
					color: {
						type: 'radial',
						x: 0.5,
						y: 0.5,
						r: 0.5,
						colorStops: [
							{
								offset: 0,
								color: '#fff', // 0% 处的颜色
							},
							{
								offset: 0.4,
								color: '#fff', // 0% 处的颜色
							},
							{
								offset: 1,
								color: '#E3E8FF', // 100% 处的颜色
							},
						],
						global: false, // 缺省为 false
					},
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.1)',
				},
				emphasis: {
					disabled: true,
				},
			},
			{
				type: 'pie',
				center: opts.center || ['50%', '35%'],
				radius: ['35%', '36%'],
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				tooltip: {
					show: false,
				},
				data: [
					{
						value: 100,
						itemStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 1,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.4,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#6A70BE', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
					{
						value: 100,
						itemStyle: {
							color: {
								type: 'linear',
								x: 1,
								y: 0,
								x2: 0,
								y2: 0,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.4,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#6A70BE', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
					{
						value: 100,
						itemStyle: {
							color: {
								type: 'linear',
								x: 1,
								y: 1,
								x2: 1,
								y2: 0,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.6,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#6A70BE', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
				],
				emphasis: {
					disabled: true,
				},
			},
		],
	}
	myChart.setOption(options)

	let index = 0,
		timer: any = null
	const fn = () => {
		if (isStop || !myChart) return
		if (index == opts.data.length) {
			index = 0
		}
		myChart.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: index,
		})
		new Promise((resolve, reject) => {
			isStop = true
			timer = window.setTimeout(() => {
				window.clearTimeout(timer)
				if (!myChart) return
				resolve()
			}, opts.timer)
		}).then(() => {
			isStop = false
			myChart.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: index,
			})
			index++
			fn()
			// myChart.setOption(options)
		})
	}
	if (opts.timer && !timer) {
		myChart.off('highlight')
		myChart.on('highlight', (data: any) => {
			if (!opts.data[data.dataIndex]) return
			options.title.text = opts.data[data.dataIndex].name
			options.title.subtext = `${(
				(opts.data[data.dataIndex].value * 100) /
				sum
			).toFixed(2)}%`
			myChart.setOption(options)
		})
		fn()
	}
	//
}
const initChat7 = () => {
	const sum = opts.data.reduce((s: number, a: any) => s + Number(a.value1), 0)
	const options = {
		color: opts.color,
		tooltip: {
			trigger: 'item',
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			textStyle: {
				color: '#fff',
			},
			formatter: (data: any) => {
				return `${data.name}<br>${data.marker.replace(
					/10px/gi,
					fontSizeWidth(10) + 'px'
				)} <span style="color:#fff">人数<span style="width:${fontSizeWidth(
					100
				)}px;text-align:right;display:inline-block;font-weight:600">${
					data.data.value1
				}${
					opts.unit
				}</span></span><br><span style="color:#fff;padding-left:${fontSizeWidth(
					20
				)}px;">占比<span style="width:${fontSizeWidth(
					100
				)}px;text-align:right;display:inline-block;font-weight:600">${(
					(data.data.value1 * 100) /
					sum
				).toFixed(2)}%</span></span>`
			},
		},
		title: {
			text: opts?.title,
			textStyle: {
				color: opts.fontColor,
				fontSize: 20,
				fontWeight: 600,
				lineHeight: 35,
			},
			left: opts.titleLeft || 'center',
			top: opts.titleTop || '62%',
		},
		legend: {
			left: fontSizeWidth(3),
			bottom: fontSizeWidth(opts.labelBottom || '0'),
			itemGap: fontSizeWidth(10),
			itemHeight: fontSizeWidth(15),
			itemWidth: fontSizeWidth(15),
			pageIcons: {
				vertical: [`image://${prevImg}`, `image://${nextImg}`],
			},
			textStyle: {
				color: opts.fontColor,
				align: 'left',
				rich: {
					a: {
						width: fontSizeWidth(60),
						fontWeight: 600,
					},
					b: {
						fontSize: fontSizeWidth(16),
						width: fontSizeWidth(60),
						padding: [0, 0, 0, fontSizeWidth(20)],
					},
				},
			},
			data: opts.data.map((r) => r.name),
			formatter: (name: any) => {
				const maxName = opts.data.reduce(
					(s: number, a: any) => (s > a.name.length ? s : a.name.length),
					0
				)
				const maxValue = opts.data.reduce(
					(s: number, a: any) =>
						s > String(a.value).length ? s : String(a.value1).length,
					0
				)
				const data1 = opts.data.find((a: any) => a.name === name)
				let zw = '',
					zv = ''
				for (let i = name.length; i < maxName; i++) {
					zw += '   '
				}
				for (let i = String(data1.value1).length; i < maxValue; i++) {
					zv += ''
				}
				return `{a|${name}${zw}}{b|${data1.value1}${opts.unit}}\t\t\t${zv}`
			},
			...opts.legend,
		},
		series: [
			{
				name: opts.title,
				type: 'pie',
				center: opts.center || ['50%', '35%'],
				radius: opts.radius || ['18%', '50%'],
				roseType: 'area',
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				data: opts.data.map((item: any, index) => {
					item.percent = item.value1
						? ((item.value1 * 100) / sum).toFixed(2) + '%'
						: '0%'
					item.orgnum = index
					return item
				}),
				emphasis: {
					itemStyle: {
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
				itemStyle: {
					borderColor: '#fff',
					borderRadius: 4,
				},
				zlevel: 1,
			},
			{
				type: 'pie',
				center: opts.BoxCenter || ['50%', '35%'],
				radius: opts.BoxRadius || opts.BoxCenter || ['0', '66%'],
				// center:opts.center||['50%','35%'],
				// radius: ['40%','41%'],
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				tooltip: {
					show: false,
				},
				data: [
					{
						value: 1,
						itemStyle: {
							color: {
								type: 'radial',
								x: 0.5,
								y: 0.5,
								r: 0.5,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.6,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(227, 232, 255, 0.5)', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
				],
				emphasis: {
					disabled: true,
				},
				zlevel: 0,
			},
		],
	}

	myChart.setOption(options)
	myChart.off('click')
	myChart.on('click', function (params: any) {
		emits('getCurrentItem', params.data.name)
	})
	let index = 0,
		timer: any = null
	const fn = () => {
		if (timer) {
			clearTimeout(timer)
		}
		if (isStop) return
		if (index == opts.data.length) {
			index = 0
		}
		myChart.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: index,
		})
		myChart.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index,
		})
		timer = setTimeout(() => {
			if (isStop) return
			myChart.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: index,
			})
			index++
			fn()
		}, 1000)
	}
}
const initChat8 = () => {
	const sum = opts.data.reduce((s: number, a: any) => s + a.value, 0)
	const options = {
		color: opts.color,
		title: {
			text: opts.data.length ? opts.data[0].name : '',
			top: '30%',
			left: '20%',
			textAlign: 'center',
			textStyle: {
				color: opts.fontColor,
				fontSize: fontSizeWidth(14),
				fontWeight: 600,
				lineHeight: fontSizeWidth(25),
			},
			subtext: ` ${(
				(opts.data.length ? opts.data[0].value * 100 : 0) / sum
			).toFixed(2)}%`,
			subtextStyle: {
				color: opts.fontColor,
				fontSize: fontSizeWidth(18),
				fontWeight: 600,
				width: 200,
			},
			...opts.title,
		},
		tooltip: {
			show: false,
			trigger: 'item',
			formatter: () => {
				return ''
			},
			...opts.tooltip,
		},
		legend: {
			orient: 'vertical',
			type: 'scroll',
			itemHeight: fontSizeWidth(15),
			itemWidth: fontSizeWidth(15),
			itemGap: fontSizeWidth(12),
			left: fontSizeWidth(260),
			padding: [fontSizeWidth(20), 0],
			bottom: fontSizeWidth(35),
			pageIcons: {
				vertical: [`image://${prevImg}`, `image://${nextImg}`],
			},
			pageIconSize: [fontSizeWidth((16 * 13) / 11), fontSizeWidth(13)],
			textStyle: {
				color: opts.fontColor,
				align: 'left',
				fontSize: fontSizeWidth(16),
				rich: {
					a: {
						width: fontSizeWidth(200),
						fontSize: fontSizeWidth(16),
					},
					b: {
						fontSize: fontSizeWidth(16),
						fontWeight: 600,
						width: fontSizeWidth(50),
						padding: [0, 0, 0, fontSizeWidth(20)],
					},
					c: {
						fontSize: fontSizeWidth(16),
						fontWeight: 600,
						width: fontSizeWidth(90),
						align: 'right',
					},
				},
			},
			data: opts.data.map((r) => r.name),
			formatter: (name) => {
				if (name) {
					const data1 = opts.data.find((a) => a.name === name)
					let zw = ''
					for (let i = String(data1.value).length + name.length; i < 9; i++) {
						zw += ''
					}
					return `{a| ${name}}{b|${zw}${data1.value.toFixed(
						opts.legend && opts.legend.dot != undefined ? opts.legend.dot : 1
					)}${opts.unit || ''}} {c|${((data1.value * 100) / sum).toFixed(2)}%}`
				}
			},
			...opts.legend,
		},
		series: [
			{
				name: opts.title,
				type: 'pie',
				selectedMode: 'single',
				center: opts.center || ['20%', '42%'],
				radius: ['58%', '75%'],
				labelLine: {
					show: false,
				},
				tooltip: {
					show: true,
				},
				label: {
					show: false,
				},
				data: opts.data,
				emphasis: {
					itemStyle: {
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
				itemStyle: {
					borderColor: '#fff',
					borderRadius: 4,
				},
			},
			{
				type: 'pie',
				center: opts.center || ['20%', '42%'],
				radius: '40%',
				tooltip: {
					show: false,
				},
				legend: {
					show: false,
				},
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				select: {
					disabled: false,
				},
				emphasis: {
					disabled: true,
				},
				data: [100],
				itemStyle: {
					color: {
						type: 'radial',
						x: 0.5,
						y: 0.5,
						r: 0.5,
						colorStops: [
							{
								offset: 0,
								color: '#fff', // 0% 处的颜色
							},
							{
								offset: 0.4,
								color: '#fff', // 0% 处的颜色
							},
							{
								offset: 1,
								color: '#E3E8FF', // 100% 处的颜色
							},
						],
						global: false, // 缺省为 false
					},
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.1)',
				},
			},
			{
				type: 'pie',
				center: opts.center || ['20%', '42%'],
				radius: ['50%', '51%'],
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				tooltip: {
					show: false,
				},
				select: {
					disabled: false,
				},
				data: [
					{
						value: 100,
						itemStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 1,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.4,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#6A70BE', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
					{
						value: 100,
						itemStyle: {
							color: {
								type: 'linear',
								x: 1,
								y: 0,
								x2: 0,
								y2: 0,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.4,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#6A70BE', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
					{
						value: 100,
						itemStyle: {
							color: {
								type: 'linear',
								x: 1,
								y: 1,
								x2: 1,
								y2: 0,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.6,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#6A70BE', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
				],
				emphasis: {
					disabled: true,
				},
			},
		],
	}
	myChart.setOption(options)
	myChart.off('legendselectchanged')
	myChart.on('legendselectchanged', (data: any) => {
		if (data.name == options.title.text && !data.selected[data.name]) {
			options.title.text = ''
			options.title.subtext = ''
			myChart.setOption(options)
			emits('getCurrentItem', {})
		}
	})
	myChart.off('click')
	myChart.on('click', function (params: any) {
		if (params.seriesIndex === 0) {
			myChart.dispatchAction({
				type: 'highlight',
				seriesIndex: 0,
				dataIndex: params.dataIndex,
			})
			emits('getCurrentItem', params)
		}
	})
	myChart.on('highlight', (data: any) => {
		if (!opts.data[data.dataIndex]) return
		options.title.text = opts.data[data.dataIndex].name
		options.title.subtext = `${(
			(opts.data[data.dataIndex].value * 100) /
			sum
		).toFixed(2)}%`
		myChart.setOption(options)
	})
}

const initChat9 = () => {
	const sum = opts.data.reduce((s: number, a: any) => s + Number(a.value1), 0)
	const options = {
		color: opts.color,
		tooltip: {
			trigger: 'item',
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			textStyle: {
				color: '#fff',
			},
			formatter: (data: any) => {
				return `<span style="padding-bottom:${fontSizeWidth(20)}px">${
					data.name
				}</span><br>${data.marker.replace(
					/10px/gi,
					fontSizeWidth(10) + 'px'
				)} <span style="color:#fff">${
					opts.tipName ? opts.tipName : '人数'
				}<span style="width:${fontSizeWidth(
					150
				)}px;text-align:right;display:inline-block;font-weight:600">${
					data.data.value1
				}${
					opts.unit
				}</span></span><br><span style="color:#fff;padding-left:${fontSizeWidth(
					20
				)}px;">占比<span style="width:${fontSizeWidth(
					150
				)}px;text-align:right;display:inline-block;font-weight:600">${(
					(data.data.value1 * 100) /
					sum
				).toFixed(2)}%</span></span>`
			},
		},
		title: {
			text: opts?.title,
			textStyle: {
				color: opts.fontColor,
				fontSize: fontSizeWidth(16),
				fontWeight: 600,
				lineHeight: fontSizeWidth(35),
			},
			left: opts.titleLeft || 'center',
			top: opts.titleTop || '62%',
		},
		legend: {
			itemGap: fontSizeWidth(12),
			right: fontSizeWidth(0),
			left: 'auto',
			orient: 'vertical',
			padding: [20, 0],
			top: 'center',
			pageIcons: {
				vertical: [`image://${prevImg}`, `image://${nextImg}`],
			},
			textStyle: {
				color: opts.fontColor,
				fontSize: fontSizeWidth(12),
				// align: 'left',
				rich: {
					a: {
						width: fontSizeWidth(60),
						fontWeight: 600,
					},
					b: {
						fontSize: fontSizeWidth(16),
						align: 'left',
						width: fontSizeWidth(76),
						padding: [0, 0, 0, fontSizeWidth(2)],
					},
					c: {
						fontSize: fontSizeWidth(16),

						width: fontSizeWidth(55),
						align: 'right',
					},
				},
			},
			data: opts.data.map((r) => r.name),
			// 参数:customLayout 判断legend的每个项是否采取纵向布局
			formatter:
				opts.legend && opts.legend.customLayout
					? (name: any) => {
							const data1 = opts.data.find((a: any) => a.name === name)
							if (!data1) return
							return `{a|${name}}\n{b|${data1.value1}${opts.unit}}\n{c|${(
								(Number(data1.value1) * 100) /
								sum
							).toFixed(2)}%}`
					  }
					: (name: any) => {
							const data1 = opts.data.find((a: any) => a.name === name)
							let zw = '',
								zv = ''
							return `{a|${name}${zw}}{b|${data1.value1}${
								opts.unit
							}}\t\t\t${zv}{c|${((Number(data1.value1) * 100) / sum).toFixed(
								2
							)}%}   `
					  },
			// ...opts.legend,
		},
		series: [
			{
				name: opts.title,
				type: 'pie',
				center: opts.center || ['50%', '35%'],
				radius: opts.radius || ['18%', '50%'],
				roseType: 'area',
				label: {
					show: (opts.label && opts.label.show) || false,
					formatter: ({ data }) => {
						return `{c|${data.value1}}\t\t\t{a|${data.percent}} \n  {b|${data.name}} `
					},
					rich: {
						a: {
							color: 'rgb(98,137,169)',
							fontSize: fontSizeWidth(12),
							fontWeight: 'bold',
							lineHeight: fontSizeWidth(5),
						},
						c: {
							color: '#0B0F5A',
							fontSize: fontSizeWidth(20),
							fontWeight: 'bold',
							lineHeight: fontSizeWidth(5),
						},
						b: {
							color: 'rgb(98,137,169)',
							fontSize: fontSizeWidth(15),
							height: fontSizeWidth(40),
						},
					},
				},
				labelLine: {
					show: (opts.labelLine && opts.labelLine.show) || false,
					lineStyle: {
						color: 'rgb(98,137,169)',
					},
					smooth: 0.2,
					length: 30,
					length2: 20,
				},
				data: opts.data.map((item: any, index) => {
					item.percent = item.value1
						? Math.abs(((item.value1 * 100) / sum).toFixed(2)) + '%'
						: '0%'
					item.value = opts.data.length - index
					return item
				}),
				emphasis: {
					itemStyle: {
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
				itemStyle: {
					borderColor: '#fff',
					borderRadius: 4,
				},
				zlevel: 1,
			},
			{
				type: 'pie',
				center: opts.BoxCenter || opts.center || ['50%', '35%'],
				radius: opts.boxCenterRadius || opts.BoxCenter || ['0', '66%'],
				// center:opts.center||['50%','35%'],
				// radius: ['40%','41%'],
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				tooltip: {
					show: false,
				},
				data: [
					{
						value: 1,
						itemStyle: {
							color: {
								type: 'radial',
								x: 0.5,
								y: 0.5,
								r: 0.5,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.6,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(227, 232, 255, 0.5)', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
				],
				emphasis: {
					disabled: true,
				},
				zlevel: 0,
			},
		],
	}
	myChart.setOption(options)
	myChart.off('click')
	myChart.on('click', function (params: any) {
		emits('getCurrentItem', params.data.name)
	})
	let index = 0,
		timer: any = null
	const fn = () => {
		if (timer) {
			clearTimeout(timer)
		}
		if (isStop) return
		if (index == opts.data.length) {
			index = 0
		}
		myChart.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: index,
		})
		myChart.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index,
		})
		timer = setTimeout(() => {
			if (isStop) return
			myChart.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: index,
			})
			index++
			fn()
		}, 1000)
	}
	// fn();
}

const initChat10 = () => {
	if (!opts.data.length) return
	const sum = opts.data.reduce((s: number, a: any) => s + a.value, 0)
	const options = {
		color: opts.color,
		title: {
			text: opts.text,
			textStyle: {
				color: opts.fontColor,
				fontSize: opts.textStyleSize || fontSizeWidth(14),
				fontWeight: 400,
				lineHeight: fontSizeWidth(5),
			},
			textAlign: 'center',
			subtext:
				opts.data[0].sub_total > 0
					? `+${opts.data[0].sub_total}${opts.unit}`
					: `${opts.data[0].sub_total}${opts.unit}`,
			subtextStyle: {
				color: opts.fontColor,
				fontSize: opts.subtextStyleSize || fontSizeWidth(24),
				fontWeight: 600,
				width: 200,
			},
			left: opts.titleLeft || 'center',
			top: opts.titleTop || opts.top || '27%',
			...opts.title,
		},
		tooltip: {
			show: false,
			trigger: 'item',
			...opts.tooltip,
		},
		legend: {
			right: fontSizeWidth(3),
			bottom: fontSizeWidth(opts.labelBottom || fontSizeWidth(10)),
			itemGap: fontSizeWidth(12),
			itemHeight: fontSizeWidth(15),
			itemWidth: fontSizeWidth(15),
			orient: 'vertical',
			textStyle: {
				color: opts.fontColor,
				align: 'left',
				rich: {
					a: {
						width: fontSizeWidth(60),
						fontWeight: 600,
					},
					b: {
						fontSize: fontSizeWidth(16),
						width: fontSizeWidth(80),
						padding: [0, 0, 0, fontSizeWidth(40)],
					},
				},
			},
			data: opts.data.map((r) => r.name),
			formatter: (name) => {
				if (name) {
					const data1 = opts.data.find((a) => a.name === name)
					let zw = ''
					for (let i = String(data1.value).length + name.length; i < 9; i++) {
						zw += ''
					}
					return `{a| ${name}}{b|${zw}${data1.value}${opts.unit}}`
				}
			},
			...opts.legend,
		},
		series: [
			{
				name: opts.title,
				type: 'pie',
				center: opts.center || ['50%', '35%'],
				radius: ['61%', '80%'],
				labelLine: {
					show: false,
				},
				tooltip: {
					show: true,
				},
				label: {
					show: false,
				},
				data: opts.data,
				emphasis: {
					itemStyle: {
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
				itemStyle: {
					borderColor: '#fff',
					borderRadius: 4,
				},
				selectedMode: 'single',
				select: {
					disabled: false,
				},
			},
			{
				type: 'pie',
				center: opts.center || ['50%', '35%'],
				radius: '55%',
				tooltip: {
					show: false,
				},
				legend: {
					show: false,
				},
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				data: [100],
				itemStyle: {
					color: {
						type: 'radial',
						x: 0.5,
						y: 0.5,
						r: 0.5,
						colorStops: [
							{
								offset: 0,
								color: '#fff', // 0% 处的颜色
							},
							{
								offset: 0.4,
								color: '#fff', // 0% 处的颜色
							},
							{
								offset: 1,
								color: '#E3E8FF', // 100% 处的颜色
							},
						],
						global: false, // 缺省为 false
					},
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.1)',
				},
				emphasis: {
					disabled: true,
				},
			},
			{
				type: 'pie',
				center: opts.center || ['50%', '35%'],
				radius: ['55%', '56%'],
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				tooltip: {
					show: false,
				},
				data: [
					{
						value: 100,
						itemStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 1,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.4,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#6A70BE', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
					{
						value: 100,
						itemStyle: {
							color: {
								type: 'linear',
								x: 1,
								y: 0,
								x2: 0,
								y2: 0,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.4,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#6A70BE', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
					{
						value: 100,
						itemStyle: {
							color: {
								type: 'linear',
								x: 1,
								y: 1,
								x2: 1,
								y2: 0,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.6,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#6A70BE', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
				],
				emphasis: {
					disabled: true,
				},
			},
		],
	}
	myChart.setOption(options)
	myChart.on('highlight', (data: any) => {
		if (!opts.data[data.dataIndex]) return
		options.title.text = opts.text
		options.title.subtext =
			opts.data[data.dataIndex].sub_total > 0
				? `+${opts.data[data.dataIndex].sub_total}${opts.unit}`
				: `${opts.data[data.dataIndex].sub_total}${opts.unit}`
		myChart.setOption(options)
	})
	let index = 0,
		timer: any = null
	const fn = () => {
		if (isStop || !myChart) return
		if (index == opts.data.length) {
			index = 0
		}
		myChart.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: index,
		})
		new Promise((resolve, reject) => {
			isStop = true
			timer = window.setTimeout(() => {
				window.clearTimeout(timer)
				if (!myChart) return
				resolve()
			}, opts.timer)
		}).then(() => {
			isStop = false
			myChart.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: index,
			})
			index++
			fn()
		})
	}
	if (opts.timer && !timer) {
		fn()
	}
	//
}

const initChat11 = () => {
	const sum = opts.data.reduce((s: number, a: any) => s + Number(a.value1), 0)
	const options = {
		color: opts.color,
		tooltip: {
			trigger: 'item',
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			textStyle: {
				color: '#fff',
			},
			formatter: (data: any) => {
				return `${data.marker.replace(
					/10px/gi,
					fontSizeWidth(12) + 'px'
				)} <span style="color:#fff">${
					data.name
				}<span style="min-width:${fontSizeWidth(
					150
				)}px;text-align:right;display:inline-block;font-weight:600">${
					data.data.value1
				}${data.data.unit || ''}</span>`
			},
		},
		title: {
			text: opts?.title,
			textStyle: {
				color: opts.fontColor,
				fontSize: fontSizeWidth(16),
				fontWeight: 600,
				lineHeight: fontSizeWidth(35),
			},
			left: opts.titleLeft || 'center',
			top: opts.titleTop || '62%',
		},
		legend: {
			left: fontSizeWidth(200),
			// top: fontSizeWidth(40),
			bottom: fontSizeWidth(30),
			itemGap: fontSizeWidth(12),
			itemHeight: fontSizeWidth(15),
			itemWidth: fontSizeWidth(15),
			orient: 'vertical',
			// type: 'scroll',
			pageIcons: {
				vertical: [`image://${prevImg}`, `image://${nextImg}`],
			},
			textStyle: {
				color: opts.fontColor,
				fontSize: fontSizeWidth(12),
				align: 'left',
				rich: {
					a: {
						width: fontSizeWidth(150),
						fontWeight: 600,
					},
					b: {
						fontSize: fontSizeWidth(16),

						width: fontSizeWidth(60),
						padding: [0, 0, 0, fontSizeWidth(20)],
					},
					c: {
						fontSize: fontSizeWidth(16),

						width: fontSizeWidth(100),
						align: 'right',
					},
				},
			},
			data: opts.data.map((r) => r.name),
			// 参数:customLayout 判断legend的每个项是否采取纵向布局
			formatter:
				opts.legend && opts.legend.customLayout
					? (name: any) => {
							const data1 = opts.data.find((a: any) => a.name === name)
							return `{a|${name}}\n{b|${data1.value1}${opts.unit}}\n{c|${(
								(Number(data1.value1) * 100) /
								sum
							).toFixed(2)}%}`
					  }
					: (name: any) => {
							const data1 = opts.data.find((a: any) => a.name === name)
							let zw = '',
								zv = ''
							return `{a|${name}${zw}}{b|${data1.value1}${data1.unit || ''}} `
					  },
			...opts.legend,
		},
		series: [
			{
				name: opts.title,
				type: 'pie',
				center: opts.center || ['50%', '35%'],
				radius: opts.radius || ['18%', '50%'],
				roseType: 'area',
				label: {
					show: (opts.label && opts.label.show) || false,
					formatter: ({ data }) => {
						if (opts.SalesAnalysis) {
							return `{c|${data.value1}${data.unit}}\t\t\t \n\n {a|${data.percent}} \n  {b|${data.name}} `
						} else {
							return `{c|${data.value1}}\t\t\t{a|${data.percent}} \n  {b|${data.name}} `
						}
					},
					rich: {
						a: {
							color: 'rgb(98,137,169)',
							fontSize: fontSizeWidth(12),
							fontWeight: 'bold',
							lineHeight: fontSizeWidth(5),
						},
						c: {
							color: '#0B0F5A',
							fontSize: opts.SalesAnalysis
								? fontSizeWidth(16)
								: fontSizeWidth(20),
							fontWeight: 'bold',
							lineHeight: fontSizeWidth(5),
						},
						b: {
							color: 'rgb(98,137,169)',
							fontSize: fontSizeWidth(15),
							height: fontSizeWidth(40),
						},
					},
				},
				labelLine: {
					show: (opts.labelLine && opts.labelLine.show) || false,
					lineStyle: {
						color: 'rgb(98,137,169)',
					},
					smooth: 0.2,
					length: 30,
					length2: 20,
				},
				data: opts.data.map((item: any, index) => {
					item.percent = item.value1
						? Math.abs(((item.value1 * 100) / sum).toFixed(2)) + '%'
						: '0%'
					item.value = index + 1
					return item
				}),
				emphasis: {
					itemStyle: {
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
				itemStyle: {
					borderColor: '#fff',
					borderRadius: 4,
				},
				zlevel: 1,
			},
			{
				type: 'pie',
				center: opts.BoxCenter || opts.center || ['50%', '35%'],
				radius: opts.boxCenterRadius || opts.BoxCenter || ['0', '86%'],
				// center:opts.center||['50%','35%'],
				// radius: ['40%','41%'],
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				tooltip: {
					show: false,
				},
				data: [
					{
						value: 1,
						itemStyle: {
							color: {
								type: 'radial',
								x: 0.5,
								y: 0.5,
								r: 0.5,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.6,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(227, 232, 255, 0.5)', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
				],
				emphasis: {
					disabled: true,
				},
				zlevel: 0,
			},
		],
	}

	myChart.setOption(options)
	myChart.off('click')
	myChart.on('click', function (params: any) {
		emits('getCurrentItem', params.data.name)
	})
	let index = 0,
		timer: any = null
	const fn = () => {
		if (timer) {
			clearTimeout(timer)
		}
		if (isStop) return
		if (index == opts.data.length) {
			index = 0
		}
		myChart.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: index,
		})
		myChart.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index,
		})
		timer = setTimeout(() => {
			if (isStop) return
			myChart.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: index,
			})
			index++
			fn()
		}, 1000)
	}
	// fn();
}
const initChat12 = () => {
	const options = {
		color: opts.color,
		tooltip: {
			trigger: 'item',
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			textStyle: {
				color: '#fff',
				fontSize: fontSizeWidth(14),
				lineHeight: fontSizeWidth(14),
			},
			confine: true,
			formatter: (data: any) => {
				console.info(data)
				return `<span style="padding-bottom:${fontSizeWidth(20)}px">${
					data.seriesName
				}</span><br>${data.marker.replace(
					/10px/gi,
					fontSizeWidth(10) + 'px'
				)} <span style="color:#fff">${
					data.name
				}<span style="width:${fontSizeWidth(
					100
				)}px;text-align:right;display:inline-block;font-weight:600">${
					data.value
				}${data.data.unit}</span></span>`
			},
		},
		title: opts.data
			.map((a: any, index: number) => {
				return {
					text: `{a|${a.data[0].value}} {b|${a.unit}}`,
					textStyle: {
						color: opts.fontColor,
						width: fontSizeWidth(300),
						rich: {
							a: {
								align: 'center',
								fontSize: fontSizeWidth(18),
								fontWeight: 600,
								lineHeight: fontSizeWidth(18),
								padding: [6, 0, fontSizeWidth(4), fontSizeWidth(0)],
							},
							b: {
								color: '#788CA2',
								lineHeight: fontSizeWidth(18),
								fontSize: fontSizeWidth(16),
								padding: [8, 0, fontSizeWidth(12), -fontSizeWidth(5)],
							},
						},
					},
					subtext: `{a|${a.data[0].name}}`,
					subtextStyle: {
						color: opts.fontColor,
						width: fontSizeWidth(300),
						fontSize: fontSizeWidth(24),
						rich: {
							a: {
								color: '#788CA2',
								align: 'center',
								lineHeight: fontSizeWidth(18),
								fontSize: fontSizeWidth(18),
								padding: [
									-fontSizeWidth(40),
									0,
									fontSizeWidth(14),
									fontSizeWidth(0),
								],
							},
						},
					},
					left: index * 34 - 8.5 + '%',
					top: fontSizeWidth(36) + '%',
					bottom: 0,
				}
			})
			.concat(
				opts.data.map((a: any, index: number) => {
					return {
						text: `{a|${a.name}}`,
						textStyle: {
							color: opts.fontColor,
							rich: {
								a: {
									align: 'left',
									fontSize: fontSizeWidth(18),
									lineHeight: fontSizeWidth(22),
									fontWeight: 600,
									padding: [0, 0, 0, fontSizeWidth(36)],
								},
							},
						},
						subtext: `{a|${a.data.reduce(
							(s: number, a: any) => a.value + s,
							0
						)}} {b|${a.unit}}`,
						subtextStyle: {
							color: opts.fontColor,
							width: 200,
							rich: {
								a: {
									color: a.color[0],
									fontSize: fontSizeWidth(24),
									fontWeight: 600,
									lineHeight: fontSizeWidth(18),
									padding: [0, 0, 0, fontSizeWidth(68)],
									fontFamily: 'DIN-Bold',
								},
								b: {
									color: '#788CA2',
									fontSize: fontSizeWidth(18),
								},
							},
						},
						left: index * 34 + 13 + '%',
						top: fontSizeWidth(38) + '%',
						bottom: 0,
					}
				})
			),
		series: opts.data.map((a: any, index: number) => {
			return {
				type: 'pie',
				radius: ['80%', '100%'],
				center: ['50%', '50%'],
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				...a,
				data: a.data.map((b: any, key: number) => {
					return {
						itemStyle: {
							color: a.color[key],
						},
						...b,
						...a,
					}
				}),
				left: index * 34 + 13 + '%',
				right: (opts.data.length - index) * 34 - 4 + '%',
				top: 10,
				bottom: 0,
			}
		}),
	}

	myChart.setOption(options)
	myChart.off('click')
	myChart.on('click', function (params: any) {
		emits('getCurrentItem', params.data.name)
	})
}
const initChat13 = () => {
	const sum = opts.data.reduce((s: number, a: any) => s + Number(a.value1), 0)
	const options = {
		color: opts.color,
		tooltip: {
			trigger: 'item',
			confine: true,
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			textStyle: {
				color: '#fff',
			},
			formatter: (data: any) => {
				return `
				<span style="font-size: ${fontSizeWidth(18)}px;padding-bottom:${fontSizeWidth(
					20
				)}px">${data.name}</span>
				<br>${data.marker.replace(/10px/gi, fontSizeWidth(10) + 'px')}
				<span style="color:#fff;font-size: ${fontSizeWidth(18)}px">
					<span style="width:${fontSizeWidth(120)}px;display:inline-block;">${
					opts.tipName ? opts.tipName : '人数'
				}</span>
					<span style="width:${fontSizeWidth(
						80
					)}px;text-align:right;display:inline-block;font-weight:600;font-size: ${fontSizeWidth(
					18
				)}px">
						${data.data.value2 || data.data.value1}${opts.unit}
					</span>
				</span>
				<br>
				<span style="color:#fff;font-size: ${fontSizeWidth(
					18
				)}px;padding-left:${fontSizeWidth(16)}px;padding-top:10px">
					<span style="width:${fontSizeWidth(120)}px;display:inline-block;">占比</span>
					<span style="width:${fontSizeWidth(
						80
					)}px;text-align:right;display:inline-block;font-weight:600;font-size: ${fontSizeWidth(
					18
				)}px">
						${data.data.percent}
					</span>
				</span>`
			},
		},
		title: {
			text: opts?.title,
			textStyle: {
				color: opts.fontColor,
				fontSize: fontSizeWidth(16),
				fontWeight: 600,
				lineHeight: fontSizeWidth(35),
			},
			left: opts.titleLeft || 'center',
			top: opts.titleTop || '62%',
		},
		legend: {
			right: fontSizeWidth(20),
			top: fontSizeWidth(opts.labelBottom || '20'),
			itemGap: fontSizeWidth(12),
			itemHeight: fontSizeWidth(15),
			itemWidth: fontSizeWidth(15),
			pageIcons: {
				vertical: [`image://${prevImg}`, `image://${nextImg}`],
			},
			textStyle: {
				color: opts.fontColor,
				fontSize: fontSizeWidth(12),
				align: 'left',
				rich: {
					a: {
						width: fontSizeWidth(150),
						fontSize: fontSizeWidth(16),
						fontWeight: 600,
					},
					b: {
						fontSize: fontSizeWidth(16),
						width: fontSizeWidth(60),
						padding: [0, 0, 0, fontSizeWidth(20)],
					},
					c: {
						fontSize: fontSizeWidth(16),
						width: fontSizeWidth(100),
						align: 'right',
					},
				},
			},
			data: opts.data.map((r) => r.name),
			// 参数:customLayout 判断legend的每个项是否采取纵向布局
			...opts.legend,
		},
		series: [
			{
				name: opts.title,
				type: 'pie',
				center: opts.center || ['50%', '35%'],
				radius: opts.radius || ['18%', '50%'],
				roseType: 'area',
				label: {
					show: (opts.label && opts.label.show) || false,
					align: 'left',
					formatter: ({ data }) => {
						return `{a|${data.value1}${opts.unit}}\n{b|${data.title2}}\n{b|${data.title3}}`
					},
					rich: {
						a: {
							color: '#0B0F5A',
							fontSize: fontSizeWidth(20),
							fontWeight: 'bold',
							align: 'left',
							lineHeight: fontSizeWidth(25),
							width: fontSizeWidth(0),
						},
						b: {
							color: 'rgb(98,137,169)',
							fontSize: fontSizeWidth(15),
							align: 'left',
							height: fontSizeWidth(20),
						},
					},
				},
				labelLine: {
					show: (opts.labelLine && opts.labelLine.show) || false,
					lineStyle: {
						color: 'rgb(98,137,169)',
					},
					smooth: 0.2,
					length: 30,
					length2: 20,
				},
				data: props.isPropsStop
					? opts.data
							.sort((a, b) => Number(a.value1) - Number(b.value1))
							.map((item: any, index) => {
								item.percent = item.value1
									? Math.abs(((item.value1 * 100) / sum).toFixed(2)) + '%'
									: '0%'
								item.value = index + 1
								return item
							})
					: opts.data.map((item: any, index) => {
							item.percent = item.value1
								? Math.abs(((item.value1 * 100) / sum).toFixed(2)) + '%'
								: '0%'
							item.value = index + 1
							return item
					  }),
				emphasis: {
					itemStyle: {
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
				itemStyle: {
					borderColor: '#fff',
					borderRadius: 4,
				},
				zlevel: 1,
			},
			{
				type: 'pie',
				center: opts.BoxCenter || opts.center || ['50%', '35%'],
				radius: opts.BoxCenter || opts.boxCenterRadius || ['0', '66%'],
				// center:opts.center||['50%','35%'],
				// radius: ['40%','41%'],
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				tooltip: {
					show: false,
				},
				data: [
					{
						value: 1,
						itemStyle: {
							color: {
								type: 'radial',
								x: 0.5,
								y: 0.5,
								r: 0.5,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.6,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(227, 232, 255, 0.5)', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
				],
				emphasis: {
					disabled: true,
				},
				zlevel: 0,
			},
		],
	}

	myChart.setOption(options)
	myChart.off('click')
	myChart.on('click', function (params: any) {
		emits('getCurrentItem', params.data.name)
	})
	let index = 0,
		timer: any = null
	const fn = () => {
		if (timer) {
			clearTimeout(timer)
		}
		if (isStop) return
		if (index == opts.data.length) {
			index = 0
		}
		myChart.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: index,
		})
		myChart.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index,
		})
		timer = setTimeout(() => {
			if (isStop) return
			myChart.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: index,
			})
			index++
			fn()
		}, 1000)
	}
	// fn();
}

const initChat14 = () => {
	const sum = opts.data.reduce((s: number, a: any) => s + Number(a.value1), 0)
	const options = {
		color: opts.color,
		tooltip: {
			trigger: 'item',
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			textStyle: {
				color: '#fff',
			},
			confine: true, // 是否将 tooltip 框限制在图表的区域内
			formatter: (data: any) => {
				return `<span style="padding-bottom:${fontSizeWidth(20)}px">${
					data.name
				}</span><br>${data.marker.replace(
					/10px/gi,
					fontSizeWidth(10) + 'px'
				)} <span style="color:#fff">${
					opts.tipName ? opts.tipName : '人数'
				}<span style="width:${fontSizeWidth(
					150
				)}px;text-align:right;display:inline-block;font-weight:600">${
					data.data.value1
				}${
					opts.unit
				}</span></span><br><span style="color:#fff;padding-left:${fontSizeWidth(
					20
				)}px;">占比<span style="width:${fontSizeWidth(
					150
				)}px;text-align:right;display:inline-block;font-weight:600">${(
					(data.data.value1 * 100) /
					sum
				).toFixed(2)}%</span></span>`
			},
		},
		title: {
			text: opts?.title,
			textStyle: {
				color: opts.fontColor,
				fontSize: fontSizeWidth(16),
				fontWeight: 600,
				lineHeight: fontSizeWidth(35),
			},
			left: opts.titleLeft || 'center',
			top: opts.titleTop || '62%',
		},
		legend: {
			itemGap: fontSizeWidth(12),
			right: fontSizeWidth(0),
			left: 'auto',
			orient: 'vertical',
			padding: [20, 0],
			top: 'center',
			pageIcons: {
				vertical: [`image://${prevImg}`, `image://${nextImg}`],
			},
			textStyle: {
				color: opts.fontColor,
				fontSize: fontSizeWidth(12),
				// align: 'left',
				rich: {
					a: {
						width: fontSizeWidth(60),
						fontWeight: 600,
					},
					b: {
						fontSize: fontSizeWidth(16),
						align: 'left',
						width: fontSizeWidth(76),
						padding: [0, 0, 0, fontSizeWidth(2)],
					},
					c: {
						fontSize: fontSizeWidth(16),

						width: fontSizeWidth(55),
						align: 'right',
					},
				},
			},
			data: opts.data.map((r) => r.name),
			// 参数:customLayout 判断legend的每个项是否采取纵向布局
			formatter:
				opts.legend && opts.legend.customLayout
					? (name: any) => {
							const data1 = opts.data.find((a: any) => a.name === name)
							if (!data1) return
							return `{a|${name}}\n{b|${data1.value1}${opts.unit}}\n{c|${(
								(Number(data1.value1) * 100) /
								sum
							).toFixed(2)}%}`
					  }
					: (name: any) => {
							const data1 = opts.data.find((a: any) => a.name === name)
							let zw = '',
								zv = ''
							return `{a|${name}${zw}}{b|${data1.value1}${
								opts.unit
							}}\t\t\t${zv}{c|${((Number(data1.value1) * 100) / sum).toFixed(
								2
							)}%}   `
					  },
			...opts.legend,
		},
		series: [
			{
				name: opts.title,
				type: 'pie',
				center: opts.center || ['50%', '35%'],
				radius: opts.radius || ['18%', '50%'],
				roseType: opts.roseType || '',
				label: {
					show: (opts.label && opts.label.show) || false,
					formatter: ({ data }) => {
						return `{c|${data.value1}}\t\t\t{a|${data.percent}} \n  {b|${data.name}} `
					},
					rich: {
						a: {
							color: 'rgb(98,137,169)',
							fontSize: fontSizeWidth(12),
							fontWeight: 'bold',
							lineHeight: fontSizeWidth(5),
						},
						c: {
							color: '#0B0F5A',
							fontSize: fontSizeWidth(20),
							fontWeight: 'bold',
							lineHeight: fontSizeWidth(5),
						},
						b: {
							color: 'rgb(98,137,169)',
							fontSize: fontSizeWidth(15),
							height: fontSizeWidth(40),
						},
					},
				},
				labelLine: {
					show: (opts.labelLine && opts.labelLine.show) || false,
					lineStyle: {
						color: 'rgb(98,137,169)',
					},
					smooth: 0.2,
					length: 30,
					length2: 20,
				},
				data: props.isPropsStop
					? opts.data
							.sort((a, b) => Number(a.value1) - Number(b.value1))
							.map((item: any, index) => {
								item.percent = item.value1
									? Math.abs(((item.value1 * 100) / sum).toFixed(2)) + '%'
									: '0%'
								item.value = index + 1
								return item
							})
					: opts.data.map((item: any, index) => {
							item.percent = item.value1
								? Math.abs(((item.value1 * 100) / sum).toFixed(2)) + '%'
								: '0%'
							item.value = index + 1
							return item
					  }),
				emphasis: {
					itemStyle: {
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
				itemStyle: {
					borderColor: '#fff',
					borderRadius: 4,
				},
				zlevel: 1,
			},
			{
				type: 'pie',
				center: opts.BoxCenter || opts.center || ['50%', '35%'],
				radius: opts.boxCenterRadius || opts.BoxCenter || ['0', '66%'],
				// center:opts.center||['50%','35%'],
				// radius: ['40%','41%'],
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				tooltip: {
					show: false,
				},
				data: [
					{
						value: 1,
						itemStyle: {
							color: {
								type: 'radial',
								x: 0.5,
								y: 0.5,
								r: 0.5,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.6,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(227, 232, 255, 0.5)', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
				],
				emphasis: {
					disabled: true,
				},
				zlevel: 0,
			},
		],
	}
	myChart.setOption(options)
	myChart.off('click')
	myChart.on('click', function (params: any) {
		emits('getCurrentItem', params.data.name)
	})
	let index = 0,
		timer: any = null
	const fn = () => {
		if (timer) {
			clearTimeout(timer)
		}
		if (isStop) return
		if (index == opts.data.length) {
			index = 0
		}
		myChart.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: index,
		})
		myChart.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index,
		})
		timer = setTimeout(() => {
			if (isStop) return
			myChart.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: index,
			})
			index++
			fn()
		}, 1000)
	}
	// fn();
}

const initChat15 = () => {
	const sum = opts.data.reduce(
		(s: number, a: any) =>
			s + parseFloat((a.value1 + '').replace(/[^\d|/.]/gi, '')),
		0
	)
	const data = props.isPropsStop
		? opts.data
				.sort((a, b) => Number(a.value1) - Number(b.value1))
				.map((item: any, index) => {
					item.percent = '0%'
					if (item.value1) {
						let value = Math.abs(
							parseFloat((item.value1 + '').replace(/[^\d|/.]/gi, ''))
						)
						item.percent = ((value * 100) / sum).toFixed(2) + '%'
					}
					item.value = item.value1 == 0 ? 0 : index + 1
					return item
				})
		: opts.data.map((item: any, index) => {
				item.percent = '0%'
				if (item.value1) {
					let value = Math.abs(
						parseFloat((item.value1 + '').replace(/[^\d|/.]/gi, ''))
					)
					item.percent = ((value * 100) / sum).toFixed(2) + '%'
				}
				item.value = index + 1
				return item
		  })
	const options = {
		color: opts.color,
		tooltip: {
			trigger: 'item',
			confine: true,
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			textStyle: {
				color: '#fff',
			},
			formatter: (data: any) => {
				return `
				<span style="font-size: ${fontSizeWidth(18)}px;padding-bottom:${fontSizeWidth(
					20
				)}px">${data.name}</span>
				<br>${data.marker.replace(/10px/gi, fontSizeWidth(10) + 'px')}
				<span style="color:#fff;font-size: ${fontSizeWidth(18)}px">
					<span style="width:${fontSizeWidth(120)}px;display:inline-block;">${
					opts.tipName ? opts.tipName : '人数'
				}</span>
					<span style="width:${fontSizeWidth(
						120
					)}px;text-align:right;display:inline-block;font-weight:600;font-size: ${fontSizeWidth(
					18
				)}px">
						${data.data.value2 || data.data.value1}${opts.unit}
					</span>
				</span>
				<br>
				<span style="color:#fff;font-size: ${fontSizeWidth(
					18
				)}px;padding-left:${fontSizeWidth(16)}px;padding-top:10px">
					<span style="width:${fontSizeWidth(120)}px;display:inline-block;">占比</span>
					<span style="width:${fontSizeWidth(
						120
					)}px;text-align:right;display:inline-block;font-weight:600;font-size: ${fontSizeWidth(
					18
				)}px">
						${data.data.percent}
					</span>
				</span>`
			},
		},
		title: {
			text: opts?.title,
			textStyle: {
				color: opts.fontColor,
				fontSize: fontSizeWidth(16),
				fontWeight: 600,
				lineHeight: fontSizeWidth(35),
			},
			left: opts.titleLeft || 'center',
			top: opts.titleTop || '62%',
		},
		legend: {
			left: fontSizeWidth(3),
			bottom: fontSizeWidth(opts.labelBottom || '0'),
			itemGap: fontSizeWidth(12),
			itemHeight: fontSizeWidth(15),
			itemWidth: fontSizeWidth(15),
			pageIcons: {
				vertical: [`image://${prevImg}`, `image://${nextImg}`],
			},
			textStyle: {
				color: opts.fontColor,
				fontSize: fontSizeWidth(12),
				align: 'left',
				rich: {
					a: {
						width: fontSizeWidth(150),
						fontSize: fontSizeWidth(16),
						fontWeight: 600,
					},
					b: {
						fontSize: fontSizeWidth(16),
						width: fontSizeWidth(60),
						padding: [0, 0, 0, fontSizeWidth(20)],
					},
					c: {
						fontSize: fontSizeWidth(16),
						width: fontSizeWidth(100),
						align: 'right',
					},
				},
			},
			data: opts.data.map((r) => r.name),
			...opts.legend,
		},
		toolbox: {
			show: opts.download ? opts.download.show : false,
			// itemSize:fontSizeWidth(36),
			feature: {
				saveAsImage: {
					show: true,
					type: 'png',
					title: '导出',
					preventDefault: true,
					name: opts.download ? opts.download.title : opts.title || '',
					pixelRatio: 2,
					nameText: '导出',
					excludeComponents: ['toolbox'],
					backgroundColor: '#fff',
					// icon:Download,
				},
				dataView: {
					show: false,
				},
			},
			...opts.download,
		},
		series: [
			{
				name: opts.title,
				type: 'pie',
				selectedMode: 'single',
				center: opts.center || ['50%', '35%'],
				radius: opts.radius || ['18%', '50%'],
				roseType: opts.roseType != undefined ? opts.roseType : 'area',
				label: {
					show: (opts.label && opts.label.show) || false,
					formatter: ({ data }) => {
						return `{c|${data.value2 || data.value1} ${
							data.unit ? data.unit : ''
						}}\t\t\t{a|${data.percent}} \n{b|${data.name}} `
					},
					rich: {
						a: {
							color: 'rgb(98,137,169)',
							fontSize: fontSizeWidth(12),
							fontWeight: 'bold',
							width: fontSizeWidth(30),
							lineHeight: fontSizeWidth(5),
						},
						c: {
							color: '#0B0F5A',
							fontSize: fontSizeWidth(18),
							fontWeight: 'bold',
							lineHeight: fontSizeWidth(5),
						},
						b: {
							color: 'rgb(98,137,169)',
							fontSize: fontSizeWidth(14),
							padding: [20, 0, 0, 0],
							height: fontSizeWidth(1),
						},
					},
				},
				labelLine: {
					show: (opts.labelLine && opts.labelLine.show) || false,
					lineStyle: {
						color: 'rgb(98,137,169)',
					},
					smooth: 0.2,
					length: 20,
					length2: 15,
				},
				data: data,
				emphasis: {
					itemStyle: {
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
				itemStyle: {
					borderColor: '#fff',
					borderRadius: 4,
				},
				zlevel: 1,
			},
			{
				type: 'pie',
				center: opts.BoxCenter || opts.center || ['50%', '35%'],
				radius: opts.BoxCenter || opts.boxCenterRadius || ['0', '66%'],
				// center:opts.center||['50%','35%'],
				// radius: ['40%','41%'],
				labelLine: {
					show: false,
				},
				label: {
					show: false,
				},
				tooltip: {
					show: false,
				},
				data: [
					{
						value: 1,
						itemStyle: {
							color: {
								type: 'radial',
								x: 0.5,
								y: 0.5,
								r: 0.5,
								colorStops: [
									{
										offset: 0,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 0.6,
										color: '#fff', // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(227, 232, 255, 0.5)', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
					},
				],
				emphasis: {
					disabled: true,
				},
				zlevel: 0,
			},
		],
	}

	myChart.setOption(options)
	myChart.off('click')
	myChart.on('click', function (params: any) {
		myChart.dispatchAction({
			type: 'highlight',
			seriesIndex: params.seriesIndex,
			dataIndex: params.dataIndex,
		})
		emits('getCurrentItem', params.data.name, {
			...params.data,
			selected: params.event.target.selected,
		})
	})
}
// 集团设备综合管控驾驶舱饼状图
const initChat16 = () => {
	const newData = JSON.parse(JSON.stringify(opts.data))
	const imgSrc = new URL('@/assets/EquipmentComprehensiveAdministration/radar.png',import.meta.url).href
	const W = chart?.value.offsetWidth
	const H = chart?.value.offsetHeight
	// 直径 167.98 外环4
	const options = {
		color:opts.color,
		tooltip: {
			trigger: 'item',
			confine: true,
			backgroundColor: 'rgba(9, 10, 42, 0.56)',
			textStyle: {
				color: '#fff',
			},
			formatter: (data: any) => {
				if(typeof data.data.value == 'boolean') return
				return `<div style="display:flex;align-item:center;justify-content:space-between;width:${fontSizeWidth(100)};height:${fontSizeWidth(32)}">
					<span>${data.data.name || data.data.label}</span>:
					<span>${data.data.value}${data.data.unit}</span>
					</div>`
			},
		},
		
		graphic: [
        {
            type: 'image',
            id: 'mask',
            left: 'center',
            top: 'center',
            z: 3, // 确保遮罩在底层
            bounding: 'raw',
						silent:true,
            style: {
                image: imgSrc, // 遮罩图片地址
                width: W * 0.51, // 遮罩图片宽度
                height: W * 0.51, // 遮罩图片高度
                x: W * 0.5, // 遮罩在画布中的位置
                y: H * 0.5, // 遮罩在画布中的位置
                scaleX: 1, // 水平缩放比例
                scaleY: 1, // 垂直缩放比例
            }
        }
    ],

		series:[
			{
				name:opts.title,
				type:'pie',
				center:['50%','50%'],
				radius: ['70%', '80%'],
      	avoidLabelOverlap: false,
				itemStyle: {
        	borderColor: '#192E4C',
        	borderWidth: 4,
      	},
				label: {
        	show: false,
        	position: 'center'
      	},
				emphasis: {
        	label: {
        	  show: false,
        	}
      	},
      	labelLine: {
      	  show: false
      	},
      	data: opts.data,	
			},
			{
				name:opts.title,
				type:'pie',
				center:['50%','50%'],
				radius: ['60%', '71%'],
      	avoidLabelOverlap: false,
				itemStyle: {
					opacity:0.3
      	},
				label: {
        	show: false,
        	position: 'center'
      	},
				emphasis: {
        	label: {
        	  show: false,
        	}
      	},
      	labelLine: {
      	  show: false
      	},
      	data: opts.data
			},
			{
				name:opts.title,
				type:'pie',
				center:['50%','50%'],
				radius: ['55%', '61%'],
      	avoidLabelOverlap: false,
				itemStyle: {
					opacity:0.1
      	},
				label: {
        	show: false,
        	position: 'center'
      	},
				markArea:{
					silent:true
				},
				emphasis: {
        	label: {
        	  show: false,
        	}
      	},
      	labelLine: {
      	  show: false
      	},
      	data: newData.map(i=>{
					i.value = false
					return i
				})
			},
			// {
			// 	name:opts.title,
			// 	type:'pie',
			// 	center:['50%','5%'],
			// 	radius: ['43%', '46%'],
      // 	avoidLabelOverlap: false,
			// 	itemStyle: {
			// 		color: 'rgba(255,255,255,0.2)'
      // 	},
			// 	markArea:{
			// 		silent:true
			// 	},
			// 	label: {
      //   	show: false,
      //   	position: 'center'
      // 	},
			// 	emphasis: {
      //   	label: {
      //   	  show: false,
      //   	}
      // 	},
      // 	labelLine: {
      // 	  show: false
      // 	},
      // 	data: newData.map(i=>{
			// 		i.value = false
			// 		return i
			// 	})
			// },
			{
				name:opts.title,
				type:'pie',
				center:['50%','50%'],
				radius: ['50%', '56%'],
      	avoidLabelOverlap: false,
				itemStyle: {
					opacity:0.1
      	},
				markArea:{
					silent:true
				},
				label: {
        	show: false,
        	position: 'center'
      	},
				emphasis: {
        	label: {
        	  show: false,
        	}
      	},
      	labelLine: {
      	  show: false
      	},
      	data: newData.map(i=>{
					i.value = false
					return i
				})
			},
			{
				name:opts.title,
				type:'pie',
				center:['50%','50%'],
				radius: ['0%', '51%'],
      	avoidLabelOverlap: false,
				itemStyle: {
					color: 'transparent'
      	},
				markArea:{
					silent:true
				},
				label: {
        	show: false,
        	position: 'center'
      	},
				emphasis: {
        	label: {
        	  show: false,
        	}
      	},
      	labelLine: {
      	  show: false
      	},
      	data: newData.map(i=>{
					i.value = false
					return i
				})
			},
		]
	}
	myChart.setOption(options)
}
defineExpose({
	myChart: chartInstance,
})
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
