
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
  },
  
  //异步获取商品列表
  async getGoodList({commit}){
    const result=await reqCateList()
    if(result.code===0){
      const goodList=result.data
      commit(RECEIVE_CATELISTS,{goodList})
    }
  },
  
  //获取推荐列表
  async getColumns({commit},cb){
    const result=await reqColumn()
    if(result.code===0){
      const columns=result.data
      commit(RECEIVE_COLUMNS,{columns})
    }
    cb && cb()
  },
  //异步获取为你推荐列表
  async getRecommend({commit}) {
    const result=await reqRecommend()
    if(result.code===0){
      const recommend=result.data
      commit(RECEIVE_RECOMMEND,{recommend})
    }
  },
  //异步获取十点一刻的数据
  async getTenfifteens({commit},cb){
    const result=await reqTenfifteen()
    if(result.code===0){
      const tenfifteens=result.data
      commit(RECEIVE_TENFIFTEENS,{tenfifteens})
    }
    cb && cb()
  },
  
  //获取甄品数据
  async getchoosezhenpin({commit}){
    const result=await reqZhenpin()
    if(result.code===0){
      const choosezhenpin=result.data
      commit(RECEIVE_ZHENPIN,{choosezhenpin})
    }
  },
  //获取Look
  async getYxLook({commit}){
    const result=await reqYxLook()
    if(result.code===0){
      const yxLook=result.data
      commit(RECEIVE_YXLOOK,{yxLook})
    }
  },
  
  //识物列表中获取更多
  async getFindMores({commit}){
    const result=await reqFindMore()
    if(result.code===0){
      const findMores=result.data
      commit(RECEIVE_FINDMORES,{findMores})
    }
  }
  
  
  
}
