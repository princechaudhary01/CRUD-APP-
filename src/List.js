import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
// import { Modal } from "bootstrap";
import Modal from "react-modal";

function List({ data, setFormData, setAllData, setEnb, Enb, editVal ,  img:imageUrl}) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [edata, setEdata] = useState({});

  const handleDelete = (id) => {
    const newRec = data.filter((elem) => {
      return elem.id !== id;
    });
    swal({
      title: "Are you sure?",
      text: "Do You Really Want to Delete This?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Congratulations Your File is deleted", {
          icon: "success",
        });
        setFormData({ name: "", email: "", gender: "", dob: "" , img:""});
        setAllData(newRec);
      } else {
        swal("Your  file is safe!");
      }
    });
  };

  const dltAll = () => {
    swal({
      title: "Are you sure?",
      text: "Do You Really Want to Delete This?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Congratulations Your File is deleted", {
          icon: "success",
        });
        setAllData([]);
      } else {
        swal("Your  file is safe!");
      }
    });
  };

  const viewDeatails = (id) => {
    console.log('id', id);
    const vieData = data.find((elem) => elem.id === id);
    console.log('vieData', vieData);
    setEdata(vieData);
  };

  return (
    <div className="mx-5">
      <table className="table border shadow">
        <thead className="table-dark">
          <tr>
          
            <th scope="col">id</th>
            <th scope="col">image</th>
            <th scope="col">Username</th>
            <th scope="col">email</th>
            <th scope="col">Gender</th>
            <th scope="col">Date of birth</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((elem) => {
              return (
                <tr key={elem.id}>
                  <th scope="row">{elem.id}</th>
                  <td><img src={elem.img} alt="computer jpg" width="50px" /></td>
                  <td>{elem.name}</td>
                  <td>{elem.email}</td>
                  <td>{elem.gender}</td>
                  <td>{elem.dob}</td>
                  <td>
                    <button
                      className="btn btn-sucess m-2 btn-sm"
                      onClick={() => {setIsOpen(true); viewDeatails(elem.id)} }
                    >
                      <VisibilityIcon />
                    </button>

                    <button
                      className="btn btn-warning m-2 btn-sm"
                      onClick={() => {
                        navigate(`/Edit/${elem.id}`);
                        editVal(elem.id);
                      }}
                    >
                      <EditIcon />
                    </button>

                    <button
                      className="btn btn-danger m-2 btn-sm"
                      onClick={() => {
                        handleDelete(elem.id);
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <li>list is empty please fill form</li>
          )}
        </tbody>
      </table>
      <button className="btn btn-danger" onClick={dltAll}>
        Delete all
      </button>
      <Modal
        isOpen={isOpen}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="d-flex justify-content-center">
          <h2>Your Application</h2>
        </div>
        <br />
        <div className="row card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Id: {edata.id}</li>
            <li className="list-group-item">Username: {edata.name}</li>
            <li className="list-group-item">Image: {<img src={edata.img} alt="computer jpg" width="50px" />}</li>
            <li className="list-group-item">Email: {edata.email}</li>
            <li className="list-group-item">Gender: {edata.gender}</li>
            <li className="list-group-item">Date of Birth: {edata.dob}</li>
          </ul>
        </div>
        <br />
        <div>
          <button
            className="btn btn-primary"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Close
          </button>
         
        </div>
      </Modal>
    </div>
  );
}
export default List;
