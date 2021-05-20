export const menuItems = [
         {
           id: 1,
           label: 'menuitems.menu.text',
           isTitle: true,
         },
         {
           id: 2,
           label: 'menuitems.dashboard.text',
           icon: 'ri-dashboard-line',           
           link: '/',
         },
         {
           id: 3,
           label: 'Company Information',
           icon: 'ri-calendar-2-line',
           link: 'company-information',
         },
         {
           id: 5,
           label: 'Settings',
           icon: 'ri-store-2-line',
           subItems: [
             {
               id: 6,
               label: 'Manage Frames',
               link: 'frames',
             },
             {
               id: 7,
               label: 'Manage Mouldings',
               link: 'mouldings',
             },
           ],
         },
        //  {
        //    id: 14,
        //    label: 'Orders',
        //    icon: 'ri-mail-send-line',
        //    subItems: [
        //      {
        //        id: 8,
        //        label: 'Orders',
        //        link: 'orders',
        //      },
        //      {
        //        id: 9,
        //        label: 'Receipts',
        //        link: 'receipts',
        //      },
             
        //    ],
        //  },
         {
           id: 21,
           label: 'logout',
           icon: 'ri-shut-down-line',
           link: 'logout',
         },
       ];
