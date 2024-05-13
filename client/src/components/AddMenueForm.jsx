import { useState } from "react";
import "./AddMenueForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 

const AddMenueForm = () => {
    const navigate  = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    file: null,
  });
  //handling form data
  const handleFormData = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    console.log("from files", e.target.files[0]);
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0], // Assuming only one file is allowed
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        (formData.title === "" ||
          formData.description === "" ||
          formData.file === null,
        formData.price === "")
      ) {
        alert("All fields are required");
        return;
      }
      let formData1 = new FormData();
      formData1.append("title", formData.title);
      formData1.append("description", formData.description);
      formData1.append("price", formData.price);
      formData1.append("file", formData.file); // Append the file to the FormData

      //post this data to the backend server to post the menue
      const response = await axios.post(
        "http://localhost:3000/api/menue/upload-menue",
        formData1
      );
         if(response.data.data){
            alert("item added successfully");
          navigate("/");
          
         }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(formData);
  return (
    <div
      className="add-menue-wrapper"
      style={{
        width: "full",
        padding: "10px",
        marginTop: "10%",
      }}
    >
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            textAlign: "center",
            color: "white",
            margin: "10px 0",
          }}
        >
          Add Item
        </h1>

        <div className="wrapper">
          <input
            type="title"
            placeholder="Enter Title.."
            name="title"
            value={formData.title}
            onChange={handleFormData}
          />
        </div>
        <div className="wrapper">
          <textarea
            name="description"
            rows="10"
            cols="40"
            value={formData.description}
            onChange={handleFormData}
          ></textarea>
        </div>
        <div className="wrapper">
          <input
            type="number"
            placeholder="price"
            name="price"
            value={formData.price}
            onChange={handleFormData}
          />
        </div>
        <div className="wrapper">
          <input type="file" name="file"  onChange={handleFileChange} />
        </div>
        <button type="submit">Add</button>
        <div
          style={{
            color: "lightblue",
            fontSize: "20px",
            textTransform: "capitalize",
            margin: "10px",
          }}
        >
          show all items
        </div>
      </form>
    </div>
  );
};

export default AddMenueForm;
