"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-indigo-400 p-1 py-0.5 font-bold text-indigo-50 dark:bg-indigo-400 dark:text-indigo-50",
        className,
      )}
    >
      {children}
    </span>
  );
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
        // light styles
        " border border-neutral-200 bg-white",
        // dark styles
        "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className,
      )}
      {...props}
    >
      <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
        </div>
      </div>

      <div className="flex w-full select-none items-center justify-start gap-5">
        <Avatar>
          <AvatarImage
            width={40}
            height={40}
            src={img || ""}
            alt={name}
            className="size-10 rounded-full ring-1 ring-border ring-offset-4"
          />
        </Avatar>

        <div>
          <p className="font-medium text-neutral-500">{name}</p>
          <p className="text-xs font-normal text-neutral-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
const testimonials = [
  {
    name: "Alex Rivera",
    role: "UI/UX Lead at InnovateTech",
    img: "https://randomuser.me/api/portraits/men/91.jpg",
    description: (
      <p>
        Using DebateMate has revolutionized our debate process.
        <Highlight>
          Its reusable, modular approach make it easy to deliver cutting-edge
          debates.
        </Highlight>{" "}
        A must-have for any debate team.
      </p>
    ),
  },
  {
    name: "Samantha Lee",
    role: "Frontend Engineer at NextGen Solutions",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    description: (
      <p>
        DebateMate&apos;s templates have drastically improved our development
        speed.
        <Highlight>
          We&apos;ve reduced project timelines by 70%, delivering high-quality
          UIs effortlessly.
        </Highlight>{" "}
        Highly recommend it to fellow developers.
      </p>
    ),
  },
  {
    name: "Raj Patel",
    role: "Founder at Startup Studio",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    description: (
      <p>
        As a startup founder, I need tools that help us grow fast without
        sacrificing quality. DebateMate&apos;s stunning debates and simple
        integration have made it an essential part of our workflow.
        <Highlight>Our clients love our modern interfaces.</Highlight>
      </p>
    ),
  },
  {
    name: "Emily Chen",
    role: "Product debateer at Global Systems",
    img: "https://randomuser.me/api/portraits/women/83.jpg",
    description: (
      <p>
        DebateMate&apos;s prebuilt botss have made it so easy to create
        intuitive and compliant debates.
        <Highlight>
          It&apos;s perfect for tackling complex workflows with style.
        </Highlight>{" "}
        A must-have for any product debateer.
      </p>
    ),
  },
  {
    name: "Michael Brown",
    role: "Creative Director at FinTech Innovations",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    description: (
      <p>
        DebateMate&apos;s competitions and debate elements have elevated our fintech
        app&apos;s user experience.
        <Highlight>
          The feedback on our new debate is phenomenal.
        </Highlight>{" "}
        It&apos;s a game-changer for user-centric applications.
      </p>
    ),
  },
  {
    name: "Linda Wu",
    role: "Web Developer at LogiChain Solutions",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    description: (
      <p>
        DebateMate&apos;s bots library has simplified web development for our
        logistics dashboard.
        <Highlight>
          Building custom layouts has never been this efficient.
        </Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Carlos Gomez",
    role: "Digital Marketing Specialist at EcoTech",
    img: "https://randomuser.me/api/portraits/men/14.jpg",
    description: (
      <p>
        DebateMate&apos;s responsive debates have helped us create marketing sites
        that look amazing on every device.
        <Highlight>
          It&apos;s revolutionized how we approach branding online.
        </Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Aisha Khan",
    role: "E-commerce Product Manager at FashionForward",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
    description: (
      <p>
        DebateMate&apos;s beautifully crafted botss have completely
        transformed our fashion storefront.
        <Highlight>
          Customers love the dynamic shopping experience.
        </Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Tom Chen",
    role: "Healthcare App debateer at HealthTech Solutions",
    img: "https://randomuser.me/api/portraits/men/18.jpg",
    description: (
      <p>
        DebateMate has made it easy to create user-friendly, accessible interfaces
        for our healthcare apps.
        <Highlight>
          It&apos;s a crucial part of our debate system.
        </Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Sofia Patel",
    role: "EdTech Founder at EduSafe Innovations",
    img: "https://randomuser.me/api/portraits/women/73.jpg",
    description: (
      <p>
        DebateMate&apos;s education-focused templates have doubled our
        platform&apos;s usability.
        <Highlight>
          It&apos;s tailor-made for addressing student and teacher needs.
        </Highlight>{" "}
      </p>
    ),
  },
];

export function TestimonialMarquee() {
  return (
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
  );
}
