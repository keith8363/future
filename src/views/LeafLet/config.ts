
// 地图配置
export const config_for_world_map = [
  {
    label: '世界地图轮廓图',
    link: 'https://gis.xiamenair.com.cn/mapcache/tms/1.0.0/GmpMap@gmap/{z}/{x}/{y}.png',
    config: {
      attribution: false,
      tms: true,
      detectRetina: true
    }
  },
  {
    label: '世界地图卫星图',
    link: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    config: {
      attribution: false,
      detectRetina: true,
      // tms: true, 限制地图精度,放开后无法精确显示到机场
      maxZoom: 100,
      zIndex: 0
    }
  }
]

