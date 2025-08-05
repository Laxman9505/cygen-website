/** @format */

"use client";

import {
  AlertTriangle,
  Copyright,
  CreditCard,
  FileCheck,
  Gavel,
  Globe,
  MapPin,
  RefreshCw,
  Scale,
  Shield,
  Users,
  XCircle,
} from "lucide-react";
import Link from "next/link";

export function TermsAndConditionsContent() {
  const sections = [
    {
      id: "about-website",
      title: "About the Website",
      icon: Globe,
      content: [
        {
          subtitle: "1.",
          text: 'Welcome to www.cy-gen.com (the "Website"). The Website Provides Online software & E-commerce service (the "Services").',
        },
        {
          subtitle: "2.",
          text: 'The Website is operated by CYGEN IT CONSULTING AND SOFTWARE SOLUTIONS PVT LTD. Access to and use of the Website, or any of its associated Products or Services, is provided by Cygen IT and Consulting. Please read these terms and conditions (the "Terms") carefully. By using, browsing and/or reading the Website, this signifies that you have read, understood and agree to be bound by the Terms. If you do not agree with the Terms, you must cease usage of the Website, or any of Services, immediately.',
        },
        {
          subtitle: "3.",
          text: "Cygen IT and Consulting reserves the right to review and change any of the Terms by updating this page at its sole discretion. When Cygen IT and Consulting updates the Terms, it will use reasonable endeavours to provide you with notice of updates to the Terms. Any changes to the Terms take immediate effect from the date of their publication. Before you continue, we recommend you keep a copy of the Terms for your records.",
        },
      ],
    },
    {
      id: "acceptance",
      title: "Acceptance of the Terms",
      icon: FileCheck,
      content: [
        {
          subtitle: "",
          text: "You accept the Terms by remaining on the Website. You may also accept the Terms by clicking to accept or agree to the Terms where this option is made available to you by Cygen IT and Consulting in the user interface.",
        },
      ],
    },
    {
      id: "subscription",
      title: "Subscription to use the Services",
      icon: Users,
      content: [
        {
          subtitle: "1.",
          text: 'In order to access the Services, you must first purchase a subscription through the Website (the "Subscription") and pay the applicable fee for the selected Subscription (the "Subscription Fee").',
        },
        {
          subtitle: "2.",
          text: "In purchasing the Subscription, you acknowledge and agree that it is your responsibility to ensure that the Subscription you elect to purchase is suitable for your use.",
        },
        {
          subtitle: "3.",
          text: 'Once you have purchased the Subscription, you will then be required to register for an account through the Website before you can access the Services (the "Account").',
        },
        {
          subtitle: "4.",
          text: "As part of the registration process, or as part of your continued use of the Services, you may be required to provide personal information about yourself (such as identification or contact details), including:",
        },
        {
          subtitle: "",
          text: "Email address",
        },
        {
          subtitle: "",
          text: "Telephone number",
        },
        {
          subtitle: "5.",
          text: "You warrant that any information you give to Cygen IT and Consulting in the course of completing the registration process will always be accurate, correct and up to date.",
        },
        {
          subtitle: "6.",
          text: 'Once you have completed the registration process, you will be a registered member of the Website ("Member") and agree to be bound by the Terms. As',
        },
      ],
    },
    {
      id: "payment",
      title: "Payment",
      icon: CreditCard,
      content: [
        {
          subtitle: "1.",
          text: "Where the option is given to you, you may make payment of the Subscription Fee by way of:",
        },
        {
          subtitle: "",
          text: 'Credit Card Payment ("Credit Card")',
        },
        {
          subtitle: "",
          text: 'PayPal ("PayPal") Any Other suitable mode',
        },
        {
          subtitle: "2.",
          text: "All payments made in the course of your use of the Services are made using Stripe. In using the Website, the Services or when making any payment in relation to your use of the Services, you warrant that you have read, understood and agree to be bound by the Stripe terms and conditions which are available on their website.",
        },
        {
          subtitle: "3.",
          text: "You acknowledge and agree that where a request for the payment of the Subscription Fee is returned or denied, for whatever reason, by your financial institution or is unpaid by you for any other reason, then you are liable for any costs, including banking fees and charges, associated with the Subscription Fee.",
        },
        {
          subtitle: "4.",
          text: "You agree and acknowledge that Cygen IT and Consulting can vary the Subscription Fee at any time and that the varied Subscription Fee will come into effect following the conclusion of the existing Subscription Period.",
        },
      ],
    },
    {
      id: "refund-policy",
      title: "Refund Policy",
      icon: RefreshCw,
      content: [
        {
          subtitle: "",
          text: 'Cygen IT and Consulting will only provide you with a refund of the Subscription Fee in the event they are unable to continue to provide the Services or if the manager of Cygen IT and Consulting makes a decision, at its absolute discretion, that it is reasonable to do so under the circumstances. Where this occurs, the refund will be in the proportional amount of the Subscription Fee that remains unused by the Member (the "Refund").',
        },
      ],
    },
    {
      id: "copyright",
      title: "Copyright and Intellectual Property",
      icon: Copyright,
      content: [
        {
          subtitle: "1.",
          text: "The Website, the Services and all of the related products of Cygen IT and Consulting are subject to copyright. The material on the Website is protected by copyright under the laws of India and through international treaties. Unless otherwise indicated, all rights (including copyright) in the Services and compilation of the Website (including but not limited to text, graphics, logos, button icons, video images, audio clips, Website, code, scripts, design elements and interactive features) or the Services are owned or controlled for these purposes and are reserved by Cygen IT and Consulting or its contributors.",
        },
        {
          subtitle: "2.",
          text: "All trademarks, service marks and trade names are owned, registered and/or licensed by Cygen IT and Consulting, who grants to you a worldwide, non-exclusive, royalty-free, revocable license whilst you are a Member to:",
        },
        {
          subtitle: "",
          text: "use the Website pursuant to the Terms;",
        },
        {
          subtitle: "",
          text: "copy and store the Website and the material contained in the Website in your device's cache memory; and",
        },
        {
          subtitle: "",
          text: "print pages from the Website for your own personal and non-commercial use. Cygen IT and Consulting does not grant you any other rights whatsoever in relation to the Website or the Services. All other rights are expressly reserved by Cygen",
        },
        {
          subtitle: "",
          text: "Consulting.",
        },
        {
          subtitle: "3.",
          text: "Cygen IT and Consulting retains all rights, title and interest in and to the Website and all related Services. Nothing you do on or in relation to the Website will transfer any:",
        },
        {
          subtitle: "",
          text: "business name, trading name, domain name, trade mark, industrial design, patent, registered design or copyright, or",
        },
        {
          subtitle: "",
          text: "a right to use or exploit a business name, trading name, domain name, trade mark or industrial design, or",
        },
        {
          subtitle: "",
          text: "a thing, system or process that is the subject of a patent, registered design or copyright (or an adaptation or modification of such a thing, system or process),",
        },
        {
          subtitle: "",
          text: "to you.",
        },
        {
          subtitle: "4.",
          text: "You may not, without the prior written permission of Cygen IT and Consulting and the permission of any other relevant rights owners: broadcast, republish, up-load to a third party, transmit, post, distribute, show or play in public, adapt or change in any way the Services or third-party Services for any purpose, unless otherwise provided by these Terms. This prohibition does not extend to materials on the Website, which are freely available for re-use or are in the public domain.",
        },
      ],
    },
    {
      id: "termination",
      title: "Termination of Contract",
      icon: XCircle,
      content: [
        {
          subtitle: "1.",
          text: "The Terms will continue to apply until terminated by either you or by Cygen IT and Consulting as set out below.",
        },
        {
          subtitle: "2.",
          text: "If you want to terminate the Terms, you may do so by:",
        },
        {
          subtitle: "",
          text: "not renewing the Subscription prior to the end of the Subscription Period;",
        },
        {
          subtitle: "",
          text: "providing Cygen IT and Consulting with 30 days' notice of your intention to terminate; and",
        },
        {
          subtitle: "",
          text: "closing your accounts for all of the services which you use, where Cygen IT and Consulting has made this option available to you.",
        },
        {
          subtitle: "",
          text: "Your notice should be sent, in writing, to Cygen IT and Consulting via the 'Contact Us' link on our homepage.",
        },
        {
          subtitle: "3.",
          text: "Cygen IT and Consulting may at any time, terminate the Terms with you if:",
        },
        {
          subtitle: "",
          text: "you do not renew the Subscription at the end of the Subscription Period;",
        },
        {
          subtitle: "",
          text: "you have breached any provision of the Terms or intend to breach any provision;",
        },
        {
          subtitle: "",
          text: "Cygen IT and Consulting is required to do so by law;",
        },
        {
          subtitle: "",
          text: "the provision of the Services to you by Cygen IT and Consulting is, in the opinion of Cygen IT and Consulting, no longer commercially viable.",
        },
        {
          subtitle: "4.",
          text: "Subject to local applicable laws, Cygen IT and Consulting reserves the right to discontinue or cancel your membership at any time and may suspend or deny, in its sole discretion, your access to all or any portion of the Website or the Services without notice if you breach any provision of the Terms or any applicable law or if your conduct impacts Cygen IT and Consulting's name or reputation or violates the rights of those of another party.",
        },
      ],
    },
    {
      id: "indemnity",
      title: "Indemnity",
      icon: Shield,
      content: [
        {
          subtitle: "1.",
          text: "You agree to indemnify Cygen IT and Consulting, its affiliates, employees, agents, contributors, third party content providers and licensors from and against:",
        },
        {
          subtitle: "",
          text: "all actions, suits, claims, demands, liabilities, costs, expenses, loss and damage (including legal fees on a full indemnity basis) incurred, suffered or arising out of or in connection with Your Content;",
        },
        {
          subtitle: "",
          text: "any direct or indirect consequences of you accessing, using or transacting on the Website or attempts to do so; and/or",
        },
        {
          subtitle: "",
          text: "any breach of the Terms.",
        },
      ],
    },
    {
      id: "dispute-resolution",
      title: "Dispute Resolution",
      icon: Scale,
      content: [
        {
          subtitle: "1.",
          text: "Compulsory:",
        },
        {
          subtitle: "",
          text: "If a dispute arises out of or relates to the Terms, either party may not commence any Tribunal or Court proceedings in relation to the dispute, unless the following clauses have been complied with (except where urgent interlocutory relief is sought).",
        },
        {
          subtitle: "13.2.",
          text: "Notice:",
        },
        {
          subtitle: "",
          text: 'A party to the Terms claiming a dispute ("Dispute") has arisen under the Terms, must give written notice to the other party detailing the nature of the dispute, the desired outcome and the action required to settle the Dispute.',
        },
        {
          subtitle: "13.3.",
          text: "Resolution:",
        },
        {
          subtitle: "",
          text: 'On receipt of that notice ("Notice") by that other party, the parties to the Terms ("Parties") must:',
        },
        {
          subtitle: "",
          text: "Within 30 days of the Notice endeavour in good faith to resolve the Dispute expeditiously by negotiation or such other means upon which they may mutually agree;",
        },
        {
          subtitle: "",
          text: "If for any reason whatsoever, 90 days after the date of the Notice, the Dispute has not been resolved, the Parties must either agree upon selection of a mediator or request that an appropriate mediator be appointed by the President of the ..... or",
        },
        {
          subtitle: "",
          text: "his or her nominee;",
        },
        {
          subtitle: "",
          text: "The Parties are equally liable for the fees and reasonable expenses of a mediator and the cost of the venue of the mediation and without limiting the foregoing undertake to pay any amounts requested by the mediator as a pre-condition to the mediation commencing. The Parties must each pay their own costs associated with the mediation;",
        },
        {
          subtitle: "",
          text: "The mediation will be held in ....., India.",
        },
        {
          subtitle: "13.4.",
          text: "Confidential:",
        },
        {
          subtitle: "",
          text: 'All communications concerning negotiations made by the Parties arising out of and in connection with this dispute resolution clause are confidential and to the extent possible, must be treated as "without prejudice" negotiations for the purpose of applicable laws of evidence.',
        },
        {
          subtitle: "13.5.",
          text: "Termination of Mediation:",
        },
        {
          subtitle: "",
          text: "If 2 weeks have elapsed after the start of a mediation of the Dispute and the Dispute has not been resolved, either Party may ask the mediator to terminate the mediation and the mediator must do so.",
        },
      ],
    },
    {
      id: "venue-jurisdiction",
      title: "Venue and Jurisdiction",
      icon: MapPin,
      content: [
        {
          subtitle: "",
          text: "The Services offered by Cygen IT and Consulting is intended to be viewed by residents of India. In the event of any dispute arising out of or in relation to the Website, you agree that the exclusive venue for resolving any dispute shall be in the courts of Telangana, India.",
        },
      ],
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: Gavel,
      content: [
        {
          subtitle: "",
          text: "The Terms are governed by the laws of Telangana, India. Any dispute, controversy, proceeding or claim of whatever nature arising out of or in any way relating to the Terms and the rights created hereby shall be governed, interpreted and construed by, under and pursuant to the laws of Telangana, India, without reference to conflict of law principles, notwithstanding mandatory rules. The validity of this governing law clause is not contested. The Terms shall be binding to the benefit of the parties hereto and their successors and assigns.",
        },
      ],
    },
    {
      id: "independent-legal-advice",
      title: "Independent Legal Advice",
      icon: Users,
      content: [
        {
          subtitle: "",
          text: "Both parties confirm and declare that the provisions of the Terms are fair and reasonable and both parties having taken the opportunity to obtain independent legal advice and declare the Terms are not against public policy on the grounds of inequality or bargaining power or general grounds of restraint of trade.",
        },
      ],
    },
    {
      id: "severance",
      title: "Severance",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "",
          text: "If any part of these Terms is found to be void or unenforceable by a Court of competent jurisdiction, that part shall be severed and the rest of the Terms shall remain in force.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our
              services
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 ml-16">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-4">
                      {item.subtitle && (
                        <span className="text-orange-500 font-semibold flex-shrink-0 min-w-[40px]">
                          {item.subtitle}
                        </span>
                      )}
                      <p className="text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Questions about our Terms?
          </h3>
          <p className="text-blue-100 mb-6">
            If you have any questions about these Terms & Conditions, please
            contact us through our website.
          </p>
          <Link
            href="/enquiry"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <FileCheck className="w-5 h-5 mr-2" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
