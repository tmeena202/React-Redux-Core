/* eslint-disable no-unused-vars */

// Creating action with Action Creator
// Action is a plain js object with type and payload
// Action Creator is a js function that return action object.

export const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
