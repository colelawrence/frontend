import * as React from 'react'

import { style } from 'typestyle';
import { px, percent } from 'csx';

/** Center and pad page content */
export const PageWidth = ({ children }) => <div className={style({
    maxWidth: px(870),
    width: percent(100),
    paddingLeft: px(10),
    paddingRight: px(10),
    marginLeft: 'auto',
    marginRight: 'auto',
})}>
    {children}
</div>
