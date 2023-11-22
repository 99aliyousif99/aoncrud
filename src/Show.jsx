import React from "react";
import { Space, Table,Button,Modal} from "antd";
import { useState } from "react";
import { useEffect } from "react";
import View from "./view";
const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Price",
    key: "price",
    dataIndex: "price",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <View/>
        <Button>delete</Button>
      </Space>
    ),
  },
];

const Show = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let resp = await fetch(`https://dummyjson.com/products`);
      let data = await resp.json();
      setProducts(data.products);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
useEffect(() => {
  getProducts()
}, [])

  return <Table columns={columns} dataSource={products} />;


};
export default Show;
