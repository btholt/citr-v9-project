export async function postContact(name, email, message) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });
  if (!response.ok) {
    console.error("asa");
    throw new Error("Network Error");
  }

  return response.json();
}
