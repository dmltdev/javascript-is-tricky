export default function isEmpty(obj) {
  return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
}

isEmpty({}); //?
isEmpty({ key: 'value' }); //?
