export const dropdownItem = [
  {
    id: 1,
    title: "Profile",
    path: "auth/profile",
    style: "fas fa-user fa-sm fa-fw mr-2 text-gray-400"
  },
  {
    id: 2,
    title: "Ubah Password",
    path: "auth/change-password",
    style: "fas fa-key fa-sm fa-fw mr-2 text-gray-400"
  },

];

export const cardItem = [
  {
    id: 1,
    title: "Earnings (Monthly)",
    style: "fas fa-calendar fa-2x text-primary",
  },
  {
    id: 2,
    title: "Sales",
    style: "fas fa-shopping-cart fa-2x text-success",
  },
  {
    id: 3,
    title: "New User",
    style: "fas fa-users fa-2x text-info",
  },
  {
    id: 4,
    title: "Pending Requests",
    style: "fas fa-comments fa-2x text-warning",
  },
];

export const menuSettingItem = [
  {
    id: 1,
    menuName: "User Management",
    menuController: "auth",
    menuFunction: "#",
    menuIcon: "fas fa-fw fa-user",
    dataTarget: "collapseUser",
    isActive: true,
    orderNo: 1,
    submenu: [
      {
        id: 1,
        submenuName: "Tambah User",
        submenuFunction: "create",
        orderNo: 1,
      },
      {
        id: 2,
        submenuName: "Data User",
        submenuFunction: "index",
        orderNo: 2,
      },
      {
        id: 3,
        submenuName: "Recycle Bin",
        submenuFunction: "deleted_list",
        orderNo: 3,
      },
    ]
  },
  {
    id: 2,
    menuName: "Edit Profile",
    menuController: "auth",
    menuFunction: "update-profile",
    menuIcon: "fas fa-fw fa-user",
    dataTarget: "collapseUpdateProfile",
    isActive: true,
    orderNo: 2,
    submenu: []
  },
  {
    id: 3,
    menuName: "Ubah Password",
    menuController: "auth",
    menuFunction: "change-password",
    menuIcon: "fas fa-fw fa-key",
    dataTarget: "collapseChangePassword",
    isActive: true,
    orderNo: 3,
    submenu: [],
  },
];
