This release holds the raw imaging behind a study of how seeing a speaker's mouth changes brain responses to continuous, natural speech. Healthy young adults lay in the scanner while a video of a speaker reading the Dr. Seuss story "The Lorax" was cut into short sections, and each section was shown as sound only, video only, sound and video in sync, or sound and video out of sync. The study looked for brain regions whose response to synchronous audiovisual speech exceeded the responses to the single senses. The data were deposited on Dryad by Lars Ross and are mirrored on Zenodo under CC0.

## Composition

The release has 53 subject folders. The paper reports that 60 people were scanned and 7 were excluded for technical problems, head motion or lack of task compliance, leaving 53 native English speakers aged 20 to 35 (mean 25), 25 of them female, without neurological or psychiatric history. Each folder holds one T1-weighted scan, three functional runs and three BrainVoyager protocol files (.prt) that give the first and last volume of every condition block.

## Acquisition

Scanning used a 3 T Philips Achieva TX with a 32-channel head coil. The anatomical scan is a 1 mm isotropic MP-RAGE. The functional runs are gradient-echo EPI with a TR of 2 s and 1.67 x 1.67 x 2.3 mm voxels, 50 slices, and 158, 172 and 146 volumes per run; coverage leaves out the lower cerebellum. Sound came through MR-compatible headphones and video through MR-compatible goggles with an eye tracker used to check that eyes were open.

## Known limitations

The functional data are stored as one Analyze image and header per volume, not as 4D NIfTI or BIDS. The T1-weighted images were defaced in BrainVoyager after transformation to Talairach space, so they are not in native scanner space; a JSON sidecar keeps selected header fields. The release has no participants table, so age and sex per subject are not available, and the behavioural speech-in-noise task described in the paper is not part of the files. The participant figures here come from the bioRxiv preprint; the journal version could not be opened for this entry.
