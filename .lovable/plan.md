

## Instagram Gallery Auto-Sync

### What This Does
Whenever you post a photo or video on Instagram, it will automatically appear in your website's Gallery section — no manual updates needed.

### Requirements (Before We Build)
1. **Instagram Business or Creator Account** — Your Instagram account must be a Business or Creator type (not Personal). You can switch this in Instagram Settings → Account → Switch to Professional Account.
2. **Facebook Page** linked to your Instagram account.
3. **Instagram Access Token** — We'll need a long-lived access token from the Meta Developer Portal. I'll walk you through getting this step by step.

### How It Works

```text
Instagram Post → Meta API → Edge Function → Website Gallery
```

1. **Edge Function** (`fetch-instagram-feed`): A backend function that calls the Instagram Graph API to fetch your latest posts (images + videos).
2. **Gallery Section Update**: The Gallery component will fetch posts from the edge function on page load, displaying your latest Instagram content alongside (or replacing) the static images.
3. **Caching**: Posts are cached so the page loads fast — the API is only called periodically, not on every page visit.

### Technical Plan

| Step | What |
|------|------|
| 1 | Store your Instagram Access Token as a secret |
| 2 | Create `fetch-instagram-feed` edge function that calls `https://graph.instagram.com/me/media` |
| 3 | Refactor `Gallery.tsx` to fetch from the edge function and display Instagram posts (images + videos) |
| 4 | Keep static fallback images in case the API is unavailable |
| 5 | Add video support with play controls for Reels |

### What You'll Need To Do
- Switch to an Instagram Business/Creator account (if not already)
- Create a Meta Developer App and generate a long-lived access token
- Provide the token to me (I'll store it securely as a secret)

Shall I proceed? I'll guide you through getting the Instagram access token first.

