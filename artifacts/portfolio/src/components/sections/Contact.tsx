import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="py-16 md:py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-8 bg-primary block" />
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-medium">Contact</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9] uppercase">
            Let's Create <br />
            <span className="text-primary italic">Together</span>.
          </h1>
          <p className="text-lg text-muted-foreground font-light mt-6 max-w-md">
            Have a project in mind or just want to say hi? I'm currently open for new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-panel rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="font-medium hover:text-primary transition-colors">
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                <p className="font-medium">{PORTFOLIO_DATA.personal.phone}</p>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                <p className="font-medium">{PORTFOLIO_DATA.personal.location}</p>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Socials</p>
              <div className="flex gap-4">
                {PORTFOLIO_DATA.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full border border-white/10 text-sm font-medium uppercase tracking-widest text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
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
                <Button variant="outline" className="mt-8" onClick={() => setIsSuccess(false)}>
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
                  <Textarea rows={6} placeholder="Tell me about your project..." {...register("message")} className={errors.message ? "border-destructive" : ""} />
                  {errors.message && <p className="text-xs text-destructive ml-1">{errors.message.message}</p>}
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full mt-4" disabled={isSubmitting}>
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
