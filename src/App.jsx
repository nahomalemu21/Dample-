import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Phone,
  MapPin,
  Smile,
  ShieldCheck,
  Sparkles,
  Star,
  Clock,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  HeartPulse,
  Stethoscope,
  ScanFace,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";

const clinic = {
  name: "PearlCare Dental Studio",
  tagline: {
    en: "Confident smiles. Calm visits. Modern dental care.",
    am: "እምነት የሚሰጥ ፈገግታ፣ ምቹ ቀጠሮ፣ ዘመናዊ የጥርስ ህክምና።",
  },
  phone: "+251 911 000 000",
  whatsapp: "+251911000000",
  email: "hello@pearlcaredental.com",
  address: "Bole, Addis Ababa, Ethiopia",
  hours: "Mon–Sat: 8:30 AM – 7:00 PM",
};

const ui = {
  en: {
    demoLabel: "Dental Clinic Demo",
    nav: { services: "Services", why: "Why Us", doctors: "Doctors", gallery: "Gallery", pricing: "Pricing", faq: "FAQ" },
    call: "Call",
    book: "Book Appointment",
    bookVisit: "Book a Dental Visit",
    explore: "Explore Services",
    learn: "Learn more",
    heroBadge: "Modern dental care website concept",
    heroTitle: "A dental website that makes patients trust before they call.",
    heroDesc: "Built to turn visitors into booked appointments through trust, clarity, service education, and strong call-to-action flow.",
    nextSlot: "Next available slot",
    todaySlot: "Today, 4:30 PM",
    quickServices: ["Checkup", "Cleaning", "Emergency"],
    stats: [["12k+", "Smiles treated"], ["4.9/5", "Patient rating"], ["15+", "Dental services"], ["7 days", "Follow-up care"]],
    trustCards: [["Same-week booking", "Fast appointment requests"], ["Sterile & safe", "Clear patient confidence"], ["Premium experience", "Feels high-value online"]],
    servicesEyebrow: "Services",
    servicesTitle: "Complete dental care under one roof",
    servicesDesc: "A proper clinic site should show a wider range of dental services so patients instantly know the clinic is serious.",
    whyEyebrow: "Why Patients Choose Us",
    whyTitle: "Built around comfort, trust, and clear communication",
    whyDesc: "Dental clinics sell trust first. This section makes the clinic feel safe before the patient even enters the building.",
    whyPoints: ["Clear diagnosis and treatment explanation before every procedure", "Clean, modern, sterilized environment with patient-first care", "WhatsApp-friendly booking flow for local markets", "Service pages that educate patients and reduce hesitation"],
    doctorsEyebrow: "Our Doctors",
    doctorsTitle: "Meet the dental team",
    doctorsDesc: "Show the people behind the clinic. This builds trust fast and makes the clinic feel real.",
    galleryEyebrow: "Gallery",
    galleryTitle: "A clinic page should visually prove quality",
    galleryDesc: "Use real clinic photos later: reception, doctor, treatment room, sterilization, equipment, smile results, and team photos.",
    pricingEyebrow: "Popular Treatments",
    pricingTitle: "Transparent starting points help patients act faster",
    pricingDesc: "Exact prices can be hidden or customized, but showing starting prices makes the clinic feel honest and organized.",
    popular: "Most booked",
    requestAppointment: "Request Appointment",
    reviewsEyebrow: "Patient Reviews",
    reviewsTitle: "Social proof that makes the clinic feel real",
    reviewsDesc: "Reviews, doctor credentials, and real patient stories are one of the strongest conversion sections for dental clinics.",
    faqEyebrow: "FAQ",
    faqTitle: "Answer fears before patients ask.",
    faqDesc: "A strong FAQ helps reduce WhatsApp back-and-forth and improves trust before the first visit.",
    bookNow: "Book Now",
    finalTitle: "Ready to make your smile healthier?",
    finalDesc: "Call, WhatsApp, or request an appointment. This CTA can connect directly to the clinic’s booking team.",
    whatsappUs: "WhatsApp Us",
    callClinic: "Call Clinic",
    formTitle: "Request an appointment",
    formName: "Full name",
    formPhone: "Phone number",
    formSelect: "Select service",
    formMessage: "Tell us what you need",
    submit: "Submit Request",
    footer: "Demo website built to show dental clinic clients what is possible.",
  },
  am: {
    demoLabel: "የጥርስ ክሊኒክ ድህረገጽ ምሳሌ",
    nav: { services: "አገልግሎቶች", why: "ለምን እኛ", doctors: "ዶክተሮች", gallery: "ጋለሪ", pricing: "ዋጋ", faq: "ጥያቄዎች" },
    call: "ይደውሉ",
    book: "ቀጠሮ ይያዙ",
    bookVisit: "የጥርስ ቀጠሮ ይያዙ",
    explore: "አገልግሎቶችን ይመልከቱ",
    learn: "ተጨማሪ ይመልከቱ",
    heroBadge: "ዘመናዊ የጥርስ ክሊኒክ ድህረገጽ ምሳሌ",
    heroTitle: "ታካሚዎች ከመደወላቸው በፊት እምነት የሚፈጥር ድህረገጽ።",
    heroDesc: "በእምነት፣ በግልጽ መረጃ፣ በአገልግሎት ማብራሪያ እና በቀጠሮ ጥሪ ጎብኚዎችን ወደ ታካሚ ለመቀየር የተሰራ።",
    nextSlot: "ቀጣይ የቀጠሮ ሰዓት",
    todaySlot: "ዛሬ፣ 4:30 PM",
    quickServices: ["ምርመራ", "ጽዳት", "አስቸኳይ"],
    stats: [["12k+", "የታከሙ ፈገግታዎች"], ["4.9/5", "የታካሚ ደረጃ"], ["15+", "የጥርስ አገልግሎቶች"], ["7 ቀን", "የክትትል እንክብካቤ"]],
    trustCards: [["በዚህ ሳምንት ቀጠሮ", "ፈጣን የቀጠሮ ጥያቄ"], ["ንጹህ እና ደህንነቱ የተጠበቀ", "የታካሚ እምነት"], ["ፕሪሚየም ተሞክሮ", "ከፍተኛ ዋጋ ያለው ስሜት"]],
    servicesEyebrow: "አገልግሎቶች",
    servicesTitle: "ሙሉ የጥርስ ህክምና በአንድ ቦታ",
    servicesDesc: "የጥርስ ክሊኒኩ ብዙ አገልግሎቶችን በግልጽ መንገድ ማሳየት አለበት።",
    whyEyebrow: "ለምን ታካሚዎች ይመርጡናል",
    whyTitle: "በምቾት፣ በእምነት እና በግልጽ መግባባት የተገነባ",
    whyDesc: "የጥርስ ክሊኒክ በመጀመሪያ እምነትን ይሸጣል። ይህ ክፍል ታካሚው ከመምጣቱ በፊት ደህንነት እንዲሰማው ይረዳል።",
    whyPoints: ["ከሕክምና በፊት ግልጽ ምርመራ እና ማብራሪያ", "ንጹህ፣ ዘመናዊ እና ታካሚን የሚያስቀድም አካባቢ", "ለአካባቢው ገበያ የሚስማማ የWhatsApp ቀጠሮ ሂደት", "ታካሚዎችን የሚያስተምሩ እና ጥርጣሬን የሚቀንሱ የአገልግሎት ገጾች"],
    doctorsEyebrow: "ዶክተሮቻችን",
    doctorsTitle: "የህክምና ቡድናችንን ይወቁ",
    doctorsDesc: "የክሊኒኩን ዶክተሮች ማሳየት እምነት ይፈጥራል እና ክሊኒኩን እውነተኛ ያደርገዋል።",
    galleryEyebrow: "ጋለሪ",
    galleryTitle: "የክሊኒኩ ጥራት በምስል መታየት አለበት",
    galleryDesc: "በኋላ እውነተኛ የክሊኒክ ፎቶዎችን፣ ዶክተሮችን፣ የሕክምና ክፍሎችን እና የቡድን ፎቶዎችን መጠቀም ይቻላል።",
    pricingEyebrow: "ታዋቂ ሕክምናዎች",
    pricingTitle: "ግልጽ የመጀመሪያ ዋጋ ታካሚዎችን በፍጥነት ያንቀሳቅሳል",
    pricingDesc: "ትክክለኛ ዋጋዎች ሊቀየሩ ይችላሉ፣ ግን የመጀመሪያ ዋጋ ማሳየት ክሊኒኩን እምነት የሚሰጥ ያደርገዋል።",
    popular: "በብዛት የሚያዝ",
    requestAppointment: "ቀጠሮ ይጠይቁ",
    reviewsEyebrow: "የታካሚዎች አስተያየት",
    reviewsTitle: "ክሊኒኩን እውነተኛ የሚያደርግ ማስረጃ",
    reviewsDesc: "አስተያየቶች፣ የዶክተሮች ብቃት እና የታካሚ ታሪኮች ለጥርስ ክሊኒክ ድህረገጽ በጣም ጠንካራ ክፍሎች ናቸው።",
    faqEyebrow: "ጥያቄዎች",
    faqTitle: "ታካሚዎች ከመጠየቃቸው በፊት ፍርሃታቸውን መልሱ።",
    faqDesc: "ጠንካራ FAQ የWhatsApp ጥያቄዎችን ይቀንሳል እና ከመጀመሪያ ቀጠሮ በፊት እምነትን ይጨምራል።",
    bookNow: "አሁን ቀጠሮ ይያዙ",
    finalTitle: "ፈገግታዎን ጤናማ ለማድረግ ዝግጁ ነዎት?",
    finalDesc: "ይደውሉ፣ WhatsApp ይላኩ፣ ወይም ቀጠሮ ይጠይቁ። ይህ ክፍል በቀጥታ ከክሊኒኩ ቡድን ጋር ሊያገናኝ ይችላል።",
    whatsappUs: "WhatsApp ይላኩ",
    callClinic: "ክሊኒኩን ይደውሉ",
    formTitle: "ቀጠሮ ይጠይቁ",
    formName: "ሙሉ ስም",
    formPhone: "ስልክ ቁጥር",
    formSelect: "አገልግሎት ይምረጡ",
    formMessage: "ምን እንደሚፈልጉ ይጻፉ",
    submit: "ጥያቄ ይላኩ",
    footer: "ለጥርስ ክሊኒክ ደንበኞች የሚቻለውን ለማሳየት የተሰራ ምሳሌ ድህረገጽ።",
  },
};

