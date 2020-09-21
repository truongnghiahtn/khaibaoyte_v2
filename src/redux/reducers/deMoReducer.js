import * as ActionType from "../constants/actionType";

let initialState = {
  TemplateList: [],
  tab: "1",
  template: "all",
  chude: "all",
};
const deMoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_TEMPLATE:
      state.TemplateList = action.Template;
      return { ...state };
    case ActionType.ACTION_TAB:
      state.tab = action.Tab;
      return { ...state };
    case ActionType.ACTION_SELECT:
      state.template = action.Select.IDTemplate;
      state.chude = action.Select.IDChuDe;
      console.log(state.template, state.chude);
      return { ...state };

    default:
      return { ...state };
  }
};
export default deMoReducer;
