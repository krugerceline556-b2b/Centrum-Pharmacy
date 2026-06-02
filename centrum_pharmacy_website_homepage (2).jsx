import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Baby,
  BadgePlus,
  CheckCircle2,
  Clock,
  Eye,
  HeartPulse,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Pill,
  ShieldCheck,
  Smile,
  Sparkles,
  Smartphone,
  Stethoscope,
  Truck,
  UserRound,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const COLORS = {
  primary: "#2C7A82",
  accent: "#39D10A",
  softBackground: "#f7fffd",
  softPrimary: "#eefcf6",
  softAccent: "#e7fbf0",
  dark: "#0f172a",
};

const contact = {
  address: "Centrum Pharmacy, 53 Market St, Boksburg, 1459",
  phone: "011 917 5888 / 5587",
  mainPhone: "011 917 5888",
  whatsapp: "065 550 0808",
  email: "centrum@centrumpharm.co.za",
  directions:
    "https://www.google.com/maps/search/?api=1&query=Centrum%20Pharmacy%2053%20Market%20St%20Boksburg%201459",
  map:
    "https://maps.google.com/maps?q=Centrum%20Pharmacy%2053%20Market%20St%20Boksburg%201459&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

const hours = [
  ["Monday", "8 am - 9 pm"],
  ["Tuesday", "8 am - 9 pm"],
  ["Wednesday", "8 am - 9 pm"],
  ["Thursday", "8 am - 9 pm"],
  ["Friday", "8 am - 9 pm"],
  ["Saturday", "8 am - 9 pm"],
  ["Sunday", "10 am - 1 pm, 5 pm - 9 pm"],
];

const services = [
  { icon: Pill, title: "Pharmacy", text: "Trusted medicines, over-the-counter treatments, wellness products and clear pharmacist guidance." },
  { icon: Smile, title: "Dental Services", text: "On-site dental services are available at the medical centre by appointment." },
  { icon: UserRound, title: "General Practitioner", text: "Consultations, diagnoses and treatment guidance beyond pharmacy care." },
  { icon: HeartPulse, title: "Women's Clinic", text: "Women’s health and general practitioner services in a supportive environment." },
  { icon: Stethoscope, title: "Clinic Services", text: "Healthcare support delivered by a qualified nursing practitioner during scheduled hours." },
  { icon: Eye, title: "Optometrists", text: "Optometry-related healthcare services in a comfortable medical centre setting." },
];

const shopCategories = [
  { icon: Pill, title: "Over-The-Counter Medicines", text: "Pain relief, cold and flu, allergy medication and everyday remedies." },
  { icon: Sparkles, title: "Vitamins & Supplements", text: "Immune boosters, multivitamins, minerals and energy support." },
  { icon: ShieldCheck, title: "Immunity & Wellness", text: "Products designed to support wellness, immunity and daily energy." },
  { icon: Baby, title: "Personal & Healthcare", text: "Hygiene, skincare, baby care and personal healthcare essentials." },
];

const detailedServices = [
  {
    icon: UserRound,
    title: "General Practitioner Doctor",
    details: ["Practitioner: Dr. Z. Bham", "Telephone: 011 892 4662", "Email: dbzabham@hotmail.co.za", "Monday - Friday: 09:00 - 16:00", "Saturday: 09:00 - 12:00"],
  },
  {
    icon: HeartPulse,
    title: "Women’s Clinic & General Practitioner",
    details: ["Practitioner: Dr. Shekinah", "Telephone: 011 917 8319 / 076 043 9130", "Monday - Saturday: 09:00 - 20:00", "Sunday: 10:00 - 13:00 and 17:00 - 20:00"],
  },
  {
    icon: Stethoscope,
    title: "Clinic Services",
    details: ["Practitioner: Sr. Lebo Malinga", "Telephone: 064 089 2805", "Monday, Wednesday & Thursday: 17:00 - 20:00", "Tuesday & Thursday: 08:00 - 13:00", "First Saturday of the month: 09:00 - 12:00"],
  },
  {
    icon: Smile,
    title: "Dental Services",
    details: ["Professional dental care by appointment", "Qualified dentist available on-site", "Contact the pharmacy for appointment guidance"],
  },
  {
    icon: Activity,
    title: "Quantum BIO Feedback Readings",
    details: ["Practitioner: Dr. Lillian van Aswegen", "WhatsApp for appointments: 083 478 1517", `Location: ${contact.address}`],
  },
];

const pharmacists = ["Adriaan Heunis", "Marian Heunis", "Franco Heunis", "Rolanda Heunis"];

const optometristFeatures = [
  "Professional eye care support services",
  "Comfortable and spacious consultation environment",
  "Conveniently located within the medical centre",
  "Accessible healthcare support for the local community",
];

const dentalFeatures = [
  "Professional dental care by appointment",
  "Comfortable and welcoming treatment room",
  "Convenient location within Centrum Medical Centre",
  "Personalised patient-focused care",
];

const deliveryFeatures = [
  "Fast local deliveries around Boksburg",
  "Free deliveries until 20:00",
  "Convenient WhatsApp ordering support",
  "Safe handling of healthcare products",
];

const gallery = [
  { image: "/mnt/data/IMG_1425-2.jpg", title: "Centrum Pharmacy Team", text: "Our dedicated pharmacy and healthcare support team serving the Boksburg community." },
  { image: "/mnt/data/IMG_1426.jpg", title: "Personal Customer Care", text: "Friendly one-on-one assistance and trusted healthcare guidance." },
  { image: "/mnt/data/IMG_1415.jpg", title: "Professional Pharmacy Support", text: "Experienced staff available to assist with medicines and wellness products." },
  { image: "/mnt/data/IMG_1403.jpg", title: "Helpful & Accessible Service", text: "Compassionate support from the Centrum Pharmacy team whenever you need assistance." },
];

const trustPoints = [
  { icon: Truck, title: "Free delivery", text: "Free deliveries until 20:00" },
  { icon: ShieldCheck, title: "Secure payments", text: "Shop and pay with peace of mind" },
  { icon: Smile, title: "Friendly service", text: "Friendly assistance guaranteed" },
];

function runContentChecks() {
  console.assert(hours.length === 7, "Opening hours should include all seven days.");
  console.assert(services.length === 6, "Homepage should show six core services.");
  console.assert(shopCategories.length === 4, "Shop section should include four categories.");
  console.assert(detailedServices.length >= 5, "Detailed service section should include key services.");
  console.assert(pharmacists.length === 4, "Pharmacist section should include all four pharmacists.");
  console.assert(gallery.length === 4, "Gallery should include all uploaded pharmacy images.");
  console.assert(optometristFeatures.length === 4, "Optometrist feature list should include four items.");
  console.assert(dentalFeatures.length === 4, "Dental feature list should include four items.");
  console.assert(deliveryFeatures.length === 4, "Delivery feature list should include four items.");
  console.assert(trustPoints.length === 3, "Trust points should include delivery, payments and service.");
  console.assert(contact.address.includes("53 Market St"), "Address should use the official Market Street address.");
  console.assert(!JSON.stringify(contact).includes("facebook"), "Facebook should not be included.");
}
runContentChecks();

function phoneHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

function whatsappHref(phone: string) {
  return `https://wa.me/27${phone.replace(/\s/g, "").slice(1)}`;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-bold uppercase tracking-wide" style={{ color: COLORS.primary }}>{children}</p>;
}

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return <Button className="rounded-full px-7 py-6 text-base text-white" style={{ backgroundColor: COLORS.primary }}>{children}</Button>;
}

