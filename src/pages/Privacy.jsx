import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/shared/PageHeader";
import LegalSection from "@/components/shared/LegalSection";
import Reveal from "@/components/shared/Reveal";

export default function Privacy() {
  return (
    <div>
      <PageHeader eyebrow="Legal" title="Privacy Policy" subtitle="Effective date: July 7, 2026" />
      <section className="py-16 md:py-20 bg-white">
        <Reveal className="max-w-[860px] mx-auto px-6">
          <LegalSection heading="1. Who we are">
            <p>
              Lymnea Group LLC, doing business as LConnectiQ (&ldquo;LConnectiQ,&rdquo;
              &ldquo;we,&rdquo; or &ldquo;us&rdquo;), is a Florida limited liability company located
              at 177 SW Range Ave, Madison, FL 32340, that provides construction support services.
              This policy explains, in plain language, what information we collect through this
              website, how we use it, and the choices you have.
            </p>
          </LegalSection>

          <LegalSection heading="2. Information we collect">
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Information you give us.</strong> When you submit our contact form or email
                us, we receive what you provide: your name, company, email address, the service you
                are interested in, and your message.
              </li>
              <li>
                <strong>Technical information.</strong> Like most websites, our hosting provider
                automatically logs basic technical data such as IP address, browser type, and pages
                visited. If we enable analytics, it may collect similar usage data and approximate
                location.
              </li>
            </ul>
          </LegalSection>

          <LegalSection heading="3. How we use it">
            <ul className="list-disc ml-6 space-y-2">
              <li>To respond to your inquiry and discuss your project.</li>
              <li>To provide and administer our services if you become a client.</li>
              <li>To improve this website and understand how visitors use it.</li>
              <li>To send you information about our services, only where permitted. You can opt out at any time.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </LegalSection>

          <LegalSection heading="4. What we do not do">
            <p>We do <strong>not</strong> sell your personal information, and we do not display third-party advertising on this site.</p>
          </LegalSection>

          <LegalSection heading="5. Sharing">
            <p>
              We share information only with service providers that help us operate (such as our
              email and productivity platform, our website hosting provider, and our form-processing
              service), and only so they can perform those functions. We may also disclose
              information if required by law, or as part of a business transaction such as a merger
              or sale, in which case this policy would continue to apply to your information.
            </p>
          </LegalSection>

          <LegalSection heading="6. Client project information">
            <p>
              Documents, drawings, models, and other project information that clients share with us
              during an engagement are governed by the confidentiality terms of our written service
              agreements, not by this website policy. Client project data is never used for
              marketing and is never shared outside the project team.
            </p>
          </LegalSection>

          <LegalSection heading="7. Cookies and analytics">
            <p>
              This site currently sets no marketing cookies. If we enable analytics, small cookies
              may be used to measure site usage. You can block or delete cookies in your browser
              settings at any time without losing access to this site.
            </p>
          </LegalSection>

          <LegalSection heading="8. Retention">
            <p>
              We keep inquiry information as long as reasonably needed to respond, provide
              services, and meet legal and recordkeeping obligations, then delete or anonymize it.
            </p>
          </LegalSection>

          <LegalSection heading="9. Security">
            <p>
              We use reasonable administrative and technical safeguards to protect your
              information, including access controls on our systems. No method of transmission or
              storage is 100% secure, so we cannot guarantee absolute security.
            </p>
          </LegalSection>

          <LegalSection heading="10. Your choices and rights">
            <p>
              You may ask us to access, correct, or delete the personal information we hold about
              you, or to stop sending you marketing, via our{" "}
              <Link to="/contact" className="text-gold-deep font-medium">contact page</Link>.
              Depending on where you live, you may have additional rights under local law; we will
              honor valid requests as required.
            </p>
          </LegalSection>

          <LegalSection heading="11. Children">
            <p>This site is intended for business audiences and is not directed to children under 13. We do not knowingly collect information from children.</p>
          </LegalSection>

          <LegalSection heading="12. Third-party links">
            <p>Links to other websites are provided for convenience. Their privacy practices are their own; this policy does not cover them.</p>
          </LegalSection>

          <LegalSection heading="13. Changes to this policy">
            <p>If we change this policy, we will post the updated version here with a new effective date.</p>
          </LegalSection>

          <LegalSection heading="14. Contact">
            <p>
              Questions about this policy:{" "}
              <Link to="/contact" className="text-gold-deep font-medium">contact us here</Link>.
            </p>
            <p className="mt-3">
              Lymnea Group LLC dba LConnectiQ<br />
              Office: 177 SW Range Ave, Madison, FL 32340<br />
              Mailing: PO Box 5642, Tallahassee, FL 32314<br />
              Email:{" "}
              <a href="mailto:info@lconnectiq.com" className="text-gold-deep font-medium">info@lconnectiq.com</a>
            </p>
          </LegalSection>
        </Reveal>
      </section>
    </div>
  );
}