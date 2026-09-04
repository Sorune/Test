import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ko from '../profile/content.ko.mjs';
import en from '../profile/content.en.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const facts = JSON.parse(fs.readFileSync(path.join(root, 'profile/facts.json'), 'utf8'));

function valueAt(key) {
  return key.split('.').reduce((value, part) => value?.[part], facts);
}

function render(template) {
  return template.replace(/\{\{([\w.]+)\}\}/g, (_, key) => {
    const value = valueAt(key);
    if (value === undefined) throw new Error(`Unknown profile fact: ${key}`);
    return String(value);
  });
}

function readPartial(name) {
  return fs.readFileSync(path.join(root, 'profile/partials', name), 'utf8').trim();
}

function enrichReadme(template, locale) {
  const intro = readPartial(`INTRO.${locale}.md`);
  const stats = readPartial('STATS.md');

  let enriched = template.replace(
    '## 🚀 Selected Work',
    `${intro}\n\n## 🚀 Selected Work`,
  );

  enriched = enriched.replace(
    '## 📫 Contact',
    `${stats}\n\n---\n\n## 📫 Contact`,
  );

  return enriched;
}

const generatedHeader = '<!-- GENERATED FILE — edit profile/* and run node scripts/render-profile.mjs -->\n\n';
const outputs = [
  ['README.md', enrichReadme(ko.readme, 'ko')],
  ['README.en.md', enrichReadme(en.readme, 'en')],
  ['docs/PROJECTS.md', ko.projects],
  ['docs/PROJECTS.en.md', en.projects],
  ['docs/HOMELAB.md', ko.homelab],
  ['docs/HOMELAB.en.md', en.homelab],
  ['docs/EXPERIENCE.md', ko.experience],
  ['docs/EXPERIENCE.en.md', en.experience],
  ['docs/AI_WORKFLOW.md', ko.aiWorkflow],
  ['docs/AI_WORKFLOW.en.md', en.aiWorkflow]
];

for (const [target, template] of outputs) {
  const destination = path.join(root, target);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, generatedHeader + render(template).trimEnd() + '\n', 'utf8');
  console.log(`rendered ${target}`);
}