const services = {
  en: [
    { icon: Smile, title: "General Dentistry", desc: "Checkups, fillings, cleaning, tooth pain treatment, and routine oral care for the whole family." },
    { icon: Sparkles, title: "Teeth Whitening", desc: "Safe in-clinic whitening designed to brighten your smile without damaging your enamel." },
    { icon: ShieldCheck, title: "Dental Implants", desc: "Permanent tooth replacement planning, implant restoration, and full smile rehabilitation." },
    { icon: ScanFace, title: "Clear Aligners", desc: "Modern teeth straightening with transparent aligners and digital progress tracking." },
    { icon: HeartPulse, title: "Emergency Care", desc: "Fast help for toothache, broken teeth, swelling, bleeding, or urgent dental problems." },
    { icon: Stethoscope, title: "Pediatric Dentistry", desc: "Gentle dental visits for children with a calm, friendly, and fear-free approach." },
    { icon: BadgeCheck, title: "Braces & Orthodontics", desc: "Traditional braces and bite correction treatment for teens and adults." },
    { icon: ShieldCheck, title: "Root Canal Treatment", desc: "Tooth-saving treatment for infected or badly damaged teeth." },
    { icon: Sparkles, title: "Veneers & Smile Design", desc: "Cosmetic smile enhancement for shape, color, and overall confidence." },
    { icon: Smile, title: "Crowns & Bridges", desc: "Strong restorations for broken, weak, or missing teeth." },
    { icon: HeartPulse, title: "Tooth Extraction", desc: "Safe simple and surgical extraction when a tooth cannot be saved." },
    { icon: ScanFace, title: "Dental X-Ray & Diagnosis", desc: "Modern imaging and precise diagnosis for better treatment planning." },
  ],
  am: [
    { icon: Smile, title: "አጠቃላይ የጥርስ ህክምና", desc: "ምርመራ፣ መሙላት፣ ጽዳት፣ የጥርስ ህመም ሕክምና እና መደበኛ እንክብካቤ።" },
    { icon: Sparkles, title: "ጥርስ ነጭ ማድረግ", desc: "ኤናሜልን ሳይጎዳ ፈጣን እና ደህንነቱ የተጠበቀ የጥርስ ነጭ ማድረጊያ።" },
    { icon: ShieldCheck, title: "የጥርስ ኢምፕላንት", desc: "የጠፉ ጥርሶችን ለመተካት ዘላቂ መፍትሄ።" },
    { icon: ScanFace, title: "ግልጽ አላይነር", desc: "በግልጽ አላይነር ጥርስ ማስተካከል እና ዲጂታል ክትትል።" },
    { icon: HeartPulse, title: "አስቸኳይ ህክምና", desc: "የጥርስ ህመም፣ ስብራት፣ እብጠት ወይም ደም መፍሰስ ላይ ፈጣን እርዳታ።" },
    { icon: Stethoscope, title: "የህጻናት የጥርስ ህክምና", desc: "ለህጻናት ለስላሳ እና ወዳጃዊ እንክብካቤ።" },
    { icon: BadgeCheck, title: "ብሬስ እና ኦርቶዶንቲክስ", desc: "ለወጣቶች እና ለአዋቂዎች የጥርስ አቀማመጥ ማስተካከያ።" },
    { icon: ShieldCheck, title: "ሩት ካናል", desc: "በበሽታ ወይም በጉዳት የተጎዳ ጥርስን ለማዳን ሕክምና።" },
    { icon: Sparkles, title: "ቪኒር እና ስማይል ዲዛይን", desc: "ለተሻለ መልክ እና እምነት የሚረዱ የኮስሜቲክ ሕክምናዎች።" },
    { icon: Smile, title: "ክራውን እና ብሪጅ", desc: "ለተሰበሩ ወይም ለጠፉ ጥርሶች ጠንካራ መፍትሄ።" },
    { icon: HeartPulse, title: "የጥርስ ማውጣት", desc: "ማዳን የማይቻል ጥርስ ሲሆን በደህና ማውጣት።" },
    { icon: ScanFace, title: "ኤክስሬይ እና ምርመራ", desc: "ዘመናዊ ምስል ምርመራ እና ትክክለኛ የህክምና እቅድ።" },
  ],
};

