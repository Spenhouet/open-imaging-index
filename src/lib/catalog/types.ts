import type { Answer, DatasetFile, Dimension, LicenseFile, LicenseRules, Measure, Term } from './schema';
import type { StatRow } from './stats';

export interface LicenseUse {
  license: LicenseFile;
  applies_to?: string;
  url?: string;
  note?: string;
}

export interface DatasetEntry {
  id: string;
  meta: DatasetFile;
  stats: StatRow[];
  /** Values per dimension: declared in dataset.yaml plus everything seen in stats.csv. */
  facets: Record<string, string[]>;
  /** Totals per count measure. */
  totals: Record<string, number>;
  licenses: LicenseUse[];
  /** The most restrictive answer per rule across all licenses of the dataset. */
  rules: Record<string, Answer>;
  /** Purpose ids of all licenses. */
  purposes: string[];
  readmeHtml: string;
  /** Latest commit date of the dataset folder, when available. */
  lastChanged?: string;
}

/** What the catalog page needs per dataset. The README and stats rows stay on the dataset page. */
export type DatasetSummary = Omit<DatasetEntry, 'readmeHtml' | 'licenses'> & {
  licenseIds: string[];
  searchText: string;
};

export interface VocabData {
  dimensions: Dimension[];
  measures: Measure[];
  terms: Record<string, Term[]>;
  licenseRules: LicenseRules;
}

export interface Catalog {
  datasets: DatasetEntry[];
  licenses: LicenseFile[];
  vocab: VocabData;
}
