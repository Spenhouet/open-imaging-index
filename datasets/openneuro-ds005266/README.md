This release is one of the task-based fMRI datasets of SoCal Kinesia and Incentivization for Parkinson's Disease
(SKIP), a project at UC Santa Barbara funded by Aligning Science Across Parkinson's through the Michael J. Fox
Foundation. SKIP studies how incentives shape movement, with the aim of comparing people with Parkinson's disease and
healthy controls. In the active escape task, participants watched an 18-second countdown and had to respond quickly
with a movement to avoid an electric shock. Shock intensity (mild or unpleasant) and whether a fast response could
prevent the shock (controllable or uncontrollable) were varied, giving four trial conditions. The images are on
OpenNeuro as ds005266 under CC0. Sibling SKIP releases cover incentivized reaching, an approach-avoid task and a 7T
resting-state study.

## Composition

The release holds 68 healthy, right-handed young adults: 52 female, 15 male and one nonbinary, aged 18 to 30 with a
median of 20. The README speaks of 69 participants, one more than the files contain. No Parkinson's disease patients
are included yet; the README says they and further measures such as cardiac-autonomic and pupillometry data are
planned for later versions.

## Acquisition

All scans come from one Siemens Prisma fit 3T scanner with a 64-channel head and neck coil at the UCSB Brain Imaging
Center. Each subject has a 0.94 mm T1w MPRAGE and up to seven runs of multiband echo-planar BOLD imaging with 2.5 mm
voxels and a repetition time of 1.9 s. 66 subjects have all seven runs, one has four and one has two.

## Annotations

There are no image labels. Event files describe the trial timing and conditions of each run, and participants.tsv
gives age, handedness, gender and group.

## Known limitations

- Healthy controls only, despite the Parkinson's disease focus of the project.
- Narrow age range of mostly university-age adults, with a strong female majority.
- Single site and scanner.
- Two subjects have fewer task runs, and a few runs lack an events file.
