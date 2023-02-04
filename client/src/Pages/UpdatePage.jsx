import React, { useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getSingleProduct, updateProduct } from "../APIServices/APIServices";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

import Form from "react-bootstrap/Form";

const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleProduct(id).then(({ data }) => {
      ProductName.value = data.ProductName;
      ProductCode.value = data.ProductCode;
      Img.value = data.Img;
      UnitPrice.value = data.UnitPrice;
      Qty.value = data.Qty;
      TotalPrice.value = data.TotalPrice;
    });
  }, []);

  let ProductName,
    ProductCode,
    Img,
    UnitPrice,
    Qty,
    TotalPrice = useRef();

  const updateHandler = async () => {
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
    const result = await updateProduct(id, body);

    if (result?.status) {
      navigate("/all");
    }
  };

  return (
    <MDBContainer className="mt-5 spacing">
      <ToastContainer />
      <MDBRow className="pt-5">
        <MDBCol size="4">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            ref={(name) => (ProductName = name)}
            label="Product Name"
            id="productname"
            type="text"
          />
        </MDBCol>
        <MDBCol size="4">
          <Form.Label>Product Code</Form.Label>
          <Form.Control
            ref={(code) => (ProductCode = code)}
            id="productcode"
            type="text"
          />
        </MDBCol>
        <MDBCol size="4">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            ref={(image) => (Img = image)}
            pl
            id="productimage"
            type="text"
          />
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-4">
        <MDBCol size="4">
          <Form.Label>Product Unit Price</Form.Label>
          <Form.Control
            ref={(unit) => (UnitPrice = unit)}
            id="productunit"
            type="number"
          />
        </MDBCol>
        <MDBCol size="4">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control
            ref={(quantity) => (Qty = quantity)}
            id="productcode"
            type="number"
          />
        </MDBCol>
        <MDBCol size="4">
          <Form.Label>Total Price</Form.Label>
          <Form.Control
            ref={(price) => (TotalPrice = price)}
            id="productprice"
            type="number"
          />
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-4">
        <MDBCol size="4" className="text-left">
          <MDBBtn onClick={updateHandler} className="me-3">
            Update
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default UpdatePage;
