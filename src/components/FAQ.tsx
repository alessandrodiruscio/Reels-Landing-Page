export function FAQ() {
  const faqs = [
    {
      q: "How much time do I need to spend on this every week?",
      a: "Very little. Once we align on strategy and you approve the scripts, I handle the recording, editing, and captions. Expect to spend just 1-2 hours a week reviewing and approving content.",
      open: true
    },
    {
      q: "Do I or my team need to record ourselves on camera?",
      a: "No, you don't have to! If you want to be on camera, that's great, but it's not required. I can create engaging screen-recorded videos with voiceovers and captions without you ever needing to step in front of the lens."
    },
    {
      q: "What do I need to provide you before we get started?",
      a: "Just a quick brief on your software, access to a demo account if applicable, your brand guidelines (logos, colors, fonts), and your overall goals. We'll cover all of this in our initial strategy call."
    },
    {
      q: "Can you match our brand’s existing colors, fonts, and tone?",
      a: "Absolutely. I'll make sure every video feels like a natural extension of your brand, using your exact color palette, typography, and desired tone of voice."
    },
    {
      q: "What is the turnaround time for a video or a batch of content?",
      a: "Typically, a single video takes around 1 day to be completed from an approved script to final delivery. For batches, we can set up a consistent weekly delivery schedule once the initial assets are ready."
    },
    {
      q: "How do revisions work if I want to tweak a script or video edit?",
      a: "You get unlimited revisions on the scripts before recording. For the video edits, we include up to two rounds of revisions per video to make sure it's exactly what you want."
    },
    {
      q: "Do you write the scripts and captions, or do I have to?",
      a: "I handle all the copywriting. I'll write the scripts based on your product features and audience pain points, and I'll also provide the captions and hashtags for you to post."
    },
    {
      q: "Can you guarantee that these videos will go viral or get sign-ups?",
      a: "While I can't guarantee virality—no one can—I can guarantee high-quality, engaging videos designed specifically to capture attention and communicate your software's value, which gives you the best possible chance to drive sign-ups."
    },
    {
      q: "Which platforms work best for these videos?",
      a: "These short-form vertical videos are optimized for TikTok, Instagram Reels, and YouTube Shorts. They can also perform very well as organic LinkedIn posts or paid ads on platforms like Meta and TikTok."
    }
  ];

  return (
    <section id="faq" className="pt-5 pb-[120px] relative z-10 text-white overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/10 via-black to-black border-t border-white/5">
      {/* Background Illustration */}
      <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="max-w-[560px] mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">FAQ</div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white">Good to know</h2>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-[24px] p-6 px-8 backdrop-blur-sm">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border-t border-white/10 first:border-t-0 py-6" open={faq.open}>
              <summary className="cursor-pointer list-none font-bold text-lg flex justify-between items-center outline-none [&::-webkit-details-marker]:hidden hover:text-indigo-400 transition-colors">
                {faq.q}
                <span className="text-[20px] text-indigo-400 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="text-gray-400 text-[15px] mt-4 max-w-[600px] leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
