"use client";

import { Button, Modal, Progress } from "antd";
import { useState } from "react";

export default function ModuleCardPDB(props: any) {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => setModal2Open(true)}
        style={{
          width: 150,
          height: 220,
          background: "#1677ff",
          color: "#FFF",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginTop: "0px",
            fontSize: "18px",
          }}
        >
          Caruaru
        </div>
        <div style={{ textAlign: "center", marginTop: "5px" }}>
          <Progress
            type="dashboard"
            percent={55}
            trailColor="#FFF"
            success={{ percent: 90 }}
            size={[80, 50]}
          />
        </div>

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            <div>VPN</div>
            <div>Nobreak</div>
          </div>
        </div>
      </Button>
      <Modal
        title="Caruaru"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
}
