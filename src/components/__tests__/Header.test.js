import Header from "../Header";
import appStore from "../../redux/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load header component with Home and Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const home = screen.getByText("Home");
  expect(home).toBeInTheDocument();

  const cart = screen.getAllByTestId("cart");
  expect(cart).toBeInTheDocument();
});

// it("Should test login button functionality", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const loginButton = screen.getByRole("button", { name: "Login" });
//   fireEvent.click(loginButton);
//   const logoutButton = screen.getByRole("button", { name: "Logout" });
//   expect(logoutButton).toBeInTheDocument();
// });
