import { render, screen } from "@testing-library/react";
import RestrauntCard from "../RestrauntCard";
import MOCK_DATA from "../../mock/resCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestrauntCard";
it("should render Restrauntcard Component with Data", () => {
  render(<RestrauntCard data={MOCK_DATA} />);

  const name = screen.getByText("Fit Food Company");
  expect(name).toBeInTheDocument();
});

it("should render Restrauntcard with Promoted Label", () => {
  const HOC = withPromotedLabel(RestrauntCard);
  render(<HOC data={MOCK_DATA} />);

  const isPromoted = screen.getByText("Promoted");
  expect(isPromoted).toBeInTheDocument();
});
