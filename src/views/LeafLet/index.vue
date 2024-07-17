<template>
  <div class="app-container">
    <div id="route_analyse_map"></div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { config_for_world_map } from './config';
import trackData from './mock';
import { ref,reactive,onMounted } from 'vue'

  const map = ref(null)

  const mapConfigs = reactive({
    center: [25.767875, 109.824725],
    zoom: 6, // 缩放比例
    zoomControl: true, // 禁用 + - 按钮
    doubleClickZoom: true, // 禁用双击放大
    attributionControl: true, // 移除右下角leaflet标识
    trackResize: true, // 开启地图自适应
    dragging: true, // 地图可拖动
    scrollWheelZoom: true // 允许滚轮放大
  })

  const polylineConfig = {
    color: '#efff00',
    weight: 1,
    stroke: true,
    lineCap: 'butt',
    opacity: 0.5
  }

  const title = ref(null)

  const initMap = () => {
    map.value = L.map('route_analyse_map', mapConfigs)
  }

  const initLayer = () => {
    const currentMap = config_for_world_map[1]
    const { link, config } = currentMap
    // 引入整体图层
    L.tileLayer(link, config).addTo(map.value)
  }

  const initControl = () => {
      drawRouteTrack()
      // 初始化zoom控件
      L.control.zoom()
  }

  const getMapBaseLayers = () => {
      const satelliteImage = L.tileLayer(config_for_world_map[1].link, config_for_world_map[1].config)
      const skeletonMap = L.tileLayer(config_for_world_map[0].link, config_for_world_map[0].config)

      const baseLayers = {
        '世界地图轮廓图': skeletonMap,
        '世界地图卫星图': satelliteImage
      }

      return baseLayers
  }

    // 渲染航线轨迹并添加图层控件
    // 后台格式要求航线代号 + 航线轨迹二维数组
  const drawRouteTrack = () => {
      const trackLayers = {}
      const track = trackData
      const data = track.data.actualPositions[0].positions
      const newTrack = data.map(item => {
          return [item.lati, item.longi]
      })
      const newConfig = JSON.parse(JSON.stringify(polylineConfig))
      const line = L.polyline(newTrack, newConfig)
      const name =  '计划轨迹' 
      trackLayers[name] = line
      initMarker(track)
      const allLayers = Object.assign(getMapBaseLayers(), trackLayers)

      // 添加图层控件
      L.control.layers(allLayers).addTo(map.value)
  }

  const initMarker = (track) => {
      let num = 25
      const data = track.data.actualPositions[0].positions
      data.forEach((i,index) => {
        const value = index%num === 0
        const point = L.divIcon({
          className:'my-div-icon',
          html: value ? `<p>${i.source}</p>` : null
        })

        const params = {
          title: i.source, 
          icon: point
        }

        L.marker([i.lati, i.longi], params).addTo(map.value)
      })
  }

  onMounted(() => {
    initMap()
    initLayer()
    // 控件相关
    initControl()
  })
</script>
<style lang='scss' scoped>
.app-container {
  position: relative;
  padding: 20px;

  #route_analyse_map {
    width: 100%;
    height: 100%;
    border-radius: 5px;

    :deep(.my-div-icon) {
      color: #fff;
      border-radius: 50%;
      background-color: yellowgreen;
      opacity: 1;
      transform: scale(0.1) rotate(90deg);
      z-index: 999;
      color:black;
    }
  }

  .title {
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    top: 50px;
    left: 80px;
    z-index: 999;
  }
}
</style>
