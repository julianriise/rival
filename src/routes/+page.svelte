<script>
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
let username;
const handleSubmit = async (event) => {
  event.preventDefault();
  await prisma.user.create({
	data: {
	  name: username,
	  email: `${username}@example.com`,
	},
  });
};
</script>

<h1>Register</h1>
<form on:submit={handleSubmit}>
  <div>
	<div>
	  <input id="username" name="username" type="text" bind:value={username} required placeholder="Username" />
	</div>
	<div>
	  <button type="submit">Register</button>
	</div>
  </div>
</form>