PROSTATE-3T is a small collection of prostate MRI from Radboud University Nijmegen Medical Centre in the Netherlands,
contributed by Geert Litjens, Jurgen Futterer and Henkjan Huisman and published by The Cancer Imaging Archive (TCIA)
in 2013. The scans were taken for prostate cancer detection and were released as source images for the NCI-ISBI 2013
challenge on automated segmentation of prostate structures. It is mainly used for prostate gland and zonal
segmentation.

## Composition

The collection snapshot lists 64 men. The public TCIA metadata service returns 64 patients, each with one study and one
axial T2-weighted series, for 1,258 DICOM images in total. Ages recorded in the DICOM headers range from 51 to 78
years (median 64). The download is about 270 MB.

## Acquisition

All series are transversal turbo spin echo T2-weighted acquisitions at 3 T. The collection page names a Siemens
TrioTim with a pelvic phased-array coil and no endorectal coil. Per the series metadata, 50 series come from a
TrioTim and 14 from a Siemens Skyra. In the NCI-ISBI challenge description, slices from this site are 4 mm thick.

## Annotations

Two segmentation sets are open downloads on the collection page, both built with MeVisLab. The first holds central
gland and peripheral zone masks as NRRD files for 30 cases, the training cases of the NCI-ISBI 2013 challenge. The
second holds seminal vesicle and neurovascular bundle masks as MHA files for 15 other cases, prepared for a follow-up
challenge that never took place. The challenge's leaderboard and test masks, which mix this collection with
PROSTATE-DIAGNOSIS, are distributed separately on the challenge page.

## Known limitations

- The Data Access table on the collection page lists 59 subjects and 1,161 images, while the collection snapshot and
  the metadata service give 64 subjects and 1,258 images.
- Three series have protocol names that mention an endorectal coil (ERC), although the collection summary states a
  pelvic phased-array coil only.
- No clinical data, pathology, cancer grade or lesion annotations are included.
- Only one sequence is available per patient, with no diffusion or perfusion imaging.
