import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import { render, cleanup } from "@testing-library/react";
import TaskFormPageView from "./TaskFormPageView";

afterEach(cleanup);

describe("TaskFormPageView", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TaskFormPageView />, div);
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
      <TaskFormPageView viewModel={viewModelTest1} />
    );
    const textOfDOM = getByTestId("task-creation-page-view").textContent;

    expect(textOfDOM).to.have.string("Sample Form");
    expect(textOfDOM).to.have.string("Sample Field");
  });
});
