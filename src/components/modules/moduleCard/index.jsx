"use client";

import { Button, Modal, Progress } from "antd";
import { Key, useEffect, useState } from "react";
import Papa from "papaparse";

export default function ModuleCard() {
  const [modal2Open, setModal2Open] = useState(false);
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQyMSpohCQ8qcELCIBY5Wl6yKCuF1K4D1MbwUduQ4G-reanv6EQQfTEJHYNiMO-kUMCJs7w3ObnW41t/pub?gid=0&single=true&output=csv"

  const [data, setData] = useState([]);
  useEffect(() => {
    const response = fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse(data, { header: true })
        console.log(parsedData)
        setData(parsedData.data)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {data.map((status, index) => (
        <div
          key={index}
          style={{
            margin: "8px",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {status.Estação}
            </div>
            <div style={{ textAlign: "center", marginTop: "5px" }}>
              <Progress
                type="dashboard"
                percent={55}
                trailColor="#FFF"
                success={{ percent: 90 }}
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
        </div>
      ))}
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
