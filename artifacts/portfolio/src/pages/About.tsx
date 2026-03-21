import { Layout } from "@/components/layout/Layout";
import { About as AboutSection } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";

export default function About() {
  return (
    <Layout activePage="about">
      <AboutSection />
      <Experience />
    </Layout>
  );
}
