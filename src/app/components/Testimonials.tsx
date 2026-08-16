import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Ian J. S.',
      source: 'Yelp',
      text: "Consumers is a fantastic shop. Rob and Joe always do a stellar job, using top quality parts and paint. They've worked on three vehicles of mine – all turned out great. These guys are seasoned veterans and perform work on a wide range of different vehicles. From Tesla and Mercedes – to American collector models. Don't hesitate – they're solid.",
      rating: 5
    },
    {
      name: 'Tim L.',
      source: 'Yelp',
      text: '2 fender benders in under a month – little discouraging but, on the upside, Rob was there and the car looks good as new. He got it done quick and for a good price. I recommend this shop without reservation.',
      rating: 5
    },
    {
      name: 'Christopher B.',
      source: 'Yelp',
      text: 'What a great experience from start to finish. Rob was honest, fast, finished in less time than the ETA he gave me, and washed my car before I picked it up at no extra cost. Really nice guy and staff. Highly recommend him. All those 5 star reviews I read before contacting him to fix my front end flawlessly were right.',
      rating: 5
    },
    {
      name: 'Amanda R.',
      source: 'Yelp',
      text: "This is my go to auto body shop!!!! The owner Rob is super friendly, and really genuine. I brought my car here because I didn't want to take it to the dealership and be over charged. I can tell that Rob and his mechanic were really trying to fix the problem!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-neutral-100 relative overflow-hidden" id="testimonials" style={{ backgroundImage: 'linear-gradient(45deg, rgba(0, 0, 0, 0.015) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.015) 75%, rgba(0, 0, 0, 0.015)), linear-gradient(45deg, rgba(0, 0, 0, 0.015) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.015) 75%, rgba(0, 0, 0, 0.015))', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }}>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Customers Say</h2>
        <p className="text-center text-neutral-600 mb-12 text-lg">
          Here are just a few reviews from our happy customers!
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg relative">
              <Quote className="w-10 h-10 text-cyan-200 absolute top-4 right-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-neutral-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <p className="font-bold text-neutral-900">{testimonial.name}</p>
                <p className="text-sm text-neutral-500">From {testimonial.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
