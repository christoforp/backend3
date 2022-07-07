/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line linebreak-style
// logger have two function => "info" and "error". function of "info" purpose is to print all normal consolelog messages.
// logger function of error, which purpose is to print all errormessages.

const info = (...params) => { // We initalize variable  "info", which get value => (..params)
    if(process.env.NODE_ENV !=='test') // We are modifying logger, that   testmode loggermessages  can not be printed in console, because without this it obstructing those printing.
    console.log(...params) // "console.log(..params)" purpose is to print that value
}

const error = (...params) => { // We initialize variable "error", which get value => {..params}
    if(process.env.NODE_ENV !== 'test') // We are modifying logger, that   testmode loggermessages  can not be printed in console, because without this it obstructing those printing.
    console.error(...params)  // This means that if we referred to it, then we conduct things inside of that {..params}
    // "console.error" purpose is print all errormessages and that variables {...params} value  in to terminal
}


// It is also good to separate logger to own module, for example if we want make printing to file or external service like as Graylog then we make changes only to one place.

module.exports = {
    info, error
  }



