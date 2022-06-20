import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit } from '@syncfusion/ej2-react-grids';

import { Header } from '../components';
import { ordersGrid, ordersData, contextMenuItems } from '../data/dummy';

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Filter, Page, ExcelExport, PdfExport, Edit, ContextMenu]} />
      </GridComponent>
    </div>
  )
}

export default Orders
