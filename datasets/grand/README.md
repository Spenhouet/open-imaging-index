GRAND is an OpenNeuro release (ds007831) from Georgetown University Medical Center that pairs reading behaviour with
multimodal brain MRI in neurotypical adults, most of them middle-aged or older. The team built it as a reference for
normal word recognition, oral reading and language-related brain activity in later life, since reading is often
studied in children and young adults while the disorders that impair it tend to strike older people. Beyond normative
comparison, the authors point to individual-differences work linking brain measures to behaviour. The first snapshot
appeared in May 2026 under CC0, with a bioRxiv preprint describing it (Anderson et al. 2026).

## Composition

Snapshot 1.0.4 holds 109 participants in a single session each, 56 female and 53 male, aged 22 to 84 at the scan (mean
about 60). One participant included by mistake was removed in 1.0.3, but still appears in participants.tsv; the counts
here leave that row out. Every participant has a T1w, a FLAIR, a coplanar T2w and one task fMRI run; 108 also have a
diffusion scan, and spin-echo field maps accompany the BOLD and diffusion data. Derivatives add per-subject Brainnetome
structural connectomes (streamline counts) and MNI-space beta and t maps for the semantic versus pseudofont contrast.
The preprint abstract reports 116 participants overall, along with trial-wise reading and lexical decision behaviour.

## Acquisition

All scans come from one 3T Siemens MAGNETOM Prisma at the Center for Functional and Molecular Imaging, Georgetown,
using a 20-channel head coil. Structural images are 1 mm isotropic T1w and FLAIR; the coplanar T2w and the multiband
BOLD use 2.6 mm slices. Diffusion is HARDI with 81 directions at b = 3000, 40 at b = 1200 and 7 b = 0 volumes at
2 mm isotropic. The fMRI task is the Adaptive Language Mapping paradigm of Wilson et al. (2018).

## Known limitations

A single site and scanner limit generalisation, and the sample is drawn from healthy volunteers only. The
participants.tsv lists one more row than there are subject folders. Eight participants had a different diffusion TR
(4700 ms instead of 5000 ms). Behavioural data and full methods are described in the preprint, which had not been
peer reviewed at the time of checking.
