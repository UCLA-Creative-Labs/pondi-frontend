import React from "react";
import { Link } from "react-router-dom";
import { FormControl, InputGroup, Button } from "react-bootstrap";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagefile: null,
      text: "",
      prompt: "Hello"
    };
  }

  fileChangedHandler = event => {
    this.setState({ imagefile: URL.createObjectURL(event.target.files[0]) });
  };

  textInputHandler = event => {
    this.setState({ text: event.target.value });
  };

  uploadHandler = () => {
    console.log(this.state.imagefile);
  };

  render() {
    console.log(this.state.text);
    return (
      <div>
        <h1>{this.state.prompt}</h1>
        <input
          type="text"
          value={this.state.text}
          onChange={this.textInputHandler}
          placeholder="Enter text..."
        />
        <br />

        <div>
          {" "}
          <img src={this.state.imagefile} height="300" width="500" />
          <input type="file" onChange={this.fileChangedHandler} />
          <Button className="btn btn-primary" onClick={this.uploadHandler}>
            Upload Image
          </Button>
        </div>
        <Link to="/">
          {" "}
          <Button className="btn btn-success">Submit</Button>
        </Link>
      </div>
    );
  }
}

export default InputForm;
