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
  volunteers: "We welcome volunteers and sponsors",
  prizes: "Prizes and trophies",
  skillLevels: "Middle schoolers at any skill level",
};

export const contactEmail = "cascademathcm@gmail.com";

export const missionCards = [
  {
    title: "Curiosity",
    description: "Take on hard problems and ask questions.",
    icon: Lightbulb,
  },
  {
    title: "Persistence",
    description: "Try an idea, adjust it, and keep going.",
    icon: Flag,
  },
  {
    title: "Community",
    description:
      "Meet other students, families, teachers, and volunteers from around Seattle.",
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
    description: "Solve problems where a good idea matters more than speed.",
    icon: Puzzle,
  },
  {
    title: "Team round",
    description:
      "Work on problems together in teams of four.",
    icon: Rocket,
  },
  {
    title: "Festivals",
    description:
      "Come explore the variety of activities we've planned for after the contest.",
    icon: UsersRound,
  },
  {
    title: "Awards",
    description:
      "We’ll have prizes and trophies for a range of skill levels.",
    icon: PartyPopper,
  },
];

export const faqItems = [
  {
    question: "Who can come?",
    answer:
      "All middle schoolers at any level can come.",
  },
  {
    question: "Do I need to register?",
    answer:
      "Yes. It costs $10 per participant.",
  },
  {
    question: "When will the venue and schedule be posted?",
    answer:
      "We’re still working on both. We’ll post them here and email everyone on the list when they’re ready.",
  },
  {
    question: "Will there be prizes?",
    answer:
      "Yes. We’ll have prizes and trophies for a range of skill levels.",
  },
];

export const values = [
  {
    title: "Inclusion",
    description:
      "Everyone should feel welcome and able to take part.",
    icon: HeartHandshake,
  },
  {
    title: "Curiosity",
    description:
      "We ask questions and stay open to new ideas.",
    icon: Star,
  },
  {
    title: "Collaboration",
    description:
      "We learn by sharing ideas and working together.",
    icon: UsersRound,
  },
  {
    title: "Integrity",
    description:
      "We’re honest about our work and follow through on what we say.",
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