function FeatureList({ items, icon: Icon }: { items: string[]; icon: React.ElementType }) {
  return (
    <div className="mt-8 grid gap-4">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ backgroundColor: COLORS.primary }}><Icon size={20} /></div>
          <p className="font-medium text-slate-700">{item}</p>
        </div>
      ))}
    </div>
  );
}

function ImageSection({ label, title, text, image, alt, features, icon, reverse = false, soft = false }: { label: string; title: string; text: string; image: string; alt: string; features: string[]; icon: React.ElementType; reverse?: boolean; soft?: boolean }) {
  const imageBlock = <div className="overflow-hidden rounded-[2rem] shadow-xl"><img src={image} alt={alt} className="h-full w-full object-cover" /></div>;
  const textBlock = <div><SectionLabel>{label}</SectionLabel><h2 className="mt-3 text-4xl font-bold text-slate-950">{title}</h2><p className="mt-5 text-lg leading-8 text-slate-700">{text}</p><FeatureList items={features} icon={icon} /></div>;
  return <section className="py-20" style={{ backgroundColor: soft ? COLORS.softBackground : "#ffffff" }}><div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">{reverse ? textBlock : imageBlock}{reverse ? imageBlock : textBlock}</div></section>;
}

function ContactCard() {
  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-3xl border border-white/10"><iframe title="Centrum Pharmacy Map" src={contact.map} width="100%" height="260" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      <div className="flex gap-3"><MapPin className="mt-1" style={{ color: COLORS.accent }} /><p>{contact.address}</p></div>
      <div className="flex gap-3"><Phone className="mt-1" style={{ color: COLORS.accent }} /><p>{contact.phone}</p></div>
      <div className="flex gap-3"><Smartphone className="mt-1" style={{ color: COLORS.accent }} /><p>{contact.whatsapp}</p></div>
      <div className="flex gap-3"><Mail className="mt-1" style={{ color: COLORS.accent }} /><p>{contact.email}</p></div>
      <div className="flex gap-3"><Clock className="mt-1" style={{ color: COLORS.accent }} /><p>Monday to Saturday: 8 am - 9 pm<br />Sunday: 10 am - 1 pm, 5 pm - 9 pm</p></div>
    </div>
  );
}

