import {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox,
} from 'customize-cra'
import { resolve } from 'path'

module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),
  addWebpackAlias({
    'ag-grid-react$': resolve(__dirname, 'src/shared/agGridWrapper.js'),
  }),
  adjustWorkbox(wb =>
    Object.assign(wb, {
      skipWaiting: true,
      exclude: (wb.exclude || []).concat('index.html'),
    })
  )
)
