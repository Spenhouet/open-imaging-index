Brain Before Stroke (BBS) is a prospective single-centre cohort from Bordeaux University Hospital, France, that
followed consecutive patients with a first-ever ischemic stroke to study how imaging relates to recovery. It ran from
June 2012 to February 2015. Its data have been used to test whether small vessel disease markers improve outcome
prediction (Coutureau et al. 2021), to train and test the SHIVA-CMB microbleed detector (Tsuchida et al. 2024) and for
the NeuralCup outcome prediction benchmark (Matsulevits et al. 2024).

## Composition

428 adults over 18 with a minor to severe supratentorial infarct (NIHSS 1 to 25) and no prior disabling stroke,
dementia or psychiatric disorder other than major depression. Mean age 67.5 years (SD 14.1) and 63.5% men. Patients were assessed for motor,
cognitive and psychological outcomes, with the NeuralCup work using the 1-year scores (Fugl-Meyer, MoCA, Isaacs set,
HADS). Of 361 patients with a rated SWAN scan, 92 had at least one microbleed.

## Acquisition

MRI was done 24 to 72 hours after onset on a 3 T GE Discovery MR750w, with a second visit at one year. Sequences
named in the sources are DWI, 3D FLAIR, 3D T1, SWAN (TR 60 ms, TE 24.3 ms, 0.43 x 0.43 x 1.6 mm) and a 2D multi-echo
T2*-GRE (TE 21.7 ms echo used in SHIVA-CMB, 0.47 x 0.47 x 4.5 mm).

## Annotations

Infarct masks were delineated manually. For SHIVA-CMB, 162 patients (all 92 with microbleeds and 70 random ones
without) received microbleed masks on SWAN, made semi-automatically for training and manually for the test set by two
expert raters, then projected to the T2*-GRE, where the test-set masks were reviewed. Coutureau et al. quantified white matter hyperintensities,
lacunes, perivascular spaces, microbleeds and atrophy.

## Known limitations

- Not public. Requests go to the PI and no data use terms are published.
- One centre and one scanner model.
- Counts per sequence are known only for the subsets used in each paper.
- The microbleed masks and infarct masks were made for specific studies; whether they come with a data request is not
  stated.
