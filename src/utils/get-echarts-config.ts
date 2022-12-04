// 获取Echarts关于地图的配置
export const getEchartsConfig = (type: string, name: string, id: any) => {
  const more_config = type === "map3D" ? config_3d(id) : {};
  return {
    type, // map3D、map
    map: name,
    selectedMode: "single", // 单选高亮
    width: "auto",
    height: "auto",
    // 标签设置
    label: {
      show: true, //是否显示市
      color: "rgba(0, 0, 0, 0.3)", // 文字颜色
      fontSize: 8, // 文字大小
      fontFamily: "Gill Sans",
    },
    ...more_config,
  };
};

const config_3d = (id: any) => {
  return {
    regionHeight: 4, // 地图高度
    boxDepth: 145, //地图倾斜度
    boxWidth: 100,
    boxHeight: 5,
    // 配置为垂直渐变的背景
    // environment: new id.graphic.LinearGradient(
    //   0,
    //   0,
    //   0,
    //   1,
    //   [
    //     {
    //       offset: 0,
    //       color: "#00aaff", // 天空颜色
    //     },
    //     {
    //       offset: 0.7,
    //       color: "#998866", // 地面颜色
    //     },
    //     {
    //       offset: 1,
    //       color: "#998866", // 地面颜色
    //     },
    //   ],
    //   false
    // ),
    // 地面配置
    groundPlane: {
      show: false,
      color: "#ccc",
      instancing: true, // 将geometry几何图形合并成一个,提高渲染效率
    },
    // 地图基础配置
    itemStyle: {
      color: "#2B5890", // 地图颜色
      borderWidth: 1, // 分界线width
      opacity: 0.6,
      borderColor: "#5578A5", // 分界线颜色
    },
    // 高亮时的样式
    emphasis: {
      label: {
        show: true, // 是否显示高亮
        color: "fff", // 高亮文字颜色
      },
      itemStyle: {
        color: "#0489d6", // 地图高亮颜色
      },
    },
    // 3D地图操作效果
    viewControl: {
      distance: 135,
      // projection: "orthographic", // 正交投影
      autoRotate: false, // 自动旋转
      rotateSensitivity: [2, 2], //横纵向旋转灵敏度
      zoomSensitivity: 1, //缩放操作灵敏度
      panSensitivity: 1, //平移操作灵敏度
      panMouseButton: "right", // 平移操作使用的鼠标按键
      rotateMouseButton: "left", // 旋转操作使用的鼠标按键
      animation: false, //开启动画
    },
  };
};
