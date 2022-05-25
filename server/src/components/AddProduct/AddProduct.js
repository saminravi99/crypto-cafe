import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../firebase.init";
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import useTools from "../hooks/useTools";

const AddProduct = () => {

  const [tools, setTools, isLoading] = useTools();
  console.log(tools);

  // check if the product is already in the database

  


  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // const handleAddProduct = (e) => {
  //   e.preventDefault();
  // };

  const [authUser] = useAuthState(auth);

  //imgBB post API
  //https://api.imgbb.com/1/upload?key=process.env.IMGBB_API_KEY

  const onSubmit = async (data) => {
   console.log(tools.find((tool) => tool.toolName === data.toolName));
   const alreadyExist = tools.find((tool) => tool.toolName === data.toolName);
    if(!alreadyExist){
       const image = data.toolImage[0];
       const formData = new FormData();
       formData.append("image", image);
       const url = `https://api.imgbb.com/1/upload?key=91a25467b20a9debe14fa8cbbc3a4a74`;
       console.log(url);
       fetch(url, {
         method: "POST",
         body: formData,
       })
         .then((res) => res.json())
         .then((result) => {
           if (result.success) {
             console.log(result);
             const img = result.data.url;
             const tool = {
               toolName: data.toolName,
               toolImage: img,
               toolPrice: data.toolPrice,
               minOrder: data.minOrder,
               availableQuantity: data.availableQuantity,
               toolDescription: data.toolDescription,
             };
             fetch("http://localhost:5000/product", {
               method: "POST",
               headers: {
                 "content-type": "application/json",
                 authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                 email: authUser?.email,
               },
               body: JSON.stringify(tool),
             })
               .then((res) => res.json())
               .then((inserted) => {
                 console.log(inserted);
                 if (inserted._id) {
                   toast.success("Tool added successfully");
                   reset();
                 } else {
                   toast.error("Failed to add the toool");
                 }
               });
           }
         });
    }
    else{
      toast.error("Tool already exist");
    }
  };

  return (
    <div>
      <h3 className="text-center text-success mb-4">
        Add A Product In Our Database
      </h3>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="add-product-form mx-auto mb-5"
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tool Name</Form.Label>
          <Form.Control
            {...register("toolName", {
              required: {
                value: true,
                message: "Tool Price is Required",
              },
            })}
            type="text"
            placeholder="Wrench"
          />
          <p>
            {errors?.toolName?.type === "required" && (
              <span className="text-danger">{errors.toolName.message}</span>
            )}
          </p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tool Price</Form.Label>
          <Form.Control
            {...register("toolPrice", {
              required: {
                value: true,
                message: "Tool Price is Required",
              },
            })}
            type="number"
            placeholder="Tk.234"
          />
          <p>
            {errors?.toolPrice?.type === "required" && (
              <span className="text-danger">{errors.toolPrice.message}</span>
            )}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Minimun Order</Form.Label>
          <Form.Control
            {...register("minOrder", {
              required: {
                value: true,
                message: "Minimum Order Quantity is Required",
              },
            })}
            type="number"
            placeholder="100"
          />
          <p>
            {errors?.minOrder?.type === "required" && (
              <span className="text-danger">{errors.minOrder.message}</span>
            )}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control
            {...register("availableQuantity", {
              required: {
                value: true,
                message: "Available quantity is Required",
              },
            })}
            type="number"
            placeholder="1000"
          />
          <p>
            {errors?.availableQuantity?.type === "required" && (
              <span className="text-danger">
                {errors.availableQuantity.message}
              </span>
            )}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tool Image</Form.Label>
          <Form.Control
            {...register("toolImage", {
              required: {
                value: true,
                message: "Tool Image is Required",
              },
            })}
            type="file"
            placeholder="1000"
          />
          <p>
            {errors?.toolImage?.type === "required" && (
              <span className="text-danger">{errors.toolImage.message}</span>
            )}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Tool Description</Form.Label>
          <Form.Control
            {...register("toolDescription", {
              minLength: {
                value: 100,
                message: "Minimum 100 character required",
              },
              maxLength: {
                value: 200,
                message: "Maximum 200 character required",
              },
              required: {
                value: true,
                message: "Tool Description is Required",
              },
            })}
            as="textarea"
            rows={3}
          />
          <p className="mt-3">
            {(errors?.toolDescription?.type === "required" ||
              errors?.toolDescription?.type === "maxLength" ||
              errors?.toolDescription?.type === "minLength") && (
              <span className="text-danger">
                {errors?.toolDescription?.message}
              </span>
            )}
          </p>
        </Form.Group>
        <Button
          type="submit"
          className="px-4 d-block mx-auto"
          variant="primary"
        >
          Add This Product
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
