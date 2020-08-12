import React from 'react';
import { Form, Row, Col, Input, Button, Table, Space, Radio, DatePicker, Pagination } from 'antd';

import { Detail } from './detail';

const { RangePicker } = DatePicker;
interface OrderColumn {
    key?: string;
    name?: string;
    age?: number;
    address?: string;
}

export const Order = () => {
    const [ form ] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const columns = [
        {
            title: '订单号',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <Detail id={text} />,
        },
        {
            title: '购买产品',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '产品数量',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '订单金额(元)',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '购买者',
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
            title: '下单时间',
            dataIndex: 'update',
            key: 'update',
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

    const onPageChange = (page: number) => {
        console.log('onPageChange', page);
    };

    return (
        <div className="page list">
            <Form
                form={form}
                name="order_search"
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 10 }}
                className="ant-advanced-search-form"
                onFinish={onFinish}
            >
                <Form.Item name="state" label="订单状态">
                    <Radio.Group>
                        <Space>
                            <Radio.Button value="">全部</Radio.Button>
                            <Radio.Button value="1">待支付</Radio.Button>
                            <Radio.Button value="2">已取消</Radio.Button>
                            <Radio.Button value="3">已关闭</Radio.Button>
                        </Space>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="time" label="下单时间">
                    <RangePicker />
                </Form.Item>
                <Form.Item name="orderNo" label="订单号">
                    <Input placeholder="请输入订单号" />
                </Form.Item>
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
            <Table
                pagination={{
                    showQuickJumper: true,
                    showSizeChanger: false,
                    defaultCurrent: 1,
                    total: 200,
                    onChange: onPageChange,
                }}
                columns={columns}
                dataSource={data}
                size="middle"
            />
        </div>
    );
};
