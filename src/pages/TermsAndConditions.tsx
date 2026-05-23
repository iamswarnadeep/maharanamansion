import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold royal-heading heading-font mb-4">
          Terms & Conditions
        </h1>
        <p className="text-muted-foreground mb-10 body-font">
          Last updated: May 23, 2026
        </p>

        <div className="space-y-8 body-font text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Maharana Mansion website, you agree to be bound by these
              Terms & Conditions. If you do not agree, please discontinue use of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">2. Use of Website</h2>
            <p>
              The content on this website is provided for general information about our residential
              projects. You agree to use this website only for lawful purposes and in a manner that
              does not infringe the rights of others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">3. Property Information</h2>
            <p>
              Pricing, floor plans, amenities, images, and other project details displayed on the
              website are indicative and subject to change without prior notice. Final terms will be
              governed by the agreement executed between the buyer and Maharana Mansion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">4. Intellectual Property</h2>
            <p>
              All content, including text, graphics, logos, and images, is the property of Maharana
              Mansion or its licensors and is protected by applicable intellectual property laws.
              Reproduction without prior written consent is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">5. User Submissions</h2>
            <p>
              Any information you submit through enquiry forms must be accurate and complete. We
              reserve the right to contact you regarding your enquiry through phone, email, or
              messaging platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">6. Limitation of Liability</h2>
            <p>
              Maharana Mansion shall not be liable for any direct, indirect, or consequential
              damages arising from the use or inability to use this website or reliance on the
              information presented.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for the
              content, privacy practices, or services of those websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">8. Governing Law</h2>
            <p>
              These Terms & Conditions are governed by the laws of India. Any disputes shall be
              subject to the exclusive jurisdiction of the courts in Rajasthan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">9. Changes to Terms</h2>
            <p>
              We may update these Terms & Conditions at any time without notice. Continued use of
              the website constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">10. Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
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

export default TermsAndConditions;
