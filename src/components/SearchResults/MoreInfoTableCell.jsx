import * as React from 'react';
import Remove from './Remove';

export const MoreInfoTableCell = (c, i, ar)=>
<td key={i}>
  <div className= 'cell-delete'>
    <div>
      {c}
    </div>
    <Remove  item={ar} />
  </div>
</td>
