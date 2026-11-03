import './globals.css';
import ClientBehaviors from '../components/ClientBehaviors';
export const metadata = { description: 'SkillYard digital studio. Thoughtful web design, development and digital experiences.', icons: {icon:'/assets/asset-2.png'} };
export const viewport = { themeColor: '#a0ff00' };
export default function RootLayout({children}) { return <html lang="en" suppressHydrationWarning><body id="top">{children}<ClientBehaviors /></body></html> }
