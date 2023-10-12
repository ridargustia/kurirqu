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
    menuController: "user",
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

export const genderOption = [
  {
    id: 1,
    name: 'Laki-laki',
  },
  {
    id: 2,
    name: 'Perempuan',
  }
];

export const instansiOption = [
  {
    id: 1,
    name: 'Kurirqu',
  },
  {
    id: 2,
    name: 'Ekspekdisiqu',
  }
];

export const cabangOption = [
  {
    id: 1,
    name: 'Paseraman',
  },
  {
    id: 2,
    name: 'Angekokap',
  }
];

export const usertypeOption = [
  {
    id: 1,
    name: 'Masteradmin',
  },
  {
    id: 2,
    name: 'Superadmin',
  },
  {
    id: 3,
    name: 'Administrator',
  },
  {
    id: 5,
    name: 'Grandadmin',
  },
];

// Menu AddUser
export const inputPersonalFormStructure = [
  {
    id: 1,
    name: "fullName",
    type: "text",
    placeholder: "Masukkan nama lengkap anda",
    label: "Nama Lengkap",
    errorMessage: "Minimal 3 karakter dan tidak menggunakan karakter spesial",
    required: true,
  },
  {
    id: 2,
    name: "gender",
    type: "dropdown",
    placeholder: "",
    label: "Jenis Kelamin",
    errorMessage: "",
    dataOption: genderOption,
    required: true,
  },
  {
    id: 3,
    name: "phone",
    type: "text",
    placeholder: "Masukkan no telepon anda",
    label: "No Telepon / HP / Whatsapp",
    errorMessage: "No telepon minimal 11 karakter dan berupa angka",
    required: true,
  },
  {
    id: 4,
    name: "address",
    type: "text",
    placeholder: "Masukkan alamat lengkap anda",
    label: "Alamat Lengkap",
    errorMessage: "",
    required: false,
  },
];

export const inputAuthFormStructure = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Masukkan username anda",
    label: "Username",
    errorMessage: "Username tidak menggunakan spasi, tidak menggunakan huruf kapital, minimal 3 karakter dan tidak menggunakan karakter spesial",
    required: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Masukkan email anda",
    label: "Email",
    errorMessage: "Harus menggunakan standar penulisan email",
    required: true,
  },
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Masukkan password anda",
    label: "Password",
    errorMessage: "Minimal password 8 karakter, mengandung minimal 1 huruf, 1 angka dan 1 karakter spesial",
    required: true,
  },
  {
    id: 4,
    name: "confirmPassword",
    type: "password",
    placeholder: "Konfirmasi password anda",
    label: "Konfirmasi Password",
    errorMessage: "Konfirmasi password harus sama",
    required: true,
  },
  {
    id: 5,
    name: "instansiId",
    type: "dropdown",
    placeholder: "",
    label: "Instansi",
    errorMessage: "",
    dataOption: instansiOption,
    required: true,
  },
  {
    id: 6,
    name: "cabangId",
    type: "dropdown",
    placeholder: "",
    label: "Cabang",
    errorMessage: "",
    dataOption: cabangOption,
    required: true,
  },
  {
    id: 7,
    name: "usertypeId",
    type: "dropdown",
    placeholder: "",
    label: "Usertype",
    errorMessage: "",
    dataOption: usertypeOption,
    required: true,
  },
];
// Menu AddUser
