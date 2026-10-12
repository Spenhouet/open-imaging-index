This OpenNeuro dataset holds brain MRI of 118 Polish adults who learned English (in two cases French or German) as a
second language later in life and remain dominant in their native Polish. It was shared by Łukasz Kaźmierczak, Kinga
Masłowska, Agata Wolna and Zofia Wodniecka of the Language and Bilingualism Lab to give each participant individually
defined language and multiple demand networks. The first snapshot appeared in February 2026; the current snapshot
1.1.0 dates from October 2026 and is released under CC0.

## Composition

Every participant has a T1-weighted image. All but one (sub-A60) also have BOLD runs of two functional localizers with
matching gradient echo field maps: a native-language localizer built on listening to passages of Alice in Wonderland
against degraded speech, and a spatial working memory localizer with easy and hard grids for the multiple demand
network. Most participants contributed two runs of each task. The participants table lists 87 women and 31 men, all
right-handed, aged 18 to 34 years (median 22). It also carries English proficiency scores (Cambridge General English
Test, LexTALE), a short Raven's matrices score, verbal fluency in both languages, and self-reported age of
acquisition, daily use and proficiency for up to four languages. A derivatives folder holds subject-level localizer
t-maps, group probability maps and atlas correlations, and a code folder holds the preprocessing and first-level model
scripts.

## Acquisition

According to the JSON sidecars, 76 participants (prefix A) were scanned in one session on a 3 T Siemens MAGNETOM
Prisma and 42 participants (prefix B) in two sessions on a 3 T Siemens Skyra, both with a 64-channel head and neck
coil. The T1-weighted image is a sagittal 3D MPRAGE with 0.9 mm slices (1 mm in one image). The functional runs used a CMRR
multiband EPI with TR 1.4 s, 3 mm slices and multiband factor 2; 44 subjects also have single-band reference
images.

## Known limitations

- There is no data descriptor paper. The task designs are described in two earlier papers by the same group that are
  linked from the README.
- Health status and recruitment criteria are not stated in the dataset.
- Site names in the sidecars are replaced by placeholders, so the scanning location is not documented.
- The README still gives 119 participants; one was removed in snapshot 1.1.0 for a data quality artifact.
- The sample is mostly female (87 of 118) and young.
