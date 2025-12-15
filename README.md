### Hexlet tests and linter status:
[![Hexlet Status](https://github.com/Vova0211/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Vova0211/frontend-project-46/actions)

[![CI Status](https://github.com/Vova0211/frontend-project-46/actions/workflows/node-check.yml/badge.svg)](https://github.com/Vova0211/frontend-project-46/actions)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Vova0211_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Vova0211_frontend-project-46)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Vova0211_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Vova0211_frontend-project-46)

# Difference Calculator

This project is a console utility for comparing two objects. Objects are read only from JSON, YML, and YAML files.

# Example of work
```bash
gendiff file1.json file2.json

{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow:
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}
```
# Download and installation

```bash
git clone https://github.com/Vova0211/frontend-project-44.git
cd frontend-project-44
make install
```

# Console Using

```bash
gendiff [options] <filepath1> <filepath2>
example: gendiff -f plain file1.json file2.json
```

The program can display differences in three formats, by default it is the 'stylish' format. It can also be 'plain' and 'json'. To output the result according to a specific format, enter -f [format]

```bash
gendiff -f plain file1.json file2.json
```

An example of such a conclusion:
```bash
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]
```

# Package using

Function are return string in selected format, the default value is 'stylish'.
Syntax:
```js
gendiff(filepath1, filepath2, format)
```

Example of using:
```js
import genDiff from '@hexlet/code';

const diff = genDiff(filepath1, filepath2, 'json');
const converted_diff = JSON.stringify(diff);
```