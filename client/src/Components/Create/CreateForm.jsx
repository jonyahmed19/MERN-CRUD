import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { createProduct } from "../../APIServices/APIServices.js";

const CreateForm = () => {
  let ProductName,
    ProductCode,
    Img,
    UnitPrice,
    Qty,
    TotalPrice = useRef();

  const navigate = useNavigate();
  const submitHandler = async () => {
    if (
      ProductName.value.length < 1 ||
      ProductCode.value.length < 1 ||
      Img.value.length < 1 ||
      UnitPrice.value.length < 1 ||
      Qty.value.length < 1 ||
      TotalPrice.value.length < 1
    ) {
      toast.error("Fields must not be empty!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    const body = {
      ProductName: ProductName.value,
      ProductCode: ProductCode.value,
      Img: Img.value,
      UnitPrice: UnitPrice.value,
      Qty: Qty.value,
      TotalPrice: TotalPrice.value,
    };
    const result = await createProduct(body);

    if (result?.status) {
      navigate("/all");
    }
  };

  return (
    <MDBContainer className="mt-5 spacing">
      <ToastContainer />
      <MDBRow className="pt-5">
        <MDBCol size="4">
          <MDBInput
            ref={(name) => (ProductName = name)}
            label="Product Name"
            id="productname"
            type="text"
          />
        </MDBCol>
        <MDBCol size="4">
          <MDBInput
            ref={(code) => (ProductCode = code)}
            label="Product Code"
            id="productcode"
            type="text"
          />
        </MDBCol>
        <MDBCol size="4">
          <MDBInput
            ref={(image) => (Img = image)}
            label="Product Image"
            id="productimage"
            type="text"
          />
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-4">
        <MDBCol size="4">
          <MDBInput
            ref={(unit) => (UnitPrice = unit)}
            label="Product Unit Price"
            id="productunit"
            type="number"
          />
        </MDBCol>
        <MDBCol size="4">
          <MDBInput
            ref={(quantity) => (Qty = quantity)}
            label="Product Quantity"
            id="productcode"
            min={1}
            type="number"
          />
        </MDBCol>
        <MDBCol size="4">
          <MDBInput
            ref={(price) => (TotalPrice = price)}
            label="Total Price"
            id="productprice"
            type="number"
          />
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-4">
        <MDBCol size="4" className="text-left">
          <MDBBtn onClick={submitHandler} className="me-3">
            Submit
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CreateForm;
