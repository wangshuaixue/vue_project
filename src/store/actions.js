
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
  }
  
}
