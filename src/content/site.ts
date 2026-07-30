import {
  CalendarDays,
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
  schedule: "Schedule coming soon",
  registration: "Registration coming soon",
  cost: "Free to attend",
  volunteers: "Volunteers and sponsors welcome",
  primaryCta: "Get event updates",
  secondaryCta: "About CMF",
};

export const contactEmail = "cascademathcm@gmail.com";

export const missionCards = [
  {
    title: "Inspire Curiosity",
    description:
      "Make room for curiosity with hands-on, creative experiences that feel worth showing up for.",
    icon: Lightbulb,
  },
  {
    title: "Build Confidence",
    description:
      "Give students room to think carefully, try things out, and find their own way in.",
    icon: Flag,
  },
  {
    title: "Strengthen Community",
    description:
      "Bring students, families, educators, and volunteers together around a shared interest in math.",
    icon: HeartHandshake,
  },
];

export const eventDetails = [
  { title: "Venue", value: eventInfo.venue, icon: MapPin },
  { title: "Schedule", value: eventInfo.schedule, icon: CalendarDays },
  { title: "Registration", value: eventInfo.registration, icon: UsersRound },
  { title: "Cost", value: eventInfo.cost, icon: HeartHandshake },
];

export const expectationCards = [
  {
    title: "Creative Contest",
    description:
      "Spend time with problems that reward insight, persistence, and a good idea from an unexpected direction.",
    icon: Puzzle,
  },
  {
    title: "Team Round",
    description:
      "Work together on challenges that leave room for discussion, disagreement, and shared discovery.",
    icon: Rocket,
  },
  {
    title: "Puzzles, Games, and Workshops",
    description:
      "Explore puzzle stations, math games, hands-on activities, and workshop-style sessions.",
    icon: UsersRound,
  },
  {
    title: "Awards and Celebration",
    description:
      "End the day by recognizing strong problem solving, creative thinking, and community spirit.",
    icon: PartyPopper,
  },
];

export const faqItems = [
  {
    question: "Who can attend Cascade Math Fest?",
    answer:
      "CMF is planned for students and families. Final eligibility details will be shared before registration opens.",
  },
  {
    question: "Is registration required?",
    answer:
      "Registration details are coming soon. Email us to hear when registration opens.",
  },
  {
    question: "Will there be a cost to attend?",
    answer:
      "CMF is planned as a free event for students and families.",
  },
  {
    question: "How can I volunteer?",
    answer:
      `Volunteers, mentors, and event helpers are welcome. Email ${contactEmail} if you would like to help.`,
  },
  {
    question: "How can we support Cascade Math Fest?",
    answer:
      `Sponsors and partners can help with student access, materials, awards, food, venue, and operations. Email ${contactEmail} with sponsorship interest.`,
  },
];

export const values = [
  {
    title: "Inclusion",
    description:
      "We welcome everyone and create equitable opportunities to participate and grow.",
    icon: HeartHandshake,
  },
  {
    title: "Curiosity",
    description:
      "We encourage questions, exploration, and a love of learning.",
    icon: Star,
  },
  {
    title: "Collaboration",
    description:
      "We believe great things happen when we work together.",
    icon: UsersRound,
  },
  {
    title: "Integrity",
    description:
      "We act with respect, transparency, and care in all we do.",
    icon: ShieldCheck,
  },
];

export type Sponsor = {
  name: string;
  website?: string;
};

// Add confirmed sponsors here. They will appear on the public Sponsors page.
export const sponsors: Sponsor[] = [];

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "CMF", href: "/cmf" },
  { label: "Sponsors", href: "/sponsors" },
];

export const contactPlaceholders = [
  { label: contactEmail, href: `mailto:${contactEmail}`, icon: Mail },
];
