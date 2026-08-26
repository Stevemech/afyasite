import React from 'react';
import { Link } from 'react-router-dom';
import {
  LegalLayout,
  Section,
  SubHeading,
  List,
  Item,
  Callout,
  Mail,
} from '../components/LegalLayout';

const sections = [
  { id: 'overview', label: '1. Overview' },
  { id: 'who-we-are', label: '2. Who we are' },
  { id: 'information-we-collect', label: '3. Information we collect' },
  { id: 'on-device', label: '4. Data that stays on your device' },
  { id: 'how-we-use', label: '5. How we use information' },
  { id: 'legal-bases', label: '6. Legal bases for processing' },
  { id: 'sharing', label: '7. How information is shared' },
  { id: 'ai-assistant', label: '8. The in-app AI assistant' },
  { id: 'security', label: '9. How we protect information' },
  { id: 'retention', label: '10. How long we keep information' },
  { id: 'your-rights', label: '11. Your rights and choices' },
  { id: 'deletion', label: '12. Deleting your account and data' },
  { id: 'permissions', label: '13. Android permissions we request' },
  { id: 'children', label: '14. Children' },
  { id: 'transfers', label: '15. International data transfers' },
  { id: 'changes', label: '16. Changes to this policy' },
  { id: 'contact', label: '17. Contact us' },
];

