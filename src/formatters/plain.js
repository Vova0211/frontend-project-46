function nested(tree) {
  const { key, children } = tree
  return children.reduce((ac, child) => {
    if (child.type === 'unchanged') return ac
    child.key = `${key}.${child.key}`
    return ac += `${treeTypes[child.type](child)}`
  }, '')
}

function removed(tree) {
  const { key } = tree
  return `Property '${key}' was removed\n`
}

function added(tree) {
  const { key, children } = tree
  const type = typeof children
  return `Property '${key}' was added with value: ${childTypes[type](children)}\n`
}

function changed(tree) {
  const { key, oldValue, newValue } = tree
  const oldType = typeof oldValue
  const newType = typeof newValue
  return `Property '${key}' was updated. From ${childTypes[oldType](oldValue)} to ${childTypes[newType](newValue)}\n`
}

const childTypes = {
  string: e => `'${e}'`,
  boolean: e => e,
  object: e => e === null ? null : '[complex value]',
}

const treeTypes = {
  nested,
  removed,
  added,
  changed,
}

function plain(tree) {
  return tree.children.reduce((ac, child) => {
    if (child.type === 'unchanged') return ac
    return ac += treeTypes[child.type](child)
  }, '').slice(0, -1)
}

export default plain
