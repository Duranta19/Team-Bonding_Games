"use client";
import { Button, Form, Input } from "antd";
import Link from "next/link";

const Page = () => {
  const [form] = Form.useForm();
  return (
    <main>
      <div className="md:hidden w-4/5 m-8 p-4 rounded-3xl shadow-lg shadow-indigo-500/50">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold text-center">Sign in</h1>
        </div>
        <Form form={form} layout="vertical">
          <Form.Item
            label="User Email"
            name="email"
            rules={[{ required: true, message: "Email is Required" }]}
            required
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is Required" }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          <Link href={"/auth/signup"}>
            <p className="text-blue-800">Do not have any account? Signup Here</p>
          </Link>
          <div className="w-full flex gap-x-2">
            <Button type="primary" color="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              type="default"
              color="green"
              onClick={() => form.resetFields()}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </main>
  );
};

export default Page;
