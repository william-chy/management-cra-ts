/* eslint-disable no-template-curly-in-string */
import React, { useEffect } from 'react';

import { Form, Input, Button, Switch, DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const layout = {
    labelCol: {
        span: 4,
        offset: 4,
    },
    wrapperCol: {
        span: 8,
    },
};
const validateMessages = {
    required: '请输入${label}!',
    types: {
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

export const Notice = () => {
    const [ form ] = Form.useForm();
    const onFinish = (values: any) => {
        console.log(values);
    };
    const onFill = () => {
        form.setFieldsValue({
            state: false,
            title: '',
            content: '',
            time: undefined,
        });
    };

    // 你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它。而后面加参数则会使其在该参数发生变化时才调用副作用。

    useEffect(() => {
        onFill();
        console.log('onFill');
    });
    return (
        <div className="page notice">
            <Form
                {...layout}
                form={form}
                name="notice-form"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item name={'state'} label="通知状态" valuePropName="checked">
                    <Switch checkedChildren="开启" unCheckedChildren="关闭" />
                </Form.Item>
                <Form.Item
                    name={'title'}
                    label="通知标题"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'content'}
                    label="通知内容"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.TextArea
                        placeholder="请输入通知内容"
                        maxLength={150}
                        autoSize={{ minRows: 2, maxRows: 6 }}
                    />
                </Form.Item>
                <Form.Item name={'time'} label="生效时间">
                    <RangePicker showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD HH:mm" />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        保存
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
