"""Inject SEO meta tags & JSON-LD into all niche pages."""
import os, re

BASE_URL = "https://niveshaistudio.netlify.app/niches"

NICHES = {
    "ai-tools.html": {
        "title": "AI-Powered Tools & Automation Websites | Nivesh AI Solutions",
        "desc": "Get a stunning AI tools or automation product website built by Nivesh AI. Convert visitors into users with high-converting SaaS & AI product landing pages.",
        "keywords": "AI tool website design, automation product landing page, SaaS AI website, AI product web design India, Nivesh AI",
        "h1_label": "AI-Powered Tools",
        "service_name": "AI Tools & Automation Web Design",
    },
    "directory.html": {
        "title": "Directory & Listing Website Design | Nivesh AI Solutions",
        "desc": "Professional directory and listing websites built by Nivesh AI. We design fast, searchable, mobile-first directory platforms for any niche.",
        "keywords": "directory website design, listing website India, business directory web design, Nivesh AI",
        "h1_label": "Directory Websites",
        "service_name": "Directory & Listing Web Design",
    },
    "ecommerce.html": {
        "title": "E-commerce Website Design India | Nivesh AI Solutions",
        "desc": "High-converting e-commerce websites built by Nivesh AI. From product pages to checkout flows, we design online stores that sell 24/7.",
        "keywords": "ecommerce website design India, online store design, Shopify alternative India, ecommerce web development, Nivesh AI",
        "h1_label": "E-commerce Stores",
        "service_name": "E-commerce Website Design",
    },
    "education.html": {
        "title": "Education & Online Course Website Design | Nivesh AI Solutions",
        "desc": "Grow your student base with a premium education website by Nivesh AI. We build course portals, coaching websites and edtech platforms.",
        "keywords": "education website design, online course website India, coaching institute website, edtech web design, Nivesh AI",
        "h1_label": "Education",
        "service_name": "Education & Course Website Design",
    },
    "finance.html": {
        "title": "Finance & Investment Website Design | Nivesh AI Solutions",
        "desc": "Premium finance and investment websites by Nivesh AI. Build trust with clients through authoritative, professional financial services web design.",
        "keywords": "finance website design India, investment firm website, financial advisor website, fintech web design, Nivesh AI",
        "h1_label": "Finance & Investing",
        "service_name": "Finance & Investment Web Design",
    },
    "fitness.html": {
        "title": "Fitness & Wellness Website Design | Nivesh AI Solutions",
        "desc": "Attract more gym members and coaching clients with a stunning fitness website by Nivesh AI. We build gyms, yoga studios, and personal trainer sites.",
        "keywords": "fitness website design India, gym website design, yoga studio website, personal trainer website, wellness web design, Nivesh AI",
        "h1_label": "Fitness & Wellness",
        "service_name": "Fitness & Wellness Website Design",
    },
    "healthcare.html": {
        "title": "Healthcare & Medical Website Design | Nivesh AI Solutions",
        "desc": "Professional healthcare websites by Nivesh AI. We build clinic websites, hospital portals and medical practice sites that earn patient trust.",
        "keywords": "healthcare website design India, clinic website, hospital website, doctor website design, medical web design, Nivesh AI",
        "h1_label": "Healthcare",
        "service_name": "Healthcare & Medical Website Design",
    },
    "job-boards.html": {
        "title": "Job Board & Recruitment Website Design | Nivesh AI Solutions",
        "desc": "Launch your own job board or recruitment platform with Nivesh AI. We build fast, searchable job portals with employer and candidate dashboards.",
        "keywords": "job board website design, recruitment website India, hiring platform design, job portal web design, Nivesh AI",
        "h1_label": "Job Boards",
        "service_name": "Job Board & Recruitment Web Design",
    },
    "legal.html": {
        "title": "Legal & Law Firm Website Design | Nivesh AI Solutions",
        "desc": "Professional law firm and legal service websites by Nivesh AI. Build credibility and attract high-value clients with authoritative legal web design.",
        "keywords": "law firm website design India, legal website design, attorney website, advocate website, legal web design, Nivesh AI",
        "h1_label": "Legal / Law Firms",
        "service_name": "Legal & Law Firm Website Design",
    },
    "local-business.html": {
        "title": "Local Business Website Design India | Nivesh AI Solutions",
        "desc": "Get found on Google and attract local customers with a professional business website by Nivesh AI. Affordable, fast, and mobile-first.",
        "keywords": "local business website design India, small business website, Google My Business website, local SEO website, Nivesh AI",
        "h1_label": "Local Business",
        "service_name": "Local Business Website Design",
    },
    "real-estate.html": {
        "title": "Real Estate Website Design India | Nivesh AI Solutions",
        "desc": "Generate qualified property leads 24/7 with a premium real estate website by Nivesh AI. Property listings, agent profiles, virtual tours and more.",
        "keywords": "real estate website design India, property listing website, real estate agent website, property portal design, Nivesh AI",
        "h1_label": "Real Estate",
        "service_name": "Real Estate Website Design",
    },
    "restaurants.html": {
        "title": "Restaurant & Café Website Design | Nivesh AI Solutions",
        "desc": "Stunning restaurant and café websites that fill tables. Nivesh AI builds menu sites, online ordering systems and reservation platforms.",
        "keywords": "restaurant website design India, cafe website design, food delivery website, online menu website, restaurant web design, Nivesh AI",
        "h1_label": "Restaurants & Cafés",
        "service_name": "Restaurant & Café Website Design",
    },
    "saas-tools.html": {
        "title": "SaaS & Software Website Design | Nivesh AI Solutions",
        "desc": "Convert more free-trial users with a high-performance SaaS website by Nivesh AI. We design product landing pages, pricing pages and onboarding flows.",
        "keywords": "SaaS website design India, software product website, SaaS landing page design, tech startup website, Nivesh AI",
        "h1_label": "SaaS / Micro-Tools",
        "service_name": "SaaS & Software Website Design",
    },
    "travel.html": {
        "title": "Travel & Tourism Website Design | Nivesh AI Solutions",
        "desc": "Beautiful travel and tourism websites by Nivesh AI. We build tour booking platforms, travel agencies and destination websites that inspire wanderlust.",
        "keywords": "travel website design India, tourism website design, tour booking website, travel agency website, Nivesh AI",
        "h1_label": "Travel & Tourism",
        "service_name": "Travel & Tourism Website Design",
    },
    "weddings.html": {
        "title": "Wedding & Events Website Design | Nivesh AI Solutions",
        "desc": "Elegant wedding and events websites by Nivesh AI. We build wedding planner sites, venue websites and event booking platforms that capture emotion.",
        "keywords": "wedding website design India, events website design, wedding planner website, event venue website, Nivesh AI",
        "h1_label": "Weddings & Events",
        "service_name": "Wedding & Events Website Design",
    },
}

