import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Col, Row, FormControl } from "react-bootstrap";
import Node from "./Node";
import Identifier from "./Indentifier";
import styles from "./LinearSearch.module.css";

class LinearSearch extends Component {
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
    this.checkHandler = this.checkHandler.bind(this);
    this.nodeGenerator = this.nodeGenerator.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.sleep = this.sleep.bind(this);
  }

  randomNumberGenerator = () => {
    const randomNumberArray = [];
    for (let i = 0; i < 18; i++) {
      let nodeObject = { isVisited: false, isFound: false };
      nodeObject["value"] = Math.floor(Math.random() * 100);
      randomNumberArray.push(nodeObject);
    }
    console.log(randomNumberArray);
    return randomNumberArray;
  };

  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  checkHandler = async () => {
    const tempState = { ...this.state };
    const startTime = new Date();

    for (let i = 0; i < 18; i++) {
      await this.sleep(400);
      if (this.state.input === this.state.nodes[i].value) {
        const endTime = new Date();
        let timeDiff = endTime - startTime;
        timeDiff /= 1000;
        let timeDiffInSeconds = Math.round(timeDiff);
        tempState.timeTaken = timeDiffInSeconds;
        tempState.nodes[i].isVisited = true;
        tempState.nodes[i].isFound = true;
        tempState.isFound = true;
        this.setState({
          ...tempState,
        });
        return console.log(`Found. Time taken: ${this.state.timeTaken} sec`);
      } else {
        tempState.nodes[i].isVisited = true;
        this.setState({
          ...tempState,
        });
      }
    }
    const endTime = new Date();
    let timeDiff = endTime - startTime;
    timeDiff /= 1000;
    let timeDiffInSeconds = Math.round(timeDiff);
    this.setState({
      timeTaken: timeDiffInSeconds,
    });
    return console.log(`Not Found. Time taken: ${this.state.timeTaken} sec`);
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
          <Col xs={12}>
            <h1 style={{ fontSize: "3rem", letterSpacing: ".2rem" }}>
              Linear Search Visualizer
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ margin: "3rem" }}>{this.nodeGenerator()}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <FormControl
                style={{ marginBottom: "2rem" }}
                placeholder="Enter the number"
                aria-label="Amount (to the nearest dollar)"
                type="text"
                id="userInput"
                value={this.state.input}
                onChange={(event) =>
                  this.setState({ input: Number(event.target.value) })
                }
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div>
              <Identifier title="Not visited yet" color="aquamarine" />
              <Identifier title="Visited" color="coral" />
              <Identifier title="Found" color="green" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="success"
              onClick={this.checkHandler}
              style={{ margin: "1rem" }}
            >
              Visualize
            </Button>
            <Button
              variant="primary"
              onClick={this.resetHandler}
              style={{ margin: "1rem" }}
            >
              Reset
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>{`Runtime: ${this.state.timeTaken} seconds`}</h3>
            <h3>
              {this.state.isFound ? "Status: Found" : "Status: Not Found"}
            </h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LinearSearch;
