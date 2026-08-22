# Lightpath Coaching Website - Work Communication Record 2

Date: 27 July 2026

This document summarises the website requirements, content decisions, and design direction discussed for the Lightpath Coaching team page. It is written as a working communication record rather than a technical change log.

## Overall Team Page Direction

The Meet Our Team page should continue to feel professional, warm, and consistent. Tutor cards should present each person clearly without overwhelming families with too much detail at first glance.

The visual standard for team portraits should be consistent across the page. Each portrait should sit naturally on the same pale blue card background used by the website, without visible image rectangles, mismatched background colours, or awkward cropping.

The team profiles should balance credibility with approachability. For less experienced tutors, the wording should avoid drawing attention to limited formal experience and should instead highlight academic strength, reliability, communication style, study support, and student-centred soft skills.

## Portrait Background Requirements

All tutor portraits should visually match the existing team-card style.

The preferred portrait treatment is:

- Clean team-card portrait
- Transparent image background where possible
- The card's own pale blue background showing through
- No visible image boundary or colour mismatch
- Comfortable headroom
- Shoulders visible where possible
- Person large enough to feel present, but not cropped awkwardly

This requirement was applied to Jo, Nishi, Steven, and Theana so their portraits feel more unified on the Meet Our Team page.

## Jo de Lisle Portrait Requirement

Jo's previous website portrait was replaced with a newer photo supplied for the team page.

The new Jo portrait needed the same pale blue background treatment as the other team cards. The image background should not appear as a separate rectangle inside the card.

Several framing refinements were requested:

- The person should be slightly larger in the card.
- The shoulders should not be awkwardly cropped.
- The portrait should not appear too small or distant.
- The background should blend with the website card background.

The final direction was to use a new image file with transparent background so the website's own `bg-sky-50` card background provides the visible colour.

## Nishi Piplani Portrait Requirement

Nishi's portrait was already on the website, but the image background appeared slightly darker than the website card background.

The requirement was to make the image background consistent with the card background so the photo does not show a visible outline or rectangular boundary.

The final direction was to keep Nishi's portrait and composition, but make the background transparent so it blends naturally with the team card.

## Steven Donald Portrait Requirement

A portrait image was supplied for Steven and needed to replace the initials placeholder on his tutor card.

The portrait requirements were:

- Use the supplied Steven photo as the basis.
- Remove the original wall/background.
- Match the same pale blue team-card style.
- Avoid visible image borders or background mismatch.
- Keep Steven's head and shoulders comfortably visible.
- Adjust the person size so the portrait feels consistent with the other tutor cards.

After previewing the first version, the person was requested to appear slightly larger. The portrait was then enlarged while keeping the head and shoulders within the card area.

## Theana Chen Profile Requirement

Theana Chen was added as a new tutor and placed after Nishi Piplani on the Meet Our Team page.

Theana's profile needed careful positioning. Although her CV includes current education details, the website profile should not emphasise that she is a university student or suggest that she has limited professional experience.

The profile should instead highlight:

- Academic ability
- Chemistry support
- Academic leadership
- Peer mentoring
- Reliability
- Adaptability
- Study skills
- Goal setting
- Time management
- A friendly and supportive teaching style

Theana's role was confirmed as:

```text
Chemistry Tutor
```

Her focus area was confirmed as:

```text
Chemistry, Study Skills & Academic Confidence
```

Theana's profile should present her as someone who can help students understand Chemistry concepts clearly while also building better study habits and confidence.

## Theana Chen Wording Boundary

Theana's profile should not mention that she is bilingual or specifically state that she speaks Chinese.

The reason is that the public website should not make her language background too visible or position her primarily through Chinese-language ability.

The wording may still suggest strong communication and language awareness in a general way, but should avoid:

- Bilingual
- Chinese
- Chinese and English

After review, the profile was further adjusted because the original wording repeated communication-related ideas in both the focus area and highlight list. The final version separates the information more clearly:

- Focus area: Chemistry, study skills, and academic confidence
- Bio: academic leadership, peer mentoring, organisation, confidence, and study strategies
- Teaching style: supportive space, questions, positive study habits, and steady progress
- Highlights: Chemistry support, academic leadership, adaptability, teamwork, organisation, and time management

## Theana Chen Portrait Requirement

Theana's supplied portrait needed to be adapted to match the team page.

The requirements were:

- Replace the original pink background.
- Use the same team-card background treatment as the other portraits.
- Keep the portrait friendly and natural.
- Make the image suitable for a professional tutoring website.
- Avoid changing the person's identity or over-retouching the face.

