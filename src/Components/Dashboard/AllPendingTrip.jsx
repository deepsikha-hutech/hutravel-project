// import React, { useState, useEffect } from "react";
// import { Card, Button, Row, Col, Typography, Tabs, Modal } from "antd";
// import flightlogo from "../images/flightlogo.svg";
// import hotellogo from "../images/hotellogo.svg";
// import documentlogo from "../images/documentlogo.svg";
// import insurancelogo from "../images/insurancelogo.svg";
// import meetinglogo from "../images/meetinglogo.svg";
// import sightseeinglogo from "../images/sightseeinglogo.svg";
// import screenshotmap from "../images/screenshotmap.svg";

// const { Title, Text } = Typography;
// const { TabPane } = Tabs;

// const AllPendingTrip = ({ newTrip }) => {
//   const [trips, setTrips] = useState([
//     {
//       id: "TRIP-0001",
//       title: "Business Trip",
//       travelDuration: "12 Nov 2024 - 15 Nov 2024",
//       destination: "Chennai",
//     },
//     {
//       id: "TRIP-0002",
//       title: "Business Trip",
//       travelDuration: "23 Nov 2024 - 24 Nov 2024",
//       destination: "Hyderabad",
//     },
//     {
//       id: "TRIP-0003",
//       title: "Business Trip",
//       travelDuration: "28 Nov 2024 - 29 Nov 2024",
//       destination: "Mumbai",
//     },
//   ]);

//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [selectedTrip, setSelectedTrip] = useState(null);

//   useEffect(() => {
//     if (newTrip) {
//       setTrips((prevTrips) => [...prevTrips, newTrip]);
//     }
//   }, [newTrip]);

//   const handleCardClick = (trip) => {
//     setSelectedTrip(trip);
//     setIsModalVisible(true);
//   };

//   const handleModalClose = () => {
//     setIsModalVisible(false);
//     setSelectedTrip(null);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "flex-end",
//           alignItems: "center",
//           marginBottom: "20px",
//         }}
//       >
//         {/* <Title level={4} style={{ margin: 0 }}>
//           Pending Trips
//         </Title> */}
//         <Button type="primary" style={{ borderRadius: "5px" }}>
//           + New Trip
//         </Button>
//       </div>

//       <Tabs defaultActiveKey="1">
//         <TabPane
//           tab={<span style={{ fontWeight: "bold" }}>Pending Trips</span>}
//           key="1"
//         >
//           <Row gutter={[16, 16]}>
//             {trips.map((trip) => (
//               <Col key={trip.id} xs={24} sm={12} md={8}>
//                 <Card
//                   bordered={true}
//                   bodyStyle={{ padding: "16px" }}
//                   style={{
//                     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//                     borderRadius: "8px",
//                     borderLeft: "4px solid #1890ff",
//                   }}
//                   onClick={() => handleCardClick(trip)}
//                 >
//                   <p style={{ fontSize: "14px", margin: "8px 0" }}>
//                     <Text strong>ID:</Text> {trip.id}
//                   </p>
//                   <p style={{ fontSize: "14px", margin: "8px 0" }}>
//                     <Text strong>Title:</Text> {trip.title}
//                   </p>
//                   <p style={{ fontSize: "14px", margin: "8px 0" }}>
//                     <Text strong>Travel Duration:</Text> {trip.travelDuration}
//                   </p>
//                   <p style={{ fontSize: "14px", margin: "8px 0" }}>
//                     <Text strong>Destination:</Text> {trip.destination}
//                   </p>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </TabPane>

//         <TabPane
//           tab={<span style={{ fontWeight: "bold" }}>All Trips</span>}
//           key="2"
//         >
//           <p>No trips to display.</p>
//         </TabPane>
//       </Tabs>

//       {selectedTrip && (
//         <Modal
//           title={<Title level={4}>{selectedTrip.title}</Title>}
//           visible={isModalVisible}
//           onCancel={handleModalClose}
//           footer={null}
//         >
//           <div style={{ padding: "10px 0" }}>
//             <p>
//               <Text strong>ID:</Text> {selectedTrip.id}
//             </p>
//             <p>
//               <Text strong>Travel Duration:</Text> {selectedTrip.travelDuration}
//             </p>
//             <p>
//               <Text strong>Destination:</Text> {selectedTrip.destination}
//             </p>
//             <div
//               style={{
//                 marginTop: "20px",
//                 borderTop: "1px solid #f0f0f0",
//                 paddingTop: "10px",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               <p display="flex" flexDirection="row">
//                 <img src={flightlogo} className="trip-image" alt="trip" />
//                 <Text strong>Flight Information:</Text>
//                 <p>Flight No: IN2098</p>
//                 <p>Departure: Bangalore</p>
//                 <p>Arrival: {selectedTrip.destination}</p>
//                 <p>Date: {selectedTrip.travelDuration.split(" - ")[1]}</p>
//                 <p>Class: Economy</p>
//               </p>

