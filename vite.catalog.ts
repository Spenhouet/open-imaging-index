import type { Plugin } from 'vite';
import { loadCatalog } from './src/lib/catalog/load';

// Serves the vocabulary and license list as the module `virtual:catalog-meta`. Pages import it instead of
// receiving it as load data, so it is bundled once and cached, rather than copied into every prerendered page.
const ID = 'virtual:catalog-meta';
const RESOLVED = '\0' + ID;

export function catalogMeta(): Plugin {
  return {
    name: 'catalog-meta',
    resolveId(id) {
      if (id === ID) return RESOLVED;
    },
    load(id) {
      if (id !== RESOLVED) return;
      const { catalog } = loadCatalog();
      const licenses = catalog.licenses.map((l) => ({
        id: l.id,
        name: l.name,
        short_name: l.short_name,
        purpose: l.purpose
      }));
      return [
        `export const vocab = ${JSON.stringify(catalog.vocab)};`,
        `export const licenses = ${JSON.stringify(licenses)};`,
        `export const datasetCount = ${catalog.datasets.length};`
      ].join('\n');
    },
    configureServer(server) {
      server.watcher.add(['vocab', 'licenses', 'datasets']);
      const reload = (file: string) => {
        if (!/[\\/](vocab|licenses|datasets)[\\/]/.test(file)) return;
        for (const env of Object.values(server.environments)) {
          const mod = env.moduleGraph.getModuleById(RESOLVED);
          if (mod) env.moduleGraph.invalidateModule(mod);
        }
        server.ws.send({ type: 'full-reload' });
      };
      server.watcher.on('change', reload);
      server.watcher.on('add', reload);
      server.watcher.on('unlink', reload);
    }
  };
}
