// Blog posts at /blog/<slug>/. Legal points were checked against the statute
// text on leginfo.legislature.ca.gov on 2026-10-26; recheck them if you edit.
// Same copy rules as services.ts: no prices, turnaround times or warranties
// the owner hasn't given us, and no em dashes.

export type Post = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  /** Short line for the blog index card. */
  card: string;
  date: string;
  lead: string;
  sections: {
    heading: string;
    body?: string[];
    list?: string[];
    steps?: [string, string][];
    after?: string[];
  }[];
  /** Service pages this post links to and is linked from. */
  services: string[];
  sources: [string, string][];
};

export const POSTS: Post[] = [
  {
    slug: 'insurance-choose-body-shop-california',
    title: 'Can Your Insurer Choose Your Body Shop in California?',
    description:
      'No. California Insurance Code section 758.5 lets you pick the body shop after an accident. What the law says, and what to do when estimates differ.',
    h1: 'Can Your Insurance Company Choose Your Body Shop in California?',
    card: 'No. California law lets you pick the shop, on your own claim or the other driver’s.',
    date: '2026-10-26',
    lead: 'No. California law lets you take your car to the shop you choose after an accident, whether the claim is on your policy or the other driver’s. Here’s what the law says, and how to use it when you file a claim.',
    sections: [
      {
        heading: 'What the law says',
        body: [
          'Section 758.5 of the California Insurance Code says no insurer can require that your car be repaired at a specific shop. An insurer also can’t suggest or recommend a shop unless you ask for a referral, or you’ve been told in writing that you have the right to choose.',
          'Insurers are still allowed to tell you about their programs, such as a network of preferred shops and the warranties that come with them. Using one is your choice, not a requirement.',
        ],
      },
      {
        heading: 'Why the choice matters',
        body: [
          'The shop you pick does work you’ll be driving on for years. Network shops can be convenient and many do good work, but you’re the customer either way.',
          'Choose based on reviews, location and who you trust to tell you straight about the damage. It also helps to pick a shop that works with every insurer, so the claim goes smoothly wherever it’s filed.',
        ],
      },
      {
        heading: 'When the estimates don’t match',
        body: [
          'An insurer’s first estimate often comes in lower than the final bill, because some damage only shows up once the panels come off. The shop then sends the adjuster a supplement for the added work, with photos, and the adjuster reviews it.',
          'If your shop’s estimate is higher than the insurer’s, California’s fair claims regulations don’t let the insurer simply stand by its number. It has to pay the difference, adjust its estimate, or, if you ask, name a shop that will do the repair for its estimate.',
        ],
      },
      {
        heading: 'How to use your right',
        steps: [
          ['Name your shop', 'When you open the claim, tell the adjuster which shop you’ve chosen. You don’t need the insurer’s approval of the shop.'],
          ['Get the estimate there', 'Your shop writes the estimate and sends it to the adjuster, or the adjuster inspects the car at the shop.'],
          ['Approve the repair', 'Once the insurer agrees on the cost, the shop orders parts and starts the work.'],
          ['Pay any deductible', 'On a claim against your own policy, you pay your deductible to the shop. A claim against the other driver’s insurer usually has no deductible.'],
        ],
      },
    ],
    services: ['collision-repair'],
    sources: [
      [
        'California Insurance Code section 758.5',
        'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=758.5',
      ],
    ],
  },
  {
    slug: 'after-car-accident-san-francisco',
    title: 'What to Do After a Car Accident in San Francisco',
    description:
      'A checklist for a crash in San Francisco: safety, swapping information, SFPD, the DMV’s 10-day SR-1 report, your insurance claim and choosing a shop.',
    h1: 'What to Do After a Car Accident in San Francisco',
    card: 'A checklist for the scene, the police, the DMV’s 10-day report and your claim.',
    date: '2026-10-26',
    lead: 'A crash is stressful, and what you do in the next hour matters for your safety, your claim and your car. Here’s a checklist for an accident on San Francisco streets.',
    sections: [
      {
        heading: 'At the scene',
        steps: [
          ['Check for injuries', 'If anyone is hurt, call 911. Don’t move an injured person unless staying put puts them in danger.'],
          ['Get out of traffic', 'If the cars can move and no one is hurt, pull over to the curb or onto a side street and turn on your hazard lights.'],
          ['Swap information', 'Get the other driver’s name, phone number, license number, insurance company and policy number, plus the car’s plate number.'],
          ['Take photos', 'If it’s safe, photograph both cars, the plates, the street, the traffic signals and any skid marks.'],
          ['Talk to witnesses', 'Ask for names and phone numbers. What they saw helps if fault is disputed later.'],
        ],
      },
      {
        heading: 'Calling the police',
        body: [
          'Call 911 if anyone is hurt. For a crash with no injuries, including a hit and run where the other driver is gone, you can reach the SFPD non-emergency line at (415) 553-0123.',
          'Ask for a report number either way. Your insurance company will likely ask for it.',
        ],
      },
      {
        heading: 'Report it to the DMV within 10 days',
        body: [
          'California Vehicle Code section 16000 requires a report to the DMV, on form SR-1, within 10 days when anyone is hurt or when property damage to any one person is over $1,000. That holds no matter who was at fault or whether the police came.',
          'Body work on even a minor crash often passes $1,000, so most collisions qualify. A police report or an insurance claim doesn’t count as the SR-1. File it yourself, or through your insurance agent or broker.',
        ],
      },
      {
        heading: 'Start the claim',
        body: [
          'Call your insurance company, or the other driver’s if they caused the crash, and open a claim. In California you choose the body shop, so tell the adjuster where you want the car repaired.',
        ],
      },
      {
        heading: 'Get the car looked at, even if the damage looks small',
        body: [
          'Bumpers hide crushed brackets and bent reinforcements, and a hit that seemed minor can leave the car pulling to one side or the doors out of line. A body shop can find that before it turns into a second claim.',
          'If the car isn’t safe to drive, with lights out, a wheel bent or parts dragging, have it towed instead of driving it in.',
        ],
      },
    ],
    services: ['collision-repair', 'frame-straightening'],
    sources: [
      [
        'California Vehicle Code section 16000',
        'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=16000',
      ],
      ['DMV form SR-1, Report of Traffic Accident', 'https://www.dmv.ca.gov/portal/uploads/2024/10/SR-1-SR-1A-R1-2017-ASB-WWW.pdf'],
      ['San Francisco Police Department: police reports', 'https://www.sanfranciscopolice.org/reports'],
    ],
  },
  {
    slug: 'insurance-claim-or-pay-out-of-pocket',
    title: 'Insurance Claim or Pay Out of Pocket for Body Damage?',
    description:
      'For a scraped bumper or dented door, paying yourself can cost less than a claim. How to weigh your deductible, fault and the repair estimate in California.',
    h1: 'Should You File an Insurance Claim or Pay Out of Pocket for Body Damage?',
    card: 'For smaller damage, paying yourself can cost less. Here’s how to weigh it.',
    date: '2026-10-26',
    lead: 'For a big collision, filing a claim is the obvious call. For a scraped bumper or a dented door, paying for the repair yourself can cost less in the long run. Here’s how to decide.',
    sections: [
      {
        heading: 'Start with a free estimate',
        body: [
          'You can’t weigh a claim against paying cash until you know what the repair costs. Get a written estimate from a body shop first. Asking a shop for an estimate doesn’t open a claim or put anything on your insurance record.',
        ],
      },
      {
        heading: 'Compare the cost to your deductible',
        body: [
          'If the repair costs less than your deductible, insurance pays nothing, so there’s no reason to file. If it costs only a little more, you’d collect a small check and still have a claim on your record.',
        ],
      },
      {
        heading: 'Who caused it?',
        body: [
          'If another driver caused the damage, claim against their insurance. Their liability coverage pays for your repair, and you usually don’t pay a deductible.',
          'California Insurance Code section 491 also bars your own insurer from raising your premium for an accident you weren’t at fault for. If you were at fault, a claim can raise your premium at renewal, so ask your agent before you decide.',
        ],
      },
      {
        heading: 'When paying yourself makes sense',
        list: [
          'The repair costs less than your deductible, or only a little more.',
          'You caused the damage and no other car, property or person was involved, like scraping a pole in a garage.',
          'You’ve filed a claim recently and would rather not add another.',
        ],
      },
      {
        heading: 'When to file a claim',
        list: [
          'Another driver caused the damage.',
          'Anyone was hurt, or you damaged another car or someone’s property.',
          'The hit may have reached the structure, since frame and hidden damage can push the cost well past the first estimate.',
          'It’s glass damage your comprehensive coverage pays for. Some policies waive the deductible for windshield repair.',
        ],
        after: [
          'Most policies also require you to report an accident promptly, even if you end up paying for the repair yourself. Check your policy so you don’t risk your coverage.',
        ],
      },
    ],
    services: ['dent-repair', 'bumper-repair', 'collision-repair'],
    sources: [
      [
        'California Insurance Code section 491',
        'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=491',
      ],
    ],
  },
  {
    slug: 'car-break-in-san-francisco',
    title: 'Car Break-In in San Francisco? What to Do Next',
    description:
      'Came back to a smashed window in San Francisco? How to report it to SFPD, clean up the glass, handle insurance and get the window replaced.',
    h1: 'Car Break-In in San Francisco? What to Do About a Smashed Window',
    card: 'How to report it, clean up the glass, deal with insurance and replace the window.',
    date: '2026-10-26',
    lead: 'Car break-ins are a fact of life in San Francisco. If you come back to broken glass, here’s how to report it, protect the car and get the window replaced.',
    sections: [
      {
        heading: 'Report it',
        body: [
          'If the break-in is happening now, call 911. Otherwise, SFPD takes vehicle break-in reports online when items were taken or the car was rummaged through, as long as you don’t have suspect information or video. You can also call the non-emergency line at (415) 553-0123 or go to any police station.',
          'Insurance companies often ask for a police report number, so it’s worth filing even if nothing valuable was taken.',
        ],
      },
      {
        heading: 'Clean up and cover the opening',
        body: [
          'Side and rear windows are tempered glass, made to shatter into small cubes instead of sharp shards. Wear gloves, pick out the loose pieces and vacuum the seats and floor. Glass also falls inside the door, and the shop clears that out when it fits the new window.',
          'Until the new glass goes in, tape heavy plastic over the opening to keep out rain and dust, and park in a garage when you can. A trash bag works in a pinch, but thicker plastic holds up better if you have to drive.',
        ],
      },
      {
        heading: 'What insurance covers',
        body: [
          'A broken window and other break-in damage usually fall under the comprehensive part of an auto policy, after your deductible. Things stolen from the car are usually covered by homeowners or renters insurance instead of your auto policy.',
          'A side window may cost less than your deductible, so get a quote before you decide whether to file.',
        ],
      },
      {
        heading: 'Getting the window replaced',
        body: [
          'We replace side and rear windows with OEM-quality glass, clear the broken glass out of the door and check that the new window seals and runs smoothly. If the thief pried at the door or the lock, we can repair that body damage at the same visit.',
        ],
      },
      {
        heading: 'Lower the odds next time',
        list: [
          'Leave nothing in sight, not even a charging cable or an empty bag.',
          'Move things to the trunk before you arrive, not after you park.',
          'Park in a garage or a busy, well-lit spot when you can.',
        ],
      },
    ],
    services: ['auto-glass'],
    sources: [['San Francisco Police Department: police reports', 'https://www.sanfranciscopolice.org/reports']],
  },
];

export const postPath = (p: Post) => `/blog/${p.slug}/`;

/** "October 26, 2026" from an ISO date, without depending on the runtime's locale data. */
export function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[m - 1]} ${d}, ${y}`;
}
