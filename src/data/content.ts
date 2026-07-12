export interface PricingRow {
  format: "Online" | "Offline";
  mode: string;
  price: string;
  unit: string;
  sessionInfo: string;
}

export interface Program {
  id: string;
  eyebrow: string;
  name: string;
  tagline: string;
  description: string;
  bestFor: string;
  pricing: PricingRow[];
  note?: string;
}

export const programs: Program[] = [
  {
    id: "standard",
    eyebrow: "3 months per level",
    name: "Standard Level Course",
    tagline: "Your structured path, from zero to fluent",
    description:
      "A full curriculum built for people with little to no prior Vietnamese. Billed monthly, so you're never locked into more than you need.",
    bestFor: "First-time learners who want steady, real progress — not a crash course.",
    pricing: [
      { format: "Online", mode: "Private (1-on-1)", price: "$20", unit: "/ hour", sessionInfo: "2 sessions/week · 1 hour each" },
      { format: "Online", mode: "Group (max 10)", price: "$15", unit: "/ 1.5 hours", sessionInfo: "Thu & Sat · 5:30–7:00pm (GMT+7)" },
      { format: "Offline", mode: "Private (1-on-1)", price: "$30", unit: "/ hour", sessionInfo: "2 sessions/week · 1.5 hours each" },
      { format: "Offline", mode: "Group (max 10)", price: "$22.5", unit: "/ 1.5 hours", sessionInfo: "Thu & Sat · 7:30–9:00pm (GMT+7)" },
    ],
  },
  {
    id: "bootcamp",
    eyebrow: "1-week intensive",
    name: "Fast-Track Bootcamp",
    tagline: "Break through a plateau in one focused week",
    description:
      "Built for learners who already have some Vietnamese and need a structured review, a reset on core pronunciation, or a curriculum customized to real-life situations you're actually facing.",
    bestFor: "Learners with existing experience who need fast, targeted correction.",
    pricing: [
      { format: "Online", mode: "Private (1-on-1)", price: "$30", unit: "/ hour", sessionInfo: "3 sessions across the week" },
      { format: "Offline", mode: "Private (1-on-1)", price: "$45", unit: "/ hour", sessionInfo: "3 sessions across the week" },
    ],
  },
  {
    id: "immersion",
    eyebrow: "Full day, 8 hours",
    name: "Immersion Day Trip",
    tagline: "Take it off the page and into the street",
    description:
      "A full day of real-world speaking practice: breakfast and lunch immersion, market exploration and bargaining, a coffee shop stop, and Vietnamese karaoke — vocabulary learned on the go and used immediately with locals and Vietnamese friends.",
    bestFor: "Anyone who wants to actually use the language, not just study it.",
    pricing: [
      { format: "Offline", mode: "Private", price: "$90", unit: "/ person", sessionInfo: "1 day · 8 hours" },
      { format: "Offline", mode: "Group", price: "$60", unit: "/ person", sessionInfo: "1 day · 8 hours" },
    ],
    note: "Bring a friend and the price drops — most people enjoy this one more together anyway.",
  },
];

export const valueProps = [
  {
    title: "Taught by someone obsessed with this, not just teaching it",
    body: "Trân isn't running through a generic script — she's genuinely fascinated by how Vietnamese works, and that shows up as real energy and attention in every single lesson, not a rehearsed routine.",
  },
  {
    title: "A method built to make you sound native, not just understood",
    body: "Most courses stop at 'good enough.' This one trains your mouth and ear the way a native speaker's were trained — mastering all 6 tones from day one — so you come across as fluent, not just passable.",
  },
  {
    title: "Small groups, real attention",
    body: "Capped at 10 people per group, so you're never just a face in the crowd — the price reflects real 1-on-1 correction, not a lecture hall.",
  },
];

export const outcomes = [
  {
    title: "Say it right the first time",
    body: "Master all 6 Vietnamese tones through music, consonants, rhyme, vowels, and more — by learning to control your mouth, lips, and tongue with precision, so you're understood the first time, not the third.",
  },
  {
    title: "Build vocabulary that sticks",
    body: "Core vocabulary trained through pronunciation drills and everyday topics, so words stay attached to sounds you can actually reproduce.",
  },
  {
    title: "Train your ear",
    body: "Sharpen your listening for the tone and rhythm differences native speakers rely on without thinking twice about them.",
  },
  {
    title: "Hold a real conversation",
    body: "Handle everyday situations on your own — family, shopping, ordering food — without freezing or falling back to English.",
  },
];

export const roadmap =
  "From Level 2 onward: full listening, speaking, reading, and writing development, deeper grammar and vocabulary, Vietnamese culture, and regional dialects and slang.";

export const faqs = [
  {
    q: "I've never studied a tonal language before — is this realistic for me?",
    a: "Yes. Level 1 is built specifically for people starting from zero, and the first weeks are dedicated entirely to training your mouth and ear for tones before anything else is layered on top.",
  },
  {
    q: "What's the difference between the Standard Course, the Bootcamp, and the Immersion Day?",
    a: "Standard is your structured path if you're starting fresh or continuing level by level. Bootcamp is a one-week intensive reset for learners who already have some Vietnamese. Immersion Day is real-world speaking practice — a supplement to either, not a replacement.",
  },
  {
    q: "Is the first lesson really free?",
    a: "Yes — every program includes a free introductory session (for Immersion Day, this is a short planning call) so you know exactly what you're signing up for before paying anything.",
  },
  {
    q: "What if I need to miss a class?",
    a: "Let us know in advance. One make-up session per month is available for illness or other unavoidable circumstances.",
  },
  {
    q: "How much practice do I need to do outside class?",
    a: "Aim for at least 3 hours a day around Vietnamese — audio, reading, conversation, whatever fits your life — and come to each class with homework done. Group classes also stay capped at 10 people, so you're never just a face in the crowd. That combination is what actually turns a class into fluency.",
  },
  {
    q: "Do you teach children or teens?",
    a: "Group classes are open to learners 18 and up. For children or teens, contact us directly to arrange a schedule.",
  },
  {
    q: "What happens after I finish Level 1?",
    a: roadmap,
  },
];

export const activePromo = {
  code: "VIET30",
  percent: 30,
};

export const contact = {
  email: "39trantu@gmail.com",
  whatsapp: "+84 944451122",
  instagram: "https://www.instagram.com/funny.vietnamese/",
  instagramHandle: "@funny.vietnamese",
};

export const vietnameseLevels = [
  "Total beginner",
  "I know a few words and phrases",
  "I can have basic conversations",
  "Intermediate or beyond",
];

export const programInterest = ["Standard Level Course", "Fast-Track Bootcamp", "Immersion Day Trip", "Not sure yet"];
