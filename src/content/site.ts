import {
  CalendarDays,
  DollarSign,
  Flag,
  HeartHandshake,
  Lightbulb,
  Mail,
  MapPin,
  PartyPopper,
  Puzzle,
  Rocket,
  ShieldCheck,
  Star,
  Trophy,
  UsersRound,
} from "lucide-react";

export { teamIntro, teamProfiles, teamSlots } from "./team";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Math Fest", href: "/cmf" },
  { label: "Sponsors", href: "/sponsors" },
];

export const eventInfo = {
  title: "2026 Cascade Math Fest",
  date: "Saturday, September 19, 2026",
  venue: "Venue TBA",
  schedule: "Contests, puzzles, and workshops",
  registration: "$10 per participant",
  cost: "$10 registration fee",
  volunteers: "Volunteers and sponsors are welcome",
  prizes: "Prizes and trophies",
  skillLevels: "Every skill level",
};

export const contactEmail = "cascademathcm@gmail.com";

export const missionCards = [
  {
    title: "Ask good questions",
    description: "Spend time on problems that make you curious.",
    icon: Lightbulb,
  },
  {
    title: "Try another idea",
    description: "If one approach doesn’t work, try a different one.",
    icon: Flag,
  },
  {
    title: "Meet people who like math",
    description:
      "Get to know students, families, teachers, and volunteers from around Seattle.",
    icon: HeartHandshake,
  },
];

export const eventDetails = [
  { title: "Date", value: eventInfo.date, icon: CalendarDays },
  { title: "Registration fee", value: eventInfo.cost, icon: DollarSign },
  { title: "Venue", value: eventInfo.venue, icon: MapPin },
  { title: "Schedule", value: eventInfo.schedule, icon: CalendarDays },
  { title: "Prizes", value: eventInfo.prizes, icon: Trophy },
];

export const expectationCards = [
  {
    title: "Creative contest",
    description: "Solve problems where a clever idea can matter more than speed.",
    icon: Puzzle,
  },
  {
    title: "Team round",
    description:
      "Talk through problems, compare ideas, and solve them together.",
    icon: Rocket,
  },
  {
    title: "Puzzles, games, and workshops",
    description:
      "Stop by for puzzles, games, and hands-on workshops throughout the day.",
    icon: UsersRound,
  },
  {
    title: "Awards and celebration",
    description:
      "We’ll give out prizes and trophies across a range of skill levels.",
    icon: PartyPopper,
  },
];

export const faqItems = [
  {
    question: "Who can come?",
    answer:
      "Students at any level can come. Families, teachers, and anyone else who enjoys math are welcome too.",
  },
  {
    question: "Do I need to register?",
    answer:
      "Yes. Registration costs $10 per participant. If the fee would make it hard to attend, email us.",
  },
  {
    question: "When will the venue and schedule be posted?",
    answer:
      "We’re still working on both. We’ll post them here and email our list when they’re ready.",
  },
  {
    question: "Will there be prizes?",
    answer:
      "Yes. We’ll have prizes and trophies for a range of skill levels.",
  },
  {
    question: "Can I volunteer?",
    answer:
      `Yes. Email ${contactEmail} if you’d like to help at the event or mentor students.`,
  },
  {
    question: "Can my organization support the event?",
    answer:
      `Yes. Sponsors help cover the venue, food, materials, awards, and registration costs for students who need support. Email ${contactEmail} if you’re interested.`,
  },
];

export const values = [
  {
    title: "Everyone belongs",
    description:
      "Make it easy for people to feel welcome and take part.",
    icon: HeartHandshake,
  },
  {
    title: "Stay curious",
    description:
      "Ask questions and see where they lead.",
    icon: Star,
  },
  {
    title: "Work together",
    description:
      "Share ideas and learn from how other people think.",
    icon: UsersRound,
  },
  {
    title: "Be dependable",
    description:
      "Be honest, thoughtful, and do what you say.",
    icon: ShieldCheck,
  },
];

export type Sponsor = {
  name: string;
  tier: "platinum" | "gold" | "bronze";
  website?: string;
};

export const sponsors: Sponsor[] = [
  { name: "HRT", tier: "platinum", website: "https://www.hudsonrivertrading.com/" },
  { name: "Jane Street", tier: "gold", website: "https://www.janestreet.com/" },
  { name: "AoPS", tier: "bronze", website: "https://artofproblemsolving.com/" },
];

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Math Fest", href: "/cmf" },
  { label: "Sponsors", href: "/sponsors" },
];

export const contactPlaceholders = [
  { label: contactEmail, href: `mailto:${contactEmail}`, icon: Mail },
];
