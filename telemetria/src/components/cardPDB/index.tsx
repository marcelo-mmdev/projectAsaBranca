"use client";

import { useState } from "react";
import { Button, Modal } from "antd";
import { Progress } from "antd";

export default function CardPDB() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const twoColors = { "0%": "#108ee9", "100%": "#87d068" };

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
        <div>
          {/* <Progress type="dashboard" percent={90} strokeColor={twoColors} /> */}
          Opem modal
        </div>
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Nome da cidade...</p>
        <p>Potencia...</p>
        <p>Alarmes...</p>
      </Modal>
    </>
  );
}
