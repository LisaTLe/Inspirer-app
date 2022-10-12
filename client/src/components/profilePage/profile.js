import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Table from "./table";

function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <h1>Welcome To Your Inspirer Board: </h1>
      {user ? (
        <>
          <p>{user.email} is logged in!</p>
          <Table />
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