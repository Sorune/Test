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

function replaceRequired(template, marker, replacement, label) {
  if (!template.includes(marker)) {
    throw new Error(`Profile render marker not found (${label}): ${marker}`);
  }
  return template.replace(marker, replacement);
}

function replacePatternRequired(template, pattern, replacement, label) {
  if (!pattern.test(template)) {
    throw new Error(`Profile render pattern not found (${label}): ${pattern}`);
  }
  return template.replace(pattern, replacement);
}

function enrichReadme(template, locale) {
  const intro = readPartial(`INTRO.${locale}.md`);
  const stack = readPartial('STACK.md');

  let enriched = replaceRequired(
    template,
    '## 🚀 Selected Work',
    `${intro}\n\n## 🚀 Selected Work`,
    `${locale} README intro`,
  );

  enriched = replacePatternRequired(
    enriched,
    /## 🛠 Stack\n[\s\S]*?\n---/,
    `${stack}\n\n---`,
    `${locale} README stack`,
  );

  return enriched;
}

function enrichExperience(template, locale) {
  const legacy = readPartial(`EXPERIENCE_LEGACY.${locale}.md`);

  return replaceRequired(
    template,
    '## Production Web',
    `${legacy}\n\n---\n\n## Production Web`,
    `${locale} legacy experience`,
  );
}

function enrichAiWorkflow(template, locale) {
  const evidence = readPartial(`AI_EVIDENCE.${locale}.md`);

  return replaceRequired(
    template,
    '## Development History Disclosure',
    `${evidence}\n\n## Development History Disclosure`,
    `${locale} AI workflow evidence`,
  );
}

const generatedHeader = '<!-- GENERATED FILE — edit profile/* and run node scripts/render-profile.mjs -->\n\n';
const outputs = [
  ['README.md', enrichReadme(ko.readme, 'ko')],
  ['README.en.md', enrichReadme(en.readme, 'en')],
  ['docs/PROJECTS.md', ko.projects],
  ['docs/PROJECTS.en.md', en.projects],
  ['docs/HOMELAB.md', ko.homelab],
  ['docs/HOMELAB.en.md', en.homelab],
  ['docs/EXPERIENCE.md', enrichExperience(ko.experience, 'ko')],
  ['docs/EXPERIENCE.en.md', enrichExperience(en.experience, 'en')],
  ['docs/AI_WORKFLOW.md', enrichAiWorkflow(ko.aiWorkflow, 'ko')],
  ['docs/AI_WORKFLOW.en.md', enrichAiWorkflow(en.aiWorkflow, 'en')]
];

for (const [target, template] of outputs) {
  const destination = path.join(root, target);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, generatedHeader + render(template).trimEnd() + '\n', 'utf8');
  console.log(`rendered ${target}`);
}
