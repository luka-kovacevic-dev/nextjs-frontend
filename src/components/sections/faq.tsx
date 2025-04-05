import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const categories = [
  {
    title: 'Pre-purchase',
    questions: [
      {
        question: 'Do I need to buy a MailWizz license?',
        answer:
          'Yes. We request you to purchase it directly from the official website through Envato Marketplace. Alternatively, you can bring in your existing license.',
        link: 'https://codecanyon.net/item/mailwizz-email-marketing-application/6122150',
      },
      {
        question: 'Do you provide an outgoing SMTP relay?',
        answer:
          "No. We don't provide you with an outgoing SMTP relay with our basic hosting packages. With that said, MailWizz supports a number of services that you can configure (Eg. Amazon SES, SendGrid, etc.). If you are signing up for our full-service email marketing packages, then YES, we provide you with an outgoing SMTP relay and look after every aspect of your email delivery.",
      },
      {
        question: 'Where can I find my MailWizz license key?',
        answer:
          'You can find your MailWizz license key in your Envato Marketplace account. It is referred to as an "Item Purchase Code". See this guide for more information.',
        link: 'https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code',
      },
      {
        question: 'Can you install MailWizz on my own server?',
        answer:
          'No, but the MailWizz team offers installation services for a fee. You can find out more on their website.',
        link: 'https://mailwizz.com',
      },
      {
        question:
          'How many sending domains/lists/contacts/delivery servers are allowed?',
        answer:
          "Unlimited. We don't restrict you on anything. We apply fair usage policy. You can have as many delivery servers, domains, contacts, and lists as possible.",
      },
    ],
  },
  {
    title: 'Account-related',
    questions: [
      {
        question: 'Do I get access to MailWizz backend admin panel?',
        answer:
          'Yes, you get full access to the MailWizz backend administration panel. We only disable access to certain pages for security reasons. These pages are not crucial for making the most out of MailWizz.',
      },
      {
        question: 'Is support free, or do I need to Google everything?',
        answer:
          'Our support is free. We have 24/7 live chat support available for all of our customers. For basic hosting packages, we only support you with issues relating to the hosting. For full-service email marketing packages, we support you with issues relating to the email marketing.',
      },
    ],
  },
  {
    title: 'Other',
    questions: [
      {
        question: 'Do you provide email deliverability consulting?',
        answer:
          'Yes and no. We provide it for a fee. You can reach out to us and ask us for a quote. For full-service email marketing packages, we provide you with email deliverability consulting as part of the package.',
      },
      {
        question: 'Do you restrict on the types of emails we could send?',
        answer:
          'No but we are serious about spam. If we notice you are sending spam, we will immediately terminate your account. We also do not service businesses involved in adult content, gambling, payday loans, multi-level marketing, tobacco, cannabis, vaping, firearms, or those that promote illegal activities.',
      },
    ],
  },
];

export const FAQ = ({
  headerTag = 'h2',
  className,
  className2,
}: {
  headerTag?: 'h1' | 'h2';
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn('py-28 lg:py-32', className)}>
      <div className="container max-w-5xl">
        <div className={cn('mx-auto grid gap-16 lg:grid-cols-2', className2)}>
          <div className="space-y-4">
            {headerTag === 'h1' ? (
              <h1 className="text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                Got questions?
              </h1>
            ) : (
              <h2 className="text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                Got questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-normal font-medium lg:mx-auto">
              If you can't find what you're looking for,{' '}
              <Link href="/contact" className="themed-link">
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4 font-medium">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                        {item.link && (
                          <>
                            {' '}
                            <Link
                              href={item.link}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              className="themed-link"
                            >
                              See more
                            </Link>
                          </>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
