const handlers = {};

export const alertReducwr = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
};
