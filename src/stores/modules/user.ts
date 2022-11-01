import { defineStore } from 'pinia'

const userStore = defineStore('user', () => {
  state:()=>{
    return {
       userName: 'keith',
       id: '7758521',
       list: [{
         name: 'ipone',
         price: 5800,
         count:1
       }]
     }
  }
},{
  // persist: true,// 持久化处理关键代码默认储存进localstorage,此处为用户信息，修改储存地点为sessionStorage
 persist:{
  key:'user',
  storage:sessionStorage
 }
})