const doctors = {
  en: [
    { name: "Dr. Hana Bekele", role: "General Dentist", exp: "8+ years experience", bio: "Focused on family dental care, preventive treatment, and patient comfort.", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80" },
    { name: "Dr. Samuel Tadesse", role: "Orthodontist", exp: "10+ years experience", bio: "Specialist in braces, aligners, and bite correction for teens and adults.", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80" },
    { name: "Dr. Meron Desta", role: "Cosmetic & Implant Dentist", exp: "7+ years experience", bio: "Handles smile makeovers, veneers, whitening, and implant restoration.", image: "https://images.unsplash.com/photo-1594824388853-d0c3f58d9b64?auto=format&fit=crop&w=900&q=80" },
  ],
  am: [
    { name: "ዶ/ር ሀና በቀለ", role: "አጠቃላይ የጥርስ ሐኪም", exp: "8+ ዓመት ልምድ", bio: "በቤተሰብ የጥርስ እንክብካቤ፣ መከላከያ ሕክምና እና የታካሚ ምቾት ላይ ትኩረት አላት።", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80" },
    { name: "ዶ/ር ሳሙኤል ታደሰ", role: "ኦርቶዶንቲስት", exp: "10+ ዓመት ልምድ", bio: "በብሬስ፣ አላይነር እና የንክሻ ማስተካከያ ሕክምና የተለየ ልምድ አለው።", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80" },
    { name: "ዶ/ር መሮን ደስታ", role: "የኮስሜቲክ እና ኢምፕላንት ዶክተር", exp: "7+ ዓመት ልምድ", bio: "በስማይል ሜክኦቨር፣ ቪኒር፣ ነጭ ማድረግ እና ኢምፕላንት ሕክምና ላይ ትሰራለች።", image: "https://images.unsplash.com/photo-1594824388853-d0c3f58d9b64?auto=format&fit=crop&w=900&q=80" },
  ],
};

const testimonials = {
  en: [
    { name: "Miriam T.", text: "The clinic feels premium but warm. They explained everything clearly and the cleaning was painless." },
    { name: "Samuel B.", text: "I came in with tooth pain and left with a clear treatment plan. Very professional team." },
    { name: "Lina K.", text: "Best dental experience I’ve had. The booking was easy and the doctor was calm and confident." },
  ],
  am: [
    { name: "ሚሪያም ቲ.", text: "ክሊኒኩ ፕሪሚየም ነው ግን ምቹ ነው። ሁሉንም ነገር በግልጽ አስረዱኝ።" },
    { name: "ሳሙኤል ቢ.", text: "በጥርስ ህመም መጣሁ፣ ግልጽ የሕክምና እቅድ አግኝቼ ወጣሁ።" },
    { name: "ሊና ኬ.", text: "ያጋጠመኝ ምርጥ የጥርስ ህክምና ተሞክሮ ነበር። ቀጠሮ መያዝም ቀላል ነበር።" },
  ],
};

const pricing = {
  en: [
    { title: "Smile Checkup", price: "From 900 ETB", features: ["Doctor consultation", "Oral exam", "Treatment recommendation", "Digital record"] },
    { title: "Clean & Polish", price: "From 2,500 ETB", features: ["Scaling", "Polishing", "Gum health check", "After-care guide"], popular: true },
    { title: "Smile Makeover Plan", price: "Custom Quote", features: ["Whitening/veneers plan", "Digital smile review", "Timeline & budget", "Priority booking"] },
  ],
  am: [
    { title: "የፈገግታ ምርመራ", price: "ከ900 ETB ጀምሮ", features: ["የዶክተር ምክር", "የአፍ ምርመራ", "የሕክምና ምክር", "ዲጂታል መዝገብ"] },
    { title: "ጽዳት እና ፖሊሽ", price: "ከ2,500 ETB ጀምሮ", features: ["ስኬሊንግ", "ፖሊሽ", "የድድ ጤና ምርመራ", "የኋላ እንክብካቤ መመሪያ"], popular: true },
    { title: "የፈገግታ ሜክኦቨር እቅድ", price: "በጥያቄ መሰረት", features: ["ነጭ ማድረግ/ቪኒር እቅድ", "ዲጂታል የፈገግታ ግምገማ", "ጊዜ እና በጀት", "ቅድሚያ ቀጠሮ"] },
  ],
};

const faqs = {
  en: [
    { q: "Do you accept emergency appointments?", a: "Yes. Patients with pain, swelling, broken teeth, or bleeding can request urgent availability through WhatsApp or phone." },
    { q: "Do you treat children?", a: "Yes. The clinic provides gentle pediatric dental care, preventive checkups, cleaning, and cavity treatment for children." },
    { q: "Is teeth whitening safe?", a: "Professional whitening is safe when done after a dental check and with proper enamel protection." },
    { q: "Can I book online?", a: "Yes. Patients can request an appointment through the website form, WhatsApp, or direct phone call." },
  ],
  am: [
    { q: "አስቸኳይ ቀጠሮ ትቀበላላችሁ?", a: "አዎ። ህመም፣ እብጠት፣ የተሰበረ ጥርስ ወይም ደም መፍሰስ ያላቸው ታካሚዎች በWhatsApp ወይም በስልክ አስቸኳይ ቀጠሮ መጠየቅ ይችላሉ።" },
    { q: "ህጻናትን ታክማላችሁ?", a: "አዎ። ክሊኒኩ ለህጻናት ለስላሳ የጥርስ ሕክምና፣ መከላከያ ምርመራ፣ ጽዳት እና የቀዳዳ ሕክምና ይሰጣል።" },
    { q: "ጥርስ ነጭ ማድረግ ደህና ነው?", a: "በዶክተር ምርመራ እና በትክክለኛ የኤናሜል ጥበቃ ሲደረግ ደህንነቱ የተጠበቀ ነው።" },
    { q: "በመስመር ላይ ቀጠሮ መያዝ እችላለሁ?", a: "አዎ። ታካሚዎች በድህረገጽ ፎርም፣ በWhatsApp ወይም በቀጥታ ስልክ ቀጠሮ መጠየቅ ይችላሉ።" },
  ],
};

function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300";
  const variants = {
    primary: "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 hover:bg-cyan-400 hover:shadow-cyan-400/35",
    dark: "bg-slate-950 text-white hover:bg-slate-800",
    ghost: "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20",
    light: "bg-white text-slate-950 hover:bg-slate-100",
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</button>;
}

function SectionTitle({ eyebrow, title, desc, light = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`mb-3 text-sm font-bold uppercase tracking-[0.25em] ${light ? "text-cyan-300" : "text-cyan-600"}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-black tracking-tight sm:text-5xl ${light ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {desc && <p className={`mt-5 text-base leading-8 ${light ? "text-slate-300" : "text-slate-600"}`}>{desc}</p>}
    </div>
  );
}

export default function DentalClinicDemo() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const t = ui[lang];

  const navItems = [
    { id: "services", label: t.nav.services },
    { id: "why-us", label: t.nav.why },
    { id: "doctors", label: t.nav.doctors },
    { id: "gallery", label: t.nav.gallery },
    { id: "pricing", label: t.nav.pricing },
    { id: "faq", label: t.nav.faq },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-900">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 shadow-lg shadow-cyan-500/20"><Smile className="h-6 w-6 text-slate-950" /></div>
            <div><p className="text-lg font-black tracking-tight text-white">{clinic.name}</p><p className="text-xs font-medium text-slate-400">{t.demoLabel}</p></div>
          </div>
          <nav className="hidden items-center gap-6 lg:flex">{navItems.map((item) => <button key={item.id} onClick={() => scrollTo(item.id)} className="text-sm font-semibold text-slate-300 hover:text-cyan-300">{item.label}</button>)}</nav>
          <div className="hidden items-center gap-3 lg:flex">
            <div className="rounded-full border border-white/10 bg-white/5 p-1">
              <button onClick={() => setLang("en")} className={`rounded-full px-3 py-2 text-xs font-bold ${lang === "en" ? "bg-cyan-400 text-slate-950" : "text-white"}`}>EN</button>
              <button onClick={() => setLang("am")} className={`rounded-full px-3 py-2 text-xs font-bold ${lang === "am" ? "bg-cyan-400 text-slate-950" : "text-white"}`}>አማ</button>
            </div>
            <a href={`tel:${clinic.phone}`}><Button variant="ghost"><Phone className="h-4 w-4" /> {t.call}</Button></a>
            <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noreferrer"><Button>{t.book} <ArrowRight className="h-4 w-4" /></Button></a>
          </div>
          <button className="rounded-xl border border-white/10 p-2 text-white lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
        </div>
        {mobileOpen && <div className="border-t border-white/10 bg-slate-950 px-5 py-5 lg:hidden"><div className="grid gap-4"><div className="flex w-fit rounded-full border border-white/10 bg-white/5 p-1"><button onClick={() => setLang("en")} className={`rounded-full px-3 py-2 text-xs font-bold ${lang === "en" ? "bg-cyan-400 text-slate-950" : "text-white"}`}>EN</button><button onClick={() => setLang("am")} className={`rounded-full px-3 py-2 text-xs font-bold ${lang === "am" ? "bg-cyan-400 text-slate-950" : "text-white"}`}>አማ</button></div>{navItems.map((item) => <button key={item.id} onClick={() => scrollTo(item.id)} className="text-left text-sm font-semibold text-slate-200">{item.label}</button>)}<a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noreferrer"><Button className="w-full">{t.book}</Button></a></div></div>}
      </header>

      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.25),transparent_38%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_30%)]" />
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200"><BadgeCheck className="h-4 w-4" /> {t.heroBadge}</div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-8xl">{t.heroTitle}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{clinic.tagline[lang]} {t.heroDesc}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noreferrer"><Button className="w-full sm:w-auto">{t.bookVisit} <Calendar className="h-4 w-4" /></Button></a><button onClick={() => scrollTo("services")}><Button variant="ghost" className="w-full sm:w-auto">{t.explore} <ArrowRight className="h-4 w-4" /></Button></button></div>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">{t.trustCards.map(([title, desc], index) => { const icons = [Clock, ShieldCheck, Star]; const Icon = icons[index]; return <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur"><Icon className="mb-2 h-5 w-5 text-cyan-300" /><p className="text-sm font-bold">{title}</p><p className="mt-1 text-xs text-slate-400">{desc}</p></div>; })}</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
            <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-cyan-400/30 to-blue-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl"><div className="overflow-hidden rounded-[2rem] bg-slate-900"><div className="h-[520px] bg-[linear-gradient(rgba(15,23,42,0.12),rgba(15,23,42,0.55)),url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" /></div><div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/15 bg-slate-950/80 p-5 text-white backdrop-blur-xl"><div className="flex items-center justify-between gap-4"><div><p className="text-sm text-slate-300">{t.nextSlot}</p><p className="mt-1 text-2xl font-black">{t.todaySlot}</p></div><div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-400 text-slate-950"><Calendar className="h-6 w-6" /></div></div><div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-bold">{t.quickServices.map((item) => <span key={item} className="rounded-full bg-white/10 px-3 py-2">{item}</span>)}</div></div></div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-5 py-10"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">{t.stats.map(([value, label]) => <div key={label} className="rounded-3xl bg-slate-50 p-6 text-center"><p className="text-3xl font-black text-slate-950 sm:text-4xl">{value}</p><p className="mt-2 text-sm font-semibold text-slate-500">{label}</p></div>)}</div></section>

      <section id="services" className="bg-white px-5 py-24"><SectionTitle eyebrow={t.servicesEyebrow} title={t.servicesTitle} desc={t.servicesDesc} /><div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">{services[lang].map((s) => { const Icon = s.icon; return <motion.div key={s.title} whileHover={{ y: -6 }} className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-2xl hover:shadow-cyan-500/10"><div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-50 text-cyan-700 transition group-hover:bg-cyan-500 group-hover:text-slate-950"><Icon className="h-7 w-7" /></div><h3 className="text-xl font-black text-slate-950">{s.title}</h3><p className="mt-3 leading-7 text-slate-600">{s.desc}</p><button className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-700">{t.learn} <ArrowRight className="h-4 w-4" /></button></motion.div>; })}</div></section>
      <section id="why-us" className="bg-slate-950 px-5 py-24"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div><SectionTitle light eyebrow={t.whyEyebrow} title={t.whyTitle} desc={t.whyDesc} /></div><div className="grid gap-4">{t.whyPoints.map((item) => <div key={item} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 text-white"><CheckCircle2 className="mt-1 h-6 w-6 flex-none text-cyan-300" /><p className="font-semibold leading-7">{item}</p></div>)}</div></div></section>
      <section id="doctors" className="bg-slate-50 px-5 py-24"><SectionTitle eyebrow={t.doctorsEyebrow} title={t.doctorsTitle} desc={t.doctorsDesc} /><div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">{doctors[lang].map((doc) => <motion.div key={doc.name} whileHover={{ y: -6 }} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:shadow-2xl hover:shadow-cyan-500/10"><img src={doc.image} alt={doc.name} className="h-72 w-full object-cover" /><div className="p-6"><h3 className="text-2xl font-black text-slate-950">{doc.name}</h3><p className="mt-1 text-sm font-bold text-cyan-700">{doc.role}</p><p className="mt-2 text-sm text-slate-500">{doc.exp}</p><p className="mt-4 leading-7 text-slate-600">{doc.bio}</p><a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noreferrer"><Button className="mt-6 w-full">{t.book} <ArrowRight className="h-4 w-4" /></Button></a></div></motion.div>)}</div></section>
      <section id="gallery" className="bg-white px-5 py-24"><SectionTitle eyebrow={t.galleryEyebrow} title={t.galleryTitle} desc={t.galleryDesc} /><div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">{["https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80"].map((src, i) => <div key={src} className={`overflow-hidden rounded-[2rem] shadow-xl ${i === 1 ? "md:mt-10" : ""}`}><img src={src} alt="Dental clinic visual" className="h-80 w-full object-cover transition duration-500 hover:scale-105" /></div>)}</div></section>
      <section id="pricing" className="bg-slate-50 px-5 py-24"><SectionTitle eyebrow={t.pricingEyebrow} title={t.pricingTitle} desc={t.pricingDesc} /><div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">{pricing[lang].map((p) => <div key={p.title} className={`relative rounded-[2rem] border p-7 ${p.popular ? "border-cyan-400 bg-slate-950 text-white shadow-2xl shadow-cyan-500/20" : "border-slate-200 bg-white text-slate-950 shadow-sm"}`}>{p.popular && <span className="absolute right-6 top-6 rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-slate-950">{t.popular}</span>}<h3 className="pr-28 text-2xl font-black">{p.title}</h3><p className={`mt-3 text-3xl font-black ${p.popular ? "text-cyan-300" : "text-cyan-700"}`}>{p.price}</p><div className="mt-7 grid gap-3">{p.features.map((f) => <div key={f} className="flex items-center gap-3"><CheckCircle2 className={`h-5 w-5 ${p.popular ? "text-cyan-300" : "text-cyan-700"}`} /><span className={p.popular ? "text-slate-200" : "text-slate-600"}>{f}</span></div>)}</div><a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noreferrer"><Button variant={p.popular ? "light" : "dark"} className="mt-8 w-full">{t.requestAppointment}</Button></a></div>)}</div></section>
      <section className="bg-slate-950 px-5 py-24"><SectionTitle light eyebrow={t.reviewsEyebrow} title={t.reviewsTitle} desc={t.reviewsDesc} /><div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">{testimonials[lang].map((review) => <div key={review.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 text-white"><div className="mb-5 flex gap-1 text-cyan-300">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div><p className="leading-8 text-slate-200">“{review.text}”</p><p className="mt-6 font-black">{review.name}</p></div>)}</div></section>
      <section id="faq" className="bg-white px-5 py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-600">{t.faqEyebrow}</p><h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{t.faqTitle}</h2><p className="mt-5 leading-8 text-slate-600">{t.faqDesc}</p></div><div className="grid gap-4">{faqs[lang].map((f) => <div key={f.q} className="rounded-3xl border border-slate-200 bg-slate-50 p-6"><h3 className="text-lg font-black text-slate-950">{f.q}</h3><p className="mt-3 leading-7 text-slate-600">{f.a}</p></div>)}</div></div></section>
      <section className="bg-slate-50 px-5 py-24"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 shadow-2xl"><div className="grid lg:grid-cols-2"><div className="p-8 sm:p-12 lg:p-16"><p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">{t.bookNow}</p><h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">{t.finalTitle}</h2><p className="mt-5 max-w-xl leading-8 text-slate-300">{t.finalDesc}</p><div className="mt-8 grid gap-4 text-white"><div className="flex items-center gap-3"><Phone className="h-5 w-5 text-cyan-300" /> {clinic.phone}</div><div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-cyan-300" /> {clinic.address}</div><div className="flex items-center gap-3"><Clock className="h-5 w-5 text-cyan-300" /> {clinic.hours}</div></div><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noreferrer"><Button>{t.whatsappUs} <MessageCircle className="h-4 w-4" /></Button></a><a href={`tel:${clinic.phone}`}><Button variant="ghost">{t.callClinic} <Phone className="h-4 w-4" /></Button></a></div></div><form className="bg-white p-8 sm:p-12 lg:p-16"><h3 className="text-3xl font-black text-slate-950">{t.formTitle}</h3><div className="mt-7 grid gap-4"><input className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-cyan-500" placeholder={t.formName} /><input className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-cyan-500" placeholder={t.formPhone} /><select className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-cyan-500"><option>{t.formSelect}</option>{services[lang].slice(0, 8).map((service) => <option key={service.title}>{service.title}</option>)}</select><textarea className="min-h-32 rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-cyan-500" placeholder={t.formMessage} /><Button className="w-full">{t.submit} <ArrowRight className="h-4 w-4" /></Button></div></form></div></div></section>
      <footer className="bg-slate-950 px-5 py-10 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between"><div><p className="text-xl font-black">{clinic.name}</p><p className="mt-2 text-sm text-slate-400">{t.footer}</p></div><div className="flex gap-3"><button className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-sm font-black hover:bg-white/20">IG</button><button className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-sm font-black hover:bg-white/20">FB</button><button className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"><MessageCircle className="h-5 w-5" /></button></div></div></footer>
    </main>
  );
}
