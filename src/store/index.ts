
import { createStore } from 'vuex'
 
 
interface State {
  collapsed: boolean
}


 
export default createStore({
  state(): State {
    return {
      collapsed: false
    };
  },
  mutations:{
    activeCollapsed(state: State) {
      state.collapsed = !state.collapsed;
    }
  }
})
