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
    title: "Follow the question",
    description: "Spend time on problems worth thinking about.",
    icon: Lightbulb,
  },
  {
    title: "Try another way",
    description: "Test an idea, change direction, and keep going.",
    icon: Flag,
  },
  {
    title: "Find your people",
    description:
      "Meet students, families, educators, and volunteers who enjoy math too.",
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
    description: "Work on problems where a surprising idea matters as much as speed.",
    icon: Puzzle,
  },
  {
    title: "Team round",
    description:
      "Solve together, compare approaches, and build on each other’s ideas.",
    icon: Rocket,
  },
  {
    title: "Puzzles, games, and workshops",
    description:
      "Drop into puzzle stations, games, and workshops throughout the day.",
    icon: UsersRound,
  },
  {
    title: "Awards and celebration",
    description:
      "Prizes and trophies will recognize students across every level.",
    icon: PartyPopper,
  },
];

export const faqItems = [
  {
    question: "Who can attend Cascade Math Fest?",
    answer:
      "Students at every level are welcome. Families, teachers, and other math fans can come too.",
  },
  {
    question: "Is registration required?",
    answer:
      "Yes. Registration is $10 per participant. We’ll post the form and schedule here when they’re ready.",
  },
  {
    question: "What is the registration fee?",
    answer:
      "It’s $10 per participant. If cost would keep someone from coming, email us.",
  },
  {
    question: "Will there be prizes?",
    answer:
      "Yes. We’ll have prizes and trophies for students across every level.",
  },
  {
    question: "How can I volunteer?",
    answer:
      `Volunteers, mentors, and event helpers are welcome. Email ${contactEmail} if you’d like to help.`,
  },
  {
    question: "How can we support Cascade Math Fest?",
    answer:
      `Sponsors and partners can help with student access, materials, awards, food, venue, and operations. Email ${contactEmail} if you’re interested.`,
  },
];

export const values = [
  {
    title: "Inclusion",
    description:
      "Everyone should have a fair, comfortable way to join in.",
    icon: HeartHandshake,
  },
  {
    title: "Curiosity",
    description:
      "The best questions are worth following.",
    icon: Star,
  },
  {
    title: "Collaboration",
    description:
      "Good ideas get better when people share them.",
    icon: UsersRound,
  },
  {
    title: "Integrity",
    description:
      "Be thoughtful, honest, and dependable.",
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
