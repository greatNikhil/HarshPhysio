import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Thanks Harsh for my treatment of back pain. Your knowledge and experience made the recovery very smooth.",
    author: "Aqib Ansari",
  },
  {
    text: "Very professional physiotherapists, great treatment results, supportive staff, and neat clinic setup. Best place for fast recovery.",
    author: "Falak Shahzadi",
  },
  {
    text: "Highly recommend this physio clinic for ankle pain relief.",
    author: "Atiyab Ashraf",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-muted/50">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">Patient Reviews</p>
          <h2 className="heading-section text-foreground mb-4">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground">4.9 out of 5 · Based on 16 reviews</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card-clinical flex flex-col"
            >
              <Quote className="w-8 h-8 text-muted mb-4" strokeWidth={1.5} />
              <p className="text-foreground mb-6 flex-1 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-semibold text-sm">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{review.author}</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
