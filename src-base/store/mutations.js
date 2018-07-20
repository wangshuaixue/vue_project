import {RECEIVE_HEADCATES,
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

export default {
  [RECEIVE_HEADCATES](state,{headCates}){
    state.headCates=headCates;
  },
  [RECEIVE_FOCUSLISTS](state,{focusList}){
    state.focusList=focusList;
  },
  [RECEIVE_TAGLISTS](state,{tagLists}){
    state.tagLists=tagLists
  },
  [RECEIVE_NEWITEMLISTS](state,{newItemList}){
    state.newItemList=newItemList
  },
  [RECEIVE_POPULARITEMLISTS](state,{popularList}){
    state.popularList=popularList
  },
  [RECEIVE_FLASHSALEINDEXVO](state,{limitItem}){
    state.limitItem=limitItem
  },
  [RECEIVE_TOPICLISTS](state,{picklist}){
    state.picklist=picklist
  }
}
