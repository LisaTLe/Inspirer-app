import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <h1>Welcome To Your Inspirer Board: </h1>
      {user ? (
        <>
          <p>{user.username} is logged in!</p>
        </>
      ) : (
        <>
          <p>There Is No User Data</p>
        </>
      )}
    </>
  );
}

export default Profile;
