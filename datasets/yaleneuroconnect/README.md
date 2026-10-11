YaleNeuroConnect is a functional MRI study run at the Yale Magnetic Resonance Research Center between February 2018 and
May 2025. Its participants were recruited from the local community and from Yale psychiatric clinics, so the cohort
mixes people with no mental health diagnosis and people with one or several, often comorbid, diagnoses. Every
participant had two resting runs and six task runs chosen to probe separate cognitive domains, plus a long battery of
cognitive tests and symptom questionnaires. The goal is to relate functional connectivity to behavior and symptoms
across diagnostic boundaries. A medRxiv preprint from 2025 describes an earlier state of the data; the OpenNeuro
release ds007286 (snapshot 1.0.7) is the version described here.

## Composition

The release has 410 adults aged 18 to 73 (217 female, 193 male), each scanned in one session. A binary diagnosis table
flags 225 participants with at least one condition, most often a major depressive episode, an anxiety disorder,
bipolar disorder, a psychotic episode or ADHD; alcohol and substance use disorder and borderline personality disorder
are also flagged. 185 participants have no flag. Phenotype tables cover demographics, medication, a brief psychiatric
interview, mood, sleep and stress questionnaires, and cognitive tests from WAIS, WASI, D-KEFS, WRAML and others.

## Acquisition

Scans come from 3 T Siemens Prisma and Vida scanners with a 64-channel head coil. The T1-weighted image is a 1 mm
isotropic MPRAGE; T2-weighted and FLASH structural images were also acquired. Functional runs use multiband EPI at 2 mm
isotropic, TR 1000 ms and multiband factor 5. The tasks are card guessing, reading the mind in the eyes, gradual-onset
continuous performance, movie watching, n-back and stop-signal, each about six minutes long.

## Annotations

There are no image labels. Events files give trial timing, and derivatives include Shen268 and Shen368 connectivity
matrices, mean region time courses, MRIQC quality metrics and the task presentation code.

## Known limitations

- Three participants lack one functional run each. The file tree has T2-weighted images for 389 participants,
  although the README names only one participant without one.
- Diagnoses are binary flags without severity, and comorbidity is common, so diagnostic groups overlap.
- The preprint reports functional connectomes for a motion-filtered subset of 302 participants; its numbers do not
  match the current release.
- Self-identified gender and some other demographic fields are missing for part of the cohort.
