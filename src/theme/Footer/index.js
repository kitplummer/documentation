/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import { useThemeConfig } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import ThemedImage from "@theme/ThemedImage";

function FooterLogo({ sources, alt, width, height }) {
  return (
    <ThemedImage
      className="footer__logo"
      alt={alt}
      sources={sources}
      width={width}
      height={height}
    />
  );
}

function Footer() {
  const { footer } = useThemeConfig();
  const { logo = {} } = footer || {};
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  if (!footer) {
    return null;
  }

  return (
    <footer className={styles.boxFooter}>
      <div className={styles.footerSpacing}>
        <div className="container margin-bottom--sm">
          <nav className={styles.containerFooter}>
            <div>
              <FooterLogo
                alt={logo.alt}
                sources={sources}
                width={logo.width}
                height={logo.height}
              />
              <div className={styles.footerContent} >
                <p className={styles.subLogo}>
                  The streaming data platform for developers
                </p>
                <p className={styles.address}>
                5758 Geary Blvd. #153<br/>
                San Francisco, CA 94121
                </p>
              </div>
            </div>
            <div className={styles.footerHeader}>
              What is Redpanda?
              <div className={styles.footerList}><a href="https://redpanda.com/platform-capabilities"> Capabilities</a></div>
              <div className={styles.footerList}><a href="https://university.redpanda.com/">Redpanda University</a></div>
              <div className={styles.footerList}><a href="https://redpanda.com/blog/redpanda-vs-kafka-faster-safer">Kafka vs Redpanda</a></div>
              <div className={styles.footerList}><a href="https://redpanda.com/blog/redpanda-official-jepsen-report-and-analysis">Jepsen report</a></div>
              <div className={styles.footerList}><a href="https://docs.redpanda.com/docs/get-started/quick-start/">Quick start guide</a></div>
            </div>
            <div className={styles.footerHeader}>
              Company
              <div className={styles.footerList}><a href="https://redpanda.com/contact">Contact</a></div>
              <div className={styles.footerList}><a href="https://redpanda.com/about-us">About us</a></div>
              <div className={styles.footerList}><a href="https://redpanda.com/careers">Careers</a></div>
              <div className={styles.footerList}><a href="https://redpanda.com/press">Press</a></div>
              <div className={styles.footerList}><a href="https://redpanda.com/scholarship">Scholarship</a></div>
            </div>
            <div className={styles.footerHeader}>
              Quick Links
              <div className={styles.footerList}><a href="https://redpanda.com/contact">Pricing</a></div>
              <div className={styles.footerList}><a href="https://docs.redpanda.com/docs/home/">Docs</a></div>
              <div className={styles.footerList}><a href="https://redpanda.com/blog">Blog</a></div>
              <div className={styles.footerList}><a href="https://support.redpanda.com/hc/en-us">Support</a></div>
              <div className={styles.footerList}><a href="https://redpanda.com/privacy-policy">Privacy policy</a></div>
              <div className={styles.footerList}><a href="https://redpanda.com/terms-of-use">Terms of use</a></div>
            </div>
          </nav>
        </div>
      </div>
      <div className="container margin-bottom--sm">
        <div className={styles.footerSeparator}></div>
        <div className={styles.footerLast}>
          <p className={styles.copyright}>© 2023 Redpanda Data Inc.</p>
        <div className={styles.cookieOrder}>
          <a
            class="optanon-show-settings"
            data-clog-click=""
            data-clog-ui-component="inc_footer_nav"
            data-clog-ui-element="btn_cookie_manage_settings"
            data-qa="cookie_preferences"
            href="#"
            className={styles.cookiePreference}
          >
            Cookie Preferences
          </a>
        </div>
        <div>
          <div className={styles.socialLinks}>
            <a
              href="https://twitter.com/redpandadata"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.55016 19.7502C16.6045 19.7502 21.5583 12.2469 21.5583 5.74211C21.5583 5.53117 21.5536 5.31554 21.5442 5.1046C22.5079 4.40771 23.3395 3.5445 24 2.55554C23.1025 2.95484 22.1496 3.21563 21.1739 3.32898C22.2013 2.71315 22.9705 1.74572 23.3391 0.606011C22.3726 1.1788 21.3156 1.58286 20.2134 1.80085C19.4708 1.01181 18.489 0.48936 17.4197 0.314295C16.3504 0.13923 15.2532 0.321295 14.2977 0.832341C13.3423 1.34339 12.5818 2.15495 12.1338 3.14156C11.6859 4.12816 11.5754 5.23486 11.8195 6.29054C9.86249 6.19233 7.94794 5.68395 6.19998 4.79834C4.45203 3.91274 2.90969 2.66968 1.67297 1.14976C1.0444 2.23349 0.852057 3.51589 1.13503 4.73634C1.418 5.95678 2.15506 7.02369 3.19641 7.72023C2.41463 7.69541 1.64998 7.48492 0.965625 7.10617V7.1671C0.964925 8.30439 1.3581 9.40683 2.07831 10.287C2.79852 11.1672 3.80132 11.7708 4.91625 11.9952C4.19206 12.1934 3.43198 12.2222 2.69484 12.0796C3.00945 13.0577 3.62157 13.9131 4.44577 14.5266C5.26997 15.14 6.26512 15.4808 7.29234 15.5015C5.54842 16.8714 3.39417 17.6144 1.17656 17.6109C0.783287 17.6103 0.390399 17.5861 0 17.5387C2.25286 18.984 4.87353 19.7516 7.55016 19.7502Z"
                  fill="#98A2B3"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/redpanda-data"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                  fill="#98A2B3"
                />
              </svg>
            </a>
            <a
              href="https://redpanda.com/slack"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8752 11.2499C20.9106 11.2499 21.75 10.4105 21.75 9.37508C21.75 8.33964 20.9105 7.50025 19.8751 7.50025C18.8395 7.50025 18 8.33971 18 9.37525V11.2499H19.8752ZM14.625 11.2499C15.6605 11.2499 16.5 10.4105 16.5 9.37492V4.12525C16.5 3.08971 15.6605 2.25024 14.625 2.25024C13.5895 2.25024 12.75 3.08971 12.75 4.12524V9.37492C12.75 10.4105 13.5895 11.2499 14.625 11.2499Z"
                  fill="#98A2B3"
                />
                <path
                  d="M4.12484 12.7501C3.08939 12.7501 2.25 13.5895 2.25 14.6249C2.25 15.6604 3.08947 16.4998 4.12492 16.4998C5.16045 16.4998 6 15.6603 6 14.6248V12.7501H4.12484ZM9.375 12.7501C8.33947 12.7501 7.5 13.5895 7.5 14.6251V19.8748C7.5 20.9103 8.33947 21.7498 9.375 21.7498C10.4105 21.7498 11.25 20.9103 11.25 19.8748V14.6251C11.25 13.5895 10.4105 12.7501 9.375 12.7501Z"
                  fill="#98A2B3"
                />
                <path
                  d="M12.7501 19.8752C12.7501 20.9106 13.5895 21.75 14.6249 21.75C15.6604 21.75 16.4998 20.9105 16.4998 19.8751C16.4998 18.8395 15.6603 18 14.6248 18L12.7501 18L12.7501 19.8752ZM12.7501 14.625C12.7501 15.6605 13.5895 16.5 14.6251 16.5L19.8748 16.5C20.9103 16.5 21.7498 15.6605 21.7498 14.625C21.7498 13.5895 20.9103 12.75 19.8748 12.75L14.6251 12.75C13.5895 12.75 12.7501 13.5895 12.7501 14.625Z"
                  fill="#98A2B3"
                />
                <path
                  d="M11.2498 4.12484C11.2498 3.08939 10.4104 2.25 9.37496 2.25C8.33952 2.25 7.50012 3.08947 7.50012 4.12492C7.50012 5.16045 8.33959 6 9.37512 6L11.2498 6L11.2498 4.12484ZM11.2498 9.375C11.2498 8.33947 10.4103 7.5 9.3748 7.5L4.12512 7.5C3.08959 7.5 2.25012 8.33947 2.25012 9.375C2.25012 10.4105 3.08959 11.25 4.12512 11.25L9.3748 11.25C10.4103 11.25 11.2498 10.4105 11.2498 9.375Z"
                  fill="#98A2B3"
                />
              </svg>
            </a>
            <a
              href="https://github.com/redpanda-data/redpanda"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z"
                  fill="#98A2B3"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@RedpandaData"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                width="33"
                height="24"
                viewBox="0 0 33 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.3038 3.74694C32.116 3.02209 31.7483 2.3612 31.2374 1.83041C30.7266 1.29962 30.0905 0.917555 29.3929 0.722449C26.8237 2.18956e-07 16.5 0 16.5 0C16.5 0 6.17627 2.18956e-07 3.60712 0.722449C2.90949 0.917555 2.27342 1.29962 1.76256 1.83041C1.25171 2.3612 0.883986 3.02209 0.696206 3.74694C0.21649 6.46931 -0.0163041 9.23244 0.000886751 12C-0.0163041 14.7676 0.21649 17.5307 0.696206 20.2531C0.883986 20.9779 1.25171 21.6388 1.76256 22.1696C2.27342 22.7004 2.90949 23.0824 3.60712 23.2776C6.17627 24 16.5 24 16.5 24C16.5 24 26.8237 24 29.3929 23.2776C30.0905 23.0824 30.7266 22.7004 31.2374 22.1696C31.7483 21.6388 32.116 20.9779 32.3038 20.2531C32.7835 17.5307 33.0163 14.7676 32.9991 12C33.0163 9.23244 32.7835 6.46931 32.3038 3.74694V3.74694ZM13.2002 17.1429V6.85714L21.7679 12L13.2002 17.1429Z"
                  fill="#98A2B3"
                />
              </svg>
            </a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
