# excel-sheet-generator

This code demonstrates how to use SweetAlert.js to display error alerts in a web page.
It includes error handling for two scenarios: when the user clicks "generate" without entering the required fields, and when the user clicks "export" without a generated table to export.

- I used a CDN to called the SweetAlert.js library HTML file.

## Changes Made

The following changes have been made to the original code:

1. Replaced the usage of `getElementsByClassName` with `querySelector` to select the HTML elements for the table, rows, and columns.
   This change allows for more flexibility in selecting the elements using CSS selectors.

2. Added a new function called `errorAlert(text, confirmButtonText)` that displays an error alert using SweetAlert.js.
   This function is called when there are validation errors during table generation or exporting.

3. Modified the `generateTable()` function to include validation for the rows and columns input fields.
   If any of the input values are missing or not greater than zero, the `errorAlert()` function is called to display an error message.

4. Modified the `ExportToExcel()` function to check if a table has been generated before exporting.
   If no table has been generated, the `errorAlert()` function is called to display an error message.
