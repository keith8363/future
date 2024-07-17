<template>
	<div class="DepartmentItemCard project">
		<div class="SwiperBoxDepartmentCard project-swiper">
			<swiper 
				ref="swiper" 
				:navigation="navigation" 
				:slidesPerView="CardData.length < 5 ? CardData.length : 5" 
				:space-between="0" 
				:swiperOptions="swiperOptions" 
				:class="{ isLess: CardData.length < 5 }" 
				:allowTouchMove="false" 
				class="mySwiper" 
				@slideChange="onSlideChange" 
				@swiper="onSwiper"
			>
				<swiper-slide 
					v-for="(item, index) in newData" 
					class="bg-color-black item" 
					:class="{ isItem: currentIndex === index }" 
					:key="index" 
					:virtualIndex="index"
					@click="instFun(index, item)"
				>
					<div class="mySwiperCard" :class="{ isReserve : item.name == '资源增储量'}">
						<div v-show="item.group">
							<div class="group-top">
								{{ item.des }}
							</div>
							<div class="group-main">
								<div class="left-main">
									<div class="title">
										{{ item.sonTitle }}
										<img class="explain-icon" src="@/assets/explainIcon.png" alt="" />
									</div>
									<div class="count">
										{{ item.groupValue }}
										<div class="unit">{{ item.des.slice(3, 5) }}</div>
									</div>
								</div>
								<div class="right-main">
									<img class="initimg" :src="item.icon" alt="" />
								</div>
							</div>
							<div class="group-buttom">
								<div class="year-area">年</div>
								<div class="date-area">统计日期：{{ item.groupDate }}</div>
							</div>
						</div>

						<div v-show="item.custom">
							<span class="init-transparent">{{
								item.title ? item.title : ''
							}}
								<el-tooltip class="box-item" effect="dark" :content="item.tips" raw-content placement="top">
									<img class="explain-icon" v-if="item.tips" src="@/assets/explainIcon.png" alt="" />
								</el-tooltip></span>
							<span class="init-current">{{ item.sonTitle }}</span>

							<img class="initimg" :src="item.icon" alt="" />
							<div class="selectOptionBox" v-if="item.selectOption">
								<span class="selectOptionSpan">{{
									item.selectOption.name
								}}</span>
								<el-select class="select" popper-class="manpower-select" :teleported="true" filterable allow-create :clearable="!currModel.notClear" :disabled="currModel.title !== item.title" v-model="item.selectOption.value" @change="(val) => chageValue(val)" size="Select">
									<el-option v-for="v in item.selectOption.option" :key="v.value" :label="v.name" :value="v.value">
									</el-option>
								</el-select>
							</div>
						</div>

						<div v-show="!item.custom && !item.group">
							<div class="topcol-1" :class="{islong:item.islong}">
								<div class="Acens">
									<img class="imagesName" :src="item.icon" alt="" />
									<span>{{ item.sonTitle }}</span>
									<div>{{ item.title ? item.title : '' }}
										<div class="notesTitle">{{item.notesTitle ? item.notesTitle : ''}}</div>

									</div>
									<el-tooltip class="box-item" effect="dark" :content="item.tips" raw-content placement="top">
										<img class="explain-icon" v-if="item.tips" src="@/assets/explainIcon.png" alt="" />
									</el-tooltip>

								</div>
								<span class="topcol-1-2">
									{{ item.des }}
								</span>
							</div>
							<div class="bottom-color">
								<span class="left"></span>
								<span class="border"></span>
								<span class="right"></span>
							</div>
							<!-- 境外财务卡片样式 -->
							<template v-if="['境外财务','五率', '冶炼决策'].includes(item.page)">
								<div class="card-bottom">
									<div class="card-bottom-list" v-for="(subitem,index) in item.list" :key="index">
										<template v-if="subitem.expectant === 1">
											<span v-if="subitem.plate" class="card-bottom-moudle-name">{{subitem.plate}}</span>
											<div class="expectant">
												<span class="bottom-value" :class="{'success':Number(subitem.name)<0,'error':Number(subitem.name)>0}"><span class="sign">{{Number(subitem.name)>0?'+':''}}</span>{{Number(subitem.name) == 0?"0":Number(subitem.name).toFixed(subitem.dot != undefined?subitem.dot:2)}}<span class="unit" v-if="subitem.unit">{{subitem.unit}}</span></span>
												<i class="up expectant3" v-if="Number(subitem.name)>0"></i>
												<i class="down expectant3" v-if="Number(subitem.name)<0"></i>
											</div>
										</template>
										<template v-else-if="subitem.expectant === 3">
											<span v-if="subitem.plate" class="card-bottom-moudle-name">{{subitem.plate}}</span>
											<div class="card-bottom-value">
												<span v-if="item.value1">{{item.value1 == 0?"0":(item.value1).toFixed(item.dot != undefined?item.dot:2)}}</span>
												<i class="up expectant3" v-if="Number(subitem.name)>0"></i>
												<i class="down expectant3" v-if="Number(subitem.name)<0"></i>
											</div>
											<span class="split" v-if="subitem.split">{{subitem.split}}</span>
											<div class="card-bottom-value">
												<span v-if="item.value2">{{item.value2 == 0?"0":(item.value2).toFixed(item.dot != undefined?item.dot:2)}}</span>
												<i class="up expectant3" v-if="Number(subitem.name)>0"></i>
												<i class="down expectant3" v-if="Number(subitem.name)<0"></i>
											</div>
										</template>
										<template v-else>
											<span v-if="subitem.plate" class="card-bottom-moudle-name">{{subitem.plate}}</span>
											<div class="card-bottom-moudle-name" :class="{'plateName':subitem.plate}" v-if="subitem.name.length < 12">{{subitem.name}}</div>
											<el-popover popper-class="cards-tip" trigger="hover" v-else>
												<template #reference>
													<div class="card-bottom-moudle-name" :class="{'plateName':subitem.plate}">{{subitem.name}}</div>
												</template>
												<div :style="{
									height:'auto',
									marginLeft:(Math.ceil(Math.sqrt(subitem.name.length))*0.1)/2 + 'em',
									background:'rgba(0,0,0,0.6)',
									padding:`${fontSizeWidth(15)}px ${fontSizeWidth(10)}px ${fontSizeWidth(15)}px ${fontSizeWidth(10)}px`,
									borderRadius:'4px'
							}" v-html='subitem.name'></div>
											</el-popover>
											<div class="card-bottom-value">
												<template v-if="subitem.split">
													<span v-if="subitem.value1">{{subitem.value1 == 0?"0":(subitem.value1).toFixed(subitem.dot != undefined?subitem.dot:2)}}</span>
													<span class="split" v-if="subitem.split">{{subitem.split}}</span>
												</template>
												<span>
													<template v-if="!subitem.value2">
														--
													</template>
													<template v-else>
														{{subitem.value2 == 0?"0":(subitem.value2).toFixed(subitem.dot != undefined?subitem.dot:2)}}
													</template>
												</span>
											</div>
										</template>
									</div>
								</div>
							</template>
							<!-- 冶炼板块利润特殊样式 -->
							<template v-else-if="['板块利润'].includes(item.page)">
								<div class="imgBox-profitBottom">
									<span class="yearOrmanth" v-if="item.operName">
										<span class="name">{{ item.operName }}</span>
										<b class="maaber-cont">
											<b class="number-left">{{ item.operValue }}</b>
											<b class="qfx" v-if="item.comValue">/</b>
											<b v-if="item.comValue" class="number-right" :class="{
											'isRed': item?.comValueWarning
										}">
												{{ item.comValue }}
												<span class="line">%</span>
											</b>
										</b>
									</span>
									<span class="yearOrmanth" v-if="item.annual">
										<span class="name">{{ item.annual }}</span>
										<b class="maaber-cont">
											<b class="number-left">{{ item.annualValue }}</b>
											<b class="qfx" v-if="item.comannualValue">/</b>
											<b class="number-right" :class="{
											'isRed': item?.comannualValueWarning
										}" v-if="item.comannualValue">{{ item.comannualValue }}
												<span class="line">%</span>
											</b>
										</b>
									</span>
									<!-- 冶炼板块利润卡片特殊行（上年同期累计） -->
									<span class="yearOrmanth" v-if="item.lastYearSum">
										<span class="name">{{ item.lastYearSum }}</span>
										<b class="maaber-cont">
											<b class="number-left">{{ item.lastYearSumValue }}</b>
										</b>
									</span>
									<div class="dk-bottom" v-if="item.financial_title">
										<!-- 境外财务驾驶舱卡片 -->
										<span class="yearOrmanth">
											<span class="name">{{ item.financial_title }} </span>
											<b class="maaber-cont">
												<b class="number-left">{{ item.financial_val || '--' }}</b>
												<span class="line">{{item.unit}}</span>
											</b>
										</span>
										<span v-if="item.financial_name" class="yearOrmanth">
											<span class="name">{{ item.financial_name }} </span>
											<b class="maaber-cont">
												<b class="number-left" :class="isUpClass(item.financial_yoy)">{{ item.financial_yoy ? item.financial_yoy + '%' : '--' }}</b>
												<b class="number-left">
													<img v-if="item.financial_yoy && item.financial_yoy >= 0" class="number-right-images" src="@/assets/header/red.png" alt="" />
													<img v-if="item.financial_yoy && item.financial_yoy<0 " class="number-right-images rotateX" src="@/assets/header/green.png" alt="" />
												</b>
												<b v-if="!item.noNeedFinancial_mom" class="qfx">/</b>
												<b v-if="!item.noNeedFinancial_mom" class="number-right" :class="isUpClass(item.financial_mom)">{{ item.financial_mom ? item.financial_mom + '%' : '--' }}
												</b>
												<b class="number-left">
													<img v-if=" item.financial_mom && item.financial_mom >= 0" class="number-right-images" src="@/assets/header/red.png" alt="" />
													<img v-if="item.financial_mom && item.financial_mom<0 " class="number-right-images rotateX" src="@/assets/header/green.png" alt="" />
												</b>
											</b>
										</span>
									</div>

									<span v-if="item.QOQName && !item.hiddenSymbol" class="proportion">
										<span class="name">{{ item.QOQName }}</span>
										<b class="maaber-cont" v-if="item?.yearClor">

											<b :class="judgeClass(item.QOQNameValue,false,item.reversal)">{{ item.QOQNameValue >= 0 ? '+' : ''}}{{ item.QOQNameValue || 0 }}
												<span class="line">%</span>
											</b>
											<b class="number-left">
												<img v-if="item.QOQNameValue >= 0" class="number-left-images" :src="judgeClass(item.QOQNameValue,true,item.reversal)" alt="" />
												<img v-if="item.QOQNameValue<0 " class="number-left-images rotateX" :src="judgeClass(item.QOQNameValue,true,item.reversal)" alt="" />
											</b>
										</b>
										<b class="maaber-cont" v-else>
											<b :class="judgeClass(item.QOQNameValue,item.reversal)" class="number-right">{{ item.QOQNameValue >= 0  ? '+' : ''}}{{ item.QOQNameValue || 0 }}
												<span class="line">%</span>
											</b>
											<b class="number-left">
												<img v-if="item.QOQNameValue < 0" class="number-left-images rotateX" :src="judgeClass(item.QOQNameValue,true,item.reversal)" alt="" />
												<img v-if="item.QOQNameValue >= 0 && !item.QOQNameValueColor" class="number-left-images" :src="judgeClass(item.QOQNameValue,true,item.reversal)" alt="" />
											</b>
										</b>
									</span>
								</div>
							</template>

							<template v-else>
								<!-- 地勘的资源增储量卡片下面数据先隐藏 -->
								<div class="imgBox-bottom" v-if="item.name !== '资源增储量'">
									<span class="yearOrmanth" v-if="item.operName">
										<span class="name">{{ item.operName }}</span>
										<b class="maaber-cont">
											<b class="number-left">{{ item.operValue }}</b>
											<b class="qfx" v-if="item.comValue">/</b>
											<b v-if="item.comValue" class="number-right" :class="{
											'isRed': item?.comValueWarning
										}">
												{{ item.comValue }}
												<span class="line">%</span>
											</b>
										</b>
									</span>
									<span class="yearOrmanth" v-if="item.annual">
										<span class="name">{{ item.annual }}</span>
										<b class="maaber-cont">
											<b class="number-left">{{ item.annualValue }}</b>
											<b class="qfx" v-if="item.comannualValue">/</b>
											<b class="number-right" :class="{
											'isRed': item?.comannualValueWarning
										}" v-if="item.comannualValue">{{ item.comannualValue }}
												<span class="line">%</span>
											</b>
										</b>
									</span>
									<!-- 冶炼板块利润卡片特殊行（上年同期累计） -->
									<span class="yearOrmanth" v-if="item.lastYearSum">
										<span class="name">{{ item.lastYearSum }}</span>
										<b class="maaber-cont">
											<b class="number-left">{{ item.lastYearSumValue }}</b>
										</b>
									</span>
									<div class="dk-bottom" v-if="item.financial_title">
										<!-- 境外财务驾驶舱卡片 -->
										<span class="yearOrmanth">
											<span class="name">{{ item.financial_title }} </span>
											<b class="maaber-cont">
												<b class="number-left">{{ item.financial_val || '--' }}</b>
												<span class="line">{{item.unit}}</span>
											</b>
										</span>
										<span v-if="item.financial_name" class="yearOrmanth">
											<span class="name">{{ item.financial_name }} </span>
											<b class="maaber-cont">
												<b class="number-left" :class="isUpClass(item.financial_yoy)">{{ item.financial_yoy ? item.financial_yoy + '%' : '--' }}</b>
												<b class="number-left">
													<img v-if="item.financial_yoy && item.financial_yoy >= 0" class="number-right-images" src="@/assets/header/red.png" alt="" />
													<img v-if="item.financial_yoy && item.financial_yoy<0 " class="number-right-images rotateX" src="@/assets/header/green.png" alt="" />
												</b>
												<b v-if="!item.noNeedFinancial_mom" class="qfx">/</b>
												<b v-if="!item.noNeedFinancial_mom" class="number-right" :class="isUpClass(item.financial_mom)">{{ item.financial_mom ? item.financial_mom + '%' : '--' }}
												</b>
												<b class="number-left">
													<img v-if=" item.financial_mom && item.financial_mom >= 0" class="number-right-images" src="@/assets/header/red.png" alt="" />
													<img v-if="item.financial_mom && item.financial_mom<0 " class="number-right-images rotateX" src="@/assets/header/green.png" alt="" />
												</b>
											</b>
										</span>
									</div>
									<!-- 地勘特殊逻辑 -->
									<span v-if="item.geological" class="yearOrmanth">
										<span class="name">{{ item.QOQName }} </span>
										<b class="maaber-cont">
											<b class="number-left">{{ item.QOQNameLeftValue }}</b>
											<b class="qfx" v-if="item.comannualValue">/</b>
											<b class="number-right">{{ item.QOQNameValue || 0 }}
												<span class="line">%</span>
											</b>
										</b>
									</span>

									<span v-if="item.QOQName && !item.hiddenSymbol" class="proportion">
										<span class="name">{{ item.QOQName }}</span>
										<b class="maaber-cont" v-if="item?.yearClor">

											<b :class="judgeClass(item.QOQNameValue,false,item.reversal)">{{ item.QOQNameValue >= 0 ? '+' : ''}}{{ item.QOQNameValue || 0 }}
												<span class="line">%</span>
											</b>
											<b class="number-left">
												<img v-if="item.QOQNameValue >= 0" class="number-left-images" :src="judgeClass(item.QOQNameValue,true,item.reversal)" alt="" />
												<img v-if="item.QOQNameValue<0 " class="number-left-images rotateX" :src="judgeClass(item.QOQNameValue,true,item.reversal)" alt="" />
											</b>
										</b>
										<b class="maaber-cont" v-else>
											<b :class="judgeClass(item.QOQNameValue,item.reversal)" class="number-right">{{ item.QOQNameValue >= 0  ? '+' : ''}}{{ item.QOQNameValue || 0 }}
												<span class="line">%</span>
											</b>
											<b class="number-left">
												<img v-if="item.QOQNameValue < 0" class="number-left-images rotateX" :src="judgeClass(item.QOQNameValue,true,item.reversal)" alt="" />
												<img v-if="item.QOQNameValue >= 0 && !item.QOQNameValueColor" class="number-left-images" :src="judgeClass(item.QOQNameValue,true,item.reversal)" alt="" />
											</b>
										</b>
									</span>
								</div>

								<div class="imgBox-bottom hasSelect" v-if="item.name == '资源增储量'">
									<!-- <span>当前金属:</span> -->
									<el-select v-if="item.list && item.list.length>0" class="select" v-model="organizationKey" :disabled="currModel !== item" popper-class="departmentCardSelectStyle" :teleported="true" filterable placeholder="请选择金属" @change="chageValue">
										<el-option v-for="i in item.list" :key="i ? i.label : 0" :label="i ? i.label : ''" :value="i ? i.label : ''"></el-option>
									</el-select>
								</div>
							</template>

						</div>
					</div>
				</swiper-slide>
				<div class="button-on" v-if="transitionIndex > 0" @click="addPage(-1)">
					<img src="@/assets/iconright.png" alt="" />
				</div>
				<div class="button-next" v-if="transitionIndex < CardData.length - 5" @click="addPage(1)">
					<img src="@/assets/iconright.png" alt="" />
				</div>
			</swiper>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getArrow } from '@/utils/img-enum';
