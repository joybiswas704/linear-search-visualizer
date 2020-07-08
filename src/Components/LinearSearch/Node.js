import React, { Component } from "react";
import styles from "./Node.module.css";

class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [styles.node],
      isVisited: false,
      isFound: false,
      value: this.props.value,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.isReset !== prevProps.isReset) {
      this.setState({
        styles: [styles.node],
        isVisited: false,
        isFound: false,
        value: this.props.value,
      });
    } else if (this.props.isVisited !== prevProps.isVisited) {
      let newStyles = [...this.state.styles];
      newStyles.push(styles.nodeVisited);
      this.setState({
        isVisited: this.props.isVisited,
        isFound: this.props.isFound,
        styles: newStyles,
      });

      if (this.props.isFound) {
        let newStyles = [...this.state.styles];
        newStyles.push(styles.nodeFound);
        this.setState({
          styles: newStyles,
        });
      }
    }
  }

  render() {
    return (
      <div className={this.state.styles.join(" ")}>{this.state.value}</div>
    );
  }
}

export default Node;
