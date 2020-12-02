import * as React from 'react';
import RemoveButton from './RemoveButton';
import MoreInfoButton from './MoreInfoButton';
import FullInfoButton from './FullInfoButton';
export const TableCellWithButtons =(c, i, ar)=>

<td key={i}>
  <div className= 'cell-delete'>
    <div>
      {c}
    </div>
    <MoreInfoButton item={ar} />
    <RemoveButton item={ar} />
    <FullInfoButton id={ar[ar.length - 1]} />
  </div>
</td>
