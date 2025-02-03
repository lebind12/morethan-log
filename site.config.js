const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Woolee",
    image: "/avatar.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Backend developer / Software Engineer",
    bio: "Python, Javascript, AWS",
    email: "lebind12@naver.com",
    linkedin: "이우진",
    github: "lebind12",
    instagram: "",
  },
  projects: [
    {
      name: `scoreboard`,
      href: "https://scoreboard-project.vercel.app/",
    },
    {
      name: `nurungji-web`,
      href: "https://nurungji.vercel.app/",
    },
    {
      name: `kopflix`,
      href: "https://kopflix.vercel.app/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Woolee's Blog",
    description: "Generalist",
  },

  // CONFIG configration (required)
  link: "https://woolee.vercel.app/",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["blog", "woolee"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
