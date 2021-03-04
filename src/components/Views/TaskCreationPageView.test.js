import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import { render, cleanup } from "@testing-library/react";
import TaskCreationPageView from "./TaskCreationPageView";

afterEach(cleanup);

describe("TaskCreationPageView", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TaskCreationPageView />, div);
  });

  it("shows the test form fields", () => {
    const viewModelTest1 = {
      formLabel: "Sample Form",
      fieldElements: [
        {
          fieldId: "name",
          fieldLabel: "Sample Field",
          fieldType: "text",
          fieldValue: "",
        },
      ],
    };

    const { getByTestId } = render(
      <TaskCreationPageView viewModel={viewModelTest1} />
    );
    const textOfDOM = getByTestId("task-creation-page-view").textContent;

    expect(textOfDOM).to.have.string("Sample Form");
    expect(textOfDOM).to.have.string("Sample Field");
  });
});
