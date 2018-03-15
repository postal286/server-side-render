import React from "react";
import Link from 'next/link';

const footerLinks = {
  'Home': '/',
  'Posts': '/posts',
  'Admin Login': '/admin',
};

const renderFooterLinksArray = () => {
  const linksLabels = Object.keys(footerLinks);
  const links = [];
  for (let i = 0; i < linksLabels.length; i++) {
    links.push(
      <li className="footer__link-wrapper" key={i}>
        <Link href={footerLinks[linksLabels[i]]}>
          <a className="footer__link">
            {linksLabels[i]}
          </a>
        </Link>
        <style jsx>{`
          .footer__link-wrapper {
            position: relative;
            margin-right: 20px;
          }
          .footer__link-wrapper:after {
            content: '•';
            display: block;
            position: absolute;
            right: -14px;
            color: #FFCD21;
            top: 0;
            bottom: 0;
          }
          .footer__link {
            padding: 10px 0;
            position: relative;
            text-transform: uppercase;
            color: #444;
            font-weight: 500;
            text-shadow: none;
            transition: color 0.3s;
          }
          .footer__link:hover,
          .footer__link:focus {
            text-decoration: none;
            color: #FFCD21;
            outline: none;
          }
          .footer__link:before,
          .footer__link:after {
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            background: #333;
            content: '';
            opacity: 0;
            transition: opacity 0.3s, transform 0.3s;
            transform: translateY(0);
          }
          .footer__link:hover:before,
          .footer__link:focus:before,
          .footer__link:hover:after,
          .footer__link:focus:after {
            opacity: 1;
            transform: translateY(0px);
          }

          .footer__link:before {
            top: 0;
            transform: translateY(15px);
          }
          .footer__link:after {
            bottom: 0;
            transform: translateY(-15px);
          }
          .footer__link:last-child {
            margin-right: 0;
          }
        `}</style>
      </li>
    );
  }
  return links;
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__inner-wrapper">
        <ul className="footer__links-wrapper">
          {renderFooterLinksArray()}
        </ul>
      </div>
      <style jsx>{`
        .footer {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: #efefef;
          text-align: center;
          transition: all .3 ease;
        }
        .footer:hover {
          background-color: #bbb;
        }
        .footer__inner-wrapper {
          padding: 1rem;
          box-shadow: 0px 1px 9px 0px rgba(50,50,50,0.5);
        }
        .footer__links-wrapper {
          position: relative;
          display: inline-block;
          outline: none;
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-flex;
          margin: 0;
          padding: 0;
          list-style-type: none;
        }
      `}</style>
    </div>
  );
};

export default Footer;
