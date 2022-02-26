export const initialState = null;

export const reducer = (state, action) => {
  if (action.type === "USER") {
    console.log("redux called");
    return action.payload;
  }
  return state;
};
