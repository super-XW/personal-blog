
import { createStore } from 'vuex'
 
 
interface State {
  userName: string,
  collapsed: boolean
}


 
export default createStore({
  state(): State {
    return {
      userName: "子君",
      collapsed: false
    };
  },
  mutations:{
    activeCollapsed(state: State) {
      state.collapsed = !state.collapsed;
    }
  }
})
