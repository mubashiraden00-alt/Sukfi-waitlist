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
  <h1 style="color: #00FF85; font-size: 22px; margin-bottom: 20px;">Welcome — you're in.</h1>
  
  <p style="color: #94a3b8; line-height: 1.6; font-size: 15px;">
    You're officially one of the first 500 Sukfi Founding Members. This isn't just a waitlist — you're helping us build the future of spiritual wealth management.
  </p>

  <div style="background: rgba(0,255,133,0.05); border: 1px solid #00FF85; padding: 25px; border-radius: 12px; margin: 30px 0;">
    <p style="margin: 0 0 10px 0; color: #00FF85; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Your Founding Member Reward</p>
    <p style="margin: 0; font-size: 18px; font-weight: bold;">🎁 2 Weeks of Premium Automation</p>
    <p style="margin: 5px 0 0 0; color: #94a3b8; font-size: 13px;">(automatic halal income tracking + zakat calculation when we launch)</p>
  </div>

  <p style="color: #ffffff; font-weight: bold; margin-bottom: 10px;">As a founding member, you'll also get:</p>
  <ul style="color: #94a3b8; padding-left: 20px; line-height: 1.8; margin-bottom: 25px;">
    <li>Early access to Sukfi</li>
    <li>Priority beta testing</li>
    <li>Influence over new features</li>
  </ul>

  <p style="color: #94a3b8; font-size: 14px; margin-bottom: 30px;">
    To confirm your spot, simply reply <strong style="color: #00FF85;">SALAM</strong> to this email.<br />
    We'll notify you as soon as testing begins.
  </p>

  <p style="color: #94a3b8; font-size: 14px; margin-bottom: 40px;">Thank you for helping us build something beneficial for the Ummah.</p>

  <div style="padding-top: 20px; border-top: 1px solid #1a1a1a;">
    <p style="color: white; font-weight: bold; margin: 0; font-size: 15px;">— Mubashir Aden</p>
    <p style="color: #00FF85; margin: 2px 0 0 0; font-size: 13px;">Founder & CEO, Sukfi</p>
    
    <div style="margin-top: 25px; color: #475569; font-size: 11px;">
      <p style="margin: 0;">© 2026 Sukfi. All rights reserved.</p>
      <p style="margin: 5px 0 0 0;">
        <a href="https://sukfi.com" style="color: #00FF85; text-decoration: none;">sukfi.com</a> 
        <span style="margin: 0 5px;">•</span> Spiritual Wealth, Managed.
      </p>
    </div>
  </div>
</div>`
  })

  return Response.json({ success: true })
}
