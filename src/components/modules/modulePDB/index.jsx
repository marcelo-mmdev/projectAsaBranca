"use client";

import { Button, Modal } from "antd";
import { Key, useEffect, useState } from "react";
import Papa from "papaparse";

export default function ModulePDB() {
  const [modal2Open, setModal2Open] = useState(false);
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQyMSpohCQ8qcELCIBY5Wl6yKCuF1K4D1MbwUduQ4G-reanv6EQQfTEJHYNiMO-kUMCJs7w3ObnW41t/pub?gid=0&single=true&output=csv";

  const [data, setData] = useState({});
  useEffect(() => {
    const response = fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse(data, { header: true });
        console.log(parsedData);
        setData(parsedData.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {data.map((status: any, index: Key | null | undefined) => (
        <Button
          key={index}
          type="primary"
          onClick={() => setModal2Open(true)}
          style={{
            background: "#1677ff",
            color: "#FFF",
            margin: "8px",
          }}
        >
          <div
          >
            {status.Estação}
          </div>
        </Button>
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
