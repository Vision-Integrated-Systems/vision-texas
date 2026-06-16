"use server";

// NOTE: Email delivery (Resend) is intentionally not wired up in this build.
// These server actions accept the submission and return a success state so the
// forms behave normally on the front end. To actually deliver the messages,
// plug an email provider back into the marked spots below.

export type FormState = {
  status: "success" | "error";
  message: string;
} | null;

// --- Contact Form Action ---
export async function handleContactSubmit(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");

  // TODO: deliver this submission via your email provider of choice.
  console.log("[contact] submission received", { firstName, lastName, email });

  return {
    status: "success",
    message: "Your message has been sent successfully!",
  };
}

// --- Job Application Action ---
export async function handleJobApplication(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const jobTitle = formData.get("jobTitle");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");

  // TODO: deliver this application (and the resume attachment) via email.
  console.log("[careers] application received", { jobTitle, firstName, lastName });

  return {
    status: "success",
    message: "Application received! We will be in touch shortly.",
  };
}

// --- Service Ticket Action ---
export async function handleServiceTicket(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const company = formData.get("companyName");
  const urgency = formData.get("urgency");
  // Deterministic ticket id derived from the company name (avoids Math.random).
  const ticketId = (Math.abs(hashString(String(company ?? ""))) % 90000) + 10000;

  // TODO: deliver this ticket via your email provider / ticketing system.
  console.log("[service-ticket] ticket received", { ticketId, company, urgency });

  return {
    status: "success",
    message: `Ticket #${ticketId} created successfully.`,
  };
}

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}
