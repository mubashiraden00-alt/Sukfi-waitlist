import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { email } = await req.json()

  // 1. Save to Supabase
  const { data, error } = await supabase.from('waitlist').insert([{ email }]).select()
  if (error) return Response.json({ error: error.message }, { status: 500 })

  // 2. Send the Founding Member Email
  await resend.emails.send({
    from: 'Sukfi <hello@sukfi.com>',
    to: email,
    subject: '🛡️ You are a Founding Member!',
    html: `<h1>Welcome to Sukfi</h1><p>You've secured 2 weeks of Premium for being in the first 500!</p>`
  })

  return Response.json({ success: true })
}
