import { SHOW_ALERT } from "../types";

const handlers = {
  [SHOW_ALERT]: (state, { payload }) => ({ ...payload, visible: true }),
  DEFAULT: (state) => state,
};

export const alertReducwr = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
