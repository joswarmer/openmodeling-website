<script>
	import LandingPageFooter from './LandingPageFooter.svelte';
	import AppBar from '$lib/appbar/AppBar.svelte';
</script>

<main class="main-window">
	<AppBar />
	<div class="content-box">
		<section class="landing-herosection">
			<h1 class="landing-name-text">Welcome to OpenModeling</h1>
			<h2>Making DSL's Work in Practice</h2>
			<!--			<div class="landing-started">-->
			<!--				<a href="/Documentation/Overview/Getting_Started"-->
			<!--					>Getting Started-->
			<!--					<span class="landing-arrow">-->
			<!--						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 412" height="28px"-->
			<!--							>&lt;!&ndash;!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.&ndash;&gt;<path-->
			<!--								fill="currentColor"-->
			<!--								d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"-->
			<!--							/></svg-->
			<!--						>-->
			<!--					</span>-->
			<!--				</a>-->
			<!--			</div>-->
		</section>

		<section class="landing-main-text">
			<div class="landing-text">
				<p><img src="/images/jos2.jpg" class="image-jos" /></p>
				<p class="see-me">
					OpenModeling is the website of <a target="_blank" href="https://www.linkedin.com/in/jos-warmer-634146/">Jos Warmer</a>,
					specialized in model driven development (MDD). I believe that applying MDD can result
					in big improvements in software development. And I do mean vastly, hugely, mindbogglingly big improvements. That is, in the right
					context and applied correctly. The most successful project and companies using MDD almost exclusively use Domain Specific
					Languages. They define their own DSLs for their own specific domain and then build an environment suitable for working with these
					DSLs. On this site you will find information about domain specific languages, model driven development, myself and the services
					that I can deliver for you.
				</p>
				<p>
					Jos is heavily involved in the <a href="LionWeb/Overview">LionWeb</a> initiative and is the chief architect of
					<a href="/Freon/Overview">Freon</a>, an open source web native based language workbench. As a member of the UML Core team he has
					actively participated in the definition of the UML standard. Within the UML team he was the chief architect of the Object
					Constraint Language (OCL). Jos has published books on application development with OMT, UML, OCL and MDA which have been
					translated in six languages and sold over 50.000 copies. Jos has published numerous papers in magazines and has been speaking at
					many conferences.
				</p>
			</div>
		</section>

		<section class="landing-enter-buttons-grid">
			<a href="/Freon/Overview" class="landing-enter-button">
				<h3>Freon 1.0.0 Released</h3>
				<p>
					<i>Februari 2025</i>. The new 1.0.0 version of Freon was released. Next to a large amount of small improvements, the following new
					features are available:
				</p>
				<ul>
					<li>Interpreter Framework, making it easy to write interpreters for a DSL.</li>
					<li>
						External editor components, allowing language engineers to use their own components in the Freom projectional editor. This makes
						the editor
					</li>
				</ul>
				<p>Learn more...</p>
			</a>
			<a href="/LionWeb/Overview" class="landing-enter-button"
				><h3>LionWeb 2024.1</h3>
				<p>
					<i>December 2024</i>. LionWeb 2024.1 has been released. This version adds the repository bulk prototcol to the specification. In
					the lionweb-repository github project a full reference implementation of the protocol is available.
				</p>
				<p>Learn more...</p>
			</a>
			<a target="_blank" href="https://www.manning.com/books/building-user-friendly-dsls" class="landing-enter-button"
				><h3>DSL Book</h3>
				<p>
					<i>October 2024</i>. After several years of hard work, Meine Boersma published his book
					<i>Building User-Friendly DSLs</i>. Here is a happy Meinte signing his first book at the Language Engineering Workshop in Sevilla!
					<br />
					<img src="/images/meinte-signing-book.jpeg" class="image-meinte" />
				</p>
				<p>Learn more...</p>
			</a>
		</section>

		<LandingPageFooter />
	</div>
</main>

<style>
	.landing-text {
		margin: 2rem;
		/*margin-left: 1rem; for small devices */
	}
</style>
