import React, { useState } from 'react';
import { Form, Row, Col, Input, Button, Modal, Table, Space, Steps } from 'antd';

interface DetailProps {
    id: number | string;
}
export const Detail = (props: DetailProps) => {
    const [ visible, setVisible ] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = (e: React.MouseEvent<HTMLElement>) => {};

    const handleCancel = (e: React.MouseEvent<HTMLElement>) => {};

    return (
        <div className="comp add">
            <a onClick={showModal}>{props.id}</a>
            <Modal
                title="Basic Modal"
                visible={visible}
                maskClosable={false}
                keyboard={false}
                cancelText="关闭"
                onOk={handleOk}
                onCancel={() => setVisible(false)}
            />
        </div>
    );
};
