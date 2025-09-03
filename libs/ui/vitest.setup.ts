import { expect } from 'vitest'; // Vitest의 expect
import { toHaveNoViolations } from 'jest-axe'; // 접근성 위반 매처

import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
expect.extend(toHaveNoViolations); // expect(...).toHaveNoViolations()
