QIN-BREAST is a longitudinal imaging collection from Vanderbilt University, contributed by the group of Thomas E.
Yankeelov within the NCI Quantitative Imaging Network and published by The Cancer Imaging Archive. It follows patients with
breast cancer through neoadjuvant therapy, so that quantitative PET and MRI measures taken early in treatment can be
developed and tested as predictors of response. A second collection, QIN-BREAST-02, extends the protocol to a
multi-center study and is listed separately on TCIA.

## Composition

The Data Access table lists 68 subjects, 216 studies, 536 DICOM series and 102,451 images (11.41 GB), while the summary
line at the top of the page gives 67 subjects. In the open metadata digest, 43 subjects have FDG PET/CT and 41 have
MRI. Imaging was planned at three time points: before therapy, after the first cycle, and either after the second
cycle or at the end of therapy before surgery. A separate spreadsheet gives a pathological response label (pCR or
non-pCR) for 59 patient IDs: 20 pCR and 39 non-pCR.

## Acquisition

PET/CT was performed on a GE Discovery STE about 60 minutes after weight-scaled FDG injection, with a low-dose CT for
attenuation correction. Research images were taken prone on a support device built in-house, which eases registration
to MRI; standard-of-care supine whole-body images were added at the first and last time points. MRI used a Philips 3 T
Achieva with a 16-channel bilateral breast coil. Each MRI session holds diffusion-weighted EPI in three directions (b
values varied between patients), a multi-flip-angle 3D gradient echo series (2 to 20 degrees) for T1 mapping, and a
25-frame DCE series with gadopentetate dimeglumine injected after the third frame.

## Annotations

The collection itself has no segmentations. Its labels are the per-patient pathological response classes. The page
links to tumor segmentations produced by a third party under the AIMI annotations initiative, published separately on
Zenodo.

## Known limitations

- Single site, and not every subject has both PET/CT and MRI.
- Diffusion parameters changed during the study, as described by Li et al. (2015).
- The number of subjects differs by one between the two tables on the collection page.
- Age and sex are missing for some subjects in the DICOM headers, and no clinical table beyond the response label is
  provided.
