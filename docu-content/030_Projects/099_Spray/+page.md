<script>
    import Note from "$lib/notes/Note.svelte";
</script>

# Spray - A Quick Way to Generate Graphiti

The Spray project is a collection of DSLs that allow quick and easy development of visual editors.
The first code to be donated to Spray was written by Jos Warmer and has been used in the PMW project to develop the visual editors.

## The Spray Project

<Note><svelte:fragment slot="header">Discontinued</svelte:fragment>
<svelte:fragment slot="content">
<p>When the underlying Graphity project was cancelled, the Spray project was also discontinued.</p>
</svelte:fragment></Note>

The Graphiti framework is a new approach to create highly sophisticated visual editors on top of the GEF framework.
Graphiti can easily be integrated with EMF as the domain modeling framework.
The creation of visual editors is done in Java, programming against the Graphiti framework API.
It is fairly simple, but yet repetitive, which makes it a candidate to be supported by the means of model-driven development.

The Spray project aims to provide one or more Domain Specific Languages (DSL) (for example with Xtext)
to describe Visual DSL Editors against the Graphiti runtime, and provide code generation (for example with Xtend2)
to create the boilerplate code for realizing the implementation against the Graphiti framework. Potentially the Spray DSL can be used to generate code for other frameworks as well.

The generated code is structured in such a way that one can always extend/overwrite the generated code with handwritten Java
to add advanced Graphiti features that are not supported directly by the Spray DSL.

With the help of the tools created in this project Graphiti based diagram editors can be created much faster and reliable than doing it purely by hand.
