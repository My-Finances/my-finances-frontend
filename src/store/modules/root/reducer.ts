import produce from "immer";

const INITIAL_STATE = {
  themeDefault: true,
};

export default function root(state = INITIAL_STATE, action: any) {
  return produce(state, (draft: any) => {
    switch (action.type) {
      case "@root/CHANGE_THEME": {
        draft.themeDefault = action.payload.theme;
        break;
      }
      default:
    }
  });
}
