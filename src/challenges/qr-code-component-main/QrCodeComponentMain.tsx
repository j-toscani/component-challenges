import { LinkToGithub } from "../../components/LinkToGithub.tsx";

export default function QrCodeComponentMain() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/images/favicon-32x32.png"
        />
        <link rel="stylesheet" href="/public/qr-code-component-main.css" />
        <link rel="stylesheet" href="/public/global.css" />

        <title>Frontend Mentor | QR code component</title>

        <style></style>
      </head>
      <body>
        <div className="card">
          <img src="/public/images/image-qr-code.png" />
          <div className="card-text">
            <p className="cta">Improve your front-end skills by building projects.</p>
            <p>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <LinkToGithub />.
        </div>
      </body>
    </html>
  );
}
