HCP-Aging is the adult arm of the Lifespan Human Connectome Project. It carries the imaging and data-sharing approach
of the HCP Young Adult study over to healthy people from their mid-thirties to over 100, to describe how brain
structure, function and connectivity change across adult life. The Lifespan 2.0 Release (February 2021) is the
current HCP-Aging release on the NIMH Data Archive and replaced Release 1.0 (May 2019).

## Composition

The release covers the first visit of 725 healthy participants aged 36 to 100+, with more women (406) than men
(319). Every participant has T1w, T2w, high-resolution hippocampal T2w and fMRI data; 722 have diffusion data and 679
have ASL. Behavioral, cognitive and biomeasure data, including NIH Toolbox measures for most participants, come with
the imaging. The download is more than 22 TB.

## Acquisition

Scans were acquired at Washington University in St. Louis, the University of Minnesota, Massachusetts General Hospital
and UCLA on Siemens 3T Prisma scanners with a 32-channel head coil and one shared protocol. Structural imaging uses a
multi-echo MPRAGE (T1w) and a SPACE scan (T2w) at 0.8 mm with real-time motion correction by volumetric navigators.
An extra coronal-oblique T2w scan resolves hippocampal subfields. Diffusion covers two shells (b = 1500 and 3000
s/mm2) at 1.5 mm. Perfusion uses multi-delay 2D PCASL. FLAIR and SWI were considered but left out to keep the session
short. Data are provided unprocessed and after the HCP pipelines, in NIfTI and CIFTI files.

## Annotations

No manual labels. Derived products include FreeSurfer surfaces, MSMAll-aligned and noise-cleaned fMRI, and per
subject completeness and QC issue codes.

## Access

Access goes through an NDA Data Use Certification signed by an institutional official, reviewed by the same NIH
committee that grants ABCD access and renewed every year. Later visits and new participants are released by the
successor Aging Adult Brain Connectome (AABC) study on BALSA under separate AABC Data Use Terms, which limit use to
non-commercial research at non-profit or government institutions; they are not part of this entry.

## Known limitations

- Only healthy volunteers; no clinical or susceptibility-weighted contrasts.
- The release is cross-sectional; longitudinal visits are only in AABC releases.
- Scanner and protocol differ from HCP Young Adult, so pooling the two needs harmonisation.
