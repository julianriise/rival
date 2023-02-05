<script>
	import { onMount } from "svelte";
	import { PrismaClient } from "@prisma/client/runtime";
	const prisma = new PrismaClient();
	let name;
	
	async function handleSubmit(event) {
	  event.preventDefault();
	  const user = await prisma.user.create({ data: { name } });
	  console.log(user);
	}
	onMount(() => {
	  name = "";
	});
</script>

<h1>Register</h1>
<form on:submit={handleSubmit}>
  <input bind:value={name} />
  <button type="submit">Submit</button>
</form>