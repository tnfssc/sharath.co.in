<script lang="ts">
  import type { Response } from "./+page.server";
  export let form: Response | undefined;
</script>

<div>
  <a href="mailto:me@sharath.co.in" class="btn-xl btn-ghost btn text-3xl lowercase">me@sharath.co.in</a>

  <form action="/contact" method="post" class="flex flex-col">
    <div class="form-control">
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <input name="email" type="text" placeholder="Email" class="input-bordered input" />
      <label class="label">
        <span class="label-text-alt text-red-500">
          {#if form?.errors?.fieldErrors.email?.length}
            {form.errors.fieldErrors.email.join("")}
          {/if}
        </span>
      </label>
      <label class="label">
        <span class="label-text">Message</span>
      </label>
      <textarea name="message" class="textarea-bordered textarea" placeholder="Message" />
      <label class="label">
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
