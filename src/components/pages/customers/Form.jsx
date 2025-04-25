import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Typography,
  message,
  Space,
  Divider,
} from "antd";
import axios from "axios";
import moment from "moment";

const { Title } = Typography;

const { Option } = Select;

const MyForm = () => {
  const [form] = Form.useForm();
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login/Register

  
  const handleFinish = async (values) => {
    try {
      if (isLogin) {
        // Login user
        const res = await axios.post("http://142.93.211.139/api/login", {
          email: values.email,
          password: values.password,
        });
        message.success("Login successful!");
        console.log("Login Response:", res.data);
      } else {
        // Register user
        const payload = {
          name: values.name,
          email: values.email,
          password: values.password,
          gender: values.gender,
          address: values.address,
          dob: values.dob ? moment(values.dob).format("YYYY-MM-DD") : null,
        };

        const res = await axios.post("http://142.93.211.139/api/users", payload);
        message.success("User registered successfully!");
        console.log("Register Response:", res.data);
      }

      form.resetFields();
    } catch (err) {
      console.error("API error:", err);
      message.error("Something went wrong!");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 24 }}>
      <Title level={4}>{isLogin ? "Login" : "Register"} Form</Title>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{ gender: "male" }}
      >
        {!isLogin && (
          <>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter full name" />
            </Form.Item>

            <Form.Item
              label="Date of Birth"
              name="dob"
              rules={[{ required: true, message: "Please select your DOB" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: "Please select gender" }]}
            >
              <Select placeholder="Select gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input.TextArea placeholder="Enter your address" rows={3} />
            </Form.Item>
          </>
        )}

        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Enter a valid email address" },
          ]}
        >
          <Input placeholder="example@email.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              {isLogin ? "Login" : "Register"}
            </Button>
            <Button htmlType="button" onClick={() => form.resetFields()}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>

      <Divider />
      <Button type="link" onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
      </Button>
    </div>
  );
}



export default MyForm;


