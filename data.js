import { Network, Wrench, RadioTower, Users, Router, Cable, Wifi, ShieldCheck, Activity, Terminal, Cpu, Monitor, FileText, Radio, Lightbulb, MessageSquare, Search, Server } from 'lucide-react'

// Replace these placeholders with your real details.
export const CONTACT_EMAIL = '' // Add your real email before publishing
export const CV_FILE = 'Mahmoud-Saied-CV.pdf' // put the file in /public
export const GITHUB = 'https://github.com/mahmoudsaied3710-art'
export const LINKEDIN = 'https://www.linkedin.com/in/mahmoud-saied7/'

export const nav = [
  ['about', 'About'], ['skills', 'Skills'], ['certifications', 'Certifications'], ['projects', 'Project'],
  ['experience', 'Experience'], ['education', 'Education'], ['contact', 'Contact'],
]

export const interests = ['Network Engineering', 'IT Infrastructure', 'Network Operations Center (NOC)', 'IT Technical Support', 'System Administration', 'Fiber Optics and FTTH', 'Telecommunications']

export const skills = [
  { title: 'Networking', icon: Network, items: [['CCNA Networking Fundamentals', Network], ['Cisco Routing and Switching', Router], ['VLANs and Trunking', Cable], ['IP Addressing and Subnetting', Server], ['Routing Protocols', Activity], ['Network Troubleshooting', Search], ['Wireless Networking', Wifi], ['Network Security Fundamentals', ShieldCheck]] },
  { title: 'Tools and Technologies', icon: Wrench, items: [['Cisco Packet Tracer', Network], ['Wireshark', Activity], ['MATLAB', Cpu], ['LabVIEW', Cpu], ['Microsoft Office', FileText], ['Windows Administration', Monitor]] },
  { title: 'Telecommunications', icon: RadioTower, items: [['Fiber Optics Fundamentals', Cable], ['FTTH Fundamentals', Cable], ['Wireless Communication Systems', Radio], ['Telecommunications Networks', RadioTower]] },
  { title: 'Other Skills', icon: Users, items: [['Technical Documentation', FileText], ['Problem Solving', Terminal], ['Teamwork', Users], ['Communication', MessageSquare], ['Analytical Thinking', Lightbulb]] },
]

// Add `link` (certificate URL) and/or `image` (path in /public) when you have them.
export const certifications = [
  { name: 'CCNA Training', provider: 'NTI' },
  { name: 'Introduction to Cybersecurity', provider: 'Cisco' },
  { name: 'Modern AI Introduction', provider: 'Cisco' },
  { name: 'IT Customer Support', provider: 'Cisco' },
  { name: 'Digital Forensics', provider: 'ITI' },
  { name: 'MCSA Training', provider: 'Training course' },
  { name: 'CCTV Training', provider: 'Training course' },
]

export const project = {
  title: 'USRP-Based Real-Time Prototyping of Cognitive Radio NOMA Systems for 5G/6G Networks',
  description: 'Developed a real-time prototype of a Cognitive Radio Non-Orthogonal Multiple Access (CR-NOMA) communication system using NI USRP hardware and LabVIEW.',
  tech: ['NI USRP-2920', 'LabVIEW', 'MATLAB', 'BPSK', 'QPSK', '8-PSK', 'Successive Interference Cancellation (SIC)', 'Cognitive Radio', '5G/6G Wireless Communications'],
  contributions: [
    'Worked on configuring and testing wireless communication systems.',
    'Implemented and tested a two-user NOMA communication scenario.',
    'Explored power allocation and SIC receiver concepts.',
    'Applied Cognitive Radio principles.',
    'Collaborated with a team to implement and troubleshoot the system.',
    'Analyzed system performance.',
  ],
  repo: '', // add your GitHub repository URL here when available
}

// kind: Training | Hands-on practice. There is no employment entry because there is none yet.
export const timeline = [
  { kind: 'Training', title: 'Fiber Optics Training', org: 'WE', note: 'Training exposure to fiber-optic and access-network fundamentals.' },
  { kind: 'Training', title: 'CCNA', org: 'NTI', note: 'Routing, switching and network fundamentals.' },
  { kind: 'Training', title: 'Digital Forensics', org: 'ITI', note: '' },
  { kind: 'Hands-on practice', title: 'Networking and home lab experiments', org: 'Self-directed', note: 'Practical networking experiments, Ethernet cabling and basic network configuration.' },
  { kind: 'Hands-on practice', title: 'Router configuration and troubleshooting', org: 'Self-directed', note: '' },
  { kind: 'Hands-on practice', title: 'Troubleshooting and maintenance of electronic and mechanical devices', org: 'Self-directed', note: '' },
]
