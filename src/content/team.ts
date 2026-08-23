export type TeamProfileInput = {
  name: string;
  bio: string;
  initials?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type TeamProfile = {
  name: string;
  bio: string;
  initials: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const teamIntro =
  "Our team includes students from schools across the Seattle area.";

// Edit team bios here. To add a portrait, place it in public/assets/team and set imageSrc
// to a path such as "/assets/team/laura-wang.jpg". imageAlt is optional.
export const teamProfiles: TeamProfileInput[] = [
  {
    name: "Laura Wang",
    bio: "Laura is a rising junior at Lakeside School and founded Cascade Math. She has enjoyed math since she was five and is a two-time MOP participant, MATHCOUNTS Nationals semifinalist, JMO Honors recipient, and Math Prize for Girls Olympiad gold medalist. Outside math, she enjoys ice skating and drawing.",
  },
  {
    name: "Eric Shao",
    bio: "Eric is a rising junior at Mercer Island High School. He has qualified for AIME four times, earned a USAJMO honorable mention in 2025, and received a USAMO silver medal and qualified for MOP in 2026. He also enjoys running, debate, and trading card games.",
  },
  {
    name: "Eason Deng",
    bio: "Eason is a rising sophomore at Lakeside High School. He has qualified for AIME three times, earned USAJMO Honors in 2026, and competes at SMT, BMT, and HMMT. Outside math, he plays competitive tennis and violin and spends time with his sister.",
  },
  {
    name: "Shuyin Liu",
    bio: "Shuyin is a rising sophomore at Newport High School. She tied for sixth at Math Prize for Girls, earned a silver medal at the Math Prize for Girls Olympiad, and qualified for USAJMO. Outside math, she enjoys badminton, crocheting, and time with her cats.",
  },
  {
    name: "Stephen Cui",
    bio: "Stephen is a rising freshman at Interlake High School. He has qualified for AIME twice and earned honorable mentions at USAJMO and the Canadian Math Olympiad in 2026. Away from math, he enjoys violin, reading, and playing golf in the summer.",
  },
  {
    name: "Brendon Wang",
    bio: "Brendon is a rising sophomore at Lakeside High School. He has qualified for AIME three times and placed fourth at BAMO in 2026. Outside math, he enjoys competitive programming, tennis, ultimate frisbee, and reading.",
  },
]; 

function getInitials(name: string) {
  const words = name.trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) {
    return "CM";
  }

  const first = words[0][0] ?? "";
  const second = words.length > 1 ? words[words.length - 1][0] : words[0][1] ?? "";

  return `${first}${second}`.toUpperCase();
}

export const teamSlots: TeamProfile[] = teamProfiles.map((profile) => ({
  ...profile,
  initials: profile.initials ?? getInitials(profile.name),
}));
