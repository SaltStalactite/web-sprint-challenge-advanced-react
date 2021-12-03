import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstName = screen.getByLabelText(/First Name/i)
    userEvent.type(firstName, 'Chris')

    const lastName = screen.getByLabelText(/Last Name/i)
    userEvent.type(lastName, 'Castillo')

    const addressInput = screen.getByLabelText(/Address/i)
    userEvent.type(addressInput, '123 St')

    const cityInput = screen.getByLabelText(/City/i)
    userEvent.type(cityInput, 'Orlando')

    const stateInput = screen.getByLabelText(/State/i)
    userEvent.type(stateInput, 'Florida')

    const zipInput = screen.getByLabelText(/Zip/i)
    userEvent.type(zipInput, '12345')

    const button = screen.getByRole('button')
    userEvent.click(button)

    const success = screen.getByTestId('successMessage')
    expect(success).toBeInTheDocument();
});
