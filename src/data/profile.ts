export type SocialLink = {
  label: string
  href: string
}

export type NowItem = {
  label: string
  title: string
  description: string
}

export type SelectedWorkItem = {
  period: string
  title: string
  description: string
  tags: string[]
}

export type Profile = {
  name: string
  initials: string
  homeHeadline: string
  homeIntro: string
  aboutHeadline: string
  bio: string
  location: string
  quirks: string[]
  links: SocialLink[]
  updatedAt: string
  now: NowItem[]
  selectedWork: SelectedWorkItem[]
}

export const profile: Profile = {
  name: 'Victor Ko',
  initials: 'VK',
  homeHeadline: 'Notes from a life still in progress.',
  homeIntro:
    'I’m Victor. I write about life’s small trials, the decisions I’ve made, and the lessons I’ve learned along the way.',
  aboutHeadline: 'Engineer by trade. Curious person everywhere else.',
  bio: 'I’m a first-generation Canadian, now living in the San Francisco Bay Area. I learn best by getting hands-on—building software, cooking, shaping clay, or playing sports. I try to keep life simple, stay curious, and not take myself too seriously.',
  location: 'San Francisco Bay Area',
  quirks: [
    'Water should only be consumed cold.',
    'Pineapple belongs on pizza.',
  ],
  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/victor-ko-a14068270/',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/koko0fficial/',
    },
  ],
  updatedAt: 'July 2026',
  now: [
    {
      label: 'Making',
      title: 'Personal projects after work',
      description: 'I used to avoid personal software projects after spending all day building at work. AI agents are changing that. This website is one of my first experiments—built with AI while I steer the ideas, decisions, and details.',
    },
    {
      label: 'Learning',
      title: 'A practical reading habit',
      description: 'I’ve spent years being very good at avoiding books. Instead of continuing to run from it, I’m starting small with practical reading—especially personal finance. Fiction can wait until the habit exists.',
    },
    {
      label: 'Moving',
      title: 'Pickleball, volleyball, and the gym',
      description: 'Adding pickleball to the rotation alongside volleyball and consistent gym sessions. I’m still learning the angles, timing, and how seriously not to take it.',
    },
    {
      label: 'Playing',
      title: 'Cards, strategy, and community',
      description: 'I’ve played Magic since I was about fifteen and still dabble in Pokémon and One Piece. Since moving to the Bay Area, poker has become another way to study strategy, math, and decision-making—with a strong community that keeps pushing me to improve.',
    },
  ],
  selectedWork: [
    {
      period: 'At Apple',
      title: 'ScreenCaptureKit API design',
      description:
        'Designed the API surface for ScreenCaptureKit and contributed to screen-capture frameworks across the Apple ecosystem, including ReplayKit. At WWDC, I helped developers by answering technical questions and troubleshooting their implementations.',
      tags: ['API design', 'Apple platforms', 'ScreenCaptureKit', 'ReplayKit', 'WWDC'],
    },
    {
      period: 'At Apple',
      title: 'Dynamic Island screen recording & bring-up',
      description:
        'Brought up screen recording for Dynamic Island on iPhone and refined the feature from its initial integration into a complete capture experience.',
      tags: ['iPhone', 'Dynamic Island', 'Screen recording'],
    },
    {
      period: 'At Apple',
      title: 'Control Center capture, camera & mic modes',
      description:
        'Brought up and refined local capture and screen recording in Control Center, along with the audio and camera modules for effects such as Center Stage and microphone modes such as Voice Isolation.',
      tags: ['Local capture', 'Center Stage', 'Voice Isolation'],
    },
    {
      period: 'Four years',
      title: 'GPU engineering',
      description:
        'Built GPU display and power features, with a focus on low-level debugging and the systems behind graphics output and power management.',
      tags: ['GPU', 'Display', 'Power management'],
    },
  ],
}
