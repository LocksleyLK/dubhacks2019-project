import React, { Component } from "react";
import { Button, List, Card, Modal } from "antd";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      activePlace: null
    };
  }

  render() {
    return (
      <div>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={this.props.data}
          renderItem={place => (
            <List.Item>
              <Card
                cover={
                  // <a href={place.path} target="_blank" rel="noopener noreferrer">
                  <img src={place.path} alt="alt" style={{ width: "100%" }} />
                  // </a>
                }
                // size="small"
              >
                <Card.Meta title={place.title || null} description={place.description || null} />
                <br />
                <Button
                  type="primary"
                  onClick={() => {
                    this.setState({ visible: true, activePlace: place });
                  }}
                >
                  Stay here
                </Button>
              </Card>
            </List.Item>
          )}
        />
        <Modal
          title="Confirm your stay"
          visible={this.state.visible}
          onOk={() => {
            this.setState({ visible: false });
          }}
          onCancel={() => {
            this.setState({ visible: false });
          }}
        >
          <img src={this.state.activePlace && this.state.activePlace.path} alt="alt" style={{ width: "100%" }} />
          <br />
          Confirm your stay at {this.state.activePlace && this.state.activePlace.title}
        </Modal>
      </div>
    );
  }
}

export default Gallery;
