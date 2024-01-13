import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import appStore from "../../redux/appStore";
import RestrauntMenu from "../RestrauntMenu";
import Header from "../Header";
import MOCK_DATA from "../../mock/mockRestrauntCardMenu.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should locate Dessert section on Category page and count number of foodItems", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestrauntMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getAllByTestId("accordionHeading");
  expect(accordionHeader.length).toBe(10);

  const desertHeader = screen.getByText("Dessert");
  expect(desertHeader).toBeInTheDocument();

  fireEvent.click(desertHeader);
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(3);
});

it("should locate Dessert section on Category page and add it to cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestrauntMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const desertHeader = screen.getByText("Dessert");
  expect(desertHeader).toBeInTheDocument();

  fireEvent.click(desertHeader);
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(3);
  expect(screen.getByText("Cart - (0) Items"));

  const addBtn = screen.getAllByRole("button", { name: "+ Add" });
  console.log(addBtn.length);
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart - (2) Items")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(5);
});
