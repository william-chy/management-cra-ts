import React, { useState, ReactElement } from 'react';
import { Form, Row, Col, Input, Button, Table, Space } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { AddProd } from './addProd';
export const List = (): ReactElement => {
    const [ form ] = Form.useForm();

    const getFields = () => {
        const fields = [
            {
                name: 'prodName',
                label: '产品名称',
                rules: [],
                placeholder: '输入产品名称进行搜索',
            },
            {
                name: 'prodId',
                label: '产品ID',
                placeholder: '输入产品ID进行搜索',
            },
        ];
        const children = fields.map((field, i) => {
            return (
                <Col span={8} key={i}>
                    <Form.Item name={field.name} label={field.label} rules={field.rules}>
                        <Input placeholder={field.placeholder} />
                    </Form.Item>
                </Col>
            );
        });

        return children;
    };

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    interface Column {
        key?: string;
        name?: string;
        age?: number;
        address?: string;
    }
    const columns = [
        {
            title: '产品ID',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: '产品名称',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '状态',
            dataIndex: 'age',
            key: 'age',
            render: (text: string) => {
                // eslint-disable-next-line eqeqeq
                const closed = text == '32';
                return (
                    <span flex="main:center cross:center" className={closed ? 'close' : 'open'}>
                        <i className="dot">·</i> {text}
                    </span>
                );
            },
        },
        {
            title: '最近更新时间',
            dataIndex: 'update',
            key: 'update',
        },
        {
            title: '操作',
            key: 'action',
            dataIndex: 'name',
            render: (text: string, record: Column) => (
                <Space size="middle">
                    <a>编辑 {record.age}</a>
                    <a>下架 {text}</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ];

    return (
        <div className="page list">
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={onFinish}
            >
                <Row gutter={24}>{getFields()}</Row>
                <Row>
                    <Col
                        span={24}
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Space>
                            <Button type="primary" htmlType="submit">
                                搜索
                            </Button>
                            <Button
                                onClick={() => {
                                    form.resetFields();
                                }}
                            >
                                重置
                            </Button>
                        </Space>
                    </Col>
                </Row>
            </Form>
            {/* <div className="box-above-table">
                <AddProd />
            </div> */}
            <Table columns={columns} dataSource={data} size="middle" />
        </div>
    );
};

function EditProd(props: number): ReactElement {
    return <div>aaa</div>;
}
