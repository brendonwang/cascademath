export type TeamProfileInput = {
  name: string;
  bio: string;
  initials?: string;
};

export type TeamProfile = {
  name: string;
  bio: string;
  initials: string;
};

export const teamIntro =
  "Cascade Math is led by students who care about building a stronger local math community.";

// Edit team bios here. Initials are optional and auto-generated from the name when omitted.
export const teamProfiles: TeamProfileInput[] = [
  {
    name: "Laura Wang",
    bio: "Laura is a rising junior at Lakeside School and is the founder of Cascade Math. She started enjoying math when she was five. Since then, she has been a two time mopʹer, MATHCOUNTS Nationals semifinalist, JMO Honors winner and gold medalist in Math Prize for Girls Olympiads. When she's not doing math she also enjoys ice skating and drawing.",
  },
  {
    name: "Eric Shao",
    bio: "Eric is a rising junior at Mercer Island High School. He has qualified for the AIME 4x, gotten a USAJMO honorable mention in 2025, and won a USAMO Silver and qualified for MOP in 2026. In his free time, he enjoys running, debating both casually and competitively, and playing various trading card games.",
  },
  {
    name: "Eason Deng",
    bio: "Eason is a rising sophomore at Lakeside High School. He has qualified for AIME 3 times and gotten USAJMO Honors in 2026. He also actively participates in many high school math competitions, including SMT, BMT, and HMMT. Outside of math, he enjoys playing tennis competitively and violin, as well as hanging out with his sister.",
  },
  {
    name: "Shuyin Liu",
    bio: "Shuyin is a rising sophomore from Newport High School. She has tied for 6th place at Math Prize for Girls, received a silver medal on the Math Prize for Girls Olympiad, and qualified for USAJMO. Outside of math, she enjoys playing badminton, crocheting, and spending time with her cats.",
  },
  {
    name: "Stephen Cui",
    bio: "Stephen is a rising freshman going to Interlake High School. He has qualified for AIME twice, and gotten an honourable mention on USAJMO and Canadian Math Olympiad in 2026. When not grinding math problems, he enjoys playing the violin, reading, and golfing in the summer.",
  },
  {
    name: "Brendon Wang",
    bio: "Brendon is a rising sophomore at Lakeside High School. He has qualified for AIME 3 times and placed 4th at BAMO in 2026. Outside of math, Brendon enjoys competitive programming, tennis, ultimate frisbee, and reading.",
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
