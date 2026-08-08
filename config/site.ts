export const siteConfig = {
  name: "Pristine English School",
  shortName: "Pristine English School",
  tagline: "Miraj",
  description:
    "Pristine English School, Miraj — Maharashtra State Board education from Playgroup to 12th Science, nurturing confident, compassionate, and future-ready learners.",
  url: "https://www.pristineenglishschool.in", // TODO: confirm final production domain

  location: {
    addressLine1: "NH-166, Miraj-Kolhapur Highway,",
    addressLine2: "Beside Gosavi Mala,",
    city: "Miraj",
    pincode: "416410",
    full: "NH-166, Miraj-Kolhapur Highway, Beside Gosavi Mala, Miraj 416410",
  },

  contact: {
    phones: ["9421182990", "9421182999", "7388887715"],
    admissionEmail: "pesmmiraj@gmail.com",
    contactEmail: "pristineimiraj@gmail.com",
  },

  academics: {
    board: "Maharashtra State Board",
    classRange: "Playgroup to 12th Science",
  },

  principal: {
    name: "Mrs. Anjum J. Jamadar",
    quote:
      "Education is not just about preparing for life, it is about empowering students to shape it.",
  },

  mission:
    "To nurture confident, compassionate, and future ready learners through innovative education, technology integrated learning, and value-based experiences that inspire curiosity, creativity, critical thinking and lifelong success.",

  vision:
    "To be a leading centre of excellence in education, empowering every child to become an ethical leader, global citizen, innovator and problem solver.",

  // TODO: add real social links once provided by client
  socials: {
    facebook: "",
    instagram: "",
    youtube: "",
  },
} as const;