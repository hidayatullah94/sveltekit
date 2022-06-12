<script context="module">
	export async function load({ fetch }) {
		const url = `https://jsonplaceholder.typicode.com/users`;
		const response = await fetch(url);
		const users = await response.json();
		console.log('data', users);

		return {
			props: {
				users
			}
		};
	}
</script>

<script>
	export let users;
</script>

<div class="container mt-5 ">
	<div class="row">
		<table class="table mt-5">
			<thead>
				<tr>
					<th scope="col">Id</th>
					<th scope="col">Name</th>
					<th scope="col">Username</th>
					<th scope="col">Email</th>
				</tr>
			</thead>
			{#each users as user}
				<tbody>
					<tr>
						<th scope="row">{user.id}</th>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>{user.email}</td>
					</tr>
				</tbody>
			{/each}
		</table>
	</div>
</div>