import 'swiper/css';
import 'swiper/css/navigation'; // 轮播图两边的左右箭头
import { Swiper, SwiperSlide } from 'swiper/vue';
import { PropType, computed, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const currentRoute = useRoute(),
	queryCardName = currentRoute.query.card
const pageSize = ref<number>(5) // 每页显示数量

const page = ref<number>(1) // 当前页码

let useSwiper: any = null // swiper实例

const props = defineProps({
	CardData: {
		type: Array as PropType<CardDataItem[]>,
		default: () => {
			return []
		},
		required: true,
	},
	currModel: {
		type: Object,
		default: () => {
			return {}
		},
		required: true,
	},
	bWidth: {
		type: String, // 传参类型
		default: () => {
			return '348*$base'
		}, // 传参默认值
	},
	isSlideShow: {
		type: Boolean,
		required: false,
	},
})
/**
 * 当前根据业务需求国内业务模块card数值上升为黄色数值下降为红色；国际业务模块数值上升为红色，数值下降为绿色(是否采用逻辑倒置需结合业务语境判断)
 * @param { number }  val 值
 * @param { Boolean }  isImg 是否图片路径
 * @param { null | Boolean } reversal 逻辑是否需要倒置
 */
const judgeClass = (val: any, isImg?: Boolean, reversal?: null | Boolean) => {
	return !isImg ? 'number-right-green' : getArrow('number-right-green')
}

const isUpClass = (val) => {
	return val >= 0 ? 'number-right-red' : 'number-right-green'
}

const organizationKey = ref()

const navigation = ref({
	nextEl: '.button-next',
})

// 初始化swiper
const onSwiper = (swiper: any) => {
	useSwiper = swiper
}

// 滑动事件记录分页
const onSlideChange = () => {
	page.value = useSwiper.activeIndex / pageSize.value + 1
}

// 分页
const transitionIndex = ref(0)

const newData = computed(() => {
	if (props.CardData && Array.isArray(props.CardData)) {
		return props.CardData.length > 5
			? props.CardData.slice(transitionIndex.value, transitionIndex.value + 5)
			: props.CardData
	} else {
		return []
	}
})

const addPage = (num: number) => {
	if (num > 0) {
		transitionIndex.value++
		currentIndex.value--
		useSwiper.slideNext()
	} else if (num < 0) {
		useSwiper.slidePrev()
		transitionIndex.value--
		currentIndex.value++
	}
}
// end
// 在modules加入要使用的模块
const emits = defineEmits(['currModelChange', 'changeOperation'])

interface CardDataItem {
	sonTitle: string
	title: string
	des: string
	icon: string
	operName: string
	operValue: string
	comValue: string
	annual: string
	annualValue: string
	comannualValue: string
	QOQName: string
	QOQNameValue: number
	custom: boolean
	QOQNameValueColor: boolean
	selectOption: object
	group: boolean
	groupDate: string
	groupValue: string
	yearClor: false
	hiddenSymbol: Boolean
	geological?: Boolean
	QOQNameLeftValue?: string
	list?: Array<any>
}

const chageValue = (value: string) => {
	if (value) {
		emits('changeOperation', value)
	}
}

const currentIndex = ref(0)

const instFun = (index: number, item: any) => {
	currentIndex.value = index
	emits('currModelChange', item)
}

const swiperOptions = reactive({
	speed: 400,
	// 第一张和最后一张贴合边缘
	centeredSlidesBounds: false,
})

function iniCard() {
	currentIndex.value = 0
}

function emptyCard() {}

defineExpose({
	iniCard,
	emptyCard,
})
let cardNams = []
const selectCard = (val) => {
	if (queryCardName) {
		cardNams = val.map((a) => a.sonTitle || a.title)
		const currIndex = val
			.map((a) => a.sonTitle || a.title)
			.indexOf(queryCardName)
		currentIndex.value = currIndex > 0 ? currIndex : 0
		const item = val.find(
			(i) => i.sonTitle == queryCardName || i.title == queryCardName
		)
		
		if (val.length && item && currentIndex.value !== 0) {
			const pages = Math.ceil(currentIndex.value - 4)
			for (let i = 0; i < pages; i++) {
				addPage(1)
			}
			instFun(currentIndex.value, item)
		}
	}
}

// 地勘业务代码:默认储量与资源量当前金属为列表第一个
watch(
	() => props.CardData,
	(val) => {
		if (val) {
			const obj = val.find((i) => i.list)
			if (obj && obj.list && obj.list.length > 0) {
				!organizationKey.value && (organizationKey.value = obj.list[0]?.label)
			}
			if (queryCardName) {
				if (
					cardNams.toString() !==
					val.map((a) => a.sonTitle || a.title).toString()
				) {
						selectCard(val)
				}
			}
		}
	},
	{
		deep: true,
		immediate: true,
	}
)

const flag = ref(true)
const index = ref(0)
watch(
	() => props.currModel,
	(val) => {
		// 轮播图业务逻辑
		if (props.isSlideShow) {
			if (flag.value) {
				index.value = newData.value.findIndex((i) => i.name == val.name)
			}
			if (index.value === 1 && flag.value) {
				addPage(1)
				instFun(index.value - 1, val)
				flag.value = false
			} else if (index.value === newData.value.length - 1 && flag.value) {
				instFun(index.value, val)
				flag.value = false
			} else if (index.value === newData.value.length - 1 && !flag.value) {
				addPage(-1)
				instFun(0, val)
				flag.value = true
			} else {
				instFun(index.value, val)
				flag.value = true
			}
		} else if (val.name&&!queryCardName) {
			// 解决请求时间更新组件刷新导致的currentIndex初始化的问题
				const index = props.CardData.findIndex((i) => i.name == val.name)
				currentIndex.value = index>=5 ? 4 : index
		}
	},
	{
		immediate: true,
	}
)
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.DepartmentItemCard {
	width: 100%;
	.notesTitle {
		font-family: '';
		font-weight: 800;
		font-size: 16px;
		color: #ffffff;
		text-align: center;
	}
	.SwiperBoxDepartmentCard {
		position: relative;
		width: 100%;
		box-sizing: border-box;
		cursor: pointer;
		display: flex;
		padding-top: 15px;

		.bottom-color {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 10px;

			.left,
			.right {
				display: inline-block;
				width: 5.57px;
				height: 5.58px;
				opacity: 0.34;
				background: #ffffff;
				border-radius: 0.22px;
			}

			.border {
				height: 1px;
				display: inline-block;
				border-bottom: 1px solid rgba(255, 255, 255, 0.3);
				width: 100%;
				margin: 0 2.16px;
			}
		}

		.init-transparent {
			font-family: 'Acens';
			font-size: 25px;
			color: #ffffff;
			letter-spacing: 1.27px;
			margin-bottom: 8px;
			display: block;
		}

		.init-current {
			font-weight: 400;
			font-size: 16px;
			color: #ffffff;
		}
		.financial-value {
			margin: 0 15px 0 15px;
			font-family: 'Acens';
			font-size: 25px;
			color: #ffffff;
		}
		.financial-unit {
			color: #ffffff;
			font-size: 16px;
		}

		.initimg {
			width: 153.69px;
			height: 153.69px;
			float: right;
		}

		.selectOptionBox {
			.selectOptionSpan {
				display: block;
				font-weight: 400;
				font-size: 19.89px;
				color: #ffffff;
				padding-top: 30px;
				padding-bottom: 17px;
			}

			.select {
				padding-top: 10px;
				width: 138px;
				height: 36px;
				box-shadow: 0 2px 4px 0 #7f89d752;
				border-radius: 2.21px;
				border: none;

				::v-deep(.el-input__inner),
				::v-deep(.el-input__wrapper) {
					background: #e2e8ff;
					color: #6871e9;
					border: none;
				}
			}
		}

		.item {
			box-sizing: border-box;
			cursor: pointer;
			background: rgba(85, 101, 244, 0.72);
			border-radius: 12px;
			height: 260px;
			width: calc(20% - 10px) !important;
			margin: 0 5px;
			transform: scale(0.96);
			.mySwiperCard {
				padding: 20px 18px 0px 18px;
				.card-bottom {
					display: flex;
					align-items: center;
					flex-direction: column;
					height: 145px;
					justify-content: space-around;
					.card-bottom-list {
						display: flex;
						justify-content: space-between;
						align-items: center;
						width: 100%;
						.card-bottom-name {
							height: 28px;
							font-family: PingFangSC-Regular;
							font-weight: 400;
							font-size: 18px;
							color: #ffffff;
							min-width: 100px;
						}
						.card-bottom-moudle-name {
							height: 28px;
							font-family: PingFangSC-Regular;
							font-weight: 400;
							font-size: 18px;
							color: #ffffff;
							margin-right: 10px;
						}
						.card-bottom-value,
						.expectant {
							color: #ffffff;
							font-size: 24px;
							font-weight: 700;
							letter-spacing: 0;
							text-align: right;
							.unit {
								opacity: 0.7;
								font-family: PingFangSC-SNaNpxibold;
								font-weight: 600;
								font-size: 18px;
								text-align: right;
								padding-bottom: 5px;
								display: inline-block;
							}
						}
						.plateName {
							width: 240px;
							text-align: left;
							white-space: nowrap; /* 防止文本换行 */
							overflow: hidden; /* 隐藏超出内容 */
							text-overflow: ellipsis; /* 显示省略号 */
						}
					}
				}
			}

			.imagesName {
				width: 29.99px;
				height: 32px;
				margin-right: 14px;
			}

			.explain-icon {
				cursor: pointer;
				width: 30.73px;
				height: 30.73px;
				margin-left: 13.75px;
			}

			.topcol-1 {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10px;

				.Acens {
					font-family: 'Acens';
					display: flex;
					align-items: center;
					color: #ffffff;
					font-size: 24px;
					letter-spacing: 0.9px;
					text-align: left;

					span {
						font-size: 24px;
					}
				}

				.topcol-1-2 {
					opacity: 0.8;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					font-size: 18px;
					color: #ffffff;
					text-align: right;
				}
			}
			.islong {
				.Acens {
					span {
						font-size: 20px;
					}
				}

				.imagesName {
					margin-right: 4px;
				}
			}
			.imgBox-bottom.hasSelect {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				margin-top: 110px;

				span {
					font-family: PingFangSC-Regular;
					display: inline-block;
					font-weight: 400;
					font-size: 18px;
					color: #ffffff;
					margin-bottom: 10px;
				}
			}

			.imgBox-bottom,
			.imgBox-profitBottom {
				.dk-bottom {
					display: flex;
					align-items: center;
					flex-direction: column;
					height: 145px;
					justify-content: space-around;
				}
				.name {
					font-family: PingFangSC-Regular;
					display: inline-block;
					font-weight: 400;
					font-size: 20px;
					color: #ffffff;
				}

				.line {
					opacity: 0.7;
					font-weight: 600;
					font-size: 20px;
					margin-left: 5px;
				}

				.number-left {
					font-size: 25px;
					font-family: DIN;
					font-weight: 700;
					line-height: 0;
					letter-spacing: 0;
					text-align: right;

					img {
						width: 18px;
						height: 16px;
					}
				}

				.qfx {
					margin: 0 5px;
					font-size: 25px;
				}

				.number-right {
					font-size: 25px;
					font-family: DIN;
					font-weight: 700;
					line-height: 0;
					letter-spacing: 0;
					text-align: right;
					display: flex;
					align-items: center;
				}

				.isRed {
					color: #ff6565;
				}

				.yearOrmanth {
					display: flex;
					justify-content: space-between;
					width: 100%;
					font-weight: 400;
					color: #ffffff;
					align-items: center;
					height: 54px;
					margin-bottom: 6px;
					font-family: PingFangSC-Regular;
				}

				.proportion {
					display: flex;
					justify-content: space-between;
					width: 100%;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: #ffffff;
					align-items: center;
					height: 54px;
					border-radius: 4px;
				}

				.maaber-cont {
					display: flex;
					align-items: center;
				}

			
			}
			.yl-bottom {
				display: flex;
				align-items: center;
				flex-direction: column;
				height: 145px;
				justify-content: space-around;
			}
			.imgBox-profitBottom {
				display: flex;
				flex-direction: column;
				.yearOrmanth,
				.proportion {
					height: 40px;
				}
			}
		}

		.alone {
			width: 386px !important;
		}

		.isItem {
			cursor: pointer;
			height: 268px;
			border-radius: 13.38px;
			background: rgba(85, 101, 244, 0.9411764706);
			box-shadow: 0 9px 32px 0px #5565f4a8;
			width: calc(20% - 10px) !important;
			transform: scale(0.99);

			.mySwiperCard {
				height: calc(260 * 100vh / 1080);
			}

			.imagesName {
				width: 33.75px;
				height: 36px;
				margin-right: 15px;
			}

			.topcol-1 {
				.Acens {
					font-family: 'Acens';
					display: flex;
					align-items: center;
					font-size: 26px;

					span {
						font-size: 26px;
					}
				}
				.topcol-1-2 {
					opacity: 0.8;
					font-weight: 400;
					font-size: 19px;
					color: #ffffff;
					text-align: right;
					display: inline-block;
				}
			}
			.islong {
				.Acens {
					span {
						font-size: 21px !important;
					}
				}
			}
			.imgBox-bottom {
				.name {
					display: inline-block;
					font-weight: 400;
					font-size: 20px;
					color: #ffffff;
					width: 112px;
				}

				.number-left {
					font-size: 25px;
					font-family: DIN;
					font-weight: 700;
					letter-spacing: 0;
					text-align: left;
				}

				.qfx {
					margin: 0 5px;
					font-size: 25px;
				}

				.number-right {
					font-family: DIN-Bold;
					font-size: 25px;
				}

				.yearOrmanth {
					display: flex;
					justify-content: space-between;
					width: 100%;
					font-weight: 400;
					color: #ffffff;
					align-items: center;
					height: 54px;
					margin-bottom: 6px;
				}

				.proportion {
					display: flex;
					justify-content: space-between;
					width: 100%;
					font-weight: 400;
					color: #ffffff;
					align-items: center;
					height: 60px;
					border-radius: 4px;
				}
			}
		}

		.number-right-red {
			@include red;
		}

		.number-right-green {
			@include green;
		}

		.number-right-yellow {
			color: #fff776 !important;
		}

		.number-left-images {
			width: 18px;
			height: 16px;
			margin-right: 15px;
			fill: #faff75;
		}

		.number-right-images {
			width: 18px;
			height: 16px;
			fill: #faff75;
			margin: 0 0 0 15px;
		}

		.rotateX {
			transform: rotateX(180deg);
		}
	}
}
</style>
<style scoped lang="scss">
.project {
	width: 100%;

	&-swiper {
		position: relative;
		width: 100%;

		.swiper {
			width: 100%;
			margin-left: inherit;
			margin-right: inherit;
			position: relative;
			overflow: visible !important;
			padding: 0;
			z-index: 1;
			display: block;

			swiper-slide {
				height: 100%;
				box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.16);
				border-radius: 4px;
				border: 1px solid #e4e5ea;
				background: #f9fafe;
			}
		}

		::v-deep .swiper-wrapper {
			display: flex;
			align-items: center;
		}

		.button-prev {
			position: absolute;
			top: 117px;
			left: 0px;
		}

		.button-next {
			position: absolute;
			top: 120px;
			right: -10px;
			z-index: 111;
			width: 40px;
			height: 40px;
			background: #0b0d3285;
			border: 1.6px solid #ffffff47;
			box-shadow: 0 5px 8px 2px #646fc266;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;

			img {
				height: 17px;
				width: 12px;
			}
		}

		.button-on {
			position: absolute;
			top: 120px;
			left: -10px;
			z-index: 111;
			width: 40px;
			height: 40px;
			background: #0b0d3285;
			border: 1.6px solid #ffffff47;
			box-shadow: 0 5px 8px 2px #646fc266;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;

			img {
				height: 17px;
				width: 12px;
				transform: rotate(180deg);
			}
		}
	}
}

