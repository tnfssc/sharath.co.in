import { env } from "$env/dynamic/private";
import { fail } from "@sveltejs/kit";
import { z } from "zod";
import type { Actions } from "./$types";

const schema = z.object({
  email: z.string().email(),
  message: z.string().min(1),
});

export type Response = {
  message: string;

  errors?: z.ZodError<z.infer<typeof schema>>["formErrors"];
};

export const actions = {
  default: async ({ request, fetch }) => {
    try {
      const data = await request.formData();
      const { email, message } = await schema.parseAsync({ email: data.get("email"), message: data.get("message") });
      if (!env.CONTACT_DISCORD_WEBHOOK) return fail(500, { message: "Something went wrong" });
      const res = await fetch(env.CONTACT_DISCORD_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: `@here\n**Email:** ${email}\n**Message:** ${message}` }),
      });
      if (res.status !== 204) return fail(500, { message: "Something went wrong" });
      return {
        status: 200,
        body: { message: "Message sent" },
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const { formErrors } = error as z.ZodError<z.infer<typeof schema>>;
        return fail(400, { message: "Invalid data", errors: formErrors });
      }
      console.error(error);
      return fail(500, { message: "Something went wrong" });
    }
  },
} satisfies Actions;
