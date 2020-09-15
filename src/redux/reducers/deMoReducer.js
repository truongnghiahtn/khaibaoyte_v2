import * as ActionType from "../constants/actionType";

let initialState = {
  TemplateList: [],
  tab: "1",
};
const deMoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_TEMPLATE:
      state.TemplateList = action.Template;
      console.log(state.TemplateList);
      return { ...state };
    case ActionType.ACTION_TAB:
      state.tab = action.Tab;
      return { ...state };

    default:
      return { ...state };
  }
};
export default deMoReducer;
