The SHIVA cohort is the clinical cohort of RHU SHIVA, a French research programme led from the University of Bordeaux
and Bordeaux University Hospital that studies cerebral small vessel disease, a major cause of stroke and of cognitive
decline. The cohort collects imaging and circulating biomarkers in older people with and without extensive small
vessel disease, to build diagnostic and risk prediction tools. It is registered as NCT05306834 and started in November
2022. SHIVA-CMB (Tsuchida et al. 2024) used part of it as an unseen test set for microbleed segmentation.

## Composition

Participants are over 60 and have either extensive white matter hyperintensities (Fazekas 2 or 3) or very few
(Fazekas 0 or 1). The registry limits age to 60 to 88 and lists a cognitive complaint with MMSE of at least 20 and
arterial hypertension among the inclusion criteria, except for extensive-disease patients enrolled from the LEOPOLD
trial. As of March 2024, 150 participants had been enrolled; the registry gives a
target of 400. The SHIVA-CMB test set holds 14 of them, 8 with extensive and 6 without extensive white matter
hyperintensities.

## Acquisition

MRI is done on 3 T Siemens Prisma scanners in Bordeaux and Paris and always includes a T2*-weighted gradient echo
(TR 872 ms, TE 20 ms, flip angle 20 degrees, 1.0 x 1.0 x 2.5 mm). SWI is optional (TR 24 ms, TE 17.1 ms, flip angle 15
degrees, 0.8 x 0.8 x 3.0 mm). Other sequences and the clinical and blood data collected are not described in a public
source found for this entry.

## Annotations

For the 14 SHIVA-CMB test participants, two expert raters reviewed and corrected microbleed candidates proposed by an
earlier version of the model, on both SWI and T2*-GRE. They report 112 microbleeds on SWI and 108 on T2*-GRE.

## Known limitations

- Not public. Requests go to the PI, no terms are published, and the trial registry states no plan to share
  individual data.
- Recruitment is ongoing, so the counts here are a March 2024 snapshot.
- Only the 14-participant microbleed test set is described in detail.
