
import {
  RECEIVE_HEADCATES,
  RECEIVE_FOCUSLISTS,
  RECEIVE_TAGLISTS,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_POPULARITEMLISTS,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_TOPICLISTS,
  RECEIVE_CATELISTS,
  RECEIVE_BANNERS,
  RECEIVE_COLUMNS,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEENS,
  RECEIVE_ZHENPIN,
  RECEIVE_YXLOOK,
  RECEIVE_FINDMORES,
  RECEIVE_CATEGORYS
} from './mutation-type'

import {
  reqHeaderCateList,
  reqFocusList,
  reqTagList,
  reqNewItemList,
  reqPopularItemList,
  reqFlashSaleIndexVO,
  reqTopicList,
  reqCateList,
  reqBanner,
  reqColumn,
  reqRecommend,
  reqTenfifteen,
  reqZhenpin,
  reqYxLook,
  reqFindMore,
  reqCategoryData
} from '../api'

export default {
  //异步获取导航分类
  async getHeaderList({commit}){
      const result= await reqHeaderCateList();
      if(result.code===0){ //请求成功
        const headCates=result.data
        commit(RECEIVE_HEADCATES,{headCates})
      }
  },
  //异步获取轮播图片
  async getSwiperImg({commit}){
    const result=await reqFocusList()
    if(result.code===0){
      const focusList=result.data
      commit(RECEIVE_FOCUSLISTS,{focusList})
    }
  },
  //异步获取品牌制造商直供列表
  async getTagLists({commit}){
    const result=await reqTagList()
    if(result.code===0){
      const tagLists=result.data
      commit(RECEIVE_TAGLISTS,{tagLists})
    }
  },
  //异步获取新品列表数据
  async getNewItemList({commit},cb){  //因为是自定义的回调所以需要在这里执行一下
    const result=await reqNewItemList()
    if(result.code===0){
      const newItemList=result.data
      commit(RECEIVE_NEWITEMLISTS,{newItemList})
    }
    cb && cb()
  },
  //异步获取受欢迎的列表
  async getPopularList({commit},cb){
    const result=await reqPopularItemList()
    if(result.code===0){
      const popularList=result.data
      commit(RECEIVE_POPULARITEMLISTS,{popularList})
    }
    cb && cb()
  },
  //异步获取限时请购物品
  async getLimitItem({commit},cb){
    const result=await reqFlashSaleIndexVO()
    if(result.code===0){
      const limitItem=result.data
      commit(RECEIVE_FLASHSALEINDEXVO,{limitItem})
    }
    cb && cb()
  },
//  异步获取专题精选
  async getPicklist({commit},cb){
    const result=await reqTopicList()
    if(result.code===0){
      const picklist=result.data
      commit(RECEIVE_TOPICLISTS,{picklist})
    }
    cb && cb()
  }
  
  
  
}
