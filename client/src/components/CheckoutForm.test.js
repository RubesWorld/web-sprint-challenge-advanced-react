  
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>) //Arrange

    //Act 
    let header = screen.queryByText(/checkout Form/i);

    //Assert 
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>) //arrange

        //Act
    //1. Gety our input fieldes
    let firstNameInput = screen.getByLabelText(/first name:/i)
    let lastNameInput = screen.getByLabelText(/last name:/i)
    let addyInput = screen.getByLabelText(/address:/i)
    let cityInput = screen.getByLabelText(/city:/i)
    let stateInput = screen.getByLabelText(/state:/i)
    let zipInput = screen.getByLabelText(/zip:/i)
    let button = screen.getByRole('button')

    //2. Type values into our inputs
    userEvent.type(firstNameInput,"name")
    userEvent.type(lastNameInput,"lastname")
    userEvent.type(addyInput,"846 addy")
    userEvent.type(cityInput,"stockton")
    userEvent.type(stateInput,"CA")
    userEvent.type(zipInput,"95203")

    //3. push the checkout 
    userEvent.click(button)

    //Assert
    const newFirst = screen.getByDisplayValue('name')
    const newLast = screen.getByDisplayValue('lastname')
    const newAddy = screen.getByDisplayValue('846 addy')
    const newCity = screen.getByDisplayValue('stockton')
    const newState = screen.getByDisplayValue('CA')
    const newZip = screen.getByDisplayValue('95203')
    const success = screen.getByTestId('successMessage')
    
    expect(newFirst).toBeInTheDocument();
    expect(newLast).toBeInTheDocument();
    expect(newAddy).toBeInTheDocument();
    expect(newCity).toBeInTheDocument();
    expect(newState).toBeInTheDocument();
    expect(newZip).toBeInTheDocument();
});