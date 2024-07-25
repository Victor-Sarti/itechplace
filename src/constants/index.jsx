import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

export const navItems = [
  { label: "Quem Somos ?", href: "#" },
  { label: "Recursos", href: "#rec" },
  { label: "Depoimentos", href: "#dep" },
  { label: "localização", href: "#loc" },
];

export const testimonials = [
  {
    user: "Sarti",
    company: "São Paulo",
    text: "Estou extremamente satisfeito com os serviços prestados. A equipe foi ágil, profissional e entregou resultados além das minhas expectativas.",
  },
  {
    user: "Laura Cordeiro",
    company: " Diadema",
    text: "Não poderia estar mais feliz com o resultado do meu Iphone, ele ficou Perfeito!! .",
  },
  {
    user: "Bruno Miguel",
    company: "São Paulo",
    text: "Levar os Celulares dos meus filho para esta empresa foi um prazer. Sua atenção aos detalhes e compromisso com a excelência são louváveis. Eu os recomendo fortemente para quem procura um serviço de primeira linha.",
  },
  {
    user: "José Lucas",
    company: "São Paulo",
    text: "Estou impressionado com o nível de profissionalismo e dedicação demonstrado pela equipa. Eles foram capazes de superar nossas expectativas e entregar excelentes resultados.!",
  },
  {
    user: "Gabriel Nascimento",
    company: "São Paulo",
    text: "Simplismente amei a qualidade e o atendimento, com certeza voltarei para realizar novas compras, Adorei meus novos Acessorios.",
  },
  {
    user: "Nicolly Galluci",
    company: "São Paulo",
    text: "Trabalho Perfeito, Atendimento ÓTIMO e otima localização pertin da estação.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Itech Place",
    description:
      "Tem serviços de reparo  · Oferece entrega no mesmo dia",
  },
  {
    title: "Endereço",
    description:
      " Av. Imperatriz Leopoldina, 507 - Vila Leopoldina, São Paulo - SP, 05305-010",
  },
  {
    title: "Telefone",
    description:
      "(11) 97624-7505",
  },
  {
    title: "Horário de Funcionamento",
    description:
      "Segunda a Sexta: 09:00 - 19:30",
      
  },
  {
    description:
      "Sábado: 09:00 - 15:00 ",
      
  },
  {
    description:
      "Domingo: Fechado  ",
      
  },

];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Quem Somos" },
  { href: "#rec", text: "Recursos" },
  { href: "#dep", text: "Depoimentos" },
  { href: "#loc", text: "Localização" },
  
];

export const platformLinks = [
  {  href: "https://api.whatsapp.com/send/?phone=5511976247505&text&type=phone_number&app_absent=0wa.me/5511976247505", text: "WhatsAapp" },
  {  href: "https://www.instagram.com/itechplace?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", text: "Instagram" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
