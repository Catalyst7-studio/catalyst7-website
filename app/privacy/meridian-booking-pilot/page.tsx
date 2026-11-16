import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meridian WhatsApp Booking Privacy Notice",
  description: "How Catalyst 7 handles personal information when you use Meridian’s WhatsApp booking service.",
  alternates: { canonical: "/privacy/meridian-booking-pilot" },
};

const heading = "mb-3 text-xl font-semibold text-[#EDE5D0]";
const link = "underline underline-offset-4 hover:text-white";

export default function MeridianBookingPrivacy() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-20 pt-28 sm:pt-36" aria-labelledby="privacy-title">
      <header className="mb-12">
        <h1 id="privacy-title" className="mb-5 text-4xl font-bold sm:text-5xl font-[family-name:var(--font-space-grotesk)]">
          Meridian WhatsApp Booking Privacy Notice
        </h1>
        <p className="text-lg leading-relaxed text-[#C4BDA9]">
          Catalyst 7 (Pty) Ltd is responsible for the personal information it handles in this
          WhatsApp booking service. Our business address is ParlourPalm Street, Karanpark, Pretoria,
          South Africa.
        </p>
      </header>

      <div className="space-y-9 text-base leading-relaxed text-[#C4BDA9]">
        <section>
          <h2 className={heading}>Who this notice covers</h2>
          <p>
            This notice applies to anyone who contacts Meridian through its WhatsApp booking
            service or whose booking information someone shares through it. Share another person’s
            information only if they have authorised you to do so.
          </p>
          <p className="mt-3">
            The current pilot uses a fictional practice. During testing, use a fictional name and
            appointment details. Keep symptoms, diagnoses, medical records, identity documents and
            payment information out of the chat.
          </p>
        </section>

        <section>
          <h2 className={heading}>What we collect and why</h2>
          <p>
            When you message the service, WhatsApp supplies your phone number, message text and a
            message identifier. We store the conversation and automated replies. If you make an
            appointment, we also store its service, date, time, status, booking reference and calendar
            event ID. The calendar event includes the name and service you give the assistant.
          </p>
          <p className="mt-3">
            We use this information to reply to enquiries, check availability, manage bookings,
            prevent duplicate processing and troubleshoot the service. Using WhatsApp is voluntary.
            The assistant needs your WhatsApp number and message to reply, and a name and appointment
            details to make a booking. You can contact Catalyst 7 by email to ask about the service.
          </p>
        </section>

        <section>
          <h2 className={heading}>Who handles the information</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Meta and WhatsApp carry messages between your account and the service.</li>
            <li>Cloudflare delivers incoming messages to the booking server.</li>
            <li>Anthropic’s Claude processes the conversation text and booking context to generate replies.</li>
            <li>Supabase stores conversation and booking records. The pilot database is hosted in Ireland.</li>
            <li>Google Calendar stores bookings and checks availability.</li>
          </ul>
          <p className="mt-3">
            These providers may process information outside South Africa, where data protection laws
            can differ. Catalyst 7 must assess overseas transfers and the protections that apply to
            them under the Protection of Personal Information Act (POPIA).
          </p>
        </section>

        <section>
          <h2 className={heading}>Retention and deletion</h2>
          <p>
            Catalyst 7 keeps the Meridian WhatsApp booking records it controls for 30 days from
            collection and then queues them for deletion, unless applicable law requires longer retention. Database
            cleanup runs every 15 minutes. Calendar cleanup runs while the pilot computer is online
            and signed in. Cancelling a test appointment leaves the conversation and a cancelled
            booking record in the pilot database until those records are deleted.
          </p>
          <p className="mt-3">
            To request earlier deletion where POPIA permits, email Somila at{" "}
            <a className={link} href="mailto:catalyst7@catalyst7.co.za">catalyst7@catalyst7.co.za</a>.
            Include the WhatsApp number you used or your booking reference so we can locate the
            records.
          </p>
        </section>

        <section>
          <h2 className={heading}>Your rights and how to contact us</h2>
          <p>
            You can ask to access or correct your personal information, object to processing, or
            request deletion where POPIA permits. You can also ask a person to review a booking or
            reply generated by the assistant. Somila handles privacy requests for Catalyst 7 at{" "}
            <a className={link} href="mailto:catalyst7@catalyst7.co.za">catalyst7@catalyst7.co.za</a>.
            We may ask you to confirm your identity before acting on a request.
          </p>
          <p className="mt-3">
            You can lodge a complaint with the Information Regulator of South Africa by emailing{" "}
            <a className={link} href="mailto:POPIAComplaints@inforegulator.org.za">POPIAComplaints@inforegulator.org.za</a>{" "}
            or using its <a className={link} href="https://inforegulator.org.za/complaints/">complaints page</a>.
          </p>
        </section>
      </div>
    </article>
  );
}
