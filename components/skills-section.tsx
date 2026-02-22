/* eslint-disable @next/next/no-img-element */

const skillGroups = [
  {
    label: "Advertising & Social",
    skills: [
      { name: "Facebook Ads", img: "https://svgl.app/library/facebook-icon.svg" },
      { name: "Instagram Ads", img: "https://svgl.app/library/instagram-icon.svg" },
      { name: "TikTok Ads", img: "https://svgl.app/library/tiktok-icon-dark.svg", darkImg: "https://svgl.app/library/tiktok-icon-light.svg" },
      { name: "Google Ads", img: "https://svgl.app/library/google.svg" },
      { name: "Analytics & Data", icon: "analytics" },
      { name: "Strategia Social", icon: "strategy" },
      { name: "Piani Editoriali", icon: "editorial" },
      { name: "Tattica & Operativita", icon: "clock" },
    ],
  },
  {
    label: "CMS & Web",
    skills: [
      { name: "WordPress", img: "https://svgl.app/library/wordpress.svg" },
      { name: "Shopify", img: "https://svgl.app/library/shopify.svg" },
      { name: "Squarespace", img: "https://svgl.app/library/squarespace.svg" },
    ],
  },
  {
    label: "Intelligenza Artificiale",
    skills: [
      { name: "Claude AI", img: "https://svgl.app/library/claude-ai-icon.svg" },
      { name: "ChatGPT", img: "https://svgl.app/library/openai.svg", darkImg: "https://svgl.app/library/openai_dark.svg" },
      { name: "Midjourney", icon: "midjourney" },
    ],
  },
  {
    label: "Strumenti & Design",
    skills: [
      { name: "VS Code", img: "https://svgl.app/library/vscode.svg" },
      { name: "Cursor", img: "https://svgl.app/library/cursor_light.svg", darkImg: "https://svgl.app/library/cursor_dark.svg" },
      { name: "Photoshop", img: "https://svgl.app/library/photoshop.svg" },
      { name: "Premiere Pro", img: "https://svgl.app/library/premiere.svg" },
      { name: "Canva", img: "https://svgl.app/library/canva.svg" },
      { name: "Figma", img: "https://svgl.app/library/figma.svg" },
    ],
  },
]

function SkillIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "analytics":
      return (
        <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3v18h18" />
          <path d="M7 16l4-4 4 4 6-6" />
          <circle cx="21" cy="10" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      )
    case "strategy":
      return (
        <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4m-4 0l-3 4m3-4l3 4" />
          <path d="M7 9h4m-4 3h2" />
        </svg>
      )
    case "editorial":
      return (
        <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 6h16M4 10h16M4 14h10M4 18h6" />
          <circle cx="20" cy="16" r="3" />
          <path d="M20 14v4m-2-2h4" />
        </svg>
      )
    case "clock":
      return (
        <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      )
    case "midjourney":
      return (
        <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3v18m-6-6l6 6 6-6" />
          <circle cx="12" cy="8" r="3" />
        </svg>
      )
    default:
      return null
  }
}

export function SkillsSection() {
  return (
    <section className="skills">
      <div className="skills-inner">
        <div className="section-header">
          <div className="section-label">Toolkit</div>
          <h2>
            Gli strumenti che uso
            <br />
            ogni giorno
          </h2>
        </div>
        <div className="skills-list">
          {skillGroups.map((group) => (
            <div className="skills-group" key={group.label}>
              <div className="skills-group-label">{group.label}</div>
              <div className="skills-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    {skill.img && !skill.darkImg && (
                      <img className="skill-icon-img" src={skill.img} alt={skill.name} />
                    )}
                    {skill.img && skill.darkImg && (
                      <>
                        <img className="skill-icon-img has-dark" src={skill.img} alt={skill.name} />
                        <img className="skill-icon-img dark-variant" src={skill.darkImg} alt={skill.name} />
                      </>
                    )}
                    {skill.icon && <SkillIcon icon={skill.icon} />}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
