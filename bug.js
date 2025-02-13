In React Router Dom v6, when using nested routes with `useParams` hook, accessing a parameter from a parent route within a child route component can throw an error if the parent route parameter is not available.  This often happens if the child route is rendered directly without a parent route matching.  For example:

```javascript
// Parent Route
<Route path='/users/:userId' element={<User user_id={params.userId}/>}>
  <Route path=':userId/profile' element={<Profile/>}/>
</Route>

// Child Route (Profile.js)
const Profile = () => {
  const { userId } = useParams();
  // Error if /users/:userId is not matched
  console.log(userId); 
};
```

If a user directly navigates to `/users/123/profile`, `useParams` in `Profile` will correctly get `userId` as `123`. However, if the user is on a different route and then navigates directly to `/users/123/profile` without going through the parent route, `useParams` in `Profile` might not find the `userId` in the parent, leading to an error or unexpected behavior.