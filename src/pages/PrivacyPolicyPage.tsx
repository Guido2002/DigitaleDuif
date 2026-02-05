import React from "react";
import SectionHeader from "@/components/SectionHeader";

const LAST_UPDATED_ISO = "2026-02-05";
const CONTACT_EMAIL = "digitaleduif@outlook.com";

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <h1 className="sr-only">Privacy Policy — Football Dancer</h1>

      <section className="relative pt-16 md:pt-20 pb-12">
        <div className="container px-4 md:px-6">
          <SectionHeader
            title="Privacy Policy — Football Dancer (Mixed Reality)"
            subtitle={`Last updated: ${LAST_UPDATED_ISO}`}
            align="center"
          />

          <article className="mx-auto max-w-3xl space-y-10">
            <section aria-labelledby="privacy-overview" className="space-y-3">
              <h2 id="privacy-overview" className="text-2xl font-black text-foreground">
                1) Overview
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Football Dancer is a Mixed Reality app for Meta Quest where you can trigger dance
                animations on a virtual football avatar. This Privacy Policy explains what
                information the app processes, collects, and stores when you use it.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Developer/Publisher: Guido van Duijvenvoorde
                <br />
                Contact: {" "}
                <a
                  className="text-primary underline-offset-4 hover:underline"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </section>

            <section aria-labelledby="privacy-data" className="space-y-3">
              <h2 id="privacy-data" className="text-2xl font-black text-foreground">
                2) What data we process, collect, or store (VRC.Quest.Privacy.2)
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Football Dancer is designed to work offline and does not collect personal data.
              </p>

              <div className="space-y-2 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  <span className="font-semibold text-foreground">Personal information:</span> We do
                  not collect or store personal information such as your name, email address, phone
                  number, or profile details.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Account identifiers:</span> We do
                  not collect or store identifiers such as your Meta user ID.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Location data:</span> We do not
                  collect or store location data.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Audio / video:</span> We do not
                  record, store, or transmit audio or video.
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    Analytics / crash reporting:
                  </span>{" "}
                  We do not use analytics or third-party crash reporting tools.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Networking:</span> The app does
                  not require an internet connection for normal use.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-foreground">On-device processing</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  The app processes your inputs (for example, controller/hand interactions and
                  button selections) to trigger avatar animations. This processing happens locally
                  on your headset.
                </p>
              </div>
            </section>

            <section aria-labelledby="privacy-mr" className="space-y-3">
              <h2 id="privacy-mr" className="text-2xl font-black text-foreground">
                3) Mixed Reality / Passthrough (OpenXR)
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Football Dancer uses the headset’s passthrough capability to display your physical
                environment behind virtual content.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Passthrough is handled by the headset runtime (OpenXR composition layers).
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We do not access, record, store, or transmit passthrough camera imagery.
              </p>
            </section>

            <section aria-labelledby="privacy-sharing" className="space-y-3">
              <h2 id="privacy-sharing" className="text-2xl font-black text-foreground">
                4) Sharing
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We do not sell your data. Because we do not collect personal data, we do not share
                personal data with third parties.
              </p>
            </section>

            <section aria-labelledby="privacy-retention" className="space-y-3">
              <h2 id="privacy-retention" className="text-2xl font-black text-foreground">
                5) Data retention
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We do not store personal data. Any app settings (if applicable) are stored locally
                on your device.
              </p>
            </section>

            <section aria-labelledby="privacy-choices" className="space-y-3">
              <h2 id="privacy-choices" className="text-2xl font-black text-foreground">
                6) Your choices and deletion requests
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                You can remove the app from your headset to remove its locally stored data
                (including any app settings).
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                If you have questions about this policy, contact us at {" "}
                <a
                  className="text-primary underline-offset-4 hover:underline"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="privacy-changes" className="space-y-3">
              <h2 id="privacy-changes" className="text-2xl font-black text-foreground">
                7) Changes to this policy
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                If the app changes (for example: adding analytics, online features, accounts, or
                cloud features), we will update this page and the “Last updated” date.
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
