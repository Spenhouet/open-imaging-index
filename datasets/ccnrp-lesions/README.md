This release holds structural brain MRI from 204 people with chronic focal brain lesions who belong to the Cambridge Cognitive Neuroscience Research Panel (CCNRP). The data were curated and shared by researchers at the MRC Cognition and Brain Sciences Unit, University of Cambridge. Every scan comes with a binary lesion mask drawn by hand. The authors share it to test and train automatic lesion segmentation tools and to support lesion-symptom mapping research. In their own nnU-Net study the cohort serves as an external test set and as a training set for chronic T1-weighted segmentation models.

## Composition

There is one defaced T1-weighted volume per participant and one lesion mask per participant, so 204 images and 204 masks in total. The study paper reports the clinical background in rounded shares: about 36% of cases are stroke-related (ischaemic infarct, haemorrhage, aneurysm or arteriovenous malformation), about 53% are tumour-related (for example meningioma, glioma, cavernoma or tumour resection), and about 11% have other causes such as epilepsy surgery, encephalomalacia or infection. Lesions sit in cortical and subcortical regions of both hemispheres.

## Acquisition

The images are archival high-resolution T1-weighted scans organised into BIDS. The release does not report scanner vendor, field strength or sequence parameters, and the preprocessing history is not documented consistently because of the age of the archive.

## Annotations

A single senior neurologist outlined each lesion case by case in MRIcron. The masks are stored under `derivatives/` in the same native space as the matching T1-weighted image.

## Known limitations

No participant-level variables are published: age, sex, aetiology and time since injury are all missing, so the aetiology shares above cannot be linked to individual scans. Acquisition parameters are unknown and likely vary across the archive. Each mask comes from one rater, so there is no inter-rater measure. Only T1-weighted images are shared.
