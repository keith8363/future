// 控制layout组件左右按钮路由跳转效果
export const getPath = (
  currentIndex: number,
  routerMenu: Array<string>,
  diraction: string
) => {
  let index = null;
  const maxIndex = routerMenu.length - 1;
  if (diraction === "left") {
    currentIndex === 0 ? (index = maxIndex) : (index = currentIndex - 1);
  } else {
    currentIndex === maxIndex ? (index = 0) : (index = currentIndex + 1);
  }
  return routerMenu[index];
};
