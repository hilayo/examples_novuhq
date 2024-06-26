import { Client, workflow } from "@novu/framework";
import { renderShippingOrderEmail } from "./emails/shipping-order-confirmation";

export const client = new Client({
  /**
   * Enable this flag only during local development
   */
  strictAuthentication: false,
});

/**
 * Amazon Shipping Order Email Workflow
 */
export const amazonShippingOrderEmail = workflow(
  "amazon-shippingorder-email",
  async ({ step, payload }) => {
    await step.email(
      "send-email",
      async (inputs) => {
        return {
          subject: "Shipping order confirmation",
          body: renderShippingOrderEmail(inputs, payload),
        };
      },
      {
        inputSchema: {
          type: "object",
          properties: {
            components: {
              title: "Add Custom Fields:",
              type: "array",
              default: [{
                "componentType": "shoes",
                "componentShoeItems": [
                  {
                    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    text: "Shoe 1"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    text: "Shoe 2"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    text: "Shoe 3"
                  }
                ],
              }],
              items: {
                type: "object",
                properties: {
                  componentType: {
                    title: "Recommendations",
                    type: "string",
                    enum: [
                      "shoes",
                      "moisturizers",
                      "gadgets",
                      "all"
                    ],
                    default: "shoes",
                  },
                  componentText: {
                    type: "string",
                    default: "",
                  },
                },
              },
            },
            topText: {
              type: "string",
              default: "We wanted to let you know that we have shipped your items.",
              title: "Top Text"
            },
          },
        },
      },
    );
  },
  { payloadSchema: {
      type: "object",
      properties: {
        orderArrivalLocation: {
          title: "Order Arrival Location",
          type: "string",
          default: "Moddin, Israel"
        },
        orderArrivalDate: {
          title: "Order Arrival Date",
          type: "string",
          default: formattedDate,
        },
        orderID: {
          title: "ORDER ID",
          type: "string",
          default: "112-6949858-2887402"
        },
      }
    }
  },
);

