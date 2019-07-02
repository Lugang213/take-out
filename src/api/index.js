/*server*/
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'
// 获取地址信息
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 获取msite 页面食品分类列表
export const reqCategorys = () => ajax(BASE_URL+'/index_category')
// 获取msite 商品列表
export const reqShops = ({latitude,longitude}) =>ajax(BASE_URL+'/shops',{latitude,longitude})
// 根据经纬度搜索商家
export const reqSearchShops = (geohash) =>ajax(BASE_URL+'/search_shops',{keyword,geohash})
// 账号密码登录
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')
// 获取短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', {phone})
// 手机号验证码登录
export  const reqSmsLogin = (phone,code) => ajax(BASE_URL+'/login_sms',{phone,code},'POST')
// 获取用户信息（根据会话）
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')
// 登出
export const reqLogout = () => ajax(BASE_URL+'/logout')
// 获取商家信息
export const reqShopInfo = () => ajax('/info')
// 获取商家评价数组
export const reqShopRatings = () => ajax('/ratings')
// 获取商家商品数组
export const reqShopGoods = () => ajax('/goods')
