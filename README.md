# mod-github

[![Kubling license](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square)](LICENSE)

> [!IMPORTANT]
> **This repository is archived and no longer maintained.**
>
> Kubling integrations now use providers. For GitHub integrations, implement a
> [custom provider](https://github.com/kubling-community/kubling-providers) when
> GitHub-specific behavior is required, or configure the
> [official OpenAPI provider](https://github.com/kubling-community/kubling-providers/tree/main/providers/openapi)
> against GitHub's OpenAPI description.
>
> This module remains available for historical reference.

## Historical documentation

This module contains the schema and logic for interacting with GitHub APIs.

> **Note:** The archived implementation does not support CUD operations.

## Some considerations before usage

* `JavaScript` client delegates are generated [using our template](https://github.com/kubling-community/javascript-gen-clients) as a starting point, but bear in mind that some of them
need special adaptations, therefore if you are planning to create your own version of this module, you would need to adapt the client yourself.

* If this module's schema does not contain a specific `TABLE`, it does not mean that the entity or endpoint was unsupported. A custom provider or the OpenAPI provider should be used for new integrations.

* The historical build and publishing pipeline ran on private infrastructure. The repository remains available so its implementation can be inspected or forked.
