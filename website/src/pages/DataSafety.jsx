import React from 'react';
import { Link } from 'react-router-dom';
import {
  LegalLayout,
  Section,
  SubHeading,
  List,
  Item,
  Callout,
  Table,
  Row,
  Mail,
} from '../components/LegalLayout';

const sections = [
  { id: 'summary', label: 'Summary' },
  { id: 'collected', label: 'Data the app collects' },
  { id: 'not-collected', label: 'Data the app does not collect' },
  { id: 'on-device-only', label: 'Data that never leaves your device' },
  { id: 'sharing', label: 'Data sharing' },
  { id: 'security', label: 'Security practices' },
  { id: 'delete', label: 'Delete your account and data' },
  { id: 'permissions', label: 'Permissions' },
  { id: 'contact', label: 'Questions' },
];

const YES = <span className="font-semibold text-brand-teal-dark">Yes</span>;
const NO = <span className="font-semibold text-gray-400">No</span>;
const REQUIRED = <span className="text-gray-600">Required</span>;
const OPTIONAL = <span className="text-brand-gold-dark font-medium">Optional</span>;

function DataSafety() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Data Safety"
      intro="A plain-language disclosure of every category of data the AfyaQuest Android app collects, why it is collected, whether it is shared, and how to have it deleted. This page mirrors the Data safety information we declare on Google Play."
      updated="August 25, 2026"
      docTitle="AfyaQuest — Data Safety"
      sections={sections}
    >
      <Section id="summary" title="Summary">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            ['Data is encrypted in transit', 'All traffic uses HTTPS/TLS. Cleartext is blocked.'],
            ['You can request data deletion', 'Requests are completed within 30 days.'],
            ['No data is sold or shared with advertisers', 'There are no ad SDKs in the app.'],
            ['No third-party analytics or crash SDKs', 'The app collects no diagnostics.'],
          ].map(([title, body]) => (
            <div key={title} className="rounded-xl border border-brand-teal/15 bg-brand-teal/[0.05] p-5">
              <p className="font-display font-semibold text-brand-teal-dark leading-snug mb-1">{title}</p>
              <p className="text-[15px] text-gray-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <p>
          This page is a companion to our full{' '}
          <Link to="/privacy" className="text-brand-teal font-semibold underline underline-offset-2 hover:text-brand-teal-dark transition-colors">
            Privacy Policy
          </Link>, which explains your rights, our legal bases, and retention periods in detail.
        </p>
      </Section>

      <Section id="collected" title="Data the app collects">
        <p>
          "Collected" means the data leaves your device and reaches our servers. Everything below is
          stored in our AWS environment in the Africa (Cape Town) region.
        </p>

        <SubHeading>Personal information</SubHeading>
        <Table head={['Data type', 'Collected', 'Shared', 'Required?', 'Purpose']}>
          <Row cells={['Name', YES, NO, REQUIRED, 'Account creation; identifying you to your supervisor']} />
          <Row cells={['Email address', YES, NO, REQUIRED, 'Account creation, sign-in, verification, password reset']} />
          <Row cells={['Password', YES, NO, REQUIRED, 'Authentication. Handled by Amazon Cognito; never visible to us']} />
          <Row cells={['Phone number', YES, NO, OPTIONAL, 'Contact details on your profile']} />
          <Row cells={['Organisation / employer', YES, NO, OPTIONAL, 'Linking you to your health programme']} />
          <Row cells={['Profile photo', YES, NO, OPTIONAL, 'Displaying your profile in the app and dashboard']} />
        </Table>

        <SubHeading>App activity and work records</SubHeading>
        <Table head={['Data type', 'Collected', 'Shared', 'Required?', 'Purpose']}>
          <Row cells={['Lesson and video progress', YES, NO, REQUIRED, 'Tracking training completion']} />
          <Row cells={['Quiz and daily-question answers and scores', YES, NO, REQUIRED, 'Scoring, points, levels, streaks, achievements']} />
          <Row cells={['Clock-in / clock-out timestamps', YES, NO, REQUIRED, 'Shift tracking for your supervisor']} />
          <Row cells={['Daily field reports (patients visited, vaccinations given, health-education topics, challenges, notes)', YES, NO, REQUIRED, 'Programme reporting to your supervising organisation']} />
          <Row cells={['Visit status on assigned households', YES, NO, REQUIRED, 'Showing your supervisor which stops are complete']} />
        </Table>

        <SubHeading>Messages</SubHeading>
        <Table head={['Data type', 'Collected', 'Shared', 'Required?', 'Purpose']}>
          <Row cells={[
            'Messages you send to the in-app AI assistant, and its replies',
            YES,
            YES,
            OPTIONAL,
            'Generating a reply and keeping your conversation history. Processed by a Claude model hosted on Amazon Bedrock inside our AWS account',
          ]} />
        </Table>

        <Callout tone="gold" title="Keep patients out of free-text fields">
          <p>
            Report notes and assistant messages are stored on our servers. Do not type a patient's
            full name, national ID, or contact details into them — describe cases in general terms
            using the identifiers your programme has approved.
          </p>
        </Callout>
      </Section>

      <Section id="not-collected" title="Data the app does not collect">
        <List>
          <Item>No advertising ID, and no advertising or marketing profiles.</Item>
          <Item>No third-party analytics, attribution, or behavioural-tracking SDKs.</Item>
          <Item>No crash logs or diagnostics sent to us or to any third party.</Item>
          <Item>No contacts, calendar, SMS, or call logs.</Item>
          <Item>No microphone recordings and no photo-library scanning.</Item>
          <Item>No background location. The app has no background-location permission.</Item>
          <Item>No financial or payment information. AfyaQuest has no purchases.</Item>
        </List>
      </Section>

      <Section id="on-device-only" title="Data that never leaves your device">
        <p>
          Under Google Play's definitions this is <strong className="text-brand-teal-dark">not "collected"</strong>,
          because it is processed on your device and never transmitted. We list it anyway so you
          know what the app touches.
        </p>
        <Table head={['Data type', 'Why the app uses it', 'Leaves the device?']}>
          <Row cells={[
            'Precise location (GPS)',
            'Draws your live "you are here" marker on the map beside your assigned stops, while the map screen is open',
            NO,
          ]} />
          <Row cells={[
            'Handwriting strokes',
            'Converted to text by an on-device Google ML Kit model when you use handwriting input',
            NO,
          ]} />
          <Row cells={[
            'Emergency triage case logs',
            'Records assessments made in the Emergency Response Guide, stored in the local database only',
            NO,
          ]} />
          <Row cells={[
            'Downloaded lessons and videos',
            'Cached so training works without connectivity',
            NO,
          ]} />
        </Table>
        <p>
          Uninstalling the app removes all of the above. It does not remove data already
          synchronised to our servers — use the{' '}
          <a href="#delete" className="text-brand-teal font-semibold underline underline-offset-2">deletion process</a>{' '}
          for that.
        </p>
      </Section>

      <Section id="sharing" title="Data sharing">
        <p>
          <strong className="text-brand-teal-dark">We do not sell your data, and we do not share it with advertisers or
          data brokers.</strong> Data reaches only the following parties:
        </p>
        <Table head={['Recipient', 'What they receive', 'Why']}>
          <Row cells={[
            'Your supervising organisation',
            'Your profile, training progress, clock-in records, assigned itinerary, and submitted reports',
            'They run the health programme you work in and are a controller of your field data',
          ]} />
          <Row cells={[
            'Amazon Web Services',
            'All server-side data — identity (Amazon Cognito), API, databases, media storage, and the hosted AI model (Amazon Bedrock)',
            'AWS operates our infrastructure under contract and processes data only on our instructions',
          ]} />
          <Row cells={[
            'Google (Maps SDK, ML Kit)',
            'Device and usage data sent by the Maps SDK when the map screen is open; a model download request when handwriting input is first used',
            'Rendering the map and providing on-device handwriting recognition. Governed by Google\'s Privacy Policy',
          ]} />
          <Row cells={[
            'Legal authorities',
            'Only what a valid legal request compels, or what is needed to protect users\' safety',
            'Legal compliance',
          ]} />
        </Table>
        <p className="text-[15px] text-gray-600">
          The AI assistant row in the table above is marked "Shared" because your message is
          processed by Amazon Bedrock. Amazon does not use Bedrock inputs or outputs to train
          models, and the model provider does not receive your data.
        </p>
      </Section>

      <Section id="security" title="Security practices">
        <List>
          <Item>
            <strong className="text-brand-teal-dark">Encrypted in transit.</strong> Every request between the app and our
            servers uses HTTPS/TLS. The app is configured to refuse cleartext traffic entirely.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Encrypted at rest.</strong> Server-side databases and media storage
            use AWS-managed encryption at rest.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Credentials never touch our code.</strong> Passwords are handled by
            Amazon Cognito. We cannot read them, and the app does not store them on your device.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Tokens in secure device storage.</strong> Session tokens live in
            Android's encrypted storage, backed by the device keystore, and are refreshed and
            revoked automatically.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Least-privilege access.</strong> Supervisors see only the CHWs assigned
            to them, and production access is limited to staff who need it to operate the service.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Hardened release builds.</strong> Release builds are code-shrunk and
            obfuscated, and API keys are kept out of source control.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">You can request deletion.</strong> See the section below.
          </Item>
        </List>
      </Section>

      <Section id="delete" title="Delete your account and data">
        <p>
          You can ask us to delete your AfyaQuest account and the personal data associated with it
          at any time, whether or not you still have the app installed.
        </p>

        <SubHeading>How to request deletion</SubHeading>
        <div className="rounded-xl border border-brand-teal/25 bg-brand-teal/[0.07] p-5 sm:p-6">
          <ol className="flex flex-col gap-3 text-[16px] leading-relaxed text-gray-700">
            {[
              <>
                Email <Mail subject="Account deletion request" /> from the email address on your
                AfyaQuest account.
              </>,
              <>
                Use the subject line <strong className="text-brand-teal-dark">"Account deletion request"</strong>.
              </>,
              <>
                Include the name on your account so we can locate it. Do not include your password —
                we will never ask for it.
              </>,
              <>
                We reply to confirm the request within <strong className="text-brand-teal-dark">7 days</strong> and
                complete the deletion within <strong className="text-brand-teal-dark">30 days</strong>.
              </>,
            ].map((step, i) => (
              <li key={i} className="flex gap-3.5">
                <span className="flex-shrink-0 mt-0.5 h-6 w-6 rounded-full bg-brand-teal text-white text-[13px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <a
            href={`mailto:afyaquest@gmail.com?subject=${encodeURIComponent('Account deletion request')}&body=${encodeURIComponent(
              'I would like my AfyaQuest account and associated personal data deleted.\n\nName on account:\nAccount email:\n'
            )}`}
            className="mt-6 inline-flex items-center gap-2 bg-brand-teal-dark text-white px-6 py-3 rounded-full font-semibold text-[15px] hover:bg-brand-teal transition-colors shadow-sm hover:shadow-md"
          >
            Request account deletion
          </a>
        </div>

        <SubHeading>What gets deleted</SubHeading>
        <List>
          <Item>Your account and sign-in credentials, including your Amazon Cognito identity.</Item>
          <Item>Your profile: name, email, phone number, organisation, language, and photo.</Item>
          <Item>Your training records: lesson and video progress, quiz answers, scores, points, level, rank, streak, and achievements.</Item>
          <Item>Your conversation history with the AI assistant.</Item>
          <Item>Your clock-in and clock-out records.</Item>
        </List>

        <SubHeading>What may be retained, and why</SubHeading>
        <List>
          <Item>
            <strong className="text-brand-teal-dark">Field reports and visit records</strong> may be retained by your
            supervising organisation as part of their programme records, in de-identified form
            wherever possible. These belong to that organisation, so ask them directly if you want
            them removed.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Aggregate statistics</strong> that cannot identify you — for example
            total lessons completed across a district — are retained.
          </Item>
          <Item>
            <strong className="text-brand-teal-dark">Records we are legally required to keep</strong> are retained for the
            required period and then deleted.
          </Item>
        </List>

        <Callout title="Removing on-device data">
          <p>
            To clear everything AfyaQuest stores locally without contacting us, go to{' '}
            <strong className="text-brand-teal-dark">Android Settings → Apps → AfyaQuest → Storage → Clear storage</strong>,
            or uninstall the app. This removes the local database, cached lessons and videos,
            triage case logs, and your session tokens. It does not delete server-side data.
          </p>
        </Callout>
      </Section>

      <Section id="permissions" title="Permissions">
        <Table head={['Permission', 'Required?', 'What it is used for']}>
          <Row cells={['Internet, network state', REQUIRED, 'Syncing your work and loading content; detecting when you are offline so work can be queued']} />
          <Row cells={['Precise / approximate location', OPTIONAL, 'Showing your live position on the map screen. Never uploaded. Decline it and the rest of the app works normally']} />
          <Row cells={['Notifications', OPTIONAL, 'Reminders about daily questions and assignments. Can be turned off in Android settings']} />
        </Table>
        <p className="text-[15px] text-gray-600">
          The app also checks which text-to-speech engine your device uses so the Emergency Response
          Guide can be read aloud. It does not access the microphone.
        </p>
      </Section>

      <Section id="contact" title="Questions">
        <p>
          Email <Mail subject="AfyaQuest data safety enquiry" /> with any question about this
          disclosure. For the full detail on your rights, retention periods, and international
          transfers, see the{' '}
          <Link to="/privacy" className="text-brand-teal font-semibold underline underline-offset-2 hover:text-brand-teal-dark transition-colors">
            Privacy Policy
          </Link>.
        </p>
      </Section>
    </LegalLayout>
  );
}

export default DataSafety;
