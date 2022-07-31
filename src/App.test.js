import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { ReactQueryWrapper } from "./utils/test";

import App from "./App";
import { useGHGTypes, useSingleGHGType } from "./api";

jest.mock("./api", () => ({
  useGHGTypes: jest.fn(),
  useSingleGHGType: jest.fn(),
}));

const mockGHGTypes = [
  {
    name: "methane",
    description: "some desc",
    product_variable: "mixing",
  },
  {
    name: "ozone",
    description: "some desc",
    product_variable: "mixing",
  },
  {
    name: "carbon",
    description: "some desc",
    product_variable: "mixing",
  },
];

beforeEach(() => {
  useGHGTypes.mockImplementation(() => ({
    isLoading: false,
    data: [],
  }));
  useSingleGHGType.mockImplementation(() => ({
    isLoading: false,
    data: [],
  }));
  jest.clearAllMocks();
});

test("App renders", () => {
  render(<App />, { wrapper: ReactQueryWrapper });
});

test("Should show ghg type list", () => {
  useGHGTypes.mockImplementation(() => ({
    isLoading: false,
    data: mockGHGTypes,
  }));
  useSingleGHGType.mockImplementation(() => ({
    isLoading: false,
    data: [],
  }));
  render(<App />, { wrapper: ReactQueryWrapper });
  expect(screen.getAllByTestId("ghg-list-item")).toHaveLength(3);
});

test("Should request new ghg type data on selection", () => {
  useGHGTypes.mockImplementation(() => ({
    isLoading: false,
    data: mockGHGTypes,
  }));
  useSingleGHGType.mockImplementation(
    jest.fn(() => ({
      isLoading: false,
      data: [],
    }))
  );
  render(<App />, { wrapper: ReactQueryWrapper });

  const ghgTypes = screen.getAllByTestId("ghg-list-item");
  expect(ghgTypes).toHaveLength(3);

  UserEvent.click(ghgTypes[0]);

  expect(useSingleGHGType).toHaveBeenCalledWith("");
});
