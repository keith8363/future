const arrow = {
  'number-right-red':new URL(`@/assets/header/red.png`,import.meta.url).href,
  'number-right-green':new URL(`@/assets/header/green.png`,import.meta.url).href,
  'number-right-yellow':new URL(`@/assets/header/yellowjt.png`,import.meta.url).href,
}

export const getArrow = (val:string) => {
  return arrow[val]
}