# Instant QR Studio

Dark SaaS Prompt for Lovable

Create a modern dark-theme SaaS landing page for a web app called QR Code Generator.

The design should look like a polished startup product page with a built-in live QR generator.

Overall style

Use a modern dark UI with a premium tech look.

Design guidelines:

dark background (#0f172a or similar deep dark blue)

light text

accent color (blue or violet)

smooth shadows and glowing highlights

rounded cards

subtle animations

minimalistic and elegant

responsive for desktop and mobile

The page should feel like a real SaaS product.

Page Structure

Hero Section

Create a strong hero section.

Headline:

Create Custom QR Codes Instantly

Subheadline:

Generate beautiful QR codes for links, text, emails, and phone numbers in seconds

Buttons:

Generate QR Code

Learn More

Add a visual preview card showing the QR generator UI.

QR Generator Section

This is the core feature.

Create a centered generator card with:

Input field:

placeholder example: https://example.com

Color picker:

label: QR Code Color

Live preview area:

label: Your QR Code

Buttons:

Download PNG

Reset

Behavior

QR code must generate live as user types

QR code must update when color changes

default QR color: black

if input is empty show message:

Please enter text to generate a QR code

disable Download button until QR is generated

Features Section

Create 4 feature cards.

Feature 1

Instant Generation

Generate QR codes in real time as you type.

Feature 2

Custom Colors

Choose any color for your QR code.

Feature 3

Download as PNG

Save your QR code instantly.

Feature 4

Works Everywhere

Fully responsive for desktop and mobile.

Use simple icons and elegant cards.

How It Works

Create a simple 3-step process:

Enter your text or link

Choose your QR code color

Download your QR code

Use icons or numbers.

FAQ Section

Add a small FAQ accordion.

Questions:

What can I convert into a QR code?

Any text, link, email, or phone number.

Can I change the QR code color?

Yes, choose any color using the color picker.

Can I download the QR code?

Yes, you can download it as PNG.

Does it work on mobile?

Yes, the generator is fully responsive.

Footer

Footer should contain:

QR Code Generator

Fast and simple QR creation online

Links:

Features

Generator

FAQ

Technical requirements

Use a reliable QR code library.

The page must be:

fast

lightweight

responsive

visually polished

QR preview should update smoothly without page reload.

UI polish

Add extra small details:

hover effects for buttons

subtle glow around active elements

soft shadows

smooth scroll when clicking hero buttons

disabled button state for download

The final result should look like a real SaaS startup product page with a working QR generator, not a basic demo.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://nerv-qr.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c97188c7-1922-4641-927d-33b43c186f08).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
