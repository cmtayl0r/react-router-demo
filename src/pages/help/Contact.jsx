import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  // Get the data from the action to display any errors
  const actionData = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      {/* 
      // The Form component automatically ties to the action on the /help/contact route
      */}
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
          {actionData?.error?.email && (
            <p style={{ color: "red" }}>{actionData.error.email}</p>
          )}
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
          {actionData?.error?.message && (
            <p style={{ color: "red" }}>{actionData.error.message}</p>
          )}
        </label>
        <button>Submit</button>
        {/* // if there is an error, display it */}
        {/* {data && data.error && <p>{data.error}</p>} */}
      </Form>
      {actionData?.success && (
        <p style={{ color: "green" }}>{actionData.success}</p>
      )}
    </div>
  );
}

export const contactAction = async ({ request }) => {
  // Extract form data from the request
  const formData = await request.formData();
  // CReate an object to store the form data in a more readable format
  const submission = {
    email: formData.get("email"),
    message: formData.get("message"),
  };

  // Validation logic
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Email validation with if-else
  if (!submission.email) {
    errors.email = "Email is required"; // First error if email is missing
  } else if (!emailRegex.test(submission.email)) {
    errors.email = "Invalid email address"; // Second error if email format is wrong
  }

  // Message validation with if-else
  if (!submission.message) {
    errors.message = "Message is required"; // First error if message is missing
  } else if (submission.message.length < 10) {
    errors.message = "Message must be at least 10 characters long"; // Second error if message is too short
  }

  // Return errors if validation fails
  if (Object.keys(errors).length > 0) {
    return { error: errors };
  }

  // send post request to API or database etc

  // redirect the user if the submission is successful
  return redirect("/");
};
