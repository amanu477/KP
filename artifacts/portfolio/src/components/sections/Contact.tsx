import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-40 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 uppercase leading-[0.9]">
              Let's Create <br />
              <span className="text-primary italic">Together</span>.
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-12 max-w-md">
              Have a project in mind or just want to say hi? I'm currently open for new opportunities.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Direct Inquiries</p>
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-2xl font-display font-bold hover:text-primary transition-colors">
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Socials</p>
                <div className="flex gap-4">
                  {PORTFOLIO_DATA.socials.map((social) => (
                    <a 
                      key={social.name}
                      href={social.url}
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    >
                      <span className="text-xs font-medium uppercase">{social.name[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column / Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-12 rounded-3xl"
          >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center"
              >
                <CheckCircle2 className="w-20 h-20 text-primary mb-6" />
                <h3 className="text-3xl font-display font-bold mb-2">Message Sent</h3>
                <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you shortly.</p>
                <Button 
                  variant="outline" 
                  className="mt-8"
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium ml-1">Name</label>
                    <Input placeholder="John Doe" {...register("name")} className={errors.name ? "border-destructive" : ""} />
                    {errors.name && <p className="text-xs text-destructive ml-1">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium ml-1">Email</label>
                    <Input type="email" placeholder="john@example.com" {...register("email")} className={errors.email ? "border-destructive" : ""} />
                    {errors.email && <p className="text-xs text-destructive ml-1">{errors.email.message}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium ml-1">Subject</label>
                  <Input placeholder="Project Inquiry" {...register("subject")} className={errors.subject ? "border-destructive" : ""} />
                  {errors.subject && <p className="text-xs text-destructive ml-1">{errors.subject.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium ml-1">Message</label>
                  <Textarea placeholder="Tell me about your project..." {...register("message")} className={errors.message ? "border-destructive" : ""} />
                  {errors.message && <p className="text-xs text-destructive ml-1">{errors.message.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
                </Button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
