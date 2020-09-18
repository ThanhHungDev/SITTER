<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Stripe Sample Connect Onboarding for Express accounts</title>
    <meta name="description" content="Stripe Sample Connect Onboarding for Express accounts" />

    <link rel="icon" href="favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/global.css" />
    <script src="https://js.stripe.com/v3/"></script>
    <script src="/script.js" defer></script>
  </head>

  <body>
    <div class="sr-root">
      <div class="sr-main">
        <header class="sr-header">
          <div class="sr-header__logo"></div>
        </header>

        <div class="sr-payment-summary payment-view">
          <h1 class="order-amount">Setup payouts to list your home on Kavholm</h1>
        </div>        

          <button id="submit">Setup payouts on Stripe</button>
        </div>
      </div>
    </div>
  </body>

  <script>
    let elmButton = document.querySelector("#submit");

    if (elmButton) {
        elmButton.addEventListener(
            "click",
            e => {
            elmButton.setAttribute("disabled", "disabled");
            elmButton.textContent = "Opening...";

            fetch("/onboard-user", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => {
                if (data.url) {
                    window.location = data.url;
                } else {
                    elmButton.removeAttribute("disabled");
                    elmButton.textContent = "<Something went wrong>";
                    console.log("data", data);
                }
                });
            },
            false
        );
    }
  </script>
</html>