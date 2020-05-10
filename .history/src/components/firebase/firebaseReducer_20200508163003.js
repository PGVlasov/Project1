export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type];
  return handle(state, action);
};
