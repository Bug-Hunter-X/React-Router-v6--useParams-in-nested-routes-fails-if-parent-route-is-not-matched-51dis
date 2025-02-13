# React Router v6 Nested Route useParams Bug

This repository demonstrates a common issue when using the `useParams` hook with nested routes in React Router v6.  If a child route is accessed directly without the parent route being matched, accessing parent route parameters can lead to errors.

## Problem

The `useParams` hook in a child route might not find parent route parameters if the parent route is not currently active in the routing history.  This often leads to unexpected behavior or runtime errors.

## Solution

The provided solution uses a conditional rendering approach to only render the child component if the parent route parameter is available. This ensures that `useParams` correctly retrieves the parameters.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Try navigating directly to `/users/123/profile` without first visiting `/users/123`.  You will see the error in the console.
5. Now navigate to `/users/123`, then to `/users/123/profile`. It will work correctly.
