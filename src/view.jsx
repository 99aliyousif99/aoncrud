import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const View = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Details
      </Button>
      <Modal title="details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p></p>
        <p></p>
        <p></p>
      </Modal>
    </>
  );
};
export default View;