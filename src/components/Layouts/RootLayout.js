import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header, Content } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Button, Dropdown, Space } from "antd";
import Footer from "../UI/Footer";

const RootLayout = ({ children }) => {
  const items = [
    {
      key: "1",
      label: (
        <Link
          // target="_blank"
          rel="noopener noreferrer"
          href="/categories/cpu"
        >
          CPU / Processor
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          // target="_blank"
          rel="noopener noreferrer"
          href="/categories/motherboard"
        >
          Motherboard
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          // target="_blank"
          rel="noopener noreferrer"
          href="/categories/ram"
        >
          RAM
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link
          // target="_blank"
          rel="noopener noreferrer"
          href="/categories/power-supply"
        >
          Power Supply Unit
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link
          // target="_blank"
          rel="noopener noreferrer"
          href="/categories/storage-device"
        >
          Storage Device
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link
          // target="_blank"
          rel="noopener noreferrer"
          href="/categories/monitor"
        >
          Monitor
        </Link>
      ),
    },
    {
      key: "7",
      label: (
        <Link
          // target="_blank"
          rel="noopener noreferrer"
          href="/categories/others"
        >
          Others
        </Link>
      ),
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          // paddingInline: "0px",
        }}
        className="lg:pe-4 lg:ps-4 md:pe-4 md:ps-4 pe-0 ps-0"
      >
        <div className="brand-logo">
          <h1 className="m-0">
            <Link href="/">PC House</Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          {/* <Link href="/category">
            <items>
              <ProfileOutlined />
              Category
            </items>
          </Link>
          <Link href="/about">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              <UserOutlined />
              About Us
            </items>
          </Link> */}

          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
          >
            <Button type="primary">Categories </Button>
          </Dropdown>

          <Link href="/pc-builder">
            <items>
              <MobileOutlined />
              PC Builder
            </items>
          </Link>
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer />
    </Layout>
  );
};
export default RootLayout;
