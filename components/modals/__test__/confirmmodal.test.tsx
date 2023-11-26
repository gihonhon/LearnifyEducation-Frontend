import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ConfirmModal } from "../confirm-modal"; // Update the import path based on your project structure

test("renders ConfirmModal component", () => {
  render(
    <ConfirmModal onConfirm={() => {}}>
      <button>Open Modal</button>
    </ConfirmModal>
  );

  // Check if the button to open the modal is rendered
  const openButton = screen.getByText("Open Modal");
  expect(openButton).toBeInTheDocument();
});

test("opens ConfirmModal when trigger button is clicked", async () => {
  render(
    <ConfirmModal onConfirm={() => {}}>
      <button>Open Modal</button>
    </ConfirmModal>
  );

  // Open the modal by clicking the trigger button
  const openButton = screen.getByText("Open Modal");
  await userEvent.click(openButton);

  // Check if the modal content is rendered
  const modalTitle = screen.getByText("Apa kamu yakin?");
  expect(modalTitle).toBeInTheDocument();
});

test("calls onConfirm when 'Continue' button is clicked", async () => {
  const mockOnConfirm = jest.fn();

  render(
    <ConfirmModal onConfirm={mockOnConfirm}>
      <button>Open Modal</button>
    </ConfirmModal>
  );

  // Open the modal
  const openButton = screen.getByText("Open Modal");
  await userEvent.click(openButton);

  // Click the 'Continue' button
  const continueButton = screen.getByText("Continue");
  await userEvent.click(continueButton);

  // Check if onConfirm callback was called
  expect(mockOnConfirm).toHaveBeenCalled();
});

test("closes modal when 'Cancel' button is clicked", async () => {
  render(
    <ConfirmModal onConfirm={() => {}}>
      <button>Open Modal</button>
    </ConfirmModal>
  );

  // Open the modal
  const openButton = screen.getByText("Open Modal");
  await userEvent.click(openButton);

  // Click the 'Cancel' button
  const cancelButton = screen.getByText("Cancel");
  await userEvent.click(cancelButton);

  // Check if the modal is closed
  const modalTitle = screen.queryByText("Apa kamu yakin?");
  expect(modalTitle).not.toBeInTheDocument();
});
