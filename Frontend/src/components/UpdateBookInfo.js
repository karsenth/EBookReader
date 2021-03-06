import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class UpdateBookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      isbn: "",
      author: "",
      description: "",
      genre: "",
      publisher: "",
      cover: "",
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get("http://localhost:8082/api/books/" + this.props.match.params.id)
      .then((res) => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description,
          genre: res.data.genre,
          publisher: res.data.publisher,
          cover: res.data.cover,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateBookInfo");
      });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description,
      genre: this.state.genre,
      publisher: this.state.publisher,
      cover: this.state.cover,
    };

    axios
      .put(
        "http://localhost:8082/api/books/" + this.props.match.params.id,
        data
      )
      .then((res) => {
        this.props.history.push("/show-book/" + this.props.match.params.id);
      })
      .catch((err) => {
        console.log("Error in UpdateBookInfo!");
      });
  };

  render() {
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Book</h1>
            </div>
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-info float-right">
                <br />
                Show Book List
              </Link>
            </div>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="isbn">ISBN</label>
                <input
                  type="text"
                  placeholder="ISBN"
                  name="isbn"
                  className="form-control"
                  value={this.state.isbn}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={this.state.author}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label for="Fiction">
                  <input
                    type="radio"
                    name="Genre"
                    value="Fiction"
                    id="Fiction"
                    // className="form-control"

                    // checked={true}
                    onChange={(e) => {
                      {
                        this.state.genre = e.target.value;
                      }
                      console.log(e.target.value);
                      console.log(this.state.genre);
                    }}
                  />
                  Fiction
                </label>
                <br />
                <label for="Non Fiction">
                  <input
                    type="radio"
                    name="Genre"
                    value="Non Fiction"
                    id="Non Fiction"
                    // className="form-control"

                    onChange={(e) => {
                      {
                        this.state.genre = e.target.value;
                      }
                      console.log(e.target.value);
                      console.log(this.state.genre);
                    }}
                  />
                  Non Fiction
                </label>
                <br />
                <label for="Education">
                  <input
                    type="radio"
                    name="Genre"
                    value="Education"
                    id="Education"
                    // className="form-control"

                    onChange={(e) => {
                      {
                        this.state.genre = e.target.value;
                      }
                      console.log(e.target.value);
                      console.log(this.state.genre);
                    }}
                  />
                  Education
                </label>
                <br />
              </div>

              <div className="form-group">
                <label htmlFor="publisher">Publisher</label>
                <input
                  type="text"
                  placeholder="Publisher of this Book"
                  name="publisher"
                  className="form-control"
                  value={this.state.publisher}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cover">Cover</label>
                <input
                  type="text"
                  placeholder="Cover of the bool"
                  name="cover"
                  className="form-control"
                  value={this.state.cover}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
              >
                Update Book
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateBookInfo;
