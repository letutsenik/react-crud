import { expect } from "chai";
import { getListFailure, getListLoading, getListSuccess } from "../actions";
import { getResourceReducer, initialState } from "./resourceReducer";
import type { ResourceState } from "../types";

describe("resource reducer", () => {
  const userReducer = getResourceReducer("users");

  it("return correct init state", () => {
    expect(userReducer(initialState, getListLoading("tasks"))).to.deep.equal(
      initialState
    );
  });

  it("return correct", () => {
    const state: ResourceState = {
      data: {},
      ids: [],
      loading: true,
      error: null,
    };
    expect(userReducer(initialState, getListLoading("users"))).to.deep.equal(
      state
    );
  });

  it("return correct state on success", () => {
    const response = [
      { id: 1, name: "Bob" },
      { id: 2, name: "John" },
    ];

    const state: ResourceState = {
      data: { 1: { id: 1, name: "Bob" }, 2: { id: 2, name: "John" } },
      ids: [1, 2],
      loading: false,
      error: null,
    };

    expect(
      userReducer(initialState, getListSuccess("users", response))
    ).to.deep.equal(state);
  });

  it("return correct state on failure", () => {
    const error = "some error";
    const state: ResourceState = {
      data: {},
      ids: [],
      loading: false,
      error: "some error",
    };

    expect(
      userReducer(initialState, getListFailure("users", error))
    ).to.deep.equal(state);
  });
});