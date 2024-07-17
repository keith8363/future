<template>
	<div class="CardView">
		<div class="col-3">
			<div class="top">
				<div class="ranking">
					<div class="carHeaderBox" v-if="carHeader">
						<slot name="HeadOptions"></slot>
						<div class="carHeader">
							<div class="col-3-title">
								{{ props.CardData.title }}
								<el-tooltip class="box-item" effect="dark" :content="props.CardData.descriptionCon" v-if="props.CardData.descriptionCon" raw-content placement="top-start">
									<img v-if="props.CardData.descriptionCon" src="@/assets/explainIcon.png" alt="">
								</el-tooltip>
								<el-tooltip class="box-item" effect="dark" content="刷新" v-if="props.CardData.refresh" placement="top-start">
									<el-icon v-if="props.CardData.refresh" @click="refresh">
										<RefreshLeft />
									</el-icon>
								</el-tooltip>
								<!-- 集团卡片弹窗图标 -->
								<slot name="dialogIcon"></slot>
							</div>
							<div class="btn-box">
								<slot name="headerRight"></slot>
							</div>

						</div>
						<div class="bottom-color" v-if="divider">
							<span class="left"></span>
							<span class="border"></span>
							<span class="right"></span>
						</div>
					</div>
					<div id="bottomRight">
						<slot name="main"></slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
const props = defineProps({
	CardData: {
		type: Object,
		default: {
			title: '',
		},
	},
	divider: {
		type: Boolean,
		require: false,
		default: true,
	},
	carHeader: {
		type: Boolean,
		require: false,
		default: true,
	},
})

const emits = defineEmits(['refreshBox'])

const refresh = () => {
	emits('refreshBox')
}

onMounted(() => {})
</script>
<style lang="scss" scoped>
.CardView {
	width: 100%;
	height: 100%;
	.col-3 {
		width: 100%;
		height: 100%;
	}
	.top {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		.ranking {
			width: 100%;
			height: 100%;
			background: #ffffffc2;
			border-radius: 6px;
			margin-bottom: 24px;
			overflow: hidden;
			position: relative;
			.carHeaderBox {
				width: 100%;
				position: relative;
			}
			.carHeader {
				display: flex;
				justify-content: space-between;
				align-items: center;
				img {
					width: 28px;
					height: 28px;
					margin-left: 10px;
					cursor: pointer;
				}
			}

			.col-3-title {
				font-family: 'Acens';
				font-size: 24px;
				color: #0b0f5a;
				text-shadow: 0 2px 8px #0b0f5a29;
				margin: 17px 0 17px 27px;
				display: flex;
				align-items: center;

				.help {
					width: 26px;
					height: 26px;
					border-radius: 50%;
					border: 1px solid #b5b4fe;
					box-sizing: border-box;
					background-color: #e4e7ff;
					color: #564eb0;
					margin-left: 8px;
				}

				.el-icon {
					margin-left: 10px;
					&:hover {
						cursor: pointer;
						transform: scale(1.1);
					}
				}
			}

			.btn-box {
				margin: 23px 17px 10px 0;
				font-weight: 400;
				font-size: 16px;
				color: #5b6276;
			}

			.bottom-color {
				display: flex;
				width: calc(100% - 45px);
				justify-content: space-between;
				align-items: center;
				position: absolute;
				left: 30px;
				bottom: 0px;

				.left,
				.right {
					display: inline-block;
					width: 5px;
					height: 5px;
					opacity: 0.34;
					background: #5b6276;
					border-radius: 0.2px;
				}

				.border {
					height: 1px;
					display: inline-block;
					border-bottom: 1px solid rgb(91, 98, 118, 0.34);
					width: 100%;
					margin: 0 3px;
				}
			}
		}
	}
}
</style>