.swiper-content {
	text-align: center;
	height: 94px;
	margin: 40px 0;
	border-right: 1px solid #e4e5ea;

	&-text {
		margin: 11px auto 0;
		width: 127px;
		height: 25px;
		font-size: 16px;
		font-weight: 400;
		color: #2f353b;
		line-height: 25px;
		-webkit-background-clip: text;
	}
}

.write {
	width: 4px;
	background-color: #ffffff;
	height: 176px;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 99;
}

.group-top {
	font-family: HelloFont-WenYiHei;
	font-weight: 600;
	font-size: 20px;
	color: #ffffff;
	letter-spacing: 0.69px;
	text-shadow: 0 2px 0 #6673d6cc;
	text-align: right;
}

.group-main {
	height: 150px;
	width: 100%;
	display: flex;
	flex-direction: row;

	.left-main {
		width: 55%;
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-around;
	}

	.right-main {
		width: 45%;
		height: 100%;
	}

	.title {
		color: #ffffff;
		font-family: HelloFont;
		font-weight: WenYiHei;
		font-size: 24px;
		letter-spacing: 1.4px;
		position: relative;

		.explain-icon {
			cursor: pointer;
			position: absolute;
			width: 24px;
			height: 24px;
			top: 50%;
			transform: translate(0, -50%);
		}
	}

	.count {
		font-family: DIN-Bold;
		font-weight: 700;
		font-size: 50px;
		color: #ffffff;
		text-align: left;
		position: relative;
	}

	.unit {
		position: absolute;
		opacity: 0.7;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		font-size: 20px;
		color: #ffffff;
		right: -25%;
		top: 30%;
	}
}

.group-buttom {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
}

.year-area {
	width: 40px;
	height: 40px;
	background: #ffffff5c;
	box-shadow: 0 2px 0 0 #6673d6cc, inset 0 1px 5px 0 #ffffffbd;
	border-radius: 3.25px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
	font-size: 24px;
	color: #4a55ac;
	letter-spacing: 1.08px;
}

.date-area {
	opacity: 0.9;
	font-family: PingFangSC-Medium;
	font-weight: 500;
	font-size: 20px;
	color: #ffffff;
	letter-spacing: 0.89px;
}
</style>
