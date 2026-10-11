The Department of Epileptology at the University Hospital Bonn released presurgical brain MRI of 85 people whose epilepsy is caused by focal cortical dysplasia (FCD) type II, together with 85 healthy controls. The goal is a shared external test set for algorithms that find FCDs automatically, because these lesions are often too subtle for routine reading. Each person with FCD has a hand-drawn lesion mask and a short clinical record. The data are on OpenNeuro in BIDS format under CC0.

## Composition

There are 170 subjects: 85 with FCD type II (35 female, 50 male) and 85 controls (43 female, 42 male). Every subject has one T1-weighted and one FLAIR image. Patients were treated in Bonn between 2006 and 2021 and gave consent as adults; 50 of them had surgery, with histology FCD IIb in 34 and IIa in 16. Most lesions sit in the frontal lobe (53), followed by parietal (16), temporal (5), insular (3) and occipital (2), and 6 span two lobes. Five patients had an MRI read as normal at the time. The participants file holds sex, age at onset, scan and surgery in five-year bins, the radiological diagnosis, which extra diagnostics were done, histology, Engel outcome at one year and at last follow-up, hemisphere, lobe and, since snapshot 1.0.6, a train/test split with 28 patients in the test part.

## Acquisition

All scans come from one Siemens Magnetom Trio 3 T at the Life & Brain Center in Bonn. A scanner upgrade in 2014 changed the head coil from 8 to 32 channels and the T1 MPRAGE from 1 mm to 0.8 mm isotropic voxels. FLAIR is a 1 mm isotropic 3D turbo spin echo in three protocol versions; seven patients only have a 2D FLAIR. Images were converted with Dcm2Bids and defaced with pydeface.

## Annotations

Two neurologists drew one lesion mask per patient on FLAIR in FSL; one drew and the other reviewed. They used all available information, including morphometric analysis, SPECT, PET, invasive EEG and postoperative MRI, so lesions on MRI read as normal also have masks.

## Known limitations

Single site and single scanner, with protocols that changed over time. Only patients who could be reached and consented as adults are included (85 of 137 identified patients). Ages are only given in five-year bins. Images with slight motion artifacts were kept on purpose.
