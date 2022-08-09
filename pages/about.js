import Link from "next/link";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <>
      <Layout title="About DJ Events" description="This is about page ">
        <div>About Page</div>
        <p>This an app to find the latest DJ and other musical events.</p>
        <p>Version 1.0.0</p>
        <Link href="/">Home</Link>
      </Layout>
    </>
  );
};

export default About;
