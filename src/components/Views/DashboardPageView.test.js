import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import { render, cleanup } from "@testing-library/react";
import DashboardPageView from "./DashboardPageView";

afterEach(cleanup);

describe("DashboardPageView", () => {
  const viewModelTest1 = {
    tasks: [
      {
        id: 1,
        name: "Test 1",
        status: "TO DO",
      },
      {
        id: 2,
        name: "Test 2",
        status: "IN ANALYSIS",
      },
    ],
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DashboardPageView />, div);
  });

  it("filters the tasks in the proper lists", () => {
    const { getByTestId } = render(
      <DashboardPageView viewModel={viewModelTest1} />
    );
    const textOfDOM = getByTestId("dashboard-page-view").textContent;
    expect(textOfDOM).to.have.string("TO DO (1)");
    expect(textOfDOM).to.have.string("IN ANALYSIS (1)");
  });
});
