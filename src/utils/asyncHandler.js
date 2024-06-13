/**
 * Wraps an asynchronous request handler function in a try-catch block to handle errors.
 * This function ensures that any unhandled errors in the async handler are caught and passed
 * to the next middleware in the stack, typically an error handling middleware.
 *
 * @param {Function} requestHandler - The asynchronous function handling the request.
 * @returns {Function} A function that takes Express.js request, response, and next function, 
 * and handles any errors that occur during execution by forwarding them to the next error handling middleware.
 */


const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };







/**NOTE - Using try catch syntax  */

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
