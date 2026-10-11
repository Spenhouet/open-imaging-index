import { describe, expect, it } from 'vitest';
import { checkSummary } from './validate.js';

const levels = (summary: string, name = 'A4 and LEARN', full_name?: string) =>
  checkSummary({ name, full_name, summary }).map((p) => `${p.level}: ${p.message.split('.')[0]}`);

describe('checkSummary', () => {
  it('accepts a summary that leads with what the data is', () => {
    expect(
      levels(
        'Amyloid PET and brain MRI from a prevention trial of solanezumab in older adults with preclinical disease.'
      )
    ).toEqual([]);
  });

  it('rejects the name, a number or a packaging word at the start', () => {
    expect(
      levels('A4 and LEARN is a trial with amyloid PET and brain MRI of older adults, shared on request.')
    ).toEqual(['error: summary starts with the dataset name']);
    expect(levels('7,133 MRI sessions with amyloid and tau PET from a prevention trial in older adults.')).toEqual([
      'error: summary starts with a number'
    ]);
    expect(levels('Shared data package of a prevention trial: amyloid PET and brain MRI of older adults.')).toEqual([
      'error: summary starts with "Shared data package"'
    ]);
    expect(
      levels(
        'Brain MRI from the Health and Aging Brain Study of older adults.',
        'HABS-HD',
        'Health and Aging Brain Study'
      )
    ).toEqual([]);
  });

  it('does not mistake ordinary words for packaging words', () => {
    expect(
      levels('Automated corpus callosum segmentations of brain MRI from people with autism and controls.')
    ).toEqual([]);
  });

  it('warns when the first words are numbers or acquisition details', () => {
    expect(levels('Serial safety MRI at 1.5 T or 3 T of people with early Alzheimer disease in two trials.')).toEqual([
      'warning: summary has numbers in its first words'
    ]);
  });
});
