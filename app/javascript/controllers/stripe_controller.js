// stripe_controller.js
import { Controller } from "stimulus";

export default class extends Controller {
  connect() {
    // Create a script element and set its source to the Stripe Checkout script URL
    const script = document.createElement("script");
    script.src = "https://checkout.stripe.com/checkout.js";
    script.async = true;

    // Append the script element to the HTML's head
    document.head.appendChild(script);
  }
}
