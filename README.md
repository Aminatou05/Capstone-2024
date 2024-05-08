 # Jallow-Aminatou-capstone
 REACT MERN  REAL STATE APPLICATION.
# Authentication System
This project implements a basic authentication system using Node.js. It includes functionality for user signup and signin.
## Features
- **User Signup**: New users can register by providing a username, email, and password.
- **User Signin**: Registered users can login using their email and password.
- **Password Encryption**: Passwords are hashed using bcryptjs before being stored in the database.
- **JWT Authentication**: Upon successful signin, a JSON Web Token (JWT) is generated for session management.
2. Install dependencies with `npm install`.
3. Set up your environment variables for `JWT_SECRET`.
## Routes
- To **signup** a new user, send a POST request to `/signup` with `username`, `email`, and `password`.
- To **signin** an existing user, send a POST request to `/signin` with `email` and `password`.
## Dependencies
- `bcryptjs`: For hashing and comparing passwords.
- `jsonwebtoken`: For generating and verifying JWT tokens.
- `express`: As the web framework.
- `mongoose`: For database interactions.
## Environment Variables
- `JWT_SECRET`: A secret key for JWT token generation.

# Listing API
This API provides endpoints for managing listings.
## Routes
### Create a New Listing
- **POST** `/create`
  - Requires authentication token (verifyToken middleware)
  - Creates a new listing
### Delete a Listing
- **DELETE** `/delete/:id`
  - Requires authentication token (verifyToken middleware)
  - Deletes a listing by ID
### Update a Listing
- **POST** `/update/:id`
  - Requires authentication token (verifyToken middleware)
  - Updates a listing by ID
### Get a Listing by ID
- **GET** `/get/:id`
  - Retrieves a listing by ID
### Get All Listings
- **GET** `/get`
  - Retrieves all listings

# Capstone-2024 Frontend features
React Header Component
This is a React component named Header that serves as the header section of a web application. It includes a search form and the application's logo/name.
Features
Displays the application logo/name.
Includes a search form with a search input field and a search button.
Utilizes React hooks like useState to manage the search term state and useSelector to access data from the Redux store.
Uses React Router's useNavigate hook to navigate to the search results page.
Uses React Router's Link component to navigate to the home page.
Dependencies

React Router
React Redux
This is a React component named CreateListing that allows users to create a listing with images, which are uploaded to Firebase Storage.
Features
Allows users to input listing details such as name, description, address, type (rent or sale), bedrooms, bathrooms, etc.
Supports image uploads for the listing, with the first image being designated as the cover image.
Validates input data, such as ensuring a minimum of one image is uploaded and that the discount price is lower than the regular price.
Utilizes Firebase Storage for image storage and retrieval.
Uses Redux for state management, specifically accessing the current user information.
Uses React Router's useNavigate hook for navigation upon listing creation.
Dependencies

Redux
React Router
Firebase
The Search component is a React component that allows users to search for listings. It integrates with a backend API to fetch and display relevant listings based on search criteria. and i used toLocaleString() method to format numbers in JavaScript with commas in my Search.jsx page and ListingItem page. used  react icons on my search forms and listings page with he Swiper component, there’s a conditional check for saleListings (presumably an array of sale listings).
If saleListings exists and has a length greater than 0, the code maps over each listing and creates a SwiperSlide for each one. lastly, I used Tailwind CSS to styles my frontend. 