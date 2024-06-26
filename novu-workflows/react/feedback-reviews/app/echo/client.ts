import { Client, workflow } from "@novu/framework";
import { feedbackEmail } from "./emails/feedback";
import { PlaidVerifyIdentityEmailProps } from "./emails/feedback";
export const client = new Client({
  /**
   * Enable this flag only during local development
   */
  strictAuthentication: false,
});

// ------------------3. product review (changes required)----------------------------


export const feedbackEmailWorkflow = workflow(
  "product-feedback-email",
  async ({ step, payload }) => {

    // introducing delay here
    await step.delay('delay-1-week', async () => {
      return {
        type: "regular",
        unit: 'days', // 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months'
        amount: 2, // the number of units to delay workflow execution for
      };
    });

    await step.email(
      "send-email",
      async () => {
        return {
          subject: "You have a new review",
          body: feedbackEmail(payload as PlaidVerifyIdentityEmailProps),
        };
      }
    );
  },
  {
    payloadSchema: {
      type: "object",
      properties: {
        companyLogo: {
          type: "string",
          title: "Company Logo",
          default: `https://react-email-demo-48zvx380u-resend.vercel.app/static/airbnb-logo.png`,
        },
        components: {
          title: "Add Custom Fields:",
          type: "array",
          default: [],
          items: {
            type: "object",
            properties: {
              componentType: {
                type: "string",
                enum: [
                  "text", "divider", "button", "button-link", "image", "image-2", "image-3", "heading",
                ],
                default: "text",
              },
              componentText: {
                type: "string",
                default: "",
              },
              componentLink: {
                type: "string",
                default: "https://enterlink.com",
                format: "uri",
              },
              align: {
                type: "string",
                enum: ["left", "center", "right"],
                default: "center",
              },
              componentListItems: {
                type: "array",
                default: [],
                items: {
                  type: "object",
                  properties: {
                    title: {
                      type: "string"
                    },
                    body: {
                      type: "string"
                    }
                  }
                }
              }
            },
          },
        },
        headerText: {
          type: "string",
          title: "Heading text",
          default: "Here's the latest review"
        },
        headerTextSize: {
          type: "string",
          enum: ["20px", "25px", "30px", "35px"],
          default: "25px"
        },
        headerTextColour: {
          type: "string",
          enum: ['#059A05', '#f00', '#08080A'],
          default: "#08080A"
        },
        bodyText: {
          type: "string",
          title: "Body Text",
          default: "“Alan was a great guest! Easy communication, the apartment was left in great condition, very polite, and respectful of all house rules. He’s welcome back anytime and would easily recommend him to any host!”",
        },
        questionOne: {
          type: "string",
          title: "First common question",
          default: "How do reviews work?",
        },
        linkToAnswerOne: {
          type: "string",
          title: "link to answer one",
          default: "https://airbnb.com/help/article/13",
        },
        questionTwo: {
          type: "string",
          title: "First common question",
          default: "How do star ratings work?",
        },
        linkToAnswerTwo: {
          type: "string",
          title: "link to answer one",
          default: "https://airbnb.com/help/article/14",
        },
        questionThree: {
          type: "string",
          title: "First common question",
          default: "Can I leave a review after 14 days?",
        },
        linkToAnswerThree: {
          type: "string",
          title: "link to answer one",
          default: "https://airbnb.com/help/article/15",
        },
        btnColor: {
          type: "string",
          title: "button color",
          enum: ['#ff5a5f', '#f00', '#f0f'],
          default: '#ff5a5f'
        },
        txtSize: {
          type: "string",
          enum: ["10px", "15px", "25px"],
          default: "15px"
        }
      },
      required: ["companyLogo", "bodyText"],
    },
  },
);