import React, { Component } from "react";
import { List, Card } from "antd";

class Gallery extends Component {
  render() {
    return (
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
              <Card.Meta title={place.title || null} />
            </Card>
          </List.Item>
        )}
      />
    );
  }
}

export default Gallery;
