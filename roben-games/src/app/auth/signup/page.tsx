"use client";
import { Button, Form, Input } from "antd";

const page = () => {
  const [form] = Form.useForm();
  return (
    <main>
      <div className="md:hidden w-4/5 m-8 p-4 rounded-3xl shadow-lg shadow-indigo-500/50">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold text-center">Sign up</h1>
        </div>
        {/* <hr /> <br /> */}
        <Form form={form} layout="vertical">
          <Form.Item
            label="User Name (Team Name)"
            name="userName"
            rules={[{ required: true, message: "User name is Required" }]}
            required
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="User Email"
            name="email"
            rules={[{ required: true, message: "Email is Required" }]}
            required
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Set Password"
            name="password"
            rules={[{ required: true, message: "Password is Required" }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[{ required: true, message: "Password is Required" }]}
          >
            <Input.Password placeholder="Confirm password" />
          </Form.Item>

          <div className="flex gap-x-2">
            <Button type="primary" color="primary" htmlType="submit">
              Submit
            </Button>
            <Button color="danger" onClick={() => form.resetFields()}>
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </main>
  );
};

export default page;