//               <p display="flex" flexDirection="row">
//                 <img src={hotellogo} className="trip-image" alt="trip" />
//                 <Text strong>Hotel Information:</Text>
//                 <p>Hotel :</p>
//                 <p>Location :</p>
//                 <p>Check-In Date :</p>
//                 <p>Check-Out Date :</p>
//               </p>

//               <p display="flex" flexDirection="row">
//                 <img src={documentlogo} className="trip-image" alt="trip" />
//                 <Text strong>Documents:</Text>
//                 <p>Passport :</p>
//                 <p>Visa :</p>
//               </p>

//               <p display="flex" flexDirection="row">
//                 <img src={insurancelogo} className="trip-image" alt="trip" />
//                 <Text strong>Insurance Details:</Text>
//                 <p>Medical Expenses :</p>
//                 <p>Lost Luggage :</p>
//               </p>

//               <p display="flex" flexDirection="row">
//                 <img src={sightseeinglogo} className="trip-image" alt="trip" />
//                 <Text strong>Sightseeing:</Text>
//                 <p>Gateway of India :</p>
//               </p>

//               <img src={screenshotmap} className="trip-image" alt="trip" />

//               <p display="flex" flexDirection="row">
//                 <img src={meetinglogo} className="trip-image" alt="trip" />

//                 <Text strong>Meeting Schedule:</Text>
//                 <p>Client Meeting :</p>
//               </p>
//             </div>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default AllPendingTrip;

