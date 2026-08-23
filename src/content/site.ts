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
  { label: "CMF", href: "/cmf" },
  { label: "Sponsors", href: "/sponsors" },
];

export const eventInfo = {
  title: "2026 Cascade Math Fest",
  date: "Saturday, September 19, 2026",
  venue: "Venue TBA",
  schedule: "A full day of contests, puzzles, and workshops",
  registration: "$10 per participant",
  cost: "$10 registration fee",
  volunteers: "Volunteers and sponsors are welcome",
  prizes: "Lots of prizes and trophies",
  skillLevels: "Every skill level has a chance to win",
};

export const contactEmail = "cascademathcm@gmail.com";

export const missionCards = [
  {
    title: "Inspire curiosity",
    description:
      "Make room for good questions and problems that are worth thinking about.",
    icon: Lightbulb,
  },
  {
    title: "Build confidence",
    description:
      "Give students room to try an idea, change direction, and leave feeling more confident.",
    icon: Flag,
  },
  {
    title: "Find your people",
    description:
      "Bring together students, families, educators, and volunteers who enjoy math too.",
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
    description:
      "Work on problems where a surprising idea matters as much as speed.",
    icon: Puzzle,
  },
  {
    title: "Team round",
    description:
      "Solve challenges together, compare approaches, and see what you can build as a group.",
    icon: Rocket,
  },
  {
    title: "Puzzles, games, and workshops",
    description:
      "Drop into puzzle stations, games, and workshop-style activities throughout the day.",
    icon: UsersRound,
  },
  {
    title: "Awards and celebration",
    description:
      "We’ll have lots of prizes and trophies, with ways for students at every level to be recognized.",
    icon: PartyPopper,
  },
];

export const faqItems = [
  {
    question: "Who can attend Cascade Math Fest?",
    answer:
      "Students of all skill levels are welcome, along with families, teachers, and anyone who enjoys a good problem.",
  },
  {
    question: "Is registration required?",
    answer:
      "Yes. Registration is $10 per participant. We’ll post the form and full schedule here when they’re ready.",
  },
  {
    question: "What is the registration fee?",
    answer:
      "Registration costs $10 per participant. If the fee would keep someone from attending, email us—we want the event to be accessible.",
  },
  {
    question: "Will there be prizes?",
    answer:
      "Yes. We’re planning lots of prizes and trophies, and students at every skill level will have a chance to win.",
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
      "Everyone should have a fair, comfortable way to take part.",
    icon: HeartHandshake,
  },
  {
    title: "Curiosity",
    description:
      "Questions are worth following, especially when the answer is not obvious yet.",
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
      "We try to be thoughtful, honest, and dependable in our work.",
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
  { label: "CMF", href: "/cmf" },
  { label: "Sponsors", href: "/sponsors" },
];

export const contactPlaceholders = [
  { label: contactEmail, href: `mailto:${contactEmail}`, icon: Mail },
];
