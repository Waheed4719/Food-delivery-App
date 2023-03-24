import * as Types from '../types'


export const setSelectedTab = selectedTab => dispatch =>  {
  return dispatch({
    type: Types.SET_SELECTED_TAB,
    payload: {
      selectedTab,
    },
  })
}
