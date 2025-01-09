import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Radio,
  Space,
  Select,
  DatePicker,
  Tabs,
} from "antd";
import image from "../images/image.svg";
import { PlusOutlined } from "@ant-design/icons";
import "./Trip.css";
import { useNavigate } from "react-router-dom";
import AllPendingTrip from "./AllPendingTrip";

const Trip = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newTrip, setNewTrip] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form Values:", values);
        const tripDetails = {
          tripName: values.tripName,
          tripType: values.tripType,
          businessPurpose: values.businessPurpose,
          flightType: values.flightType,
          departFrom: values.departFrom,
          arriveAt: values.arriveAt,
          departureDate: values.departureDate?.format("DD MMM YYYY"),
          returnDate: values.returnDate?.format("DD MMM YYYY"),
          description: values.description,
        };
        // navigate("/", { state: { newTrip } });
        setNewTrip(tripDetails);
        setIsSubmitted(true);
        setIsModalOpen(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  if (isSubmitted && newTrip) {
    return <AllPendingTrip newTrip={newTrip} />;
  }

  return (
    <div className="trip-main" style={{ marginLeft: "10px", padding: "30px" }}>
      <div className="image-container">
        <img src={image} className="trip-image" alt="trip" />
        <Button className="new-trip-button" type="primary" onClick={showModal}>
          + New Trip
        </Button>
      </div>

      <Modal
        title="New Trip"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        okText="Save and Submit"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Trip Name"
            name="tripName"
            rules={[{ required: true, message: "Please enter a trip name" }]}
          >
            <Input placeholder="Trip name" />
          </Form.Item>

          <Form.Item
            label="Trip Type"
            name="tripType"
            rules={[{ required: true, message: "Please select a trip type" }]}
          >
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="domestic">
                  Domestic <br />
                  <span style={{ fontSize: "12px", color: "#888" }}>
                    You are creating this request for a trip within your home
                    country.
                  </span>
                </Radio>
                <Radio value="international">
                  International <br />
                  <span style={{ fontSize: "12px", color: "#888" }}>
                    You are creating this request for a trip outside your home
                    country.
                  </span>
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Business Purpose"
            name="businessPurpose"
            rules={[
              { required: true, message: "Please enter a business purpose" },
            ]}
          >
            <Input.TextArea maxLength={150} placeholder="Max 200 Characters" />
          </Form.Item>

          <div
            style={{
              marginBottom: "16px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            ✈️ Flight
          </div>
          <Form.Item name="flightType" label="Flight Type">
            <Radio.Group>
              <Radio value="oneway">Oneway</Radio>
              <Radio value="roundtrip">Roundtrip</Radio>
              <Radio value="multicity">Multi-city</Radio>
            </Radio.Group>
          </Form.Item>

          <Space size="large" style={{ marginBottom: 16 }}>
            <Form.Item
              label="Depart From"
              name="departFrom"
              rules={[
                { required: true, message: "Please select a departure city" },
              ]}
            >
              <Select placeholder="Select city" style={{ width: 150 }}>
                <Select.Option value="city1">City 1</Select.Option>
                <Select.Option value="city2">City 2</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Arrive At"
              name="arriveAt"
              rules={[
                { required: true, message: "Please select an arrival city" },
              ]}
            >
              <Select placeholder="Select city" style={{ width: 150 }}>
                <Select.Option value="city1">City 1</Select.Option>
                <Select.Option value="city2">City 2</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Departure Date" name="departureDate">
              <DatePicker style={{ width: 150 }} />
            </Form.Item>

            <Form.Item label="Return Date" name="returnDate">
              <DatePicker style={{ width: 150 }} />
            </Form.Item>
          </Space>

          <Form.Item label="Descriptions" name="description">
            <Input placeholder="Descriptions" />
          </Form.Item>

          <Tabs defaultActiveKey="hotel">
            <Tabs.TabPane tab="Hotel" key="hotel">
              <Button
                icon={<PlusOutlined />}
                type="dashed"
                style={{ width: "100%" }}
              >
                Add Hotel Details
              </Button>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Car Rental" key="carRental">
              <Button
                icon={<PlusOutlined />}
                type="dashed"
                style={{ width: "100%" }}
              >
                Add Car Rental Details
              </Button>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Train" key="train">
              <Button
                icon={<PlusOutlined />}
                type="dashed"
                style={{ width: "100%" }}
              >
                Add Train Details
              </Button>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Bus" key="bus">
              <Button
                icon={<PlusOutlined />}
                type="dashed"
                style={{ width: "100%" }}
              >
                Add Bus Details
              </Button>
            </Tabs.TabPane>
          </Tabs>
        </Form>
      </Modal>
    </div>
  );
};

export default Trip;
