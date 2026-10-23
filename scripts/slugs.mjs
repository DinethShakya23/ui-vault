// Prints the slug for every entry, i.e. the folder name to use under refs/<slug>/.
//   node scripts/slugs.mjs [filter]
import { loadData, allItems, itemSlug } from './lib.mjs';

const filter = (process.argv[2] || '').toLowerCase();
for (const item of allItems(loadData())) {
  if (filter && !item.name.toLowerCase().includes(filter)) continue;
  console.log(`${itemSlug(item).padEnd(45)} ${item.name}`);
}
