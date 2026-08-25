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
  schedule: "Contests, puzzles, and other events",
  registration: "$10 per participant",
  cost: "$10 per student",
  volunteers: "We welcome volunteers and sponsors",
  prizes: "Trophies, medals, and mystery prizes",
  skillLevels: "Middle schoolers at any skill level",
};

export const contactEmail = "cascademathcm@gmail.com";

export const missionCards = [
  {
    title: "Curiosity",
    description: "Asking questions that lead to more hard problems and discoveries.",
    icon: Lightbulb,
  },
  {
    title: "Persistence",
    description: "Trying countless ideas on a problem and not giving up out of frustration.",
    icon: Flag,
  },
  {
    title: "Community",
    description:
      "Gathering students in the Seattle area who share a love for math and creating a community they are all comfortable in.",
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
    title: "Activities",
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
      "All middle schoolers at any level can come. Fifth graders are welcome as well and will compete in the sixth grade division.",
  },
  {
    question: "Do I need to register?",
    answer:
      "Yes. It costs $10 per participant.",
  },
  {
    question: "When will the venue and schedule be posted?",
    answer:
      "They are still being finalized right now. We’ll post them here and give updates to everyone on our email list later.",
  },
  {
    question: "Will there be prizes?",
    answer:
      "Yes. We’ll have trophies and medals for a range of skill levels. We will also have prizes for event winners.",
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
