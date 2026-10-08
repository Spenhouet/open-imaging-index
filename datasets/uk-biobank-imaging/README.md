UK Biobank is a prospective cohort of about half a million adults recruited across the UK between 2006 and 2010. Its
imaging enhancement, started in 2014, invited participants back for a single long visit with five imaging
examinations. It is used for imaging-genetics, brain age, cardiac and body composition research and for training
models applied to other cohorts.

## Composition

Per the public Data Showcase, 102,521 participants attended a first imaging visit and 21,469 a repeat imaging visit
(from 2019) by September 2025. Visits cover brain MRI (T1, T2 FLAIR, susceptibility-weighted, diffusion, resting and
task fMRI and arterial spin labelling), cardiac MRI (cine long- and short-axis, tagging, aortic distensibility, flow
and T1 mapping), abdominal MRI (neck-to-knee Dixon plus liver, kidney and pancreas sequences), whole-body DXA and
carotid ultrasound. Images are released in tranches, so counts per image type lag behind attendance. Thousands of
imaging-derived phenotypes accompany the images, and every participant links to the main cohort's genetic, biochemical
and health-record data.

## Acquisition

Imaging runs in four centres: Stockport, Newcastle, Reading and Bristol. Brain MRI uses a 3T Siemens Skyra with a
32-channel head coil in a 35-minute protocol; cardiac and abdominal MRI share a 1.5T Siemens Aera; DXA is done on a GE
iDXA. Brain images come as DICOM and processed NIfTI, with T1 and FLAIR NIfTI defaced; undefaced DICOM needs a
justification. The susceptibility scan is a 2.5-minute dual-echo gradient echo (TE 9.42 and 20 ms, 0.8x0.8x3 mm, 48
axial slices); the Oxford pipeline derives SWI images, QSM maps and regional T2\* and susceptibility values from it.

## Annotations

There are no manual labels for the full cohort. Automated pipelines produce brain, cardiac and abdominal
imaging-derived phenotypes. Radiographers flag potentially serious incidental findings during scanning. Sundaresan et
al. (2023) report microbleed masks for 78 preselected participants: a radiologist marked 186 microbleeds on SWI as
points that region growing turned into masks. The paper does not say the masks are shared.

## Known limitations

- The cohort is not representative of the UK population (5.5% of those invited joined), and the imaging subset is a
  further self-selected group.
- Participants with safety contraindications, or who cannot lie still or hold their breath, cannot complete the full
  protocol.
- Not every participant completes every examination; carotid ultrasound images are released for a smaller subset.
- Access requires an approved application, fees, and work inside the UK Biobank cloud platform.
