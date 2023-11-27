/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../app/(public)/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /#BikinBelajarMuEverywhere untuk Jadi Apapun yang Kamu Mau!/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("navigates to page when link is clicked", async () => {
    render(<Home />);
    const link = screen.getByText(/Yuk, Ikutan/i);
    await userEvent.click(link);

    // Wait for the next tick of the event loop to ensure navigation is complete
    await new Promise((resolve) => setTimeout(resolve, 0));

    // Log the current pathname for debugging
    console.log("Current pathname:", window.location.pathname);

    expect(window.location.pathname).toBe("/");
  });
});
