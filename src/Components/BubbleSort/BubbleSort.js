import React, { Component } from "react";
import Node from "../LinearSearch/Node";
import { Container, Row, Col } from "react-bootstrap";

class BubbleSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: this.randomNumberGenerator(),
      input: "",
      isReset: false,
      timeTaken: 0,
      isFound: false,
    };
    this.randomNumberGenerator = this.randomNumberGenerator.bind(this);
    this.nodeGenerator = this.nodeGenerator.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.checkHandler = this.checkHandler.bind(this);
  }

  randomNumberGenerator = () => {
    const randomNumberArray = [];

    for (let i = 0; i < 18; i++) {
      let nodeObject = { isVisited: false, isFound: false };
      nodeObject["value"] = Math.floor(Math.random() * 100);
      randomNumberArray.push(nodeObject);
    }
    randomNumberArray.sort((a, b) => a.value - b.value);

    console.log(randomNumberArray);
    return randomNumberArray;
  };

  resetHandler = () => {
    this.setState({
      nodes: this.randomNumberGenerator(),
      input: "",
      isReset: !this.state.isReset,
      timeTaken: 0,
      isFound: false,
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
        <Row>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default BubbleSort;
