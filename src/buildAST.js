import _ from 'lodash'

function buildAST(obj1, obj2) {
  const obj1_keys = Object.keys(obj1)
  const obj2_keys = Object.keys(obj2)
  const keys_sorted = _.sortBy(_.union(obj1_keys, obj2_keys))

  const data_arr = keys_sorted.map((key) => {
    if (!_.has(obj1, key)) {
      return { type: 'added', key, children: obj2[key] }
    }
    if (!_.has(obj2, key)) {
      return { type: 'removed', key, children: obj1[key] }
    }
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return { type: 'nested', key, children: buildAST(obj1[key], obj2[key]) }
    }
    if (_.isEqual(obj1[key], obj2[key])) {
      return { type: 'unchanged', key, children: obj1[key] }
    }
    return { type: 'changed', key, oldValue: obj1[key], newValue: obj2[key] }
  })

  return data_arr
}

const buildTree = (obj1, obj2) => {
  return {
    type: 'root',
    children: buildAST(obj1, obj2),
  }
}

export default buildTree
