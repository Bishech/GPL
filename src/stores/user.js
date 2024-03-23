import { createEvent, createStore } from "effector";
import { persist } from "effector-storage/local";

export const setUserToken = createEvent();

export const $userToken = createStore(null).on(setUserToken, (_, userToken) => {
  return userToken;
});

persist({ store: $userToken, key: "token" });
