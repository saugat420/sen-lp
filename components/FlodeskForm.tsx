import { readFileSync } from "node:fs";
import path from "node:path";

const embedPath = path.join(process.cwd(), "public", "flodesk-embed.html");

const redirectAfterSuccess = `
  <script>
    (function () {
      var root = document.querySelector('.ff-6a38ce080ab797ba91772c82');
      if (!root) return;
      var redirectTimer;
      var redirectWhenReady = function () {
        if (root.getAttribute('data-ff-stage') !== 'success' || redirectTimer) return;
        redirectTimer = window.setTimeout(function () {
          window.location.assign('/thanks');
        }, 1600);
      };
      new MutationObserver(redirectWhenReady).observe(root, {
        attributes: true,
        attributeFilter: ['data-ff-stage']
      });
      redirectWhenReady();
    })();
  </script>`;

const landingPageFormStyles = `
  <style>
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .ff-6a38ce080ab797ba91772c82__container {
      max-width: none;
      background: transparent;
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .ff-6a38ce080ab797ba91772c82__form {
      padding: 0;
      color: #000;
      text-align: left;
      font-family: Outfit, Arial, Helvetica, sans-serif;
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .ff-6a38ce080ab797ba91772c82__title,
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .ff-6a38ce080ab797ba91772c82__subtitle {
      display: none;
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .ff-6a38ce080ab797ba91772c82__fields {
      margin: 0;
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .ff-6a38ce080ab797ba91772c82__field {
      display: flex;
      flex-direction: column;
      margin: 0 0 16px;
      font-family: Outfit, Arial, Helvetica, sans-serif;
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .ff-6a38ce080ab797ba91772c82__label {
      position: relative;
      order: 1;
      display: block;
      padding: 0;
      margin: 0 0 8px;
      overflow: visible;
      white-space: normal;
      color: #000;
      border: 0;
      opacity: 1 !important;
      font-family: Outfit, Arial, Helvetica, sans-serif;
      font-size: 14px;
      font-weight: 700;
      line-height: 1.25;
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .ff-6a38ce080ab797ba91772c82__label > div {
      display: none;
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 label[for$="firstName"]::after {
      content: "First Name";
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 label[for$="email"]::after {
      content: "Email Address";
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 label[for$="cTOPpTXCG1"]::after {
      content: "WhatsApp Number";
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 label[for$="firstName"]::before,
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 label[for$="email"]::before,
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 label[for$="cTOPpTXCG1"]::before {
      position: absolute;
      top: 0;
      color: #ef2029;
      content: "*";
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 label[for$="firstName"]::before {
      left: 76px;
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 label[for$="email"]::before {
      left: 94px;
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 label[for$="cTOPpTXCG1"]::before {
      left: 123px;
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .fd-form-control:not(:placeholder-shown) + .fd-form-label {
      opacity: 1;
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .ff-6a38ce080ab797ba91772c82__control {
      order: 2;
      height: auto;
      padding: 14px 16px;
      border: 1px solid #d9e4fa;
      border-radius: 16px;
      background: #fff;
      color: #000;
      font-family: Outfit, Arial, Helvetica, sans-serif;
      font-size: 16px;
      line-height: 1.25;
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .fd-form-control::placeholder {
      color: #6e6e6e !important;
      opacity: 1 !important;
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .ff-6a38ce080ab797ba91772c82__control:focus {
      border-color: #1149a6;
      box-shadow: 0 0 0 4px rgba(17, 73, 166, 0.1);
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .ff-6a38ce080ab797ba91772c82__footer {
      margin-top: 24px;
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .ff-6a38ce080ab797ba91772c82__button {
      padding: 16px 20px;
      border: 0;
      border-radius: 16px;
      background: #1149a6;
      box-shadow: 0 12px 22px -10px rgba(17, 73, 166, 0.75);
      font-family: Outfit, Arial, Helvetica, sans-serif;
      font-size: 16px;
      font-weight: 800;
      line-height: 1.25;
      text-transform: none;
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .ff-6a38ce080ab797ba91772c82__button > div {
      display: none;
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .ff-6a38ce080ab797ba91772c82__button::after {
      content: "Submit & Reserve My Free Seat";
    }
    .flodesk-landing-shell [data-ff-el="root"].ff-6a38ce080ab797ba91772c82 .ff-6a38ce080ab797ba91772c82__button:hover {
      background: #0e3e8f;
    }
  </style>`;

export function FlodeskForm() {
  const embed = readFileSync(embedPath, "utf8");

  return (
    <div className="flodesk-landing-shell rounded-3xl border border-white/90 bg-white/90 p-5 text-left shadow-premium backdrop-blur sm:p-7">
      <div dangerouslySetInnerHTML={{ __html: `${embed}${redirectAfterSuccess}${landingPageFormStyles}` }} />
      <p className="font-outfit mt-4 rounded-xl border border-[#ffc9cd] bg-[#fff1f2] px-4 py-3 text-center text-sm font-bold leading-5 text-[#c61f29]">Only 67 seats remaining... Hurry up!</p>
    </div>
  );
}
