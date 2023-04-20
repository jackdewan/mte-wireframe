const SITE_URL = "";

export const Config = {
  site: {
    owner: "Mountaintop Extracts",
    ownerShort: "MTE",
    title: "Mountaintop Extracts",
    domain: "",
    email: "",
    feedDescription: "",
  },
  pageMeta: {
    openGraph: {
      twitterUser: "mte",
    },
    home: {
      url: SITE_URL,
      slug: "/",
    },
    blogIndex: {
      url: `${SITE_URL}/blog`,
      slug: "/blog",
    },
    blogIndexPage: {
      slug: "/blog/page/[page]",
    },
    post: {
      slug: "/blog/[slug]",
    },
    buildRss: {
      url: `${SITE_URL}/buildrss`,
      slug: "/buildrss",
    },
    notFound: {
      url: SITE_URL,
      slug: "/404",
    },
  },
  pagination: {
    pageSize: 2,
    recentPostsSize: 3,
  },
  menuLinks: [
    {
      displayName: "Products",
      path: "/",
      subItems: [
        {
          displayName: "Vape",
        },
        {
          displayName: "Gummies",
        },
        {
          displayName: "Concentrate",
        },
        {
          displayName: "Diamonds",
        },
      ],
    },
    {
      displayName: "Company",
      path: "/",
      subItems: [
        {
          displayName: "About Us",
        },
        {
          displayName: "Story",
        },
        {
          displayName: "Locations",
        },
      ],
    },
    {
      displayName: "Learn",
      path: "/",
      subItems: [
        {
          displayName: "Education",
        },
        {
          displayName: "Learn Cannabis",
        },
        {
          displayName: "Knowledge",
        },
      ],
    },
    {
      displayName: "Merch",
      path: "/",
      subItems: [],
    },
  ],
  menuLinksRight: [
    {
      displayName: "Find Us",
      path: "/",
      subItems: [],
    },
    {
      displayName: "Merch",
      path: "/",
      subItems: [],
    },
  ],
  footerLinks: [
    {
      displayName: "Privacy Policy",
      path: "/",
      subItems: [],
    },
    {
      displayName: "Terms and Conditions",
      path: "/",
      subItems: [],
    },
    {
      displayName: "Compliance",
      path: "/",
      subItems: [],
    },
    {
      displayName: "Contact",
      path: "/",
      subItems: [],
    },
  ],
};
