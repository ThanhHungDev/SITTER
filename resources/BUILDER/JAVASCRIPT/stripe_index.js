(function() {
    'use strict';
    var stripe = Stripe(STRIPE_PUBLIC_KEY, {
            locale: 'ja'
        });
    var elements = stripe.elements();
    var elementStyles = {
        base: {
            color: '#000',
            fontWeight: 600,
            fontFamily: 'Quicksand, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',

            ':focus': {
                color: '#424770',
            },

            '::placeholder': {
                color: '#9BACC8',
            },

            ':focus::placeholder': {
                color: '#CFD7DF',
            },
        },
        invalid: {
            color: '#000',
            ':focus': {
                color: 'red',
            },
            '::placeholder': {
                color: '#FFCCA5',
            },
        },
    };

    var elementClasses = {
        focus: 'focus',
        empty: 'empty',
        invalid: 'invalid',
    };

    var cardNumber = elements.create('cardNumber', {
        style: elementStyles,
        classes: elementClasses,
    });
    cardNumber.mount('#input-card-number');

    var cardExpiry = elements.create('cardExpiry', {
        style: elementStyles,
        classes: elementClasses,
    });
    cardExpiry.mount('#input-card-expiry');

    var cardCvc = elements.create('cardCvc', {
        style: elementStyles,
        classes: elementClasses,
    });
    cardCvc.mount('#input-card-cvc');

    var postalCode = elements.create('postalCode', {
        style: elementStyles,
        classes: elementClasses,
    });
    postalCode.mount('#input-zip');

    var form = document.getElementById('form-collect-card');
        form.addEventListener('submit', function(e) {
        e.preventDefault();
        createToken();
    });

    function stripeTokenHandler(token) {
        // Insert the token ID into the form so it gets submitted to the server
        var form = document.getElementById('form-collect-card');
        var hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'stripeToken');
        hiddenInput.setAttribute('value', token.id);
        form.appendChild(hiddenInput);

        // Submit the form
        form.submit();
    }

    function createToken() {
        stripe.createToken(cardNumber).then(function(result) {
            if (result.error) {
            // Inform the user if there was an error
            var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
            } else {
            // Send the token to your server
                console.log(result);
                stripeTokenHandler(result.token);
            }
        });
    };

    function showError(event) {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
            displayError.textContent = event.error.message;
        } else {
            displayError.textContent = '';
        }
    }

    cardNumber.on('change', function(event) {
        showError(event);
    });
    cardExpiry.on('change', function(event) {
        showError(event);
    });
    cardCvc.on('change', function(event) {
        showError(event);
    });
    postalCode.on('change', function(event) {
        showError(event);
    });
    // registerElements([cardNumber, cardExpiry, cardCvc, postalCode], 'form-collect-card');
})();