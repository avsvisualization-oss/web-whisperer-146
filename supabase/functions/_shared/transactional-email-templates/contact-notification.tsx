import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface ContactNotificationProps {
  name?: string
  email?: string
  company?: string
  role?: string
  projectType?: string
  services?: string
  timeline?: string
  budget?: string
  message?: string
}

const ContactNotificationEmail = ({
  name = '',
  email = '',
  company = '',
  role = '',
  projectType = '',
  services = '',
  timeline = '',
  budget = '',
  message = '',
}: ContactNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New project inquiry from {company || name || 'a potential client'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Project Inquiry</Heading>
        <Hr style={hr} />
        <Section>
          <Text style={label}>Name</Text>
          <Text style={value}>{name}</Text>

          <Text style={label}>Email</Text>
          <Text style={value}>{email}</Text>

          <Text style={label}>Company</Text>
          <Text style={value}>{company}</Text>

          {role && <>
            <Text style={label}>Role</Text>
            <Text style={value}>{role}</Text>
          </>}

          {projectType && <>
            <Text style={label}>Project Type</Text>
            <Text style={value}>{projectType}</Text>
          </>}

          {services && <>
            <Text style={label}>Services Needed</Text>
            <Text style={value}>{services}</Text>
          </>}

          {timeline && <>
            <Text style={label}>Timeline</Text>
            <Text style={value}>{timeline}</Text>
          </>}

          {budget && <>
            <Text style={label}>Budget Range</Text>
            <Text style={value}>{budget}</Text>
          </>}

          {message && <>
            <Hr style={hr} />
            <Text style={label}>Message</Text>
            <Text style={value}>{message}</Text>
          </>}
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, any>) =>
    data.company
      ? `New Inquiry – ${data.company} – AVS`
      : 'New Project Inquiry – AVS',
  to: 'avsvisualization@gmail.com',
  displayName: 'Contact form notification (to team)',
  previewData: {
    name: 'Sarah Chen',
    email: 'sarah@westbridgehomes.com',
    company: 'Westbridge Homes',
    role: 'Home Builder',
    projectType: 'Single Family',
    services: 'Exterior Renderings, Interior Renderings',
    timeline: '2–4 weeks',
    budget: '$5,000 – $10,000',
    message: 'We have a new community of 12 homes launching next quarter and need exterior renders for the model home.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'IBM Plex Sans', Arial, sans-serif" }
const container = { padding: '28px 32px' }
const h1 = { fontSize: '20px', fontWeight: '600' as const, color: '#111111', margin: '0 0 16px' }
const hr = { borderColor: '#e5e5e5', margin: '16px 0' }
const label = { fontSize: '11px', fontWeight: '600' as const, color: '#888888', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '12px 0 2px' }
const value = { fontSize: '14px', color: '#222222', lineHeight: '1.5', margin: '0 0 4px' }
