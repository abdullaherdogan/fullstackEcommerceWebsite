import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { fetchProductList } from "../../../api";
import { Popconfirm, Table } from "antd";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function AdminProducts() {
    const { isLoading, isError, data, error } = useQuery(
        "admin:products",
        fetchProductList
    );
    const columns = useMemo(() => {
        return [
            {
                title: "Title",
                dataIndex: "title",
                key: "title",
            },
            {
                title: "Price",
                dataIndex: "price",
                key: "price",
            },
            {
                title: "Crated At",
                dataIndex: "createdAt",
                key: "createdAt",
            },
            {
                title: "Action",
                key: "action",
                render: (text, record) => (
                    <>
                        <Link to={`products/${record._id}`}>Edit</Link>
                        <Popconfirm
                            title="Are you sure?"
                            onConfirm={() => {
                                alert("Silindi");
                            }}
                            okText="Yes"
                            cancelText="Cancel"
                            placement="left"
                        >
                            <a href="#">Delete</a>
                        </Popconfirm>
                    </>
                ),
            },
        ];
    }, []);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error: {error.message}</div>;
    }
    console.log(data);
    return (
        <div>
            <Text fontSize="2xl" p={5}>
                Products
            </Text>
            <Table dataSource={data} columns={columns} rowKey="_id" />
        </div>
    );
}

export default AdminProducts;
