import ajax from './ajax'
// 根据接口文档，定义接口请求函数
//包含应用中所有请求函数的模块,每个接口型函数都是promise
const base=''
// 登录
export const reqLogin=(username,password)=> ajax(base+'/login',{username,password},'POST')
// 添加用户
export const reqAddUser=(user)=>ajax('/manage/user/add',user,'POST')
