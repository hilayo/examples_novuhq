import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Row,
  Column,
  Link,
} from "@react-email/components";
import * as React from "react";

export const NovuAdvertising = () => {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <Head />
          <Preview>Welcome to Novu</Preview>
          <Img
            src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
            width="50"
            height="50"
            alt="Novu"
            style={logo}
          />
          <Heading style={heading}>Novu</Heading>
          <Img
            style={imgCube}
            src={`https://novu.co/images/social-preview.jpg`}
            width={600}
            alt="Novu"
          />
          <Row>
            <Column>
              <Img
                style={imgCubeColumn}
                src="/static/novu1.png"
                width={600}
                alt="Novu"
              />
            </Column>

            <Column>
              <Img
                style={imgCubeColumn}
                src="/static/novu2.png"
                width={600}
                alt="Novu"
              />
            </Column>
          </Row>

          <text>
            Open source JavaScript-native notifications framework for developers
            that makes it easy to build powerful notifications capabilities for
            your product teams.
          </text>
          <Section style={footer}>
            <Row>
              <Column>
                <div style={iconContainer}>
                  <Link href="/" style={iconLink}>
                    <Img
                      src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                      width="32"
                      height="32"
                      alt="Twitter"
                      style={footerIcon}
                    />
                  </Link>
                  <Link href="/" style={iconLink}>
                    <Img
                      src="https://react-email-demo-48zvx380u-resend.vercel.app/static/slack-linkedin.png"
                      width="32"
                      height="32"
                      alt="LinkedIn"
                      style={footerIcon}
                    />
                  </Link>
                  <Link href="/" style={iconLink}>
                    <Img
                      src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                      width="32"
                      height="32"
                      alt="GitHub"
                      style={footerIcon}
                    />
                  </Link>
                  <Link href="/" style={iconLink}>
                    <Img
                      src="https://react-email-demo-48zvx380u-resend.vercel.app/static/slack-facebook.png"
                      width="32"
                      height="32"
                      alt="Facebook"
                      style={footerIcon}
                    />
                  </Link>
                </div>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default NovuAdvertising;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  display: "block",
  margin: "0 auto",
};

const heading = {
  textAlign: "center",
  margin: "0",
  lineHeight: "32px",
};


const imgCube = {
  display: "block",
  maxWidth: "100%",
  width: "600px",
  height: "auto",
  margin: "20px auto",
  padding: "0",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};


const footer = {
  marginTop: "32px",
};

const iconContainer = {
  textAlign: "center" as const,
  marginBottom: "20px",
};

const iconLink = {
  display: "inline-block",
  padding: "0 8px",
};

const footerIcon = {
  display: "inline-block",
};
const imgCubeColumn = {
  display: "block",
  maxWidth: "100%",
  width: "285px",
  height: "auto",
  margin: "0 auto",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};
