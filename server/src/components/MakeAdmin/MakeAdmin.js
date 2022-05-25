import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../firebase.init";
import useAllAdmin from "../hooks/useAllAdmin";
import useAllUsers from "../hooks/useAllUsers";
import Loading from "../Loading/Loading";

const MakeAdmin = () => {
  const [authUser] = useAuthState(auth);

  const [reload, setReload] = useState(false);

  const [allUsers, setAllUsers, isLoading] = useAllUsers(reload);
  const [allAdmin] = useAllAdmin(reload);

  const handleMakeAdmin = (email) => {
    setReload(true);
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReload(false);
        // setAllAdmin(data.admin);
      });
  };


  const handleRemoveAdmin = (email) => {
    if(email === authUser?.email){
      toast.error("You can't remove yourself from admin");
      return;
    }
    setReload(true);
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReload(false);
        // setAllAdmin(data.admin);
      });
  };

  

  const singleAdmin = allAdmin.map(({ email, role }, index) => {
    return (
      <tr>
        <td className="text-center">
          <small>{index + 1}</small>
        </td>
        <td className="text-center">
          <small>{email}</small>
        </td>
        <td className="text-center">
          <small>{role}</small>
        </td>
        <td className="text-center">
          <small>

      
          <button onClick={() => handleRemoveAdmin(email)} className="btn btn-danger d-block mx-auto">Remove</button>
           
           
          </small>
        </td>
      </tr>
    );
  });
  const singleUser = allUsers.map(({ email, role }, index) => {
    return (
      <tr>
        <td className="text-center">
          <small>{index + 1}</small>
        </td>
        <td className="text-center">
          <small>{email}</small>
        </td>
        <td className="text-center">
          <small>{role}</small>
        </td>
        <td className="text-center">
          <small>
            
           {
            //  find the admin with the same email as the user
            allAdmin.find(admin => admin.email === email) ? (
              <strong className="text-center text-danger">Admin</strong>
            ) : (
              <button onClick={() => handleMakeAdmin(email)} className="btn btn-success d-block mx-auto">Make Admin</button>
            )
           }
          </small>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h3 className="text-center text-success mb-4">Make Admin</h3>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div>
          <div className="container">
            <h4 className="text-muted mb-4">List Of All Users</h4>
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className="text-center">No.</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Role</th>
                  <th className="text-center"></th>
                </tr>
              </thead>
              <tbody>{singleUser}</tbody>
            </Table>
          </div>
          <div className="container mt-5">
            <h4 className="text-muted mb-4">List Of All Admin</h4>
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className="text-center">No.</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Role</th>
                  <th className="text-center"></th>
                </tr>
              </thead>
              <tbody>{singleAdmin}</tbody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakeAdmin;
