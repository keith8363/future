import http from "@/utils/http";

// 封装各种请求
export const post = (url: string, data = {}) =>
  http.post(url, Object.assign(data));
export const get = (url: string, params = {}) =>
  http.get(url, Object.assign(params));

// 接口说明
// post示例
// const GetSettings = data => post('GetSettings', data)
// get示例
// const GetSettings = params => get('GetSettings', params)

// 使用说明

// GetSettings({ Did: 4 }).then((res) => {
//     console.log(res);
// });

// 常用接口封装
// 获取配置信息

// export const GetSettings = (params: any) => get("getrouters", params);
// export const SetSettings = (params: any) => post("getrouters", params);
