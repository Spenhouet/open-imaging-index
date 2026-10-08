LIDC-IDRI is a reference collection of thoracic CT scans with lung nodule annotations by several radiologists.
It was assembled by the Lung Image Database Consortium, started by the US National Cancer Institute, and
expanded through the Image Database Resource Initiative of the Foundation for the NIH with industry partners.
It is hosted by The Cancer Imaging Archive and remains a standard benchmark for nodule detection, segmentation
and malignancy rating.

## Composition

The database holds 1,018 CT scans from 1,010 patients: eight patients were included twice by mistake, with
scans from two time points. Both diagnostic and low-dose screening scans were accepted, with at most 3 mm
collimation and reconstruction interval. Cases were chosen to contain roughly up to six nodules between 3 and
30 mm. TCIA also distributes chest radiographs for a subset of patients (1,308 studies in total) as well as
patient- and nodule-level diagnosis data for a limited number of cases.

## Acquisition

Seven US academic centers contributed scans from routine clinical care, so scanner models and parameters vary:

| Vendor               | CT scans |
| -------------------- | -------- |
| GE (LightSpeed)      | 670      |
| Siemens              | 205      |
| Philips (Brilliance) | 74       |
| Toshiba (Aquilion)   | 69       |

Slice thickness ranges from 0.6 to 5 mm, most often 1.25 or 2.5 mm.

## Annotations

Four radiologists from different institutions read each scan in two phases. First they marked lesions
independently as nodule of at least 3 mm, nodule under 3 mm, or non-nodule of at least 3 mm. Then each reviewed
the anonymised marks of the others and gave a final opinion, without forced consensus. Nodules of 3 mm or more
were outlined slice by slice and rated for features such as subtlety, spiculation and likelihood of malignancy.
In total, 7,371 lesions were marked as a nodule by at least one reader, and 2,669 as a nodule of at least 3 mm.

## Known limitations

- No consensus ground truth: readers often disagree, and users must choose how to combine the four reads.
- Reader order in the XML files is not consistent across scans.
- Spiculation and lobulation ratings are inconsistent for about 100 early cases, and a few XML files have known
  errors listed on the TCIA page.
- Diagnosis data exist only for a small subset.