The final direction was to create a clean team-card portrait and use a transparent background so the image blends with the same pale blue card background used across the team page.

## Content Tone Requirement

Across all new or updated tutor profiles, the content should sound credible but not exaggerated.

The preferred style is:

- Clear
- Warm
- Family-friendly
- Professional
- Not too sales-like
- Not overclaiming experience
- Focused on how the tutor supports students

For Theana specifically, the language should make her feel capable, supportive, and academically strong without directly discussing her current student status.

## Summary

The main goal of these updates was to make the Meet Our Team page feel more complete, visually consistent, and professionally presented.

The team page now includes updated tutor portraits, more consistent image styling, a photo for Steven, and a new Chemistry Tutor profile for Theana Chen. The wording was intentionally shaped to highlight student support, academic confidence, and soft skills while avoiding details that could weaken the public positioning of newer tutors.

## Company Logo Design and Website Update

The Lightpath Coaching logo was reviewed and redesigned to better match the website's visual direction and the style of local New Zealand service websites.

Several logo directions were considered:

- A formal emblem-style logo using navy and gold
- A lighthouse/path concept
- A pathway and learning journey concept
- A simplified open-path concept for website use

The preferred direction was confirmed as a horizontal website logo, with the graphic mark on the left and the company name on the right. This layout was considered more suitable for a New Zealand local tutoring website because it works naturally in a navigation header and feels closer to common local business website branding.

The logo should not rely on a stacked poster-style layout for the main website header. It should also avoid a full square badge or filled container, because that made the mark feel too much like an app icon rather than a website brand logo.

The small tagline words underneath the logo were not used for the main website version. The reason was that small words are difficult to read in a navigation bar, mobile header, favicon, and other small placements. The main website logo should stay simple and readable.

The final logo direction used for the website is:

- Left-side open pathway mark
- Navy and teal pathway forms
- Warm gold light dot
- White background
- Horizontal wordmark
- No tagline
- No obvious book, tree, lighthouse, or square badge

During review, several generated logo options were rejected because they felt too dark, too busy, too much like a book, too much like a tree, or too much like a generic icon. The final chosen direction was based on the cleaner open-path concept because it better communicates guidance, progress, and clarity without looking overly traditional.

The selected logo was then added to the website header and footer. The image was cropped to remove excess whitespace so that both the logo mark and text are more readable in the website navigation area.

The website now uses the updated company logo as the main brand identity across the header and footer.

## Local Computer Migration Record

Migration date: 22 August 2026

The project was migrated to a new local computer from the GitHub repository:

```text
https://github.com/Oliver-Cui/first-project.git
```

The repository was cloned into a local `first-project` directory. The Next.js application is located in `first-project/frontend`.

The migration procedure is:

1. Install VS Code, Git, Node.js LTS, and pnpm.
2. Verify the tools with `node -v`, `pnpm -v`, and `git --version`.
3. Clone the repository with `git clone https://github.com/Oliver-Cui/first-project.git`.
4. Open `first-project/frontend` and run `pnpm install`.
5. Create `frontend/.env.local` manually for the Resend email configuration.
6. Run `pnpm dev` and open `http://localhost:3000`.

The local email configuration uses these variable names:

```text
RESEND_API_KEY=
CONTACT_TO_EMAIL=lightpathcoachingnz@gmail.com
CONTACT_FROM_EMAIL=Lightpath Website <verified-sender@example.com>
```

The real Resend API key and verified sender address must be entered only on the local computer. The `.env.local` file is excluded by Git and must not be committed or copied into the work communication record.

If `RESEND_API_KEY` is empty, the website contact form runs in mock mode and does not send a real email. This allows the local website and form flow to be checked safely before the email credentials are configured.

For ongoing work, changes made on one computer should be committed and pushed to GitHub. The other computer can then update its copy with `git pull`. Run `pnpm install` again whenever the dependency files have changed, then start the site with `pnpm dev`.

The existing work communication records are tracked in Git, so they migrate automatically with the repository. Local-only files such as `.env.local` do not migrate through GitHub and must be recreated on each computer.

The new local computer was verified with the following installed versions:

```text
Node.js v22.23.2 LTS
npm 10.9.8
pnpm 11.22.0
Git 2.50.1 (Apple Git-155)
Visual Studio Code 1.134.0 (Apple Silicon)
```

The `code` command was also made available in Terminal. After installation, the existing lockfile passed an offline dependency check and the Next.js production build completed successfully using the newly installed system Node.js and pnpm.
