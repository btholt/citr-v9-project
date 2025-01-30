import { useMutation } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { postContact } from "../api/postContact";
import { useFormStatus } from "react-dom";

export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  const { isSuccess, mutate } = useMutation({
    mutationKey: ["contact"],
    mutationFn: function (formData) {
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
  });

  return (
    <div className="contact">
      <h2>Contact</h2>
      {isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form action={mutate}>
          <ContactInput type="text" name="name" placeholder="Name" />
          <ContactInput type="email" name="email" placeholder="Email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}

function ContactInput(props) {
  const { pending } = useFormStatus();
  return <input disabled={pending} {...props} />;
}
