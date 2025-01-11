# setup-binaryen

This action sets up Binaryen on the GitHub Actions runner. 

> Originally created by [setup-tinygo](https://github.com/acifani/setup-tinygo)

## Usage

To use this action, add the following step to your GitHub Actions workflow:

```yaml
jobs:
    build:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - name: Setup Binaryen
              uses: Zxilly/setup-binaryen@v1
              with:
                  version: "121"
            - name: Verify Binaryen installation
              run: wasm-opt --version
```

Replace `version_number` with the version of Binaryen you want to install.

## Inputs

### `version`

**Required** The version of Binaryen to install.

## License

This project is licensed under the Apache-2.0 License.
