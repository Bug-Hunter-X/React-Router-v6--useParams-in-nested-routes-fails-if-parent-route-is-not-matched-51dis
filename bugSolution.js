// Parent Route
<Route path='/users/:userId' element={<User user_id={params.userId}/>}>
  <Route path=':userId/profile' element={<Profile/>}/>
</Route>

// Child Route (Profile.js)
const Profile = () => {
  const { userId } = useParams();
  //Error Handling to prevent undefined
  if (!userId) {
    return <Navigate to='/users' replace/>
  }
  return (
    <div>
      <h1>Profile</h1>
      <p>User ID: {userId}</p>
    </div>
  );
};