import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "../../components/Carousel";
import mediaMock from "../__mocks__/mediaMock";

describe("Carousel Component", () => {
  it("renders the carousel and displays initial items", () => {
    const { getByText } = render(<Carousel media={mediaMock} />);
    expect(getByText("Whispers of Ipsum")).toBeInTheDocument();
    expect(getByText("Forest of Dolor")).toBeInTheDocument();
  });

  it("navigates to the next item when 'Next' is clicked", () => {
    const { getByLabelText, getByText } = render(<Carousel media={mediaMock} />);
    const nextButton = getByLabelText("Next");
    fireEvent.click(nextButton);

    expect(getByText("Forest of Dolor")).toBeInTheDocument(); // Ensure new item is visible
  });

  it("navigates to the previous item when 'Previous' is clicked", () => {
    const { getByLabelText, getByText } = render(<Carousel media={mediaMock} />);
    const prevButton = getByLabelText("Previous");
    fireEvent.click(prevButton);

    expect(getByText("Mystic Adventures")).toBeInTheDocument(); // Last item circularly displayed
  });
});
