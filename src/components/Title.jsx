import React from "react";

function Title({children, id}) {
    return (
      <a
      href="https://kenhendricks.me"
      class="absolute top-0 right-12 p-2 text-stone-300 rounded-br-lg rounded-bl-lg w-20 h-20 text-center justify-content text-4xl font-inter pt-4 transform transition duration-500 ease-in-out hover:-translate-y-1"
      style="
        background-color: rgb(28 25 23 / var(--tw-bg-opacity));
        font-weight: bold;
      "
      ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
</svg>
</a
    >
        <h1
            id={id && id}
            className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white"
        >
            {children}
        </h1>
    )
}

export default Title;
