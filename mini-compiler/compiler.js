const tokenizer = require('./parser/tokenizer')
const parser = require('./parser/parser')
const transformer = require('./transformer')
const generator = require('./generator')

const token = tokenizer('(add 1 (subtract 3 2))')
const ast = parser(token)
const newAst = transformer(ast)
const ans = generator(newAst)
console.log(ans)