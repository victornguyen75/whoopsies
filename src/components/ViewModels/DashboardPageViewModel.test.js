import { expect } from "chai";
import { act } from "react-dom/test-utils"; // Necessary for React hooks
import { renderHook } from "@testing-library/react-hooks"; // Necessary for React hooks
import useTaskCreation from "./DashboardPageViewModel";

test("the viewModel's initial values", () => {
  const { result } = renderHook(() => useTaskCreation());
  expect(result.current.formLabel).equal("Task Creation Form");
  expect(result.current.fields).to.be.an("array");
  expect(result.current.fields.length).equal(10);
  expect(result.current.tasks).to.be.an("array");
  expect(result.current.tasks.length).equal(0);
});

test("the viewModel to handle the form submission", () => {
  const { result } = renderHook(() => useTaskCreation());
  const testId = "123";
  const testProject = "Whoopsies";
  const testName = "Unit Testing the View Model";

  // Input Change
  act(() => result.current.handleChange("id", { target: { value: testId } }));
  act(() =>
    result.current.handleChange("project", { target: { value: testProject } })
  );
  act(() =>
    result.current.handleChange("name", { target: { value: testName } })
  );
  expect(result.current.fields[0].fieldValue).equal(testId);
  expect(result.current.fields[1].fieldValue).equal(testProject);
  expect(result.current.fields[2].fieldValue).equal(testName);

  // Form Submission
  act(() => result.current.handleSubmit({ preventDefault() {} }));
  expect(result.current.tasks[0].id).equal(testId);
  expect(result.current.tasks[0].project).equal(testProject);
  expect(result.current.tasks[0].name).equal(testName);
  expect(result.current.tasks.length).equal(1);
});
