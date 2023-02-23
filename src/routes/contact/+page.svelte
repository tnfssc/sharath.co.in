<script lang="ts">
  import type { Response } from "./+page.server";

  export let form: Response | undefined;
</script>

<div>
  <span class="flex flex-col items-center">
    <span>Mail me at</span>
    <a href="mailto:me@sharath.co.in" class="btn-xl btn-ghost btn text-3xl lowercase">me@sharath.co.in</a>
  </span>
  <div class="pt-16 text-center">or leave a message</div>
  <form action="/contact" method="post" class="flex flex-col">
    <div class="form-control">
      <label class="label" for="email">
        <span class="label-text">Email</span>
      </label>
      <input name="email" type="text" placeholder="Email" class="input-bordered input" id="email" />
      <label class="label" for="email">
        <span class="label-text-alt text-red-500">
          {#if form?.errors?.fieldErrors.email?.length}
            {form.errors.fieldErrors.email.join("")}
          {/if}
        </span>
      </label>
      <label class="label" for="message">
        <span class="label-text">Message</span>
      </label>
      <textarea name="message" class="textarea-bordered textarea" placeholder="Message" id="message" />
      <label class="label" for="message">
        <span class="label-text-alt text-red-500">
          {#if form?.errors?.fieldErrors.message?.length}
            {form.errors.fieldErrors.message}
          {/if}
        </span>
      </label>
    </div>
    <button type="submit" class="btn-primary btn">Submit</button>
  </form>
</div>
