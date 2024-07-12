import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: "lucifer0x17's portfolio",
    description: 'know more about me here or in-person',
    image: 'https://pbs.twimg.com/profile_images/1601110727753809920/FQG27GCc_400x400.jpg',
    url: 'https://lucifer0x17.dev',
    keywords: 'Backend Specialist, MERN Developer, TypeScript Developer, Node.js Developer, Serverless Framework, GraphQL API Development, AWS Lambda Specialist, CI/CD Implementation, Web3 Community Building, Blockchain Developer, API Responsiveness Optimization, Authentication, Web 3, Smart Contract, Lua, AO The Computer, Arweave, Founder, 0rbit, Oracle, orbit'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="canonical" href={meta.url} />

        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lucifer0x17" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:creator" content="@lucifer0x17" />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "url": meta.url,
            "name": "lucifer",
            "description": meta.description,
            "image": meta.image,
            "sameAs": [
              "https://twitter.com/lucifer0x17",
              "https://github.com/lucifer0x17"
            ]
          })}
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
