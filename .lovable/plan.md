

## Plan: Update Contact Form with File Upload

### Summary
Remove Project Scope and Budget Range fields, add an optional file upload field, and keep the existing honeypot anti-spam. Files will be uploaded to a Supabase Storage bucket and the download URL included in the notification email.

### Changes

**1. Create a Storage Bucket (Database Migration)**
- Create a `contact-uploads` public bucket for storing submitted files
- Add RLS policy allowing anonymous inserts (since form doesn't require auth)
- Allow reads for authenticated/service role only

**2. Update `src/components/ContactForm.tsx`**
- Remove `scope` and `budget` from state, remove `SCOPE_OPTIONS` and `BUDGET_OPTIONS` constants
- Remove the two corresponding `SelectField` components from the Project Details grid
- Change grid from `md:grid-cols-3` to single column for the lone Project Type dropdown
- Add file upload field after Project Type:
  - Label: "Upload your plans or references (optional)"
  - Accept: `.pdf,.jpg,.jpeg,.png,.dwg`
  - Helper text: "You can upload floor plans, elevations, or inspiration images."
  - Styled as a drag-friendly file input matching the current design
  - Store file in component state as `File | null`
- On submit: upload file to `contact-uploads` bucket, get public URL, include in email template data
- Keep existing honeypot field (already present)
- Update form reset to clear file input

**3. Update `supabase/functions/_shared/transactional-email-templates/contact-notification.tsx`**
- Remove `role`, `services`, `timeline`, `budget` fields from interface and template
- Add optional `fileUrl` field — rendered as a clickable link in the email when present
- Update `previewData` to reflect new fields

### File-by-file

| File | Action |
|------|--------|
| Migration SQL | Create `contact-uploads` storage bucket + RLS |
| `src/components/ContactForm.tsx` | Remove scope/budget, add file upload, upload to storage on submit |
| `contact-notification.tsx` | Remove old fields, add `fileUrl` link |

