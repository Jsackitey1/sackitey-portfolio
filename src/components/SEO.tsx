import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOProps } from '../types';

const defaultSEO = {
  title: "Joseph Sackitey - Software Engineer & Physics Student",
  description: "Joseph Sackitey is a computer science and physics student at Gettysburg College, passionate about building innovative solutions, contributing to open-source projects, and sustainability initiatives.",
  keywords: "Joseph Sackitey, Software Engineer, React Developer, TypeScript, Open Source, Gettysburg College, Computer Science, Physics, Sustainability, Web Development",
  image: "/assets/og-image.png",
  url: "https://jsackitey.dev",
  type: "website"
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type
}) => {
  const seo = {
    title: title ? `${title} | Joseph Sackitey` : defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    url: url || defaultSEO.url,
    type: type || defaultSEO.type
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content="Joseph Sackitey" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content="Joseph Sackitey Portfolio" />
      <meta property="og:site_name" content="Joseph Sackitey Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content="@sackitey_j" />
      <meta name="twitter:site" content="@sackitey_j" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#00ff88" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Joseph Sackitey",
          "url": seo.url,
          "image": seo.image,
          "jobTitle": "Software Engineer",
          "worksFor": {
            "@type": "Organization",
            "name": "Gettysburg College"
          },
          "alumniOf": {
            "@type": "Organization",
            "name": "Gettysburg College"
          },
          "sameAs": [
            "https://github.com/Jsackitey1",
            "https://linkedin.com/in/joseph-sackitey",
            "https://twitter.com/sackitey_j",
            "https://instagram.com/sackitey._j"
          ],
          "knowsAbout": [
            "JavaScript",
            "TypeScript",
            "React",
            "Python",
            "Java",
            "Web Development",
            "Software Engineering",
            "Physics",
            "Sustainability"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;