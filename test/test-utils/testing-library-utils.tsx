// import { render } from '@testing-library/react';
// import AppProvider from '../../src/components/AppProvider';
// const renderWithContext = (ui: any) => render(ui, { wrapper: AppProvider });
// export * from '@testing-library/react';
// export { renderWithContext as render };

import { render, RenderResult } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, History } from 'history';
import AppProvider from '../../src/components/AppProvider';
import React from 'react';
import { MatcherFunction } from '@testing-library/react';

const renderWithContext = (ui: any) => render(ui, { wrapper: AppProvider });

export * from '@testing-library/react';
export { renderWithContext as render };

export function renderWithHistory(template: JSX.Element): RenderResult & { history: History } {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const result = render(<Router history={history}>{template}</Router>);

    return { ...result, history };
}

// withMarkup.ts

type Query = (f: MatcherFunction) => HTMLElement;