import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Typography, Tabs, Modal } from "antd";
import {
  CalendarOutlined,
  EnvironmentOutlined,
  SnippetsOutlined,
  SafetyOutlined,
  ShopOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { TabPane } = Tabs;
import flightlogo from "../images/flightlogo.svg";
import hotellogo from "../images/hotellogo.svg";
import documentlogo from "../images/documentlogo.svg";
import insurancelogo from "../images/insurancelogo.svg";
import meetinglogo from "../images/meetinglogo.svg";
import sightseeinglogo from "../images/sightseeinglogo.svg";
import screenshotmap from "../images/screenshotmap.svg";
import Trip from "./Trip";
import axios from "axios";
import dayjs from "dayjs";
import { Form, Input, Radio, Space, Select, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";

// import { Form, Input, Radio, Space, Select, DatePicker, Tabs } from "antd";

const AllPendingTrip = ({ newTrip }) => {
  const [trips, setTrips] = useState([
    {
      id: "TRIP-0001",
      tripId: "TRIP-0001",
      title: "Business Trip",
      travelDuration: "12 Nov 2024 - 15 Nov 2024",
      destination: "Chennai",
      flightInfo: {
        airline: "Indigo",
        flightNo: "IN2098",
        departure: "Bangalore",
        arrival: "Chennai",
        date: "15 Nov 2024",
        class: "Economy",
      },
      hotelInfo: {
        name: "Sea Green Hotel",
        location: "Churchgate",
        checkIn: "Nov 12, 2024, 11:00 AM",
        checkOut: "Nov 15, 2024, 11:00 AM",
      },
      documents: {
        passport: "123456789",
        name: "Samir Kumar",
        visa: "Business Visa - Valid until 2025",
      },
      insurance: {
        medicalExpenses: "Up to ₹10,00,000",
        lostLuggage: "Up to ₹50,000",
      },
      sightseeing: {
        location: "Gateway of India",
        schedule: "07/11/2024 at 10:00 AM",
      },
      meetingSchedule: {
        clientMeeting: "Meeting with ABC Corp at 2:00 PM",
      },
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form] = Form.useForm();
  // const [newTrip, setNewTrip] = useState(null);

  const [activeTapKey, setActiveTapKey] = useState("planned");

  useEffect(() => {
    if (newTrip) {
      setTrips((prevTrips) => [...prevTrips, newTrip]);
    }
  }, [newTrip]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:3000/api/v1/trip?page=1&limit=5&search=&status=${activeTapKey}`,
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFhODBiODg2LTYyMTAtNDY5NS1iZjdiLTZmOTAwZDY0MjY3OSIsImVtYWlsIjoiZGVlcHNpa2hhLnJrQGh1dGVjaHNvbHV0aW9ucy5jb20iLCJpYXQiOjE3MzYzNTA3NTQsImV4cCI6MTczNjk1NTU1NH0.xJzJsVQajzcZUZgiXRTDHy_nzSpbs2XZkljoghUIf34",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setTrips(response?.data?.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [activeTapKey]);

  const handleCardClick = (trip) => {
    setSelectedTrip(trip);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedTrip(null);
  };

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
        // setNewTrip(tripDetails);
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

  if (isSubmitted) {
    return <AllPendingTrip />;
  }

  return (
    <div style={{ padding: "20px" }}>
      {trips.length > 0 ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Title level={4} style={{ margin: 0 }}>
              Pending Trips
            </Title>
            <Button
              type="primary"
              style={{ borderRadius: "5px" }}
              onClick={showModal}
            >
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
                rules={[
                  { required: true, message: "Please enter a trip name" },
                ]}
              >
                <Input placeholder="Trip name" />
              </Form.Item>

              <Form.Item
                label="Trip Type"
                name="tripType"
                rules={[
                  { required: true, message: "Please select a trip type" },
                ]}
              >
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value="domestic">
                      Domestic <br />
                      <span style={{ fontSize: "12px", color: "#888" }}>
                        You are creating this request for a trip within your
                        home country.
                      </span>
                    </Radio>
                    <Radio value="international">
                      International <br />
                      <span style={{ fontSize: "12px", color: "#888" }}>
                        You are creating this request for a trip outside your
                        home country.
                      </span>
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="Business Purpose"
                name="businessPurpose"
                rules={[
                  {
                    required: true,
                    message: "Please enter a business purpose",
                  },
                ]}
              >
                <Input.TextArea
                  maxLength={150}
                  placeholder="Max 200 Characters"
                />
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
                    {
                      required: true,
                      message: "Please select a departure city",
                    },
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
                    {
                      required: true,
                      message: "Please select an arrival city",
                    },
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

          <Tabs
            defaultActiveKey={activeTapKey}
            onChange={(k) => setActiveTapKey(k)}
          >
            <TabPane
              tab={<span style={{ fontWeight: "bold" }}>Pending Trips</span>}
              key="planned"
            >
              <Row gutter={[16, 16]}>
                {trips.map((trip) => (
                  <Col key={trip.id} xs={24} sm={12} md={8}>
                    <Card
                      bordered={true}
                      bodyStyle={{ padding: "16px" }}
                      style={{
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px",
                        borderLeft: "4px solid #1890ff",
                      }}
                      onClick={() => handleCardClick(trip)}
                    >
                      <p style={{ fontSize: "14px", margin: "8px 0" }}>
                        <Text strong>ID-{trips.length}:</Text> {trip.tripId}
                      </p>

                      <p style={{ fontSize: "14px", margin: "8px 0" }}>
                        <Text strong>Travel Duration:</Text>
                        {`${dayjs(trip.startDate).format(
                          "DD MMM YYYY"
                        )} - ${dayjs(trip.endDate).format("DD MMM YYYY")}`}
                        {/* {trip.startDate - trip.endDate}
                        {trip.travelDuration} */}
                      </p>
                      <p style={{ fontSize: "14px", margin: "8px 0" }}>
                        <Text strong>Destination:</Text> {trip.destination}
                      </p>
                    </Card>
                  </Col>
                ))}
              </Row>
            </TabPane>

            <TabPane
              tab={<span style={{ fontWeight: "bold" }}>All Trips</span>}
              key="all"
            >
              <Row gutter={[16, 16]}>
                {trips.map((trip) => (
                  <Col key={trip.id} xs={24} sm={12} md={8}>
                    <Card
                      bordered={true}
                      bodyStyle={{ padding: "16px" }}
                      style={{
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px",
                        borderLeft: "4px solid #1890ff",
                      }}
                      onClick={() => handleCardClick(trip)}
                    >
                      <p style={{ fontSize: "14px", margin: "8px 0" }}>
                        <Text strong>ID-{trips.length}:</Text> {trip.tripId}
                      </p>

                      <p style={{ fontSize: "14px", margin: "8px 0" }}>
                        <Text strong>Travel Duration:</Text>
                        {`${dayjs(trip.startDate).format(
                          "DD MMM YYYY"
                        )} - ${dayjs(trip.endDate).format("DD MMM YYYY")}`}
                      </p>
                      <p style={{ fontSize: "14px", margin: "8px 0" }}>
                        <Text strong>Destination:</Text> {trip.destination}
                      </p>
                    </Card>
                  </Col>
                ))}
              </Row>
            </TabPane>
          </Tabs>

          {selectedTrip && (
            <Modal
              title={<Title level={4}>{selectedTrip.title}</Title>}
              visible={isModalVisible}
              onCancel={handleModalClose}
              footer={null}
            >
              <div style={{ padding: "10px 0" }}>
                <p>
                  <Text strong>ID:</Text> {selectedTrip.id}
                </p>
                <p>
                  <Text strong>Travel Duration:</Text>{" "}
                  {selectedTrip.travelDuration}
                </p>
                <p>
                  <Text strong>Destination:</Text> {selectedTrip.destination}
                </p>
                <div
                  style={{
                    marginTop: "20px",
                    borderTop: "1px solid #f0f0f0",
                    paddingTop: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {selectedTrip.flightInfo && (
                    <div
                      style={{
                        marginTop: "20px",
                        borderTop: "1px solid #f0f0f0",
                        paddingTop: "10px",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <p
                        style={{
                          // justifyContent: "space-evenly",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <img
                          src={flightlogo}
                          className="trip-image"
                          alt="trip"
                        />
                        <Text
                          strong
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <RocketOutlined />
                          Flight Information:
                        </Text>
                        <p style={{ justifyContent: "space-between" }}>
                          Airline: {selectedTrip.flightInfo.airline}
                        </p>
                        <p style={{ justifyContent: "space-between" }}>
                          Flight No: {selectedTrip.flightInfo.flightNo}
                        </p>
                        <p>Departure: {selectedTrip.flightInfo.departure}</p>
                        <p>Arrival: {selectedTrip.flightInfo.arrival}</p>
                        <p>Date: {selectedTrip.flightInfo.date}</p>
                        <p>Class: {selectedTrip.flightInfo.class}</p>
                      </p>
                    </div>
                  )}

                  {selectedTrip.hotelInfo && (
                    <div
                      style={{
                        marginTop: "20px",
                        borderTop: "1px solid #f0f0f0",
                        paddingTop: "10px",
                      }}
                    >
                      <p>
                        <img
                          src={hotellogo}
                          className="trip-image"
                          alt="trip"
                        />
                        <Text strong>
                          <ShopOutlined />
                          Hotel Information:
                        </Text>
                      </p>
                      <p>Hotel: {selectedTrip.hotelInfo.name}</p>
                      <p>Location: {selectedTrip.hotelInfo.location}</p>
                      <p>Check-in Date: {selectedTrip.hotelInfo.checkIn}</p>
                      <p>Check-out Date: {selectedTrip.hotelInfo.checkOut}</p>
                    </div>
                  )}

                  {selectedTrip.documents && (
                    <div
                      style={{
                        marginTop: "20px",
                        borderTop: "1px solid #f0f0f0",
                        paddingTop: "10px",
                      }}
                    >
                      <p>
                        <img
                          src={documentlogo}
                          className="trip-image"
                          alt="trip"
                        />
                        <Text strong>
                          <SnippetsOutlined />
                          Documents:
                        </Text>
                      </p>
                      <p>Passport: {selectedTrip.documents.passport}</p>
                      <p>Name: {selectedTrip.documents.name}</p>
                      <p>Visa: {selectedTrip.documents.visa}</p>
                    </div>
                  )}

                  {selectedTrip.insurance && (
                    <div
                      style={{
                        marginTop: "20px",
                        borderTop: "1px solid #f0f0f0",
                        paddingTop: "10px",
                      }}
                    >
                      <p>
                        <img
                          src={insurancelogo}
                          className="trip-image"
                          alt="trip"
                        />
                        <Text strong>
                          <SafetyOutlined />
                          Insurance Details:
                        </Text>
                      </p>
                      <p>
                        Medical Expenses:{" "}
                        {selectedTrip.insurance.medicalExpenses}
                      </p>
                      <p>Lost Luggage: {selectedTrip.insurance.lostLuggage}</p>
                    </div>
                  )}

                  {selectedTrip.sightseeing && (
                    <div
                      style={{
                        marginTop: "20px",
                        borderTop: "1px solid #f0f0f0",
                        paddingTop: "10px",
                      }}
                    >
                      <p>
                        <img
                          src={sightseeinglogo}
                          className="trip-image"
                          alt="trip"
                        />
                        <Text strong>
                          <EnvironmentOutlined />
                          Sightseeing:
                        </Text>
                      </p>
                      <p>Location: {selectedTrip.sightseeing.location}</p>
                      <p>Schedule: {selectedTrip.sightseeing.schedule}</p>
                      <img
                        src={screenshotmap}
                        className="trip-image"
                        alt="trip"
                      />
                    </div>
                  )}

                  {selectedTrip.meetingSchedule && (
                    <div
                      style={{
                        marginTop: "20px",
                        borderTop: "1px solid #f0f0f0",
                        paddingTop: "10px",
                      }}
                    >
                      <p>
                        <img
                          src={meetinglogo}
                          className="trip-image"
                          alt="trip"
                        />
                        <Text strong>
                          <CalendarOutlined />
                          Meeting Schedule:
                        </Text>
                      </p>
                      <p>{selectedTrip.meetingSchedule.clientMeeting}</p>
                    </div>
                  )}
                </div>
              </div>
            </Modal>
          )}
        </>
      ) : (
        <Trip />
      )}
    </div>
  );
};

export default AllPendingTrip;
