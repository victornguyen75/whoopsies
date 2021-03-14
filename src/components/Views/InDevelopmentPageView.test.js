import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import { render, cleanup } from "@testing-library/react";
import InDevelopmentPageView from "./InDevelopmentPageView";

afterEach(cleanup);

describe("InDevelopmentPageView", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<InDevelopmentPageView />, div);
  });

  it("displays the error message", () => {
    const { getByTestId } = render(<InDevelopmentPageView />);
    const textOfDOM = getByTestId("in-development-page-view").textContent;

    expect(textOfDOM).to.have.string(
      "Whoopsies! Looks like you made an oopsy!"
    );
    expect(textOfDOM).to.have.string(
      " This page does not exist yet. Sorry about that! 😅"
    );
  });
});
