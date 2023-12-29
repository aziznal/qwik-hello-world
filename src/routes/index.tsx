import { $, component$, useSignal } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const specialHighlightToggle = useSignal(false);

  const toggleToggle = $(() => {
    console.log("Special higlight toggle clicked");
    specialHighlightToggle.value = !specialHighlightToggle.value;
  });

  return (
    <div class="mx-auto flex h-full w-fit flex-col items-center justify-center">
      <h1 class="mb-4 text-xl font-bold">
        This is the root route. Try visiting one of the following:
      </h1>

      <button
        class="rounded-lg bg-blue-500 p-4 text-white hover:bg-blue-600"
        onClick$={toggleToggle}
      >
        Toggle Special Highlight: {specialHighlightToggle.value ? "ON" : "OFF"}
      </button>

      <ul class="ml-12 flex w-full list-disc flex-col gap-2">
        <li
          class={{
            "cursor-pointer transition-all ": true,
            "hover:text-blue-600": !specialHighlightToggle.value,
            "hover:text-red-600": specialHighlightToggle.value,
          }}
        >
          <Link href="/demo/flower">/demo/flower</Link>
        </li>

        <li
          class={{
            "cursor-pointer transition-all ": true,
            "hover:text-blue-600": !specialHighlightToggle.value,
            "hover:text-red-600": specialHighlightToggle.value,
          }}
        >
          <Link href="/demo/todolist">/demo/todolist</Link>
        </li>
      </ul>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Hello World!",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
