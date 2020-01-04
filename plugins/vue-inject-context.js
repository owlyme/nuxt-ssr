export default (context, inject) => {
    console.log( inject)
  // Set the function directly on the context.app object
  context.app.myInjectedFunction3 = string => console.log('Okay, another function', string)
}
