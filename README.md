# EthView

A dashboard for all of your Ethereum related financial actvity. View ETH balance, ERC20 balances, and DeFi activity in one central location. The dashboard is only reading data - no wallet or signature required, and is designed to allow the user to simply type or save any address and view data. So keep the ledger locked away, check on a device without metamask, or use your phone on the go.

The application is fully client-side and does not save any data anywhere, other than the most recently used address in local storage, and possibly some configuration data later in local storage.

<img src="https://i.imgur.com/Ivd3s3s.jpg" alt="mobile ui" width="400px">

## Technologies
* React - all functional components and hooks
* Redux
* Redux-saga (lightly used so far)
* styled-components
* Material UI for some components
* ethers.js for web3

## Getting Started
Download the project locally and ```npm install``` then ```npm start```

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Please follow technology & style standards currently used and bulletted under 'Technologies' header
4. Commit your changes (`git commit -am 'Add some fooBar'`)
5. Push to the branch (`git push origin feature/fooBar`)
6. Create a new Pull Request for staging branch in this repo

## To Do:
* Exception handling - component error states, 'reload' action, timeouts
* Loading indicators & empty states
* Logos for all ERC20s
* Define full color palette
* Desktop Layout