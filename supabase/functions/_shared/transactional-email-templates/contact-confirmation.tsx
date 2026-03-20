import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface ContactConfirmationProps {
  name?: string
}

const ContactConfirmationEmail = ({ name }: ContactConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>We received your project details – AVS</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Hi ${name},` : 'Hi,'}
        </Heading>
        <Text style={text}>
          Thanks for reaching out.
        </Text>
        <Text style={text}>
          We've received your project details and our team will review everything carefully.
        </Text>
        <Text style={text}>
          You can expect a response from us within the next 24 hours.
        </Text>
        <Text style={text}>
          If your project is time-sensitive, feel free to reply directly to this email.
        </Text>
        <Text style={text}>
          Looking forward to working together.
        </Text>
        <Text style={closing}>
          Best regards,{'\n'}AVS Team
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'We received your project – AVS',
  displayName: 'Contact confirmation (to user)',
  previewData: { name: 'Sarah' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'IBM Plex Sans', Arial, sans-serif" }
const container = { padding: '28px 32px' }
const h1 = { fontSize: '20px', fontWeight: '600' as const, color: '#111111', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#444444', lineHeight: '1.6', margin: '0 0 14px' }
const closing = { fontSize: '14px', color: '#444444', lineHeight: '1.6', margin: '24px 0 0', whiteSpace: 'pre-line' as const }
