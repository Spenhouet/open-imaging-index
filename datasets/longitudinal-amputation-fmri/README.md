Brain MRI from a University College London study that followed three adults through planned arm amputation to see
whether the cortical maps of the hand and face change after limb loss. Each case was scanned twice before surgery and
again about 3 and 6 months afterwards, with one further visit at 1.5 or 5 years for two of them. The OpenNeuro release
pools this longitudinal study with three comparison cohorts so that the case studies can be set against typical
week-to-month variability and against people who lost an arm decades earlier. Data are in BIDS under CC0.

## Composition

There are 75 participants: 30 with an upper-limb amputation and 45 able-bodied controls. The longitudinal part holds
the 3 amputation cases and 16 older controls scanned over a matching 6-month window. A younger control group of 11
adults, scanned twice one week apart in an earlier piano-training study, matches the youngest case. Two
cross-sectional cohorts add 19 amputees with 6 controls and 8 amputees with 12 controls, one session each. Amputation
levels in the participant table are mostly transradial, with some transhumeral, wrist and elbow cases. The table also
lists side of amputation, handedness, phantom sensation and pain ratings and prosthesis use where collected.

## Acquisition

The longitudinal study used a Siemens 3T Prisma with a 32-channel coil: a 1 mm MPRAGE T1-weighted image and multiband
gradient-echo EPI at 2 mm isotropic with a repetition time of 1.5 s. Participants moved single fingers of either hand,
the lips or the feet on visual cues (fingers task, four runs per session) and moved larger body parts in a body
localizer (bodyloc task). Amputees attempted the movements with the phantom hand after surgery.

## Known limitations

Anatomy in the two cross-sectional cohorts is already skull-stripped, so it cannot be used as raw T1-weighted input.
Scanner details for the pooled cohorts are not given in the release. Group sizes in the release differ from the paper,
which reports 26 chronic amputees, 18 cross-sectional controls and 22 younger controls. Sex is missing for the younger
controls. Only three people were imaged before and after amputation.
