export default function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://vision-texas.com/#business",
    name: "Vision Integrated Systems",
    image: "https://vision-texas.com/logos/vision-logo.png",
    telephone: "832-535-1991",
    email: "info@vision-texas.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "32311 Tamina Rd, Suite A",
      addressLocality: "Magnolia",
      addressRegion: "TX",
      postalCode: "77354",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.2095,
      longitude: -95.7508,
    },
    url: "https://vision-texas.com/",
    sameAs: [
      "https://www.linkedin.com/company/vishouston/",
      "https://www.facebook.com/profile.php?id=61571604035898",
      "https://www.instagram.com/vis_houston",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 29.7604,
        longitude: -95.3698,
      },
      geoRadius: "100 mi",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Integration Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Audio & Video Integration",
            description:
              "Design and installation of conference rooms, huddle spaces, video walls, and digital signage systems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Structured Cabling",
            description:
              "Cat6A copper and fiber optic cabling infrastructure, server room cleanups, and certified installations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Security & Access Control",
            description:
              "IP video surveillance, access control, and intrusion detection systems with unified management dashboards.",
          },
        },
      ],
    },
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vision-texas.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://vision-texas.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Gallery",
        item: "https://vision-texas.com/gallery",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://vision-texas.com/contact-us",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
    </>
  );
}
