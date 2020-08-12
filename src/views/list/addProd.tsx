import React, { useState } from 'react';
import { Form, Row, Col, Input, Button, Modal, Table, Space, Steps } from 'antd';

const { Step } = Steps;
const { TextArea } = Input;

export const AddProd = () => {
    const [ visible, setVisible ] = useState(false);
    const [ cancelText, setCancelText ] = useState('取消');
    const [ okText, setOkText ] = useState('下一步');
    const [ step, setStep ] = useState(1);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        if (step === 1) {
            setStep(2);
            setCancelText('上一步');
            setOkText('保存');
        } else {
            setVisible(false);
        }
    };

    const onNextStep = ()=>{
        
    }
    const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
        // 点击右上方叉叉 或者 点击取消
        if ((e.target as HTMLElement).tagName === 'svg' || step === 1) {
            return setVisible(false);
        }
        // 点击上一步
        if (step === 2) {
            setStep(1);
            setCancelText('取消');
            setOkText('下一步');
        }
    };

    return (
        <div className="comp add">
            <Button type="primary" htmlType="button" onClick={showModal}>
                添加产品
            </Button>
            <Modal
                title="Basic Modal"
                visible={visible}
                maskClosable={false}
                keyboard={false}
                cancelText={cancelText}
                okText={okText}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Steps current={step - 1}>
                    <Step title="Finished" description="This is a description." />
                    <Step
                        title="In Progress"
                        subTitle="Left 00:00:08"
                        description="This is a description."
                    />
                    <Step title="Waiting" description="This is a description." />
                </Steps>,
                {step === 1 ? <FirstForm onNextStep={onNextStep}/> : <div>435</div>}
            </Modal>
        </div>
    );
};

function FirstForm(prop: any) {
    const [ form ] = Form.useForm();

    const getFields = () => {
        const fields = [
            {
                name: 'prodName',
                label: '后端产品ID',
                rules: [ { required: true, message: '请输入后端产品ID' } ],
                placeholder: '系统商提供（获取产品信息时使用）',
            },
            {
                name: 'prodId',
                label: '美团产品ID',
                placeholder: '美团侧提供（下单时使用）',
                rules: [ { required: true, message: '请输入美团产品ID' } ],
            },
        ];
        const children = fields.map((field, i) => {
            return (
                <Col span={10} key={i}>
                    <Form.Item name={field.name} label={field.label} rules={field.rules}>
                        <Input placeholder={field.placeholder} />
                    </Form.Item>
                </Col>
            );
        });

        return children;
    };
    return (
        <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={prop.onNextStep}
        >
            <Row gutter={24}>
                {getFields()}
                <Col span={4}>
                    <Button type="primary" htmlType="submit">
                        确定
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}
