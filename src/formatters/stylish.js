function getOffset(depth) {
  let offset = ''
  for (let i = 0; i < depth; i++) {
    offset += '  '
  }
  return offset
}

function objToStr(obj, depth) {
  const keys = Object.entries(obj)
  const offset = getOffset(depth)
  return keys.reduce((string, [key, value]) => {
    const offset = getOffset(depth + 2)
    if (typeof value === 'object') return string += `${offset}${key}: ${objToStr(value, depth + 2)}\n`
    return string += `${offset}${key}: ${value}\n`
  }, '{\n') + `${offset}}`
}

function removed(tree, depth) {
  const offset = getOffset(depth)
  const { key, children } = tree
  if (children instanceof Object) {
    return `${offset}- ${key}: ${objToStr(children, depth + 1)}`
  }
  return `${offset}- ${key}: ${children}`
}

function added(tree, depth) {
  const offset = getOffset(depth)
  const { key, children } = tree
  if (children instanceof Object) {
    return `${offset}+ ${key}: ${objToStr(children, depth + 1)}`
  }
  return `${offset}+ ${key}: ${children}`
}

function unchanged(tree, depth) {
  const { key, children } = tree
  return `${getOffset(depth)}  ${key}: ${children}`
}

function changed(tree, depth) {
  const { key, oldValue, newValue } = tree
  const oldTree = { key, children: oldValue }
  const newTree = { key, children: newValue }
  return `${removed(oldTree, depth)}\n${added(newTree, depth)}`
}

function nested(tree, depth) {
  const offset = getOffset(depth + 1)
  const { key, children } = tree
  return children.reduce((ac, child) => {
    return ac += `${types[child.type](child, depth + 2)}\n`
  }, `${offset}${key}: {\n`) + `${offset}}`
}

const types = {
  nested,
  removed,
  added,
  unchanged,
  changed,
}

function stylish(tree) {
  return tree.children.reduce((ac, child) => {
    return ac += `${types[child.type](child, 1)}\n`
  }, '{\n') + '}'
}

export default stylish
