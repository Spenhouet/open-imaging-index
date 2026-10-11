This collection of clinical time-of-flight MR angiography comes from the Royal Brisbane and Women's Hospital and
other sites of Metro North Health in Queensland, Australia. It was published on OpenNeuro as ds005096 in April 2024,
with the latest snapshot (1.0.3) in July 2024, under a CC0 waiver, and is described in a Scientific Data paper. The
authors released it for work on aneurysm detection, computational fluid dynamics, in vitro aneurysm models and
surgical training.

## Composition

The release covers 63 patients carrying 85 intracranial aneurysms; 47 patients have one aneurysm and 16 have more.
Twenty-four patients were followed with repeat surveillance scans, while 39 have a single exam. The bundled
spreadsheet lists 38 women and 25 men, aged 19 to 82 at their first scan. The raw data hold 122 sessions with 126
TOF-MRA volumes; Table 1 of the paper counts 143 scans, a difference the sources do not explain.

## Acquisition

Exams were acquired between 2008 and 2022 on Siemens, Philips and GE scanners, mostly at 3T with a minority at
1.5T. Slice spacing ranges from sub-millimetre to well over a centimetre for some multi-slab scans. Scans were
de-identified, cropped to remove the face while keeping the Circle of Willis, converted to NIfTI and organised in
BIDS. A spreadsheet gives per-scan acquisition parameters, age and sex, aneurysm measurements and image quality
metrics (SNR and CNR).

## Annotations

A neuroradiologist segmented each aneurysm and its parent artery in 3D Slicer on one session per patient, chosen as
the pre-treatment, best quality or most recent scan. Derivatives include aneurysm-only and aneurysm-with-parent-artery
NIfTI masks, STL surface models and the Slicer scenes. Shape changes between surveillance scans are annotated.

## Known limitations

- Some aneurysms were annotated on DSA or CTA, which are not shared; for those only STL models are provided.
- Image quality and resolution vary widely; the paper advises checking SNR and CNR before use.
- Only one session per patient is segmented, so follow-up scans lack masks.
- No healthy controls; every subject has an aneurysm.
