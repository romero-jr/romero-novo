window.NOVO_DATA = {
  "pulse": {
    "quarter": "Q2 2026",
    "headline": {
      "stat": "73",
      "unit": "%",
      "text": "of independent business owners name <strong>cash flow</strong> as their number one financial concern heading into the second half of 2026 — ahead of taxes, hiring, and access to credit."
    },
    "findings": [
      { "cat": "Cash flow", "num": "73", "unit": "%", "insight": "cite cash flow as their top financial concern — the highest reading since we began tracking it." },
      { "cat": "Banking trust", "num": "61", "unit": "%", "insight": "say they don't fully trust their primary bank to act in their business's interest." },
      { "cat": "AI adoption", "num": "48", "unit": "%", "insight": "are already using AI tools somewhere in their business, most often for admin and customer replies." },
      { "cat": "Growth confidence", "num": "42", "unit": "%", "insight": "feel confident about growth over the next 12 months — steady, but cautious on spending." }
    ],
    "chart": {
      "name": "Confidence Index, last four quarters",
      "meta": "0–100 scale · n = 4,200",
      "scaleMax": 60,
      "points": [
        { "label": "Q3 '25", "value": 38 },
        { "label": "Q4 '25", "value": 41 },
        { "label": "Q1 '26", "value": 39 },
        { "label": "Q2 '26", "value": 42, "live": true }
      ],
      "foot": "Confidence ticked back up this quarter after a soft Q1, but remains well below the 50-point neutral line — owners are optimistic about their own businesses while staying wary of the broader economy."
    },
    "voices": [
      { "quote": "Some weeks I'm paid in full, some weeks I'm chasing three invoices. Knowing exactly what's cleared is the difference between sleeping and not.", "initials": "DR", "color": "#3d44e3", "name": "Dana Reyes", "biz": "Reyes Tile & Stone · Tucson, AZ" },
      { "quote": "I switched banks because mine treated me like a personal account that happened to make payroll. I needed tools, not a teller.", "initials": "MO", "color": "#242d23", "name": "Marcus Okafor", "biz": "Northbound Coffee Roasters · Portland, OR" },
      { "quote": "AI writes my first-draft client emails and sorts receipts. It bought me back about a day a week — and I bill that day.", "initials": "PL", "color": "#7a52d6", "name": "Priya Lakshmi", "biz": "Lakshmi Bookkeeping Co. · Edison, NJ" }
    ],
    "methodology": {
      "stat": "250K+",
      "label": "businesses in community",
      "body": "The Novo Pulse draws on a community of more than 250,000 independent businesses, a quarterly survey of 4,200 owners weighted to reflect U.S. industry and geography, and aggregated, anonymized signals from what the community is asking and talking about. No individual account data is ever identified or shared. Figures shown here are sample data for this prototype and clearly labeled as such."
    }
  },

  "healthCheck": {
    "questions": [
      { "cat": "Fees", "text": "How much do you pay in monthly banking fees?",
        "opts": [["$0", 20], ["$10–$25", 15], ["$25–$50", 10], ["$50+", 0]],
        "low": { "t": "You're paying for the privilege of banking.", "b": "Novo charges <strong>no monthly fees, no minimums, and no hidden charges</strong> — that money stays in your business." } },
      { "cat": "Speed", "text": "How long does it take to send or receive payments?",
        "opts": [["Same day", 20], ["1–2 days", 15], ["3–5 days", 10], ["5+ days", 0]],
        "low": { "t": "Slow money is a cash-flow problem.", "b": "With Novo you can send free standard ACH and get paid faster, so you're not waiting days to use your own money." } },
      { "cat": "Integrations", "text": "Does your bank connect with your business tools?",
        "opts": [["Yes, seamlessly", 20], ["Some tools", 15], ["Manually", 10], ["Not at all", 0]],
        "low": { "t": "You're the integration.", "b": "Novo connects directly with <strong>Stripe, Shopify, QuickBooks</strong> and more — so your books, payments, and bank stay in sync." } },
      { "cat": "Visibility", "text": "How easily can you see your cash flow in real time?",
        "opts": [["Instantly", 20], ["Daily", 15], ["Weekly", 10], ["I check manually", 0]],
        "low": { "t": "Guessing at your balance is expensive.", "b": "Novo shows what's in, what's out, and what's available in real time — no spreadsheet archaeology required." } },
      { "cat": "Support", "text": "When a banking issue comes up, how easy is it to get help?",
        "opts": [["Very easy", 20], ["Somewhat easy", 15], ["Frustrating", 10], ["I dread it", 0]],
        "low": { "t": "You shouldn't dread your bank.", "b": "Novo's support is built for independent businesses — real help when something's on the line, without the runaround." } }
    ],
    "bands": [
      { "min": 80, "label": "Strong setup", "color": "var(--green)", "labelColor": "#1f9d6b", "head": "You're running a tight ship.", "sub": "Your banking is mostly out of your way. Here's where Novo can squeeze out the last bit of friction." },
      { "min": 50, "label": "Room to improve", "color": "var(--amber)", "labelColor": "#b9790f", "head": "Solid — but it's costing you somewhere.", "sub": "A few gaps are quietly eating time and cash. The good news: they're all fixable." },
      { "min": 0, "label": "Your bank may be costing you", "color": "var(--red)", "labelColor": "#c0432f", "head": "Your bank is making your job harder.", "sub": "This setup is working against your cash flow. Here's what better looks like." }
    ]
  },

  "novo100": {
    "categories": ["All", "Freelancer", "Retail", "Services", "Ecommerce", "Startup", "Food & Beverage"],
    "categoryColors": {
      "Freelancer": ["#ebecfb", "#3d44e3"],
      "Retail": ["#fdeede", "#b9790f"],
      "Services": ["#e4f3ec", "#1f9d6b"],
      "Ecommerce": ["#f1e9fb", "#7a52d6"],
      "Startup": ["#fde9e6", "#c0432f"],
      "Food & Beverage": ["#fbf3dc", "#9a7a14"]
    },
    "avatarColors": ["#3d44e3", "#242d23", "#7a52d6", "#1f9d6b", "#c0432f", "#b9790f", "#2a30b8", "#4a5147"],
    "winners": [
      { "name": "Imani Brooks", "biz": "Cedar & Clay Ceramics", "loc": "Asheville, NC", "cat": "Retail", "desc": "Turned a garage kiln into a wholesale studio supplying 40 shops across the Southeast." },
      { "name": "Daniel Park", "biz": "Park Mobile Diagnostics", "loc": "Sacramento, CA", "cat": "Services", "desc": "Brings the auto shop to the driveway — booked solid three weeks out, no storefront." },
      { "name": "Sofia Marquez", "biz": "La Lengua Language Co.", "loc": "San Antonio, TX", "cat": "Freelancer", "desc": "Solo translator who now subcontracts a network of 12 linguists nationwide." },
      { "name": "Marcus Webb", "biz": "Webb Bros. Cold Brew", "loc": "Detroit, MI", "cat": "Food & Beverage", "desc": "Went from farmers-market cart to 200 grocery doors in 18 months." },
      { "name": "Aaliyah Carter", "biz": "Knot & Grain Studio", "loc": "Portland, ME", "cat": "Ecommerce", "desc": "Handmade home goods shop shipping 500 orders a month from a converted barn." },
      { "name": "Hassan Ali", "biz": "Northstar Logistics AI", "loc": "Columbus, OH", "cat": "Startup", "desc": "Built routing software for small freight haulers; six employees and growing." },
      { "name": "Grace Liu", "biz": "Liu Family Acupuncture", "loc": "Seattle, WA", "cat": "Services", "desc": "Third-generation practice modernized with online booking and a sliding scale." },
      { "name": "Tobias Reed", "biz": "Reed Letterpress", "loc": "Richmond, VA", "cat": "Retail", "desc": "Restored century-old presses into a thriving wedding-stationery business." },
      { "name": "Yuki Tanaka", "biz": "Tanaka Test Kitchen", "loc": "Honolulu, HI", "cat": "Food & Beverage", "desc": "Pop-up turned permanent — a 20-seat counter with a six-month waitlist." },
      { "name": "Brianna Scott", "biz": "Scott Creative Freelance", "loc": "Nashville, TN", "cat": "Freelancer", "desc": "Brand designer who built a referral-only practice with zero ad spend." },
      { "name": "Omar Haddad", "biz": "Cedar Box Subscriptions", "loc": "Minneapolis, MN", "cat": "Ecommerce", "desc": "Curated goods box that grew to 8,000 subscribers on word of mouth alone." },
      { "name": "Nina Petrov", "biz": "Bright Lane Tutoring", "loc": "Denver, CO", "cat": "Startup", "desc": "Built a tutor marketplace serving 30 schools after starting at her kitchen table." }
    ]
  }
};
