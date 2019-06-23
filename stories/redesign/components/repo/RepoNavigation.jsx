import * as React from 'react'

import { getTheme } from '../../helpers';
import { style } from 'typestyle';
import { px, rotate, deg } from 'csx';
import { typeToStyle } from '../../themes';
import { PageWidth } from './PageWidth';
import { RepoTitle } from './RepoTitle';
import { PrimaryTabs } from './PrimaryTabs';
import { HistoryIcon, SettingsIcon, DetailsIcon, SummaryIcon } from './Icons';

/**
 * @param {{}} props 
 */
export const RepoNavigation = (props) => getTheme(theme => {
    return <div className={style({
        backgroundColor: theme.Colors.BackgroundDim,
        paddingTop: px(28),
    })}>
        <PageWidth>
            <RepoTitle
                ownerTitle="colelawrence"
                ownerClick={() => console.log('clicked owner')}
                repoTitle="cf-player-transactions-2018"
                repoClick={() => console.log('clicked repo')}
            />
            <PrimaryTabs
                leftTabs={[{
                    title: 'Summary',
                    active: true,
                    onClick: () => console.log('open tab'),
                    iconElt: color => SummaryIcon({ color })
                }, {
                    title: 'Details',
                    active: false,
                    onClick: () => console.log('open details'),
                    iconElt: color => DetailsIcon({ color })
                }]}
                rightTabs={[{
                    title: 'History',
                    active: false,
                    onClick: () => console.log('open history'),
                    iconElt: color => HistoryIcon({ color })
                }, {
                    title: 'Settings',
                    active: false,
                    onClick: () => console.log('open settings'),
                    iconElt: color => SettingsIcon({ color })
                }]}
            />
        </PageWidth>
    </div>
})

/** @param {{ color: string }} props */
function Dash({ color }) {
    return <div
        className={style({
            background: color,
            transform: rotate(deg(15)),
            height: px(34),
            width: px(3),
            marginLeft: px(14),
            marginRight: px(14),
        })}
    />
}
