import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAllProducts, deleteProduct } from "../../APIServices/APIServices";
import { MDBBtn } from "mdb-react-ui-kit";
const InfoTable = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  useEffect(() => {
    getAllProducts().then(({ data }) => {
      setItems(data);
    });
  }, []);

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure to delete?")) {
      const operation = await deleteProduct(id);
      if (operation?.status) {
        window.location.reload();
      }
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Product Code</th>
          <th>Product Image</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((row, index) => (
          <tr key={row._id}>
            <td>{index + 1}</td>
            <td>{row.ProductName}</td>
            <td>{row.ProductCode}</td>
            <td>
              <img width={100} src={row.Img} alt={row.ProductName} />
            </td>
            <td>{row.UnitPrice}$</td>
            <td>{row.Qty}</td>
            <td>{row.TotalPrice}$</td>
            <td>
              <MDBBtn
                onClick={() => {
                  navigate(`/update/${row._id}`);
                }}
                className="me-0 me-1"
                color="primary"
              >
                Edit
              </MDBBtn>

              <MDBBtn
                onClick={() => {
                  deleteHandler(row._id);
                }}
                className="me-0 ms-1"
                color="danger"
              >
                Delete
              </MDBBtn>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InfoTable;
