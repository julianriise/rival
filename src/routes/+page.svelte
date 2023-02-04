<script>
  let name;

  const handleSubmit = async () => {
	fetch("/", {
	  method: "POST",
	  body: JSON.stringify({
		name
	  })
	})
	.then(res => res.json())
	.then(res => console.log(res))
	.catch(() => alert('Failed to submit'))
  }
</script>

<h1>Register</h1>
<form on:submit|preventDefault|stopPropagation={handleSubmit}>
  <input bind:value={name} required />
  <button type="submit">Submit</button>
</form>