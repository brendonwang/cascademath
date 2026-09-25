export type Cmf26Photo = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Cmf26PhotoSection = {
  title: string;
  photos: Cmf26Photo[];
};

export const cmf26PhotoSections: Cmf26PhotoSection[] = [
  {
    title: "Opening and rounds",
    photos: [
      { src: "/assets/cmf26/01.webp", alt: "Check-in starts", caption: "Check-in starts", width: 2000, height: 1333 },
      { src: "/assets/cmf26/02.webp", alt: "Cascade MathFest 2026!", caption: "Cascade MathFest 2026!", width: 2000, height: 1333 },
      { src: "/assets/cmf26/03.webp", alt: "Opening Ceremony", caption: "Opening Ceremony", width: 2000, height: 1333 },
      { src: "/assets/cmf26/04.webp", alt: "Students and parents at the opening ceremony", caption: "Students and parents at the opening ceremony", width: 2000, height: 1333 },
      { src: "/assets/cmf26/05.webp", alt: "Our sponsors", caption: "Our sponsors", width: 2000, height: 1333 },
      { src: "/assets/cmf26/06.webp", alt: "Kellogg Middle School team sign", caption: "Kellogg Middle School team sign", width: 2000, height: 1333 },
      { src: "/assets/cmf26/07.webp", alt: "Individual round", caption: "Individual round", width: 2000, height: 1333 },
      { src: "/assets/cmf26/08.webp", alt: "Passing out tests", caption: "Passing out tests", width: 2000, height: 1333 },
      { src: "/assets/cmf26/09.webp", alt: "A tough looking proctor", caption: "A tough looking proctor", width: 2000, height: 1333 },
      { src: "/assets/cmf26/10.webp", alt: "The youngest competitor! (3rd grade)", caption: "The youngest competitor! (3rd grade)", width: 2000, height: 1333 },
      { src: "/assets/cmf26/11.webp", alt: "Competitors at work", caption: "Competitors at work", width: 2000, height: 1333 },
      { src: "/assets/cmf26/12.webp", alt: "Competitors at work", caption: "Competitors at work", width: 2000, height: 1333 },
      { src: "/assets/cmf26/13.webp", alt: "Competitors at work", caption: "Competitors at work", width: 2000, height: 1333 },
      { src: "/assets/cmf26/14.webp", alt: "Competitors at work", caption: "Competitors at work", width: 2000, height: 1333 },
      { src: "/assets/cmf26/15.webp", alt: "Graders in grading room", caption: "Graders in grading room", width: 2000, height: 1333 },
      { src: "/assets/cmf26/16.webp", alt: "Unpacking prizes", caption: "Unpacking prizes", width: 2000, height: 1333 },
      { src: "/assets/cmf26/17.webp", alt: "Team round", caption: "Team round", width: 2000, height: 1333 },
      { src: "/assets/cmf26/18.webp", alt: "Graders at work", caption: "Graders at work", width: 2000, height: 1333 },
      { src: "/assets/cmf26/19.webp", alt: "Lunch time!", caption: "Lunch time!", width: 2000, height: 1333 },
      { src: "/assets/cmf26/20.webp", alt: "Lots of pizza", caption: "Lots of pizza", width: 2000, height: 1333 },
    ],
  },
  {
    title: "Puzzles and activities",
    photos: [
      { src: "/assets/cmf26/21.webp", alt: "Festival starts!", caption: "Festival starts!", width: 2000, height: 1333 },
      { src: "/assets/cmf26/22.webp", alt: "Puzzle hunt rules", caption: "Puzzle hunt rules", width: 2000, height: 1333 },
      { src: "/assets/cmf26/23.webp", alt: "Puzzle hunt starts!", caption: "Puzzle hunt starts!", width: 2000, height: 1333 },
      { src: "/assets/cmf26/24.webp", alt: "Tower of prizes", caption: "Tower of prizes", width: 1333, height: 2000 },
      { src: "/assets/cmf26/25.webp", alt: "Competitors working on puzzle round", caption: "Competitors working on puzzle round", width: 2000, height: 1333 },
      { src: "/assets/cmf26/26.webp", alt: "Another tower of prizes", caption: "Another tower of prizes", width: 2000, height: 1334 },
      { src: "/assets/cmf26/27.webp", alt: "Estimathon", caption: "Estimathon", width: 2000, height: 1333 },
      { src: "/assets/cmf26/28.webp", alt: "Prime Factorization Countdown round", caption: "Prime Factorization Countdown round", width: 2000, height: 1333 },
      { src: "/assets/cmf26/29.webp", alt: "Taking apart and reassembling prizes", caption: "Taking apart and reassembling prizes", width: 2000, height: 1333 },
      { src: "/assets/cmf26/30.webp", alt: "Volunteers joining events too", caption: "Volunteers joining events too", width: 2000, height: 1333 },
      { src: "/assets/cmf26/31.webp", alt: "Estimathon rules", caption: "Estimathon rules", width: 2000, height: 1333 },
      { src: "/assets/cmf26/32.webp", alt: "Working on Sudokus", caption: "Working on Sudokus", width: 2000, height: 1333 },
      { src: "/assets/cmf26/33.webp", alt: "Teamwork on puzzles", caption: "Teamwork on puzzles", width: 2000, height: 1333 },
      { src: "/assets/cmf26/34.webp", alt: "Checking puzzle answers", caption: "Checking puzzle answers", width: 1333, height: 2000 },
      { src: "/assets/cmf26/41.webp", alt: "Lots of prizes won at Sudoku", caption: "Lots of prizes won at Sudoku", width: 2000, height: 1333 },
      { src: "/assets/cmf26/42.webp", alt: "Duodoku", caption: "Duodoku", width: 1333, height: 2000 },
      { src: "/assets/cmf26/43.webp", alt: "A young pianist", caption: "A young pianist", width: 2000, height: 1333 },
      { src: "/assets/cmf26/44.webp", alt: "Twins with lots of prizes", caption: "Twins with lots of prizes", width: 2000, height: 1333 },
      { src: "/assets/cmf26/45.webp", alt: "Can you guess the answer?", caption: "Can you guess the answer?", width: 2000, height: 1333 },
      { src: "/assets/cmf26/46.webp", alt: "Scaning barcodes to get points", caption: "Scaning barcodes to get points", width: 2000, height: 1333 },
      { src: "/assets/cmf26/47.webp", alt: "KenKens", caption: "KenKens", width: 1333, height: 2000 },
      { src: "/assets/cmf26/48.webp", alt: "Hard puzzles in the puzzle hunt", caption: "Hard puzzles in the puzzle hunt", width: 2000, height: 1333 },
      { src: "/assets/cmf26/49.webp", alt: "Working together on puzzle hunts", caption: "Working together on puzzle hunts", width: 2000, height: 1333 },
      { src: "/assets/cmf26/50.webp", alt: "Chaning the colors of prizes", caption: "Chaning the colors of prizes", width: 2000, height: 1333 },
      { src: "/assets/cmf26/51.webp", alt: "Very close activity leaderboard", caption: "Very close activity leaderboard", width: 2000, height: 1333 },
      { src: "/assets/cmf26/52.webp", alt: "Contestants checking the live leaderboard", caption: "Contestants checking the live leaderboard", width: 2000, height: 1333 },
      { src: "/assets/cmf26/53.webp", alt: "Volunteers checking puzzle hunt", caption: "Volunteers checking puzzle hunt", width: 1333, height: 2000 },
    ],
  },
  {
    title: "Countdown and awards",
    photos: [
      { src: "/assets/cmf26/54.webp", alt: "Trophies, medals and more towers of prizes", caption: "Trophies, medals and more towers of prizes", width: 2000, height: 1500 },
      { src: "/assets/cmf26/55.webp", alt: "Team Countdown Round!", caption: "Team Countdown Round!", width: 2000, height: 1500 },
      { src: "/assets/cmf26/56.webp", alt: "Teams competeing in Countdown Round", caption: "Teams competeing in Countdown Round", width: 2000, height: 1333 },
      { src: "/assets/cmf26/57.webp", alt: "More Countdown Round", caption: "More Countdown Round", width: 2000, height: 1333 },
      { src: "/assets/cmf26/58.webp", alt: "Testing buzzers", caption: "Testing buzzers", width: 2000, height: 1333 },
      { src: "/assets/cmf26/59.webp", alt: "Next question", caption: "Next question", width: 1333, height: 2000 },
      { src: "/assets/cmf26/60.webp", alt: "Winners!", caption: "Winners!", width: 2000, height: 1333 },
      { src: "/assets/cmf26/71.webp", alt: "A winning team", caption: "A winning team", width: 2000, height: 1333 },
      { src: "/assets/cmf26/72.webp", alt: "Another winning team", caption: "Another winning team", width: 1333, height: 2000 },
      { src: "/assets/cmf26/73.webp", alt: "Another winning team", caption: "Another winning team", width: 2000, height: 1333 },
      { src: "/assets/cmf26/74.webp", alt: "Semi-final round!", caption: "Semi-final round!", width: 2000, height: 1333 },
      { src: "/assets/cmf26/75.webp", alt: "The answer is correct", caption: "The answer is correct", width: 1333, height: 2000 },
      { src: "/assets/cmf26/76.webp", alt: "Another winning team", caption: "Another winning team", width: 2000, height: 1333 },
      { src: "/assets/cmf26/77.webp", alt: "3rd place team", caption: "3rd place team", width: 2000, height: 1333 },
      { src: "/assets/cmf26/78.webp", alt: "2nd place team", caption: "2nd place team", width: 1333, height: 2000 },
      { src: "/assets/cmf26/79.webp", alt: "Award ceremony starts!", caption: "Award ceremony starts!", width: 2000, height: 1333 },
      { src: "/assets/cmf26/80.webp", alt: "The festival winner!", caption: "The festival winner!", width: 2000, height: 1333 },
      { src: "/assets/cmf26/81.webp", alt: "Individual top 30% in 6th grade", caption: "Individual top 30% in 6th grade", width: 2000, height: 1333 },
      { src: "/assets/cmf26/82.webp", alt: "Handing out medals", caption: "Handing out medals", width: 2000, height: 1333 },
      { src: "/assets/cmf26/83.webp", alt: "The youngest winner!", caption: "The youngest winner!", width: 2000, height: 1333 },
      { src: "/assets/cmf26/84.webp", alt: "6th grade top winners!", caption: "6th grade top winners!", width: 2000, height: 1333 },
      { src: "/assets/cmf26/85.webp", alt: "7th grade top winners!", caption: "7th grade top winners!", width: 2000, height: 1333 },
      { src: "/assets/cmf26/86.webp", alt: "More medals", caption: "More medals", width: 2000, height: 1333 },
      { src: "/assets/cmf26/87.webp", alt: "8th grade top winners!", caption: "8th grade top winners!", width: 1333, height: 2000 },
      { src: "/assets/cmf26/88.webp", alt: "Awesome volunteers!", caption: "Awesome volunteers!", width: 2000, height: 1333 },
      { src: "/assets/cmf26/89.webp", alt: "Cascade Math Team!", caption: "Cascade Math Team!", width: 2000, height: 1333 },
    ],
  },
  {
    title: "Festival flyers",
    photos: [
      { src: "/assets/cmf26/90.webp", alt: "Flyer 1", caption: "Flyer 1", width: 1414, height: 2000 },
      { src: "/assets/cmf26/91.webp", alt: "Flyer 2", caption: "Flyer 2", width: 1414, height: 2000 },
      { src: "/assets/cmf26/92.webp", alt: "Flyer 3", caption: "Flyer 3", width: 1414, height: 2000 },
    ],
  },
];

export const cmf26Photos = cmf26PhotoSections.flatMap(({ photos }) => photos);
