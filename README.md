# 🛡️ Project Sukfi: Master Context (Feb 27)

### Status Report
- **URL:** https://sukfi-waitlist.vercel.app
- **Stack:** Next.js (App Router), Supabase (DB), Resend (Email).
- **Core Hook:** "Spiritual Net Worth" - Is your portfolio truly pure?
- **Founding Member Reward:** First 500 signups get 2 weeks of Premium Automation at launch.

### Technical Config
- **Database:** Table `waitlist` in Supabase (Column: `email`).
- **Permissions:** RLS Disabled (Public Inserts Enabled).
- **Automation:** `api/waitlist/route.ts` sends welcome email via Resend.
- **Trust Line:** "🔒 Bank-level encryption. Read-only access. No transactions stored."

### Next Steps (Phase 2: Exposure)
1. Reddit Post (r/IslamicFinance) using the "Stress-Test" hook.
2. TikTok/Reels using the "Hidden Riba" hook.
3. Verify Domain in Resend to send to everyone (current limit: own email only).
