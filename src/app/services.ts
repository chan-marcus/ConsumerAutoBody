// Every service gets its own page at /<slug>/ and a card on the home page.
// Copy sticks to what the shop has stated (equipment, certifications, insurance,
// free estimates). Don't add prices, turnaround times or warranties unless the
// owner supplies them.
import type { LucideIcon } from 'lucide-react';
import { Car, Paintbrush, Sparkles, Frame, GlassWater, Zap, CircleDot, Shield } from 'lucide-react';

export type Service = {
  slug: string;
  /** Short name for cards and links; must fit one line on a card. */
  name: string;
  icon: LucideIcon;
  /** Card text on the home page and in "Other services". */
  card: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  points: string[];
  sections: {
    heading: string;
    body?: string[];
    list?: string[];
    steps?: [string, string][];
    after?: string[];
  }[];
  faqs: [string, string][];
};

export const SERVICES: Service[] = [
  {
    slug: 'collision-repair',
    name: 'Collision Repair',
    icon: Car,
    card: 'From fender-benders to major collision damage, our ASE-certified technicians do the work and deal with your insurance company.',
    title: 'Collision Repair in San Francisco | Consumer Auto Body',
    description:
      "Collision repair at 923 Valencia Street in San Francisco's Mission District. ASE and I-CAR certified technicians, all insurance companies, free estimates.",
    h1: 'Collision Repair in San Francisco',
    lead: 'From a scraped fender to major front-end damage, we repair it in our Mission District shop and work with your insurance company along the way.',
    points: ['Works with all insurance companies', 'ASE and I-CAR certified technicians', 'Free estimates'],
    sections: [
      {
        heading: 'You choose the body shop',
        body: [
          'After an accident, your insurance company may point you to one of its network shops. In California the choice is yours. Section 758.5 of the California Insurance Code bars an insurer from requiring you to use a particular repair shop.',
          'We work with every insurance company, so we can talk with your adjuster about the estimate and about any added damage we find once the car is apart.',
        ],
      },
      {
        heading: 'How a collision repair goes',
        steps: [
          ['Estimate', 'We look the car over and write up the damage we can see. The estimate is free.'],
          ['Approval', 'If insurance is paying, your adjuster reviews and approves the estimate before work starts.'],
          ['Teardown', 'Damaged panels come off, which often shows damage hidden behind them. Added work goes back to the adjuster first.'],
          ['Repair', 'Metal work, frame straightening if the structure was hit, and new parts where the old ones can’t be saved.'],
          ['Paint', 'Repaired panels are primed, color matched and painted in our spray booths.'],
          ['Final check', 'We put the car back together, inspect the work and call you when it’s ready.'],
        ],
      },
      {
        heading: 'Damage you can’t see',
        body: [
          'A low-speed hit can bend brackets, crack the bumper reinforcement or push the frame out of spec without much showing on the outside. That’s why we take damaged parts off and measure before we commit to a finish date.',
          'If the impact reached the structure, we measure the car against factory dimensions and straighten it before any cosmetic work begins.',
        ],
      },
    ],
    faqs: [
      [
        'Do I need more than one estimate?',
        'Some insurance companies ask for more than one estimate and many don’t, so check with your adjuster. Our estimate is free either way.',
      ],
      [
        'How long will my repair take?',
        'It depends on the damage and on how quickly parts arrive. A bumper and fender take far less time than structural work. We’ll give you a timeline once we see the car and keep you posted if hidden damage changes it.',
      ],
      [
        'Is my car safe to drive after an accident?',
        'If the lights and mirrors work, nothing drags or rubs, and no warning lights are on, it may be drivable. If you’re unsure, have it towed. Driving on a bent wheel or frame can add to the damage.',
      ],
      [
        'Can I pay without going through insurance?',
        'Yes. For smaller repairs, paying out of pocket can cost less than your deductible and a claim on your record. Get our free estimate first, then decide.',
      ],
    ],
  },
  {
    slug: 'auto-painting',
    name: 'Auto Painting',
    icon: Paintbrush,
    card: 'PPG waterborne paint and EPA-approved spray booths give one panel or a full respray a factory color match.',
    title: 'Auto Painting & Refinishing in SF | Consumer Auto Body',
    description:
      'Car painting in San Francisco with PPG waterborne paint in EPA-approved spray booths. One panel or a full respray, matched to your car. Free estimates.',
    h1: 'Auto Painting and Refinishing in San Francisco',
    lead: 'Whether it’s one scratched door or a complete respray, we paint in EPA-approved spray booths with PPG waterborne paint and match the color to your car.',
    points: ['PPG waterborne paint', 'EPA-approved spray booths', 'One panel or a full respray'],
    sections: [
      {
        heading: 'Matching the color your car has now',
        body: [
          'Every car has a factory paint code, but the color on the road shifts with sun and age. A panel painted straight from the code can look off next to the original paint.',
          'So we mix to the code, compare it against your car and adjust. Where new paint meets old, we usually blend the color into the panels around the repair, so the eye never finds a line between them.',
        ],
      },
      {
        heading: 'What goes into a paint job that lasts',
        steps: [
          ['Prep', 'Old paint is sanded, chips and dings are filled, and the surface is cleaned of wax and oil.'],
          ['Primer', 'Primer seals bare metal and gives the color coat a surface to grip.'],
          ['Base coat', 'The color goes on in thin, even coats inside the spray booth.'],
          ['Clear coat', 'A clear layer protects the color from sun, rain and car washes.'],
          ['Finish', 'We inspect the paint in good light and polish out any flaws we find.'],
        ],
      },
      {
        heading: 'Why the spray booth matters',
        body: [
          'Dust and lint ruin fresh paint. Our booths filter the air coming in and move it out at high flow, so the paint goes on and cures clean. The EPA-approved filtration also keeps overspray out of the neighborhood.',
        ],
      },
    ],
    faqs: [
      [
        'Can you paint just one panel?',
        'Yes. Most paint work is one or two panels after a scrape or a repair. We blend the color into the panels next to it so the work doesn’t show.',
      ],
      [
        'Do you do full resprays?',
        'Yes. A full respray takes much more prep than panel work, so we’ll look the car over in person before we quote it.',
      ],
      [
        'Will the new paint match my car?',
        'That’s the goal of every job. We mix to your car’s paint code, check it against the car and blend into nearby panels where it helps.',
      ],
      [
        'What is waterborne paint?',
        'Waterborne base coats use water in place of most of the solvents in older paints. They release fewer fumes and still give a factory-quality finish.',
      ],
    ],
  },
  {
    slug: 'auto-detailing',
    name: 'Auto Detailing',
    icon: Sparkles,
    card: 'A hand wash, clay bar and wax outside, with shampooed carpets and conditioned leather inside.',
    title: 'Auto Detailing in San Francisco | Consumer Auto Body',
    description:
      'Full-service car detailing in the Mission District: hand wash, clay bar, wax, carpet shampoo and leather conditioning. Call (415) 285-1547.',
    h1: 'Auto Detailing in San Francisco',
    lead: 'Our full-service detail cleans your car inside and out, from a hand wash and wax to shampooed carpets and conditioned leather. It’s a good finish after a repair or before you sell.',
    points: ['Hand wash, clay bar and wax', 'Carpet shampoo and leather care', 'On its own or after a repair'],
    sections: [
      {
        heading: 'Outside',
        list: [
          'A hand wash that lifts dirt without scratching the paint.',
          'Clay bar treatment to pull out grit that washing leaves behind.',
          'Wax for shine and a layer of protection against sun and rain.',
          'Tire dressing for a clean, finished look.',
        ],
      },
      {
        heading: 'Inside',
        list: [
          'Deep cleaning of the seats, dash, door panels and console.',
          'Carpet and mat shampooing to lift stains and odors.',
          'Leather cleaning and conditioning to keep it from drying out and cracking.',
        ],
      },
      {
        heading: 'When a detail makes sense',
        body: [
          'City driving gets a car dirty fast. A detail is worth it before you sell or return a lease, after a long road trip, or once a year to protect the paint.',
          'If your car is already here for body work, add a detail and it comes back to you clean inside and out.',
        ],
      },
    ],
    faqs: [
      [
        'How long does a detail take?',
        'Plan on leaving the car with us for the day. Call ahead and we’ll schedule a time to drop it off.',
      ],
      [
        'Can I add a detail to a repair?',
        'Yes. Ask when you drop the car off and we’ll detail it before you pick it up.',
      ],
      [
        'Does wax protect my paint?',
        'Wax adds a thin layer that sheds water and slows fading from the sun. It wears off over a few months, so it’s worth redoing a few times a year.',
      ],
    ],
  },
  {
    slug: 'frame-straightening',
    name: 'Frame Repair',
    icon: Frame,
    card: 'Computerized measuring brings a bent frame back to factory specs so your car drives straight again.',
    title: 'Frame Straightening in San Francisco | Consumer Auto Body',
    description:
      'Frame straightening in San Francisco with computerized measuring. We bring bent frames and unibodies back to factory specs. Free estimates.',
    h1: 'Frame Straightening in San Francisco',
    lead: 'A bent frame changes how your car drives, how its tires wear and how it protects you in the next crash. We measure your car against factory dimensions and pull it back into spec.',
    points: ['Computerized measuring', 'Back to factory specifications', 'Works with all insurance companies'],
    sections: [
      {
        heading: 'Signs your frame may be bent',
        list: [
          'The car still pulls to one side after an alignment.',
          'Doors, hood or trunk don’t line up or close the way they used to.',
          'Gaps between body panels are wider on one side than the other.',
          'Tires wear unevenly or faster than they should.',
          'New creaks or rattles show up over bumps.',
        ],
        after: ['Any of these after a collision is worth a measurement, even when the outside damage looked minor.'],
      },
      {
        heading: 'How we straighten a frame',
        body: [
          'Most cars today don’t have a separate frame. The body itself is the structure, called a unibody, and it’s built to crumple in a crash to absorb the energy. Putting it right takes measuring, not guessing.',
          'We secure the car and measure set points on the body with computerized equipment, then compare those numbers with the manufacturer’s specifications. The structure is pulled back in controlled steps and measured as we go, until it’s within spec.',
        ],
      },
      {
        heading: 'Why it matters',
        body: [
          'Your car’s crumple zones and wheel alignment depend on the structure sitting where the factory put it. A frame left out of spec can chew through tires, wander on the freeway and protect you less in the next accident.',
        ],
      },
    ],
    faqs: [
      [
        'Is a car with frame damage totaled?',
        'Not always. An insurer totals a car when the repair would cost more than the car is worth. Many cars with frame damage are repaired and drive straight again.',
      ],
      [
        'Can you check my frame without a collision repair?',
        'Yes. If you’ve noticed pulling, uneven panel gaps or odd tire wear, call us and we’ll set up a time to look at it.',
      ],
      [
        'Do I need an alignment after frame straightening?',
        'Usually, yes. Once the structure is back in spec, a wheel alignment sets the suspension angles so the car tracks straight and the tires wear evenly.',
      ],
    ],
  },
  {
    slug: 'auto-glass',
    name: 'Auto Glass',
    icon: GlassWater,
    card: 'Windshield chips repaired, often in under an hour, and OEM-quality glass sealed against leaks and wind noise.',
    title: 'Windshield & Auto Glass Repair in SF | Consumer Auto Body',
    description:
      'Windshield chip repair, often in under an hour, and auto glass replacement in San Francisco. OEM-quality glass, sealed against leaks and wind noise.',
    h1: 'Windshield and Auto Glass Repair in San Francisco',
    lead: 'Small windshield chips can often be repaired in under an hour, before they spread into a crack. When the glass is past saving, we replace it with OEM-quality glass, sealed against leaks and wind noise.',
    points: ['Chip repair, often in under an hour', 'OEM-quality replacement glass', 'Sealed against leaks and noise'],
    sections: [
      {
        heading: 'Repair or replace?',
        body: [
          'A chip about the size of a quarter or smaller, away from the edge of the glass, can usually be repaired. Resin fills the break, stops it from spreading and clears up most of the mark.',
          'Long cracks, chips at the edge of the windshield and damage right in the driver’s line of sight usually mean a new windshield. Bring the car by and we’ll tell you which one you need.',
        ],
      },
      {
        heading: 'Fix chips early',
        body: [
          'Temperature swings, potholes and even slamming a door can turn a chip into a crack that runs across the windshield. Once that happens, repair is off the table, so a call the week it happens costs far less than a new windshield later.',
        ],
      },
      {
        heading: 'Side windows and back glass',
        body: [
          'Side and rear windows are tempered glass, which shatters into small pieces instead of cracking. It can’t be repaired, only replaced. If a break-in left you with a smashed window, we clear out the broken glass, fit the new window and check that it seals and works.',
        ],
      },
    ],
    faqs: [
      [
        'Will my insurance pay for chip repair?',
        'Many policies with comprehensive coverage pay for glass repair, and some waive the deductible for it. Check your policy or ask your agent.',
      ],
      [
        'Can I drive with a cracked windshield?',
        'A small crack outside your line of sight is usually fine for a short while, but it can spread without warning. California law also bars driving with windshield damage that blocks your view, so get it looked at soon.',
      ],
      [
        'How long does a windshield replacement take?',
        'The glass goes in quickly, but the adhesive needs time to set before the car is safe to drive. We’ll tell you when it’s ready to go.',
      ],
    ],
  },
  {
    slug: 'welding-rust-repair',
    name: 'Welding',
    icon: Zap,
    card: 'Chassis repairs, panel fabrication and rust cut out and welded in new, then ground flush and sealed.',
    title: 'Auto Body Welding & Rust Repair in SF | Consumer Auto Body',
    description:
      'Chassis welding, panel fabrication and rust repair in San Francisco. Rusted metal is cut out, new metal welded in, then ground flush and sealed.',
    h1: 'Auto Body Welding and Rust Repair in San Francisco',
    lead: 'Our welders handle chassis repairs, panel fabrication and rust that has eaten through the metal. Every weld is ground flush and sealed so the repair holds up.',
    points: ['Chassis and structural welding', 'Custom panel fabrication', 'Rust cut out, not covered up'],
    sections: [
      {
        heading: 'Rust repair done right',
        body: [
          'Filler over rust looks fine for a season, then bubbles back through the paint while the rust keeps spreading underneath.',
          'We cut the rusted metal out back to solid steel, shape a new piece to fit and weld it in. The weld is ground flush, seam sealed and primed so moisture can’t get back in, and the area is painted to match.',
        ],
      },
      {
        heading: 'When the part doesn’t exist',
        body: [
          'Older cars and some imports have panels that are hard to find or no longer made. We fabricate patch panels and brackets from sheet metal, shaped to match the original.',
        ],
      },
      {
        heading: 'Chassis and structural repairs',
        body: [
          'Cracked mounts, broken brackets and damaged structural sections need welds that hold under load. We weld them to restore strength, not just looks, then protect the repair from corrosion.',
        ],
      },
    ],
    faqs: [
      [
        'How do I know if rust has gone through?',
        'Bubbling paint, flaking metal and soft spots or holes are the usual signs. Check the wheel arches, rocker panels and the bottom edges of the doors, where water collects.',
      ],
      [
        'Is surface rust worth fixing?',
        'Yes, and it’s cheaper now than later. Surface rust can often be sanded out and repainted before it eats into the metal.',
      ],
      [
        'Do you work on older and collector cars?',
        'Yes. Customers bring us everything from late-model Teslas and Mercedes to American collector cars, and rust repair is common on older ones.',
      ],
    ],
  },
  {
    slug: 'dent-repair',
    name: 'Dent Repair',
    icon: CircleDot,
    card: 'Parking lot dings and collision dents worked back into shape, often without touching your factory paint.',
    title: 'Dent Repair in San Francisco | Consumer Auto Body',
    description:
      'Dent removal in San Francisco, from parking lot dings to collision dents. Many are fixed without touching the factory paint. Free estimates.',
    h1: 'Dent Repair in San Francisco',
    lead: 'From parking lot dings to larger collision dents, we pull or massage the metal back into shape. In many cases we can do it without touching your factory paint.',
    points: ['Door dings and creased panels', 'Often no repainting needed', 'Free estimates'],
    sections: [
      {
        heading: 'Paintless dent repair',
        body: [
          'When the paint isn’t cracked or chipped, we can often work the dent out from behind the panel with specialized tools. The metal goes back to its original shape and your factory paint stays as it was.',
          'Paintless repair is usually quicker and costs less than body work and paint. It also keeps the original paint on the car, which helps when you sell.',
        ],
      },
      {
        heading: 'When a dent needs body work',
        body: [
          'Dents with cracked paint, sharp creases or stretched metal need traditional repair. We pull the metal out, smooth the surface, then prime and paint the panel, blending the new paint into the panels around it so the repair disappears.',
        ],
      },
      {
        heading: 'Parking in the city',
        body: [
          'Street parking in San Francisco means door dings, bumped corners and the occasional hit and run. Fixing small dents early keeps the damage from piling up, and keeps rust out of any spot where the paint has cracked.',
        ],
      },
    ],
    faqs: [
      [
        'Can every dent be fixed without paint?',
        'No. Paintless repair works best on shallow dents with unbroken paint. Dents on a panel edge, with cracked paint or with stretched metal usually need paint.',
      ],
      [
        'How long does dent repair take?',
        'Small paintless repairs are usually quick. Dents that need paint take longer because of the prep, painting and cure time, and we’ll give you a time once we see it.',
      ],
      [
        'Is it worth fixing a small dent?',
        'If the paint is cracked, yes, because bare metal will rust. If the paint is fine, it comes down to looks and what the car is worth when you sell it.',
      ],
    ],
  },
  {
    slug: 'bumper-repair',
    name: 'Bumper Repair',
    icon: Shield,
    card: 'Cracked, scraped or loose bumpers repaired or replaced, with the paint blended so the repair disappears.',
    title: 'Bumper Repair in San Francisco | Consumer Auto Body',
    description:
      'Cracked, scraped or loose bumper? We repair what can be saved, replace what can’t and blend the paint to match. Mission District, free estimates.',
    h1: 'Bumper Repair in San Francisco',
    lead: 'Cracked, scraped and hanging bumpers are something we fix every day. We repair what can be repaired, replace what needs replacing and blend the paint so the repair disappears.',
    points: ['Scrapes, cracks and tears', 'Paint blended to match', 'Free estimates'],
    sections: [
      {
        heading: 'Repair or replace',
        body: [
          'Most bumpers today are a plastic cover over a metal or foam reinforcement. Scuffs, scrapes and small cracks in the cover can usually be repaired and repainted for less than a new one.',
          'Replacement makes sense when the cover is torn, the mounting tabs are broken or the reinforcement behind it is bent. We’ll show you what we find and explain which way we recommend.',
        ],
      },
      {
        heading: 'Sensors and cameras',
        body: [
          'Many newer bumpers hold parking sensors, cameras or radar for adaptive cruise control. Mention them when you call, so the repair plan accounts for them from the start.',
        ],
      },
      {
        heading: 'A loose bumper is a safety problem',
        body: [
          'A bumper hanging by a clip can come off on the freeway. If yours is loose, secure it or take it off before you drive, then bring the car in. Reattaching it often takes new clips or brackets, not a whole new bumper.',
        ],
      },
    ],
    faqs: [
      [
        'Can you fix a scraped bumper corner?',
        'Yes. Corner scrapes from parking are among the repairs we do most. The scrape is sanded smooth, filled where needed and repainted to match.',
      ],
      [
        'Will the paint match the rest of the car?',
        'We match the color to your car and blend it into the panels next to the bumper, so the repair doesn’t stand out.',
      ],
      [
        'Should I go through insurance for a bumper?',
        'For a small scrape, paying out of pocket often costs less than your deductible and a claim on your record. Get our free estimate first, then decide.',
      ],
    ],
  },
];

export const servicePath = (s: Service) => `/${s.slug}/`;
