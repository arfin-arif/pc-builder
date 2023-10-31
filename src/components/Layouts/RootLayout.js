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
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Button, Dropdown, Space } from "antd";

const RootLayout = ({ children }) => {
  const items = [
    {
      key: "1",
      label: (
        <a
          // target="_blank"
          rel="noopener noreferrer"
          href="/categories/cpu"
        >
          CPU / Processor
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          // target="_blank"
          rel="noopener noreferrer"
          href="/categories/motherboard"
        >
          Motherboard
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          // target="_blank"
          rel="noopener noreferrer"
          href="/categories/ram"
        >
          RAM
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          // target="_blank"
          rel="noopener noreferrer"
          href="/categories/power-supply"
        >
          Power Supply Unit
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a
          // target="_blank"
          rel="noopener noreferrer"
          href="/categories/storage"
        >
          Storage Device
        </a>
      ),
    },
    {
      key: "6",
      label: (
        <a
          // target="_blank"
          rel="noopener noreferrer"
          href="/categories/monitor"
        >
          Monitor
        </a>
      ),
    },
    {
      key: "7",
      label: (
        <a
          // target="_blank"
          rel="noopener noreferrer"
          href="/categories/others"
        >
          Others
        </a>
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

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PC Builder
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
      </Footer>
    </Layout>
  );
};
export default RootLayout;
