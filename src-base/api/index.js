
//发送ajax请求函数接口
import ajax from './ajax'

//头部分类列表
export const reqHeaderCateList=()=>ajax('/headCateList')
export const reqFocusList = () => ajax('/focusList')
export const reqTagList = () => ajax('/tagList')
export const reqNewItemList = () => ajax('/newItemList')
export const reqPopularItemList = () => ajax('/popularItemList')
export const reqFlashSaleIndexVO = () => ajax('/flashSaleIndexVO')
export const reqTopicList = () => ajax('/topicList')
export const reqCateList = () => ajax('/cateList')


export const reqBanner = () => ajax('/banner')
export const reqColumn = () => ajax('/column')
export const reqRecommend = () => ajax('/recommend')
export const reqTenfifteen = () => ajax('/tenfifteen')
export const reqZhenpin = () => ajax('/zhenpin')
export const reqYxLook = () => ajax('/yxLook')
export const reqFindMore = () => ajax('/findMore')


export const reqCategoryData = () => ajax('/categoryData')
