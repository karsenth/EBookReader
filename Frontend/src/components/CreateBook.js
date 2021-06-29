import React, { Component, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Dropzone from "react-dropzone";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

// class CreateBook extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "",
//       isbn: "",
//       author: "",
//       description: "",
//       // published_date: "",
//       genre: "",
//       publisher: "",
//       file: null,
//     };
//   }

//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   eb = (e) => {
//     this.setState({ file: e.target.files });
//   };

//   onSubmit = (e) => {
//     e.preventDefault();

//     // const data = {
//     //   title: this.state.title,
//     //   isbn: this.state.isbn,
//     //   author: this.state.author,
//     //   description: this.state.description,
//     //   // published_date: this.state.published_date,
//     //   genre: this.state.genre,
//     //   publisher: this.state.publisher,
//     //   file: this.state.file,
//     // };

//     const formData = new FormData();

//     formData.append("title", this.state.title);
//     formData.append("isbn", this.state.isbn);
//     formData.append("author", this.state.author);
//     formData.append("description", this.state.description);
//     formData.append("genre", this.state.genre);
//     formData.append("publisher", this.state.publisher);
//     formData.append("file", this.state.file);
//     axios
//       .post("http://localhost:8082/api/books/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((res) => {
//         this.setState({
//           title: "",
//           isbn: "",
//           author: "",
//           description: "",
//           // published_date: "",
//           genre: "",
//           publisher: "",
//           file: null,
//         });
//         this.props.history.push("/");
//       })
//       .catch((err) => {
//         console.log("Error in CreateBook!");
//       });
//   };

//   render() {
//     return (
//       <div className="CreateBook">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-8 m-auto">
//               <br />
//               <Link to="/" className="btn btn-outline-info float-right">
//                 Show Book List
//               </Link>
//             </div>
//             <div className="col-md-8 m-auto">
//               <h1 className="display-4 text-center">Add Book</h1>
//               <p className="lead text-center">Create new book</p>

//               <form
//                 noValidate
//                 onSubmit={this.onSubmit}
//                 encType="multipart/form-data"
//               >
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     placeholder="Title of the Book"
//                     name="title"
//                     className="form-control"
//                     value={this.state.title}
//                     onChange={this.onChange}
//                   />
//                   {console.log(this.state.title)}
//                 </div>

//                 <div className="form-group">
//                   <input
//                     type="text"
//                     placeholder="ISBN"
//                     name="isbn"
//                     className="form-control"
//                     value={this.state.isbn}
//                     onChange={this.onChange}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <input
//                     type="text"
//                     placeholder="Author"
//                     name="author"
//                     className="form-control"
//                     value={this.state.author}
//                     onChange={this.onChange}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <input
//                     type="text"
//                     placeholder="Describe this book"
//                     name="description"
//                     className="form-control"
//                     value={this.state.description}
//                     onChange={this.onChange}
//                   />
//                 </div>

//                 {/* <div className="form-group">
//                   <input
//                     type="date"
//                     placeholder="published_date"
//                     name="published_date"
//                     className="form-control"
//                     value={this.state.published_date}
//                     onChange={this.onChange}
//                   />
//                 </div> */}
//                 <div className="form-group">
//                   <label for="Thriller">
//                     <input
//                       type="radio"
//                       name="Genre"
//                       value="Thriller"
//                       id="Thriller"
//                       // className="form-control"

//                       // checked={true}
//                       onChange={(e) => {
//                         {
//                           this.state.genre = e.target.value;
//                         }
//                         console.log(e.target.value);
//                         console.log(this.state.genre);
//                       }}
//                     />
//                     Thriller
//                   </label>
//                   <br />
//                   <label for="Mystery">
//                     <input
//                       type="radio"
//                       name="Genre"
//                       value="Mystery"
//                       id="Mystery"
//                       // className="form-control"

//                       onChange={(e) => {
//                         {
//                           this.state.genre = e.target.value;
//                         }
//                         console.log(e.target.value);
//                         console.log(this.state.genre);
//                       }}
//                     />
//                     Mystery
//                   </label>
//                   <br />
//                   <label for="Romance">
//                     <input
//                       type="radio"
//                       name="Genre"
//                       value="Romance"
//                       id="Romance"
//                       // className="form-control"

//                       onChange={(e) => {
//                         {
//                           this.state.genre = e.target.value;
//                         }
//                         console.log(e.target.value);
//                         console.log(this.state.genre);
//                       }}
//                     />
//                     Romance
//                   </label>
//                   <br />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     placeholder="Publisher of this Book"
//                     name="publisher"
//                     className="form-control"
//                     value={this.state.publisher}
//                     onChange={this.onChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="file"
//                     name="file"
//                     className="form-control"
//                     // value={this.state.file}
//                     onChange={this.onChange}
//                     // onChange={this.onChange}
//                   />
//                   {console.log(this.state.file)}
//                 </div>
//                 <div className="upload-section"></div>
//                 <input
//                   type="submit"
//                   className="btn btn-outline-info btn-block mt-4"
//                 />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const CreateBook = (props) => {
  // const [file, setFile] = useState(null);
  const [file1, setFile1] = useState(null); // state for storing actual image
  // const [file2, setFile2] = useState(null);
  const [state, setState] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    genre: "",
    publisher: "",
    cover: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const dropRef = useRef(); // React ref for managing the hover state of droppable area

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onDrop1 = (files1) => {
    const [uploadedFile] = files1;
    setFile1(uploadedFile);

    const fileReader = new FileReader();

    fileReader.readAsDataURL(uploadedFile);

    dropRef.current.style.border = "2px dashed #e9ebeb";
  };
  // const onDrop2 = (files2) => {
  //   const [uploadedFile] = files2;
  //   setFile2(uploadedFile);

  //   const fileReader = new FileReader();

  //   fileReader.readAsDataURL(uploadedFile);

  //   dropRef.current.style.border = "2px dashed #e9ebeb";
  // };

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid #000";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed #e9ebeb";
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const { title, isbn, author, description, genre, publisher, cover } =
        state;
      if (
        title.trim() !== "" &&
        isbn.trim() !== "" &&
        author.trim() !== "" &&
        description.trim() !== "" &&
        genre.trim() !== "" &&
        publisher.trim() !== "" &&
        cover.trim() !== ""
      ) {
        if (file1) {
          const formData = new FormData();
          // const file = "";
          // file.append(file1);
          // file.append(file2);
          // file.append(file1);
          // console.log(file);
          console.log(file1);
          formData.append("title", title);
          // console.log(title);
          formData.append("isbn", isbn);
          formData.append("author", author);
          formData.append("description", description);
          formData.append("genre", genre);
          formData.append("publisher", publisher);
          formData.append("cover", cover);
          formData.append("file1", file1);
          // formData.append("file2", file2);
          // console.log(formData.get("author"));
          setErrorMsg("");
          await axios.post("http://localhost:8082/api/books/", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          props.history.push("/");
        } else {
          setErrorMsg("Please select a file to add.");
        }
      } else {
        setErrorMsg("Please enter all the field values.");
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  return (
    <React.Fragment>
      <div className="CreateBook">
        <Form className="search-form" onSubmit={handleOnSubmit}>
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
          <div className="col-md-8 m-auto">
            <br />
            <h1 className="display-4 text-center">Create Book</h1>
          </div>
          <div className="col-md-7 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-info float-right">
              Show Book List
            </Link>
          </div>
          <br />
          <br />
          <br />
          <div className="col-md-6 m-auto">
            <div className="form-group">
              <Row>
                <Col>
                  <Form.Group controlId="title">
                    <Form.Control
                      type="text"
                      name="title"
                      value={state.title || ""}
                      placeholder="Enter title"
                      onChange={handleInputChange}
                    />
                    {/* {console.log(state.title)} */}
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className="form-group">
              <Row>
                <Col>
                  <Form.Group controlId="isbn">
                    <Form.Control
                      type="text"
                      name="isbn"
                      value={state.isbn || ""}
                      placeholder="Enter ISBN"
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className="form-group">
              <Row>
                <Col>
                  <Form.Group controlId="author">
                    <Form.Control
                      type="text"
                      name="author"
                      value={state.author || ""}
                      placeholder="Enter author"
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className="form-group">
              <Row>
                <Col>
                  <Form.Group controlId="description">
                    <Form.Control
                      type="text"
                      name="description"
                      value={state.description || ""}
                      placeholder="Enter description"
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className="form-group">
              <Row>
                <Col>
                  <Form.Group controlId="genre">
                    <div className="form-group">
                      <label for="Fiction">
                        <Form.Control
                          type="radio"
                          name="genre"
                          value="Fiction"
                          id="Fiction"
                          onChange={(e) => {
                            {
                              state.genre = e.target.value;
                            }
                            console.log(e.target.value);
                            console.log(state.genre);
                          }}
                        />
                        Fiction
                      </label>
                      <br />
                      <label for="Non Fiction">
                        <Form.Control
                          type="radio"
                          name="genre"
                          value="Non Fiction"
                          id="Non Fiction"
                          onChange={(e) => {
                            {
                              state.genre = e.target.value;
                            }
                            console.log(e.target.value);
                            console.log(state.genre);
                          }}
                        />
                        Non Fiction
                      </label>
                      <br />
                      <label for="Education">
                        <Form.Control
                          type="radio"
                          name="genre"
                          value="Education"
                          id="Education"
                          onChange={(e) => {
                            {
                              state.genre = e.target.value;
                            }
                            console.log(e.target.value);
                            console.log(state.genre);
                          }}
                        />
                        Education
                      </label>
                      <br />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className="form-group">
              <Row>
                <Col>
                  <Form.Group controlId="publisher">
                    <Form.Control
                      type="text"
                      name="publisher"
                      value={state.publisher || ""}
                      placeholder="Enter publisher"
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className="form-group">
              <Row>
                <Col>
                  <Form.Group controlId="cover">
                    <Form.Control
                      type="text"
                      name="cover"
                      value={state.cover || ""}
                      placeholder="Enter URL for cover"
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className="upload-section">
              <Dropzone
                onDrop={onDrop1}
                onDragEnter={() => updateBorder("over")}
                onDragLeave={() => updateBorder("leave")}
              >
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps({ className: "drop-zone" })}
                    ref={dropRef}
                  >
                    <input {...getInputProps()} />
                    <p>Drag and drop a file OR click here to select a file</p>
                    {file1 && (
                      <div>
                        <strong>Selected file:</strong> {file1.name}
                      </div>
                    )}
                  </div>
                )}
              </Dropzone>
            </div>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default CreateBook;
