import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";

const UserNavSidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="default" size="small" onClick={showDrawer} className="!ml-4">
        <MenuUnfoldOutlined color="white" size={300}/>
      </Button>
      <Drawer
        placement="left"
        width="200"
        title="Basic Drawer"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
      >
        <p>Home</p>
        <p>Leader boards</p>
      </Drawer>
    </>
  );
};

export default UserNavSidebar;
