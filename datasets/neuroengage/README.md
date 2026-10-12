NeuroEngage records brain activity during unscripted spoken conversation. Healthy Swedish speakers lay in an MRI scanner and talked for ten minutes at a time with a partner shown on a screen. Half of the design paired them with a human confederate, the other half with a robot whose face and voice were driven by the same confederate through a virtual reality telepresence interface. Across the three conversations the partner behaved at three planned levels of engagement (engaged communicator, active listener, passive listener), and each conversation was about an ethical dilemma. The study came from KTH Royal Institute of Technology and Stockholm University and was presented at the ACM/IEEE Human-Robot Interaction conference in 2025. Structural scans went online on OpenNeuro as ds004996 in February 2024; version 2.0.0 of February 2025 added the functional and behavioral data.

## Composition

The release has 50 participants: 30 in the human partner group and 20 in the robot partner group, 25 women and 25 men, all right-handed. The participants file lists ages from 19 to 39 with a mean of 26.4. Every participant has one T1-weighted scan and three functional runs, one per engagement level. The source data folder adds eye tracking, raw and denoised audio of both speakers, speech timestamps and video of the partner. The paper reports that six recruited participants were dropped for technical problems or language and replaced.

## Acquisition

Scans were acquired at the Stockholm University Brain Imaging Centre on a 3 T Siemens Prisma with a 20-channel head and neck coil. The T1-weighted scan is an MPRAGE with 1.2 mm voxels. Functional runs use multiband echo planar imaging with a repetition time of 1.2 s and 2.5 mm slices, and each run lasts 11 min 45 s including fixation periods. Anatomical images were defaced.

## Annotations

Each run has an events file with the conversation timing, and the participants file gives the engagement level of each run. There are no image labels.

## Known limitations

Run 3 of sub-16 holds only three minutes of conversation, and eye tracking is missing for ten participants. The README says preprocessed data and questionnaire results are still to be uploaded. Subject numbers have gaps because five excluded participants were removed.
