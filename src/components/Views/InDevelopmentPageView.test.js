import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import { render, cleanup } from "@testing-library/react";
import InDevelopmentPageView from "./InDevelopmentPageView";

afterEach(cleanup);

describe("InDevelopmentPageView", () => {
  const viewModelTest1 = {
    showNotification: true,
    notificationText: "Info: example!",
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<InDevelopmentPageView />, div);
  });

  it("displays the error message and shows the information alert", () => {
    const { getByTestId } = render(
      <InDevelopmentPageView viewModel={viewModelTest1} />
    );
    const textOfDOM = getByTestId("in-development-page-view").textContent;

    expect(textOfDOM).to.have.string(
      "Whoopsies! Looks like you made an oopsy!"
    );
    expect(textOfDOM).to.have.string(
      " This page does not exist yet. Sorry about that! 😅"
    );
    expect(textOfDOM).to.have.string("Info: example!");
  });
});
