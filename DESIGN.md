# Design

Calm and dense with facts. The content is numbers and rules, so they get the space. Decoration does not.

## Tokens

All colors are tokens in `src/app.css` with light and dark values. Use them through Tailwind classes, never raw colors.

- `primary` (indigo): links, primary actions, selected filters.
- License answers use the status palette only: `good`, `mixed`, `bad`, `unknown` for icons and fills, the `*-ink` variants for text. An answer always shows an icon and a word (`Answer` component), never color alone. "Good" means friendly to the data user, so a required duty shows as a restriction.
- Charts use `series-1` to `series-8` in fixed order. Modalities have fixed slots (`modalityColor`), so MRI is the same blue on every page. Text never takes a series color.

## Components

| Need                    | Use                                                 |
| ----------------------- | --------------------------------------------------- |
| License answer          | `Answer` (value, good, optional label, compact)     |
| All rules of a license  | `LicenseRules`                                      |
| Dataset in a list       | `DatasetCard`                                       |
| Filter list with counts | `FacetGroup`                                        |
| Subject estimate        | `MatchRange`                                        |
| Bars with labels        | `charts/BarList`                                    |
| Age bins                | `charts/Columns`                                    |
| Partition such as sex   | `charts/SplitBar`                                   |
| Age by sex              | `charts/Pyramid`                                    |
| Contrast combinations   | `charts/ComboMatrix`                                |
| Page metadata           | `Seo` (title, description, canonical path, JSON-LD) |

## Rules

- Cards and panels use the `surface` utility.
- Numbers that line up use `tabular`.
- Data-driven geometry goes through CSS custom properties: `class="w-(--w)" style="--w: 40%"`.
- Every chart shows its numbers on hover or in text next to it, and names its source document and location below it.
- Check light and dark at 390 px and 1440 px before merging UI changes.
