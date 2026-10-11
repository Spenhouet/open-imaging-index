This OpenNeuro release (ds008162) comes from Benjamin Philip's lab at Washington University School of Medicine in
St. Louis. It asks how people draw precisely with their non-dominant left hand, and whether adults who rely more on
that hand after a peripheral nerve injury to the right arm use the same brain mechanisms as healthy adults. During
fMRI, participants traced shapes on an MRI-compatible tablet, alternating between the right and the left hand, while
pen position was logged at 30 Hz. The data are shared in BIDS format under CC0, and structural images were defaced
with pydeface.

## Composition

71 right-handed adults are included: 25 with chronic unilateral peripheral nerve injury to the right hand or arm and
46 healthy adults. By self-report, 46 are female, 24 male and 1 other. Ages range from 20 to 82 years, mean 44.6.
Data were collected between April 2022 and June 2025. Five participants are flagged in participants.tsv as excluded
from the authors' analyses, mostly for head motion. A bioRxiv preprint analysed the first 33 participants.

## Acquisition

All scans were acquired on one Siemens Prisma 3 T scanner in a fixed order: T1w MPRAGE, the drawing task, diffusion,
T2w SPACE and resting-state fMRI. The drawing task used a block design with three runs per hand, and the BOLD runs
use multiband acceleration (factor 6) with a repetition time of 0.662 s. Diffusion data come from a 40-volume
protocol labelled for diffusion basis spectrum imaging (DBSI). Opposite phase-encoding field maps and single-band
reference images accompany the functional runs. Three patients could not draw with the injured hand and have only
left-hand runs, and several participants lack some or all resting-state runs.

## Annotations

There are no image labels. Event files mark drawing and rest blocks, with extra versions that split blocks by
difficulty. A phenotype folder holds questionnaires on hand use, disability, pain, mood and quality of life, plus
Box and Blocks and a block building task that records hand choice.

## Known limitations

- Single site and scanner.
- Patients and controls differ in sex balance (12 of 25 patients are female, 34 of 46 controls).
- The cohort is all right-handed, so left-handers are not represented.
