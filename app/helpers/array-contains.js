import { helper } from '@ember/component/helper';

export function arrayContains(params) {
  const [items, value] = params;
  return items.includes(value);
}

export default helper(arrayContains);
