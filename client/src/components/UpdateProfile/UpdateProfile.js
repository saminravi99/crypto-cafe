import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import "./UpdateProfile.css";

const UpdateProfile = () => {
  const [authUser] = useAuthState(auth);
  console.log(authUser);
  const [updateProfile] = useUpdateProfile(auth);
  const [user, setUser] = useState({});
  console.log(user);

  useEffect(() => {
    fetch(`https://manufacturer-xpart.herokuapp.com/user/${authUser?.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        email: `${authUser?.email}`,
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
      });
  }, [authUser?.email]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const image = data?.photoURL[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=91a25467b20a9debe14fa8cbbc3a4a74`;
    console.log(url);
    if (data?.photoURL[0]) {
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            console.log(result);
            const img = result.data.url;
            const userInfo = {
              displayName: data.displayName || authUser.displayName,
              institution: data.institution || user?.institution || "N/A",
              phoneNumber: data.phoneNumber || user?.phoneNumber || "N/A",
              address: data.address || user?.address || "N/A",
              dateOfBirth: data.dateOfBirth || user?.dateOfBirth || "N/A",
              photoURL:
                img ||
                "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
            };
            console.log(userInfo);
            fetch(`https://manufacturer-xpart.herokuapp.com/update/user/${authUser.email}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                email: `${authUser?.email}`,
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(userInfo),
            })
              .then((response) => response.json())
              .then((json) => {
                console.log(json);
                toast.success("Profile Updated Successfully");
                updateProfile({
                  displayName:
                    data?.displayName || authUser?.displayName || "N/A",
                  photoURL:
                    img ||
                    "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                });
                reset();
               
              });
          }
        });
    } else {
      const userInfo = {
        displayName: data?.displayName || authUser.displayName,
        institution: data?.institution || user?.institution || "N/A",
        phoneNumber: data?.phoneNumber || user?.phoneNumber || "N/A",
        address: data?.address || user?.address || "N/A",
        dateOfBirth: data?.dateOfBirth || user?.dateOfBirth || "N/A",
        photoURL:
          user?.photoURL ||
          authUser?.photoURL ||
          "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
      };
      console.log(userInfo);
      fetch(`https://manufacturer-xpart.herokuapp.com/update/user/${authUser.email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          email: `${authUser?.email}`,
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(userInfo),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          toast.success("Profile Updated Successfully");
          updateProfile({
            displayName: data?.displayName || authUser?.displayName || "N/A",
            photoURL:
              user?.photoURL ||
              authUser?.photoURL ||
              "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
          });
          reset();
          
        });
    }
    console.log(data);
    
  };

  return (
    <div>
      <h2 className="text-center text-success my-4">Update Your Profile</h2>
      <Form onSubmit={handleSubmit(onSubmit)} className="update-form mx-auto mb-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            {...register("displayName")}
            type="text"
            placeholder="John Doe"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Educational Institution</Form.Label>
          <Form.Control
            {...register("institution")}
            type="text"
            placeholder="University Of Dhaka"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            {...register("phoneNumber")}
            type="number"
            placeholder="+880"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your Profile Photo</Form.Label>
          <Form.Control {...register("photoURL")} type="file" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control
            {...register("dateOfBirth")}
            type="date"
            placeholder="04/11/2001"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Address</Form.Label>
          <Form.Control {...register("address")} as="textarea" rows={3} />
        </Form.Group>
        <Button
          type="submit"
          className="px-4 d-block mx-auto"
          variant="primary"
        >
          Save
        </Button>
      </Form>
    </div>
  );
};

export default UpdateProfile;