SEO_TEMPLATE = """\
  <!-- \u2550\u2550 PRIMARY SEO \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <title>{title}</title>
  <meta name="description" content="{desc}" />
  <meta name="keywords" content="{keywords}" />
  <meta name="author" content="Nivesh AI Solutions" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
  <link rel="canonical" href="{canonical}" />

  <!-- \u2550\u2550 OPEN GRAPH \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{canonical}" />
  <meta property="og:title" content="{title}" />
  <meta property="og:description" content="{desc}" />
  <meta property="og:site_name" content="Nivesh AI Solutions" />

  <!-- \u2550\u2550 TWITTER CARD \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{title}" />
  <meta name="twitter:description" content="{desc}" />

  <!-- \u2550\u2550 STRUCTURED DATA \u2014 Service Schema \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "{service_name}",
    "provider": {{
      "@type": "Organization",
      "name": "Nivesh AI Solutions",
      "url": "https://niveshaistudio.netlify.app/luxury-studio.html",
      "telephone": "+91-8800528264"
    }},
    "description": "{desc}",
    "url": "{canonical}",
    "areaServed": "IN",
    "serviceType": "Web Design & Development",
    "offers": {{
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }}
  }}
  </script>
"""

niches_dir = os.path.join(os.path.dirname(__file__), "niches")

for filename, data in NICHES.items():
    filepath = os.path.join(niches_dir, filename)
    if not os.path.exists(filepath):
        print(f"SKIP: {filename} not found")
        continue

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Build the SEO block
    canonical = f"{BASE_URL}/{filename}"
    seo_block = SEO_TEMPLATE.format(canonical=canonical, **data)

    # Replace the existing title tag (and any adjacent meta description) with the full SEO block
    # Pattern: from <title>...</title> up to (and including) any existing meta description line
    old_title_pattern = re.compile(
        r'<title>.*?</title>(\s*\n\s*<meta name="description"[^>]*/?>)?',
        re.DOTALL | re.IGNORECASE,
    )
    new_content, count = old_title_pattern.subn(seo_block.strip(), content, count=1)

    if count == 0:
        print(f"WARNING: No <title> found in {filename}")
        continue

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"✓ Updated SEO in {filename}")

print("\nAll niche pages updated!")
