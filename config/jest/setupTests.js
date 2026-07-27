// import Adapter from '@cfaester/enzyme-adapter-react-18';
// import { configure } from 'enzyme';
//
// configure({ adapter: new Adapter() });

// Jest global setup (runs via `setupFilesAfterEnv`).
//
// The enzyme adapter that used to be configured here was removed: no test in the repo
// uses enzyme, and because yarn.lock is gitignored the installed `cheerio` drifted to a
// 1.x release that dropped the `lib/utils` path enzyme's bootstrap requires — which crashed
// the entire jest suite on startup. Add global test setup (e.g. `@testing-library/jest-dom`)
// here if/when it's needed.
