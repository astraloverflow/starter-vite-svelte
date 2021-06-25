<script lang="ts">
  let value = 0;
  const increment = () => {
    console.log('Incrementing Value');
    value += 1
  }
</script>

<main>
  <div class="max-w-4xl p-4 mx-auto">
    <div class="p-4 bg-white rounded-lg shadow">
        <h1 class="text-5xl">Hello World</h1>
        <p class="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          <strong>Times button Has been clicked:</strong> {value}
        </p>
        <button class="button" on:click={increment}>
          Increment
        </button>
      </div>
  </div>
</main>
