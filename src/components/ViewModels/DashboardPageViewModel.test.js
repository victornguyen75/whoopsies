import { expect } from "chai";
import { act } from "react-dom/test-utils"; // Necessary for React hooks
import { renderHook } from "@testing-library/react-hooks"; // Necessary for React hooks
import useTaskCreation from "./DashboardPageViewModel";

test("viewModel", () => {
  const { result } = renderHook(() => useTaskCreation());

  // assert initial values
  expect(result.current.name).equal("");
  expect(result.current.priority).equal("");
  expect(result.current.release).equal("");
  expect(result.current.tasks).to.be.an("array");
  expect(result.current.tasks.length).equal(1);

  // add a new task
  act(() => result.current.setName("dummy task 1"));
  act(() => result.current.setPriority("12"));
  act(() => result.current.setRelease("12/23/2021"));
  act(() => result.current.addTask({ preventDefault() {} }));
  expect(result.current.tasks.length).equal(2);
});