function Privacy() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      intro="AfyaQuest is a training and field-work app for Community Health Workers. This policy explains exactly what the mobile app collects, why it collects it, who it goes to, and how you can get it deleted."
      updated="August 25, 2026"
      docTitle="AfyaQuest — Privacy Policy"
      sections={sections}
    >
      <Section id="overview" title="1. Overview">
        <p>
          AfyaQuest ("AfyaQuest", "we", "us") provides a mobile application that helps Community
          Health Workers and Community Health Volunteers (collectively, "CHWs") complete gamified
          training modules, follow daily visit itineraries, submit field reports to their
          supervisors, and reference clinical guidance offline.
        </p>
        <p>
          We designed the app to collect as little as possible. In short:
        </p>
        <List>
          <Item>
            We collect the information needed to create your account, run your training programme,
            and deliver your reports to your supervising organisation.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">We do not sell your personal information</strong>, and we do not
            share it with advertisers or data brokers.
          </Item>
          <Item>
            The app contains <strong className="text-brand-teal-dark">no advertising SDKs and no third-party analytics
            or crash-reporting SDKs</strong>.
          </Item>
          <Item>
            Your device's precise location is used only to draw your position on the in-app map. It
            stays on your device and is never uploaded to us.
          </Item>
        </List>
        <p>
          For a category-by-category breakdown in the format used by Google Play, see our{' '}
          <Link to="/data-safety" className="text-brand-teal font-semibold underline underline-offset-2 hover:text-brand-teal-dark transition-colors">
            Data Safety disclosure
          </Link>.
        </p>
      </Section>

      <Section id="who-we-are" title="2. Who we are">
        <p>
          AfyaQuest is the developer and operator of the AfyaQuest Android application
          (package name <code className="text-[14px] bg-brand-teal/10 text-brand-teal-dark px-1.5 py-0.5 rounded">com.afyaquest.app</code>) and
          the associated administrator web dashboard. AfyaQuest acts as the data controller for
          account and product data described in this policy.
        </p>
        <p>
          If you use AfyaQuest as part of a health programme run by a hospital, NGO, ministry, or
          other organisation, that organisation is also a controller of the field data you submit
          through the app (visit reports, clock-in records, training progress). Their own privacy
          notice and employment or volunteer policies apply alongside this one.
        </p>
        <p>
          You can reach us at any time at <Mail subject="AfyaQuest privacy enquiry" />.
        </p>
      </Section>

      <Section id="information-we-collect" title="3. Information we collect">
        <SubHeading>3.1 Information you give us</SubHeading>
        <List>
          <Item>
            <strong className="text-brand-teal-dark">Account details.</strong> Your name, email address, and a
            password when you register. Your email address is also used to verify your account and
            to send password-reset codes.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Optional profile details.</strong> Phone number, the organisation
            you work with, your language preference (English or Kiswahili), and a profile photo.
            You can leave these blank.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Field reports.</strong> The daily reports you submit: the number of
            patients visited, the number of vaccinations given, the health-education topics you
            covered, and any free-text challenges or notes you write.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Messages to the AI assistant.</strong> The questions you type to the
            in-app assistant, and the replies it generates. See{' '}
            <a href="#ai-assistant" className="text-brand-teal font-semibold underline underline-offset-2">section 8</a>.
          </Item>
        </List>

        <Callout tone="gold" title="Please do not enter patient-identifying details in free-text fields">
          <p>
            Report notes and assistant messages are stored on our servers. Describe cases in
            general terms and use the identifiers your programme has approved. Do not type a
            patient's full name, national ID number, or contact details into a note or a chat
            message.
          </p>
        </Callout>

        <SubHeading>3.2 Information created as you use the app</SubHeading>
        <List>
          <Item>
            <strong className="text-brand-teal-dark">Training activity.</strong> Which lessons and video modules you have
            opened or completed, your answers and scores on quizzes and daily questions, and the
            points, level, rank, streak, and achievements calculated from them.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Shift activity.</strong> The timestamps at which you clock in and
            clock out, so your supervisor can see who is currently in the field.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Account and sync metadata.</strong> Your user ID, account creation and
            update times, last-active date, account status, and whether an item has been
            synchronised to the server yet.
          </Item>
        </List>

        <SubHeading>3.3 Information your organisation gives us about your work</SubHeading>
        <p>
          If your supervising organisation assigns you an itinerary, they upload the details of the
          households or clients on your route — a client name, address, coordinates, contact
          number, and any notes they add. The app downloads your own assignments so you can work
          offline. This information belongs to your organisation; we process it on their behalf.
        </p>

        <SubHeading>3.4 What we do not collect</SubHeading>
        <List>
          <Item>No advertising identifiers, and no advertising or marketing profiles.</Item>
          <Item>No third-party analytics, attribution, or behavioural-tracking SDKs.</Item>
          <Item>No contacts, calendar, SMS, call logs, microphone audio, or photo library scans.</Item>
          <Item>
            No background location. The app has no background-location permission and cannot track
            you when it is closed.
          </Item>
        </List>
      </Section>

      <Section id="on-device" title="4. Data that stays on your device">
        <p>
          Some of the most sensitive things the app touches never leave your phone. We list them
          explicitly so there is no ambiguity:
        </p>
        <List>
          <Item>
            <strong className="text-brand-teal-dark">Your precise location.</strong> When you open the map and grant
            location permission, the app reads your GPS position to show a live "you are here"
            marker next to your assigned stops. That position is held in memory for the map only.
            It is never written to our servers, never attached to a report, and never shared.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Handwriting strokes.</strong> If you use handwriting input, the strokes
            are converted to text by an on-device Google ML Kit model. The strokes are not uploaded.
            The first time you use the feature, the app downloads the recognition model from Google.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Emergency triage case logs.</strong> Assessments completed in the
            Emergency Response Guide are recorded in the app's local database on your device only.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Downloaded content.</strong> Lesson text and video modules you download
            for offline use are cached on your device and removed when you clear them or uninstall
            the app.
          </Item>
        </List>
        <p>
          Uninstalling AfyaQuest removes everything in this section from your device. It does not
          remove data already synchronised to our servers — for that, see{' '}
          <a href="#deletion" className="text-brand-teal font-semibold underline underline-offset-2">section 12</a>.
        </p>
      </Section>

      <Section id="how-we-use" title="5. How we use information">
        <List>
          <Item>To create and secure your account, sign you in, and let you reset your password.</Item>
          <Item>To deliver training content and record your progress, scores, points, and streaks.</Item>
          <Item>To show you your assigned itinerary and let you record the outcome of each visit.</Item>
          <Item>
            To deliver your reports and clock-in records to your supervisor and to your
            organisation's dashboard.
          </Item>
          <Item>To generate answers when you ask the in-app AI assistant a question.</Item>
          <Item>
            To operate the service reliably — synchronising offline work when connectivity returns,
            preventing duplicate submissions, diagnosing failures, and preventing abuse.
          </Item>
          <Item>
            To produce aggregate, non-identifying statistics about programme reach and training
            completion for our partner organisations and funders.
          </Item>
          <Item>To comply with legal obligations and enforce our terms.</Item>
        </List>
        <p>
          We do not use your information for advertising, and we do not use your reports or chat
          messages to train our own machine-learning models.
        </p>
      </Section>

      <Section id="legal-bases" title="6. Legal bases for processing">
        <p>
          Where the GDPR, the UK GDPR, Kenya's Data Protection Act 2019, or a comparable law
          applies, we rely on the following bases:
        </p>
        <List>
          <Item>
            <strong className="text-brand-teal-dark">Performance of a contract</strong> — to provide the app and the
            account you asked for.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Legitimate interests</strong> — to keep the service secure and
            working, and to improve it, balanced against your privacy.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Consent</strong> — for optional device permissions such as location
            and notifications, which you can grant or withdraw in Android settings at any time.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Legal obligation</strong> — where we must retain or disclose
            information to comply with the law.
          </Item>
        </List>
      </Section>

      <Section id="sharing" title="7. How information is shared">
        <p>We share personal information only in these situations:</p>
        <List>
          <Item>
            <strong className="text-brand-teal-dark">With your supervising organisation.</strong> Supervisors and
            administrators at the organisation you belong to can see your profile, training
            progress, clock-in records, assigned itinerary, and submitted reports.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">With service providers who run the platform on our behalf.</strong>{' '}
            Amazon Web Services provides our identity service (Amazon Cognito), API, databases, file
            storage, and the hosted AI model (Amazon Bedrock). Google provides the Maps SDK used to
            render the map and the on-device ML Kit model download. These providers are bound by
            contract to process data only on our instructions.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">When the law requires it.</strong> To respond to a valid legal request,
            or to protect the rights, safety, or property of users, the public, or AfyaQuest.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">In a business transfer.</strong> If AfyaQuest is involved in a merger,
            acquisition, or transfer of assets, information may transfer with the service. We will
            notify you before your information becomes subject to a different privacy policy.
          </Item>
        </List>
        <p>
          <strong className="text-brand-teal-dark">We do not sell personal information, and we do not share it for
          cross-context behavioural advertising.</strong>
        </p>
        <p>
          Note that the Google Maps SDK is governed by{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-teal font-semibold underline underline-offset-2 hover:text-brand-teal-dark transition-colors">
            Google's Privacy Policy
          </a>{' '}
          and may send device and usage data to Google when you open the map screen.
        </p>
      </Section>

      <Section id="ai-assistant" title="8. The in-app AI assistant">
        <p>
          The app includes a conversational assistant that answers questions about community health
          practice and the training material. When you send it a message:
        </p>
        <List>
          <Item>Your message is sent over an encrypted connection to our backend.</Item>
          <Item>
            Our backend forwards it to a Claude model hosted on Amazon Bedrock inside our own AWS
            account. Amazon does not use Bedrock inputs or outputs to train its models, and the
            model provider does not receive your data.
          </Item>
          <Item>
            The message and the reply are stored against your account so your conversation history
            is available across sessions and after you go offline and back online.
          </Item>
        </List>
        <Callout tone="gold" title="The assistant is not a clinician">
          <p>
            Its answers are educational and can be wrong. They do not replace clinical judgement,
            your programme's protocols, or referral to a qualified health professional. Never enter
            patient-identifying information into the assistant.
          </p>
        </Callout>
      </Section>

      <Section id="security" title="9. How we protect information">
        <List>
          <Item>
            All communication between the app and our servers uses HTTPS/TLS. The app is built to
            refuse unencrypted (cleartext) network traffic outright.
          </Item>
          <Item>
            Passwords are managed by Amazon Cognito. We never see or store your password, and the
            app never stores it on your device.
          </Item>
          <Item>
            Session tokens are stored in Android's encrypted storage, protected by the device
            keystore, and are refreshed and revoked automatically.
          </Item>
          <Item>
            Access to production data is limited to the small number of people who need it to
            operate the service, and supervisors can see only the CHWs assigned to them.
          </Item>
          <Item>
            Release builds are code-shrunk and obfuscated, and API keys are kept out of source
            control.
          </Item>
        </List>
        <p>
          No system is perfectly secure. If we become aware of a breach affecting your personal
          information, we will notify you and the relevant regulator as required by law.
        </p>
      </Section>

      <Section id="retention" title="10. How long we keep information">
        <List>
          <Item>
            <strong className="text-brand-teal-dark">Account data</strong> is kept for as long as your account is active.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Training progress and field reports</strong> are kept for as long as
            your organisation's programme requires them, since they form part of that programme's
            records.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">AI assistant conversations</strong> are kept until you delete your
            account.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">On-device data</strong> lives only as long as the app is installed.
          </Item>
        </List>
        <p>
          After you request deletion, we remove or irreversibly anonymise your personal data within
          30 days, except where we are legally required to retain it. Aggregate statistics that
          cannot identify you may be retained.
        </p>
      </Section>

      <Section id="your-rights" title="11. Your rights and choices">
        <p>Depending on where you live, you may have the right to:</p>
        <List>
          <Item>Access the personal information we hold about you and receive a copy of it.</Item>
          <Item>Correct information that is inaccurate or incomplete.</Item>
          <Item>Delete your account and the personal information associated with it.</Item>
          <Item>Object to or restrict certain processing.</Item>
          <Item>Withdraw a permission you previously granted, such as location or notifications.</Item>
          <Item>Lodge a complaint with your local data-protection authority.</Item>
        </List>
        <p>
          To exercise any of these, email <Mail subject="AfyaQuest data request" /> from the address on
          your account. We will respond within 30 days. We will never charge you or degrade your
          service for exercising a privacy right.
        </p>
        <p>
          You can change your name, contact details, language, and photo directly in the app's
          profile screen at any time.
        </p>
      </Section>

      <Section id="deletion" title="12. Deleting your account and data">
        <p>
          You can ask us to delete your AfyaQuest account and the personal data associated with it
          at any time. Full step-by-step instructions, including what is deleted and what is
          retained, are on the{' '}
          <Link to="/data-safety#delete" className="text-brand-teal font-semibold underline underline-offset-2 hover:text-brand-teal-dark transition-colors">
            account and data deletion
          </Link>{' '}
          section of our Data Safety page.
        </p>
        <Callout title="Quick version">
          <p>
            Email <Mail subject="AfyaQuest account deletion request" /> from your account email address
            with the subject <em>"Account deletion request"</em>. We confirm within 7 days and
            complete deletion within 30 days.
          </p>
        </Callout>
      </Section>

      <Section id="permissions" title="13. Android permissions we request">
        <List>
          <Item>
            <strong className="text-brand-teal-dark">Internet and network state</strong> — to sync your work and load
            content, and to detect when you are offline so work can be queued.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Precise and approximate location</strong> — optional. Used only while
            the map screen is open, to show your live position beside your assigned stops. Not
            uploaded. Decline it and the rest of the app works normally.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Notifications</strong> — optional. Used for reminders about daily
            questions and assignments. You can turn these off in Android settings.
          </Item>
        </List>
        <p>
          The app also queries which text-to-speech engine your device uses, so the Emergency
          Response Guide can be read aloud. It does not access the microphone.
        </p>
      </Section>

      <Section id="children" title="14. Children">
        <p>
          AfyaQuest is a workforce tool intended for adult Community Health Workers and their
          supervisors. It is not directed to children, and we do not knowingly collect personal
          information from anyone under 18. If you believe a child has created an account, contact{' '}
          <Mail subject="AfyaQuest — account created by a minor" /> and we will delete it.
        </p>
      </Section>

      <Section id="transfers" title="15. International data transfers">
        <p>
          Our servers and databases are hosted on Amazon Web Services in the Africa (Cape Town)
          region, <code className="text-[14px] bg-brand-teal/10 text-brand-teal-dark px-1.5 py-0.5 rounded">af-south-1</code>.
          If you use the app from another country, your information will be transferred to and
          processed there. Where a transfer leaves your jurisdiction, we rely on appropriate
          safeguards such as standard contractual clauses with our providers.
        </p>
      </Section>

      <Section id="changes" title="16. Changes to this policy">
        <p>
          We may update this policy as the app changes. When we do, we will revise the "Last
          updated" date at the top of this page. If the change materially affects how we handle
          your personal information, we will give notice in the app or by email before it takes
          effect. Continuing to use AfyaQuest after a change means you accept the updated policy.
        </p>
      </Section>

      <Section id="contact" title="17. Contact us">
        <p>
          Questions, requests, or complaints about privacy at AfyaQuest go to{' '}
          <Mail subject="AfyaQuest privacy enquiry" />. We aim to reply within 7 days and to resolve
          formal requests within 30 days.
        </p>
        <p className="text-sm text-gray-500">
          If your programme is administered by a hospital, NGO, or ministry, you may also contact
          that organisation's data-protection contact directly.
        </p>
      </Section>
    </LegalLayout>
  );
}

export default Privacy;
