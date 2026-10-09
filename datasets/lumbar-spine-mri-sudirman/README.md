The Lumbar Spine MRI Dataset holds routine clinical lumbar spine MRI studies of 515 adults who reported back pain at Irbid Specialty Hospital in Jordan. It was assembled by Liverpool John Moores University and Universitas Multimedia Nusantara together with radiologists from the hospital, to develop automated detection of lumbar spinal stenosis. It is published on Mendeley Data under CC BY 4.0 and downloads without an account.

## Composition

The archive contains 48,345 two-dimensional DICOM slices in 558 studies of 515 patients; some patients were scanned more than once. Every patient has T1-weighted and T2-weighted series in both sagittal and axial orientation. The axial slices mostly cover the lowest three intervertebral discs, with four to five slices per disc, while the sagittal series reach at least the last seven vertebrae and the upper sacrum. A minority of studies carry further series, such as proton-density, inversion-recovery, diffusion or post-contrast sequences. In the DICOM headers, 198 patients are female and 317 male, aged 17 to 89 years (mean 41.8) at their first study.

## Acquisition

Data were collected between September 2015 and July 2016 on a single Siemens MAGNETOM ESSENZA 1.5 T scanner, with turbo spin echo sequences. Most slices are 320 x 320 pixels at 12 bits. Axial slices are 4 mm thick with 4.4 mm spacing and 0.6875 mm in-plane pixel size. The authors removed 60 of 575 collected studies that lacked the required series, were of poor quality, showed fused or destroyed vertebrae, or came from patients younger than 17.

## Annotations

The image archive itself carries no labels. Two companion releases on Mendeley Data, also under CC BY 4.0, provide them: radiologist notes on findings such as disc bulges, stenosis, Modic changes and spondylolisthesis for every patient, and ground truth label images for 1,545 axial T1-weighted slices of the last three discs. Five labellers supervised by a radiologist marked the disc, posterior element, thecal sac and the area between the anterior and posterior vertebral elements.

## Known limitations

All data come from one hospital and one scanner model, which limits variation in scanner and protocol. Studies were filtered for quality and for usable T1-T2 registration, so harder clinical cases are under-represented. Files use Siemens `.ima` naming and keep series names, so sequences have to be identified from folder names or headers.
