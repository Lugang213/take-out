/*
* 使用mockjs 提供的数据接口
*/
import Mock from 'mockjs'
import apiData from './data'

Mock.mock('/goods',{code:0,data:apiData.goods})
Mock.mock('/ratings',{code:0,data:apiData.ratings})
Mock.mock('/info',{code:0,data:apiData.info})
