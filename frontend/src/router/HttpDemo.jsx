import React, { Component } from "react";
import http from "../helper/http";
export default class HttpDemo extends Component {
  componentDidMount() {
    const configAPI = {
      handlerEnabled: "Custom msg",
      params: "ok",
      customConfig: {
        icon: "dsdsds"
      }
    };

    http.getSth(
      "/search/get_post_by_keyword?keyword=&page=1&sort=new&filter=",
      configAPI
    );
  }
  render() {
    return <div></div>;
  }
}
