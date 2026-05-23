import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold royal-heading heading-font mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-10 body-font">
          Last updated: May 23, 2026
        </p>

        <div className="space-y-8 body-font text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">1. Introduction</h2>
            <p>
              Maharana Mansion ("we", "us", or "our") respects your privacy and is committed
              to protecting the personal information you share with us. This Privacy Policy
              explains how we collect, use, and safeguard your data when you visit our website
              or interact with our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal details such as name, email address, and phone number submitted through enquiry or contact forms.</li>
              <li>Information about your visit, including IP address, browser type, and pages viewed.</li>
              <li>Communication records when you contact us by phone, email, or WhatsApp.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your enquiries and schedule site visits.</li>
              <li>To share information about our projects, pricing, and offers.</li>
              <li>To improve our website, services, and customer experience.</li>
              <li>To comply with legal and regulatory requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">4. Sharing of Information</h2>
            <p>
              We do not sell or rent your personal information. We may share data with trusted
              partners, financial institutions for loan assistance, or authorities when required
              by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">5. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information from
              unauthorized access, alteration, or disclosure. However, no method of transmission
              over the internet is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">6. Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience and analyze website traffic.
              You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">7. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information by
              contacting us at info@maharanamansion.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">8. Contact Us</h2>
            <p>
              For any questions regarding this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@maharanamansion.com" className="text-primary underline">
                info@maharanamansion.com
              </a>{" "}
              or call 1800-309-5121.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
