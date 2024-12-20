# mod-github

[![Kubling license](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square)](LICENSE)

Official ready-to-use module that contains the schema and logic for interacting with GitHub APIs.

> **_NOTE:_** This module is still under development and does not currently support CUD operations.

## Considerations Before Usage

- **JavaScript Client Delegates:** These are generated [using our template](https://github.com/kubling-community/javascript-gen-clients) as a starting point. However, some require special adaptations. If you plan to create your own version of this module, be prepared to adapt the client manually and/or the template.

- **Schema Limitations:** If this module's schema does not contain a specific `TABLE`, it does not necessarily mean that the entity or endpoint is unsupported. Please create an issue or open a PR if you identify any gaps.

- **Build and Publish Pipeline:** Currently, building and publishing runs on private infrastructure, but migration to GitHub Actions is planned. The pipeline consists of simple `sh` tasks running the CLI in Docker. This straightforward approach ensures clarity and adaptability for different CICD platforms, should you wish to fork and maintain your own module.

## Building Locally

```bash
docker run --rm \
    -v ./:/modmount \
    kubling/dbvirt-cli:latest bundle genmod /modmount/module -o /modmount/mymod.zip
