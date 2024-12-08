
# ContactUI

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.2.

## Setup Instructions
Node.js: Install Node.js v22.
Angular CLI: Install Angular CLI globally:
````bash
npm install -g @angular/cli
````

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Clone the repository

https://github.com/sandy04121999/ContactUI.git

Install dependencies:
    npm install

## How to Run the Application
 1. First run API application
 ````bash
  dotnet run
  ````
 2. Run the Angular development server (Contract UI): 

 
	replace the API base url in cotract service "apiUrl" variable  
  ````bash
  ng serve
  ````

## Frontend (Angular)
The Angular app follows a modular structure to keep the code organized and scalable:

Components:
contact-details.component.ts: Manages the display and CRUD operations for contacts.
contact-details.component.ts (if modularized): Handles the modal form for creating and editing contacts.
Services:
contact.service.ts: Provides HTTP methods for interacting with the .NET Core API.
Validation:
Built-in Angular validation with Bootstrap classes ensures a clean user interface and feedback for form errors.

## Backend (.NET Core API)
The .NET Core API is structured using the repository pattern:

Controllers:
ContactsController: Handles API endpoints for CRUD operations on contacts.
Models:
Contact(Model): Represents the contact entity with fields like Id, FirstName, LastName, and Email.
Services:
ContactService: Encapsulates business logic for managing contacts.
Database:
Json file using to CURD operation.
Utils:- user for Read and Write Json file


## Modular Architecture:

Components are divided by responsibility, ensuring reusability and easier maintenance.
A service (ContactsService) is used for API communication, keeping components focused on presentation.
Validation:

Angular's template-driven validation is combined with Bootstrap classes to provide real-time feedback.
Styling:

Bootstrap is used for styling to maintain a clean and responsive UI with minimal custom CSS.

## .NET Core and Json file data:

.NET Core provides a robust and scalable framework for building the backend API.
 json data using for CURD operations 

RESTful API Design:

Follows REST principles, making the API predictable and easy to integrate.

Repository Pattern:

Encapsulates data access logic, ensuring a clear separation of concerns and testability.

## Future Enhancements
Add authentication and authorization.
Include unit tests for both frontend and backend.
Enhance the UI for better responsiveness on mobile devices.
Support pagination and search functionality for contacts.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
