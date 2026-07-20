import React from 'react';

export const ElementorLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <title>Elementor</title>
    <path d="M12 0C5.372 0 0 5.372 0 12c0 6.626 5.372 12 12 12s12-5.372 12-12c0-6.626-5.372-12-12-12ZM9 17H7V7H9Zm8 0H11V15h6Zm0-4H11V11h6Zm0-4H11V7h6Z"/>
  </svg>
);

export const SamcartLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 65 64" fill="currentColor" {...props}>
    <title>Samcart</title>
    <path d="m30.465 9.523-14.563 4.32a.31.31 0 0 0 0 .601l14.563 4.35c.2.056.4-.087.4-.316V9.81c0-.2-.2-.344-.4-.287Zm3.548 42.83c-2.69 0-4.778 2.46-4.206 5.236a4.305 4.305 0 0 0 3.29 3.29c2.775.572 5.236-1.516 5.236-4.206-.029-2.374-1.946-4.32-4.32-4.32Zm25.835-7.181c-2.69 0-4.778 2.46-4.206 5.236.343 1.659 1.717 2.975 3.376 3.29 3.233.6 5.98-2.404 4.892-5.694-.572-1.716-2.231-2.832-4.062-2.832Zm-51.67 0c-2.69 0-4.778 2.46-4.206 5.236.343 1.659 1.717 2.975 3.376 3.29 3.233.6 5.98-2.404 4.892-5.694-.572-1.716-2.26-2.832-4.062-2.832Z"/>
    <path d="M3.857 35.644a4.515 4.515 0 0 0 3.205 4.32l25.635 7.697a4.485 4.485 0 0 0 2.603 0l25.635-7.697a4.48 4.48 0 0 0 3.204-4.32V15.217a.805.805 0 0 0-1.03-.773l-27.98 8.354a3.805 3.805 0 0 1-2.26 0l-25.32-7.553-1.775-.515a.596.596 0 0 1 0-1.144L33.24 5.432a.604.604 0 0 1 .773.572v12.703c0 .4.372.687.772.572l23.375-6.952 1.774-.515a.596.596 0 0 0 0-1.144L34.67 3.086a2.566 2.566 0 0 0-1.316 0L2.284 12.44c-1.66.487-2.575 2.318-1.917 3.977.343.887 1.173 1.517 2.089 1.803l1.43.429"/>
  </svg>
);

export const CommuniLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" {...props}>
    <title>Communi</title>
    <circle cx="50" cy="50" r="30" stroke="#000" strokeWidth="22" strokeDasharray="130 58.5" strokeDashoffset="-30" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="30" stroke="#87C7C5" strokeWidth="22" strokeDasharray="25 163.5" strokeDashoffset="-170" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="30" stroke="#F82386" strokeWidth="22" strokeDasharray="25 163.5" strokeDashoffset="-205" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="30" stroke="#FFC015" strokeWidth="22" strokeDasharray="25 163.5" strokeDashoffset="-240" strokeLinecap="round"/>
  </svg>
);

export const WithMeLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" {...props}>
    <title>WithMe</title>
    <path d="M 20 40 v 20 a 15 15 0 0 0 30 0 a 15 15 0 0 0 30 0 v -20" stroke="#4353FF" strokeWidth="20" strokeLinecap="round"/>
    <circle cx="50" cy="35" r="10" fill="#4353FF"/>
  </svg>
);

export const ReapLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" {...props}>
    <title>Reap</title>
    {/* Left Cyan */}
    <path d="M 25 80 L 25 20" stroke="#12a89d" strokeWidth="20" strokeLinecap="round" />
    {/* Bottom Orange */}
    <path d="M 85 50 L 25 80" stroke="#ff7b00" strokeWidth="20" strokeLinecap="round" />
    {/* Top Blue */}
    <path d="M 25 20 L 85 50" stroke="#002b6b" strokeWidth="20" strokeLinecap="round" />
    {/* Left Cyan Top Half (Covers Blue at top-left) */}
    <path d="M 25 50 L 25 20" stroke="#12a89d" strokeWidth="20" strokeLinecap="round" />
  </svg>
);
