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
    html: `<div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 40px; background: #050505; color: white; border-radius: 20px; border: 1px solid #1a1a1a;">
  <h1 style="color: #00FF85; font-size: 24px;">Welcome, Founding Member.</h1>
  <p style="color: #94a3b8; line-height: 1.6;">You are officially in the first 500. This isn't just a waitlist; you're helping us build the future of <strong>Spiritual Wealth</strong>.</p>
  
  <div style="background: rgba(0,255,133,0.1); border: 1px solid #00FF85; padding: 20px; border-radius: 12px; margin: 25px 0;">
    <p style="margin: 0; color: #00FF85; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Your Reward</p>
    <p style="margin: 5px 0 0 0; font-size: 18px;">🎁 2 Weeks of Premium Automation</p>
  </div>

  <p style="color: #94a3b8; font-size: 12px;">Reply <strong>\"SALAM\"</strong> to this email to lock in your spot and verify your status.</p>
</div>`
  })

  return Response.json({ success: true })
}
