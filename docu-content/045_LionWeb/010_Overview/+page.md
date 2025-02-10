# LionWeb

The LionWeb initiative (see <a target="_blank" href="https://github.com/LionWeb-io">LionWeb @ Github</a>) aims to make 
language engineering  tools interoperable on the web.
LionWeb does this by specifying
- how language definitions and models can be interchanged in a well-defined JSON format.
- a server protocol for storing and retrieving models in a repository.

####

Next to the specification, LionWeb also provides implementations of supporting software in languages like TypeScript, JavaScript,
Java, Kotlin, C#, MPS.
These packages support a wide range of functionality like:
- (de)serialization between in-memory models and JSON format
- model diff
- model validation
- server storage
- etc.

Jos is an active member of the core team, participating in defining the specification and
in the implementation of the supporting software packages. 

## Freon and LionWeb

The LionWeb idea of interoperability fits perfectly with the basic principles of [Freon](/Freon/Overview), to be _open_ and _extensible_.
Freon uses LionWeb in various ways as described in 
<a target="_blank" href="https://www.freon4dsl.dev/LionWeb/Overview/">Freon LionWeb Integration</a>.
