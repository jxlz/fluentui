## API Report File for "@fluentui/babel-make-styles"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { NodePath } from '@babel/core';
import { PluginObj } from '@babel/core';
import { PluginPass } from '@babel/core';
import { types } from '@babel/core';

// @public (undocumented)
export type BabelPluginOptions = {
    modules: {
        moduleSource: string;
        importName: string;
    }[];
};

// Warning: (ae-forgotten-export) The symbol "BabelPluginState" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
const plugin: (api: object, options: Partial<BabelPluginOptions> | null | undefined, dirname: string) => PluginObj<BabelPluginState>;

export default plugin;


// (No @packageDocumentation comment for this package)

```