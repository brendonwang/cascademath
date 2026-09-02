export type TeamProfileInput = {
  name: string;
  title: string;
  bio: string;
  initials?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type TeamProfile = {
  name: string;
  title: string;
  bio: string;
  initials: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const teamIntro =
  "";

// Edit team bios here. To add a portrait, place it in public/assets/team and set imageSrc
// to a path such as "/assets/team/laura-wang.jpg". imageAlt is optional.
export const teamProfiles: TeamProfileInput[] = [
  {
    name: "Laura Wang",
    title: "Co-President · Founding Member",
    bio: "Laura is a rising junior at Lakeside School and the founder of Cascade Math. She has enjoyed math since she was five and is a two-time MOP participant, MATHCOUNTS Nationals semifinalist, JMO Honors recipient, and Math Prize for Girls Olympiad gold medalist. She also enjoys ice skating and drawing.",
  },
  {
    name: "Eric Shao",
    title: "Co-President · Founding Member",
    bio: "Eric Shao is a founder of Cascade Math and a junior at Mercer Island High School. He has qualified for AIME four times and received a USAJMO honorable mention in 2025. In 2026, he earned a USAMO silver medal and qualified for MOP. He also enjoys running, debate, and trading card games.",
  },
  {
    name: "Eason Deng",
    title: "Founding Member",
    bio: "Eason is a rising sophomore at Lakeside High School. He has qualified for AIME three times, earned USAJMO Honors in 2026, and competes at SMT, BMT, and HMMT. He also plays competitive tennis and violin and spends time with his sister.",
  },
  {
    name: "Shuyin Liu",
    title: "Founding Member",
    bio: "Shuyin is a rising sophomore at Newport High School. She tied for sixth at Math Prize for Girls, earned a silver medal at the Math Prize for Girls Olympiad, and qualified for USAJMO. She also enjoys badminton, crocheting, and spending time with her cats.",
  },
  {
    name: "Stephen Cui",
    title: "Founding Member",
    bio: "Stephen is a rising freshman at Interlake High School. He has qualified for AIME twice and earned honorable mentions in USAJMO and the Canadian Math Olympiad in 2026. He also enjoys playing violin, reading, and golfing in the summer.",
  },
  {
    name: "Brendon Wang",
    title: "Tech Director · Founding Member",
    bio: "Brendon is a founder of Cascade Math and a sophomore at Lakeside School. He has qualified for AIME three times and finished fourth at BAMO in 2026. He also enjoys competitive programming and is currently competing in the USACO Platinum division. In his free time, you can find him playing tennis, ultimate frisbee, and reading.",
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
