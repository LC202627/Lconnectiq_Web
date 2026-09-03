import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/shared/PageHeader";
import LegalSection from "@/components/shared/LegalSection";
import Reveal from "@/components/shared/Reveal";

export default function Terms() {
  return (
    <div>
      <PageHeader eyebrow="Legal" title="Terms of Service" subtitle="Effective date: July 7, 2026" />
      <section className="py-16 md:py-20 bg-white">
        <Reveal className="max-w-[860px] mx-auto px-6">
          <LegalSection heading="1. Acceptance of these terms">
            <p>By using this website, you agree to these Terms of Service. If you do not agree, please do not use the site.</p>
          </LegalSection>

          <LegalSection heading="2. What this site is">
            <p>
              This website is informational. It describes the services of LConnectiQ, LLC and lets
              you contact us. Actual services are provided only under separate written agreements —
              such as a Master Services Agreement and Scope of Work — signed by both parties.
              Nothing on this site is an offer that can be accepted to form a contract, and
              submitting an inquiry does not create a client relationship.
            </p>
          </LegalSection>

          <LegalSection heading="3. No professional advice; role limitation">
            <p>
              Content on this site is general information, not engineering, architectural, legal,
              or financial advice. LConnectiQ provides construction <strong>support</strong>{" "}
              services: we execute and structure information, documentation, and workflows. We do
              not assume design authority, construction-management responsibility, or approval
              liability, and we do not provide services that require a Florida professional
              license. Design decisions and approvals always remain with the licensed professionals
              of record on your project.
            </p>
          </LegalSection>

          <LegalSection heading="4. Intellectual property">
            <p>
              The LConnectiQ name, logo, the tagline "Leadership. Intelligence. Connection.," and
              all site content, images, and design are owned by LConnectiQ, LLC or used with
              permission. You may view and print pages for your own business evaluation of our
              services. You may not copy, scrape, republish, or use our content or marks for any
              other purpose without written permission.
            </p>
          </LegalSection>

          <LegalSection heading="5. Portfolio materials">
            <p>
              Portfolio images and models illustrate the type and quality of work we perform. They
              are representative of capability and may not depict a specific client engagement.
            </p>
          </LegalSection>

          <LegalSection heading="6. Acceptable use">
            <p>
              You agree not to misuse the site — including attempting to breach security,
              submitting false or unlawful content through our forms, or interfering with the
              site's operation.
            </p>
          </LegalSection>

          <LegalSection heading="7. Third-party links">
            <p>Links to third-party sites are provided for convenience. We are not responsible for their content or practices.</p>
          </LegalSection>

          <LegalSection heading="8. Disclaimer of warranties">
            <p>
              This site is provided "as is" and "as available," without warranties of any kind,
              express or implied, including accuracy, completeness, or fitness for a particular
              purpose. We may change or remove content at any time.
            </p>
          </LegalSection>

          <LegalSection heading="9. Limitation of liability">
            <p>
              To the fullest extent permitted by law, LConnectiQ, LLC and its members will not be
              liable for any indirect, incidental, consequential, or special damages arising from
              your use of this website. Our total liability related to the website will not exceed
              one hundred U.S. dollars ($100). This section does not limit liability that cannot be
              limited under applicable law, and it does not apply to services delivered under a
              signed service agreement, which has its own terms.
            </p>
          </LegalSection>

          <LegalSection heading="10. Indemnification">
            <p>You agree to indemnify LConnectiQ, LLC against claims arising from your violation of these terms or misuse of the site.</p>
          </LegalSection>

          <LegalSection heading="11. Governing law and venue">
            <p>
              These terms are governed by the laws of the State of Florida, without regard to
              conflict-of-law rules. Any dispute relating to this website will be brought
              exclusively in the state or federal courts located in Leon County, Florida.
            </p>
          </LegalSection>

          <LegalSection heading="12. Changes to these terms">
            <p>We may update these terms from time to time. The version posted here, with its effective date, is the version that applies.</p>
          </LegalSection>

          <LegalSection heading="13. Contact">
            <p>
              Questions about these terms:{" "}
              <Link to="/contact" className="text-gold-deep font-medium">contact us here</Link>{" "}
              &middot; LConnectiQ, LLC, Tallahassee, Florida.
            </p>
          </LegalSection>
        </Reveal>
      </section>
    </div>
  );
}