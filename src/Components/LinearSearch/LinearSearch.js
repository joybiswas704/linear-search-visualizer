import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import Node from "./Node";
import Identifier from "./Indentifier";
import styles from "./LinearSearch.module.css";

class LinearSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: this.randomNumberGenerator(),
      input: null,
      isReset: false,
    };
    this.randomNumberGenerator = this.randomNumberGenerator.bind(this);
    this.checkHandler = this.checkHandler.bind(this);
    this.nodeGenerator = this.nodeGenerator.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  randomNumberGenerator = () => {
    const randomNumberArray = [];
    for (let i = 0; i < 10; i++) {
      let nodeObject = { isVisited: false, isFound: false };
      nodeObject["value"] = Math.floor(Math.random() * 100);
      randomNumberArray.push(nodeObject);
    }
    console.log(randomNumberArray);
    return randomNumberArray;
  };

  checkHandler = () => {
    for (let i = 0; i < 10; i++) {
      const tempState = { ...this.state };
      tempState.nodes[i].isVisited = true;
      this.setState({
        ...tempState,
      });

      if (this.state.input === this.state.nodes[i].value) {
        const tempState = { ...this.state };
        tempState.nodes[i].isVisited = true;
        tempState.nodes[i].isFound = true;
        this.setState({
          ...tempState,
        });
        return console.log("Found");
      }
    }
  };

  resetHandler = () => {
    this.setState({
      nodes: this.randomNumberGenerator(),
      input: null,
      isReset: !this.state.isReset,
    });
  };

  nodeGenerator = () => {
    const nodes = this.state.nodes.map((nodeObject, index) => {
      return (
        <Node
          value={nodeObject.value}
          isVisited={nodeObject.isVisited}
          isFound={nodeObject.isFound}
          isReset={this.state.isReset}
          key={index}
        ></Node>
      );
    });
    return nodes;
  };

  render() {
    return (
      <Container>
        <h1 style={{ fontSize: "3rem", letterSpacing: ".2rem" }}>
          Linear Search Visualizer
        </h1>
        <div style={{ margin: "3rem" }}>{this.nodeGenerator()}</div>
        <div>
          <input
            style={{ margin: "2rem" }}
            type="text"
            id="userInput"
            placeholder="Enter the number"
            onChange={(event) =>
              this.setState({ input: Number(event.target.value) })
            }
          ></input>
        </div>
        <Button
          variant="success"
          onClick={this.checkHandler}
          style={{ margin: "1rem" }}
        >
          Check
        </Button>
        <Button
          variant="primary"
          onClick={this.resetHandler}
          style={{ margin: "1rem" }}
        >
          Reset
        </Button>
        <div>
          <Identifier title="Not visited yet" color="aquamarine" />
          <Identifier title="Visited" color="coral" />
          <Identifier title="Found" color="green" />
        </div>
      </Container>
    );
  }
}

export default LinearSearch;
