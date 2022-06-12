<script>
	import { base } from '$app/paths';
</script>

<nav class="navbar fixed-top navbar-expand-lg bg-info">
	<div class="container-fluid">
		<a class="navbar-brand" href="{base}/">Navbar</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarTogglerDemo02"
			aria-controls="navbarTogglerDemo02"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="{base}/about">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="{base}/blog">Blog</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="{base}/user">User</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
	a {
		color: white;
	}
</style>
