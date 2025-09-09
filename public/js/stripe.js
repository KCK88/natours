/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe('pk_test_51RhHsCGbteGfINLqYJz3iiPtvM1SNznmaghqVFyBiT6FBUkcdXDxd4Q6VNVYf9Ikr9Bi7GWin3K80P17lVtFVAaC00YmOrWpU1')

export const bookTour = async (tourId) => {
  // 1) Get checkout session from API
  try {
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`,
    );
  // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    })
  } catch (err) {
    console.log(err);
    showAlert('Error', err);
  }
}