BrainMetShare is a brain MRI collection of patients with brain metastases, assembled at Stanford University and
distributed by the Stanford AIMI Center. It was built to support research on automatic detection and segmentation
of metastatic lesions, and it is the data behind the deep learning study by Grøvik et al. in JMRI.

## Composition

The dataset covers 156 consecutive patients with at least one brain metastasis who had not yet received surgery or
radiation therapy, imaged between June 2016 and June 2018 at a single center. Mean age was 63 years (SD 12, range 29
to 92). The paper reports 105 women and 51 men. The primary tumor was lung cancer in 99 patients, breast cancer in
33, melanoma in 7, genitourinary cancer in 7, gastrointestinal cancer in 5 and other cancers in 5. 64 patients had 1
to 3 metastases, 47 had 4 to 10 and 45 had more than 10. Lesions ranged from 2 mm to more than 4 cm.

The release splits the cases into 105 with lesion masks (training folder) and 51 without (test folder). The paper
used a different split of 100 training, 5 development and 51 test cases.

## Acquisition

Each case has four 3D axial sequences: T1-weighted fast spin echo (CUBE) before and after gadolinium, a
post-gadolinium IR-prepped FSPGR (BRAVO) and a post-gadolinium CUBE FLAIR. Contrast was given at a standard dose of
0.1 mmol/kg. Scans came from GE 1.5 T (18 patients) and GE or Siemens 3 T (138 patients) systems. The sequences are
co-registered, resampled to 256 x 256 pixels in plane (about 0.94 mm, 1.0 mm through plane) and skull-stripped with
BET using a mask from the pre-contrast T1 series. A spreadsheet lists the primary cancer of each case.

## Annotations

Two neuroradiologists outlined every enhancing metastasis slice by slice on the post-contrast FSPGR images, guided
by the FLAIR and post-contrast spin echo images, and cross-checked each other. Masks are binary.

## Known limitations

- Single center and retrospective; most patients have lung or breast cancer.
- Only the 105 training cases include masks.
- Images are already resampled and skull-stripped, so original resolution and non-brain tissue are not available.
- The research use agreement allows personal, non-commercial research only and forbids redistribution, derivative
  works and clinical use.
