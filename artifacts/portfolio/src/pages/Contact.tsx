import { Layout } from "@/components/layout/Layout";
import { Contact as ContactSection } from "@/components/sections/Contact";

export default function Contact() {
  return (
    <Layout activePage="contact">
      <ContactSection />
    </Layout>
  );
}
