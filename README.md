# hash-csv

This command line tool allows you to generate a hash for each entry in a CSV and append it to the end of the line.

## Requirements

- npm 5.0.0 or higher
- Node.js 8.0.0 or higher

## Installation

1. Clone the repository
2. cd into the repository
3. Run `npm install`
4. Run `npm install -g`

## Usage

`hash-csv generate <file>`

## Example

### Input

```csv
id,name
1,kate
2,mimi
3,kelvin
```

### Output

```csv
id,name,hash
1,kate,0x1
2,mimi,0x2
3,kelvin,0x3
```
