# User Profiles React Application

This project is a simple React application that displays a list of user profiles fetched from an API. Each user's profile includes an image, username, age, gender, and company name, and is styled using Bootstrap's card component.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)


## Features
- Fetches user data from an external API
- Displays user profiles in a responsive grid layout
- Provides search functionality to filter users by username
- Uses Bootstrap for styling

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Assignment.git
   cd Assignment




## Usage
Once the development server is running, the application will display a list of user profiles. You can use the search bar to filter users by their username.

## API Reference

### Endpoint
- **URL:** `https://dummyjson.com/users`
- **Method:** `GET`
- **Description:** This endpoint retrieves a list of users. Each user object contains basic personal information, associated company details, and a profile image.

### Response Schema
The response is a JSON array of user objects. Each object contains the following fields:

```json
[
  {
    "id": 1,                    // Unique identifier for the user
    "username": "johndoe",      // User's username
    "age": 25,                  // User's age
    "gender": "male",           // User's gender
    "company": {
      "name": "Tech Corp"       // Name of the company the user is associated with
    },
    "image": "https://robohash.org/1.png"  // URL to the user's profile image
  },
  ...
]