export default function CentrumPharmacyWebsite() {
  return (
    <div className="min-h-screen text-slate-900" style={{ backgroundColor: COLORS.softBackground }}>
      <header className="sticky top-0 z-50 border-b border-teal-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <img src="/mnt/data/image(5).png" alt="Centrum Pharmacy Logo" className="h-16 w-auto object-contain" />
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#about" style={{ color: COLORS.primary }}>About</a>
            <a href="#services" style={{ color: COLORS.primary }}>Services</a>
            <a href="#shop" style={{ color: COLORS.primary }}>Shop</a>
            <a href="#contact" style={{ color: COLORS.primary }}>Contact</a>
          </nav>
          <a href={phoneHref(contact.mainPhone)}><Button className="rounded-full px-5 text-white" style={{ backgroundColor: COLORS.primary }}>Call Us</Button></a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/mnt/data/download.jpeg"
            alt="Centrum Pharmacy Building"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/65" />
        </div>
        <div className="absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full opacity-30 blur-3xl" style={{ backgroundColor: "#7fe3ec" }} />
        <div className="absolute bottom-[-140px] left-[-120px] h-96 w-96 rounded-full opacity-30 blur-3xl" style={{ backgroundColor: COLORS.accent }} />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm" style={{ color: COLORS.primary }}>You are in luck, we are open</p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-6xl">Professional pharmaceutical care you can trust.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">At Centrum Pharmacy, we’re here for you with reliable, high-quality medicines, trusted healthcare products, and genuinely helpful care. You’re never just a customer; you’re someone we care about.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={phoneHref(contact.mainPhone)}><PrimaryButton><Phone className="mr-2" size={18} /> {contact.mainPhone}</PrimaryButton></a>
              <a href={contact.directions} target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-full px-7 py-6 text-base hover:bg-teal-50" style={{ borderColor: COLORS.primary, color: COLORS.primary }}><Navigation className="mr-2" size={18} /> Get Directions</Button></a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <Card className="rounded-[2rem] border-0 bg-white/95 shadow-xl"><CardContent className="p-7">
              <div className="rounded-[1.5rem] p-6" style={{ backgroundColor: COLORS.softPrimary }}>
                <p className="mb-3 text-sm font-bold uppercase tracking-wide" style={{ color: COLORS.primary }}>Visit us</p>
                <div className="space-y-4 text-slate-700">
                  <div className="flex gap-3"><MapPin className="mt-1" style={{ color: COLORS.primary }} size={20} /><p>{contact.address}</p></div>
                  <div className="flex gap-3"><Phone className="mt-1" style={{ color: COLORS.primary }} size={20} /><p>{contact.phone}</p></div>
                  <div className="flex gap-3"><Smartphone className="mt-1" style={{ color: COLORS.primary }} size={20} /><p>WhatsApp: {contact.whatsapp}</p></div>
                  <div className="flex gap-3"><Mail className="mt-1" style={{ color: COLORS.primary }} size={20} /><p>{contact.email}</p></div>
                </div>
              </div>
              <div className="mt-6"><p className="mb-3 font-semibold text-slate-900">Opening hours</p><div className="space-y-2">{hours.map(([day, time]) => <div key={day} className="flex justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm"><span className="font-medium text-slate-700">{day}</span><span className="text-slate-600">{time}</span></div>)}</div></div>
            </CardContent></Card>
          </motion.div>
        </div>
      </section>

      <section id="about" className="bg-white py-20"><div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.85fr_1.15fr]"><div><SectionLabel>More About Centrum Pharmacy</SectionLabel><h2 className="mt-3 text-4xl font-bold text-slate-950">Committed to your health and wellbeing.</h2></div><div className="space-y-5 text-lg leading-8 text-slate-700"><p>Your friendly local pharmacy, here for you, heart and soul. At Centrum Pharmacy, we’re not just any pharmacy. We’re your neighbours right here in Boksburg, proudly standing at 53 Market Street.</p><p>What really matters to us is giving you the kind of personal care that feels like a warm chat rather than a quick transaction. Our pharmacists take the time to listen, explain medication in plain language, answer questions, and offer advice that fits into your life.</p><p>We’ve created a welcoming, safe space where you can pop in for a quick hello or browse online from the comfort of home. No matter how you visit us, you’ll find genuine smiles, thoughtful guidance, and a team that truly cares.</p></div></div></section>

      <section id="services" className="py-20" style={{ backgroundColor: COLORS.softBackground }}><div className="mx-auto max-w-7xl px-6"><div className="mb-10 max-w-3xl"><SectionLabel>Learn More About Our Services</SectionLabel><h2 className="mt-3 text-4xl font-bold text-slate-950">Healthcare services designed around support, safety, and convenience.</h2><p className="mt-5 text-lg leading-8 text-slate-700">Centrum Pharmacy offers a wide range of professional pharmacy and medical centre services designed to support your health, convenience, and peace of mind.</p></div><div className="grid gap-6 md:grid-cols-3">{services.map((service) => { const Icon = service.icon; return <Card key={service.title} className="rounded-3xl border-0 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><CardContent className="p-6"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: COLORS.softAccent, color: COLORS.primary }}><Icon size={24} /></div><h3 className="mb-3 text-xl font-bold text-slate-950">{service.title}</h3><p className="leading-7 text-slate-600">{service.text}</p></CardContent></Card>; })}</div></div></section>

      <section id="shop" className="bg-white py-20"><div className="mx-auto max-w-7xl px-6"><div className="grid items-center gap-10 md:grid-cols-2"><div><SectionLabel>How It Works</SectionLabel><h2 className="mt-3 text-4xl font-bold text-slate-950">Simple, safe and convenient healthcare.</h2><p className="mt-5 text-lg leading-8 text-slate-700">Our secure platform makes ordering healthcare products hassle-free. Browse trusted medications and wellness items, then choose online delivery or in-store pickup.</p></div><div className="grid gap-4">{["Browse and select products", "Secure checkout", "Collect or delivery"].map((title, index) => <div key={title} className="flex gap-4 rounded-3xl bg-slate-50 p-5"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white" style={{ backgroundColor: COLORS.primary }}>{index + 1}</div><div><h3 className="font-bold uppercase tracking-wide text-slate-950">{title}</h3><p className="mt-1 text-slate-600">{index === 0 ? "Explore the online store or visit the pharmacy to find what you need." : index === 1 ? "Complete your purchase through a clear, secure checkout process." : "Choose in-store collection or convenient delivery."}</p></div></div>)}</div></div><div className="mt-14 grid gap-6 md:grid-cols-4">{shopCategories.map((category) => { const Icon = category.icon; return <Card key={category.title} className="rounded-3xl border-0 shadow-sm"><CardContent className="p-6"><Icon className="mb-4" style={{ color: COLORS.primary }} /><h3 className="mb-2 text-lg font-bold text-slate-950">{category.title}</h3><p className="text-sm leading-6 text-slate-600">{category.text}</p></CardContent></Card>; })}</div><div className="mt-12 rounded-[2rem] p-8 text-white" style={{ backgroundColor: COLORS.primary }}><div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center"><div><h3 className="text-3xl font-bold">Pharmacist-Advised Prepack Treatments</h3><p className="mt-4 leading-8 text-teal-50">Our experienced pharmacists have carefully combined trusted treatments into convenient prepackaged solutions designed to support common health needs.</p></div><a href={whatsappHref(contact.whatsapp)} target="_blank" rel="noreferrer"><Button className="rounded-full bg-white px-7 py-6 text-base" style={{ color: COLORS.primary }}><MessageCircle className="mr-2" size={18} /> Speak to a Pharmacist Today</Button></a></div></div></div></section>

      <section className="py-20" style={{ backgroundColor: COLORS.softBackground }}><div className="mx-auto max-w-7xl px-6"><div className="mb-10 max-w-3xl"><SectionLabel>Detailed Services</SectionLabel><h2 className="mt-3 text-4xl font-bold text-slate-950">Appointments and visiting information.</h2><p className="mt-5 text-lg leading-8 text-slate-700">Some services operate by appointment, while others welcome walk-in patients during operating hours.</p></div><div className="grid gap-6 md:grid-cols-2">{detailedServices.map((service) => { const Icon = service.icon; return <Card key={service.title} className="rounded-3xl border-0 bg-white shadow-sm"><CardContent className="p-7"><div className="mb-5 flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: COLORS.softAccent, color: COLORS.primary }}><Icon size={24} /></div><h3 className="text-xl font-bold text-slate-950">{service.title}</h3></div><div className="space-y-2">{service.details.map((detail) => <div key={detail} className="flex gap-2 text-sm text-slate-700"><CheckCircle2 size={16} style={{ color: COLORS.primary }} className="mt-0.5 shrink-0" /><span>{detail}</span></div>)}</div></CardContent></Card>; })}</div></div></section>

      <section className="py-20" style={{ backgroundColor: COLORS.softBackground }}><div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.95fr_1.05fr] md:items-center"><div className="overflow-hidden rounded-[2rem] bg-white shadow-xl"><img src="/mnt/data/ChatGPT Image May 28, 2026, 04_24_26 PM.png" alt="Dr. Z. Bham" className="h-full w-full object-cover" /></div><div><SectionLabel>General Practitioner</SectionLabel><h2 className="mt-3 text-4xl font-bold text-slate-950">Professional medical consultations and healthcare guidance.</h2><p className="mt-5 text-lg leading-8 text-slate-700">General practitioner services are available at Centrum Medical Centre to assist with consultations, diagnoses, treatment plans and ongoing healthcare support.</p><Card className="mt-8 rounded-3xl border-0 bg-white shadow-sm"><CardContent className="p-6"><h3 className="text-2xl font-bold text-slate-950">Dr. Z. Bham</h3><p className="text-slate-600">General Practitioner</p><div className="mt-6 grid gap-3 text-slate-700"><div className="flex items-center gap-3"><Phone size={18} style={{ color: COLORS.primary }} /><span>011 892 4662</span></div><div className="flex items-center gap-3"><Mail size={18} style={{ color: COLORS.primary }} /><span>dbzabham@hotmail.co.za</span></div><div className="flex items-center gap-3"><Clock size={18} style={{ color: COLORS.primary }} /><span>Monday - Friday: 09:00 - 16:00 | Saturday: 09:00 - 12:00</span></div></div></CardContent></Card></div></div></section>

      <section className="bg-white py-20"><div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center"><div><SectionLabel>Clinic Services</SectionLabel><h2 className="mt-3 text-4xl font-bold text-slate-950">Compassionate healthcare support for everyday patient care.</h2><p className="mt-5 text-lg leading-8 text-slate-700">The clinic provides healthcare support services in a welcoming and professional environment.</p><Card className="mt-8 rounded-3xl border-0 bg-slate-50 shadow-sm"><CardContent className="p-6"><h3 className="text-2xl font-bold text-slate-950">Sr. Lebo Malinga</h3><p className="text-slate-600">Clinic Practitioner</p><div className="mt-6 grid gap-3 text-slate-700"><div className="flex items-center gap-3"><Phone size={18} style={{ color: COLORS.primary }} /><span>064 089 2805</span></div><div className="flex items-center gap-3"><Clock size={18} style={{ color: COLORS.primary }} /><span>Monday, Wednesday & Thursday: 17:00 - 20:00</span></div><div className="flex items-center gap-3"><Clock size={18} style={{ color: COLORS.primary }} /><span>Tuesday & Thursday: 08:00 - 13:00 | First Saturday: 09:00 - 12:00</span></div></div></CardContent></Card></div><div className="overflow-hidden rounded-[2rem] bg-white shadow-xl"><img src="/mnt/data/ChatGPT Image May 28, 2026, 04_28_13 PM.png" alt="Sr. Lebo Malinga" className="h-full w-full object-cover" /></div></div></section>

      <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-6"><div className="mb-10 max-w-3xl"><SectionLabel>Meet Our Pharmacists</SectionLabel><h2 className="mt-3 text-4xl font-bold text-slate-950">Trusted care from a family-focused pharmacy team.</h2><p className="mt-5 text-lg leading-8 text-slate-700">The Centrum Pharmacy team is passionate about helping the Boksburg community with trusted healthcare advice.</p></div><div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center"><div className="overflow-hidden rounded-[2rem] shadow-xl"><img src="/mnt/data/IMG_1436-2.jpg" alt="Centrum Pharmacy Pharmacists" className="h-full w-full object-cover" /></div><div className="grid gap-5">{pharmacists.map((name) => <Card key={name} className="rounded-3xl border-0 bg-slate-50 shadow-sm"><CardContent className="flex items-center gap-4 p-6"><div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: COLORS.primary }}><BadgePlus size={26} /></div><div><h3 className="text-xl font-bold text-slate-950">{name}</h3><p className="text-slate-600">Pharmacist</p></div></CardContent></Card>)}</div></div></div></section>

      <ImageSection label="Optometrist Services" title="Convenient eye care support within the medical centre." text="Centrum Medical Centre also provides access to optometry-related healthcare services in a professional and welcoming environment." image="/mnt/data/IMG_1448.jpg" alt="Centrum Pharmacy Optometrist" features={optometristFeatures} icon={Eye} />
      <ImageSection label="Dental Services" title="Professional dental care in a calm and welcoming environment." text="Centrum Medical Centre offers professional dental services within a clean, comfortable, and patient-friendly treatment space." image="/mnt/data/IMG_2303(1).jpg" alt="Centrum Pharmacy Dental Room" features={dentalFeatures} icon={Smile} />
      <ImageSection label="Delivery Services" title="Convenient pharmacy deliveries when you need them most." text="Centrum Pharmacy offers reliable local delivery services to make healthcare easier and more convenient for the community." image="/mnt/data/IMG_1409.jpg" alt="Centrum Pharmacy Delivery Vehicle" features={deliveryFeatures} icon={Truck} reverse soft />

      <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-6"><div className="mb-10 max-w-3xl"><SectionLabel>Inside Centrum Pharmacy</SectionLabel><h2 className="mt-3 text-4xl font-bold text-slate-950">Friendly faces, trusted care, and a welcoming environment.</h2><p className="mt-5 text-lg leading-8 text-slate-700">Our team is committed to creating a professional and supportive healthcare experience.</p></div><div className="grid gap-6 md:grid-cols-2">{gallery.map((item) => <Card key={item.title} className="overflow-hidden rounded-[2rem] border-0 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="aspect-[4/3] overflow-hidden"><img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" /></div><CardContent className="p-6"><h3 className="text-2xl font-bold text-slate-950">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.text}</p></CardContent></Card>)}</div></div></section>

      <section className="bg-white py-16"><div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">{trustPoints.map((point) => { const Icon = point.icon; return <Card key={point.title} className="rounded-3xl border-0 shadow-sm"><CardContent className="flex items-center gap-4 p-6"><div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: COLORS.softAccent, color: COLORS.primary }}><Icon size={24} /></div><div><h3 className="font-bold uppercase tracking-wide text-slate-950">{point.title}</h3><p className="text-slate-600">{point.text}</p></div></CardContent></Card>; })}</div></section>

      <section id="contact" className="py-20 text-white" style={{ backgroundColor: COLORS.dark }}><div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1fr_0.9fr]"><div><p className="text-sm font-bold uppercase tracking-wide" style={{ color: COLORS.accent }}>Contact us</p><h2 className="mt-3 text-4xl font-bold">Need help? We are here for you.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Visit Centrum Pharmacy at 53 Market Street, Boksburg, 1459, or contact the team for assistance.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={phoneHref(contact.mainPhone)}><PrimaryButton><Phone className="mr-2" size={18} /> {contact.mainPhone}</PrimaryButton></a><a href={whatsappHref(contact.whatsapp)} target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-full border-white/30 px-7 py-6 text-base text-white hover:bg-white/10"><MessageCircle className="mr-2" size={18} /> WhatsApp Us</Button></a></div></div><div className="rounded-[2rem] bg-white/10 p-7"><ContactCard /></div></div></section>
    </div>
  );
}
