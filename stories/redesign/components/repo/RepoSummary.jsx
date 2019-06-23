import * as React from 'react'

import { getTheme } from '../../helpers';
import { style } from 'typestyle';
import { px } from 'csx';
import { typeToStyle } from '../../themes';
import { PageWidth } from './PageWidth';

/**
 * @param {{}} props 
 */
export const RepoSummary = (props) => getTheme(theme => {
    return <div className={style({
        backgroundColor: theme.Colors.Background,
        paddingTop: px(10),
    })}>
        <PageWidth>
            <div style={{padding: px(10)}}>
                <H3>CFL Player Transactions 2018</H3>
                <p>Dataset of CFL player transactions</p>
            </div>
        </PageWidth>
    </div>

    function H3(props) {
        return <div className={style(typeToStyle(theme.Type.Heading3))}>{props.children}</div>
    }
})
