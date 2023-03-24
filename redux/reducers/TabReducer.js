import * as Types from '../types'

let initialState = {
  selectedTab: 'Home',
}

const TabReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_SELECTED_TAB: {
      return {
        ...state,
        selectedTab: action.payload.selectedTab,
      }
    }

    default: {
      return state
    }
  }
}

export default TabReducer
