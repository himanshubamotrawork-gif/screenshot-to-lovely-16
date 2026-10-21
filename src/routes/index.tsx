import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MousePointerClick,
  ListChecks,
  Gift,
  Star,
  StarHalf,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

// Wingstop-branded reward landing page. Layout mirrors the reference page
// (logo card → hero → how it works → rating → CTA → FAQ); branding is Wingstop.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$500 Wingstop Gift Card" },
      {
        name: "description",
        content:
          "Claim a $500 Wingstop gift card. Complete the required deals to unlock your reward.",
      },
      { property: "og:title", content: "$500 Wingstop Gift Card" },
      {
        property: "og:description",
        content:
          "Claim a $500 Wingstop gift card. Complete the required deals to unlock your reward.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const CLAIM_URL = "https://giftclick.org/aff_c?offer_id=1541&aff_id=17763";

const STEPS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: MousePointerClick,
    title: "Click the Button Below",
    description: "Start by clicking the claim button to begin.",
  },
  {
    icon: ListChecks,
    title: "Complete Required Offers",
    description: "Finish the required deals to unlock your reward.",
  },
  {
    icon: Gift,
    title: "Claim your $500 Wingstop Gift Card",
    description: "Once completed, claim your Wingstop gift card reward.",
  },
];

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Does it only work for students?",
    answer:
      "No, it's available worldwide — anyone, anywhere can claim this offer.",
  },
  {
    question: "How long does it take to receive my gift card?",
    answer:
      "Most people finish the required deals within a few days. Once your completion is verified, your reward is processed shortly after.",
  },
  {
    question: "What kind of tasks do I need to complete?",
    answer:
      "You'll complete the required deal from start to finish — a short set of offers from our partner brands, usually free trials or sign-ups.",
  },
  {
    question: "Can I claim the reward multiple times?",
    answer:
      "No, the $500 Wingstop gift card reward is limited to one per person.",
  },
];

function ClaimButton() {
  return (
    <a
      href={CLAIM_URL}
      rel="nofollow noopener"
      className="block w-full rounded-lg bg-primary px-6 py-3.5 text-center text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90"
    >
      Claim Now
    </a>
  );
}

function StepCard({
  icon: Icon,
  title,
  description,
}: (typeof STEPS)[number]) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
        <Icon className="size-5 text-primary" strokeWidth={2.25} />
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          Step {STEPS.findIndex((s) => s.title === title) + 1}
        </p>
        <h3 className="mt-0.5 text-base font-bold text-foreground">{title}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: (typeof FAQS)[number] & { open: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-xl border border-border bg-card shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-base font-bold text-foreground">{question}</span>
        <ChevronDown
          className={`size-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-muted-foreground">{answer}</div>
      )}
    </div>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto w-full max-w-lg px-4 py-10">
        {/* Logo card */}
        <div className="flex justify-center">
          <div className="flex size-[125px] items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
            <span className="font-brand text-2xl tracking-wide text-primary">
              WINGSTOP
            </span>
          </div>
        </div>

        {/* Hero */}
        <h1 className="mt-8 text-center text-3xl font-bold text-foreground">
          $500 Wingstop Gift Card
        </h1>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Discover famous wings, crispy tenders, fries and 11 signature flavors
          made for every craving.
        </p>
        <div className="mt-6">
          <ClaimButton />
        </div>

        {/* How it works */}
        <h2 className="mt-12 text-center text-2xl font-bold text-foreground">
          How It Works
        </h2>
        <div className="mt-6 space-y-4">
          {STEPS.map((step) => (
            <StepCard key={step.title} {...step} />
          ))}
        </div>

        {/* Qualification note */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          To qualify for your Wingstop gift card, complete the required deal
          from start to finish to unlock the full $500 reward. Once
          successfully completed, you'll be eligible to claim your reward.
        </p>

        {/* Rating */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3].map((i) => (
              <Star
                key={i}
                className="size-6 fill-trustpilot text-trustpilot"
              />
            ))}
            <StarHalf className="size-6 fill-trustpilot text-trustpilot" />
          </div>
          <p className="flex items-center gap-1.5 text-base text-foreground">
            <span className="font-bold">4.5 / 5</span>
            <span className="text-muted-foreground">on</span>
            <Star className="size-4 fill-trustpilot text-trustpilot" />
            <span className="font-bold">Trustpilot</span>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ClaimButton />
        </div>

        {/* FAQ */}
        <h2 className="mt-12 text-center text-2xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-3">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.question}
              {...faq}
              open={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? null : i)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
