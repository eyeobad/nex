import React from "react"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO and Founder",
    bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    initials: "JS",
    gradient: "from-[#FD853A] via-[#F83F62] to-[#D81F26]",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Director of Operations",
    bio: "7+ years of experience in project management and team leadership. Strong organisational and communication skills.",
    initials: "JD",
    gradient: "from-[#FD853A] via-[#F83F62] to-[#D81F26]",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimisation.",
    initials: "MB",
    gradient: "from-[#FD853A] via-[#F83F62] to-[#D81F26]",
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "PPC Manager",
    bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.",
    initials: "EJ",
    gradient: "from-[#FD853A] via-[#F83F62] to-[#D81F26]",
  },
  {
    id: 5,
    name: "Brian Williams",
    role: "Social Media Specialist",
    bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analysing metrics, and building engagement.",
    initials: "BW",
    gradient: "from-[#FD853A] via-[#F83F62] to-[#D81F26]",
  },
  {
    id: 6,
    name: "Sarah Kim",
    role: "Content Creator",
    bio: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimised content for various industries.",
    initials: "SK",
    gradient: "from-[#FD853A] via-[#F83F62] to-[#D81F26]",
  },
]

const TeamCard = ({ member }) => {
  return (
    <article className="flex flex-col gap-8 rounded-[45px] border border-black bg-white p-8 shadow-[0px_5px_0px_#191A23] transition-transform duration-300 hover:-translate-y-1 sm:p-10">
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-end gap-5 sm:gap-7">
          <div className="relative flex h-[102px] w-[106px] shrink-0 items-center justify-center">
            <div
              className={`relative flex h-full w-full items-center justify-center rounded-[40%] bg-gradient-to-br ${member.gradient} shadow-[0px_8px_20px_rgba(216,31,38,0.35)]`}
            >
              <span className="font-space-grotesk text-2xl font-semibold text-black">{member.initials}</span>
            </div>
            <div className="absolute inset-0 -z-[1] rounded-[45px] bg-black/10 blur-xl" />
          </div>
          <div>
            <h3 className="font-space-grotesk text-[22px] font-semibold leading-7 text-black sm:text-[24px]">
              {member.name}
            </h3>
            <p className="text-[15px] font-medium text-black/70 sm:text-[17px]">{member.role}</p>
          </div>
        </div>
        <a
          href="#"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-200 hover:-translate-y-[2px]"
          aria-label={`Visit ${member.name}'s LinkedIn profile`}
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
      <div className="h-px w-full bg-black/10" />
      <p className="text-sm leading-relaxed text-black/80 sm:text-base">{member.bio}</p>
    </article>
  )
}

const Team = () => {
  return (
    <section className="relative bg-black py-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-14 px-4 sm:px-8 lg:px-12 xl:px-[100px]">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="inline-flex rounded-[7px] bg-black px-[7px] py-[10px] shadow-[0px_3px_0px_#191A23]">
            <h2 className="font-space-grotesk text-[32px] font-medium leading-[42px] text-white sm:text-[40px] sm:leading-[51px]">
              Team
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
            Meet the skilled and experienced team behind our successful digital marketing strategies.
          </p>
        </header>

        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
