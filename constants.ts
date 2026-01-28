import { Users, Zap, Search, Layout, Shield, BarChart3 } from 'lucide-react';
import { Feature, Step, Testimonial, FaqItem } from './types';

export const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'One-Click Posting',
    description: 'Post your job opening to 20+ job boards instantly with a single click.',
    icon: Zap,
  },
  {
    id: '2',
    title: 'Visual Pipeline',
    description: 'Drag-and-drop candidates through stages like a Trello board.',
    icon: Layout,
  },
  {
    id: '3',
    title: 'Smart Filtering',
    description: 'AI-powered parsing highlights the best resumes automatically.',
    icon: Search,
  },
  {
    id: '4',
    title: 'Team Collaboration',
    description: 'Comment, rate, and discuss candidates with your team in real-time.',
    icon: Users,
  },
  {
    id: '5',
    title: 'Data Privacy',
    description: 'GDPR and CCPA compliant candidate data management.',
    icon: Shield,
  },
  {
    id: '6',
    title: 'Hiring Analytics',
    description: 'Track time-to-hire and source effectiveness with simple charts.',
    icon: BarChart3,
  },
];

export const STEPS: Step[] = [
  {
    id: 1,
    title: 'Create Job Post',
    description: 'Use our AI writer to draft the perfect job description in seconds.',
  },
  {
    id: 2,
    title: 'Collect Applicants',
    description: 'All candidates land in one centralized, tidy dashboard.',
  },
  {
    id: 3,
    title: 'Collaborate & Hire',
    description: 'Schedule interviews and send offers without leaving the app.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Founder',
    company: 'TechFlow',
    content: "We hired our first 5 engineers using HirePilot. It saved us weeks of email chaos. The pipeline view is a game changer.",
    avatar: 'https://picsum.photos/100/100?random=1',
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'CTO',
    company: 'NextLevel',
    content: "Finally, a hiring tool that doesn't feel like enterprise bloatware. Simple, fast, and exactly what a startup needs.",
    avatar: 'https://picsum.photos/100/100?random=2',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Head of People',
    company: 'Bloom',
    content: "The automated email triggers alone paid for the subscription. Candidate experience has never been better.",
    avatar: 'https://picsum.photos/100/100?random=3',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Do I need a credit card to start?",
    answer: "No, you can try HirePilot completely free for 14 days. No credit card required until you upgrade."
  },
  {
    question: "How many team members can I add?",
    answer: "Our Growth plan allows for unlimited team members so you can collaborate with your whole company."
  },
  {
    question: "Can I export candidate data?",
    answer: "Yes, you can export all candidate data to CSV or JSON formats at any time."
  },
  {
    question: "Does it integrate with Slack?",
    answer: "Yes! Get notified about new applicants and interview confirmations directly in a dedicated Slack channel."
  }
];

export const TRUSTED_COMPANIES = [
  "Acme Corp", "GlobalTech", "Nebula", "Trio", "FoxRun", "Circle"
];