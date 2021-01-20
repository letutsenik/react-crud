import { createActionTypes } from "./constantsBuilder";

export const GET_LIST = "GET_LIST";
export const GET_LIST_LOADING = "GET_LIST_LOADING";
export const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
export const GET_LIST_FAILURE = "GET_LIST_FAILURE";

export const GetListActionTypes = createActionTypes("GET_LIST"); //TODO: Remove
