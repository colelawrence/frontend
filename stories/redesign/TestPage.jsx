/// <reference path="./themes/Theme.d.ts">
import { typeToStyle, Day } from "./themes"
import * as React from 'react'

import { style } from 'typestyle'
import { ThemeContext } from "./helpers";
import { TopBar } from "./components/TopBar.jsx";
import { RepoNavigation } from "./components/repo/RepoNavigation";
import { RepoSummary } from "./components/repo/RepoSummary";

/**
 * @param {{theme: Theme}} props
 */
export default function TestPage({ theme }) {
    const $page = style({
        backgroundColor: theme.Colors.Background,
        color: theme.Colors.Text,
    },
        typeToStyle(theme.Type.NormalText),
    );

    return <ThemeContext.Provider value={theme}>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap" rel="stylesheet"/>
        <div className={$page}>
            <Page />
        </div>
    </ThemeContext.Provider>
}

function Page() {
    return <React.Fragment>
        <TopBar />
        <div>
            <RepoNavigation/>
            <RepoSummary />
        </div>
    </React.Fragment>
}