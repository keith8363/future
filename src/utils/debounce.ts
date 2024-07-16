// 函数截流
export const throttle = function (fn: Function, wait: number = 100) {
  let timeId: any = null, startTime = Date.now();
  return function (...ags: any) {
    const curTime = Date.now();
    const remaining = wait - (curTime - startTime);
    // 此函数上下文 
    let context = this
    // 调用此函数的实参
    timeId && clearTimeout(timeId);
    if (remaining <= 0) {
      fn.apply(context, ags);
      startTime = Date.now();
    } else {
      timeId = setTimeout(() => {
        fn.apply(context, ags);
        startTime = Date.now();
      }, remaining);
    }
  }
}

// 函数防抖
export const debounce = function (fn: Function, wait: number = 50) {
  let timeId: any = null;
  return function () {
    // 此函数上下文 
    let context = this
    // 调用此函数的实参
    let ags = arguments
    // 清除已有的定时器
    if (timeId) clearTimeout(timeId)
    // 定义回调函数是否执行的标志 
    let cllNow = !timeId
    // 起一个定时器
    timeId = setTimeout(() => {
      // 在wait内没有再次触发时重置timeId
      timeId = null
    }, wait)
    // 根据标记 是否执行回调函数
    if (cllNow) fn && fn.apply(context, ags)
  }
}

/**
 * 
 * @param str 字符串长度区分中英文
 * @returns 
 */
export const strlen = function (str: string) {
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    //单字节加1 
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      len++;
    }
    else {
      len += 2;
    }
  }
  return len;
}

