HCP-Development is the youth arm of the Lifespan Human Connectome Project. It applies the imaging and data-sharing
approach of the HCP Young Adult study to healthy children, adolescents and young adults aged 5 to 21, to map how brain
connectivity changes during development. The study planned more than 1300 participants, most scanned once and about
240 followed over three visits around puberty. The Lifespan 2.0 Release (February 2021) is the current release on the
NIMH Data Archive and replaced Release 1.0 (May 2019).

## Composition

The release holds the first visit of 652 healthy participants aged 5 to 21, 351 female and 301 male. Every participant
has T1w, T2w and resting-state fMRI; 647 also have task fMRI, 643 have diffusion data and 627 have ASL. Behavioral and
biomeasure data, including NIH Toolbox measures for most participants, come with the imaging. The download is more
than 22 TB. Longitudinal visits are not part of this release.

## Acquisition

Scans were acquired at four US sites on Siemens 3T Prisma scanners with one shared protocol, the same as in HCP-Aging.
Participants aged 8 and older used the standard 32-channel head coil; 5 to 7 year olds used a pediatric 32-channel
coil. Structural T1w and T2w scans are 0.8 mm isotropic with real-time motion correction by volumetric navigators.
Resting-state fMRI lasts 26 minutes in four runs, shortened to 21 minutes for the youngest children. Three fMRI tasks
probe reward (guessing), inhibitory control (CARIT) and emotion processing. Diffusion covers 185 directions on two
shells (b = 1500 and 3000 s/mm2). Perfusion uses multi-delay 2D PCASL. Data are provided unprocessed and after the HCP
pipelines, in NIfTI and CIFTI files.

## Annotations

No manual labels. Derived products include FreeSurfer surfaces, MSMAll-aligned and noise-cleaned fMRI, and per subject
completeness and QC issue codes.

## Access

Access goes through an NDA Data Use Certification signed by an institutional official, reviewed by the same NIH
committee that grants ABCD and HCP-Aging access, and renewed every year.

## Known limitations

- Only typically developing volunteers; no clinical contrasts such as FLAIR or SWI.
- The release is cross-sectional; the planned longitudinal visits are not included.
- Scan duration and head coil differ for the youngest children, which matters when comparing across ages.
